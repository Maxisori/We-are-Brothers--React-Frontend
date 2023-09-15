import React from 'react';
import './body.css'; 

export default function Body() {
  return (
    <div className="centered-container">
      <p className="Texto">Ropa Oversize</p>
      <button className="centered-button" onClick={() => { /* Agrega aquí la lógica de redirección o acción que deseas */ }}>
        VER TIENDA
      </button>
    </div>
  );
}

