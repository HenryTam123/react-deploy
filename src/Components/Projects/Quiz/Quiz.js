import React, { useState } from "react";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    "Which one is the cutest",
    "Who spend the most time playing LOL",
    "Who has the most number of female friends",
    "Who is toxic L",
    "Who is the most dai jack",
  ];

  const availableAnswers = [
    ["Teemo", "Yuumi", "Poro", "Urgot"],
    ["Tam", "Edwin", "Jwoo", "Kaichun"],
    ["Kaichun", "Wiseman", "Tam", "Edwin"],
    ["Wiseman", "Wyllie", "Kaichun", "Tam"],
    ["Wyllie", "Hi258", "Kaichun", "Jacky"],
  ];

  const correctAnswers = ["Urgot", "Edwin", "Kaichun", "Tam", "Jacky"];
  const handleClick = (e) => {
    if (e.target.classList[0] === "quiz-prev" && currentQuestion - 1 > -1) {
      setCurrentQuestion(currentQuestion - 1);
    }
    if (
      e.target.classList[0] === "quiz-next" &&
      currentQuestion + 1 < questions.length
    ) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("quiz-option")) {
      if (e.target.classList.contains("chosen")) {
        e.target.classList.remove("chosen");
        e.target.children[0].classList.remove("chosen2");
      } else {
        const otherOptions = e.target.parentElement.children;
        for (var i = 0; i < 4; i++) {
          if (otherOptions[i].classList.contains("chosen")) {
            otherOptions[i].classList.remove("chosen");
            e.target.children[0].classList.remove("chosen2");
          }
        }
        e.target.classList.add("chosen");
        e.target.children[0].classList.add("chosen2");
      }
      console.log(e.target.children[0].classList);
    }
  };

  return (
    <div className="quiz-page">
      <Link to="/project">
        <button className="back-button">Return</button>
      </Link>
      <h2>Tam's Quiz App</h2>
      <section className="quiz-form">
        {<h2>{questions[currentQuestion] + ` (${currentQuestion + 1}/5) `}</h2>}
        {
          <form className="option-container">
            <button className="quiz-option" onClick={handleClick2}>
              {availableAnswers[currentQuestion][0]}
              {availableAnswers[currentQuestion][0] ===
              correctAnswers[currentQuestion] ? (
                <i class="fas fa-check"></i>
              ) : (
                <i class="fas fa-times"></i>
              )}
            </button>
            <button className="quiz-option" onClick={handleClick2}>
              {availableAnswers[currentQuestion][1]}
              {availableAnswers[currentQuestion][1] ===
              correctAnswers[currentQuestion] ? (
                <i class="fas fa-check"></i>
              ) : (
                <i class="fas fa-times"></i>
              )}
            </button>
            <button className="quiz-option" onClick={handleClick2}>
              {availableAnswers[currentQuestion][2]}
              {availableAnswers[currentQuestion][2] ===
              correctAnswers[currentQuestion] ? (
                <i class="fas fa-check"></i>
              ) : (
                <i class="fas fa-times"></i>
              )}
            </button>
            <button className="quiz-option" onClick={handleClick2}>
              {availableAnswers[currentQuestion][3]}
              {availableAnswers[currentQuestion][3] ===
              correctAnswers[currentQuestion] ? (
                <i class="fas fa-check"></i>
              ) : (
                <i class="fas fa-times"></i>
              )}
            </button>
          </form>
        }
        <button className="quiz-prev" onClick={handleClick}>
          Previous Question
        </button>
        <button className="quiz-next" onClick={handleClick}>
          Next Question
        </button>
      </section>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
        integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
        crossorigin="anonymous"
      ></link>
    </div>
  );
};

export default Quiz;
