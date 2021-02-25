import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import Spinner from "../UI/LoadingIndicator";
import { Base64 } from "js-base64";

import DefaultOptions from "./defaultOptions";
import SizeListElement from "./size_list_element";
import TempratureOptions from "./temprature_options";
import StrengthOptions from "./strength_options";

import "../../assets/css/beverage_details.css";
import * as constant from "../../config/constants";

class BeverageDetails extends Component {
  state = {
    is_submit: false,
    user_selected_size: null,
    user_selected_strength: null,
    user_selected_temprature: null,
    customize_option: null,
    size_list: null,
    strength_options: null,
    temprature_options: null,
    beverages: this.props.beverages,
  };

  componentDidMount() {
    //do call api for getting available beverages
    let beverages = null;
    if (this.state.beverages === null || this.state.beverages.length === 0) {
      let savedBeverageTypes = localStorage.getItem("bever_list");

      if (savedBeverageTypes !== null) {
        if (this.state.user_selected_size === null) {
          savedBeverageTypes = JSON.parse(savedBeverageTypes);
          if (savedBeverageTypes.capabilities !== null) {
            beverages = savedBeverageTypes.capabilities.beverageTypes;
          }
        }
      }
    } else {
      beverages = this.state.beverages;
    }

    if (beverages === null) {
      this.props.history.push(`/${this.props.location.search}`);
    } else {
      const beverageArr = beverages.filter(
        (item) => item.type === Base64.decode(this.props.match.params.code)
      );
      if (beverageArr !== null && beverageArr.length) {
        const beverage = beverageArr[0];
        const selectedSize = beverage.sizes.filter(
          (size) => size.size === beverage.recommendedSize
        );

        this.setState(
          {
            size_list: beverage.sizes,
            strength_options: beverage.availableStrengths,
            temprature_options: beverage.availableTemperatures,
          },
          () => {
            this.props.onUpdateBrewingStateHandler("type", beverage.type);
            this.props.onUpdateBrewingStateHandler(
              "size",
              beverage.recommendedSize
            );
            this.props.onUpdateBrewingStateHandler(
              "strength",
              selectedSize[0].recommendedBrew.strength
            );
            this.props.onUpdateBrewingStateHandler(
              "temperature",
              selectedSize[0].recommendedBrew.temperature
            );
          }
        );
      }
    }
  }

  customizeSizeHandler = (e, customSize) => {
    e.preventDefault();
    const selectedSize = this.state.size_list.filter(
      (size) => size.size === customSize //this.props.userSelection.size
    );
    if (selectedSize && selectedSize.length) {
      this.props.onUpdateBrewingStateHandler(
        "strength",
        selectedSize[0].recommendedBrew.strength
      );
      this.props.onUpdateBrewingStateHandler(
        "temperature",
        selectedSize[0].recommendedBrew.temperature
      );
    }
    this.props.onUpdateBrewingStateHandler("size", customSize);
  };
  chooseOptionHandler = (option) => {
    this.setState({
      customize_option: option,
    });
  };

  customizeStrengthTempratureHandler = (option, value) => {
    const TIME = 300;
    if (option === "temprature") {
      this.props.onUpdateBrewingStateHandler("temperature", value);
      setTimeout(() => {
        this.setState({
          customize_option: null,
        });
      }, TIME);
    } else if (option === "strength") {
      this.props.onUpdateBrewingStateHandler("strength", value);
      setTimeout(() => {
        this.setState({
          customize_option: null,
        });
      }, TIME);
    }
  };

  render() {
    let temperatureClasses = ["on-the-fly-box", "temp-strength"];
    let strengthClasses = ["on-the-fly-box", "temp-strength"];

    if (
      this.state.customize_option &&
      this.state.customize_option === "temprature"
    ) {
      temperatureClasses.push("brew-active");
    }

    if (
      this.state.customize_option &&
      this.state.customize_option === "strength"
    ) {
      strengthClasses.push("brew-active");
    }
    return (
      <React.Fragment>
        {!this.props.isLoading ? (
          <form onSubmit={this.props.onBrewSubmitHandler}>
            <div className="beverage-details with-padding">
              {this.state.size_list !== null ? (
                <SizeListElement
                  size_lists={this.state.size_list}
                  general_messages={this.props.general_messages}
                  userSelectedSize={this.props.userSelection.size}
                  customizeSizeHandler={this.customizeSizeHandler}
                  showSvgContent={this.props.showSvgContent}
                />
              ) : null}
              <section className="brew-customize">
                <div className="customize-title">
                  <span>
                    {
                      this.props.general_messages[
                      this.props.general_codes.BREWING_OPTIONS
                      ]
                    }
                  </span>
                </div>
              </section>
              <section className="brew-customize">
                <DefaultOptions
                  chooseOptionHandler={this.chooseOptionHandler}
                  general_messages={this.props.general_messages}
                  general_codes={this.props.general_codes}
                  user_selected_strength={this.props.userSelection.strength}
                  user_selected_temprature={
                    this.props.userSelection.temperature
                  }
                  customizeOption={this.state.customize_option}
                />
              </section>
            </div>
            <div className="beverage-details-sleder-wrap">
              <section className={temperatureClasses.join(" ")}>
                {this.state.temprature_options ? (
                  <TempratureOptions
                    temprature_options={this.state.temprature_options}
                    user_selected_temprature={
                      this.props.userSelection.temperature
                    }
                    onTempratureHandler={this.customizeStrengthTempratureHandler}
                    general_codes={this.props.general_codes}
                    general_messages={this.props.general_messages}
                  />
                ) : null}
              </section>
              <section className={strengthClasses.join(" ")}>
                {this.state.strength_options ? (
                  <StrengthOptions
                    strength_options={this.state.strength_options}
                    user_selected_strength={this.props.userSelection.strength}
                    onStrengthHandler={this.customizeStrengthTempratureHandler}
                    general_codes={this.props.general_codes}
                    general_messages={this.props.general_messages}
                  />
                ) : null}
              </section>
            </div>
            <section className="submit-button-container">
              <div className="submit-button-inner">
                <button>
                  <img
                    className="submit-btn"
                    src={`${window.location.origin}${!this.props.isSubmitClicked
                      ? constant.assets_images.SUBMIT_BUTTON_DEFAULT
                      : constant.assets_images.SUBMIT_BUTTON_SELECTED
                      }`}
                    alt=""
                  />
                </button>
              </div>
            </section>
          </form>
        ) : null}
      </React.Fragment>
    );
  }
}
export default withRouter(BeverageDetails);
