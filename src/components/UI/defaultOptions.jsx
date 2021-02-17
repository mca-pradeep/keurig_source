import * as general_codes from "../../language/codes/general/general";
const defaultOptions = (props) => {
  const strengths = props.general_messages[general_codes.SYSTEM_STRENGTH];
  return (
    <div className="temprature-streangth">
      <div className="temprature-streangth-inner">
        <div
          className="streangth-container"
          onClick={(e) => props.chooseOptionHandler("strength")}>
          <span className="put-in-next">
            <span>{props.general_messages[general_codes.STRENGTH]}</span>
            <strong>{strengths[props.user_selected_strength]}</strong>
          </span>
        </div>
        <div
          className="temprature-container"
          onClick={(e) => props.chooseOptionHandler("temprature")}>
          <span className="put-in-next">
            <span>{props.general_messages[general_codes.TEMPERATURE]}</span>
            <strong>
              {
                props.general_messages[general_codes.SYSTEM_TEMPERATURE][
                  props.user_selected_temprature
                ]
              }
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};
export default defaultOptions;
