

const ProductCard = ({ image, name, price, priceDiscount, discount }) => {
  return (
    <div style={styles.card}>
      <div style={styles.discountBadge}>{discount}</div>
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.info}>
        <p style={styles.category}>Tênis</p>
        <h2 style={styles.name}>{name}</h2>
        <div style={styles.prices}>
          <p style={styles.price}>{price}</p>
          <p style={styles.priceDiscount}>{priceDiscount}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '13px',
    textAlign: 'center',
    maxWidth: '200px',
    margin: 'auto',
    position: 'relative',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  discountBadge: {
    position: 'absolute',
    top: '8px',
    left: '8px',
    backgroundColor: '#d4f4dd',
    color: '#00a650',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  info: {
    paddingTop: '3px',
    textAlign: 'left',
  },
  category: {
    fontSize: '12px',
    color: '#aaa',
    margintop: '2px',
  },
  name: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '2px',
    color: 'gray'
  },
  prices: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    textDecoration: 'line-through',
    color: 'gray',
    fontSize: '16px',
  },
  priceDiscount: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '16px',
  },
};

export default ProductCard;
