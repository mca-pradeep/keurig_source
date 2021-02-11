import { system_sizes, system_size_unit } from "../../config/constants";
const sizeListElement = (props) => {
  return (
    <section className="beverage-sizes">
      <ul>
        {props.general_messages &&
          props.size_lists.map((size) => {
            return (
              <li
                key={size.size}
                onClick={(e) => props.customizeSizeHandler(e, size.size)}
                className={
                  size.size === props.userSelectedSize ? "active" : ""
                }>
                <div className="aligned-vertical">
                  <div
                    className="beverage-size"
                    dangerouslySetInnerHTML={props.showSvgContent(
                      system_sizes[size.size]
                    )}></div>
                  <div className="size-wrapper">
                    <div className="size-name">{size.size}</div>
                    <div className="size-unit">{system_size_unit}</div>
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
