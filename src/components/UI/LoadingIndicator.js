import React from "react";

import "../../assets/css/LoadingIndicator.css";
import LoadingImg from "../../assets/images/beverage_loader.svg";

const LoadingIndicator = () => (
  <div className="lds-ring">
    <img src={LoadingImg} alt="loader" />
    {/*<div />
    <div />
    <div />
    <div />*/}
  </div>
);

export default LoadingIndicator;
