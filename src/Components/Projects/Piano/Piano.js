import React from "react";
import KeyboradEventHandler from "react-keyboard-event-handler";
import { Link } from "react-router-dom";

const Piano = () => {
  const blackKeys = ["Db4", "Eb4", "Gb4", "Ab4", "Bb4", "Db5", "Eb5"];
  const whiteKeys = [
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "A4",
    "B4",
    "C5",
    "D5",
    "E5",
  ];
  const whiteKeyboard = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
  const blackKeyboard = ["s", "d", "g", "h", "j", "l", ";"];

  const playSound = (e) => {
    let keySound = new Audio(e.target.firstElementChild.getAttribute("src"));
    keySound.play();
  };

  const keyboardPlay1 = (key, e) => {
    if (e.repeat) return;
    const keyIndex = whiteKeyboard.indexOf(key);
    const pressedKey = whiteKeys[keyIndex];
    const keySound = new Audio(process.env.PUBLIC_URL + `/${pressedKey}.mp3`);
    keySound.play();
  };

  const keyboardPlay2 = (key, e) => {
    if (e.repeat) return;
    const keyIndex = blackKeyboard.indexOf(key);
    const pressedKey = blackKeys[keyIndex];
    const keySound = new Audio(process.env.PUBLIC_URL + `/${pressedKey}.mp3`);
    keySound.play();
  };

  const pressKey1 = (key, e) => {
    const keyIndex = whiteKeyboard.indexOf(key);
    const pressedKey = whiteKeys[keyIndex];
    const pressedButton = document.getElementsByClassName(
      `white-keys ${pressedKey}-key`
    );
    pressedButton[0].classList.add("active");
  };
  const pressKey2 = (key, e) => {
    const keyIndex = blackKeyboard.indexOf(key);
    const pressedKey = blackKeys[keyIndex];
    const pressedButton = document.getElementsByClassName(
      `black-keys ${pressedKey}-key`
    );
    pressedButton[0].classList.add("active");
  };
  const releaseKey1 = (key, e) => {
    const keyIndex = whiteKeyboard.indexOf(key);
    const pressedKey = whiteKeys[keyIndex];
    const pressedButton = document.getElementsByClassName(
      `white-keys ${pressedKey}-key`
    );
    pressedButton[0].classList.remove("active");
  };
  const releaseKey2 = (key, e) => {
    const keyIndex = blackKeyboard.indexOf(key);
    const pressedKey = blackKeys[keyIndex];
    const pressedButton = document.getElementsByClassName(
      `black-keys ${pressedKey}-key`
    );
    pressedButton[0].classList.remove("active");
  };

  return (
    <div className="piano-page">
      <Link to="/project">
        <button className="back-button">Return</button>
      </Link>
      <h2>Tam's Piano</h2>
      <div className="piano">
        {whiteKeys.map((key) => (
          <button className={`white-keys ${key}-key`} onClick={playSound}>
            <audio
              className={`sounds ${key}`}
              src={process.env.PUBLIC_URL + `/${key}.mp3`}
            >
              <source src={process.env.PUBLIC_URL + `/${key}.mp3`} />
            </audio>
          </button>
        ))}
        {blackKeys.map((key) => (
          <button className={`black-keys ${key}-key`} onClick={playSound}>
            <audio
              className="sounds"
              src={process.env.PUBLIC_URL + `/${key}.mp3`}
            >
              <source src={process.env.PUBLIC_URL + `/${key}.mp3`} />
            </audio>
          </button>
        ))}
      </div>
      <KeyboradEventHandler
        handleKeys={whiteKeyboard}
        onKeyEvent={keyboardPlay1}
      ></KeyboradEventHandler>
      <KeyboradEventHandler
        handleKeys={blackKeyboard}
        onKeyEvent={keyboardPlay2}
      ></KeyboradEventHandler>
      <KeyboradEventHandler
        handleKeys={whiteKeyboard}
        onKeyEvent={pressKey1}
        handleEventType="keydown"
      ></KeyboradEventHandler>
      <KeyboradEventHandler
        handleKeys={blackKeyboard}
        onKeyEvent={pressKey2}
        handleEventType="keydown"
      ></KeyboradEventHandler>
      <KeyboradEventHandler
        handleKeys={whiteKeyboard}
        onKeyEvent={releaseKey1}
        handleEventType="keyup"
      ></KeyboradEventHandler>
      <KeyboradEventHandler
        handleKeys={blackKeyboard}
        onKeyEvent={releaseKey2}
        handleEventType="keyup"
      ></KeyboradEventHandler>
    </div>
  );
};

export default Piano;
