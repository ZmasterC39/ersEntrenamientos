import { pool } from "../db.js";

export const getValorizacionData = async (req, res) => {
  try {
    const [result] = await pool.query(`SELECT curso.C_Nombre, sesion.Ses_Fecha, Estudiante.S_Fotocheck, Estudiante.S_DNI, Estudiante.S_Nombre, 
    Estudiante.S_ApPaterno, Estudiante.S_ApMaterno, curso.C_Duracion, sesionCalificacion.CC_Nentrada, 
    sesionCalificacion.CC_Nsalida, sesionCalificacion.CC_Noral, empresa.E_Nombre, curso.C_Costo
    FROM sesionCalificacion
    INNER JOIN sesion ON sesionCalificacion.Ses_id = sesion.id
    INNER JOIN Estudiante ON sesionCalificacion.S_id = Estudiante.id
    INNER JOIN curso ON sesion.C_id = curso.id
    INNER JOIN empresa ON sesionCalificacion.E_id = empresa.id;`);
    console.log(result);
    res.json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};