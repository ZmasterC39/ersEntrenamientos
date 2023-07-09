import { Router } from "express";
import {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  buscarEstudiantePorDNIyNombre,
} from "../Controllers/studentControllers.js";

const router = Router();

router.get("/student", getStudents);
router.get("/student/:id", getStudent);
router.post("/student", createStudent);
router.put("/student/:id", updateStudent);
router.delete("/student/:id", deleteStudent);
router.get('/buscarEstudiante', buscarEstudiantePorDNIyNombre);
export default router;
