import React, { useState } from 'react';
import './App.css';
import Cart from './componentes/cart/cart';
import Header from './componentes/header/header';
import Body from './componentes/body/body';
import {Browser}



function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddProduct = () => {
    const productName = prompt('Ingrese el nombre del producto:');
    if (productName) {
      setCartItems([...cartItems, productName]);
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      alert('¡Gracias por su compra!');
      setCartItems([]);
    } else {
      alert('El carrito está vacío. Agregue productos antes de pagar.');
    }
  };

  return (
    <>      
      <div className="app">
        <header>
          <nav>
            <ul>
              <li>
                {/* Aquí se puede mostrar un ícono de carrito */}
                <button onClick={() => setCartOpen(!cartOpen)}>Carrito</button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <h1>Tienda en Línea</h1>
          <p>Explora nuestros productos increíbles.</p>
        </main>
        {cartOpen && (
          <Cart
            cartItems={cartItems}
            onAddProduct={handleAddProduct}
            onClearCart={handleClearCart}
            onCheckout={handleCheckout}
          />
        )}
      </div>

      <Router>
          
        <Routes>

        <Route 
          path='/'
          element={
          <>
            <Header />
            <Header />
            <Carrito />
          </>
          }
          <Route



        </Routes>






      </Router>
      




      <Header/>
      <Body/>

    </>    
  );
}

export default App;

