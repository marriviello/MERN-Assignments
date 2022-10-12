import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/' default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
