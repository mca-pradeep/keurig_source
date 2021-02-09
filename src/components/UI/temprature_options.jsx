const tempratureOptions = (props) => {
  return (
    <div className="choose-options">
      <strong>Choose Temprature</strong>
      <ul>
        {props.temprature_options.map((temprature) => {
          return (
            <li
              key={temprature}
              onClick={(e) => {
                props.onTempratureHandler("temprature", temprature);
              }}
              className={
                temprature == props.user_selected_temprature ? "active" : ""
              }>
              <span>{temprature}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default tempratureOptions;
