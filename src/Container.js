import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { Base64 } from "js-base64";
import Network from "./services/network_service";
import "./assets/css/App.css";
import * as general_codes from "./language/codes/general/general";
import * as QueryString from "query-string";
import Header from "./components/header";
import Beverages from "./components/beverages";
import BeverageDetails from "./components/UI/beverage_details";
import Footer from "./UI/footer";
import { PATHS, effective_languages } from "./config/constants";
import LoadingIndicator from "./components/UI/LoadingIndicator";
let defaultLanguage = localStorage.getItem("default_language");
if (
  defaultLanguage === null ||
  effective_languages.indexOf(defaultLanguage) === -1
) {
  defaultLanguage = "en";
  localStorage.setItem("default_language", defaultLanguage);
}
const general_messages = require(`./language/${defaultLanguage}/general/general`);

class Container extends Component {
  state = {
    language: defaultLanguage,
    general_messages: general_messages,
    general_codes: general_codes,
    beverages: [],
    brewerSecurityCode: null,
    brewerId: null,
    pod: null,
    listView: true,
  };

  componentDidMount() {
    //do call api for getting available beverages
    let path = `${PATHS.BASE_PATH}${PATHS.RESERVE}`;
    const queryObjs = QueryString.parse(this.props.location.search);
    const setIsLoading = this.props.setIsLoading;
    new Network(path, "POST", queryObjs)
      //new Network(`${window.location.origin}/keuring-reserve.json`, "GET")
      .hitNetwork()
      .then((resp) => {
        this.props.setIsLoading(false);
        localStorage.setItem("bever_list", JSON.stringify(resp));
        this.setState(
          {
            brewerSecurityCode: resp.capabilities.brewerSecurityCode,
            brewerId: resp.capabilities.brewerId,
            pod: resp.capabilities.pod,
            beverages: resp.capabilities.beverageTypes,
          },
          () => {
            if (this.state.beverages.length === 1) {
              const beverage = this.state.beverages[0];
              this.props.history.push(
                `/beverage/${Base64.encode(beverage.type)}${
                  this.props.location.search
                }`
              );
            }
          }
        );
      })
      .catch((e) => this.props.setIsLoading(false));
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
      });
    }
  }

  viewHandler = (statusFlag) => {
    this.setState(
      {
        listView: statusFlag,
      },
      () => {
        localStorage.setItem("listView", statusFlag);
      }
    );
  };

  render() {
    let footer = null;
    if (this.state.is_footer) {
      footer = <Footer />;
    }

    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact>
            {this.state.pod ? (
              <Header
                isLoading={this.props.isLoading}
                setIsLoading={this.props.setIsLoading}
                pod={this.state.pod}
                is_back={false}
                is_footer={false}
              />
            ) : null}
            <Beverages
              isLoading={this.props.isLoading}
              setIsLoading={this.props.setIsLoading}
              beverages={this.state.beverages}
              onViewHandler={this.viewHandler}
            />
          </Route>
          <Route path="/beverage/:code" exact>
            {this.state.pod ? (
              <React.Fragment>
                <Header
                  isLoading={this.props.isLoading}
                  setIsLoading={this.props.setIsLoading}
                  pod={this.state.pod}
                  is_back={true}
                  is_footer={true}
                />
                <BeverageDetails
                  isLoading={this.props.isLoading}
                  setIsLoading={this.props.setIsLoading}
                  beverages={this.state.beverages}
                />
              </React.Fragment>
            ) : (
              <LoadingIndicator />
            )}
          </Route>
        </Switch>
        {footer}
      </React.Fragment>
    );
  }
}

export default withRouter(Container);
