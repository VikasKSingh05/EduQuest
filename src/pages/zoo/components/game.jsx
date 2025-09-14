import React from "react";

function Game() {
  return (
    <div className="game-section">
      <div className="game-content">
        <p className="game-title">Learn by playing</p>

        <div className="game-text">
          <p>
            Dive into our interactive zoo adventure game! Explore, learn, and
            have fun while discovering the wonders of the animal kingdom.
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

