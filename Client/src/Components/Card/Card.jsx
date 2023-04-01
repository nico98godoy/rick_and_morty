import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import style from "./Card.module.css"
import { addFavorite, deleteFavorite } from "../../Redux/Actions";

const Card = ( {id, name, species, gender, image, onClose, addFavorite, deleteFavorite, myFavorites} ) => {

    const [ isFav, setIsFav ]  = useState(false)


    const handleFavorite = () => {
        if(isFav){
            setIsFav(false);
            deleteFavorite(id);
        }else{
            setIsFav(true);
            addFavorite({id, name, species, gender, image, onClose});
        }
    }

    useEffect( () => {
        myFavorites.forEach( (fav) => {
            if (fav.id === id){
                setIsFav(true);
            }
        });
    }, [myFavorites])

    return(
        <div className={style.card} key={id} >
            <h2>Componente Card</h2>
            {
                isFav ? (
                    <button onClick={handleFavorite}>❤️</button>
                ) : (
                    <button onClick={handleFavorite}>🤍</button>
                )
            }
            <button className={style.closeButton} onClick={() => onClose(id)}>X</button>
            <h3>Nombre: <NavLink to={`/detail/${id}`} > {name} </NavLink> </h3>
            <img src={image} alt={name} />
            <h3>Especie: {species} </h3>
            <h3>Genero: {gender}</h3>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
       addFavorite: (character)=>{
          dispatch(addFavorite(character));
       },
       deleteFavorite: (id)=>{
          dispatch(deleteFavorite(id));
       }
    };
 };

 const mapStateToProps = (state) => {
    return {myFavorites: state.myFavorites}
 }

export default connect(mapStateToProps, mapDispatchToProps)(Card);
