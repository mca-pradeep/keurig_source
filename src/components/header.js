import React, { Component } from "react";
import { Base64 } from "js-base64";
import { withRouter } from "react-router-dom";
import {
  dashboard_views,
  beverageTypes,
  assets_images,
} from "../config/constants";
import "../assets/css/header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_info: false,
      general_messages: null,
      podImgOk: false,
      setIsLoading: props.setIsLoading,
      pod: props.pod,
    };
  }
  gotoListing() {
    this.setState({
      show_info: false,
    });
    this.props.history.push(`/${this.props.location.search}`);
  }

  showInfo(e) {
    e.preventDefault();
    this.setState(
      (prevState) => ({
        show_info: !prevState.show_info,
      }) /*,
      () => {
        if (this.state.show_info) {
          document.body.classList.add("hidden-body");
        } else {
          document.body.classList.remove("hidden-body");
        }
      }*/
    );
  }

  componentDidMount() {
    //do language specific things
    if (this.state.pod) {
      const setIsLoading = this.state.setIsLoading;
      const podImgSrc = this.state.pod.podImage;
      new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = podImgSrc;
        img.onload = () => {
          setIsLoading(false);
          return resolve();
        };
        img.onerror = () => {
          setIsLoading(false);
          return reject();
        };
      }).then((resp) => {
        this.setState({
          podImgOk: true,
        });
      });
    }
    let defaultLanguage = localStorage.getItem("default_language");
    if (defaultLanguage == null) {
      defaultLanguage = "en";
      localStorage.setItem("default_language", defaultLanguage);
    }
    const general_messages = require(`../language/${defaultLanguage}/general/general`);
    this.setState({
      general_messages: general_messages,
    });
  }

  render() {
    let beverage = null;
    let infoClasses = ["custom_model"];
    if (window.location.href.includes("beverage")) {
      let savedBeverageTypes = localStorage.getItem("bever_list");
      if (savedBeverageTypes !== null) {
        savedBeverageTypes = JSON.parse(savedBeverageTypes);
        let beverages = savedBeverageTypes.capabilities.beverageTypes;

        const beverageArr = beverages.filter(
          (item) => item.type === Base64.decode(this.props.match.params.code)
        );
        if (beverageArr !== null && beverageArr.length)
          beverage = beverageArr[0];
      } else {
        this.gotoListing();
      }
    }
    const headerClasses = ["h-wrapper"];
    let pod_details = null;
    if (this.props.is_back) {
      headerClasses.push("h-detail");
      if (beverage) {
        pod_details = beverageTypes[beverage.type].name;
      }
    }
    let viewName = localStorage.getItem("listView");

    if (viewName !== null && viewName === dashboard_views.GROUP) {
      headerClasses.push("grouped");
    }

    if (this.state.show_info) {
      infoClasses.push("active");
    }

    return (
      <React.Fragment>
        <header className={headerClasses.join(" ")}>
          {this.state.pod && this.state.pod.customBackground ? (
            <img
              className="bg-img"
              src={`${this.state.pod.customBackgroundImage}`}
              alt=""
            />
          ) : (
            <img
              className="bg-img"
              src={`${window.location.origin}${assets_images.POD_BG_000}`}
              alt=""
            />
          )}
          {!this.props.is_back ? (
            <div className="logo-wrapper">
              <div className="logo-inner">
                {this.state.podImgOk && this.state.pod.podImage ? (
                  <img
                    className="logo-img"
                    src={`${this.props.pod.podImage}`}
                    alt=""
                  />
                ) : (
                  <img
                    className="logo-img"
                    src={`${window.location.origin}${assets_images.POD_000}`}
                    alt=""
                  />
                )}
                <div className="grid-list-view">
                  <div
                    onClick={() =>
                      this.props.onViewHandler(dashboard_views.GROUP)
                    }
                    className="grid">
                    G
                  </div>
                  <div
                    onClick={() =>
                      this.props.onViewHandler(dashboard_views.LIST)
                    }
                    className="list">
                    L
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="logo-wrapper">
              <div className="logo-inner">
                <div className="logo-left">
                  <div className="back-btn">
                    <img
                      className="logo-img"
                      src={`${window.location.origin}${assets_images.BACK_BUTTON_00}`}
                      alt=""
                      onClick={() => this.gotoListing()}
                    />
                  </div>
                  <div className="logo-beverage">
                    <img
                      className="logo-img"
                      src={`${window.location.origin}${assets_images.POD_000}`}
                      alt=""
                    />
                  </div>
                  <h1>{pod_details}</h1>
                </div>
                <div className="beverages-img-container">
                  {beverage ? (
                    <img
                      src={`${window.location.origin}${
                        beverageTypes[beverage.type].header
                      }`}
                      alt=""
                    />
                  ) : null}
                </div>
                <div className="beverage-info">
                  {!this.state.show_info ? (
                    <div onClick={(e) => this.showInfo(e)} className="lightbox">
                      <img
                        src={`${window.location.origin}${assets_images.BEVERAGE_INFO}`}
                        alt=""
                      />
                    </div>
                  ) : (
                    <div
                      className="model_close"
                      onClick={(e) => this.showInfo(e)}>
                      <img
                        src={`${window.location.origin}${assets_images.BEVERAGE_INFO_CLOSE}`}
                        alt="Close"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </header>
        <div className={infoClasses.join(" ")}>
          <div className="custom_model_inr">
            <div className="custom_model_color">
              <p>{beverage ? beverageTypes[beverage.type].desc : null}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Header);
