import Navbar from "./components/NavBar/navbar";
import Announcement from "./components/announcement/announcement";
import Cards from "./components/Card/card";
import ImageCarousel from "./components/display/display";
import image1 from "./components/display/img1.jpg"
import image2 from "./components/display/img2.jpg"
import image3 from "./components/display/img3.jpg"



function App() {
  const images = [
    
    image3,
    image2,image1
    
    // Add more image URLs as needed
  ];
  return (

    <>
      <Announcement />
      <Navbar />
      <ImageCarousel images={images} />
      <ImageCarousel images={images} />

    </>

  );
}

export default App;