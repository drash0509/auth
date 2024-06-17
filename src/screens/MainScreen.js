import React, { useState } from 'react';
import ReactModal from 'react-modal';
import mainbg from '../images/mainbg.png';
import plant from '../images/plant.png';
import MainSlider from '../Components/Slider_login/MainSlider';
import close from '../images/Close.png';

ReactModal.setAppElement('#root');

export default function MainScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false); 

  const buttonStyles = isButtonHovered
    ? { ...styles.button, ...styles.buttonHover }
    : styles.button;

    const imageStyles = isImageHovered
    ? { ...styles.image, ...styles.imageHover }
    : styles.image;

  return (
    <>
    
      <div style={styles.mainScreen}>
        <div style={styles.mask}/>
        <div style={styles.content}>
          <div style={styles.textSection}>
            <div style={styles.txt}>
              <h2 style={{ fontSize: '3vw' }}>Freshen the air in your house</h2>
              <p style={{ fontSize: '2vh' }}>
                Plants are incredibly diverse and vital to our planet, playing a crucial role in our ecosystems and providing numerous benefits. Here's a comprehensive description covering various aspects of plants
              </p>
            </div>
            <button
              style={buttonStyles}
              onClick={() => setIsModalOpen(true)}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              REGISTER/LOGIN
            </button>
          </div>
          <img src={plant} alt="Plant"   style={imageStyles}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)} />
        </div>
      </div>
      <div id="root">
        <ReactModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={customStyles}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            style={{ border: 'none', background: 'none',
             outline: 'none', 
           cursor: 'pointer',
              padding: 0, }}
          >
            <img
              src={close}
              alt="Close"
              style={{ width: '2.7vh', height: '2.7vh', margin: '2vh' }}
            />
          </button>
          <MainSlider />
        </ReactModal>
      </div>
    </>
  );
}

const styles = {
  mainScreen: {
    height: '100vh',
    backgroundImage: `url(${mainbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0 5vw',
  },
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(116, 112, 108, 0.5)',
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100vw',
  },
  textSection: {
    maxWidth: '35vw',
  },
  imageHover: {
    transform: 'scale(1.1)', 
    transition: 'transform 0.3s ease-in-out', 
  },
  
  image: {
    width: '30vw',
    height: '50vh',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
  },
  button: {
    marginTop: '2vh',
    padding: '1vw 2vw',
    backgroundColor: '#3E362F',
    color: 'white',
    border: '1px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
    outline: 'none'
  },
  buttonHover: {
    backgroundColor: 'white',
    color: '#3E362F', 
    transform: 'scale(1.1)', 
    outline: 'none'
  },
  txt: {
    color: 'white',
  },
  customStyles: {
    width: '40vw',
  },
};

const customStyles = {
  content: {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40vw',
    overflow: 'auto',
    borderRadius: '20px',
    backgroundColor: '#A39E92',
    boxShadow: '1px 8px 8px rgba(116, 112, 108, 0.6)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
  },
};
