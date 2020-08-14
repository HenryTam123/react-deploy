import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChampionCard from "./ChampionCard";

const ChampionDisplay = () => {
  const [champions, setChampions] = useState([]);
  const [text, setText] = useState("");
  console.log(text);

  var championList = [];

  for (var i in champions) {
    championList.push([champions[i]]);
  }

  useEffect(() => {
    const getChampions = async () => {
      const response = await fetch(
        "http://ddragon.leagueoflegends.com/cdn/10.15.1/data/en_US/champion.json"
      );
      const data = await response.json();
      setChampions(data.data);
    };
    getChampions();
  }, []);

  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
  };

  return (
    <div className="champion-page">
      <Link to="/project">
        <button className="back-button">Return</button>
      </Link>
      <div className="page-topic">
        <h2>Champion Images Gallery</h2>
      </div>
      <div className="champion-display">
        {championList.map((champion) => (
          <ChampionCard
            id={champion[0].id}
            title={champion[0].title}
            image={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion[0].id}_0.jpg`}
            tags={champion[0].tags}
            blurb={champion[0].blurb}
            fullImage={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion[0].id}_0.jpg`}
            index={championList.indexOf(champion)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChampionDisplay;
