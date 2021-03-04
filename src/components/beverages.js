import React from "react";
import { withRouter } from "react-router-dom";
import { dashboard_views } from "../config/constants";
//import * as QueryString from "query-string";
import Beverage from "./UI/beverage";
import "../assets/css/beverages.css";
const Beverages = (props) => {
  let viewName = props.currentView || localStorage.getItem("listView");
  const query_string_obj = props.location.search; // QueryString.parse(this.props.location.search);
  let wrapperClasses = ["beverages-wrapper"];
  if (
    props.currentView === dashboard_views.GROUP ||
    (viewName !== null && viewName === dashboard_views.GROUP)
  ) {
    wrapperClasses.push(dashboard_views.LIST);
  } else {
    wrapperClasses.push(dashboard_views.GROUP);
  }
  const beverages_list = props.beverages.filter(
    (item) => item.type !== undefined
  );
  return (
    <section className={wrapperClasses.join(" ")}>
      <ul>
        {beverages_list
          ? beverages_list.map((item) => {
              return (
                <Beverage
                  key={`${item.type}-`}
                  beverage={item}
                  query_string={query_string_obj}
                  currentView={props.currentView}
                  general_codes={props.general_codes}
                  general_messages={props.general_messages}
                  showSvgContent={props.showSvgContent}
                />
              );
            })
          : null}
      </ul>
    </section>
  );
};
export default withRouter(Beverages);
