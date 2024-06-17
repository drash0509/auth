import React, { useState } from 'react';
import axios from 'axios';

export default function Loign() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonHovered, setIsButtonHovered] = useState(false);

  const buttonStyles = isButtonHovered
    ? { ...styles.button, ...styles.buttonHover }
    : styles.button;
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:4000/api/auth/login', {
          email,
          password,
        });
        console.log(response.data);
        alert('Login successful!');
        //  add logic to store the user's data or a session token here
      } catch (error) {
        if (error.response) {
          if (error.response.data.msg === 'Invalid Credentials') {
            alert('Login failed: Not a valid User.');
          } else {
            alert('Login failed: ' + error.response.data.errors[0].msg);
          }
        } else {
          alert('An error occurred. Please try again later.');
        }
      }
    };
  
    
    return (
      <div style={styles.container}>
        <h2 style={styles.header}>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="loginEmail" style={styles.label}>Email address</label>
            <input 
              type="email" 
              style={styles.input}
              id="loginEmail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="loginPassword" style={styles.label}>Password</label>
            <input 
              type="password" 
              style={styles.input}
              id="loginPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit"
          style={buttonStyles}
           onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
          >LOGIN</button>
          <div style={styles.footer}>
            <span style={styles.footerText} >Don`t have an account?</span>
            <button style={styles.RegButton}>Register</button>
         
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
        fontSize:'2.1vw',
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
        fontSize:'2.5vh',
    },
    input: {
      fontSize:'3vh',
       width: '100%',
        color: 'white',
        padding: '1vh',
        borderRadius: '4px',
        border: '1px solid #cccccc',
        backgroundColor: 'rgba(116, 112, 108, 0.6)',
    },
    button: {
       width:'100%',
        padding: '1vh',
        color: 'white',
        backgroundColor: '#56514F',
        borderRadius: '0.4vh',
        cursor: 'pointer',
        border: '1px solid white',
        fontSize:'3vh',
        outline: 'none',
        marginTop:'4vh',
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
      fontSize:'2vh',
      color: 'black', 
  },
  RegButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      textDecoration: 'underline',
      fontSize:'2vh',

  }
};