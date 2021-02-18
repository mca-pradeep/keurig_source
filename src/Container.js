import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { Base64 } from "js-base64";
import Network from "./services/network_service";
import "./assets/css/App.css";
import * as general_codes from "./language/codes/general/general";
import * as error_codes from "./language/codes/errors/errors";
import * as QueryString from "query-string";
import Header from "./components/header";
import Beverages from "./components/beverages";
import Brewing from "./components/UI/brewing";
import BeverageDetails from "./components/UI/beverage_details";
import ErrorModel from "./components/UI/ErrorModal";
import Footer from "./UI/footer";
import {
  PATHS,
  dashboard_views,
  effective_languages,
  ERRORS,
  KEURIG_LOGO,
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
const error_messages = require(`./language/${defaultLanguage}/errors/errors`);

class Container extends Component {
  state = {
    language: defaultLanguage,
    general_messages: general_messages,
    error_messages: error_messages,
    general_codes: general_codes,
    beverages: [],
    brewerSecurityCode: null,
    brewerId: null,
    pod: null,
    listView: dashboard_views.GROUP,
    error: true,
    is_brewing: false,
    title: "Brewer Timeout",
    message: "Rescan the QR Code on your brewer to begin again",
    code: 400,
    brewing: {
      type: null,
      size: null,
      strength: null,
      temperature: null,
      modelType: null,
    },
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
        //console.log("Network Response", resp);
        setIsLoading(false);
        localStorage.setItem("bever_list", JSON.stringify(resp));
        localStorage.setItem("listView", dashboard_views.GROUP);
        let modelType = resp.capabilities.modelType;
        const brewing = {
          ...this.state.brewing,
          modelType: modelType ? modelType : "00",
        };
        this.setState(
          {
            brewerSecurityCode: resp.capabilities.brewerSecurityCode,
            brewerId: resp.capabilities.brewerId,
            pod: resp.capabilities.pod,
            beverages: resp.capabilities.beverageTypes,
            brewing: brewing,
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
      this.setState(
        {
          general_messages: require(`./language/${defaultLanguage}/general/general`),
          error_messages: require(`./language/${defaultLanguage}/errors/errors`),
        },
        () => {
          console.log("HHHH EEEE", this.state);
        }
      );
    }
  }

  updateBrewingStateHandler = (key, value) => {
    const brew = this.state.brewing;
    brew[key] = value;
    this.setState({
      brewing: brew,
    });
  };

  showDangerousContentHandler = (content) => {
    return {
      __html: content,
    };
  };

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
        //this.props.history.replace(`/${this.props.location.search}`);
        window.location.reload();
      }
    );
  };

  brewSubmitHandler = (e) => {
    e.preventDefault();
    this.setState(
      {
        is_brewing: true,
      },
      () => {
        let path = `${PATHS.BASE_PATH}${PATHS.START_BREW}`.replace(
          "{brewerId}",
          this.state.brewerId
        );
        const reqData = this.state.brewing;
        new Network(path, "POST", reqData, this.state.brewerSecurityCode)
          .hitNetwork()
          .then((resp) => {
            console.log("Brewer Response ::::", resp, this.state);
            if (resp.code !== 200) {
              this.setState({
                error: true,
                code: resp.code,
                title: this.state.error_messages[error_codes.ERROR_MESSAGES][
                  resp.code
                ]
                  ? this.state.error_messages[error_codes.ERROR_MESSAGES][
                      resp.code
                    ].title
                  : null,
                message: this.state.error_messages[error_codes.ERROR_MESSAGES][
                  resp.code
                ]
                  ? this.state.error_messages[error_codes.ERROR_MESSAGES][
                      resp.code
                    ].message
                  : null,
              });
            } else {
              //
            }
          })
          .catch((e) => {
            this.setState({
              error: true,
              code: 500,
              title: this.state.error_messages[error_codes.ERROR_500]
                ? this.state.error_messages[error_codes.ERROR_500]
                : null,
              message: this.state.error_messages[
                error_codes.ERROR_MESSAGES
              ][500].message,
            });
          });
      }
    );
  };

  render() {
    let footer = null;
    if (this.state.is_footer) {
      footer = <Footer />;
    }

    let brewingPage = this.state.is_brewing ? (
      <Brewing
        message={this.state.general_messages[general_codes.BREWER_MESSAGE]}
        showSvgContent={this.showDangerousContentHandler}
        logo={KEURIG_LOGO}
      />
    ) : (
      <React.Fragment>
        <Header
          general_messages={general_messages}
          isLoading={this.props.isLoading}
          setIsLoading={this.props.setIsLoading}
          pod={this.state.pod}
          is_back={true}
          is_footer={true}
        />
        <BeverageDetails
          isLoading={this.props.isLoading}
          setIsLoading={this.props.setIsLoading}
          general_messages={general_messages}
          beverages={this.state.beverages}
          showSvgContent={this.showDangerousContentHandler}
          userSelection={this.state.brewing}
          onUpdateBrewingStateHandler={this.updateBrewingStateHandler}
          onBrewSubmitHandler={this.brewSubmitHandler}
        />
        {this.state.error ? (
          <ErrorModel
            btn_okay={null}
            title={this.state.title}
            message={this.state.message}
            infoImg={ERRORS[this.state.code]}
            showSvgContent={this.showDangerousContentHandler}
            onClose={this.errorModalCloseHandler}
          />
        ) : null}
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact>
            {general_messages && this.state.pod ? (
              <React.Fragment>
                <Header
                  isLoading={this.props.isLoading}
                  setIsLoading={this.props.setIsLoading}
                  pod={this.state.pod}
                  is_back={false}
                  is_footer={false}
                  general_messages={general_messages}
                  onViewHandler={this.viewHandler}
                  currentView={this.state.listView}
                />
                <Beverages
                  isLoading={this.props.isLoading}
                  setIsLoading={this.props.setIsLoading}
                  general_messages={general_messages}
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
                showSvgContent={this.showDangerousContentHandler}
              />
            ) : null}
          </Route>
          <Route path="/beverage/:code" exact>
            <React.Fragment>
              {this.state.pod ? brewingPage : <LoadingIndicator />}
            </React.Fragment>
          </Route>
        </Switch>
        {footer}
      </React.Fragment>
    );
  }
}

export default withRouter(Container);
