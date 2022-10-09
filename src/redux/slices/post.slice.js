import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
};

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.posts = action.payload;
        },
        deleteById: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload);
            state.posts.splice(index, 1);
        }
    }
});

const {reducer: postReducer, actions: {getAll, deleteById}} = postSlice;

const postActions = {
    getAll,
    deleteById,
}

export {postReducer, postActions}