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

export const ERROR_MESSAGES = {
  400: {
    title: "Invalid Size",
    message: "Size is invalid",
  },
  401: {
    title: "Invalid Security Key",
    message: "The security key has expired or is invalid",
  },
  404: {
    title: "Brewer Not Found",
    message: "Brewer Not Found",
  },
  405: {
    title: "Not Suppoted",
    message: "Operation Not Supported on this brewer",
  },
  500: {
    title: "InternalServerError",
    message: "Internal Server Error",
  },
};
