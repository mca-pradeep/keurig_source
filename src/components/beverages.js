import React from "react";
import { withRouter } from "react-router-dom";
import { dashboard_views } from "../config/constants";
//import * as QueryString from "query-string";
import Beverage from "./UI/beverage";
import "../assets/css/beverages.css";
const Beverages = (props) => {
  let viewName = localStorage.getItem("listView");
  const query_string_obj = props.location.search; // QueryString.parse(this.props.location.search);
  let wrapperClasses = ["beverages-wrapper"];
  if (viewName !== null && viewName === dashboard_views.GROUP) {
    wrapperClasses.push(dashboard_views.GROUP);
  }

  return (
    <section className={wrapperClasses.join(" ")}>
      <ul>
        {props.beverages
          ? props.beverages.map((item) => {
              return (
                <Beverage
                  key={`${item.type}-`}
                  beverage={item}
                  query_string={query_string_obj}
                />
              );
            })
          : null}
      </ul>
    </section>
  );
};
export default withRouter(Beverages);
