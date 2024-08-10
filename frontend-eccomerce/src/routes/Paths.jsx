import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductListingPage from '../pages/ProductListingPage';
import ProductViewPage from '../pages/ProductViewPage';
import NotFound from '../pages/NotFound';
import Layout from '../pages/Layout';

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout envolvendo todas as rotas principais */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductListingPage />} />
          <Route path="products/:id" element={<ProductViewPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
