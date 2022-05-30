import Item from "./Item";


const ItemList = (props) => {
    return (

        <>        
        {props.Item.length > 0 ? (
            props.items.map((item) => (
                <Item
                id={item.id}
                title={item.name}
                price={item.cost}
                pictureUrl={item.image}
                stock={item.stock}
                />

            ))

        ) : (

            <div>
                Cargando...
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            </div>  
   
             
        )
        }
        
        </>
    )}
    
    

    export default ItemList;