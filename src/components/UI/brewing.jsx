import { KEURIG_LOGO, assets_images } from "../../config/constants";
import "../../assets/css/brewing.css";

export const brewing = (props) => {
  const style = {
    backgroundImage: `url(${window.location.origin}${assets_images.BREWING_IMG})`,
  };
  return (
    <div className="brewing-container" style={style}>
      <div className="brewing-message">{props.message}</div>
      <div
        className="brewing-logo"
        dangerouslySetInnerHTML={props.showSvgContent(props.logo)}></div>
    </div>
  );
};

export default brewing;
