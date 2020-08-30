import config from './config';
import axios from 'axios';

axios.defaults.baseURL = config.apiGateway.URL
axios.defaults.headers.common["Accept"] = "application/json"
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

window.axios = axios