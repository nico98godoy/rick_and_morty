import Card from "../Card/Card";

const Cards = ({characters, onClose}) => {
    return(
        <div>
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