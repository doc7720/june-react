import React, {useEffect, useState} from 'react';

import User from "../user/User";

const Users = () => {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })

    }, [])

    const userDetails = (item) => {
        setUser(item);
    }

    return (
        <div>
            {user.id && <div>{user.username} - {user.email}</div>}
            <hr/>
            {users.map((user, index) => <User key={index} item={user} userDetails={userDetails}/>)}
        </div>

    );
};

export default Users;