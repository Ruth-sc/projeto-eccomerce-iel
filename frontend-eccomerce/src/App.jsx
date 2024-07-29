
import ProductListing from './components/ProductListing';

const products = [
  {
    image: 'https://github.com/Ruth-sc/projeto-eccomerce-iel/blob/main/frontend-eccomerce/public/images/produc-image-1.jpeg?raw=true',
    name: 'K-Swiss V8 - Masculino',
    price: 'R$ 200,00',
    priceDiscount: 'R$ 100,00',
    discount: '50% OFF',
  },
  {
    image: 'https://github.com/Ruth-sc/projeto-eccomerce-iel/blob/main/frontend-eccomerce/public/images/produc-image-5.jpeg?raw=true',
    name: 'Adidas Run - Feminino',
    price: 'R$ 250,00',
    priceDiscount: 'R$ 150,00',
    discount: '40% OFF',
  },
  {
    image: 'https://github.com/Ruth-sc/projeto-eccomerce-iel/blob/main/frontend-eccomerce/public/images/produc-image-1.jpeg?raw=true',
    name: 'K-Swiss V8 - Masculino',
    price: 'R$ 200,00',
    priceDiscount: 'R$ 100,00',
    discount: '50% OFF',
  },
  {
    image: 'https://github.com/Ruth-sc/projeto-eccomerce-iel/blob/main/frontend-eccomerce/public/images/produc-image-5.jpeg?raw=true',
    name: 'Adidas Run - Feminino',
    price: 'R$ 250,00',
    priceDiscount: 'R$ 150,00',
    discount: '40% OFF',
  },
  {
    image: 'https://github.com/Ruth-sc/projeto-eccomerce-iel/blob/main/frontend-eccomerce/public/images/produc-image-1.jpeg?raw=true',
    name: 'K-Swiss V8 - Masculino',
    price: 'R$ 200,00',
    priceDiscount: 'R$ 100,00',
    discount: '50% OFF',
  },
  {
    image: 'https://github.com/Ruth-sc/projeto-eccomerce-iel/blob/main/frontend-eccomerce/public/images/produc-image-5.jpeg?raw=true',
    name: 'Adidas Run - Feminino',
    price: 'R$ 250,00',
    priceDiscount: 'R$ 150,00',
    discount: '40% OFF',
  },
  {
    image: 'https://github.com/Ruth-sc/projeto-eccomerce-iel/blob/main/frontend-eccomerce/public/images/produc-image-1.jpeg?raw=true',
    name: 'K-Swiss V8 - Masculino',
    price: 'R$ 200,00',
    priceDiscount: 'R$ 100,00',
    discount: '50% OFF',
  },
  {
    image: 'https://github.com/Ruth-sc/projeto-eccomerce-iel/blob/main/frontend-eccomerce/public/images/produc-image-5.jpeg?raw=true',
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
