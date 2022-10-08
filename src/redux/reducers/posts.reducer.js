import {LOAD_POSTS} from "../action/action";

const postsReducer = (state= {posts: []}, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_POSTS:
            return {...state, posts: payload}

        default:
            return state;
    }
}

export {postsReducer}