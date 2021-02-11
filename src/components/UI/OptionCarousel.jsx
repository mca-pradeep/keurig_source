//import Carousel from "infinite-react-carousel";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const OptionCarousel = (props) => {
  const settings = {
    className: "carousel-container",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 2.5,
    swipeToSlide: true,
    appendDots: false,
    arrows: false,
  };
  return (
    <Carousel
      {...settings}
      // rows={1}
      // slidesPerRow={1}
      // slidesToShow={3}
      // className="carousel-container"
      // centerMode={true}
      // centerPadding={0}
      // arrows={false}
      // arrowsBlock={false}
      //className="carousel-item"
    >
      {props.children}
    </Carousel>
  );
};
export default OptionCarousel;
