export default function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <div style={styles.formContainer}>
        <form style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name:</label>
            <input type="text" style={styles.input} placeholder="Enter your name" />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input type="email" style={styles.input} placeholder="Enter your email" />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Message:</label>
            <textarea style={styles.textarea} placeholder="Enter your message"></textarea>
          </div>
          <button style={styles.button}>Send Message</button>
        </form>
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
    marginBottom: '2rem',
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#f5f5f5',
    padding: '2rem',
    borderRadius: '8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '1.1rem',
    color: '#444',
  },
  input: {
    padding: '0.8rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    outline: 'none',
  },
  textarea: {
    padding: '0.8rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    outline: 'none',
    minHeight: '150px',
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};
