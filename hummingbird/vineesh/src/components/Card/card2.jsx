import React, { useState } from 'react';

function Cards1({ imageSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ padding: "0px 20px 0px 0px", width: "100%" }}>
      <div style={{
        position: 'relative',
        width: '100%',
        paddingTop: 'calc(507 / 338 * 100%)', // Aspect ratio 3:2 (507 / 338)
        overflow: 'hidden',
        borderRadius: '15px', // Rounded edges
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'boxShadow 0.3s ease, transform 0.3s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}>
        <img
          src={imageSrc}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '15px', // Rounded edges 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'boxShadow 0.8s ease, transform 0.8s ease',
            transform: isHovered ? 'scale(1.04)' : 'scale(1)',
          }}
          alt="Image"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  );
}

export default Cards1;
