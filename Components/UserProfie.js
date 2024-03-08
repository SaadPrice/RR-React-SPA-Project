// components/UserProfile.js

import React from 'react';

const UserProfile = ({ username, bio, profilePicture }) => {
    return (
        <div className="user-profile">
            <img src={profilePicture} alt={username} />
            <h2>{username}</h2>
            <p>{bio}</p>
        </div>
    );
}

export default UserProfile;
