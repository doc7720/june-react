import css from './Header.module.css'

import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


function Header() {

    const {currentUser} = useSelector(state => state.userReducer);

    return (
        <div className={css.navigation}>
            <div><Link to={'/'}>Home</Link></div>
            <div><Link to={'users'}>Users</Link></div>
            <div><Link to={'posts'}>Posts</Link></div>
            <h3>
                {currentUser && currentUser.name}
            </h3>
        </div>
    );
}

export default Header;