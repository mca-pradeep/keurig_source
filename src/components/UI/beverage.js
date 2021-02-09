import React, { Component } from "react";
import { Base64 } from "js-base64";
import { withRouter } from "react-router-dom";
import "../../assets/css/beverage.css";

class Beverage extends Component {
  constructor(props) {
    super(props);
  }

  getDetails = (code) => {
    this.props.history.replace(
      `/beverage/${Base64.encode(code)}${this.props.query_string}`
    );
  };

  render() {
    return (
      <li className="beverage">
        <a onClick={() => this.getDetails(this.props.beverage.code)}>
          <div className="beverage-box">
            <img
              src={`${window.location.origin}${this.props.beverage.image}`}
              alt=""
            />
          </div>
          <h3>{this.props.beverage_messages[this.props.beverage.code]}</h3>
        </a>
      </li>
    );
  }
}
export default withRouter(Beverage);
