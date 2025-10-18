import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import taskRoutes from "./routes/tasks.js";
import errorHandler from "./middlewares/errorHandler.js";

//Importacion de routes de rol
import rolRoutes from "./routes/rolRoutes.js";

dotenv.config({ path: ".env" });

// Crear app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Aqui van las rutas donde creamos las tablas
app.use("/tasks", taskRoutes);
app.use("/rol", rolRoutes);

// 🔹 Conexión a MySQL
try {
  await db.authenticate();
  console.log("Conexión a MySQL exitosa");

  // Si quieres crear tablas automáticamente:
  await db.sync();
  console.log("Tablas sincronizadas");
} catch (error) {
  console.error("Error conectando a MySQL:", error);
}

// Ruta base
app.get("/", (req, res) => {
  res.send("API funcionando con MySQL");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
