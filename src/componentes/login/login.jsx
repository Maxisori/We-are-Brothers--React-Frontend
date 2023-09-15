import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './login.css'; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <div className="todo">
      <form>
        <h2 className="registro">Iniciar sesión</h2>
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleLogin}>Iniciar sesión</button>
        <p>¿No tienes una cuenta? <Link to="/registro">Regístrese</Link></p>
      </form>
      
    </div>
  );
};

export default LoginForm;