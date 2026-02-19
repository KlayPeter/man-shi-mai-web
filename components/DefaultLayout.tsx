'use client';

'use client';

import DefaultLayout from './DefaultLayout';
import BackToTop from './BackToTop';
import FeedbackButton from './FeedbackButton';
import AppHeader from './AppHeader';
import Footer from './Footer';

export default function DefaultLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <main className="flex-1 bg-gray-50">{children}</main>
      <Footer />
      <BackToTop />
      <FeedbackButton />
    </div>
  );
}
