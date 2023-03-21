import { NavLink } from "react-router-dom";
import SearchBar from "./SeachBar/SeachBar";

const NavBar = ( {onSearch} ) => {
    return(
        <header>
            <nav>
                <SearchBar onSearch={onSearch} />
                <NavLink to="/home" >
                    <h3>Home</h3>
                </NavLink>
                <button>Cerrar secion</button>
            </nav>
        </header>
    )
}

export default NavBar;