import { useState } from "react";
import style from "./SeachBar.module.css";

const SearchBar = ({onSearch}) => {

  const [id, setId] = useState("");

  const handleInput = (event) => {
    let value = event.target.value;
    setId(value);
  }

  const handleSearch= () => {
    onSearch(id);
    setId("");
  }

  return (
    <div>

      <input className={style.input} type='search' onChange={handleInput} />
      <button className={style.button} onClick={ handleSearch } >Agregar</button>
      {/* <button>Personaje aleatorio</button> */}
    </div>
  );  
}

export default SearchBar;