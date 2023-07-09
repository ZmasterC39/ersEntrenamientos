import { pool } from "../db.js";
import {
  getData,
  getDataById,
  createData,
  updateRecord,
  deleteItem,
} from "./utils/controllers.js";

export const getCursos = getData("curso");
export const getCurso = getDataById("curso", "id");
export const createCurso = createData("curso");
export const updateCurso = updateRecord("curso");
export const deleteCurso = deleteItem("curso");

export const getInnerEstado = async (req, res) => {
  try {
    const [result] =
      await pool.query(`Select curso.id, curso.C_Cod, curso.C_Nombre, curso.C_Duracion, curso.C_Tipo, curso.C_Costo, curso.C_Costo_Dolar, curso.C_Descripcion, estadoCurso.EC_Descripcion
        from curso JOIN estadoCurso  ON curso.EC_id = estadoCurso.id`);
    console.log(result);
    res.json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
