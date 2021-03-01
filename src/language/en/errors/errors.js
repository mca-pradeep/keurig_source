export const CRITICAL_ERROR_TITLE_001 = "Error occurred.";
export const CRITICAL_ERROR_MSG_001 = "Please contact technical support.";

export const DISPENSE_TIMEOUT_TITLE_001 = "Dispense Timeout.";
export const DISPENSE_TIMEOUT_MSG_001 = "Please perform a rinse brew";

export const NO_POD_DETECTED_TITME_001 = "No pod detected.";
export const NO_POD_DETECTED_MSG_001 = "Continue with a rinse brew?";

export const HANDLE_OPEN_TITLE_001 = "Brew interupted";
export const HANDLE_OPEN_MESSAGE_001 =
  "Please close handle and insert a new pod to continue brewing.";

export const OTHER_THAN_BREWING_001 = "Please close handle.";

export const POD_BIN_FULL_MSG_001 = "Pod bin is full. Please empty.";
export const POD_BIN_FULL_MSG_002 = "Please reinsert pod bin.";

export const ERROR_500 = "Internal Server Error";

export const ERROR_404 = "Something went wrong!!!";
export const ERROR_404_TITLE = "ERROR!";

export const GENERAL_ERROR_MESSAGE =
  "Rescan the QR Code on your brewer to begin again";
export const OTHER_ERROR_MESSAGE = "Sorry, see your brewer to continue";

export const ERROR_MESSAGES = {
  400: {
    title: "Invalid Size",
    message: OTHER_ERROR_MESSAGE,
  },
  401: {
    title: "Invalid Security Key",
    message: OTHER_ERROR_MESSAGE,
  },
  404: {
    title: "Brewer Not Found",
    message: OTHER_ERROR_MESSAGE,
  },
  405: {
    title: "Not Suppoted",
    message: OTHER_ERROR_MESSAGE,
  },
  500: {
    title: ERROR_500,
    message: OTHER_ERROR_MESSAGE,
  },
  105: {
    title: "Brewer Timeout",
    message: GENERAL_ERROR_MESSAGE,
  },
};
