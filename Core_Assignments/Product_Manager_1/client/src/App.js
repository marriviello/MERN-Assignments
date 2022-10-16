import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main'
import SingleProduct from './components/SingleProduct';
import UpdateProduct from './components/UpdateProduct';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/' default />
          <Route element={<SingleProduct />} path='product/:id' />
          <Route element={<UpdateProduct/>} path="/product/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
