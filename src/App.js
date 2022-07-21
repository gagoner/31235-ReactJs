import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="">
      <NavBar />
      <ItemListContainer title="Listado de ítems"/>
    </div>
  );
} 

export default App;