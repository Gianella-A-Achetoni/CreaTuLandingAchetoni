import "./cart.css"

const CartWidget = () => {
  return (
    <div>
      <button className="contenedorCarrito">
        <div>
          <img src="../src/assets/carrito.png" alt="carrito" />
        </div>
        <span>0</span>
      </button>
      
    </div>
  )
}

export default CartWidget