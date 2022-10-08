function Post({post}) {

    return (
        <div>
            <h3>{post.id} - {post.body}</h3>
        </div>
    );
}

export default Post;