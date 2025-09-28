import React, { JSX } from 'react';
import { Placeholder, ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

interface TwoColumnLayoutProps {
  rendering: ComponentRendering;
}

const TwoColumnLayout = ({ rendering }: TwoColumnLayoutProps): JSX.Element => {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="flex flex-col gap-8 lg:items-center lg:gap-16 lg:flex-row">
          <div className="lg:max-w-xl xl:shrink-0">
            <Placeholder name="jss-left-col" rendering={rendering} />
          </div>
          <div className="w-full">
            <Placeholder name="jss-right-col" rendering={rendering} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnLayout;
