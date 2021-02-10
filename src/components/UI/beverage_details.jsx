import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import DefaultOptions from "./defaultOptions";
import SizeListElement from "./size_list_element";
import TempratureOptions from "./temprature_options";
import StrengthOptions from "./strength_options";
import * as general_codes from "../../language/codes/general/general";
import "../../assets/css/beverage_details.css";
import * as constant from "../../config/constants";
// import beverages_list from "../../config/temp_beverages";
import size_list from "../../config/sizes";

class BeverageDetails extends Component {
  state = {
    general_messages: null,
    beverages_messages: null,
    is_submit: false,
    user_selected_size: "8",
    user_selected_strength: "Regular",
    user_selected_temprature: "Normal",
    customize_option: null,
    strength_options: ["Regular", "Strong", "ExtraStrong"],
    temprature_options: ["Iced", "Normal", "Hotter", "ExtraHot"],
  };

  showSize = (content) => {
    return {
      __html: content,
    };
  };
  componentDidMount() {
    //do call api for getting available beverages
    //
    //do language specific things
    let defaultLanguage = localStorage.getItem("default_language");
    if (this.state.sizes == null) {
      this.setState({
        general_messages: require(`../../language/${defaultLanguage}/general/general`),
        beverages_messages: require(`../../language/${defaultLanguage}/beverages/beverages`),
      });
    }
  }

  customizeSizeHandler = (e, customSize) => {
    e.preventDefault();
    this.setState({
      user_selected_size: customSize,
    });
  };
  chooseOptionHandler = (option) => {
    this.setState({
      customize_option: option,
    });
  };

  customizeStrengthTempratureHandler = (option, value) => {
    if (option === "temprature") {
      this.setState({
        user_selected_temprature: value,
        customize_option: null,
      });
    } else if (option === "strength") {
      this.setState({
        user_selected_strength: value,
        customize_option: null,
      });
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log("here");
  };

  render() {
    let tempOptions = null;
    let contentFlag = false;
    if (this.state.general_messages != null) {
      tempOptions = (
        <DefaultOptions
          chooseOptionHandler={this.chooseOptionHandler}
          general_messages={this.state.general_messages}
          user_selected_strength={this.state.user_selected_strength}
          user_selected_temprature={this.state.user_selected_temprature}
        />
      );
      contentFlag = true;
    }

    if (
      this.state.customize_option &&
      this.state.customize_option === "temprature"
    ) {
      tempOptions = (
        <TempratureOptions
          temprature_options={this.state.temprature_options}
          user_selected_temprature={this.state.user_selected_temprature}
          onTempratureHandler={this.customizeStrengthTempratureHandler}
          general_messages={this.state.general_messages}
        />
      );
      contentFlag = false;
    }

    if (
      this.state.customize_option &&
      this.state.customize_option === "strength"
    ) {
      tempOptions = (
        <StrengthOptions
          strength_options={this.state.strength_options}
          user_selected_strength={this.state.user_selected_strength}
          onStrengthHandler={this.customizeStrengthTempratureHandler}
          general_messages={this.state.general_messages}
        />
      );
      contentFlag = false;
    }
    return (
      <React.Fragment>
        <form onSubmit={this.submitHandler}>
          <div className="beverage-details with-padding">
            {this.size_list !== null ? (
              <SizeListElement
                size_lists={size_list}
                general_messages={this.state.general_messages}
                userSelectedSize={this.state.user_selected_size}
                customizeSizeHandler={this.customizeSizeHandler}
                showSvgContent={this.showSize}
              />
            ) : null}
            <section className="brew-customize">
              <div className="customize-title">
                <strong>
                  {this.state.general_messages
                    ? this.state.general_messages[general_codes.BREWING_OPTIONS]
                    : null}
                </strong>
              </div>
            </section>
            {contentFlag ? (
              <section className="brew-customize">{tempOptions}</section>
            ) : null}
          </div>
          {!contentFlag ? (
            <section className="brew-customize">{tempOptions}</section>
          ) : null}
          <section className="submit-button-container">
            <div className="submit-button-inner">
              <button
                onClick={(e) => {
                  this.setState({ is_submit: true });
                }}>
                <img
                  className="submit-btn"
                  src={`${window.location.origin}${
                    !this.state.is_submit
                      ? constant.assets_images.SUBMIT_BUTTON_DEFAULT
                      : constant.assets_images.SUBMIT_BUTTON_SELECTED
                  }`}
                  alt=""
                />
              </button>
            </div>
          </section>
        </form>
      </React.Fragment>
    );
  }
}
export default withRouter(BeverageDetails);
