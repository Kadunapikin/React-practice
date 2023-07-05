import React from 'react';
import DayOne from './practice/dayone';
import DayTwo from './practice/daytwo';
import Player from './practice/props';


function App() {
  return (
    <>
    <DayOne />
    <DayTwo />
    <Player songName="Live Your Life" artist="Rihana" />
    </>
  );
}

export default App;
