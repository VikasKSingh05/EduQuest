import React from "react";

function Game() {
  return (
    <div className="game-section">
      <div className="game-content">
        <p className="game-title">Learn by playing</p>

        <div className="game-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            facere dolor ea quae, nulla adipisci hic omnis reprehenderit
            voluptatum amet.
          </p>
        </div>

        <div>
          <a
            href="/game/jungle_game.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="game-button">DIVE IN</button>
          </a>
        </div>
      </div>

      <div className="game-image">
        <img src="/image/test_image.png" alt="Game preview" />
      </div>
    </div>
  );
}

export default Game;

