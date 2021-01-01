import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import Home from "./pages/Home"
import Trivia from "./features/trivia/Trivia"

const App = () => {


  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/play"><Trivia/></Route>
        </Switch>
        </Router>


    </div>
  );
}

export default App;
