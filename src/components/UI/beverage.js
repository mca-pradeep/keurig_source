import React from "react";
import { Base64 } from "js-base64";
import { withRouter, Link } from "react-router-dom";
import { dashboard_views, beverageTypes } from "../../config/constants";
import "../../assets/css/beverage.css";

const Beverage = (props) => {
  let viewName = props.currentView || localStorage.getItem("listView");
  return (
    <li className="beverage" key={props.beverage.type}>
      <Link
        to={{
          pathname: `/beverage/${Base64.encode(props.beverage.type)}`,
          search: props.query_string,
          state: { beverage: props.beverage },
        }}
        replace={false}
        search={props.query_string}>
        <div className="beverage-box">
          {beverageTypes[props.beverage.type] ? (
            <img
              src={`${window.location.origin}${
                beverageTypes[props.beverage.type].listing
              }`}
              alt=""
            />
          ) : null}
        </div>
        {beverageTypes[props.beverage.type] &&
        viewName !== null &&
        viewName === dashboard_views.LIST ? (
          <div className="beverage-info">
            <h3
              dangerouslySetInnerHTML={props.showSvgContent(
                props.general_messages[props.general_codes.BEVERAGE_TYPES][
                  props.beverage.type
                ].name.replace("$$", "")
              )}></h3>
            <p>
              {
                props.general_messages[props.general_codes.BEVERAGE_TYPES][
                  props.beverage.type
                ].desc
              }
            </p>
          </div>
        ) : (
          <h3
            dangerouslySetInnerHTML={props.showSvgContent(
              props.general_messages[props.general_codes.BEVERAGE_TYPES][
                props.beverage.type
              ].name.replace("$$", "<br />")
            )}></h3>
        )}
      </Link>
    </li>
  );
};
export default withRouter(Beverage);
