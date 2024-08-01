import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navigation.css'; // Importando o CSS

const Navigation = () => {
  return (
    <nav style={{ display: 'flex', marginTop: '10px' }}>
      <NavLink to="/" className="nav-link" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/products" className="nav-link" activeClassName="active">
        Produtos
      </NavLink>
      <NavLink to="/categories" className="nav-link" activeClassName="active">
        Categorias
      </NavLink>
      <NavLink to="/orders" className="nav-link" activeClassName="active">
        Meus Pedidos
      </NavLink>
    </nav>
  );
};

export default Navigation;
