import React, { useState } from 'react';
import './App.css';
import Carrito from './componentes/cart/cart';
import Header from './componentes/header/header';
import Body from './componentes/body/body';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
      <Router>
          
        <Routes>

          <Route 
            path='/'
            element={
              <>
                <Header />
                <Body />
              </>
            }
          /> 
          <Route 
            path='/cart'
            element={
              <>
                <Header />
                <Carrito />
              </>
            }
          /> 

        </Routes>

      </Router>
    </>    
  );
}
export default App;

