const Item = () => {
    return (
        <>
        
        <div class="card" Style={{ width:'18rem' , height:'50px'}}>
            <img src="https://superlorito.com.ar/wp-content/uploads/2020/04/JABON-LIQUIDO-ARIEL-5L.jpg" class="card-img-top" alt="..." style={{width: '20rem',}}/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#/" className="btn btn-primary">Añadir al carrito</a>
            </div>
        </div>
        </>
    )
}

export default Item;