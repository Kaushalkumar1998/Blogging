import axios from "axios";

export const BASE_URL = 'http://localhost:';
export const myAxios = axios({
    baseURL: BASE_URL
});