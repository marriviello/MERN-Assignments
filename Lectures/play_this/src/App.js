// import './App.css';
import Header from './components/Header';
import Person from './components/Person';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header />
      {people.map((item, index) =>
      <Person
        key = {index}
        name = {item.name}
        height = {item.height}
        gender = {item.gender}
        money = {item.money}
        age = {item.age}
      />
      )}
      <Form />
    </div>
  );
}

export default App;

let people =[
  {
    name: "Maria",
    height: 5.8,
    gender: "female",
    money: 100,
    age: 29,
  },
  {
    name: "Harry",
    height: 5.2,
    gender: "male",
    money: 44,
    age: 29,
  },
  {
    name: "Rachel",
    height: 5.0,
    gender: "female",
    money: 109,
    age: 49,
  },
]
