import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import Item from "./Item";
const {products} = require ("../utils/products");





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
             
        </div>    

    </> 

    );
    
  }

  export default ItemListContainer;