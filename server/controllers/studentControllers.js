import { pool } from "../db.js";
import {
  getData,
  getDataById,
  createData,
  updateRecord,
  deleteItem,
} from "./utils/controllers.js";

export const getStudents = getData("estudiante");
export const getStudent = getDataById("estudiante", "id");
export const createStudent = createData("estudiante");
export const updateStudent = updateRecord("estudiante");
export const deleteStudent = deleteItem("estudiante");


export const buscarEstudiantePorDNIyNombre = async (req, res) => {
  const { S_DNI, S_Nombre } = req.query;
  try {
    
    const [result] = await pool.query(
      `SELECT id FROM estudiante WHERE S_DNI = ? AND S_Nombre = ?`,
      [S_DNI, S_Nombre]
    );
    
    if (result) {
      res.json(result);
    } else {
      res.json(-1);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar estudiante' });
  }
};




