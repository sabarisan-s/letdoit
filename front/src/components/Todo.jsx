import React, { useEffect, useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoLists from "./TodoLists";
import axios from "axios";
import toast from "react-hot-toast";

const Todo = () => {
    const [todoList, setTodoList] = useState({
        title: "",
        description: "",
    });

    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await axios.get("/get");
            setTodo(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSubmit = async () => {
        const { title, description } = todoList;
        try {
            const { data } = await axios.post("/post", {
                title,
                description,
            });
            console.log(data);
            if (data.error) {
                toast.error(data.error);
            } else {
                setTodo([...todo, { ...data._doc }]);
                toast.success(data.message);
            }
            setTodoList({
                title: "",
                description: "",
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleDelete = async (item) => {
        if (confirm("will you delete permanently ")) {
            axios
                .delete(`/delete/${item._id}`)
                .then(({ data }) => {
                    console.log(data);
                    const balanceItem = todo.filter(
                        (todoItem) => item._id !== todoItem._id
                    );
                    setTodo(balanceItem);
                    if (data.message) {
                        toast.success(data.message);
                    }
                    if (data.error) {
                        toast.error(data.error);
                    }
                })
                .catch((e) => {
                    console.log(e.message);
                });
        }
    };

    return (
        <>
            <TodoAdd
                todoList={todoList}
                setTodoList={setTodoList}
                handleSubmit={handleSubmit}
            />

            {todo.map((getList) => (
                <TodoLists
                    key={getList._id}
                    getList={getList}
                    handleDelete={handleDelete}
                />
            ))}
        </>
    );
};

export default Todo;
