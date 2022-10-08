import {Link} from "react-router-dom";
import css from './Header.module.css';

function Headers() {

    return (
        <div className={css.navigation}>
            <div><Link to={'/'}>Home</Link></div>
            <div><Link to={'users'}>Users</Link></div>
            <div><Link to={'posts'}>Posts</Link></div>
            <div><Link to={'comments'}>Comments</Link></div>
        </div>
    );
}

export default Headers;