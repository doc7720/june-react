function Post({post}) {

    return (
        <div>
            {post.id} - {post.body}
        </div>
    );
}

export default Post;