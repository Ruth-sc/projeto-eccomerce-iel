
import ProductListing from './components/ProductListing';

const products = [
  {
    image: 'https://via.placeholder.com/150',
    name: 'K-Swiss V8 - Masculino',
    price: 'R$ 200,00',
    priceDiscount: 'R$ 100,00',
    discount: '50% OFF',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Adidas Run - Feminino',
    price: 'R$ 250,00',
    priceDiscount: 'R$ 150,00',
    discount: '40% OFF',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Adidas Run - Feminino',
    price: 'R$ 250,00',
    priceDiscount: 'R$ 150,00',
    discount: '40% OFF',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Adidas Run - Feminino',
    price: 'R$ 250,00',
    priceDiscount: 'R$ 150,00',
    discount: '40% OFF',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Adidas Run - Feminino',
    price: 'R$ 250,00',
    priceDiscount: 'R$ 150,00',
    discount: '40% OFF',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Adidas Run - Feminino',
    price: 'R$ 250,00',
    priceDiscount: 'R$ 150,00',
    discount: '40% OFF',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Adidas Run - Feminino',
    price: 'R$ 250,00',
    priceDiscount: 'R$ 150,00',
    discount: '40% OFF',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Adidas Run - Feminino',
    price: 'R$ 250,00',
    priceDiscount: 'R$ 150,00',
    discount: '40% OFF',
  },
  // Adicione mais produtos conforme necessário
];

const App = () => {
  return (
    <div>
      <ProductListing products={products} />
    </div>
  );
};

export default App;
