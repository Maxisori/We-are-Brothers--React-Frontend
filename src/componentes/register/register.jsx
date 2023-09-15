import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './register.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleRegister = () => {
    console.log('Nombre de usuario:', username);
    console.log('Email:', email);
    console.log('Contraseña:', password);
    console.log('Repetir contraseña:', repeatPassword);
  };

  return (
    <div className="register-form"> 
      <form>
        <h2 className="registro">Registro</h2>
        <br />
        <label>Nombre de usuario:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <label>Repetir contraseña:</label>
        <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleRegister}>Registrarse</button>
        <p>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
      </form>
    </div>
  );
};

export default RegisterForm;