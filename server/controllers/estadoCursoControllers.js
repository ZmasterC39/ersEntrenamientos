
import { getData ,getDataById, createData, updateRecord ,deleteItem} from "./utils/controllers.js";

export const getEstadosCurso = getData('estadoCurso');
export const getEstadoCurso = getDataById('estadoCurso', 'id');
export const createEstadoCurso = createData("estadoCurso");
export const updateEstadoCurso = updateRecord("estadoCurso");
export const deleteEstadoCurso = deleteItem("estadoCurso");
