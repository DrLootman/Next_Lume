"use client"
import Image from "next/image";

export default function HeaderVideo() {
  return (
    <video className="hero-header_video" width="100%" height="580px" loop autoPlay muted style={{ objectFit: "cover" }}>
      <source src="/video/curtain.mp4" type="video/mp4" />
      <Image src="/curtain.jpg" alt="Curtain picture" width={500} height={500} />
      Your browser does not support the video tag.
    </video>
  )
}