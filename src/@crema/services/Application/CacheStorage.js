import {KEY_CACHE} from '../../../shared/constants/Cache';
import {currentTime} from '../../../shared/utils/DateTime';
import {saveLocalData, getLocalData} from './LocalStorage';

const getAllDataCacheKey = () => {
  return getLocalData(KEY_CACHE) || {};
};

export function getDataCache(name) {
  const allData = getAllDataCacheKey();
  const valueCache = allData?.[name] || {};
  const now = currentTime();
  if (valueCache?.timeEnd >= now || !valueCache?.timeEnd) {
    return valueCache?.value;
  } else {
    removeCacheData(name);
  }
}

export function saveDataCache(name, data, timeCache) {
  const allData = getAllDataCacheKey() || {};
  saveLocalData({
    ...allData,
    [name]: {
      data: data,
      timeEnd: currentTime() + timeCache,
    },
  });
}

export function removeCacheData(name) {
  // eslint-disable-next-line no-unused-vars
  const {[name]: tmp, ...dataNew} = getAllDataCacheKey() || {};
  saveLocalData(dataNew);
}
