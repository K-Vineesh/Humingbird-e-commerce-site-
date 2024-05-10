import Card from "./components/Card/HomeSection2";
import Navbar from "./components/NavBar/navbar";
import Announcement from "./components/announcement/announcement";
import ImageCarousel from "./components/display/display";
import image1 from "./components/display/img1.jpg"
import image2 from "./components/display/img2.jpg"
import image3 from "./components/display/img3.jpg"
import CardSmall from "./components/Card/HomeSection2"


function App() {
  const images = [

    image3,
    image2, image1

    // Add more image URLs as needed
  ];

  const cards = [
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "./CardImg/cream.jpg",
      hoverImageUrl: "./CardImg/cream2.jpg", // Path to the hover image
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://via.placeholder.com/350x150",
      hoverImageUrl: "", // No hover image for this card
    },
    {
      title: "Card 3",
      description: "Description for Card 3",
      imageUrl: "https://via.placeholder.com/350x150",
      hoverImageUrl: "", // No hover image for this card
    },
    {
      title: "Card 4",
      description: "Description for Card 4",
      imageUrl: "https://via.placeholder.com/350x150",
      hoverImageUrl: "", // No hover image for this card
    },
    {
      title: "Card 5",
      description: "Description for Card 5",
      imageUrl: "https://via.placeholder.com/350x150",
      hoverImageUrl: "", // No hover image for this card
    }
  ];

  return (

    <>
      <Announcement />
      <Navbar />
      <ImageCarousel images={images} />

      <div style={{ display: "flex", flexDirection: "row", padding: " 30px 30px 50px 50px ", overflow: "hidden" }}>
        <Cards1 imageSrc={image4} />
        <Cards1 imageSrc={image7} />
        <Cards1 imageSrc={image5} />
        <Cards1 imageSrc={image6} />

      </div>
      <ImageCarousel images={images} />

      <Footer />




      <div className="app flex px-10">
      {cards.map((card, index) => (
        <CardSmall
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          hoverImageUrl={card.hoverImageUrl}
        />
      ))}
    </div>
    </>

  );
}

export default App;