const Validation = ( user ) => {
    const errors={};

    // Para el Username
    if(!user.username) errors.username= "Por favor completa este campo";
    else if (user.username.length > 35) errors.username ="Por favor no puede superar los 35 caracteres" ;
    else if ( !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.username)) errors.username ="Email invalido";
    else errors.username="";

    // Para la Password
    if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/.test(user.password)) errors.password= "Password invalida, o no cumple con algun requisito";
    else errors.password="";

    return errors;
}

export default Validation;