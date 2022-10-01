import {axiosService} from "./axios.service";

import {urls} from "../configs";


const postService = {
    getAll: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {postService}