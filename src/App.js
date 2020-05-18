import React from 'react';
import './App.css';
import WordModule from './WordModule';
import Status from './Status';
import PlayerMode from './PlayerMode';


function App() {
  return (
    <div className="App">
      <h2>
        App Component
      </h2>
      <Status />
      <WordModule />
      <PlayerMode />
    </div>
  );
}

export default App;
