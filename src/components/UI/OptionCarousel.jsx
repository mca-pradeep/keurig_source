import Carousel from "infinite-react-carousel";

const OptionCarousel = (props) => {
  return (
    <Carousel
      rows={1}
      slidesPerRow={1}
      slidesToShow={3}
      className="carousel-container"
      centerMode={true}
      centerPadding={10}
      arrows={false}
      arrowsBlock={false}
      //className="carousel-item"
    >
      {props.children}
    </Carousel>
  );
};
export default OptionCarousel;
