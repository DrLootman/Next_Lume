"use client"
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Loader from "./Loader";

interface PropsI {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const DynamicHeaderVideo = dynamic(() => import('./HeaderVideo'), {
  ssr: false,
  loading: () => <p style={{ height: "100vh" }}>Fetch in process...</p>
})


function HeroHeader({ isMenuOpen, toggleMenu }: PropsI) {
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isVideoLoaded) {
      setIsComponentVisible(true);
    }
  }, [isVideoLoaded]);

  function handleVideoLoad() {
    setIsVideoLoaded(!isVideoLoaded)
  }
  
  return (
    <header className="hero-header">
      <DynamicHeaderVideo onLoad={handleVideoLoad} />

      <h1 className={`hero-header_mainTitle`}>
        <div>
          <span>Atelier</span>
          <span>Lume</span>
          <span>par</span>
          <span>Camille</span>
          <span>BERNARDINI</span>
        </div>
        <div>
          <span>Décoratrice</span>
          <span>et</span>
          <span>révélatrice</span>
          <span>d&apos;intérieur</span>
        </div>
      </h1>

      <button type="button" className={`menu-btn ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="menu-btn__burger"></div>
      </button>
    </header>
  )
}

export default HeroHeader;