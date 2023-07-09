import { pool } from "../db.js";
import {
  getData,
  getDataById,
  createData,
  updateRecord,
  deleteItem,
} from "./utils/controllers.js";

export const getPagos = getData("pago");
export const getPago = getDataById("pago", "id");
export const createPago = createData("pago");
export const updatePago = updateRecord("pago");
export const deletePago = deleteItem("pago");

export const actualizarPago = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query(`UPDATE pago SET ? WHERE Id_SesCal = ?`, [
      req.body,
      id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
