import { matchedData } from "express-validator";
import rol from "../models/rol/rol.js";

const createRol = (req, res) => {
    try {
        const body = req;
        const data = rol.create(body);

        
        res.status(201).json({
            message: "Rol creado con éxito",
            rol: data
        });
        console.log(data)

    } catch (error) {
        console.error("Error al crear el rol:", error);
        res.status(500).json({ error: "Error al crear el rol" });
    }
};

export { createRol };