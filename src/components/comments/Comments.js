import {useEffect, useState} from "react";
import {Outlet} from "react-router";

import {commentService} from "../../services/comment.service";
import Comment from "../comment/Comment";

function Comments() {

    const [comments, setComments] = useState([]);


    useEffect(() => {

        commentService.getAll().then(({data}) => setComments(data));

    }, []);

    return (
        <div>
            <Outlet/>
            <hr/>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
}

export default Comments;