import cart from '../../assets/cart.png' 

const CartWidget = () => {
    return (
        <div>
            <img src={cart} className ="img-carrito" alt="cart-widget" />
            0
        </div>
    )
}

export default CartWidget