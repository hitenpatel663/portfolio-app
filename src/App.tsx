import "./App.css";
import { ContactUs } from "./components/ContactUs";
import { HeroSection } from "./components/HeroSection";
import Navigation from "./components/Navigation";
import { Service } from "./components/Service";
import { Testimonial } from "./components/Testimonial";
import { Works } from "./components/Works";

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Service />
      <Works />
      <Testimonial />
      <ContactUs />
    </>
  );
}

export default App;
