const sizeListElement = (props) => {
  return (
    <section className="beverage-sizes">
      <ul>
        {props.general_messages &&
          props.size_lists.map((size) => {
            return (
              <li
                key={size.code}
                onClick={(e) =>
                  props.customizeSizeHandler(
                    e,
                    props.general_messages[size.code]
                  )
                }
                className={
                  props.general_messages[size.code] === props.userSelectedSize
                    ? "active"
                    : ""
                }>
                <div className="aligned-vertical">
                  <div
                    className="beverage-size"
                    dangerouslySetInnerHTML={props.showSvgContent(
                      size.svg_image
                    )}></div>
                  <div className="size-wrapper">
                    <div className="size-name">
                      {props.general_messages[size.code]}
                    </div>
                    <div className="size-unit">
                      {props.general_messages[size.size_unit]}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
};
export default sizeListElement;
