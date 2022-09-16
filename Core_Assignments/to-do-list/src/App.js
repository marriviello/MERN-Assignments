import './App.css';
import Form from './components/Form';
import List from './components/List';
import {useState} from "react"

function App() {
  const [toDoList, setToDoList] = useState([])

  return (
    <div className="App">
      <Form toDoList={toDoList} setToDoList={setToDoList}/>
      <List toDoList={toDoList} setToDoList={setToDoList}/>
    </div>
  );
}

export default App;
