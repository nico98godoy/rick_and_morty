import style from "./Form.module.css" 
import { useState } from "react";
import Validation from "./Validation";

const Form = ({login}) => {

    const [user, setUser] = useState({
        username:"",
        password:""
    })

    const [errors, setErrors] = useState({
        username:"",
        password:""
    })

    //Funciones

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUser({...user, [property]: value});

        setErrors(Validation({...user,[property]: value}))
    };

    const handlerSubmit = (event)  => {
        event.preventDefault();
        login(user)
    }

    return(
        <form className={style.form} onSubmit={handlerSubmit} >
            <div>
            <label className={style.label} htmlFor="username">Username</label>
            <input 
                className={style.input}
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
            />
            {errors.username && <p>{errors.username}</p>}
            </div>
            <br/>
            <br/>
            <div>
            <label className={style.label} htmlFor="password">Password</label>
            <input 
                className={style.input}
                type="text"
                name="password"
                value={user.password}
                onChange={handleInputChange}
            />
            {errors.password && <p>{errors.password}</p>}
            </div>

            <button className={style.button} type="submit">Login</button>

        </form>
    )
    
}

export default Form;