import Cards from "../../Components/Cards/Cards";

const Home = ({characters, onClose}) => {
    return(
        <div>
            <h2>Componente Home</h2>
            <Cards characters={characters} onClose={onClose} />
        </div>
    )
}

export default Home;