// src/components/HostedEvent/HostedEventSection.tsx
import React from 'react';
import Image from 'next/image';

const events = [
  {
    title: 'Private Mastermind',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices ... Donec feugiat accu ms an libero, non maximus dolor aliquam vitae',
    date: '07/02/2025',
    location: 'Landmark 81 HCM',
    image: '/careerexpo.jpg'
  },
  {
    title: 'Private Mastermind',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices ... Donec feugiat accu ms an libero, non maximus dolor aliquam vitae',
    date: '07/02/2025',
    location: 'Landmark 81 HCM',
    image: '/bengbeng.jpg'
  },
  {
    title: 'Private Mastermind',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices ... Donec feugiat accu ms an libero, non maximus dolor aliquam vitae',
    date: '07/02/2025',
    location: 'Landmark 81 HCM',
    image: '/affiliate.jpg'
  }
];

const EventCard = ({ event }: { event: typeof events[0] }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex justify-between gap-6">
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-4">
          <h3 className="font-medium text-gray-900">{event.title}</h3>
          <div className="flex gap-2">
            <a href="#" className="text-red-600 hover:text-red-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
              </svg>
            </a>
            <a href="#" className="text-red-600 hover:text-red-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
        <p className="text-gray-600">{event.description}</p>
        <p className="text-gray-400 text-sm">{event.date} - {event.location}</p>
      </div>
      <div className="relative w-24 h-24">
        <Image 
          src={event.image}
          alt={event.title}
          fill
          className="rounded-lg object-cover"
          sizes="96px"
        />
      </div>
    </div>
  );
};

const HostedEventSection = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Hosted Event</h2>
      <div className="space-y-4">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      <a href="#" className="text-blue-600 hover:underline block mt-6">
        Full event (45+)
      </a>
    </section>
  );
};

export default HostedEventSection;