import { Link } from "react-router-dom";
import GetinTouch from '../Sections/Home/GetInTouch'
import HomeHero from "../Sections/Home/Homehero";
import VenturesSection from "../Sections/Home/Venturessection";
import HeroSlider from "../Sections/Home/HeroSlider";
import Homework from "../Sections/Home/Homework";
import TechEvents from '../Sections/Home/TechEvents'
import Testimonials from "../Sections/Home/Testimonials";
import TheStory from "../Sections/Home/Thestory";

function Home() {
  return (
     <>
     <HomeHero/>
     <Homework />
     <TechEvents />
     <VenturesSection />
     <HeroSlider />
     <Testimonials />
     <TheStory />
     <GetinTouch/>
     </>
  );
}

export default Home