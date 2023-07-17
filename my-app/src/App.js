import React from 'react';
import DayOne from './practice/dayone';
import DayTwo from './practice/daytwo';
import NavList from './practice/NavBar';
import Player from './practice/props';
import Card from './practice/Card';
import { comments } from './practice/Comments';

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
    <div>
      {comments.map((comment, index) => (
        <Card key={index} commentObject={comment} />
      ))}
    </div>
    </>
  );
}

export default App;
