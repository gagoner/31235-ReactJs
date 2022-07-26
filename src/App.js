
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <h1 className='text-center pt-2'>Tienda de Bisutería <sub>by</sub> Ro</h1>
      <main className='d-flex justify-content-center pt-5'>
        <Routes>
          <Route path='/' element={<ItemListContainer title={'Listado de Productos'} />}/>
          <Route path='/category/:category' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </main>
    </BrowserRouter >
  );
} 

export default App;