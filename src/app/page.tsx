"use client"

import HeroHeader from "@/components/HeroHeader";
import HomeCards from "@/components/HomeCards";
import HomePresentation from "@/components/HomePresentation";
import HomeBoards from "@/components/HomeBoards";
import HomeCarousel from "@/components/HomeCarousel";
import HomePicture from "@/components/HomePicture";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <link
          rel="preload"
          fetchPriority="high"
          href="/curtain.jpg"
          as="image"
          type="image/jpg"
        />
      </Head>
      <HeroHeader />
      <HomePresentation />
      <HomePicture />
      <HomeCards />
      <HomeBoards />
      <HomeCarousel />
    </main>
  )
}
