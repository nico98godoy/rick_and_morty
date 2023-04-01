import Card from "../Card/Card";
import style from "./Cards.module.css"

const Cards = ({characters, onClose}) => {
    return(
        <div className={style.conteiner} >
            <h2>Las Cards</h2>
            {
                characters.map( ({id,name, species, gender, image }) => 
                    <Card 
                    key={id}
                    id={id}
                    name={name}
                    gender={gender}
                    species={species}
                    image={image}
                    onClose={onClose}
                    /> 
                )
            }
        </div>
    )
}

export default Cards;