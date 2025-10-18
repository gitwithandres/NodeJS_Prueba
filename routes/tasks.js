import express from "express";
import user from "../models/user/user.js";
import congregacion from "../models/congregacion/congregacion.js";
import rol from "../models/rol/rol.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const users = await user.findAll();
    const congregaciones = await congregacion.findAll();
    const roles = await rol.findAll();
    res.json({ users, congregaciones, roles });
});

export default router;
