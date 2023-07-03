import React, {useState, useRef, useEffect} from 'react';
import jwtAxios from 'src/@crema/services/auth/jwt-auth/jwt-api';
import {FETCH_STATUS, METHOD_FETCH} from 'src/shared/constants/FetchData';
import {
  getMessageResponse,
  getResultResponse,
} from '../../../shared/utils/Service';
import {isErrorResponse} from '../../../shared/utils/Typeof';
import {CacheContext} from './CacheProvider';

const generateKeySaveCache = (url, options = {}) => {
  return `${url}-${JSON.stringify(options)}`;
};

const useFetch = (config = {}, deps = []) => {
  const {
    instance = jwtAxios,
    url,
    method = METHOD_FETCH.GET,
    body,
    params,
    loadInit = true,
    useCache = true,
    timeCache = 180000,
  } = config;

  const refIndex = useRef(0);
  const [status, setStatus] = useState(FETCH_STATUS.INIT);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);
  const {getByKey: getValueCacheByKey, set: setToCache} =
    React.useContext(CacheContext);

  const fetchData = (force = false) => {
    refIndex.current++;
    const refIndexCurrent = refIndex.current;
    setStatus(FETCH_STATUS.LOADING);
    setError('');
    const keySaveCache = generateKeySaveCache(url, {method, params, body});
    if (useCache && !force) {
      const valueInCache = getValueCacheByKey(keySaveCache);

      if (valueInCache) {
        setData(valueInCache);
        setStatus(FETCH_STATUS.SUCCESS);
        return;
      }
    }

    instance({
      method,
      url,
      data: body,
      params,
    })
      .then((dataFromServer) => {
        if (refIndexCurrent === refIndex.current) {
          if (
            isErrorResponse(dataFromServer.data) ||
            dataFromServer.status >= 400
          ) {
            const errorMessage = getMessageResponse(dataFromServer.data);
            // showMessageError(errorMessage);
            setError(errorMessage);
            setStatus(FETCH_STATUS.ERROR);
          } else {
            if (useCache) {
              setToCache(
                keySaveCache,
                getResultResponse(dataFromServer?.data),
                timeCache,
              );
            }
            setStatus(FETCH_STATUS.SUCCESS);
            setData(dataFromServer?.data?.result);
          }
        }
      })
      .catch(function (thrown) {
        if (refIndexCurrent === refIndex.current) {
          setStatus(FETCH_STATUS.ERROR);
          if (getMessageResponse(thrown)) {
            // showMessageError(getMessage(thrown));
            setError(getMessageResponse(thrown));
          }
        }
      });
  };

  useEffect(() => {
    if (loadInit) {
      fetchData();
    }
  }, [url, ...deps]);

  return {
    status,
    error,
    data,

    fetchData,
  };
};

export default useFetch;
