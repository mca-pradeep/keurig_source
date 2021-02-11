import React from "react";
import { withRouter } from "react-router-dom";

//import * as QueryString from "query-string";
import Beverage from "./UI/beverage";
//import beverages_list from "../config/temp_beverages";
import "../assets/css/beverages.css";
const Beverages = (props) => {
  const query_string_obj = props.location.search; // QueryString.parse(this.props.location.search);
  console.log("BBBBB", props.beverages);
  return (
    <section className="beverages-wrapper">
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
