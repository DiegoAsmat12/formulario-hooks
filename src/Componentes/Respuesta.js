import React from "react";

const Respuesta = (props)=>{
    const {value, name} = props;
    return (
        <p>{name}: {value}</p>
    )
}

export default Respuesta;