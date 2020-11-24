import axios from 'axios';
import CONFIG_API from 'apis/EndpointConfig';
import callApi from '../index';

const getImages = () => callApi(
  `${CONFIG_API.API_BE}/Images`,
  'get',
);

const getImageByCategory = (id) => axios.get(
  `${CONFIG_API.API_BE}/Images/category/${id}`,
);

const uploadImage = (params) => callApi(
  `${CONFIG_API.API_BE}/Images`,
  'post',
  params,
);

const updateImage = (id) => axios.put(
  `${CONFIG_API.API_BE}/Images/${id}`,
);

const removeImage = (id) => axios.delete(
  `${CONFIG_API.API_BE}/Images/${id}`,
);

export {
  getImages,
  getImageByCategory,
  uploadImage,
  updateImage,
  removeImage,
};
