import Image from "next/image";

export default function HomePicture() {
  return (
    <Image
      className="home-picture"
      src="/Deco_1.jpg" 
      alt="Photographie de mon salon, présentant un canapé en son centre" 
      width={1200} 
      height={700} 
    />
  )
}