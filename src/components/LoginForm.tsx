import React, { useState } from 'react';
import axios from 'axios';
import DatosUsuario from './DatosUsuario';
import '../login.css';
import logoMPerformance from '../assets/mperfomancelogo.png';

const FormularioLogin: React.FC = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const [datosUsuario, setDatosUsuario] = useState<any | null>(null);

  const manejarEnvio = async (evento: React.FormEvent) => {
    evento.preventDefault();

    try {
      const respuesta = await axios.post('https://dummyjson.com/auth/login', {
        username: nombreUsuario,
        password: contrasena,
      });

      if (respuesta.status === 200) {
        setMensajeError('');

        const datosMapeados = {
          id: respuesta.data.id,
          usuario: respuesta.data.username,
          correo: respuesta.data.email,
          nombre: respuesta.data.firstName,
          apellido: respuesta.data.lastName,
          genero: respuesta.data.gender,
        };

        setDatosUsuario(datosMapeados);
      }
    } catch (error: any) {
      if (error.response) {
        setMensajeError('Error de inicio de sesión: ' + (error.response.data.message || 'Credenciales inválidas'));
        setDatosUsuario(null);
      } else {
        setMensajeError('Ocurrió un error. Por favor, intenta nuevamente más tarde.');
        setDatosUsuario(null);
      }
    }
  };

  return (
    <div>
      {/* Logo */}
      <img
        src={logoMPerformance}
        alt="Logo M Performance"
        className="logo"
      />
      <form onSubmit={manejarEnvio}>
        <h2>Iniciar Sesión</h2>
        <div>
          <label htmlFor="nombreUsuario">Nombre de Usuario:</label>
          <input
            type="text"
            id="nombreUsuario"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}
      {datosUsuario && <DatosUsuario datosUsuario={datosUsuario} />}
    </div>
  );
};

export default FormularioLogin;
