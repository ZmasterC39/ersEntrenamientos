import { Router } from "express";

import { getSesionData } from "../controllers/estudianteSesionController.js";


const router = Router();
router.get('/estudianteSesion', getSesionData)

export default router;
