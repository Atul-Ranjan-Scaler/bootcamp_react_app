import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductLanding from './pages/ProductLanding';
import CartPage from './pages/CartPage';
import Navigation from './components/Navigation';
import SingleProduct from './pages/SingleProduct';
import './index/index.css';

function App() {

  return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' exact element={<ProductLanding />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/product/:id' element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
