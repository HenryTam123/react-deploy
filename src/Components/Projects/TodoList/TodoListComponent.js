import React from "react";

const TodoListComponent = ({ text }) => {
  const handleClick1 = (e) => {
    const todo = e.target.parentElement;
    console.log(todo);
    if (todo.classList.contains("completed") === false) {
      todo.classList.add("completed");
    } else {
      todo.classList.remove("completed");
    }
  };

  const handleClick2 = (e) => {
    const todo = e.target.parentElement;
    if (todo.classList.contains("deleted") === false) {
      todo.classList.add("deleted");
    } else {
      todo.classList.remove("deleted");
    }
  };

  return (
    <div>
      <div className="todo">
        {text}
        <button className="btn1" onClick={handleClick1}>
          <i className="fas fa-check"></i>
        </button>
        <button className="btn2" onClick={handleClick2}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoListComponent;
