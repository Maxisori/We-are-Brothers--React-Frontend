import React from 'react';
import './body.css'; 
import {Link} from "react-router-dom";


export default function Body() {
  return (
    <div className="centered-container">
      <p className="Texto">Ropa Oversize</p>
      <button className="centered-button"  onClick={() => {}}><Link to= "/carrito"> VER TIENDA </Link></button>
    </div>
  );
}
