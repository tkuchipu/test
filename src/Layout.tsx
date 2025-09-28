'use client';

import { JSX, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { Placeholder, LayoutServiceData, HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import Scripts from 'src/Scripts';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const pathname = usePathname();

  const lang = useMemo(() => pathname?.split('/')[1] || 'en', [pathname]);

  return (
    <>
      <Scripts />
      <html lang={lang}>
        <body className={inter.className}>
          {route && <Placeholder name="jss-header" rendering={route} />}
          {route && <Placeholder name="jss-main" rendering={route} />}
          {route && <Placeholder name="jss-footer" rendering={route} />}
        </body>
      </html>
    </>
  );
};

export default Layout;
