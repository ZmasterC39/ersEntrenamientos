import { Router } from "express";
import {
  getCursos,
  getCurso,
  createCurso,
  updateCurso,
  deleteCurso,
  getInnerEstado,
} from "../controllers/cursoControllers.js";

const router = Router();

router.get("/curso", getCursos);
router.get("/curso/:id", getCurso);
router.post("/curso", createCurso);
router.put("/curso/:id", updateCurso);
router.delete("/curso/:id", deleteCurso);

router.get("/coursesInner", getInnerEstado);
export default router;
