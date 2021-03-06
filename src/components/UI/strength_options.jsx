// import OptionCarousel from "./OptionCarousel";

const strengthOptions = (props) => {
  return (
    <div className="choose-options active">
      <strong>
        {props.general_messages[props.general_codes.CHOOSE_STRENGTH]}
      </strong>
      {/*<OptionCarousel
        selectedIndex={props.strength_options.findIndex(
          (item) => item === props.user_selected_strength
        )}>*/}
      <div className="option-wrapper">
        {props.strength_options.map((strength) => {
          return (
            <div
              onClick={(e) => {
                props.onStrengthHandler("strength", strength);
              }}
              key={strength}
              className={
                strength === props.user_selected_strength
                  ? "brewing-option active"
                  : "brewing-option"
              }>
              <span>
                {
                  props.general_messages[props.general_codes.SYSTEM_STRENGTH][
                    strength
                  ]
                }
              </span>
            </div>
          );
        })}
      </div>
      {/*</OptionCarousel>*/}
    </div>
  );
};
export default strengthOptions;
