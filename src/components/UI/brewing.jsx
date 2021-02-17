import { KEURIG_LOGO } from "../../config/constants";
import "../../assets/css/brewing.css";
export const brewing = (props) => {
  return (
    <div className="brewing-container">
      <div className="brewing-message">{props.message}</div>
      <div
        className="brewing-logo"
        dangerouslySetInnerHTML={props.showSvgContent(props.logo)}></div>
    </div>
  );
};

export default brewing;
