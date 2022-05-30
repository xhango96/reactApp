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
    alert("Agregaste: " + amount + " items al carrito 🛒");

}


    
    return (


    <>
        
        <div  className="botonUno">

            <p>Cantidad: {amount}</p>
            <hr></hr>
            <button onClick={increment} type="button" className="btn btn-primary">➕</button>                   
            <button onClick={decrement} type="button" className="btn btn-primary">➖</button> 
            <button color="primary" onClick={onAdd} className="btn btn-primary">Agregar al carrito</button>
               
        </div>    

        

    </>

    );
    
  }


  
  export default ItemCount;














