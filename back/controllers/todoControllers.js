const todoModel = require("../models/todoModel");

const getTodo = async (req, res) => {
    try {
        const todoLists = await todoModel.find();
        if (!todoLists) {
            res.json({ error: "Data Not Get Check It" });
        }
        res.json(todoLists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const postTodo = async (req, res) => {
    const { title, description } = req.body;
    try {
        if (!title || !description) {
            return res.json({ error: "Fill * Required" });
        }

        const todoList = await todoModel.create({
            title,
            description,
        });

        res.json({...todoList, message: "Todo List Created" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteTodo = await todoModel.findByIdAndDelete( id );
        res.json({ message: "Deleted Success" });
    } catch (error) {
        res.json({ error: "Cannot Deleted " + error.message });
    }
};

module.exports = { getTodo, postTodo, deleteTodo };
