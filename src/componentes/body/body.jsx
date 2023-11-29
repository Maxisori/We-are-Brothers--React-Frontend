import React from 'react';
import './body.css'; 
import {Link} from "react-router-dom";



export default function Body() {
  return (
<<<<<<< HEAD

    <>
    <div class="producto" id="producto1">
        <h2>Remera OVersize blanca</h2>
        <p>Precio: $5000</p>
        <button class="boton-carrito" onclick="agregarAlCarrito('Remera Oversize Blanca', 50.00, '/src/multimedia/blanca.jpeg')">Agregar al Carrito</button>
=======
    <div className="centered-container">
      <p className="Texto">Ropa Oversize</p>
      <button className="centered-button"  onClick={() => {}}><Link to= "/carrito"> VER TIENDA </Link></button>
>>>>>>> e1202d3414870ab2900f7674555d9e4b493bea29
    </div>

    <div class="producto" id="producto2">
        <h2>Remera Oversize Celeste</h2>
        <p>Precio: $4000</p>
        <button class="boton-carrito" onclick="agregarAlCarrito('Remera Oversize Celeste', 40.00, '/src/multimedia/celeste.jpeg')">Agregar al Carrito</button>
    </div>
    <script src="/src/componentes/cart/cart.jsx"></script>
  </>
  );
}
