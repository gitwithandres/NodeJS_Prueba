import express from "express";
import { createRol, getRoles } from "../controllers/rolController.js";

const router = express.Router();

router.post("/createRol", createRol);
router.get("/getRoles", getRoles);

export default router;