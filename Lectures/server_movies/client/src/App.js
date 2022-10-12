import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Form from './components/Form'
import MovieList from './components/MovieList'


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <NavBar />
        <Routes>
          <Route path='/' element={<Form />}/>
          <Route path='/movielist' element={<MovieList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
