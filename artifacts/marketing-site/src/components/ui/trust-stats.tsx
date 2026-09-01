export function TrustStats() {
  return (
    <div className="bg-[#1B3D5C] py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 text-center">
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">Available</div>
            <div className="text-primary-foreground/80 text-sm md:text-base font-medium uppercase tracking-wider">Tutor Profiles</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">Profile</div>
            <div className="text-primary-foreground/80 text-sm md:text-base font-medium uppercase tracking-wider">Details to Review</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">Live</div>
            <div className="text-primary-foreground/80 text-sm md:text-base font-medium uppercase tracking-wider">Hourly Rates</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">Online</div>
            <div className="text-primary-foreground/80 text-sm md:text-base font-medium uppercase tracking-wider">Tutor Search</div>
          </div>
        </div>
      </div>
    </div>
  );
}
