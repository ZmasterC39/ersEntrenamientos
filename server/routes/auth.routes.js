import { Router } from "express";
import {register, login, isAuthenticated} from "../controllers/authController.js"
const router = Router();

router.post("/register", register)
router.post("/login", login)
router.get("/dashboard", isAuthenticated)


export default router;