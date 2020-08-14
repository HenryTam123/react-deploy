import React from "react";
import { ReactComponent as Gaming } from "../Images/gaming.svg";
import { ReactComponent as Music } from "../Images/music.svg";
import { ReactComponent as Book } from "../Images/book.svg";

const Hobbies = () => {
  return (
    <div className="home-section4">
      <header>
        <h2 id="header-h2">
          My Hobbies<i class="far fa-laugh-beam"></i>
        </h2>
      </header>
      <div className="hobbies">
        <div className="discription2">
          <h2 style={{ color: "#F9A826" }}>Book Lover</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
            accusantium!
          </p>
        </div>
        <div />
        <div className="picture-container">
          <Book />
        </div>
      </div>
      <div className="hobbies">
        <div className="picture-container">
          <Music />
        </div>
        <div className="discription2">
          <h2 style={{ color: "#BB4DD0" }}>Guitar Beginner</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
            accusantium!
          </p>
        </div>
      </div>
      <div className="hobbies">
        <div className="discription2">
          <h2 style={{ color: "#51E470" }}>Video Games Master</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
            accusantium!
          </p>
        </div>
        <div />
        <div className="picture-container">
          <Gaming />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
