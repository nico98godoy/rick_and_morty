const Card = ( {id, name, species, gender, image, onClose} ) => {
    return(
        <div key={id} >
            <h2>Componente Card</h2>
            <button onClick={() => onClose(id)}>X</button>
            <h3>Nombre: {name} </h3>
            <img src={image} alt={name} />
            <h3>Especie: {species} </h3>
            <h3>Genero: {gender}</h3>
        </div>
    )
}

export default Card;