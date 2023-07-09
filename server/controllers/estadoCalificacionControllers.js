
import { getData ,getDataById, createData, updateRecord ,deleteItem} from "./utils/controllers.js";

export const getEstadosCalificacion = getData('estadocalificacion');
export const getEstadoCalificacion = getDataById('estadocalificacion', 'id');
export const createEstadoCalificacion = createData("estadocalificacion");
export const updateEstadoCalificacion = updateRecord("estadocalificacion");
export const deleteEstadoCalificacion = deleteItem("estadocalificacion");