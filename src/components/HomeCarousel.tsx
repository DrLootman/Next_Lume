import CarouselContainer from "./CarouselContainer";
import useTitleOnScroll from "../utils/useTitleOnScroll";
import Link from "next/link";
import data from "../utils/carousel.json";

function HomeCarousel(): JSX.Element {
  const titleClassName = useTitleOnScroll("home-carousel");
  return (
    <div className="home-carousel">
      <h2 className={`home-carousel${titleClassName}`}>Planches en 3D</h2>

      {data.length &&
        <CarouselContainer data={data} />
      }
      
      <Link className="home-carousel_button" href={"/realisations"}>
        En savoir plus
      </Link>
    </div>
  )
}

export default HomeCarousel;