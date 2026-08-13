import { Star } from 'lucide-react';

export function TrustStats() {
  return (
    <div className="bg-[#1B3D5C] py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 text-center">
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
            <div className="text-primary-foreground/80 text-sm md:text-base font-medium uppercase tracking-wider">Verified Tutors</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">10,000+</div>
            <div className="text-primary-foreground/80 text-sm md:text-base font-medium uppercase tracking-wider">Sessions Completed</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-accent flex items-center gap-1">
              4.9
              <Star className="w-6 h-6 fill-accent text-accent" />
            </div>
            <div className="text-primary-foreground/80 text-sm md:text-base font-medium uppercase tracking-wider">Average Rating</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
            <div className="text-primary-foreground/80 text-sm md:text-base font-medium uppercase tracking-wider">DBS Checked</div>
          </div>
        </div>
      </div>
    </div>
  );
}
