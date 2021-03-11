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
  assets_images,
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
const bgerrorImg = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100vh",
};
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
    error: false,
    is_brewing: false,
    is_submit: false,
    title: "",
    message: "",
    code: null,
    timer: 2 * 60 * 1000,
    brewer_timer: null,
    bgerrorImg: null,
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
        error_messages: require(`./language/${defaultLanguage}/errors/errors`),
      });
    }
    if (this.state.pod === null) {
      new Network(path, "POST", queryObjs)
        .hitNetwork()
        .then((resp) => {
          //console.log("Network Response", resp);
          localStorage.setItem("listView", dashboard_views.GROUP);
          localStorage.removeItem("bever_list");
          setIsLoading(false);
          if (resp.code !== 200) {
            this.setState({
              error: true,
              code: resp.code,
              title: this.state.error_messages[
                error_codes.RESERVE_ERROR_MESSAGES
              ][resp.code]
                ? this.state.error_messages[error_codes.RESERVE_ERROR_MESSAGES][
                    resp.code
                  ].title
                : null,
              message: this.state.error_messages[
                error_codes.RESERVE_ERROR_MESSAGES
              ][resp.code]
                ? this.state.error_messages[error_codes.RESERVE_ERROR_MESSAGES][
                    resp.code
                  ].message
                : null,
              bgerrorImg: {
                ...bgerrorImg,
                backgroundImage: `url(${assets_images.BREWING_LOADER_HOME_IMG})`,
              },
            });
          } else {
            const respBody = resp.body;
            localStorage.setItem("bever_list", JSON.stringify(respBody));
            let modelType = respBody.capabilities.modelType;
            const brewing = {
              ...this.state.brewing,
              modelType: modelType ? modelType : queryObjs.t,
            };

            // let brewer_timer = window.setTimeout(() => {
            //   this.setState({
            //     error: true,
            //     code: 105,
            //     title: this.state.error_messages[error_codes.ERROR_MESSAGES][105]
            //       .title,
            //     message: this.state.error_messages[
            //       error_codes.ERROR_MESSAGES
            //     ][105].message,
            //   });
            // }, this.state.timer);

            this.setState(
              {
                brewerSecurityCode: respBody.capabilities.brewerSecurityCode,
                brewerId: respBody.capabilities.brewerId,
                pod: respBody.capabilities.pod,
                beverages: respBody.capabilities.beverageTypes,
                brewing: brewing,
                //brewer_timer: brewer_timer,
              },
              () => {
                if (this.state.beverages.length === 1) {
                  const beverage = this.state.beverages[0];
                  this.props.history.push(
                    `/beverage/${Base64.encode(beverage.type)}${
                      this.props.location.search
                    }`
                  );
                } else {
                  const oldState = { ...queryObjs };
                  delete queryObjs["s"];
                  delete queryObjs["b"];
                  let newStr = QueryString.stringify(queryObjs);
                  this.props.history.push(`/?${newStr}`, {
                    ...this.state,
                    oldState: oldState,
                  });
                }
              }
            );
          }
        })
        .catch((e) => {
          setIsLoading(false);
          this.setState({
            error: true,
          });
        });
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
        //window.location.reload();
      }
    );
  };

  brewSubmitHandler = (e) => {
    e.preventDefault();
    //window.clearTimeout(this.state.brewer_timer);
    this.setState(
      {
        is_submit: true,
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
            if (resp.code !== 200) {
              //const body = resp.body;
              this.setState({
                error: true,
                code: resp.code,
                title: resp.message,
                message: this.state.error_messages[error_codes.ERROR_MESSAGES][
                  resp.code
                ]
                  ? this.state.error_messages[error_codes.ERROR_MESSAGES][
                      resp.code
                    ].message
                  : null,
              });
            } else {
              this.setState({
                is_brewing: true,
              });
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
    let errorStyle = {};
    if (this.state.bgerrorImg) {
      errorStyle = this.state.bgerrorImg;
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
          general_messages={this.state.general_messages}
          isLoading={this.props.isLoading}
          setIsLoading={this.props.setIsLoading}
          pod={this.state.pod}
          is_back={true}
          is_footer={true}
          showSvgContent={this.showDangerousContentHandler}
        />
        <BeverageDetails
          isLoading={this.props.isLoading}
          setIsLoading={this.props.setIsLoading}
          general_codes={general_codes}
          general_messages={this.state.general_messages}
          beverages={this.state.beverages}
          showSvgContent={this.showDangerousContentHandler}
          userSelection={this.state.brewing}
          onUpdateBrewingStateHandler={this.updateBrewingStateHandler}
          onBrewSubmitHandler={this.brewSubmitHandler}
          isSubmitClicked={this.state.is_submit}
        />
        {this.state.error ? (
          <div className="error-wrapper" style={errorStyle}>
            <ErrorModel
              btn_okay={null}
              title={this.state.title}
              message={this.state.message}
              infoImg={ERRORS[this.state.code]}
              showSvgContent={this.showDangerousContentHandler}
              onClose={this.errorModalCloseHandler}
            />
          </div>
        ) : null}
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <Switch>
          <Route path="/beverage/:code" exact>
            <React.Fragment>
              {this.state.pod ? (
                brewingPage
              ) : this.state.error ? (
                <div className="error-wrapper" style={errorStyle}>
                  <ErrorModel
                    btn_okay={null}
                    title={this.state.title}
                    message={this.state.message}
                    onClose={this.errorModalCloseHandler}
                    infoImg={ERRORS[this.state.code]}
                    showSvgContent={this.showDangerousContentHandler}
                  />
                </div>
              ) : null}
            </React.Fragment>
          </Route>
          <Route path="/">
            {this.state.general_messages && this.state.pod ? (
              <React.Fragment>
                <Header
                  isLoading={this.props.isLoading}
                  setIsLoading={this.props.setIsLoading}
                  pod={this.state.pod}
                  is_back={false}
                  is_footer={false}
                  general_messages={this.state.general_messages}
                  onViewHandler={this.viewHandler}
                  currentView={this.state.listView}
                  showSvgContent={this.showDangerousContentHandler}
                />
                <Beverages
                  isLoading={this.props.isLoading}
                  setIsLoading={this.props.setIsLoading}
                  general_messages={this.state.general_messages}
                  general_codes={general_codes}
                  beverages={this.state.beverages}
                  onViewHandler={this.viewHandler}
                  currentView={this.state.listView}
                  showSvgContent={this.showDangerousContentHandler}
                />
              </React.Fragment>
            ) : this.state.error ? (
              <div className="error-wrapper" style={errorStyle}>
                <ErrorModel
                  btn_okay={null}
                  title={this.state.error_messages[error_codes.ERROR_404_TITLE]}
                  message={this.state.error_messages[error_codes.ERROR_404]}
                  onClose={this.errorModalCloseHandler}
                  infoImg={ERRORS[this.state.code]}
                  showSvgContent={this.showDangerousContentHandler}
                />
              </div>
            ) : null}
          </Route>
        </Switch>
        {footer}
        {this.state.is_submit && this.state.is_brewing === false ? (
          <LoadingIndicator />
        ) : null}
      </React.Fragment>
    );
  }
}

export default withRouter(Container);
