import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function CarouselContainer({ data }: { data: any[] }) {
  const carouselSettings = {
    className: "carousel",
    autoPlay: true,
    infiniteLoop: true,
    interval: 5000,
    showArrows: true,
    width: "80%",
    showThumbs: true,
    showStatus: false
  }

  return (
    <Carousel {...carouselSettings}>
      {data.map((el) => (
        <div key={el.id}>
          <Image src={el.URL} alt="image in the carousel" width={500} height={500} loading="lazy" />
          <p className="legend">{el.label}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselContainer;