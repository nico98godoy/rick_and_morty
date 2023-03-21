import styles from "./About.module.css"
import foto from "./IMG_20230218_215852814.jpg"

export default function About(){


    return(
        <>
            <h1>Este es el componente About</h1>
            <h2>Cread by Godoy Nicolas</h2>
            <p>Fue un proceso larogo y sacrificado, sin compañeros (el Rodri nomas) no hubiera llegado tan lejos.</p>
            <img src={foto}  alt="" className={styles.foto} />           
        </>
    );
}