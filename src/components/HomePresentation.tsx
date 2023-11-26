"use client"
import Image from "next/image";

export default function HomePresentation() {
  return (
    <section className="presentation">
      <Image src="/Photo_Profile.jpg" width={320} height={399} alt="photograph of the website owner" />
      <p>Je suis Camille, une décoratrice d&apos;intérieur passionnée par l&apos;aménagement et la mise en scène des espaces de vie. Diplômée en décoration d&apos;intérieur et agencement d&apos;espace, j&apos;ai depuis travaillé avec différents clients pour créer des designs intérieurs sur mesure qui répondent à leurs besoins et reflètent leur personnalité.</p>
    </section>
  );
};