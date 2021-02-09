import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./assets/css/App.css";
import * as beverages_codes from "./language/codes/beverages/beverages";
import * as general_codes from "./language/codes/general/general";

import Header from "./components/header";
import Beverages from "./components/beverages";
import BeverageDetails from "./components/UI/beverage_details";
import Footer from "./UI/footer";
import { effective_languages } from "./config/constants";
let defaultLanguage = localStorage.getItem("default_language");
if (
  defaultLanguage === null ||
  effective_languages.indexOf(defaultLanguage) === -1
) {
  defaultLanguage = "en";
  localStorage.setItem("default_language", defaultLanguage);
}
const general_messages = require(`./language/${defaultLanguage}/general/general`);
const beverages_messages = require(`./language/${defaultLanguage}/beverages/beverages`);


class Container extends Component {
  state = {
    language: defaultLanguage,
    general_messages: general_messages,
    beverages_messages: beverages_messages,
    general_codes: general_codes,
    beverages_codes: beverages_codes,
  };

  componentDidMount() {
    //do call api for getting available beverages
    //
    //do language specific things
    let defaultLanguage = localStorage.getItem("default_language");
    if (
      this.state.general_messages === null ||
      this.state.language !== defaultLanguage
    ) {
      if (
        defaultLanguage === null ||
        effective_languages.indexOf(defaultLanguage) === -1
      ) {
        defaultLanguage = "en";
        localStorage.setItem("default_language", defaultLanguage);
      }

      this.setState({
        general_messages: require(`./language/${defaultLanguage}/general/general`),
        beverages_messages: require(`./language/${defaultLanguage}/beverages/beverages`),
      });
    }
  }

  render() {
    let footer = null;
    if (this.state.is_footer) {
      footer = <Footer />;
    }

    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact>
            <Header
              beverage_codes={this.state.beverages_codes}
              beverage_messages={this.state.beverages_messages}
              is_back={false}
              is_footer={false}
            />
            <Beverages
              beverage_codes={this.state.beverages_codes}
              beverage_messages={this.state.beverages_messages}
            />
          </Route>
          <Route path="/beverage/:code" exact>
            <Header
              beverage_codes={this.state.beverages_codes}
              beverage_messages={this.state.beverages_messages}
              is_back={true}
              is_footer={true}
            />
            <BeverageDetails
              beverage_codes={this.state.beverages_codes}
              beverage_messages={this.state.beverages_messages}
            />
          </Route>
        </Switch>
        {footer}
      </React.Fragment>
    );
  }
}

export default Container;
