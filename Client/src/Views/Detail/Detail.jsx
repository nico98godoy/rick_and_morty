import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Detail = () => {

    const { detailId } = useParams()
    const [ character, setCharacter ] = useState({})
    const URL = "http://localhost:3001/rickandmorty";
    // const KEY = "17d951a390ab.5993ee7c154faeb93df8";
    // ?key=${KEY}

    useEffect(()=>{
        axios(`${URL}/character/${detailId}`)
        .then(res => setCharacter(res.data))
    }, []);

    return(
        <div>
           {
                character.name? (
                <>
                    <h2>{character.name}</h2>
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                    <p>{character.gender}</p>
                    <p>{character.origen?.name}</p>
                    <img src={character.image} alt="img" />
                </>
                ) : (
                    <h3>Loading...</h3>
                )
            }
            <br/>
            <NavLink to="/home" >
                <button>Home</button>
            </NavLink>
        </div>
    );
}

export default Detail;