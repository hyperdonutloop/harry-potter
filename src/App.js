import React from 'react';
import './App.css';
import Characters from "./Components/Character";
import Navigation from "./Components/Navigation";
import { Route } from "react-router-dom";
import WelcomePage from "./Components/WelcomePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={Characters} />
    </div>
  );
}

export default App;
