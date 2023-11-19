"use client"

export default function HeaderVideo() {
  return (
    <video className="hero-header_video" width={"100%"} height={"580px"} loop autoPlay muted style={{ objectFit: "cover" }}>
      <source src="/video/curtain.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}