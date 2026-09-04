import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const logoSrc = `${import.meta.env.BASE_URL}brand/logo-full.png`;

  const isCurrent = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src={logoSrc}
            alt="KlaraLearn"
            className="h-10 w-auto max-w-[174px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-7 ml-8 pl-8 pr-6 border-l border-slate-200">
          <div className="relative group">
            <button aria-haspopup="true" className="flex items-center gap-1 text-secondary hover:text-primary font-semibold py-2">
              Tuition <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 w-[400px] bg-white border rounded-xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-all duration-200 p-4 grid grid-cols-2 gap-2">
              <div>
                <div className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">Subjects</div>
                <Link href="/subjects/11-plus" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">11 Plus</Link>
                <Link href="/subjects/maths" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">Maths</Link>
                <Link href="/subjects/gcse-maths" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">GCSE Maths</Link>
                <Link href="/subjects/english" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">English</Link>
                <Link href="/subjects/science" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">Science</Link>
              </div>
              <div>
                <div className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">Locations</div>
                <Link href="/location/london" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">London</Link>
                <Link href="/location/kent" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">Kent</Link>
                <Link href="/location/manchester" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">Manchester</Link>
                <Link href="/location/online" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">Online</Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button aria-haspopup="true" className="flex items-center gap-1 text-slate-600 hover:text-primary font-medium py-2">
              Resources <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full right-0 w-[430px] bg-white border rounded-xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-all duration-200 p-4">
              <div className="grid grid-cols-2 gap-2 pb-4 mb-4 border-b">
                <Link href="/parents" className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 hover:border-primary/50 hover:text-primary transition-colors">
                  <span className="block text-sm font-semibold text-secondary">For Parents</span>
                  <span className="block mt-0.5 text-xs text-slate-500">How tutoring works</span>
                </Link>
                <Link href="/parents/tools" className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-2.5 hover:border-primary/50 hover:text-primary transition-colors">
                  <span className="block text-sm font-semibold text-secondary">Parent Tools</span>
                  <span className="block mt-0.5 text-xs text-slate-500">Free planning resources</span>
                </Link>
                <Link href="/safeguarding" className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 hover:border-primary/50 hover:text-primary transition-colors col-span-2">
                  <span className="block text-sm font-semibold text-secondary">Safeguarding</span>
                  <span className="block mt-0.5 text-xs text-slate-500">How we keep lessons safe and transparent</span>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <div className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">11 Plus Guides</div>
                  <Link href="/blog/what-is-the-11-plus" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">What Is the 11 Plus?</Link>
                  <Link href="/blog/how-to-prepare-for-11-plus" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">How to Prepare</Link>
                  <Link href="/blog/11-plus-verbal-reasoning" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">Verbal & Non-Verbal</Link>
                  <Link href="/blog/11-plus-practice-papers" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">Practice Papers</Link>
                </div>
                <div>
                  <div className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">Grammar Schools</div>
                  <Link href="/blog/what-is-a-grammar-school" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">What Is a Grammar School?</Link>
                  <Link href="/blog/grammar-school-admissions" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">Admissions Guide</Link>
                  <Link href="/blog/best-grammar-schools-uk" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">Best Grammar Schools</Link>
                  <Link href="/blog/grammar-school-fees" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">Grammar School Fees</Link>
                  <Link href="/blog/grammar-school-vs-comprehensive" className="block px-2 py-1.5 hover:bg-slate-50 hover:text-primary rounded-md text-sm">Grammar vs Comprehensive</Link>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-3 border-t px-2">
                <Link href="/blog/how-much-does-tutoring-cost" className="text-sm text-slate-600 hover:text-primary">Tutoring Costs</Link>
                <Link href="/blog" className="text-sm text-primary font-semibold hover:underline">View All Articles →</Link>
              </div>
            </div>
          </div>

          <Link href="/how-it-works" className={`font-medium ${isCurrent('/how-it-works') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>
            How It Works
          </Link>
          <Link href="/find-a-tutor" className={`font-medium ${isCurrent('/find-a-tutor') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>
            Find a Tutor
          </Link>
          <Link href="/become-a-tutor" className={`font-medium ${isCurrent('/become-a-tutor') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>
            Become a Tutor
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://app.klaralearn.com/version-test?view=login" className="text-slate-600 font-medium hover:text-[#1B3D5C] transition-colors">
            Login
          </a>
          <Button asChild className="bg-[#00A896] hover:bg-[#00A896]/90 text-white rounded-full px-6 font-semibold">
            <a href="https://app.klaralearn.com/version-test?view=signup">Sign Up</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6 text-slate-600" /> : <Menu className="w-6 h-6 text-slate-600" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-white h-[calc(100vh-80px)] overflow-y-auto">
          <div className="p-4 flex flex-col gap-4">
            <div className="space-y-3 pb-4 border-b">
              <h4 className="font-bold text-slate-900 px-2 uppercase text-sm tracking-wider">Subjects</h4>
              <Link href="/subjects/11-plus" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600">11 Plus</Link>
              <Link href="/subjects/maths" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600">Maths</Link>
              <Link href="/subjects/gcse-maths" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600">GCSE Maths</Link>
              <Link href="/subjects/english" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600">English</Link>
              <Link href="/subjects/science" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600">Science</Link>
            </div>
            <div className="space-y-3 pb-4 border-b">
              <h4 className="font-bold text-slate-900 px-2 uppercase text-sm tracking-wider">Locations</h4>
              <Link href="/location/london" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600">London</Link>
              <Link href="/location/kent" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600">Kent</Link>
              <Link href="/location/manchester" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600">Manchester</Link>
              <Link href="/location/online" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600">Online</Link>
            </div>
            <div className="space-y-3 pb-4 border-b">
              <h4 className="font-bold text-slate-900 px-2 uppercase text-sm tracking-wider">11 Plus Guides</h4>
              <Link href="/blog/what-is-the-11-plus" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600 text-sm">What Is the 11 Plus?</Link>
              <Link href="/blog/how-to-prepare-for-11-plus" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600 text-sm">How to Prepare</Link>
              <Link href="/blog/11-plus-verbal-reasoning" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600 text-sm">Verbal & Non-Verbal Reasoning</Link>
              <Link href="/blog/11-plus-practice-papers" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600 text-sm">Practice Papers Guide</Link>
            </div>
            <div className="space-y-3 pb-4 border-b">
              <h4 className="font-bold text-slate-900 px-2 uppercase text-sm tracking-wider">Grammar Schools</h4>
              <Link href="/blog/what-is-a-grammar-school" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600 text-sm">What Is a Grammar School?</Link>
              <Link href="/blog/grammar-school-admissions" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600 text-sm">Admissions Guide</Link>
              <Link href="/blog/best-grammar-schools-uk" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600 text-sm">Best Grammar Schools</Link>
              <Link href="/blog/grammar-school-fees" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600 text-sm">Grammar School Fees</Link>
              <Link href="/blog/grammar-school-vs-comprehensive" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600 text-sm">Grammar vs Comprehensive</Link>
              <Link href="/blog/how-much-does-tutoring-cost" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600 text-sm">Tutoring Costs</Link>
            </div>
            <Link href="/find-a-tutor" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-900 font-medium">Find a Tutor</Link>
            <Link href="/how-it-works" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-900 font-medium">How It Works</Link>
            <Link href="/parents" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-900 font-medium">For Parents</Link>
            <Link href="/parents/tools" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-900 font-medium">Parent Tools</Link>
            <Link href="/safeguarding" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-900 font-medium">Safeguarding</Link>
            <Link href="/become-a-tutor" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-900 font-medium">Become a Tutor</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-900 font-medium">All Blog Articles</Link>
            <div className="flex flex-col gap-3 pt-4">
              <a href="https://app.klaralearn.com/version-test?view=login" className="w-full text-center py-3 font-medium border rounded-full">Login</a>
              <Button asChild className="w-full bg-[#00A896] hover:bg-[#00A896]/90 text-white rounded-full py-6 text-lg font-semibold">
                <a href="https://app.klaralearn.com/version-test?view=signup">Sign Up</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
