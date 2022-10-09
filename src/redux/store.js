import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {postReducer, userReducer} from "./slices";


const rootReducer = combineReducers({
    userReducer,
    postReducer,
});

const setupReducer = () => configureStore({
    reducer: rootReducer
});

export {setupReducer}
