import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logo.png"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>Ecomerce</h3>
            </Link>
            <img src={logo} className ="img-logo" alt="logo" />
            <div>
                <NavLink to={`/category/celular`} className={({ isActive}) => isActive ? 'ActiveOption': 'Option'}>Celulares</NavLink>
                <NavLink to={`/category/tablet`} className={({ isActive}) => isActive ? 'ActiveOption': 'Option'}>Tablets</NavLink>
                <NavLink to={`/category/notebook`} className={({ isActive}) => isActive ? 'ActiveOption': 'Option'}>Notebooks</NavLink>
            
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar 