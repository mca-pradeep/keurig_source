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
import ErrorModel from "./components/UI/ErrorModal";
import Footer from "./UI/footer";
import {
  PATHS,
  dashboard_views,
  effective_languages,
} from "./config/constants";
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
    listView: dashboard_views.LIST,
    error: false,
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
        setIsLoading(false);
        localStorage.setItem("bever_list", JSON.stringify(resp));
        localStorage.setItem("listView", dashboard_views.LIST);
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
      .catch((e) => {
        setIsLoading(false);
        this.setState({
          error: true,
        });
      });
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

  errorModalCloseHandler = () => {
    this.setState(
      (prevState) => {
        return {
          ...prevState,
          error: !prevState.error,
        };
      },
      () => {
        this.props.history.replace(`/${this.props.location.search}`);
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
              <React.Fragment>
                <Header
                  isLoading={this.props.isLoading}
                  setIsLoading={this.props.setIsLoading}
                  pod={this.state.pod}
                  is_back={false}
                  is_footer={false}
                  onViewHandler={this.viewHandler}
                  currentView={this.state.listView}
                />
                <Beverages
                  isLoading={this.props.isLoading}
                  setIsLoading={this.props.setIsLoading}
                  beverages={this.state.beverages}
                  onViewHandler={this.viewHandler}
                  currentView={this.state.listView}
                />
              </React.Fragment>
            ) : this.state.error ? (
              <ErrorModel
                btn_okay={"Okay"}
                title={"ERROR!"}
                message={"Something went wrong!!!"}
                onClose={this.errorModalCloseHandler}
              />
            ) : null}
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
