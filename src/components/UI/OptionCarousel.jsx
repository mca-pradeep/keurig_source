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
  return <Carousel {...settings}>{props.children}</Carousel>;
};
export default OptionCarousel;
