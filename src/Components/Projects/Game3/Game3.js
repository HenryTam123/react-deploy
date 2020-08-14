import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Game3 = () => {
  var isPlaying = false;
  var posLeft = -1000;
  var boundingLeft = 0;
  var boundingRight = boundingLeft + 700;
  var blockWidth = 700;
  var posRight;
  var posTop = 160;
  var left = true;
  var num = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying === true && left) {
        const page = document.getElementsByClassName("game-base")[0];
        const block = page.lastChild;
        if (posLeft < window.innerWidth - blockWidth + 220) {
          posLeft = posLeft + 20;
        }
        block.style.left = `${posLeft}px`;
      } else if (isPlaying === true && left === false) {
        const page = document.getElementsByClassName("game-base")[0];
        const block = page.lastChild;
        if (posLeft > 0) {
          posLeft = posLeft - 20;
        }
        block.style.left = `${posLeft}px`;
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const generateBlock = () => {
    if (left) {
      posLeft = -1000;
    } else {
      posLeft = 1000;
    }
    posTop = posTop + 80;
    const base = document.getElementsByClassName("game-base")[0];
    const block = document.createElement("div");
    block.classList.add("game-block");
    block.classList.add("slide");
    block.style.left = posLeft + "px";
    block.style.bottom = posTop + "px";
    block.style.width = blockWidth + "px";

    base.appendChild(block);

    if (base.children.length > 6) {
      base.removeChild(base.childNodes[0]);
      base.removeChild(base.childNodes[0]);
      base.removeChild(base.childNodes[0]);
      const blocks = document.querySelectorAll(".game-block");

      blocks[0].style.bottom = 160 + "px";
      blocks[1].style.bottom = 240 + "px";
      blocks[2].style.bottom = 320 + "px";
      blocks[3].style.bottom = 400 + "px";

      posTop = 400;
    }
  };
  const handleClick = (e) => {
    const result = document.getElementsByClassName("game-result");
    if (isPlaying) {
      left = !left;
      const page = document.getElementsByClassName("game-base")[0];
      const block = page.lastChild;
      posRight = posLeft + blockWidth;

      if (posLeft > boundingRight || posRight < boundingLeft) {
        result[0].classList.remove("hide");
        isPlaying = false;
      } else {
        if (posLeft < boundingLeft) {
          posLeft = boundingLeft;
          boundingRight = posRight;
          block.style.width = posRight - posLeft + "px";
          block.style.left = posLeft + "px";
        }
        if (posRight > boundingRight) {
          posRight = boundingRight;
          boundingLeft = posLeft;
          block.style.width = posRight - posLeft + "px";
          block.style.right = posRight + "px";
        }
        console.log("inside");
        blockWidth = posRight - posLeft;
      }
      if (isPlaying === true) {
        const total = document.getElementsByClassName("total-count")[0];
        generateBlock();
        num = num + 1;
        total.innerHTML = "Number of blocks stacked: " + num;
      }
    }
  };

  const handleClick2 = () => {
    setTimeout(() => (isPlaying = true), 4000);
    const count = document.getElementsByClassName("count-num");
    const gameIntro = document.getElementsByClassName("game-intro");
    const gameBase = document.getElementsByClassName("game-base");

    gameBase[0].classList.remove("hide");
    gameIntro[0].classList.add("hide");
    setTimeout(() => count[0].classList.remove("hide"), 0);
    setTimeout(() => {
      count[0].classList.add("hide");
      count[1].classList.remove("hide");
    }, 1000);
    setTimeout(() => {
      count[1].classList.add("hide");
      count[2].classList.remove("hide");
    }, 2000);
    setTimeout(() => {
      count[2].classList.add("hide");
    }, 3000);
  };

  const handleClick3 = (e) => {
    setTimeout(() => (isPlaying = true), 4000);
    const count = document.getElementsByClassName("count-num");
    const gameResult = document.getElementsByClassName("game-result");
    gameResult[0].classList.add("hide");

    setTimeout(() => count[0].classList.remove("hide"), 0);
    setTimeout(() => {
      count[0].classList.add("hide");
      count[1].classList.remove("hide");
    }, 1000);
    setTimeout(() => {
      count[1].classList.add("hide");
      count[2].classList.remove("hide");
    }, 2000);
    setTimeout(() => {
      count[2].classList.add("hide");
    }, 3000);
  };

  return (
    <div className="game3-page" onClick={handleClick}>
      <Link to="/project">
        <button className="back-button">Return</button>
      </Link>
      <section className="game-intro">
        <h2>Tam's Mini Game 3</h2>
        <button className="start-btn3" onClick={handleClick2}>
          Start
        </button>
      </section>
      <h4 className="total-count">Number of blocks stacked: 0</h4>
      <section className="game3-count">
        <div className="count-num hide">3</div>
        <div className="count-num hide">2</div>
        <div className="count-num hide">1</div>
      </section>
      <div className="game-base hide">
        <div className="game-block" style={{ left: "-1000px" }}></div>
      </div>
      <section className="game-result hide" style={{ zIndex: "2" }}>
        <h2>OOps! You lose</h2>
        <button className="start-btn3" onClick={handleClick3}>
          Restart
        </button>
      </section>
    </div>
  );
};

export default Game3;
