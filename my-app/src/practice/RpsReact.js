import React, { useState } from 'react';

const choices = ["rock", "paper", "scissors"];

export default function RpsReact () {
    const [userChoice, selectUserChoice] = useState();

    return (
        <div>
            <p>The user picked {userChoice} as his choice</p>
            {choices.map((choice) => (
                <button onClick={() => selectUserChoice(choice)} key={choice}>{choice}</button>
            ))}
        </div>
    )

}
