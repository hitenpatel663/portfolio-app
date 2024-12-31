import "./App.css";
import { HeroSection } from "./components/HeroSection";
import Navigation from "./components/Navigation";
import { Service } from "./components/Service";

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <Service />
    </>
  );
}

export default App;
