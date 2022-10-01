import {useEffect, useState} from "react";
import {commentService, userService} from "../../services";
import Comment from "../comment/Comment";
import CommentForm from "../commentForm/CommentForm";

function Comments() {

    const [comments, setComments] = useState([]);

    useEffect(()=> {

        commentService.getAll().then(({data}) => setComments(data));

    },[]);

    return (
        <div>
            <div>
                <CommentForm setComments={setComments}/>
            </div>
            <div>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
}

export default Comments;