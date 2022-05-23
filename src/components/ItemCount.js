import { useState } from "react";


const ItemCount = () => {  

const increment = () => {

    if (amount < 5) setAmount(amount+1);
    
}

const decrement = () => {
    if (amount > 0) setAmount(amount-1);
}

const [amount, setAmount] = useState(0);
    
    return (
    <>
        
        <div  className="botonUno">

            <p>Cantidad: {amount}</p>
            <hr></hr>
            <button onClick={increment} type="button" class="btn btn-primary">Agregar</button>                   
            <button onClick={decrement} type="button" class="btn btn-primary">Quitar</button> 
                       
        </div>    

    </>

    );
    
  }

  export default ItemCount;