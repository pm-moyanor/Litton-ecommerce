import React, { useState } from 'react';
import Card from '../Card/Card';
import styles from "./CardGallery.module.css"

const CardGallery = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const popularCards = cards.slice(1,5)

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : cards.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex < cards.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className={styles.galleryContainer}>
      <button className={styles.leftButton} onClick={handlePrev}>{'<'}</button>
   
        {popularCards.map((card, index) => (
          <Card key={card.id} product={card} show={index === currentIndex} />
        ))}
 
      <button className={styles.rightButton} onClick={handleNext}>{'>'}</button>
    </div>
  );
};

export default CardGallery;
