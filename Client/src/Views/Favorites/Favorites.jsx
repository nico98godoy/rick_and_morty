import { connect } from "react-redux";
import Card from "../../Components/Card/Card";

const Favorites = ({myFavorites}) => {
    return(
        <div>
            {
                myFavorites.map( ({id,name, species, gender, image, onClose }) => 
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

const mapStateToProps = (state) => {
    return {myFavorites: state.myFavorites}
}

export default connect(mapStateToProps,null)(Favorites);