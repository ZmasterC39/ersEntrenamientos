
import { getData ,getDataById, createData, updateRecord ,deleteItem} from "./utils/controllers.js";

export const getInstructors = getData('instructor');
export const getInstructor = getDataById('instructor', 'id');
export const createInstructor = createData("instructor");
export const updateInstructor = updateRecord("instructor");
export const deleteInstructor = deleteItem("instructor");