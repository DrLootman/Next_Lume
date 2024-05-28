"use client"

// import useScroll from "../../utils/useScroll";
import logo from "../../../public/Logo-rm-bg.png";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./NavBar.scss";

function NavBar(): JSX.Element {
  // const className = useScroll();
  const pathname = usePathname();

  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/realisations", label: "Réalisations" },
    { to: "/tarifs", label: "Prestations / Tarifs" }
  ];

  return (
    <>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <Image src={logo} alt="logo" width={100} height={100} priority />

        <ul className="nav-links">
          {navLinks.map((link) => {
            return (
              <li key={link.label} className="nav-links_item">
                <Link
                  aria-current={pathname === link.to ? "page" : 'false'}
                  href={link.to}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button type="button" name="menu-btn" className={`menu-btn ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path className="line line2" d="M 20,50 H 80" />
          <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
      </button>
    </>
  );
}

export default NavBar;
