import React from 'react';

const Cart = ({ cartItems, onAddProduct, onClearCart, onCheckout }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={onAddProduct}>Añadir Producto</button>
      <button onClick={onClearCart}>Borrar Todo</button>
      <button onClick={onCheckout}>Ir a Pagar</button>
    </div>
  );
};

export default Cart;