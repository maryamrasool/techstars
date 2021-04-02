import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Body/HeroSection/HeroSection";
import WhyStartupWeekend from "./components/Body/WhyStartupWeekend/WhyStartupWeekend";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="body-container">
          <div className="body-wrapper">
            <Navbar />
            <HeroSection />
            <WhyStartupWeekend />
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
