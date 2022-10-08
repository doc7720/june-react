import {combineReducers} from "redux";

import {postsReducer} from "../reducers/posts.reducer";
import {commentsReducer} from "../reducers/comments.reducer";
import {usersReducer} from "../reducers/users.reducer";

const reducer = combineReducers({
    postsReducer,
    commentsReducer,
    usersReducer
});

export {reducer}