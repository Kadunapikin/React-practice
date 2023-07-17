import React from 'react';

 // How to pass props to a component

 function Player(props) {
    return (
        <>
            <h1>Music Title: {props.songName}</h1>
            <h2>Artist: {props.artist}</h2>
        </>
    )
}
export default Player;