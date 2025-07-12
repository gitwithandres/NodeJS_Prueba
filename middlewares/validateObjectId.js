const mongoose = require("mongoose");

function validateObjectId(req, res, next) {
  const isValid = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!isValid) {
    return res.status(400).json({ error: "ID no válido" });
  }

  next();
}

module.exports = validateObjectId;
