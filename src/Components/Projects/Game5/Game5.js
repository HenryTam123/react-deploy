import React, { useState, useEffect } from "react";

const Game5 = () => {
  const numBox = 0;
  var position = 0;
  var isPlaying = true;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying === true) {
        if (position < window.innerHeight - 80) {
          position = position + 1;
        }
        const bullet = document.querySelector(".game-ball");
        bullet.style.top = `${position}px`;
        bullet.style.left = `${position}px`;
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const gridContainer = document.getElementsByClassName("grid-container")[0];
    for (let i = 0; i < 60; i++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      gridContainer.appendChild(grid);
    }
  });

  return (
    <div className="game5-page">
      <section className="grid-container"></section>
      <div className="game-ball"></div>
      <div className="moving-bar"></div>
    </div>
  );
};

export default Game5;
