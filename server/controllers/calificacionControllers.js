import {
  getData,
  getDataById,
  createData,
  updateRecord,
  deleteItem,
  createDataReturnId,
} from "./utils/controllers.js";
import { pool } from "../db.js";

export const getCalificaciones = getData("sesionCalificacion");
export const getCalificacion = getDataById("sesionCalificacion", "id");
export const createCalificacion = createDataReturnId("sesionCalificacion");
export const updateCalificacion = updateRecord("sesionCalificacion");
export const deleteCalificacion = deleteItem("sesionCalificacion");

export const getInnerCalificacion = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] =
      await pool.query(`SELECT sesioncalificacion.id, estudiante.S_Nombre, estudiante.S_ApPaterno, estudiante.S_DNI, estudiante.S_ApMaterno, 
      sesioncalificacion.CC_Nsalida, sesioncalificacion.CC_Nentrada, sesioncalificacion.CC_Noral, empresa.E_Nombre, 
      estadocalificacion.EC_Descripcion, estudiante.S_Area, estudiante.S_Puesto, estudiante.S_Fotocheck, curso.C_Nombre
  FROM sesioncalificacion
  JOIN estudiante ON sesioncalificacion.S_id = estudiante.id 
  JOIN empresa ON sesioncalificacion.E_id = empresa.id
  JOIN estadocalificacion ON sesioncalificacion.EC_id = estadocalificacion.id
  JOIN sesion ON sesioncalificacion.Ses_id = sesion.id
  JOIN curso ON sesion.C_id = curso.id
        
      WHERE Ses_id = ?
        `,
          [id]
        );
    console.log(result);
    res.json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};



