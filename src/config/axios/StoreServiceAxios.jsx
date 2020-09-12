import config from '../config';
import axios from 'axios';

let storeServiceAxios = axios.create({
  baseURL: config.apiGateway.STORE_SERVICE_URL
})

window.storeServiceAxios = storeServiceAxios