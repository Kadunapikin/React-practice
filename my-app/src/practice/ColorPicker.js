// import the default export and the named export `useState` from the 'react' library
import React, { useState } from 'react';

// export default function ColorPicker() {
//   // call useState and assign its return values to `color` and `setColor`
//   const [color, setColor] = useState();

//  const divStyle = {backgroundColor: color};

//   return (
//     <div style={divStyle}>
//       <p>The color is {color}</p>
//       {}
//       <button onClick={() => setColor('Aquamarine')}>Aquamarine</button>
//       <button onClick={() => setColor('BlueViolet')}>BlueViolet</button>
//       <button onClick={() => setColor('Chartreuse')}>Chartreuse</button>
//       <button onClick={() => setColor('CornflowerBlue')}>CornflowerBlue</button>
//     </div>
//   );
// }

// Color picker App can be refactor like this
export default function ColorPicker() {
    const diffColors = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'Yellow', 'Red', 'Black', 'CornflowerBlue']
  // call useState and assign its return values to `color` and `setColor`
  const [color, setColor] = useState();

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>The selected color is {color}</p>
      {diffColors.map((diffColor) => (
        <button onClick={() => setColor(diffColor)} key={diffColor}>{diffColor}</button>
      ))}
    </div>
  );
}
