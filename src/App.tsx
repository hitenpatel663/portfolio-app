import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { ContactUs } from "./components/ContactUs";
import { HeroSection } from "./components/HeroSection";
import Navigation from "./components/Navigation";
import { Service } from "./components/Service";
import { Testimonial } from "./components/Testimonial";
import WorkExperience from "./components/WorkExperience";
import { Works } from "./components/Works";

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutMe />
      <Service />
      <WorkExperience />
      <Works />
      <Testimonial />
      <ContactUs />
    </>
  );
}

export default App;
