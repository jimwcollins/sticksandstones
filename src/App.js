import React, { useState } from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';

import './App.css';
import Header from './Components//Header';
import Home from './Components/Home/Home';
import Game from './Components/Game/Game';
import Wallpaper from '../src/images/Dark_Black_Wallpaper.jpeg';

// Styles
const AppContainer = styled.div`
  display: grid;
  grid-template-columns:
    minmax(10rem, 1fr)
    minmax(min-content, 114rem)
    minmax(10rem, 1fr);
  grid-template-rows: min-content 1fr;
  grid-template-areas: '. header .' '. app .';
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: url(${Wallpaper});
  background-size: cover;
`;

const GameRouter = styled(Router)`
  grid-area: app;
  height: 93%;
  width: 100%;
`;

// Component
const App = () => {
  const [canvasSize] = useState({ width: 400, height: 410 });
  const [gameRunning, setGameRunning] = useState(false);

  return (
    <AppContainer>
      <Header gameRunning={gameRunning} setGameRunning={setGameRunning} />

      <GameRouter>
        <Home
          path="/"
          canvasSize={canvasSize}
          setGameRunning={setGameRunning}
        />
        <Game path="/game" canvasSize={canvasSize} />
      </GameRouter>
    </AppContainer>
  );
};

export default App;
