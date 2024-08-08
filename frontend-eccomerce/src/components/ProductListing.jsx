
import ProductCard from './ProductCard';

const ProductListing = ({ products }) => {
  return (
    <div style={styles.listing}>
      {products.map((product, index) => (
        <ProductCard 
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
          discount={product.discount}
        />
      ))}
    </div>
  );
};

const styles = {
  listing: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1%',
    paddingBottom: '90px',
    paddingTop: '10px',
    paddingLeft: '50px',
    paddingRight: '50px'

  }
};
 


export default ProductListing;
