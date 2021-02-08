import React from 'react';

import Hangman from './Hangman';
import { Link } from '@reach/router';

const Home = () => {
  return (
    <>
      <Hangman gameStatus="new" />
      <div className="control">
        <div className="new-game">
          <h2>Want to play a game?</h2>
          <button className="btn">
            <Link to="/game">New Game</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
