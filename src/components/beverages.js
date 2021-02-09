import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as QueryString from "query-string";
import Beverage from "./UI/beverage";
import beverages_list from "../config/temp_beverages";
import "../assets/css/beverages.css";
class Beverages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const query_string_obj = this.props.location.search; // QueryString.parse(this.props.location.search);
    return (
      <section className="beverages-wrapper">
        <ul>
          {beverages_list.map((item) => {
            return (
              <Beverage
                key={item.code}
                beverage={item}
                beverage_codes={this.props.beverage_codes}
                beverage_messages={this.props.beverage_messages}
                query_string={query_string_obj}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}
export default withRouter(Beverages);
