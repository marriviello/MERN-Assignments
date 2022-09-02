import './App.css';
import Component from './components/Component';

function App() {
  return (
    <div className="App">
      <Component myData={"This is from props"} message={"this is my message"}/>
    </div>
  );
}

export default App;
