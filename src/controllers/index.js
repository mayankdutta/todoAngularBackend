const Todos = require("../models/index");

async function create(req, res) {
  const todo = new Todos(req.body);
  try {
    const response = await todo.save();
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "successfully created new todo",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "cannot update",
    });
  }
}

async function destroy(req, res) {
  try {
    let response = await Todos.deleteOne({ id: req.params.id });
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "successfully deleted",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "cannot update",
    });
  }
}

async function update(req, res) {
  const id = req.params.id;
  const newData = req.body;

  console.log(id, newData);
  try {
    let response = await Todos.updateOne({ id: id }, { $set: req.body });
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "successfully updated",
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "cannot update",
    });
  }
}

async function getAll(req, res) {
  try {
    const response = await Todos.find();
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "successfully created new todo",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "cannot retrieve",
    });
  }
}

module.exports = {
  create,
  destroy,
  update,
  getAll,
};
