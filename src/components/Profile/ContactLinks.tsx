// src/components/Profile/ContactLinks.tsx
import React from 'react';

const ContactLinks = () => {
    return (
      <div className="flex flex-col gap-2">
        {[
          { text: 'Follow my LinkedIn', icon: '➜' },
          { text: 'Book a meeting', icon: '➜' },
          { text: 'Meet me in person at SF', icon: '➜' }
        ].map((link, index) => (
          <a 
            key={index}
            href="#" 
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <span className="text-red-500">{link.icon}</span>
            {link.text}
          </a>
        ))}
      </div>
    );
  };

export default ContactLinks;