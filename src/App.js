import './App.css';
import React, { useState } from 'react';
import Input from './Componentes/Input';
import Respuesta from './Componentes/Respuesta';
const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword]=useState("");

  return (
    <div className="App">
      <form>
        <Input label="First Name" type="text" 
          inputName="first_name" setInput={setFirstName}/>
        <Input label="Last Name" type="text" 
          inputName="last_name" setInput={setLastName}/>
        <Input label="Email" type="email" 
          inputName="email" setInput={setEmail}/>
        <Input label="Password" type="password" 
          inputName="password" setInput={setPassword}/>
        <Input label="Confirm Password" type="password" 
          inputName="confirm_password" setInput={setConfirmPassword}/>
      </form>
      <div>
        <h3>Your Form Data</h3>
        <Respuesta value={firstName} name="First Name"/>
        <Respuesta value={lastName} name="Last Name"/>
        <Respuesta value={email} name="Email"/>
        <Respuesta value={password} name="Password"/>
        <Respuesta value={confirmPassword} name="Confirm Password"/>
      </div>
    </div>
  );
}

export default App;
