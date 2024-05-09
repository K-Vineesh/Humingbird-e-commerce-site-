import React from 'react';
import './card.css';

const Cards = ({ shirtName, imageUrl }) => {
  return (
    <div className="shirt-card">
      <img src={imageUrl} alt={shirtName} className="shirt-image" />
      <h2 className="shirt-name">{shirtName}</h2>
    </div>
  );
};

export default Cards; 
