import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logo.png"

const NavBar = () => {
    return (
        <nav>
            <img src={logo} className ="img-logo" alt="logo" />
            <div>
                <button className="navbar-buton">Producto1</button>
                <button className="navbar-buton">Producto2</button>
                <button className="navbar-buton">Producto3</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar 