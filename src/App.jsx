import React, { useState } from "react"; // ✅ IMPORTANT
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import Projects from "./components/sections/Projects";
import RevealOnScroll from "./components/RevealOnScroll";
import Contact from "./components/sections/Contact";
//import Footer from "./components/sections/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ease-in-out ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <RevealOnScroll />
        <Contact />
       
      </div>
    </>
  );
}

export default App;
