import React from 'react';
import './body.css'; 
import { Link } from 'react-router-dom';

export default function Body() {

  return (
    <>
    <body>
      <div class="producto">
        <img className='imagen-producto' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5UbDe-md36cDRZkcBELXNjvRBG_uO2T1UQ&usqp=CAU'} alt='Remera Oversize' />
          <h2 className='nombreproducto' >Remera Oversize</h2>
          <p className='precio' >Precio: $3000</p>
          <button class="boton-carrito"><Link className='boton-carrito' to="/cart"> Agregar al Carrito </Link>  </button>
          
      </div>
    </body>    
  </>
  );
}

