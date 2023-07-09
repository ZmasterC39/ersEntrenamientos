import { Router } from "express";
import { getEstadoCalificacion, getEstadosCalificacion,createEstadoCalificacion , updateEstadoCalificacion, deleteEstadoCalificacion,  } from "../Controllers/estadoCalificacionControllers.js";

const router = Router();

router.get('/escalificacion', getEstadosCalificacion)
router.get('/escalificacion/:id', getEstadoCalificacion)
router.post('/escalificacion',createEstadoCalificacion)
router.put('/escalificacion/:id',updateEstadoCalificacion)
router.delete('/escalificacion/:id', deleteEstadoCalificacion);




export default router;