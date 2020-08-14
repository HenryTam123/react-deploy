import React, { useState, useEffect } from "react";
import Hug from "./hug.png";
import { Link } from "react-router-dom";

const Game2 = () => {
  var position = 0;
  var height1 = 0;
  var isPlaying = false;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying === true) {
        if (position < window.innerHeight - 80) {
          position = position + 40;
        }
        const bird = document.querySelector(".game-bird");
        bird.style.top = `${position}px`;
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying === true) generateBar();
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const generateBar = () => {
    const page = document.getElementsByClassName("game2-page")[0];
    const topBar = document.createElement("div");
    const BottomBar = document.createElement("div");

    height1 = Math.floor(Math.random() * 450) + 50;

    const gap = 200;

    topBar.classList.add("top-bar");
    BottomBar.classList.add("bottom-bar");

    topBar.style.height = height1 + "px";
    BottomBar.style.height = window.innerHeight - gap - height1 + "px";

    page.appendChild(topBar);
    page.appendChild(BottomBar);

    setTimeout(() => {
      page.removeChild(topBar);
      page.removeChild(BottomBar);
    }, 8000);
  };

  document.addEventListener("keydown", (e) => {
    if (isPlaying === true) {
      if (e.keyCode === 32) {
        if (position > 0) {
          position = position - 100;
        }
      }
    }
  });

  const playMusic = (e) => {
    const bgm = new Audio("/GameBackgroundMusic2.mp3");
    if (e.target.classList[0] === "back-button") {
      bgm.pause();
    } else {
      console.log("hello");
      bgm.play();
    }
    console.log(e.target);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      IsCollide();
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const IsCollide = () => {
    const bird = document.getElementsByClassName("game-bird")[0];
    const topBars = document.querySelectorAll(".top-bar");
    const bottomBars = document.querySelectorAll(".bottom-bar");
    const gameResult = document.getElementsByClassName("game-result");

    const birdX = bird.getBoundingClientRect().left;
    const birdY = bird.getBoundingClientRect().top;
    const birdWidth = bird.getBoundingClientRect().width;
    const birdHeight = bird.getBoundingClientRect().height;

    topBars.forEach((topBar) => {
      const topBarX = topBar.getBoundingClientRect().left;
      const topBarY = topBar.getBoundingClientRect().top;
      const topBarWidth = topBar.getBoundingClientRect().width;
      const topBarHeight = topBar.getBoundingClientRect().height;

      if (
        birdX < topBarX + topBarWidth &&
        birdX + birdWidth > topBarX &&
        birdY < topBarY + topBarHeight &&
        birdY + birdHeight > topBarY
      ) {
        isPlaying = false;
        if (gameResult[0].classList.contains("hide")) {
          gameResult[0].classList.remove("hide");
        }
      }
    });
    bottomBars.forEach((bottomBar) => {
      const bottomBarX = bottomBar.getBoundingClientRect().left;
      const bottomBarY = bottomBar.getBoundingClientRect().top;
      const bottomBarWidth = bottomBar.getBoundingClientRect().width;
      const bottomBarHeight = bottomBar.getBoundingClientRect().height;

      if (
        birdX < bottomBarX + bottomBarWidth &&
        birdX + birdWidth > bottomBarX &&
        birdY < bottomBarY + bottomBarHeight &&
        birdY + birdHeight > bottomBarY
      ) {
        isPlaying = false;
        if (gameResult[0].classList.contains("hide")) {
          gameResult[0].classList.remove("hide");
        }
      }
    });
  };

  const handleOnclick = () => {
    isPlaying = true;
    const gameIntro = document.getElementsByClassName("game-intro");
    gameIntro[0].classList.add("hide");
  };

  const handleOnclick2 = (e) => {
    isPlaying = true;
    const gameResult = document.getElementsByClassName("game-result");
    gameResult[0].classList.add("hide");
  };

  return (
    <div className="game2-page">
      <audio src="/GameBackgroundMusic2.mp3" autoPlay loop />
      <Link to="/project">
        <button className="back-button" onClick={playMusic}>
          Return
        </button>
      </Link>
      <section className="game-intro">
        <h2>Tam's Mini Game 2</h2>
        <button className="start-btn2" onClick={handleOnclick}>
          Start
        </button>
      </section>
      <div className="game-bird" top={position}>
        <img className="game-bird2" src={Hug} alt="bird" />
      </div>
      <section className="game-result hide" style={{ zIndex: "2" }}>
        <h2>OOps! You lose</h2>
        <button className="start-btn2" onClick={handleOnclick2}>
          Restart
        </button>
      </section>
    </div>
  );
};

export default Game2;
