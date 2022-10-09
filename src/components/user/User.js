import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

function User({user}) {

    const dispatch = useDispatch();

    return (
        <div>
            <h3>{user.id}. {user.name}</h3>
            <button onClick={() => dispatch(userActions.setCurrentUser(user))}>Info</button>
            <button onClick={() => dispatch(userActions.deleteById(user.id))}>Delete</button>
        </div>
    );
}

export default User;