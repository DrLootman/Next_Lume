"use client"

// import useScroll from "../../utils/useScroll";
import logo from "../../../public/Logo-rm-bg.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

function NavBar({ isMenuOpen }: { isMenuOpen: boolean}): JSX.Element {
  // const className = useScroll();
  const pathname = usePathname();

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/realisations", label: "Réalisations" },
    { to: "/tarifs", label: "Prestations / Tarifs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <Image src={logo} alt="logo" width={175} height={180} priority/>

      <ul className="nav-links">
        {navLinks.map((link) => {
          return (
            <li key={link.label} className="nav-links_item">
              <Link
                href={link.to}
                className={pathname == `${link.to}` ? "active" : "nav-links_anchor"}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
