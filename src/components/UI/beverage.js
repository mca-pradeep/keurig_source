import React, { Component } from "react";
import { Base64 } from "js-base64";
import { withRouter, Link } from "react-router-dom";
import { dashboard_views } from "../../config/constants";
import { beverageTypes /*, assets_images */ } from "../../config/constants";
import "../../assets/css/beverage.css";

const Beverage = (props) => {
  let viewName = localStorage.getItem("listView");
  return (
    <li className="beverage" key={props.beverage.type}>
      <Link
        to={{
          pathname: `/beverage/${Base64.encode(props.beverage.type)}`,
          search: props.query_string,
          state: { beverage: props.beverage },
        }}
        replace={true}
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
        viewName === dashboard_views.GROUP ? (
          <div className="beverage-info">
            <h3>{beverageTypes[props.beverage.type].name}</h3>
            <p>{beverageTypes[props.beverage.type].desc}</p>
          </div>
        ) : (
          <h3>{beverageTypes[props.beverage.type].name}</h3>
        )}
      </Link>
    </li>
  );
};
export default withRouter(Beverage);
