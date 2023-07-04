import React from 'react';


function DayTwo() {
// How to use a Variable Attribute in a Component
const owl = {
    title: 'Excellent Frog',
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
};

    return (
    <div>
        <div className='first-div'>
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