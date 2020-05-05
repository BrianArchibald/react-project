import React from 'react';
import './App.css';
import WordModule from './WordModule';
import Status from './Status';


function App() {
  return (
    <div className="App">
      <h2>
        App Component
      </h2>
      <Status />
      <WordModule />
    </div>
  );
}

export default App;
