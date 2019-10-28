import React from 'react';
import './App.css';
import Characters from "./Components/Character";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Characters />
    </div>
  );
}

export default App;
