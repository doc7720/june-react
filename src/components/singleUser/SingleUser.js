function SingleUser({user}) {

    return (
        <div>
            <h3>
                id: {user.id}
                <br/>
                name: {user.name}
                <br/>
                username: {user.username}
                <br/>
                email: {user.email}
                <br/>
                phone: {user.phone}
                <br/>
                city: {user.address.city}
                <br/>
                website: {user.website}
            </h3>
        </div>
    );
}

export default SingleUser;