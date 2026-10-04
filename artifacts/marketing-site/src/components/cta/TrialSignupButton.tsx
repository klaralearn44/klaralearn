import { Button } from '@/components/ui/button';
import { PARENT_SIGNUP_URL, TRIAL_BUTTON_LABEL } from '@/lib/trial-cta';
import { cn } from '@/lib/utils';

export function TrialSignupButton({ className }: { className?: string }) {
  return (
    <Button
      asChild
      size="lg"
      className={cn(
        'bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white border-none rounded-full px-8 whitespace-normal h-auto min-h-12 text-center',
        className,
      )}
    >
      <a href={PARENT_SIGNUP_URL}>{TRIAL_BUTTON_LABEL}</a>
    </Button>
  );
}
