import { PrestationCardI } from "../utils/interfaces/interfaces.d";

interface PrestationCardI {
  index: number;
  Url: string;
  paragraph: string;
}

export default function RealisationCard({ index, Url, paragraph }: PrestationCardI): JSX.Element {
  return (
    <ul className={index % 2 === 0 ? "prestation-card" : "prestation-card_reverse"}>
        <li>
          <img src={URL} alt="picture of a home" />
        </li>
        <li>
          <p>{paragraph}</p>
        </li>
    </ul>
  )
}