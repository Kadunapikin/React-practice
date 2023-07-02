// How to list elements using .map in JSX
function App() {
  // one
  const strings = ['Home', 'Shop', 'About Me'];
  const listItems = strings.map(string => <li>{string}</li>);
  
  // two
  const liArray = [
    <li>item 1</li>, 
    <li>item 2</li>, 
    <li>item 3</li>
  ];

  // three
  const people = ['Rowe', 'Prevost', 'Gare'];
  const peopleList = people.map((person) => <li>{person}</li>);

  return (
    <div className="App">
      <ul>{listItems}</ul>
      <ul>{liArray}</ul>
      <ol>{peopleList}</ol>
    </div>
  );
}

export default App;
