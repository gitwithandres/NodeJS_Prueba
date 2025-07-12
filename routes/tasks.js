const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const validateObjectId = require("../middlewares/validateObjectId");

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", validateObjectId, getTaskById);
router.put("/:id", validateObjectId, updateTask);
router.delete("/:id", validateObjectId, deleteTask);

module.exports = router;
