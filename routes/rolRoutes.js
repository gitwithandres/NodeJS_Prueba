import express from "express";
import { createRol } from "../controllers/rolController.js";

const router = express.Router();

router.post("/createRol", createRol);

export default router;