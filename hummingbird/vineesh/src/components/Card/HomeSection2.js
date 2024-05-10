import React ,{useState}from 'react';

const CardSmall = ({ title, description, imageUrl, hoverImageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-lg relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="w-full" src={isHovered ? hoverImageUrl : imageUrl} alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardSmall;
