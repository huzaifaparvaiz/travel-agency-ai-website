import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import DarkVeil from "./DarkVeil";
import Destination from "./Destination";
import FlowingMenu from "./FlowingMenu";
import Discounts from "./Discounts";
import ScrollReveal from "./ScrollReveal";
import MagicBento from "./MagicBento";
import About from "./About";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

const demoItems = [
  {
    link: "#",
    text: "Thailand",
    image:
      "https://www.bing.com/th/id/OIP.OgkKbvP_Zt-TuCKFq-6xqQHaE6?w=240&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    link: "#",
    text: "Elysium",
    image:
      "https://media.gettyimages.com/id/822273028/photo/fuji-mountain-in-autumn.jpg?s=612x612&w=0&k=20&c=pyaNf82uSbgKbR0nJGZBLzUeMrwfAsPXjbQd1Hc7jRs=",
  },
  {
    link: "#",
    text: "Siberia",
    image:
      "https://media.gettyimages.com/id/1286925479/photo/russia-republic-of-sakha-yakutsk-city-at-winter-dusk.jpg?s=612x612&w=0&k=20&c=gsLJDh1yS86BnuQqFy9rD5Wzo31j0XQ_iXG0-HHXMUo=",
  },
  {
    link: "#",
    text: "Notosh Forest",
    image:
      "https://media.gettyimages.com/id/935746242/photo/mata-atlantica-atlantic-forest-in-brazil.jpg?s=612x612&w=0&k=20&c=NqE6m2Q8J2w6M7x7Pi8VxnMzLzq-HJQvCt5EMuvMU5o=",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <DarkVeil />
      </div>
      <Intro />
      <Destination />
      <Discounts />
      <div style={{ height: "600px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
        We specialize in personalized travel experiences, from adventurous
        getaways to family holidays and luxury escapes. Whether you’re planning
        your first trip abroad or your tenth vacation, our mission is simple: to
        make every journey smooth, stress-free, and full of memories that last a
        lifetime.
      </ScrollReveal>
      <About />
      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      />
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
