import React from 'react';
import { useParams } from 'react-router-dom';

const ProductViewPage = () => {
  const { id } = useParams();
  return <div>Product View Page for product {id}</div>;
};

export default ProductViewPage;
