"use client"

import Link from "next/link";
import Image from "next/image";
import data from "../app/threeCreations.json";
import useTitleOnScroll from "../utils/useTitleOnScroll";
// import { useConfirm } from "./confirmModal/ConfirmContext";

export default function HomeCards() {
  const titleClassName = useTitleOnScroll("home-cards");

  return (
    <section className="home-cards">
      <h2 className={`home-cards${titleClassName}`}>Mes créations</h2>

      <ul className="home-cards_cards">
        {data?.map((el): JSX.Element => {
          return (
            <li className="cards" key={el.label}>
              <h3>{el.label}</h3>
              <Image
                src={el.image_url}
                alt={el.label}
                width={280}
                height={300}
              />
            </li>
          );
        })}
      </ul>

      <Link className="home-cards_button" href={"/realisations"}>
        En voir plus
      </Link>
    </section>
  );
}