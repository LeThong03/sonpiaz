// src/components/Profile/ProfileImage.tsx
import React from 'react';

const ProfileImage = () => {
    return (
      <div>
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-lg object-cover"
        />
      </div>
    );
  };

export default ProfileImage;