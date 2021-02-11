import * as general_codes from "../../language/codes/general/general";
import { system_strength, system_temprature } from "../../config/constants";
const defaultOptions = (props) => {
  return (
    <div className="temprature-streangth">
      <div className="temprature-streangth-inner">
        <div
          className="streangth-container"
          onClick={(e) => props.chooseOptionHandler("strength")}>
          <span className="put-in-next">
            <span>{props.general_messages[general_codes.STRENGTH]}</span>
            <strong>{system_strength[props.user_selected_strength]}</strong>
          </span>
        </div>
        <div
          className="temprature-container"
          onClick={(e) => props.chooseOptionHandler("temprature")}>
          <span className="put-in-next">
            <span>{props.general_messages[general_codes.TEMPRATURE]}</span>
            <strong>{system_temprature[props.user_selected_temprature]}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
export default defaultOptions;
