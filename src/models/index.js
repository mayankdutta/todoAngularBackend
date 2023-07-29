const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  dueDate: Date,
  priority: String,
  status: String,
});

module.exports = mongoose.model("todos", todoSchema);
