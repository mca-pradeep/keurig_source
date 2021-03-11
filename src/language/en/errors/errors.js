export const GENERAL_TITLE = "Error Occurred";
export const SESSION_TIMEOUT_TITLE = "Session Timeout";

export const OTHER_ERROR_MESSAGE =
  "Rescan the QR Code on your brewer to begin again";
export const GENERAL_ERROR_MESSAGE =
  "Please see the brewer for more information.";

export const ERROR_404 = GENERAL_ERROR_MESSAGE;
export const ERROR_404_TITLE = GENERAL_TITLE;

export const ERROR_MESSAGES = {
  400: {
    title: GENERAL_TITLE,
    message: GENERAL_ERROR_MESSAGE,
  },
  401: {
    title: SESSION_TIMEOUT_TITLE,
    message: OTHER_ERROR_MESSAGE,
  },
  404: {
    title: GENERAL_TITLE,
    message: GENERAL_ERROR_MESSAGE,
  },
  405: {
    title: GENERAL_TITLE,
    message: GENERAL_ERROR_MESSAGE,
  },
  500: {
    title: GENERAL_TITLE,
    message: GENERAL_ERROR_MESSAGE,
  },
  105: {
    title: SESSION_TIMEOUT_TITLE,
    message: OTHER_ERROR_MESSAGE,
  },
};

export const RESERVE_ERROR_MESSAGES = {
  400: {
    title: GENERAL_TITLE,
    message: GENERAL_ERROR_MESSAGE,
  },
  401: {
    title: GENERAL_TITLE,
    message: GENERAL_ERROR_MESSAGE,
  },
  404: {
    title: GENERAL_TITLE,
    message: GENERAL_ERROR_MESSAGE,
  },
  405: {
    title: GENERAL_TITLE,
    message: GENERAL_ERROR_MESSAGE,
  },
  500: {
    title: GENERAL_TITLE,
    message: GENERAL_ERROR_MESSAGE,
  },
  105: {
    title: GENERAL_TITLE,
    message: GENERAL_ERROR_MESSAGE,
  },
};
