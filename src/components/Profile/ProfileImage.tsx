// src/components/Profile/ProfileImage.tsx
import React from 'react';
import Image from 'next/image';

const ProfileImage = () => {
  return (
    <div className="relative w-24 h-24">
      <Image
        src="/profile.jpg"
        alt="Profile"
        fill
        className="rounded-lg object-cover"
        sizes="96px"
        priority
      />
    </div>
  );
};

export default ProfileImage;