import React from "react";

const TodoLists = ({ getList, handleDelete }) => {
    return (
        <>
            <div className="card border-secondary bg-light my-4">
                <div className="card-body" key={getList._id}>
                    <div className="card-title">
                        <p>{getList.title}</p>
                    </div>
                    <div className="card-text">
                        <p>{getList.description}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <button
                            onClick={() => handleDelete(getList)}
                            className="
											btn btn-danger"
                        >
                            delete
                        </button>
                        <p>Create At : {getList.createdAt.split("T", 1)}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoLists;
