import {isExistKey, isError} from './Typeof';

export const isErrorResponse = (response) => {
  return !(!isExistKey(response, 'code') || response.code === 0);
};

export const getResultResponse = (response) => {
  return response?.result;
};

export const getMessageResponse = (response) => {
  if (isError(response)) {
    try {
      return JSON.parse(response.message).message;
    } catch (e) {
      console.log(e);
    }
  }

  if (response && (isErrorResponse(response) || isError(response))) {
    return response.message || '';
  } else {
    return '';
  }
};
