import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Formulary from './components/Formulary/Formulary';
import CartProvider from './context/cartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer texto={"Tienda de bisutería by Ro"} />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer texto={"Tienda de bisutería by Ro"}/>} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Formulary />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
} 

export default App;