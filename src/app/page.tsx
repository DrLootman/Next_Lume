"use client"

import HeroHeader from "@/components/HeroHeader";
import HomeCards from "@/components/HomeCards";
import HomePresentation from "@/components/HomePresentation";
import NavBar from "@/components/globals/NavBar";
import { useState } from "react";
import Layout from "./layout";
import NavLinks from "@/components/globals/NavLinks";
import HomeBoards from "@/components/HomeBoards";
import HomeCarousel from "@/components/HomeCarousel";
import HomePicture from "@/components/HomePicture";

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <main>
      {isMenuOpen && <NavLinks isMenuOpen={isMenuOpen} />}
      <HeroHeader isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <HomePresentation />
      <HomePicture />
      <HomeCards />
      <HomeBoards />
      <HomeCarousel />
    </main>
  )
}
