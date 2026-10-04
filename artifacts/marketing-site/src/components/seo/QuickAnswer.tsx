import type { ReactNode } from 'react';

export function QuickAnswer({ children, tone = 'light' }: { children: ReactNode; tone?: 'light' | 'dark' }) {
  const box = tone === 'dark'
    ? 'border-l-4 border-[#4DE1C1] bg-white/10 p-6 rounded-r-xl mb-8 text-left backdrop-blur-sm'
    : 'border-l-4 border-[#00A896] bg-[#00A896]/8 p-6 rounded-r-xl mb-8 text-left';
  const label = tone === 'dark' ? 'text-[#4DE1C1]' : 'text-[#00A896]';
  const body = tone === 'dark' ? 'text-white' : 'text-slate-800';

  return (
    <div className={box}>
      <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${label}`}>Quick Answer</p>
      <p className={`leading-relaxed ${body}`}>{children}</p>
    </div>
  );
}
