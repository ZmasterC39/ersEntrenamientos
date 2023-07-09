
import { getData ,getDataById, createData, updateRecord ,deleteItem} from "./utils/controllers.js";

export const getEmpresas = getData('empresa');
export const getEmpresa = getDataById('empresa', 'id');
export const createEmpresa = createData("empresa");
export const updateEmpresa = updateRecord("empresa");
export const deleteEmpresa = deleteItem("empresa");