import * as general_codes from "../../language/codes/general/general";
import OptionCarousel from "./OptionCarousel";

const strengthOptions = (props) => {
  return (
    <div className="choose-options">
      <strong>{props.general_messages[general_codes.CHOOSE_STRENGTH]}</strong>
      <OptionCarousel>
        {props.strength_options.map((strength) => {
          return (
            <div
              onClick={(e) => {
                props.onStrengthHandler("strength", strength);
              }}
              key={strength}
              className={
                strength === props.user_selected_strength ? "active" : ""
              }>
              <span>{strength}</span>
            </div>
          );
        })}
      </OptionCarousel>
    </div>
  );
};
export default strengthOptions;
