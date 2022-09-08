import Person from './components/Person'

function App() {
  return (
    <div className="App">
      <Person 
        firstName = {"Jane"}
        lastName = {"Doe"}
        age= {24}
        hair= {"black"}
      />
      <Person 
        firstName = {"Maria"}
        lastName = {"Arriviello"}
        age= {44}
        hair= {"brown"}
      />
    </div>
  );
}

export default App;
