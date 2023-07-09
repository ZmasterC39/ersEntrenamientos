import { Router } from "express";

import { getReportData } from "../controllers/reportController.js";


const router = Router();
router.get('/reporte', getReportData)

export default router;
