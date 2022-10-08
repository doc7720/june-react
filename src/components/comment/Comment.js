function Comment({comment}) {

    return (
        <div>
            <h3>{comment.id} - {comment.name}</h3>
        </div>
    );
}

export default Comment;