import {useParams} from "react-router";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import Post from "../post/Post";

function Posts() {

    const [post, setPost] = useState([]);

    const {postId} = useParams();

    useEffect(() => {

        postService.getAll(postId).then(({data}) => setPost(data));

    }, [postId]);


    return (
        <div>
            {post && (<Post post={post}/>)}
        </div>
    );
}

export default Posts;