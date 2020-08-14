import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Planet from "../Images/planet.svg";
import Planet2 from "../Images/planet2.svg";
import Greeting from "../Images/greeting.svg";
import ScrollComponent from "./ScrollComponent";
import Calculator from "../Images/calculator.jpg";
import PianoPic from "../Images/piano.jpg";
import Clock from "../Images/clock.jpg";
import TodoList from "../Images/todolist.jpg";
import Game from "../Images/game.jpg";
import Game2 from "../Images/game2.jpg";
import Game3 from "../Images/game3.jpg";
import Quiz from "../Images/quiz.jpg";
import ImageGallery from "../Images/image-gallery.jpg";
import Hangman from "../Images/hangman.jpg";

const Home = () => {
  return (
    <div className="project-page">
      <div className="background-div">
        <img
          id="planet"
          src={Planet}
          alt="planet"
          style={{ height: "200px" }}
        />
        <img
          id="planet2"
          src={Planet2}
          alt="planet2"
          style={{ height: "200px" }}
        />
      </div>
      <nav className="project-nav" style={{ height: "13vh" }}>
        <Nav />
      </nav>
      <section className="project-landing">
        <div className="project-landing-description">
          <h2>A Beginner in Web Development</h2>
          <p>I have been learning Web Development for 2 months</p>
          <p>
            I am going to show you some mini-projects I built with Javascript
          </p>
          <button>
            Support Me &nbsp;&nbsp;<i class="far fa-thumbs-up fa-2x"></i>
          </button>
        </div>
        <div className="landing-image-container">
          <img
            src={Greeting}
            alt="man"
            style={{ heigh: "420px", width: "420px" }}
          />
        </div>
      </section>
      <ScrollComponent />
      <h2 className="header1">My Mini-Projects</h2>
      <section className="project-display" style={{ height: "90vh" }}>
        <div className="project-container">
          <Link to="/project/calculator">
            <img
              src={Calculator}
              alt="calculator"
              width="500px"
              height="auto"
            />
          </Link>
          <h3>Calculator</h3>
        </div>
        <div>
          <div className="project-container">
            <Link to="/project/piano">
              <img src={PianoPic} alt="piano" width="500px" height="auto" />
            </Link>
            <h3>Piano</h3>
          </div>
        </div>
        <div className="project-container">
          <Link to="/project/digital-clock">
            <img src={Clock} alt="clock" width="500px" height="auto" />
          </Link>
          <h3>Digital Clock</h3>
        </div>
        <div className="project-container">
          <Link to="/project/todo-list">
            <img src={TodoList} alt="todo-list" width="500px" height="auto" />
          </Link>
          <h3>To-do List</h3>
        </div>
        <div className="project-container">
          <Link to="/project/game">
            <img src={Game} alt="game" width="500px" height="auto" />
          </Link>
          <h3>Mini Game- Dodging Blocks</h3>
        </div>
        <div className="project-container">
          <Link to="/project/quiz">
            <img src={Quiz} alt="quiz" width="500px" height="auto" />
          </Link>
          <h3>Quiz</h3>
        </div>
        <div className="project-container">
          <Link to="/project/game2">
            <img src={Game2} alt="game2" width="500px" height="auto" />
          </Link>
          <h3>Mini Game2 - Flappy Bird</h3>
        </div>
        <div className="project-container">
          <Link to="/project/game3">
            <img src={Game3} alt="game3" width="500px" height="auto" />
          </Link>
          <h3>Stacking Blocks</h3>
        </div>
        <div className="project-container">
          <Link to="/project/champion-display">
            <img
              src={ImageGallery}
              alt="champion-display"
              width="500px"
              height="auto"
            />
          </Link>
          <h3>Champion Images Gallery</h3>
        </div>
        <div className="project-container">
          <Link to="/project/game4">
            <img src={Hangman} alt="game4" width="500px" height="auto" />
          </Link>
          <h3>Mini Game 4 - Hangman</h3>
        </div>
        <div className="project-container">
          <Link to="/project/game5">
            <img src={Hangman} alt="game5" width="500px" height="auto" />
          </Link>
          <h3>Mini Game 4 - Hangman</h3>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2020 Tam All rights reserved</p>
      </footer>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
        integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
        crossorigin="anonymous"
      ></link>
    </div>
  );
};

export default Home;
