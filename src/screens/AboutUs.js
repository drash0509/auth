import React from 'react';
import backgroundImage from '../images/aboutus.png'; // Import your background image
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'


function CustomCard({ imgSrc, description }) {
  return (
    <div className="card" style={{ width: '20vw', padding: '10vh', paddingTop: '2vh',paddingBottom: '2vh',backgroundColor: 'rgba(204,204,204, 0.8)' }}>
      <div style={{  height: '30vh', overflow: 'hidden' }}>
        <img 
          className="card-img-top" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          src={imgSrc} 
          alt="Card cap" 
        />
      </div>
      <div className="card-body" style={{padding:'0'}}>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
  }

export default function AboutUs() {
    const cardData = [
        {
          imgSrc: p1,
          description: ' "The earth laughs in flowers." - Ralph Waldo Emerson '
        },
        {
            imgSrc: p2,
            description: '  "He who plants a tree plants a hope." - Lucy Larcom '
          },
          {
            imgSrc: p3,
            description: '  "Plants give us oxygen for the lungs and for the soul." - Linda Solegato'
          },
          {
            imgSrc: p4,
            description: '"To plant a garden is to believe in tomorrow." - Audrey Hepburn '
          },
        
       
      ];
    
  return (
    <div>
      <div style={styles.header}>
        <h1 style={styles.title}>About Us</h1>
      </div>
      <div  style={{
        width:'100vw',
        backgroundColor:'#47413D'}}>
      <div style={styles.content}>
        <p>
          Welcome to Plant-Book, your number one source for all things plants. We're dedicated to giving you the very best of plant varieties, with a focus on dependability, customer service, and uniqueness.
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
      </div>
      <div>
      <div style={{ display: 'flex', overflowX: 'scroll',padding:'10vh',gap:'5vh' }}>
      {cardData.map((card, index) => (
        <CustomCard key={index} imgSrc={card.imgSrc} description={card.description} />
      ))}
    </div>
      </div>
      </div>
    </div>
  );
}

const styles = {
  header: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: '4rem', 
  },
  content: {
    padding: '2rem',
    color:'#ccc'
  },
};
