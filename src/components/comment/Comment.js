import {Link} from "react-router-dom";


function Comment({comment}) {

    return (
        <div>
            {comment.id}. {comment.name}
            <span><Link to={comment.postId.toString()}>post</Link></span>

        </div>
    );
}

export default Comment;