import config from './config';
import axios from 'axios';
import qs from 'qs'

axios.defaults.baseURL = config.apiGateway.URL
axios.defaults.headers.common["Accept"] = "application/json"
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.paramsSerializer = function (params) {
  return qs.stringify(params, {arrayFormat: 'brackets'})
}

window.axios = axios