function User({user}) {

    return (
        <div>
            {user.id} - {user.name} - {user.username} - {user.email}
            <hr/>
        </div>
    );
}

export default User;