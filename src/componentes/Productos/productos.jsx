import React from 'react';
import './productos.css'; 
import {Link} from "react-router-dom";

const Productos = () => {
  return (
    <div>
      <div className="producto">
        <img className="producto1" src="/src/multimedia/blanca.jpeg" alt="Remera Negra" />
        <h2>Remera Negra1</h2>
        <p className="precio">$5.000</p>
        <button className="boton-carrito"><Link to= "/carrt"> VAgregar al Carrito </Link></button>
      </div>

      <div className="producto">
        <img className="producto2" src="/src/multimedia/negra piola.jpeg" alt="Remera Negra" />
        <h2>Remera Negra2</h2>
        <p className="precio">$5.000</p>
        <button className="boton-carrito"><Link to= "/cart"> VAgregar al Carrito </Link></button>
      </div>

      <div className="producto">
        <img className="producto3" src="/src/multimedia/descarga (2).jpeg" alt="Remera Negra" />
        <h2>Remera Negra3</h2>
        <p className="precio">$5.000</p>
        <button className="boton-carrito"><Link to= "/cart"> VAgregar al Carrito </Link></button>
      </div>

      <div className="producto">
        <img className="producto4" src="/src/multimedia/celeste.jpeg" alt="Remera Negra" />
        <h2>Remera Negra4</h2>
        <p className="precio">$5.000</p>
        <button className="boton-carrito"><Link to= "/cart"> VAgregar al Carrito </Link></button>
      </div>
    </div>
  );
};

export default Productos;