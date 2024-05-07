import Navbar from "./components/NavBar/navbar";
import Announcement from "./components/announcement/announcement";
import ImageCarousel from "./components/display/display";
import image1 from "./components/display/img1.jpg"
import image2 from "./components/display/img2.jpg"
import image3 from "./components/display/img3.jpg"



function App() {
  const images = [
    
    image1,
    image2,
    image3
    // Add more image URLs as needed
  ];
  return (

    <>
      <Announcement />
      <Navbar />
      <ImageCarousel images={images} />
    </>

  );
}

export default App;