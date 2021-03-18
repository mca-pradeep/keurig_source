import { assets_images } from "../../config/constants";
import "../../assets/css/brewing.css";

export const brewing = (props) => {
  const style = {
    backgroundImage: `url(${window.location.origin}${assets_images.BREWING_IMG})`,
  };
  return (
    <div className="brewing-container" style={style}>
      <div
        className="brewing-message"
        dangerouslySetInnerHTML={props.showSvgContent(
          props.message.split("$$").join("<br />")
        )}></div>
      <p
        dangerouslySetInnerHTML={props.showSvgContent(
          props.message_line_1.split("$$").join("<br />")
        )}></p>
      <div
        className="brewing-logo"
        dangerouslySetInnerHTML={props.showSvgContent(props.logo)}></div>
    </div>
  );
};

export default brewing;
