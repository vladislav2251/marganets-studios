import axios from "axios";

const HTTP = axios.create({
    baseURL: "https://marganets-studios-default-rtdb.firebaseio.com",
    responseType: "json",
    timeout: 20000,
    withCredentials: true
});

export default HTTP;