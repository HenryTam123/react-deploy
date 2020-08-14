import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hug from "./hug.png";

const Game = () => {
  const [position, setPosition] = useState(["", ""]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [difficulty, setDifficulty] = useState("insane");
  const [speed, setSpeed] = useState(0);

  const handleChange = (e) => {
    setPosition([e.clientX, e.clientY]);
  };

  const settings = (difficulty) => {
    if (difficulty === "easy") {
      setSpeed(1000);
    } else if (difficulty === "medium") {
      setSpeed(700);
    } else if (difficulty === "hard") {
      setSpeed(400);
    } else if (difficulty === "insane") {
      setSpeed(100);
    }
  };

  const generateRandomEnemy = () => {
    const page = document.getElementsByClassName("game-page")[0];
    const enemy = document.createElement("div");
    const num = Math.floor(Math.random() * 4);
    const maxHeight = window.innerHeight;
    const maxWidth = window.innerWidth;

    if (num === 0) {
      enemy.classList.add("top-rectangle");
      enemy.style.height = "100px";
      enemy.style.width = "50px";
      enemy.style.top = "-100px";
      enemy.style.left = Math.floor(Math.random() * maxWidth) + "px";
    } else if (num === 1) {
      enemy.classList.add("bottom-rectangle");
      enemy.style.height = "100px";
      enemy.style.width = "50px";
      enemy.style.top = "300x";
      enemy.style.left = Math.floor(Math.random() * maxWidth) + "px";
      page.appendChild(enemy);
    } else if (num === 2) {
      enemy.classList.add("left-rectangle");
      enemy.style.height = "50px";
      enemy.style.width = "100px";
      enemy.style.top = Math.floor(Math.random() * maxHeight) + "px";
      enemy.style.left = "-100px";
      page.appendChild(enemy);
    } else if (num === 3) {
      enemy.classList.add("right-rectangle");
      enemy.style.height = "50px";
      enemy.style.width = "100px";
      enemy.style.top = Math.floor(Math.random() * maxHeight) + "px";
      enemy.style.left = "1550px";
    }
    enemy.addEventListener("mouseover", () => {
      displayResult();
    });
    page.appendChild(enemy);
    setTimeout(() => {
      page.removeChild(enemy);
    }, 3000);
  };

  const displayResult = () => {
    if (isPlaying === true) {
      setIsPlaying(false);
      const content = document.getElementsByClassName("game-result")[0];
      if (content.classList.contains("hide") === true) {
        content.classList.remove("hide");
      }
    }
  };

  const handleClick = (e) => {
    const intro = document.getElementsByClassName("game-intro");
    const value = e.target.value;
    setDifficulty(value);
    console.log(value);
    settings(difficulty);
    console.log(difficulty);
    setIsPlaying(true);
    console.log(difficulty);
    intro[0].classList.add("hide");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying === true) {
        generateRandomEnemy();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying === true) {
        setSeconds((seconds) => seconds + 1);
      }
      if (isPlaying === false) {
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const playMusic = (e) => {
    const bgm = new Audio("/GameBackgroundMusic.mp3");
    if (e.target.classList[0] === "back-button") {
      bgm.pause();
    } else {
      console.log("hello");
      bgm.play();
    }
    console.log(e.target);
  };

  const restart = () => {
    const result = document.getElementsByClassName("game-result");
    result[0].classList.add("hide");
    setIsPlaying(true);
  };

  return (
    <div className="game-page" onMouseMove={handleChange}>
      <audio src="/GameBackgroundMusic.mp3" autoPlay loop />
      <Link to="/project">
        <button
          className="back-button"
          onClick={playMusic}
          style={{ zIndex: 3 }}
        >
          Return
        </button>
      </Link>
      <div className="game-intro">
        <h1>Tam's Little Game</h1>
        <h2>Choose the Level of Difficulty</h2>
        <button
          className="start-btn"
          onClick={handleClick}
          value="easy"
          style={{ zIndex: "10" }}
        >
          Easy
        </button>
        <button
          className="start-btn"
          onClick={handleClick}
          value="medium"
          style={{ zIndex: "10" }}
        >
          Medium
        </button>
        <button
          className="start-btn"
          onClick={handleClick}
          value="hard"
          style={{ zIndex: "10" }}
        >
          Hard
        </button>
        <button
          className="start-btn"
          onClick={handleClick}
          value="insane"
          style={{ zIndex: "10" }}
        >
          Insane
        </button>
      </div>
      <div
        className="circle"
        style={{ top: position[1] - 25 + "px", left: position[0] - 25 + "px" }}
      >
        <img src={Hug} alt="hug" style={{ height: "50px", width: "50px" }} />
      </div>
      <div className="game-result hide">
        <h2>Oops! You lose =[</h2>
        <br />
        <h3>{`You survied for ${seconds} second(s)`}</h3>
        <button className="start-btn" onClick={restart}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Game;
