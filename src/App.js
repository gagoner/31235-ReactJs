import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <h1 className='text-center pt-2'>Tienda de Bisutería Ro</h1>
      <main className='d-flex justify-content-center pt-5'>
        <Routes>
          <Route path='/' element={<ItemListContainer title={'Listado de Productos'} />}/>
          <Route path='/category/:category' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
        </Routes>
      </main>
    </BrowserRouter >
  );
} 

export default App;