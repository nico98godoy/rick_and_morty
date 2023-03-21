import { useState } from "react";
import Validation from "./Validation";

const Form = () => {

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

    const submitHandler = (event)  => {
        event.preventDefault();
        // Login(userData)
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
            <label htmlFor="username">username</label>
            <input 
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
            <label htmlFor="password">password</label>
            <input 
                type="text"
                name="password"
                value={user.password}
                onChange={handleInputChange}
            />
            {errors.password && <p>{errors.password}</p>}
            </div>

            <button type="submit">Login</button>

        </form>
    )
    
}

export default Form;