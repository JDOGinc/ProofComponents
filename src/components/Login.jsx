import React, { useState } from 'react';
import '../css/Login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica de autenticación (por ejemplo, verificar las credenciales).
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLoginSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <label className="toggle-label">
                <input type="checkbox" className="toggle-input" />
                <div className="toggle-ios"></div>
                Recordar
        </label>
        <div className='button-form-actions'>
            <button className="login-button">Iniciar sesión</button>
            <button className="register-button">Registro</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
