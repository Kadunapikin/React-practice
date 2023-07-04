import React from 'react';


function DayTwo() {
// How to use a Variable Attribute in a Component
const owl = {
    title: 'Excellent Frog',
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
};

// How to create EventListeners
function handleClick() {
    alert('Submission successful, return to home page.');
}

function handleHover() {
    alert('Stop it, no dey hoover over me biko.')
}

    return (
    <div>
        <div className='first-div'>
            <h1>Result Submission Button</h1>
            <button onClick={handleClick}>Submit Result</button>
        </div>
        <div onMouseOver={handleHover}>
            <p>I'm the second div that don't like people hoovering over me.</p>
        </div>
        <div className='third-div'>
            <h1>{owl.title}</h1>
            <img
            src={owl.src}
            alt={owl.title}
            />
        </div>
    </div>
    );
}
export default DayTwo;