import './App.css';
import Navbar from './components/Navbar'; //* se importa desde la etiqueta Navbar
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';



const App = ()  => {
  return (
    <>
    <div className="App">     
    
    </div>


    <div className="NavBar">
      <Navbar></Navbar> 
    </div>


     <div className='Saludo'>
        <ItemListContainer  greeting="Limpia Max" />
     </div>

     <div className='botonContador'>
        <ItemCount stock={5} initial={0}/>
     </div>
    
    

    </>

    

  );
}

export default App;
