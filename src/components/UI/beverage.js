import React, { Component } from "react";
import { Base64 } from "js-base64";
import { withRouter, Link } from "react-router-dom";
import { beverageTypes /*, assets_images */ } from "../../config/constants";
import "../../assets/css/beverage.css";

class Beverage extends Component {
  render() {
    return (
      <li className="beverage" key={this.props.beverage.type}>
        <Link
          to={{
            pathname: `/beverage/${Base64.encode(this.props.beverage.type)}`,
            search: this.props.query_string,
            state: { beverage: this.props.beverage },
          }}
          replace={true}
          search={this.props.query_string}>
          <div className="beverage-box">
            {beverageTypes[this.props.beverage.type] ? (
              <img
                src={`${window.location.origin}${
                  beverageTypes[this.props.beverage.type].listing
                }`}
                alt=""
              />
            ) : null}
          </div>
          {beverageTypes[this.props.beverage.type] ? (
            <h3>{beverageTypes[this.props.beverage.type].name}</h3>
          ) : null}
        </Link>
      </li>
    );
  }
}
export default withRouter(Beverage);
