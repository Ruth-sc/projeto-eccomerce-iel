
import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <div>
      <ProductCard 
        image="https://via.placeholder.com/150"
        name="K-Swiss V8 - Masculino"
        price="R$ 200,00"
        priceDiscount="R$ 100,00"
        discount="30% OFF"
      />
    </div>
  );
};

export default App;
