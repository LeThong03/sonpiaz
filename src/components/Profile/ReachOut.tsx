import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ReachOut = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <ArrowUpRight className="w-5 h-5 text-gray-600" />
        <span className="text-gray-900">Reach out:</span>
      </div>
      <ul className="space-y-2 list-none">
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
    </div>
  );
};

export default ReachOut;