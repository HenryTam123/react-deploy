import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Piano from "./Components/Projects/Piano/Piano.js";
import Calculator from "./Components/Projects/Calculator.js";
import DigitalClock from "./Components/Projects/DigitalClock.js";
import TodoList from "./Components/Projects/TodoList/TodoList.js";
import Game from "./Components/Projects/Game/Game.js";
import Quiz from "./Components/Projects/Quiz/Quiz.js";
import Game2 from "./Components/Projects/Game2/Game2.js";
import Game3 from "./Components/Projects/Game3/Game3.js";
import ChampionDisplay from "./Components/Projects/ChampionDisplay/ChampionDisplay.js";
import Game4 from "./Components/Projects/Game4/Game4";
import Game5 from "./Components/Projects/Game5/Game5";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" exact component={Project} />
          <Route path="/contact" component={Contact} />
          <Route path="/project/piano" component={Piano} />
          <Route path="/project/calculator" component={Calculator} />
          <Route path="/project/digital-clock" component={DigitalClock} />
          <Route path="/project/todo-List" component={TodoList} />
          <Route path="/project/game" component={Game} />
          <Route path="/project/quiz" component={Quiz} />
          <Route path="/project/game2" component={Game2} />
          <Route path="/project/game3" component={Game3} />
          <Route path="/project/champion-display" component={ChampionDisplay} />
          <Route path="/project/game4" component={Game4} />
          <Route path="/project/game5" component={Game5} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
