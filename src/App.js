import './App.css';
import Navbar from './components/Navbar'; //* se importa desde la etiqueta Navbar
import ItemListContainer from './components/ItemListContainer';


const App = ()  => {
  return (
    <>
    <div className="App">
      <Navbar></Navbar>  
    
      <ItemListContainer  greeting="Limpia Max" />
    
    </div>
    </>

    

  );
}

export default App;
