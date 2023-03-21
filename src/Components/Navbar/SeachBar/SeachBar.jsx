import { useState } from "react";

const SearchBar = ({onSearch}) => {

  const [id, setId] = useState("");

  const handleInput = (event) => {
    setId(event.target.value)
  }

  return (
    <div>

      <input type='search' onChange={handleInput} />
      <button onClick={ () => onSearch(id) } >Agregar</button>
      {/* <button>Personaje aleatorio</button> */}
    </div>
  );
}

export default SearchBar;