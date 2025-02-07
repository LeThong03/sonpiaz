// src/components/Investing/InvestingSection.tsx
import React from 'react';

const investments = [
  {
    company: 'Piaz Capital',
    description: 'Payroll for remote teams',
    logo: '⬛',
    link: 'deel.com'
  },
  {
    company: 'Trinity Network',
    description: 'Payroll for remote teams',
    logo: '△',
    link: 'deel.com'
  },
  {
    company: 'X3 Com',
    description: 'Payroll for remote teams',
    logo: '✕',
    link: 'deel.com'
  },
  {
    company: 'Beng Beng Group',
    description: 'Payroll for remote teams',
    logo: '🌐',
    link: 'deel.com'
  }
];

const InvestingSection = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-4">Investing</h2>
      <p className="text-gray-500 mb-4">
        I actively make angel investments and advise a few select startups.
      </p>
      <h3 className="font-medium mb-6">Select direct investments:</h3>
      
      <div className="space-y-6">
        {investments.map((investment, index) => (
          <div key={index} className="grid grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 flex items-center justify-center ${
                investment.company === 'Beng Beng Group' ? 'bg-blue-600' : 'bg-black'
              }`}>
                <span className="text-white text-sm">{investment.logo}</span>
              </div>
              <span className="font-medium text-gray-900">{investment.company}</span>
            </div>
            <div className="text-gray-600">{investment.description}</div>
            <div className="text-right">
              <a 
                href={`https://${investment.link}`}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {investment.link}
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <a href="#" className="text-blue-600 hover:underline block mt-6">
        Full portfolio (45+)
      </a>
    </section>
  );
};

export default InvestingSection;