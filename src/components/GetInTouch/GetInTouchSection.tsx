// src/components/GetInTouch/GetInTouchSection.tsx
import React from 'react';

const GetInTouchSection = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
      <p className="text-gray-500 mb-6">
        You can <a href="#" className="text-blue-600 hover:underline">email me</a> directly 
        or reach out on LinkedIn, I'd love to hear from you!
      </p>
      
      <div className="space-y-3">
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
    </section>
  );
};

export default GetInTouchSection;