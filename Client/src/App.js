// Estados
import { useEffect, useState } from 'react';
// Enrrutamiento
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import './App.css';
// Rutas
import Form from './Components/Form/Form';
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Detail from './Views/Detail/Detail';
import Favorites from './Views/Favorites/Favorites';


function App() {

  
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation() // 
  const navigate = useNavigate()

  // Estado Local
  const [ access, setAccess ] = useState(false)
  
  const username = "nico@mail.com";
  const password = "Nicolas1";

  // Funciones

  const onSearch = (id) =>{ // utilizamos esta funcion para poder buscar a los personajes 

    const URL = "http://localhost:3001/rickandmorty";
    // const KEY= "17d951a390ab.5993ee7c154faeb93df8";

    if( characters.find( (char) => char.id === id ) ) return alert("El personaje esta repetido");
// ?key=${KEY}
    fetch(`${URL}/character/${id}`)
    .then(res => res.json())
    .then((data)=>{
      if(data.name){
        setCharacters([...characters, data]);
      } else {
        alert("Algo malio sal");
      }
    });
    
  };

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }

  const login = (user) => {
    if (user.username === username && user.password === password ){
      setAccess(true);
      navigate("/home");
    }else{
      alert("Credenciales incorrectas");
    }
  }

  useEffect(()=>{
    !access && navigate("/");
  }, [access]);

  const logout = () =>{
    if(access){
      setAccess(false);
      navigate("/");
    }
  }


  return (
    <div className="App">
      
      
      { pathname !== "/" && <NavBar onSearch={onSearch} logout={logout} /> } 
     
      <Routes>

        <Route path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Home characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About  />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />

      </Routes>

    </div>
  );
}

export default App;
