import axios from 'axios'
// const baseUrl = '/api/logs'
const baseUrl = 'http://localhost:3001'
let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}
const getAll = (url) => {
    const config = {
        headers: { Authorization: token },
    }
    const requestURL = baseUrl + url;
    const request = axios.get(requestURL,config)
    return request.then(response => response.data)
}

export default { getAll, setToken }