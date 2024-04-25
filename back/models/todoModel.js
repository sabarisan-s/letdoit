const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
});

const todoModel = mongoose.model("todo", todoSchema);

module.exports = todoModel;
