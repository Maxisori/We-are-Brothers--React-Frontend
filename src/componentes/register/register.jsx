import React, { useState } from 'react';

const RegisterForm = ({ onLoginClick }) => {
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
    <div>
      <h2>Registro</h2>
      <form>
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
      </form>
      <p>¿Ya tienes una cuenta? <span onClick={onLoginClick}>Iniciar sesión</span></p>
    </div>
  );
};

export default RegisterForm;