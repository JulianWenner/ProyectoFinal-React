import "./style.css";

const Items = ({productoEnviar}) => {
  return (
    <div>
      <div className="card">
        <h2>Nombre del producto {productoEnviar.id}</h2>
        <h2>Talla del prodcuto {productoEnviar.talle}</h2>
        <h2>color del prodcuto {productoEnviar.nombre}</h2>
      </div>
    </div>
  )
}

export default Items
