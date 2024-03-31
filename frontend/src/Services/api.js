import axios from 'axios'
import {TOKEN_AUTH_KEY} from "../utility/Constants.js";

const getAll = (url) => {
    const token= localStorage.getItem(TOKEN_AUTH_KEY)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const request = axios.get(url,config)
    return request.then(response => response.data)
}

export default { getAll }