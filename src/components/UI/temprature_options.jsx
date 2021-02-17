import * as general_codes from "../../language/codes/general/general";
import { system_temprature } from "../../config/constants";
import OptionCarousel from "./OptionCarousel";
const tempratureOptions = (props) => {
  return (
    <div className="choose-options active">
      <strong>
        {props.general_messages[general_codes.CHOOSE_TEMPERATURE]}
      </strong>
      <OptionCarousel
        selectedIndex={props.temprature_options.findIndex(
          (item) => item === props.user_selected_temprature
        )}>
        {props.temprature_options.map((temprature) => {
          return (
            <div
              key={temprature}
              onClick={(e) => {
                props.onTempratureHandler("temprature", temprature);
              }}
              className={
                temprature === props.user_selected_temprature ? "active" : ""
              }>
              <span>
                {
                  props.general_messages[general_codes.SYSTEM_TEMPERATURE][
                    temprature
                  ]
                }
              </span>
            </div>
          );
        })}
      </OptionCarousel>
    </div>
  );
};
export default tempratureOptions;
