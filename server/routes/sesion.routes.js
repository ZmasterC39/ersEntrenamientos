import { Router } from "express";
import {
  getSesion,
  getSesions,
  createSesion,
  updateSesion,
  deleteSesion,
  getInnerInstructorCurso,
  getInnerSesionById,
  getsesionCursoid
} from "../controllers/sesionControllers.js";

const router = Router();

router.get("/sesion", getSesions);
router.get("/sesion/:id", getSesion);
router.post("/sesion", createSesion);
router.put("/sesion/:id", updateSesion);
router.delete("/sesion/:id", deleteSesion);

router.get("/sesionInner", getInnerInstructorCurso);
router.get('/sesiones/:id', getInnerSesionById);
router.get('/sesionescurso/:id',getsesionCursoid);
export default router;
