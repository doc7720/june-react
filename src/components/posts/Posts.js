import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postService} from "../../services";
import {postActions} from "../../redux";
import Post from "../post/Post";

function Posts() {

    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.postReducer);

    useEffect(() => {
        postService.getAll().then(({data}) => dispatch(postActions.getAll(data)));
    }, []);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}

export default Posts;