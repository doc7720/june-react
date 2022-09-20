import axios from "axios";

import {baseURL, urls} from "../configs";


const axiosInstance = axios.create({baseURL});

const createComment = (comment) => axiosInstance.post(urls.comments, comment);


export {createComment}