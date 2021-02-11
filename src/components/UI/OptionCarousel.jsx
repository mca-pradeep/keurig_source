import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const OptionCarousel = (props) => {
  return (
    <Carousel
      arrows={false}
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={false} // means to render carousel on server-side.
      infinite={false}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={""}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item">
      {props.children}
    </Carousel>
  );
};
export default OptionCarousel;
