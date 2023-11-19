import { PrestationCardI } from "../utils/interfaces/interfaces.d";
import Image from "next/image";

interface PrestationCardI {
  index: number;
  imagePath: string;
  paragraph: string;
}

export default function RealisationCard({ index, imagePath, paragraph }: PrestationCardI): JSX.Element {
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