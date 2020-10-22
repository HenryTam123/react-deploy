import React, { useState, useEffect } from "react";

const Game5 = () => {
  const [position, setPosition] = useState(["", ""]);

  const handleChange = (e) => {
    setPosition([e.clientX, e.clientY]);
  };

  return (
    <div className="game5-page" onMouseMove={handleChange}>
      <div className="game5-background"></div>
      <div className="game5-intro">
        <h2 className="game5-h2">Welcome to Tam's mini game 5</h2>
        <button className="game5-button">Start</button>
      </div>
      <div
        className="game5-circle"
        style={{ top: position[1] - 80 + "px", left: position[0] - 80 + "px" }}
      ></div>
    </div>
  );
};

export default Game5;
