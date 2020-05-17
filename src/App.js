import React from 'react';
import './App.css';
import WordModule from './WordModule';
import Status from './Status';
import Next from './Next';
import PlayerType from './PlayerType';


function App() {
  return (
    <div className="App">
      <h2>
        App Component
      </h2>
      <Status />
      <WordModule />
      <Next />
      <PlayerType />
    </div>
  );
}

export default App;
