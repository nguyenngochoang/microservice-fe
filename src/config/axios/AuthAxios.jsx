import config from '../config';
import axios from 'axios';
import "./axios"

let authAxios = axios.create({
  baseURL: config.apiGateway.AUTH_URL
})

window.authAxios = authAxios