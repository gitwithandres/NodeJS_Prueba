import express from "express";
import { createRol, getRols } from "../controllers/rolController.js";

const router = express.Router();

router.post("/createRol", createRol);
router.get("/getRols", getRols);

export default router;