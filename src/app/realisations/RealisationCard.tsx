import { Metadata } from "next";
import Image from "next/image";

interface PrestationCardI {
  index: number;
  imagePath: string;
  paragraph: string;
}

export function generateMetadata({ index, imagePath, paragraph }: PrestationCardI): Metadata {
  return {
    title: `Image title is : ${imagePath}`,
    description: paragraph,
  }
}

export default function RealisationCard({ index, imagePath, paragraph }: PrestationCardI) {
  return (
    <ul className={index % 2 === 0 ? "prestation-card" : "prestation-card_reverse"}>
        <li>
          <Image 
            src={imagePath}
            alt="picture of a home"
            width={500}
            height={400} 
          />
        </li>
        <li>
          <p>{paragraph}</p>
        </li>
    </ul>
  )
}