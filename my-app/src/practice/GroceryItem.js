import React from 'react';

const GroceryItems = (props) => {

return (
      <button onClick={props.onClick}>{props.type}</button>
    );
}
export default GroceryItems;