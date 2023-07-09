import { Router } from "express";
import { getEmpresa, getEmpresas,createEmpresa , updateEmpresa, deleteEmpresa } from "../Controllers/empresaControllers.js";

const router = Router();

router.get('/empresa', getEmpresas)
router.get('/empresa/:id', getEmpresa)
router.post('/empresa',createEmpresa)
router.put('/empresa/:id',updateEmpresa)
router.delete('/empresa/:id', deleteEmpresa);

export default router;