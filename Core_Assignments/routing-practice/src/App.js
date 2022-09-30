import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Other from './components/Other'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:word" element={<Other />} />
        <Route path="/:word/:color/:bgColor" element={<Other />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
