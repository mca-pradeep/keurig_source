// import OptionCarousel from "./OptionCarousel";
const tempratureOptions = (props) => {
  return (
    <div className="choose-options active">
      <strong>
        {props.general_messages[props.general_codes.CHOOSE_TEMPERATURE]}
      </strong>
      {/*<OptionCarousel
        selectedIndex={props.temprature_options.findIndex(
          (item) => item === props.user_selected_temprature
        )}>*/}
      <div className="option-wrapper">
        {props.temprature_options.map((temprature) => {
          return (
            <div
              key={temprature}
              onClick={(e) => {
                props.onTempratureHandler("temprature", temprature);
              }}
              className={
                temprature === props.user_selected_temprature
                  ? "brewing-option active"
                  : "brewing-option"
              }>
              <span>
                {
                  props.general_messages[
                    props.general_codes.SYSTEM_TEMPERATURE
                  ][temprature]
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
export default tempratureOptions;
