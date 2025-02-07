// src/components/Profile/Introduction.tsx
import React from 'react';

const Introduction = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <p className="text-gray-700">
          I&apos;m Son Piaz, founder of <span className="font-bold text-black">Piaz Capital</span>, managing 
          a <span className="font-bold text-black">$5M</span> fund focused on early-stage investments 
          in <span className="font-bold text-black">blockchain</span>, <span className="font-bold text-black">SaaS</span>, and <span className="font-bold text-black">AI</span>. 
          Since 2021, I&apos;ve invested in <span className="font-bold text-black">40+ seed-stage crypto projects</span>, helping drive innovation and growth.
        </p>
        <p className="text-gray-700">
          As a seasoned educator, I&apos;ve trained thousands in <span className="font-bold text-black">Affiliate Marketing</span> and 
          <span className="font-bold text-black"> Investments</span>, empowering many to achieve financial independence. Through 
          <span className="font-bold text-black"> Trinity Network</span> and <span className="font-bold text-black">Beng Beng Gaming</span>, I&apos;m building tech-driven communities 
          and positioning <span className="font-bold text-black">Vietnam</span> as a key player in the global tech landscape.
        </p>
      </div>
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
    </div>
  );
};

export default Introduction;