import ItemList from "./ItemList";
import customFetch from "../utils/CustomFetch";
import { useEffect, useState } from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";
const {products} = require ("../utils/Products");





const ItemListContainer = ()  => {   
    
    const [datos, setDatos] = useState([]);
    


    useEffect(() => {
        customFetch(2000, products)            

        .then(result => setDatos (result))
        .catch(err => console.log(err))

    },
    []);

    return (
    <>

        <div>
           
            <ItemList items={datos}/> 

            <Item/>

            <h3>Limpia Max</h3>

            <div className='botonContador'>
                <ItemCount stock={5} initial={0}/>
            </div>
             
        </div>    

    </> 

    );
    
  }

  export default ItemListContainer;
