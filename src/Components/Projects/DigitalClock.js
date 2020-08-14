import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DigitalClock = () => {
  const [clockTime, setClockTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      let date = new Date();
      let hours = date.getHours(); //0 -23
      let minutes = date.getMinutes(); // 0-59
      let seconds = date.getSeconds(); //0-59

      let formatHours = convertFormat(hours);

      hours = checkTime(hours);

      hours = addZero(hours);
      minutes = addZero(minutes);
      seconds = addZero(seconds);
      setClockTime(`${hours} : ${minutes} : ${seconds} : ${formatHours}`);
      console.log(clockTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [clockTime]);

  function convertFormat(time) {
    let format = "AM";
    if (time >= 12) {
      format = "PM";
    }
    return format;
  }

  function checkTime(time) {
    if (time > 12) {
      time = time - 12;
    }
    if (time === 0) {
      time = 12;
    }
    return time;
  }

  function addZero(time) {
    if (time < 10) {
      time = "0" + time;
    }
    return time;
  }

  return (
    <div className="clock-page">
      <Link to="/project">
        <button className="back-button">Return</button>
      </Link>
      <h2>Tam's Digital Clock</h2>
      <div className="clock-page-clock">{clockTime}</div>
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap"
        rel="stylesheet"
      ></link>
    </div>
  );
};

export default DigitalClock;
