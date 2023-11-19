"use client"

// import ScrollButton from "../ScrollButton";
// import arrow from "../../../public/Arrow.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer_contact">
        <ul className="footer_contact_informations_list">
          <li>
            Camille BERNARDINI
          </li>
          <li>
            <a href="telto:0664243973">06 - 64 - 24 - 39 - 73</a>
          </li>
          <li>
            <a href="mailto:latelierlume@gmail.com">latelierlume@gmail.com</a>
          </li>
        </ul>

        <ul className="footer_contact_icons_list">
          <li>
            <Link href="https://www.instagram.com/latelierlume?igshid=YTQwZjQ0Nml0OA==">
              <AiFillInstagram />
            </Link>
          </li>
        </ul>

      </section>
      <section className="footer_conditions">
        <Link href="/conditions">Condition générales de ventes de <b>l&apos;Atelier Lume</b></Link>
      </section>
    </footer>
  );
}

export default Footer;
