

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
    border: '1px solid #fff',
    borderRadius: '4px',
    padding: '10px',
    textAlign: 'center',
    maxWidth: '260px',
    margin: 'auto',
    position: 'relative',
    backgroundColor: '#fff',
    gap: '0%',
    width: '260px'
   
  },
  discountBadge: {
    position: 'absolute',
    top: '18px',
    left: '15px',
    backgroundColor: '#a2fa2f',
    color:'#333' ,
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
