import { pool } from "../db.js";

export const getReportData = async (req, res) => {
  try {
    const [result] = await pool.query(`SELECT 
    curso.C_Cod, 
    curso.C_Nombre, 
    sesion.Ses_FechaCreacion, 
    sesion.Ses_Duracion, 
    instructor.I_Nombre, 
	Estudiante.S_Fotocheck,
    Estudiante.S_ApPaterno, 
    Estudiante.S_ApMaterno, 
    Estudiante.S_Nombre, 
    sesionCalificacion.CC_Nentrada, 
    sesionCalificacion.CC_Nsalida, 
    sesionCalificacion.CC_Noral, 
    empresa.E_Nombre, 
    Estudiante.S_Area,
    Estudiante.S_Puesto,
    TipoPago.Descripcion AS TipoPagoDescripcion
FROM 
    curso
JOIN 
    sesion ON curso.id = sesion.C_id
JOIN 
    instructor ON sesion.I_id = instructor.id
JOIN 
    sesionCalificacion ON sesion.id = sesionCalificacion.Ses_id
JOIN 
    Estudiante ON sesionCalificacion.S_id = Estudiante.id
JOIN 
    empresa ON sesionCalificacion.E_id = empresa.id
JOIN 
    pago ON sesionCalificacion.id = pago.Id_SesCal
JOIN 
    TipoPago ON pago.Tip_Pago = TipoPago.id`);
    console.log(result);
    res.json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};