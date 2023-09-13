import React, { useState } from 'react';
import "./login.css";

const LoginForm = ({ onRegisterClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <div className="todo">
      <h2>Iniciar sesión</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleLogin}>Iniciar sesión</button>
      </form>
      <p>No tiene cuenta, <span onClick={onRegisterClick}>regístrese</span></p>
    </div>
  );
};

export default LoginForm;