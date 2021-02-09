import React, { Component } from "react";
import { Base64 } from "js-base64";
import { withRouter } from "react-router-dom";
import { assets_images } from "../config/constants";
import "../assets/css/header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_info: false,
      general_messages: null,
      beverages_messages: null,
    };
  }

  gotoListing() {
    this.props.history.push(`/${this.props.location.search}`);
  }

  showInfo(e) {
    e.preventDefault();
    this.setState(
      (prevState) => ({ show_info: !prevState.show_info }),
      () => {
        if (this.state.show_info) {
          console.log("HERE", this.state.show_info);
          document.body.classList.add("hidden-body");
        } else {
          document.body.classList.remove("hidden-body");
        }
      }
    );
  }

  componentDidMount() {
    //do language specific things
    let defaultLanguage = localStorage.getItem("default_language");
    if (defaultLanguage == null) {
      defaultLanguage = "en";
      localStorage.setItem("default_language", defaultLanguage);
    }
    const general_messages = require(`../language/${defaultLanguage}/general/general`);
    const beverages_messages = require(`../language/${defaultLanguage}/beverages/beverages`);
    this.setState({
      general_messages: general_messages,
      beverages_messages: beverages_messages,
    });
  }

  render() {
    const headerClasses = ["h-wrapper"];
    let pod_details = null;
    if (this.props.is_back) {
      headerClasses.push("h-detail");
      if (this.state.beverages_messages) {
        pod_details = this.state.beverages_messages[
          Base64.decode(this.props.match.params.code)
        ];
      }
    }

    return (
      <React.Fragment>
        <header className={headerClasses.join(" ")}>
          {!this.props.is_back ? (
            <img
              className="bg-img"
              src={`${window.location.origin}${assets_images.POD_BG_000}`}
              alt=""
            />
          ) : (
            <img
              className="bg-img"
              src={`${window.location.origin}${assets_images.POD_BG_001}`}
              alt=""
            />
          )}
          {!this.props.is_back ? (
            <div className="logo-wrapper">
              <div className="logo-inner">
                <img
                  className="logo-img"
                  src={`${window.location.origin}${assets_images.POD_000}`}
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div className="logo-wrapper">
              <div className="logo-inner">
                <div className="logo-left">
                  <a href="" className="back-btn">
                    <img
                      className="logo-img"
                      src={`${window.location.origin}${assets_images.BACK_BUTTON_00}`}
                      alt=""
                      onClick={() => this.gotoListing()}
                    />
                  </a>
                  <a href="" className="logo-beverage">
                    <img
                      className="logo-img"
                      src={`${window.location.origin}${assets_images.POD_000}`}
                      alt=""
                    />
                  </a>
                  <h1>{pod_details}</h1>
                </div>

                <div className="beverage-info">
                  <a
                    href="#"
                    onClick={(e) => this.showInfo(e)}
                    className="lightbox">
                    <img
                      src={`${window.location.origin}${assets_images.BEVERAGE_INFO}`}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          )}
        </header>
        <div
          className="custom_model"
          style={
            this.state.show_info ? { display: "block" } : { display: "none" }
          }>
          <div className="custom_model_inr">
            <div className="model_close" onClick={(e) => this.showInfo(e)}>
              <img
                src={`${window.location.origin}${assets_images.BEVERAGE_INFO_CLOSE}`}
                alt="Close"
              />
            </div>
            <div className="custom_model_color">
              <p>Freshly brewed coffee from your favorite pod</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Header);
