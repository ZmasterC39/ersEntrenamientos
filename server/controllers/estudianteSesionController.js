import { pool } from "../db.js";

export const getSesionData = async (req, res) => {
  try {
    const [result] =
      await pool.query(`SELECT estudiante.S_Nombre, estudiante.S_ApPaterno, estudiante.S_ApMaterno,
    sesion.id AS Sesion_ID, empresa.E_Nombre, curso.C_Nombre,
    sesioncalificacion.CC_Nentrada, sesioncalificacion.CC_Nsalida, sesioncalificacion.CC_Noral,
    empresa.E_Ruc 
FROM estudiante
JOIN sesioncalificacion ON estudiante.id = sesioncalificacion.S_id
JOIN sesion ON sesioncalificacion.Ses_id = sesion.id
JOIN empresa ON sesioncalificacion.E_id = empresa.id
JOIN curso ON sesion.C_id = curso.id;`);
    console.log(result);
    res.json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
