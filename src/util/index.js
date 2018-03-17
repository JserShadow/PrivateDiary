import axios from 'axios';

let util = {
  axios: axios.create({
    baseURL: 'http://localhost:7001',
    timeout: 30000
  })
}

export default util;
