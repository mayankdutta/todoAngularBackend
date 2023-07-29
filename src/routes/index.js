const TodoController = require("../controllers/index");

const express = require("express");
const router = express.Router();

router.post("/add", TodoController.create);
router.delete("/delete/:id", TodoController.destroy);
router.put("/update/:id", TodoController.update);
router.get("/get", TodoController.getAll);

module.exports = router;

