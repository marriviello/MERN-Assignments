import './App.css'
import Main from './views/Main'
import SinglePet from './components/SinglePet'
import EditPet from './components/EditPet'
import Form from './components/Form'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path='/' default />
          <Route element={<SinglePet />} path='/pet/:id' />
          <Route element={<EditPet />} path='/pet/edit/:id'/>
          <Route element={<Form />} path='/pet/create'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
