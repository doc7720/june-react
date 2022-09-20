import axios from "axios";

import {baseURL, urls} from "../configs";


const axiosInstance = axios.create({baseURL});

const createUser = (user) => axiosInstance.post(urls.users, user);


export {createUser}