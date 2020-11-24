import axios from 'axios';
import constants from 'constants/index';

const callApi = async (url, method, params, data, header) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...header,
  };

  const axiosSetup = {
    url,
    method,
    headers,
    params: (method === 'get' || method === 'put' || method === 'delete') ? params : '',
    data: method === 'post' ? params : data,
    timeout: constants.TIMEOUT_REQUEST,
    dataType: 'json',
  };

  try {
    const result = await axios(axiosSetup);
    return result.data;
  } catch (e) {
    console.log(e);
  }

  return true;
};

export default callApi;
