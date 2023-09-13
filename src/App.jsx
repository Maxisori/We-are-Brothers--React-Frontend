import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Carrito from './componentes/cart/cart';
import Header from './componentes/header/header';
import Body from './componentes/body/body';
import Login from './componentes/login/login';


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
          <Route 
            path='/login'
            element={
              <>
                <Header />
                <Login />
              </>
            }
          /> 

        </Routes>

      </Router>
    </>    
  );
}
export default App;


