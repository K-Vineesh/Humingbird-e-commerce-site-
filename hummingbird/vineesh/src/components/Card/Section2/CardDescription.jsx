import React ,{useState}from 'react';
import '../card.css'
const CardDes = ({ description, imageUrl, hoverImageUrl,size,price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card max-w-xs overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="w-full" src={isHovered ? hoverImageUrl : imageUrl} alt="Card" />
      <div className="py-3">
        <p className="text-sm">
          {description}
        </p>
        <p className="text-gray-700 text-sm mt-1">
          {price}
        </p>
        <p className="text-gray-700 text-sm mt-1">
          {size}
        </p>
      </div>
    </div>
  );
};

export default CardDes;
