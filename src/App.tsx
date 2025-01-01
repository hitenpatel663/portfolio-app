import "./App.css";
import { ContactUs } from "./components/ContactUs";
import { HeroSection } from "./components/HeroSection";
import Navigation from "./components/Navigation";
import { Service } from "./components/Service";

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Service />
      <ContactUs />
    </>
  );
}

export default App;
