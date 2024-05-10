import Navbar from "./components/NavBar/navbar";
import Announcement from "./components/announcement/announcement";
import ImageCarousel from "./components/display/display";
import image1 from "./components/display/img1.jpg"
import image2 from "./components/display/img2.jpg"
import image3 from "./components/display/img3.jpg"
import Cards from "./components/Card/card";
import Cards1 from "./components/Card/card2";
import image4 from "../src/components/Card/image2.png"
import image5 from "../src/components/Card/image5.jpg"
import image6 from "../src/components/Card/image6.jpg"
import image7 from "../src/components/Card/image7.jpg"
import Footer from "./components/Footer/footer";
import CardSmall from "./components/Card/HomeSection2"


function App() {
  const images = [

    image3,
    image2, image1

    // Add more image URLs as needed
  ];

  const cards = [
    {
      description1: "Poloshique Cream Plain Polo T-Shirt",
      price:"Rs.999",
      size:"S M L XL XXL",
      imageUrl: "./CardImg/cream.jpg",
      hoverImageUrl: "./CardImg/cream2.jpg", // Path to the hover image
    },
    {
      description1: "Poloshique Black Plain Polo T-Shirt",
      price:"Rs.999",
      size:"S M L XL XXL",
      imageUrl: "./CardImg/black1.jpg",
      hoverImageUrl: "./CardImg/black2.jpg", // No hover image for this card
    },
    {
      description1: "Poloshique Mauve Plain Polo T-Shirt",
      price:"Rs.999",
      size:"S M L XL XXL",
      imageUrl: "./CardImg/purple1.jpg",
      hoverImageUrl: "./CardImg/purple2.jpg", // No hover image for this card
    },
    {
      description1: "Florazure Blue Floral Polo T-shirt",
      price:"Rs.999",
      size:"S M L XL XXL",
      imageUrl: "./CardImg/blue1.jpg",
      hoverImageUrl: "./CardImg/blue2.jpg", // No hover image for this card
    },
    {
      description1: "Florazure Green Floral Polo T-shirt",
      price:"Rs.999",
      size:"S M L XL XXL",
      imageUrl: "./CardImg/green1.jpg",
      hoverImageUrl: "./CardImg/green2.jpg", // No hover image for this card
    }
  ];

  return (

    <>
      <Announcement />
      <Navbar />
      <ImageCarousel images={images} />
      <div className="app px-10 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {cards.map((card, index) => (
        <CardSmall
          key={index}
          description={card.description1}
          price={card.price}
          size = {card.size}
          imageUrl={card.imageUrl}
          hoverImageUrl={card.hoverImageUrl}
        />
      ))}
    </div>
      <div style={{ display: "flex", flexDirection: "row", padding: " 30px 30px 50px 50px ", overflow: "hidden" }}>
        <Cards1 imageSrc={image4} />
        <Cards1 imageSrc={image7} />
        <Cards1 imageSrc={image5} />
        <Cards1 imageSrc={image6} />

      </div>
      <ImageCarousel images={images} />
    
      <Footer />     
    </>

  );
}

export default App;