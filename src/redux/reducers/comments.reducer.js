import {LOAD_COMMENTS} from "../action/action";

const commentsReducer = (state = {comments: []}, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_COMMENTS:
            return {...state, comments: payload};

        default:
            return state;
    }
}

export {commentsReducer}