import React from 'react';
import DayOne from './practice/dayone';
import DayTwo from './practice/daytwo';
import NavList from './practice/NavBar';
import Player from './practice/props';


function App() {
  return (
    <>
    <DayOne />
    <DayTwo />
    <Player songName="Live Your Life" artist="Rihana" />
    <div>
      <h1>Navigation</h1>
      <NavList />
    </div>
    </>
  );
}

export default App;
