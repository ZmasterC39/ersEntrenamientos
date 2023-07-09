import jwt from "jsonwebtoken";
import byscript from "bcryptjs";
import { pool } from "../db.js";
import { promisify } from "util";
import dotenv from "dotenv";

dotenv.config();

//registro
export const register = async (req, res) => {
  try {
    const name = req.body.name;
    const user = req.body.user;
    const pass = req.body.pass;
    let passHash = await byscript.hash(pass, 8);

    const [result] = await pool.query(
      `INSERT INTO usuario set?`,
      { usuario: user, nombre: name, pass: passHash },
      (error, results) => {
        if (error) {
          console.log(error);
        }
      }
    );
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req, res) => {
  try {
    const usuario = req.body.user;
    const pass = req.body.pass;
    console.log(`Consultando usuario ${usuario} en la base de datos...`);
    const [result] = await pool.query(
      `SELECT * FROM usuario WHERE usuario = ?`,
      [usuario]
    );

    if (result.length == 0 || !(await byscript.compare(pass, result[0].pass))) {
      // Si los datos de inicio de sesión son inválidos, se devuelve una respuesta HTTP 401 Unauthorized
      return res.status(401).json({ message: "Invalid username or password" });
    } else {
      // Si los datos de inicio de sesión son válidos, se devuelve una respuesta HTTP 200 OK con el usuario
      const id = result[0].id;
      const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_TIME_EXPIRATION,
      });
      console.log("Token " + token + "para usuario" + usuario);
      const cookiesOptions = {
        expires: new Date(
          Date.now() + process.env.JWT_KOOKIE_EXPIRATION * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
      };
      return res.status(200).json(token);
    }
  } catch (error) {
    console.error(error);
    // Si se produce un error, se devuelve una respuesta HTTP 500 Internal Server Error con un mensaje de error
    return res
      .status(500)
      .json({ message: "An error occurred while trying to log in" });
  }
};

export const isAuthenticated = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decodificada = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );
      pool.query(
        `SELECT * FROM usuario WHERE id = ?`,
        [decodificada.id],
        (error, results) => {
          if (!results) {
            return next();
          }
          req.user = results[0];
          return next();
        }
      );
    } catch (error) {
      console.log(error);
      return next();
    }
  } else {
    res.redirect("/login");
  }
};
