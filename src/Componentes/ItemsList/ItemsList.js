import Items from "../Items/Items"
import "./style.css";

const ItemsList = ({listaProductos}) => {
    return (
        <div className="contenedorCards">
            {listaProductos.map((producto)=>(
                <Items key={producto.id} productoEnviar={producto}/>       
            ))}
        </div>
      )
}

export default ItemsList