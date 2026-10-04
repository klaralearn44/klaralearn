import { type ReactNode } from 'react';
import { useLocation } from 'wouter';
import { TrialSignupBand } from '@/components/cta/TrialSignupBand';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const showParentTrial = !location.startsWith('/become-a-tutor') && !location.startsWith('/legal');

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      {showParentTrial && <TrialSignupBand />}
      <Footer />
    </div>
  );
}
