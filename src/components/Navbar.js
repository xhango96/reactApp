import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";




const Navbar = () => {
    //* dentro del return se colocan los estilos que se inyectan en la interfaz
    return (
        <>
        <div className='NavDos'>

        
        <nav class="navbar navbar-dark bg-primary">
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                   
                    <a className="navbar-brand" href="https://www.instagram.com/limpiamax_ok/">Limpia Max</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="https://www.instagram.com/limpiamax_ok/">Inicio</a>
                            <a className="nav-link" href="http://localhost:3001/">Productos</a>
                            <a className="nav-link" href="http://localhost:3001/">Envios</a>
                            <a className="nav-link" href="http://localhost:3001/">Contacto</a>

                            
                        </div>
                    </div>
                    
                </div>
            </nav>
            
            
            
            <CartWidget />
            

        </nav>
            
        </div>
        </>
    )
}

//* se exporta a App.js
export default Navbar;