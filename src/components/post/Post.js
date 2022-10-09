import {useDispatch} from "react-redux";
import {postActions} from "../../redux";

function Post({post}) {

    const dispatch = useDispatch();

    return (
        <div>
            <h3>{post.id}. {post.title}</h3>
            <button onClick={() => dispatch(postActions.deleteById(post.id))}>Delete</button>
        </div>
    );
}

export default Post;