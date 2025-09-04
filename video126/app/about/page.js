export default function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.text}>
        Welcome to our website! We are a passionate team dedicated to creating amazing web experiences.
        Our mission is to provide high-quality services and innovative solutions to our clients.
      </p>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Our Vision</h2>
        <p style={styles.text}>
          To be the leading provider of web development solutions, helping businesses 
          transform their digital presence and achieve their goals.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '1.5rem',
  },
  subHeading: {
    fontSize: '1.8rem',
    color: '#444',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#666',
    marginBottom: '1.5rem',
  },
  section: {
    marginTop: '2rem',
  },
};
