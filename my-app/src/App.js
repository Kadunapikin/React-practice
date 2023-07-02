function App() {
  // How to list elements using .map in JSX
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
  const peopleList = people.map((person, i) => <li key={'person_' + i}>{person}</li>);

  // using objejct properties to set attributes in react
  const topStudents = {
    bobai : "senior-developer",
    david : "junior-developer",
    winnie : "senior-developer"
  };

  const bobai = (
    <div>
      <h1>{topStudents.bobai}</h1>
      <p>Bobai is one of the best students at TOP school</p>
    </div>
  );

  const david = (
    <div>
      <h1>{topStudents.david}</h1>
      <p>David is one of the usal absenties at TOP school</p>
    </div>
  );

  const studentList = (
    <ol>
      <li>{bobai}</li>
      <li>{david}</li>
    </ol>
  );

  // using if conditionals in jsx
  const studentName = ["winnie", "bobai", "isaac"];

  function getStudentName() {
    return studentName[Math.floor(Math.random() * studentName.length)];
}

let topMessage;
if(getStudentName() === "winnie") {
  topMessage = (
    <h3>Winnie is the only lady in TOP school batch A</h3>
  );
} else {
  topMessage = (
    <h3>It's one of the two guys in TOP school batch A</h3>
  );
}

  return (
    <div className="App">
      <div>
        <ul>{listItems}</ul>
        <ul>{liArray}</ul>
        <ol>{peopleList}</ol>
      </div>
      <div>
        <ul>{studentList}</ul>
      </div>
      <div>
        <h3>{topMessage}</h3>
      </div>
    </div>
  );
}

export default App;
