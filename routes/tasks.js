import express from "express";
import user from "../models/user/user.js";
import congregacion from "../models/congregacion/congregacion.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const users = await user.findAll();
    const congregaciones = await congregacion.findAll();
    res.json({ users, congregaciones });
});

export default router;
