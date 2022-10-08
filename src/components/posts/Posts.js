import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postService} from "../../services";
import {LOAD_POSTS} from "../../redux";
import Post from "../post/Post";

function Posts() {

    const {posts} = useSelector(state => state.postsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        postService.getAll().then(({data}) => dispatch({type: LOAD_POSTS, payload: data}));
    },[]);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}

export default Posts;