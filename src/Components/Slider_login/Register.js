import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonHovered, setIsButtonHovered] = useState(false);

  const buttonStyles = isButtonHovered
    ? { ...styles.button, ...styles.buttonHover }
    : styles.button;
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:4000/api/auth/register', {
          name,
          email,
          password,
        });
        console.log(response.data);
        alert('Registration successful!');
      } catch (error) {
        if (error.response) {
          alert('Registration failed: ' + error.response.data.errors[0].msg);
        } else {
          alert('An error occurred. Please try again later.');
        }
      }
    };

    return (
      <div style={styles.container}>
        <h2 style={styles.header}>Register</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="registerName" style={styles.label}>Name</label>
            <input 
              type="text" 
              style={styles.input}
              id="registerName" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="registerEmail" style={styles.label}>Email address</label>
            <input 
              type="email" 
              style={styles.input}
              id="registerEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="registerPassword" style={styles.label}>Password</label>
            <input 
              type="password" 
              style={styles.input}
              id="registerPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" 
          style={buttonStyles}
           onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
          >REGISTER</button>
          <div style={styles.footer}>
            <span style={styles.footerText}>Already have an account?</span>
            <button style={styles.loginButton}>Login</button>
          </div>
        </form>
      </div>
    );
}

const styles = {
  container: {
    marginTop: '4vh',  
    padding: '2vh',    
    borderRadius: '8vw',  
  },
  header: {
    marginBottom: '2vh',  
    color: 'white',
    fontSize: '2.1vw', 
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1vh', 
  },
  inputGroup: {
    marginBottom: '1.5vh',  
  },
  label: {
    marginBottom: '0.5vh', 
    display: 'inline-block',
    color: '#cccccc',
    fontSize: '2.5vh',  
  },
  input: {
    fontSize: '3vh', 
    width: '100%',
    color: 'white',
    padding: '1vh', 
    borderRadius: '4px',
    border: '1px solid #cccccc',
    backgroundColor: 'rgba(116, 112, 108, 0.6)',
  },
  button: {
    marginTop: '4vh',  
    width: '100%',
    padding: '1vh', 
    color: 'white',
    backgroundColor: '#56514F',
    borderRadius: '0.4vh',  
    cursor: 'pointer',
    border: '1px solid white',
    fontSize: '3vh', 
    outline: 'none'
  },
  buttonHover: {
    backgroundColor: '#cccccc',
    color: '#3E362F', 
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: '2vh',  
    color: 'black',
  },
  loginButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: '2vh',
  }
};