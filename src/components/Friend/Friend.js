import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend
    const navigate = useNavigate()
    const showFriend = () => {
        const path = `friend/${id}`
        navigate(path)
    }
    return (
        <div>
            <h3>Name of friend: {name}</h3>
            <Link to={'/friend/' + id}>Show Details</Link>
            <button onClick={showFriend}>{username}:{id}</button>
        </div>
    );
};

export default Friend;