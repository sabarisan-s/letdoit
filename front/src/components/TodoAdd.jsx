import React from "react";

const TodoAdd = ({ todoList, setTodoList, handleSubmit }) => {
    return (
        <>
            <h1 className="text-center m-3">Let's Do it!</h1>
            <div className="row container">
                <div className="input-group my-3 col-lg">
                    <label
                        htmlFor="title"
                        className="input-group-text text-bg-secondary"
                    >
                        Title
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        value={todoList.title}
                        onChange={(e) =>
                            setTodoList({ ...todoList, title: e.target.value })
                        }
                    />
                </div>
                <div className="input-group ms-3 my-3 col-lg">
                    <input
                        className="form-control"
                        type="text"
                        name="description"
                        placeholder="Enter Description"
                        value={todoList.description}
                        onChange={(e) =>
                            setTodoList({
                                ...todoList,
                                description: e.target.value,
                            })
                        }
                    />
                    <label
                        htmlFor="description"
                        className="input-group-text text-bg-secondary"
                    >
                        Description
                    </label>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-primary my-3 "
                >
                   + ADD
                </button>
            </div>
        </>
    );
};

export default TodoAdd;
