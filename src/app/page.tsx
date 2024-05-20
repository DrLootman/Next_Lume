"use client"

import { useState } from "react";
import HeroHeader from "@/components/HeroHeader";
import HomeCards from "@/components/HomeCards";
import HomePresentation from "@/components/HomePresentation";
import NavBar from "@/components/globals/NavBar";
import Layout from "./layout";
import HomeBoards from "@/components/HomeBoards";
import HomeCarousel from "@/components/HomeCarousel";
import HomePicture from "@/components/HomePicture";

export default function Home() {
  return (
    <main>
      <HeroHeader />
      <HomePresentation />
      <HomePicture />
      <HomeCards />
      <HomeBoards />
      <HomeCarousel />
    </main>
  )
}
