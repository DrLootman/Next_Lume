"use client"

// import ScrollButton from "../ScrollButton";
// import arrow from "../../../public/Arrow.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BiUpArrowCircle } from "react-icons/bi";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer_contact">
        <ul className="footer_contact_informations_list">
          <li>
            <p>Camille BERNARDINI</p>
          </li>
          <li>
            <p>06 - 64 - 24 - 39 - 73</p>
          </li>
          <li>
            <p>latelierlume@gmail.com</p>
          </li>
        </ul>

        <ul className="footer_contact_icons_list">
          <li>
            <Link href="https://www.instagram.com/latelierlume?igshid=YTQwZjQ0Nml0OA==">
              <AiFillInstagram />
            </Link>
          </li>
        </ul>

        <div className="footer_contact_scroll_top">
          <BiUpArrowCircle size={70} />
        </div>
      </section>
      <section className="footer_conditions">
        <p>Condition générales de ventes de <span>l&apos;Atelier Lume</span></p>
      </section>
    </footer>
  );
}

export default Footer;
