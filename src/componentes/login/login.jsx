import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const LoginForm = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      setError('Por favor, complete todos los campos.');
    } else if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
    } else {
      setError('');
      setTimeout(() => {
        history.push('/home');
      }, 2000);
    }
  };

  return (
    <div className="todo1">
      <form className='form-login'>
        <h2 className="registro">Iniciar sesión</h2>
        <br />
        <label>Email o Nombre de usuario:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleLogin}>Iniciar sesión</button>
        {error && <div className="error-message">{error}</div>}
        <p>¿No tienes una cuenta? <Link to="/registro">Regístrese</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;