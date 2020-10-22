import React from "react";
import Nav from "./Nav";
import LandingVideo from "../Video/video.mp4";
import ReactTypingEffect from "react-typing-effect";
import business from "../Images/business.png";
import Hobbies from "./Hobbies";

const Home = () => {
  function changeMode() {
    const section1 = document.querySelector(".home-section1");
    const section2 = document.querySelector(".home-section2");
    const section3 = document.querySelector(".home-section3");
    console.log("clicked");
    section1.style.backgroundColor = "black";
    section2.style.backgroundColor = "black";
    section3.style.backgroundColor = "black";
    section1.style.Color = "white";
    section1.style.Color = "white";
  }

  const wordList = [
    "My name is TamJai =]",
    "League of Legends is my favorite game ",
    "I like programming and playing guitar",
  ];

  return (
    <div className="home-page">
      <Nav />
      <div className="landing-page">
        <video className="landingVideo" autoPlay muted loop>
          <source src={LandingVideo} type="video/mp4" />
        </video>
      </div>
      <div className="landing-description">
        <h1>Welcome to My first Website</h1>
        <ReactTypingEffect
          text={wordList}
          speed={120}
          typingDelay={500}
          eraseDelay={2000}
        />
      </div>
      <section className="home-section1">
        <div className="description">
          <h1>About Me</h1>
          <p>
            I study in school of business and engineering of the University of
            Hong Kong.
          </p>
          <p>
            I am pursuing in double major in business administration and
            computer science .
          </p>
          <button>Read More</button>
        </div>
        <img
          id="businessman "
          src={business}
          alt="businessman"
          height="500px"
          width="auto"
        />
      </section>
      <button id="dark-mode" onClick={changeMode}>
        Dark Mode
      </button>
      <section className="section-background"></section>

      <section className="home-section2">
        <div className="description">
          <h2>Combination of Skills</h2>
          <br />
          <p>- 3 months of web development experience</p>
          <br />
          <p>- 2 months of project experience</p>
        </div>
        <div className="box">
          <h2>Web Development</h2>
          <div className="box-animation">
            <i class="fas fa-check-circle fa-2x"></i>
            <span>HTML</span>
          </div>

          <div className="box-animation">
            <i class="fas fa-check-circle fa-2x"></i>
            <span>Css</span>
          </div>

          <div className="box-animation">
            <i class="fas fa-check-circle fa-2x"></i>
            <span>Javascript</span>
          </div>

          <div className="box-animation">
            <i class="fas fa-check-circle fa-2x"></i>
            <span>React</span>
          </div>
        </div>
        <div className="box">
          <h2>Back-end Development</h2>
          <div className="box-animation">
            <i class="fas fa-check-circle fa-2x"></i>
            <span>Python</span>
          </div>

          <div className="box-animation">
            <i class="fas fa-check-circle fa-2x"></i>
            <span>C++</span>
          </div>

          <div className="box-animation">
            <i class="fas fa-check-circle fa-2x"></i>
            <span>Java</span>
          </div>

          <div className="box-animation">
            <i class="fas fa-check-circle fa-2x"></i>
            <span>Django</span>
          </div>
        </div>
      </section>
      <section className="section-bar">
        <h2>Always Exploring </h2>
        <p>Life is fantastic</p>
      </section>
      <Hobbies />
      <section className="home-section3">
        <h2>Follow Me on Social Platforms</h2>
        <div className="social-platforms">
          <div class="box2">
            <i class="fab fa-instagram fa-3x"></i>
            <h2>Instagram</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
              consectetur
            </p>
          </div>
          <div class="box2">
            <i class="fab fa-facebook-square fa-3x"></i>
            <h2>Facebook</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
              consectetur
            </p>
          </div>
          <div class="box2">
            <i class="fab fa-youtube fa-3x"></i>
            <h2>Youtube</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
              consectetur
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p> &copy; 2020 Tam All rights reserved </p>
      </footer>
      <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
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
