import React from "react";

const Input = (props) =>{
    const {setInput} = props;
    const {inputName} = props;
    const {label} = props;
    const {type} = props;
    return (
        <div className="form-group">
            <label for={inputName}>{label}:</label>
            <input type={type} onChange={e => setInput(e.target.value)} id={inputName}/>
        </div>
    )
}

export default Input