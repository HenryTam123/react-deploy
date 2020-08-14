import React, { useState } from "react";
import { Link } from "react-router-dom";
import TodoListComponent from "./TodoListComponent";

const TodoList = () => {
  const [texts, setText] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const inputText = e.target.parentElement.previousSibling.value;
    setText((prev) => [...prev, inputText]);
    console.log(texts);
  };

  return (
    <div className="todoList-page">
      <Link to="/project">
        <button className="back-button">Return</button>
      </Link>
      <h2 style={{ color: "white", fontSize: "2rem" }}>Tam's To-do List</h2>
      <form className="input-form">
        <input type="text" placeholder={"Anything you want to do today"} />
        <button className="submit-btn" type="submit" onClick={handleClick}>
          <i class="fas fa-arrow-alt-circle-down fa-2x"></i>
        </button>
      </form>
      <div className="todo-container">
        {texts.map((text) => (
          <TodoListComponent text={text} />
        ))}
      </div>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
        integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
        crossorigin="anonymous"
      ></link>
    </div>
  );
};

export default TodoList;
