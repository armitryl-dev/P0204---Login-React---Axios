import React from 'react';
import '../login.css';

interface DatosUsuarioProps {
  datosUsuario: {
    id: number;
    usuario: string;
    correo: string;
    nombre: string;
    apellido: string;
    genero: string;
  };
}

const DatosUsuario: React.FC<DatosUsuarioProps> = ({ datosUsuario }) => {
  return (
    <div className="datos-usuario">
      <h3>Datos del Usuario</h3>
      <p><strong>ID:</strong> {datosUsuario.id}</p>
      <p><strong>Usuario:</strong> {datosUsuario.usuario}</p>
      <p><strong>Correo electrónico:</strong> {datosUsuario.correo}</p>
      <p><strong>Nombre:</strong> {datosUsuario.nombre} {datosUsuario.apellido}</p>
      <p><strong>Género:</strong> {datosUsuario.genero}</p>
    </div>
  );
};

export default DatosUsuario;
