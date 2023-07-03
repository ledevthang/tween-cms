import {
  URL_IMAGE_REGEX,
  URL_VIDEO_REGEX,
  URL_FILE_REGEX,
} from 'src/shared/constants/Regex';

const patternUrl = new RegExp(
  '^(https?:\\/\\/)?' + // protocol
    +'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$',
  'i',
); // fragment locator

export function isUndefined(value) {
  return typeof value === 'undefined';
}

export function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}

export function isArray(value) {
  return value && typeof value === 'object' && value.constructor === Array;
}

export function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

export function isFile(value) {
  return !isUndefined(value) && value instanceof File;
}

export function isBlob(value) {
  return !isUndefined(value) && value instanceof Blob;
}

export function isEmpty(value) {
  if (isString(value)) {
    return value === '' || value === undefined || value === null;
  } else if (isObject(value)) {
    return value === null || Object.keys(value).length === 0;
  } else if (isArray(value)) {
    return value === null || value.length === 0;
  }
  return value === undefined || value === null;
}

export function isNumber(value) {
  // eslint-disable-next-line no-restricted-globals
  return typeof value === 'number' && isFinite(value);
}

export function isNumberStr(value) {
  // eslint-disable-next-line no-restricted-globals
  return !isNaN(value);
}

export function isFunction(value) {
  return typeof value === 'function';
}

// Returns if a value is null
export function isNull(value) {
  return value === null;
}

export function isBoolean(value) {
  return typeof value === 'boolean';
}

export function isRegExp(value) {
  return value && typeof value === 'object' && value.constructor === RegExp;
}

export function isError(value) {
  return value instanceof Error && typeof value.message !== 'undefined';
}

export function isDate(value) {
  return value instanceof Date;
}

export function isSymbol(value) {
  return typeof value === 'symbol';
}

export function isExistKey(object, key) {
  // eslint-disable-next-line no-prototype-builtins
  return isObject(object) && object.hasOwnProperty(key);
}

export function isEmptyObject(object) {
  // eslint-disable-next-line no-prototype-builtins
  return isObject(object) && Object.keys(object).length === 0;
}

export function isErrorResponse(response) {
  return !(!isExistKey(response, 'code') || response.code === 0);
}

export function isAsyncFunction(value) {
  return isFunction(value) && value.constructor.name === 'AsyncFunction';
}

export function isPromise(value) {
  return value instanceof Promise;
}

export function isPostDetailPage(pathname) {
  try {
    return /^\/post\//.test(pathname);
  } catch (e) {
    return false;
  }
}

export function isPostSeriesPage(pathname) {
  try {
    return /^\/post-series\//.test(pathname);
  } catch (e) {
    return false;
  }
}

export function isBase64(data) {
  try {
    return /^data:((?:\w+\/(?:(?!;).)+)?)((?:;[\w\W]*?[^;])*),(.+)|^,[a-zA-Z0-9/+]*$/.test(
      data,
    );
  } catch (e) {
    return false;
  }
}

export const isUrl = (text) => {
  if (text) {
    try {
      const urlReg =
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/g;

      const links = text
        .trim()
        .replace(String.fromCharCode(160), '\n')
        .match(urlReg);
      return !!links;
    } catch (e) {
      return false;
    }
  }
  return false;
};

export function isURL(str) {
  if (isString(str) && !isEmpty(str)) {
    return !!patternUrl.test(str);
  }

  return false;
}

export function isImageUrl(url) {
  return isURL(url) && !!url?.match(URL_IMAGE_REGEX);
}

export function isVideoUrl(url) {
  return isURL(url) && !!url?.match(URL_VIDEO_REGEX);
}

export function isFileUrl(url) {
  return isURL(url) && !!url?.match(URL_FILE_REGEX);
}

export function getTypeMediaByUrl(url) {
  switch (true) {
    case isImageUrl(url):
      return 'image';
    case isVideoUrl(url):
      return 'video';
    case isFileUrl(url):
      return 'file';
    default:
      return '';
  }
}

export function isUserAnonymous(userId) {
  return isEmpty(userId) || userId === 0 || userId === '0';
}
