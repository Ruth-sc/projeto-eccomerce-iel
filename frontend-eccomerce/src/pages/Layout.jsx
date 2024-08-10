import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom'; 
/* Utilizar Outlet ao invés de uma prop children é uma boa prática */

const Layout = () => {
  return (
    <div>
      <Header />
        <Outlet />  {/* Aqui será renderizado o conteúdo das rotas internas */}
      <Footer />
    </div>
  );
};

export default Layout;
