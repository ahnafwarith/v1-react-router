import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendID } = useParams();
    const [friend, handleFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendID}`
        fetch(url)
            .then(res => res.json())
            .then(data => handleFriend(data))
    }, []);
    return (
        <div>
            <h1>This is friend detail {friendID}</h1>
            <h2>{friend.name}</h2>
            <h2>{friend.email}</h2>
            <h2>{friend.phone}</h2>
            <h2>{friend.address?.city}</h2>
        </div>
    );
};

export default FriendDetail;