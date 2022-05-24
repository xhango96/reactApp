import { useState } from "react";


const ItemCount = ({stock, initial}) => {  

    const [amount, setAmount] = useState(initial);

const increment = () => {

    if (amount < (stock)) setAmount(amount+1);
    
    
}

const decrement = () => {
    if (amount > (initial)) setAmount(amount-1);
}

const onAdd = () => {
    alert("Agregaste: " + amount + " items");

}


    
    return (


    <>
        
        <div  className="botonUno">

            <p>Cantidad: {amount}</p>
            <hr></hr>
            <button onClick={increment} type="button" class="btn btn-primary">Sumar</button>                   
            <button onClick={decrement} type="button" class="btn btn-primary">Restar</button> 
            <button color="primary" onClick={onAdd} class="btn btn-primary">Agregar al carrito</button>
               
        </div>    

        

    </>

    );
    
  }


  
  export default ItemCount;
