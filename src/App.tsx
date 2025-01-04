import "./App.css";
import { ContactUs } from "./components/ContactUs";
import { HeroSection } from "./components/HeroSection";
import Navigation from "./components/Navigation";
import { Service } from "./components/Service";
import { Works } from "./components/Works";

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Service />
      <Works />
      <ContactUs />
    </>
  );
}

export default App;
