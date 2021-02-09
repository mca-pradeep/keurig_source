import React from "react";

import "../../assets/css/ErrorModal.css";

const ErrorModal = React.memo((props) => {
  return (
    <React.Fragment>
      <div className="backdrop" onClick={props.onClose} />
      <div className="error-modal">
        <h2>props.title</h2>
        <p>{props.message}</p>
        <div className="error-modal__actions">
          <button type="button" onClick={props.onClose}>
            props.btn_okay
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default ErrorModal;
