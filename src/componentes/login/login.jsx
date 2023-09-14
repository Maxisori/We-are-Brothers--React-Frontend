import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import './login.css'; // Importa los estilos compartidos

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <div className="todo"> {/* Aplica la clase 'todo' del CSS compartido */}
      <h2 className="registro">Iniciar sesión</h2> {/* Aplica la clase 'registro' del CSS compartido */}
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleLogin}>Iniciar sesión</button>
      </form>
      <p>No tiene cuenta, <Link to="/registro">regístrese</Link></p>
    </div>
  );
};

export default LoginForm;