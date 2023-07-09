import { pool } from "../db.js";
import {
  getData,
  getDataById,
  createData,
  updateRecord,
  deleteItem,
} from "./utils/controllers.js";

export const getSesions = getData("sesion");
export const getSesion = getDataById("sesion", "id");
export const createSesion = createData("sesion");
export const updateSesion = updateRecord("sesion");
export const deleteSesion = deleteItem("sesion");

export const getInnerInstructorCurso = async (req, res) => {
  try {
    const [result] =
      await pool.query(`SELECT sesion.id, curso.C_Nombre as curso, DATE_FORMAT(sesion.Ses_Fecha, '%Y-%m-%d') AS Ses_Fecha,  sesion.Ses_Observacion, sesion.Ses_Lugar, sesion.Ses_Duracion,  CONCAT(instructor.I_Nombre, ' ', instructor.I_ApPaterno) AS instructor
        FROM sesion 
        JOIN instructor ON sesion.I_id = instructor.id 
        JOIN curso ON sesion.C_id = curso.id
        ORDER BY id DESC;`);
    console.log(result);
    res.json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};


export const getInnerSesionById = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await pool.query(
      `SELECT sesion.id, curso.C_Nombre as C_Nombre, sesion.Ses_Fecha, concat(instructor.I_Nombre, " ", instructor.I_ApPaterno, " ", instructor.I_ApMaterno ) AS I_Nombre
      FROM sesion
      JOIN instructor ON sesion.I_id = instructor.id
      JOIN curso ON sesion.C_id = curso.id
      WHERE sesion.id = ?
    `,
      [id]
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getsesionCursoid = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] =
      await pool.query(`SELECT 
      sesion.id, 
      DATE_FORMAT(sesion.Ses_Fecha, '%Y-%m-%d') AS Ses_Fecha, 
      Ses_Lugar,
      Ses_Duracion, 
      CONCAT(instructor.I_Nombre, ' ', instructor.I_ApPaterno) AS instructor,
      Ses_Observacion
      from  sesion
      JOIN instructor ON sesion.I_id = instructor.id 
      WHERE C_id = ?
      AND Ses_Fecha >= DATE_SUB(CURDATE(), INTERVAL 10 DAY)
      ORDER BY id DESC
        `,
          [id]
        );
    console.log(result);
    res.json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};