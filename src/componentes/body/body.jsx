import React from 'react';
import './body.css'; 
import { Link } from 'react-router-dom';
import Foto from '../../multimedia/image.png';

export default function Body() {
  return (
    <>
    <img src={Foto} alt="Imagen de fondo" className="foto" />
    <div className="Ropa Oversize Inicio">
        <p className="Texto">Ropa Oversize</p>
        <div className="b">
            <Link to="/" target="_blank" className="centered-button">VER TIENDA</Link>
        </div>
    </div>
    </>
  );
}
