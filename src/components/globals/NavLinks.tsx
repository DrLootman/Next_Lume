"use client"
import Link from "next/link";

export default function NavLinks() {
  return (
    <ul className="navlinks">
      <li>
        <Link href="/">
          Accueil
        </Link>
      </li>
      <li>
        <Link href="/realisations">
          Réalisations
        </Link>
      </li>
      <li>
        <Link href="/tarifs">
          Prestations / Tarifs
        </Link>
      </li>
      <li>
        <Link href="/contact">
          Contact
        </Link>
      </li>
    </ul>
  )
}