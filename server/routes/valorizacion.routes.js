import { Router } from "express";

import { getValorizacionData } from "../controllers/valorizacionControllers.js";


const router = Router();
router.get('/valorizacion', getValorizacionData)

export default router;
