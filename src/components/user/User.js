import {Link} from "react-router-dom";


function User({user}) {

    return (
        <div>
            <Link to={user.id.toString()}><h3>{user.id} - {user.name}</h3></Link>
        </div>
    );
}

export default User;