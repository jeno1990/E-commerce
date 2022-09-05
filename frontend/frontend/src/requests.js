import axios from "axios";

const BaseUrl = 'http://localhost:5000/'
const token = ''

export const pubReq = axios.create({
    baseURL:BaseUrl
});

export const UserReq = axios.create({
    baseURL: BaseUrl,
    headers:{token:`Bearer ${token} `}
})