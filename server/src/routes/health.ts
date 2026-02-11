import { Router } from "express";
import { healthConfirm } from "../http/controllers/health.controller";


const router = Router();

router.get('/check', healthConfirm )

export default router;