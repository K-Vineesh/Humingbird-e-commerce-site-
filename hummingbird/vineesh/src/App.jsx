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

function App() {
  const images = [

    image3,
    image2, image1

    // Add more image URLs as needed
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




    </>

  );
}

export default App;