

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <div style={styles.sectionContainer}>
      <div style={{ ...styles.titleContainer, justifyContent: titleAlign === 'center' ? 'center' : 'flex-start' }}>
        <h2 style={styles.title}>{title}</h2>
        {link && <a href={link.href} style={styles.link}>{link.text}</a>}
      </div>
      <div style={styles.childrenContainer}>
        {children}
      </div>
    </div>
  );
};

const styles = {
  sectionContainer: {
    padding: '20px',
    border: '1px dashed gray',
    margin: '10px 0'
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    position: 'relative'
  },
  title: {
    color: 'darkgray',
    fontSize: '24px',
    margin: 0
  },
  link: {
    color: 'blue',
    fontSize: '18px',
    textDecoration: 'none',
    marginLeft: 'auto',
    position: 'absolute',
    right: 0
  },
  childrenContainer: {
    marginTop: '20px'
  }
};

export default Section;

