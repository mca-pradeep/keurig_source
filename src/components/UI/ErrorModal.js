import React from "react";

import "../../assets/css/ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className="backdrop"  />
      <div className="error-modal">
        <div
          dangerouslySetInnerHTML={props.showSvgContent(props.infoImg)}></div>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        {/*<div className="error-modal__actions">
          <button type="button" onClick={props.onClose}>
            {props.btn_okay}
          </button>
  </div>*/}
      </div>
    </React.Fragment>
  );
};

export default ErrorModal;
