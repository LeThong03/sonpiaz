// src/components/Profile/SocialLinks.tsx
import React from 'react';

const SocialLinks = () => {
    return (
      <ul className="list-none space-y-2">
        {[
          { name: 'Email me', href: '#' },
          { name: 'Twitter', href: '#' },
          { name: 'LinkedIn', href: '#' },
          { name: 'YouTube', href: '#' }
        ].map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-blue-600 hover:underline">
              • {link.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

export default SocialLinks;