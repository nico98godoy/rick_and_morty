// Estados
import { useEffect, useState } from 'react';
// Enrrutamiento
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import './App.css';
// Rutas
import Form from './Components/Form/Form';
import Home from './Views/Home/Home';


function App() {

  // datos de la api
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation() // 

  // Funciones
  useEffect(()=>{}, []);

  const onSearch = (id) =>{ // utilizamos esta funcion para poder buscar a los personajes 

    const URL = "https://be-a-rym.up.railway.app/api";
    const KEY= "17d951a390ab.5993ee7c154faeb93df8";

    if( characters.find( (char) => char.id === id ) ) return alert("El personaje esta repetido");

    fetch(`${URL}/character/${id}?key=${KEY}`)
    .then(res => res.json())
    .then((data)=>{
      if(data.name){
        setCharacters([...characters, data]);
      } else {
        alert("No existe un personaje con ese ID");
      }
    });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }



  return (
    <div className="App">
      
      
      { pathname !== "/" && <NavBar onSearch={onSearch} /> } 
     
      <Routes>

        <Route path='/' element={<Form  />} />
        <Route path='/home' element={<Home characters={characters} onClose={onClose} />} />

      </Routes>

    </div>
  );
}

export default App;
