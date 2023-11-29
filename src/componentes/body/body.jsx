import React from 'react';
import './body.css'; 




export default function Body() {
  return (

    <>
    <div class="producto" id="producto1">
        <h2>Producto 1</h2>
        <p>Precio: $50.00</p>
        <button class="boton-carrito" onclick="agregarAlCarrito('Producto 1', 50.00, 'https://acortar.link/lEeOpj')">Agregar al Carrito</button>
    </div>
    <script src="/src/componentes/cart/cart.jsx"></script>
  </>
  );
}
