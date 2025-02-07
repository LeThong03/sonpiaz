// src/app/page.tsx
import React from 'react';
import ProfileImage from '@/components/Profile/ProfileImage';
import Introduction from '@/components/Profile/Introduction';
import ReachOut from '@/components/Profile/ReachOut';
import LocationInfo from '@/components/Profile/LocationInfo';
import WorkSection from '@/components/Work/WorkSection';
import InvestingSection from '@/components/Investing/InvestingSection';
import HostedEventSection from '@/components/HostedEvent/HostedEventSection';
import GetInTouchSection from '@/components/GetInTouch/GetInTouchSection';

const HomePage = () => {
  return (
    <main className="max-w-5xl mx-auto p-4 md:p-8">
      {/* Profile Image */}
      <div className="mb-6">
        <ProfileImage />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between md:gap-16">
        {/* Left Column - Introduction */}
        <div className="flex-1">
          <Introduction />
        </div>
        
        {/* Right Column - Reach Out & Location */}
        <div className="mt-6 md:mt-0 space-y-4">
          <div className="border rounded-lg p-4">
            <ReachOut />
          </div>
          <div className="border rounded-lg p-4">
            <LocationInfo />
          </div>
        </div>
      </div>

      {/* Work & Investing Sections */}
      <WorkSection />
      <InvestingSection />
      <HostedEventSection />
      <GetInTouchSection />
    </main>
  );
};

export default HomePage;