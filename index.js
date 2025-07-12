require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());

const taskRoutes = require("./routes/tasks");
app.use("/tasks", taskRoutes);

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((error) => {
    console.error("Error conectando a MongoDB:", error);
  });

// Ruta base de prueba
app.get("/", (req, res) => {
  res.send("API funcionando");
});

//probando error
app.get("/error", (req, res, next) => {
  const error = new Error("Esto es un error de prueba");
  next(error);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
