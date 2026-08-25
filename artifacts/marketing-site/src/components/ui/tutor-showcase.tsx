import type { Tutor } from '@/data/tutors';
import { TutorCard } from '@/components/ui/tutor-card';
import { useLiveTutors } from '@/hooks/use-live-tutors';

interface TutorShowcaseProps {
  filter?: (tutor: Tutor) => boolean;
  /**
   * Kept optional for existing page call sites. Unreviewed static cards are
   * intentionally never rendered as a fallback for a live discovery surface.
   */
  fallbackTutors?: Tutor[];
  limit?: number;
  emptyMessage?: string;
}

function TutorCardSkeleton() {
  return (
    <div className="rounded-2xl border bg-white p-6 animate-pulse" aria-hidden="true">
      <div className="flex justify-between gap-4">
        <div className="flex gap-4">
          <div className="h-16 w-16 rounded-full bg-slate-200" />
          <div className="space-y-2 pt-1">
            <div className="h-5 w-28 rounded bg-slate-200" />
            <div className="h-4 w-20 rounded bg-slate-100" />
            <div className="h-4 w-16 rounded bg-slate-100" />
          </div>
        </div>
        <div className="h-8 w-12 rounded bg-slate-200" />
      </div>
      <div className="mt-6 space-y-2">
        <div className="h-4 w-full rounded bg-slate-100" />
        <div className="h-4 w-4/5 rounded bg-slate-100" />
      </div>
      <div className="mt-6 h-10 w-full rounded-full bg-slate-200" />
    </div>
  );
}

export function TutorShowcase({
  filter,
  fallbackTutors,
  limit = 3,
  emptyMessage = 'There are no matching tutors to show just yet. Browse all tutors to find the right fit.',
}: TutorShowcaseProps) {
  const { data: liveTutors = [], isLoading, error } = useLiveTutors();
  const filteredTutors = filter ? liveTutors.filter(filter) : liveTutors;
  const tutorsToShow = filteredTutors.slice(0, limit);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-live="polite" aria-busy="true">
        {Array.from({ length: Math.min(limit, 3) }, (_, index) => <TutorCardSkeleton key={index} />)}
        <span className="sr-only">Loading live tutor listings.</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-5">
        <p role="alert" className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Live tutor listings are temporarily unavailable. We are not showing
          unreviewed profiles while we reconnect.{' '}
          <a
            href="https://app.klaralearn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2"
          >
            Open KlaraLearn
          </a>
        </p>
      </div>
    );
  }

  if (tutorsToShow.length === 0) {
    return (
      <p className="rounded-xl border border-slate-200 bg-white px-5 py-6 text-center text-slate-600" role="status">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tutorsToShow.map((tutor, index) => (
        <TutorCard key={tutor.id} tutor={tutor} index={index} />
      ))}
    </div>
  );
}