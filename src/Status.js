import React from 'react';

function Status() {
  return (
    <div className="status">
      <div className="score">9-8</div>
      <div className="player-turn">Blues Turn</div>
      <button className="change-turn">End Blues Turn</button>
    </div>
  )
}

export default Status;
