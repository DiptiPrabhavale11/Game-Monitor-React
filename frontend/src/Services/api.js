import Axios from "../utility/interceptor";

const getAll = (url) => {
    const request = Axios.get(url)
    return request.then(response => response.data)
}

export default { getAll }