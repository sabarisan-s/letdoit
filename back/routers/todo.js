const express = require("express");
const router = express.Router();
const {
    getTodo,
    postTodo,
    deleteTodo,
} = require("../controllers/todoControllers");

router.route("/get").get(getTodo);
router.route("/post").post(postTodo);
router.route("/delete/:id").delete(deleteTodo);

module.exports = router;
