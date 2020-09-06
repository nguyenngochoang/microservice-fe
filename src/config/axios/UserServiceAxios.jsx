import config from '../config';
import axios from 'axios';
import "./axios"

let userServiceAxios = axios.create({
  baseURL: config.apiGateway.USER_SERVICE_URL
})

window.userServiceAxios = userServiceAxios