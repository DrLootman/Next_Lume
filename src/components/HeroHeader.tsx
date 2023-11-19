"use client"
import { useState, useEffect } from "react";
import HeaderVideo from "./HeaderVideo";

function HeroHeader() {
  return (
    <header className="hero-header">
      <HeaderVideo />

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
    </header>
  )
}

export default HeroHeader;