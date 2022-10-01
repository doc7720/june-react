function Comment({comment}) {

    return (
        <div>
            {comment.id} - {comment.name} - {comment.email} - {comment.body}
            <hr/>
        </div>
    );
}

export default Comment;