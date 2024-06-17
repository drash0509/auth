import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

export default function MainSlider() {
    const [isLoginActive, setIsLoginActive] = useState(true);

    return (
        <div>
            <div style={styles.toggleButtons}>
                <div style={styles.buttonContainer}>
                    <button
                        onClick={() => setIsLoginActive(true)}
                        style={isLoginActive ? styles.activeButton : styles.inactiveButton}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setIsLoginActive(false)}
                        style={!isLoginActive ? styles.activeButton : styles.inactiveButton}
                    >
                        Register
                    </button>
                </div>
            </div>
            <div>
                {isLoginActive ? <Login/> : <Register/>}
            </div>
        </div>
    );
};

const styles = {
    toggleButtons: {
        display: 'flex',
        justifyContent: 'center',
        margin: '1vh',
        backgroundColor: '#A39E92', 
        marginBottom:'0'
       
    },
    buttonContainer: {
        width: '50vw',
        display: 'flex',
        backgroundColor: 'lightgrey',
        borderRadius: '1.5vh', 
    },
    activeButton: {
        flex: 1, 
        backgroundColor: '#56514F',
        border: 'none',
        padding: '1vh 2vw',
        cursor: 'pointer',
        color: 'white',
        borderRadius: '1.5vh',
        fontSize:'3vh',
        outline: 'none',
    },
    inactiveButton: {
        flex: 1,
        backgroundColor: 'lightgrey',
        border: 'none',
        padding: '1vw 2vh',
        cursor: 'pointer',
        borderRadius: '1.5vh',
        fontSize:'3vh',
        outline: 'none',
    }
};
