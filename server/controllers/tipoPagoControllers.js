
import { getData ,getDataById, createData, updateRecord ,deleteItem} from "./utils/controllers.js";

export const getTiposPago = getData('tipoPago');
export const getTipoPago = getDataById('tipoPago', 'id');
export const createTipoPago = createData("tipoPago");
export const updateTipoPago = updateRecord("tipoPago");
export const deleteTipoPago = deleteItem("tipoPago");
