import * as general_codes from "../../language/codes/general/general";
import OptionCarousel from "./OptionCarousel";
const tempratureOptions = (props) => {
  return (
    <div className="choose-options">
      <strong>{props.general_messages[general_codes.CHOOSE_TEMPRATURE]}</strong>
      <OptionCarousel>
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
              <span>{temprature}</span>
            </div>
          );
        })}
      </OptionCarousel>
    </div>
  );
};
export default tempratureOptions;
