import { Router } from "express";
import { getPagos, getPago , createPago , updatePago, deletePago, actualizarPago } from "../Controllers/pagosControllers.js";

const router = Router();

router.get('/pago', getPagos)
router.get('/pago/:id', getPago)
router.post('/pago',createPago)
//router.put('/pago/:id',updatePago)
router.delete('/pago/:id', deletePago);
router.put("/pago/:id", actualizarPago)

export default router;