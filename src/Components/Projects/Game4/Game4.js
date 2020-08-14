import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Game4 = () => {
  const wrongs = [];
  const words = ["apple", "gorgeous", "fantastic", "faker", "teleport"];
  const num = Math.floor(Math.random() * words.length);
  var currentWord = words[num];
  var count = 0;
  var correct = 0;

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const wordDisplay = document.querySelectorAll(".underline");
      const wrongDisplay = document.getElementsByClassName("wrong-letters")[0];
      const figure = document.getElementsByClassName("figure-part");

      if (e.keyCode >= 65 && e.keyCode <= 90 && count < 6) {
        for (let i = 0; i < currentWord.length; i++) {
          if (currentWord[i] === e.key) {
            wordDisplay[i].innerHTML = currentWord[i];
          }
        }
        if (currentWord.includes(e.key) === false) {
          wrongDisplay.innerHTML += e.key + " ";
          figure[count].style.display = "block";
          count++;
        }
        if (count === 6) {
          const result = document.getElementsByClassName("game-result-lose")[0];
          result.classList.remove("hide");
        }
        correct = 0;
        for (let i = 0; i < currentWord.length; i++) {
          if (wordDisplay[i].innerHTML.indexOf(currentWord[i]) !== -1) {
            correct++;
          }
        }
        if (correct === currentWord.length) {
          const result = document.getElementsByClassName("game-result-win")[0];
          result.classList.remove("hide");
        }
      }
    });
  }, []);

  return (
    <div className="game4-page">
      <Link to="/project">
        <button className="back-button">Return</button>
      </Link>
      <h2>Hangman</h2>
      <h4>Find the hidden word- Enter some letters</h4>
      <h4 className="wrong-letters">
        Wrong Letters: {wrongs.map((wrong) => wrong + " ")}
      </h4>
      <svg height="250" width="200" className="figure-container">
        <line x1="60" y1="20" x2="140" y2="20"></line>
        <line x1="140" y1="20" x2="140" y2="50"></line>
        <line x1="60" y1="20" x2="60" y2="230"></line>
        <line x1="20" y1="230" x2="100" y2="230"></line>

        <circle
          cx="140"
          cy="70"
          r="20"
          className="figure-part"
          style={{ display: "none" }}
        ></circle>

        <line
          x1="140"
          y1="90"
          x2="140"
          y2="150"
          className="figure-part"
          style={{ display: "none" }}
        ></line>

        <line
          x1="140"
          y1="120"
          x2="120"
          y2="100"
          className="figure-part"
          style={{ display: "none" }}
        ></line>

        <line
          x1="140"
          y1="120"
          x2="160"
          y2="100"
          className="figure-part"
          style={{ display: "none" }}
        ></line>
        <line
          x1="140"
          y1="150"
          x2="120"
          y2="180"
          className="figure-part"
          style={{ display: "none" }}
        ></line>
        <line
          x1="140"
          y1="150"
          x2="160"
          y2="180"
          className="figure-part"
          style={{ display: "none" }}
        ></line>
        <line
          x1="140"
          y1="150"
          x2="120"
          y2="180"
          className="figure-part"
          style={{ display: "none" }}
        ></line>
        <line
          x1="140"
          y1="150"
          x2="160"
          y2="180"
          className="figure-part"
          style={{ display: "none" }}
        ></line>
      </svg>
      <div className="word-container">
        {[...currentWord].map((letter) => (
          <span className="underline"></span>
        ))}
      </div>
      <div className="game-result-win hide">
        <h2>You Win</h2>
      </div>
      <div className="game-result-lose hide">
        <h2>You lost</h2>
      </div>
    </div>
  );
};

export default Game4;
