// src/components/Work/WorkSection.tsx
import React from 'react';

const workExperience = [
  {
    company: 'Piaz Capital',
    role: 'Founder & CEO',
    period: 'Aug 2021 - Present · 3 yrs 6 mos',
    logo: '⬛'
  },
  {
    company: 'Trinity Network',
    role: 'Founder',
    period: 'Oct 2023 - Present · 1 yr 4 mos',
    logo: '△'
  },
  {
    company: 'X3 Com',
    role: 'Founder',
    period: 'Dec 2022 - Present · 2 yrs 2 mos',
    logo: '✕'
  },
  {
    company: 'Beng Beng Group',
    role: 'Founder',
    period: 'Aug 2021 - Present · 3 yrs 6 mos',
    logo: '🌐'
  }
];

const WorkSection = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Work</h2>
      <div className="space-y-6">
        {workExperience.map((work, index) => (
          <div key={index} className="grid grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 flex items-center justify-center ${
                work.company === 'Beng Beng Group' ? 'bg-blue-600' : 'bg-black'
              }`}>
                <span className="text-white text-sm">{work.logo}</span>
              </div>
              <span className="font-medium text-gray-900">{work.company}</span>
            </div>
            <div className="text-gray-600">{work.role}</div>
            <div className="text-gray-500 text-sm text-right">{work.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;