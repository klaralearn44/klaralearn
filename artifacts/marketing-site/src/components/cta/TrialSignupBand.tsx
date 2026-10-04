import { PARENT_SIGNUP_URL, TRIAL_BUTTON_LABEL, TRIAL_SENTENCE } from '@/lib/trial-cta';
import { ArrowRight } from 'lucide-react';

export function TrialSignupBand() {
  return (
    <section className="py-20 bg-[#00A896] text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'2\' fill=\'%23ffffff\' fill-opacity=\'0.1\'/%3E%3C/svg%3E')] opacity-30" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Start with a free 15-minute trial</h2>
        <p className="text-xl text-white/90 mb-4">{TRIAL_SENTENCE}</p>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Create a parent account, compare available tutor profiles, and meet a tutor before you book paid lessons.
        </p>
        <a
          href={PARENT_SIGNUP_URL}
          className="inline-flex items-center justify-center bg-[#1B3D5C] hover:bg-[#1B3D5C]/90 text-white text-lg min-h-14 px-10 py-3 rounded-full shadow-xl font-semibold"
        >
          {TRIAL_BUTTON_LABEL} <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
