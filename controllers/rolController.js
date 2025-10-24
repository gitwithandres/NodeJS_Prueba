import rol from "../models/rol/rol.js";

const getRols = async (req, res) => {

}

const createRol = async (req, res) => {
  try {
    const body = req.body; // o matchedData(req) si tienes validaciones en la ruta
    const data = await rol.create(body); // create ya guarda y devuelve la instancia

    res.status(201).json({
      message: "Rol creado con éxito",
      rol: data
    });
  } catch (error) {
    console.error("Error al crear el rol:", error);
    res.status(500).json({ error: "Error al crear el rol" });
  }
};

export { 
    createRol,
    getRols
};