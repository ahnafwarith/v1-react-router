import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const params = useParams();
    return (
        <div>
            <h1>This is friend detail {params.friendID}</h1>
        </div>
    );
};

export default FriendDetail;