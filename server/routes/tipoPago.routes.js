import { Router } from "express";
import { getTipoPago, getTiposPago,createTipoPago , updateTipoPago, deleteTipoPago } from "../Controllers/tipoPagoControllers.js";

const router = Router();

router.get('/tipopago', getTiposPago)
router.get('/tipopago/:id', getTipoPago)
router.post('/tipopago',createTipoPago)
router.put('/tipopago/:id',updateTipoPago)
router.delete('/tipopago/:id', deleteTipoPago);

export default router;