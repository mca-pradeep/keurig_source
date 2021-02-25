const defaultOptions = (props) => {
  const strengths = props.general_messages[props.general_codes.SYSTEM_STRENGTH];
  const mainBoxClasses = ["temprature-streangth-inner"];
  const strengthClasses = ["streangth-container"];
  const tempClasses = ["temprature-container"];
  if (props.customizeOption === "temprature") {
    tempClasses.push("selected");
    mainBoxClasses.push("box-selected");
  } else if (props.customizeOption === "strength") {
    strengthClasses.push("selected");
    mainBoxClasses.push("box-selected");
  }

  return (
    <div className="temprature-streangth">
      <div className={mainBoxClasses.join(" ")}>
        <div
          className={strengthClasses.join(" ")}
          onClick={(e) => props.chooseOptionHandler("strength")}>
          <span className="put-in-next">
            <span>{props.general_messages[props.general_codes.STRENGTH]}</span>
            <strong>{strengths[props.user_selected_strength]}</strong>
          </span>
        </div>
        <div
          className={tempClasses.join(" ")}
          onClick={(e) => props.chooseOptionHandler("temprature")}>
          <span className="put-in-next">
            <span>
              {props.general_messages[props.general_codes.TEMPERATURE]}
            </span>
            <strong>
              {
                props.general_messages[props.general_codes.SYSTEM_TEMPERATURE][
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
