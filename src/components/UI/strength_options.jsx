const strengthOptions = (props) => {
  return (
    <div className="choose-options">
      <strong>Choose Temperature</strong>
      <ul>
        {props.strength_options.map((strength) => {
          return (
            <li
              onClick={(e) => {
                props.onStrengthHandler("strength", strength);
              }}
              key={strength}
              className={
                strength == props.user_selected_strength ? "active" : ""
              }>
              <span>{strength}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default strengthOptions;
