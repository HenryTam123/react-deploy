import React, { useState, useEffect } from "react";

const ChampionCard = ({ id, title, image, tags, blurb, fullImage, index }) => {
  const [display, setDisplay] = useState(false);
  const [current, setCurrent] = useState(1);

  const handleClick = (e) => {
    const page = document.getElementsByClassName("image-container")[index];
    const fullPage = document.getElementsByClassName("full-page-display")[
      index
    ];

    if (display) {
      page.classList.remove("hide2");
      fullPage.classList.add("hide2");
    } else {
      page.classList.add("hide2");
      fullPage.classList.remove("hide2");
    }
    setDisplay(!display);
  };

  const handleClick2 = (e) => {
    const orginalImage = document.getElementsByClassName("display-image")[
      index
    ];
    const orginalImage2 = document.getElementsByClassName("display-image2")[
      index
    ];
    if (e.target.classList.contains("next-btn")) {
      setCurrent((current) => current + 1);
    } else {
      setCurrent((current) => current - 1);
    }
    orginalImage.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_${current}.jpg`;
    orginalImage2.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${current}.jpg`;
  };
  console.log(image);
  return (
    <div className="champion">
      <div className="champion-card">
        <div class="image-container" onClick={handleClick}>
          <img className="display-image" src={image} width="250px" />
        </div>
        <button className="next-btn" onClick={handleClick2}>
          +
        </button>
        <button className="prev-btn" onClick={handleClick2}>
          -
        </button>
        <div className="champion-description ">
          <h2>{id}</h2>
          <p>{title}</p>
          <p>{tags.map((tag) => tag + " ")}</p>
          <p>{blurb}</p>
        </div>
      </div>

      <div className="full-page-display hide2" onClick={handleClick}>
        <img src={fullImage} className="display-image2" />
      </div>
    </div>
  );
};

export default ChampionCard;
