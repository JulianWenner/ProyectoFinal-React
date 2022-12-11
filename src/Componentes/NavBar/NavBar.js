import "./style.css";
import Carrito from "../Carrito/Carrito";

const NavBar = () => {
  return (
    <div className="ClaseContenedora">
        <div className="NavBarz">
            <h1>Mi tienda</h1>   
            <ul className="list">
                <li className="items" ><a  className="enlace" href="#">PRODUCTOS</a></li>
                <li className="items"><a className="enlace" href="#">OFERTAS</a></li>
                <li className="items"><a className="enlace" href="#">CONTACTO</a></li>
                <li className="items"><a className="enlace" href="#"></a></li>

            </ul>
            <Carrito/>
        </div>
    </div>
  )
}

export default NavBar