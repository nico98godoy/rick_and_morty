import style from "./NavBar.module.css"
import { NavLink } from "react-router-dom";
import SearchBar from "./SeachBar/SeachBar";

const NavBar = ( {onSearch, logout} ) => {
    return(
        <header>
            <nav>
                <SearchBar onSearch={onSearch} />
                <NavLink to="/home" >
                    <h3>Home</h3>
                </NavLink>
                <NavLink to="/about" >
                    <h3>About</h3>
                </NavLink>
                <NavLink to="/favorites">
                    <h3>Favorites</h3>
                </NavLink>
                {/* <button className={style.button} >Cerrar sesion</button> */}
                <button className={style.button} onClick={logout} >Cerrar sesion</button>
            </nav>
        </header>
    )
}

export default NavBar;