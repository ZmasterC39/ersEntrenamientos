import { Router } from "express";
import { getInstructor, getInstructors,createInstructor , updateInstructor, deleteInstructor } from "../Controllers/instructorControllers.js";

const router = Router();

router.get('/instructor', getInstructors)
router.get('/instructor/:id', getInstructor)
router.post('/instructor',createInstructor)
router.put('/instructor/:id',updateInstructor)
router.delete('/instructor/:id', deleteInstructor);

export default router;
