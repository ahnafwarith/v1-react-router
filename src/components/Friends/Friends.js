import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        /* Loading from API */
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [/* dependency */]);
    return (
        <div>
            <h1>This is Friends</h1>
            <h2>Amount of friends: {friends.length}</h2>
            {
                friends.map(friend => <Friend id={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;