import axios from 'axios'
import {LOGIN} from "../utility/UrlEndpoints.js";

const login = (credentials) => {
    const request = axios.post(LOGIN,credentials)
    return request.then(response => response.data)
}

export default { login }