import { Router } from "express";
import { getEstadoCurso, getEstadosCurso,createEstadoCurso , updateEstadoCurso, deleteEstadoCurso } from "../Controllers/estadoCursoControllers.js";

const router = Router();

router.get('/estado', getEstadosCurso)
router.get('/estado/:id', getEstadoCurso)
router.post('/estado',createEstadoCurso)
router.put('/estado/:id',updateEstadoCurso)
router.delete('/estado/:id', deleteEstadoCurso);

export default router;