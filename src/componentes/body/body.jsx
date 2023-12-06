import React from 'react';
import './body.css'; 

export default function Body() {
  return (
    <>
    <div class="producto">
      <img className='imagen-producto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5UbDe-md36cDRZkcBELXNjvRBG_uO2T1UQ&usqp=CAU'} alt='Remera Oversize' />
        <h2 className='nombreproducto' >Remera Oversize</h2>
        <p className='precio' >Precio: $3000</p>
        <button class="boton-carrito" onclick="agregarAlCarrito('Remera Oversize', 3000,)">Agregar al Carrito</button>
    </div>
  </>
  );
}

