import { Router } from "express";
import {
  getCalificaciones,
  getCalificacion,
  createCalificacion,
  updateCalificacion,
  deleteCalificacion,
  getInnerCalificacion,
} from "../controllers/calificacionControllers.js";

const router = Router();

router.get("/calificacion", getCalificaciones);
router.get("/calificacion/:id", getCalificacion);
router.post("/calificacion", createCalificacion);
router.put("/calificacion/:id", updateCalificacion);
router.delete("/calificacion/:id", deleteCalificacion);
router.get("/calificacioninner/:id", getInnerCalificacion);

export default router;
