import React,{useState} from "react";
import CardDes from "./CardDescription";

function Section2() {
  const [currentTab, setCurrentTab] = useState("New Drops");
  const NewDrops = [
    {
      description1: "Poloshique Cream Plain Polo T-Shirt",
      price:"Rs.999",
      size:"S M L XL XXL",
      imageUrl: "./NewDrops/cream.jpg",
      hoverImageUrl: "./NewDrops/cream2.jpg", // Path to the hover image
    },
    {
      description1: "Poloshique Black Plain Polo T-Shirt",
      price:"Rs.999",
      size:"S M L XL XXL",
      imageUrl: "./NewDrops/black1.jpg",
      hoverImageUrl: "./NewDrops/black2.jpg", // No hover image for this card
    },
    {
      description1: "Poloshique Mauve Plain Polo T-Shirt",
      price:"Rs.999",
      size:"S M L XL XXL",
      imageUrl: "./NewDrops/purple1.jpg",
      hoverImageUrl: "./NewDrops/purple2.jpg", // No hover image for this card
    },
    {
      description1: "Florazure Blue Floral Polo T-shirt",
      price:"Rs.999",
      size:"S M L XL XXL",
      imageUrl: "./NewDrops/blue1.jpg",
      hoverImageUrl: "./NewDrops/blue2.jpg", // No hover image for this card
    },
    {
      description1: "Florazure Green Floral Polo T-shirt",
      price:"Rs.999",
      size:"S M L XL XXL",
      imageUrl: "./NewDrops/green1.jpg",
      hoverImageUrl: "./NewDrops/green2.jpg", // No hover image for this card
    }
  ];

  const Trending = [
    {
      description1: "Retroknit Beige Shirt",
      price:"Rs.1999",
      size:"S M L XL XXL",
      imageUrl: "./Trending/beige1.jpg",
      hoverImageUrl: "./Trending/beige2.jpg", // Path to the hover image
    },
    {
      description1: "Retroknit White Shirt",
      price:"Rs.1999",
      size:"S M L XL XXL",
      imageUrl: "./Trending/white1.jpg",
      hoverImageUrl: "./Trending/white2.jpg", // No hover image for this card
    },
    {
      description1: "Leon Black Embroidery Shirt",
      price:"Rs.1999",
      size:"S M L XL XXL",
      imageUrl: "./Trending/blackem1.jpg",
      hoverImageUrl: "./Trending/blackem2.jpg", // No hover image for this card
    },
    {
      description1: "Leon white Embroidery Shirt",
      price:"Rs.1999",
      size:"S M L XL XXL",
      imageUrl: "./Trending/whiteem1.jpg",
      hoverImageUrl: "./Trending/whiteem2.jpg", // No hover image for this card
    },
    {
      description1: "Ice Blue Baggy Fit Jeans",
      price:"Rs.1999",
      size:"30 32 34 36",
      imageUrl: "../Trending/pant1.jpg",
      hoverImageUrl: "./Trending/pant2.jpg", // No hover image for this card
    }
  ];

  const handleClick = (tabName) => {
    setCurrentTab(tabName);
  };

  const renderTabContent = () => {
    if (currentTab === "New Drops") {
      return NewDrops.map((card, index) => (
        <CardDes
          key={index}
          description={card.description1}
          price={card.price}
          size={card.size}
          imageUrl={card.imageUrl}
          hoverImageUrl={card.hoverImageUrl}
        />
      ));
    } else if (currentTab === "Most Trending") {
      return Trending.map((card, index) => (
        <CardDes
          key={index}
          description={card.description1}
          price={card.price}
          size={card.size}
          imageUrl={card.imageUrl}
          hoverImageUrl={card.hoverImageUrl}
        />
      ));
    }
  };

  return (
    <div className="cardContainer">
      <div class=" mt-5 mb-12 tab flex items-center justify-center"> 
          <button className="bg-black text-white px-2.5 py-1.5 rounded-full mx-1.5 tablinks  active" id="tab-New-Drops-1" onClick={() => handleClick("New Drops")}>
              NEW DROPS
          </button>
  
          <button className=" border border-black  px-2.5 py-1.5 rounded-full mx-1.5 tablinks  " id="tab-Most-Trending-2" onClick={() => handleClick("Most Trending")}>
              MOST TRENDING
          </button>
      </div>
      <div className="app px-10 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {renderTabContent()}
      </div>
      <div className="flex items-center justify-center">
      <button className="text-xs tracking-wider border px-4 py-2 text-gray-600">
              VIEW ALL
      </button>
      </div>
    </div>
  );
}

export default Section2;
