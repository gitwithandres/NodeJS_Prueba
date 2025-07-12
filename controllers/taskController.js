const Task = require("../models/Task");

// Crear una tarea
exports.createTask = async (req, res, next) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

// Listar todas las tareas
exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// Obtener una tarea por ID
exports.getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: "Tarea no encontrada" });
    res.json(task);
  } catch (error) {
    next(error);
  }
};

// Actualizar una tarea
exports.updateTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) return res.status(404).json({ error: "Tarea no encontrada" });
    res.json(task);
  } catch (error) {
    next(error);
  }
};

// Eliminar una tarea
exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: "Tarea no encontrada" });
    res.json({ message: "Tarea eliminada" });
  } catch (error) {
    next(error);
  }
};
