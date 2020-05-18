import React from 'react';

function PlayerMode() {
  return (
    <div className="mode">
      <button className="type-player">Player</button>
      <button className="type-spymaster">Spymaster</button>
      <button className="next-game">Next Game</button>
    </div>
  )
}

export default PlayerMode;