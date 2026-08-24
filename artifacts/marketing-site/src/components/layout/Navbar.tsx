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
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-1 text-slate-600 hover:text-primary font-medium py-2">
              Subjects <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              <Link href="/subjects/11-plus" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary">11 Plus</Link>
              <Link href="/subjects/maths" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary">Maths</Link>
              <Link href="/subjects/gcse-maths" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary">GCSE Maths</Link>
              <Link href="/subjects/english" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary">English</Link>
              <Link href="/subjects/science" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary">Science</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-slate-600 hover:text-primary font-medium py-2">
              Locations <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              <Link href="/location/london" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary">London</Link>
              <Link href="/location/kent" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary">Kent</Link>
              <Link href="/location/manchester" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary">Manchester</Link>
              <Link href="/location/online" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary">Online</Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-slate-600 hover:text-primary font-medium py-2">
              Blog <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 w-72 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              <div className="px-4 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">11 Plus Guides</div>
              <Link href="/blog/what-is-the-11-plus" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary text-sm">What Is the 11 Plus?</Link>
              <Link href="/blog/how-to-prepare-for-11-plus" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary text-sm">How to Prepare for the 11 Plus</Link>
              <Link href="/blog/11-plus-verbal-reasoning" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary text-sm">Verbal & Non-Verbal Reasoning</Link>
              <Link href="/blog/11-plus-practice-papers" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary text-sm">Practice Papers Guide</Link>
              <div className="border-t my-1" />
              <div className="px-4 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">Grammar Schools</div>
              <Link href="/blog/what-is-a-grammar-school" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary text-sm">What Is a Grammar School?</Link>
              <Link href="/blog/grammar-school-admissions" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary text-sm">Grammar School Admissions</Link>
              <Link href="/blog/best-grammar-schools-uk" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary text-sm">Best Grammar Schools in England</Link>
              <Link href="/blog/grammar-school-fees" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary text-sm">Grammar School Fees</Link>
              <Link href="/blog/grammar-school-vs-comprehensive" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary text-sm">Grammar vs Comprehensive</Link>
              <div className="border-t my-1" />
              <div className="px-4 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">Tutoring</div>
              <Link href="/blog/how-much-does-tutoring-cost" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary text-sm">How Much Does Tutoring Cost?</Link>
              <div className="border-t my-1" />
              <Link href="/blog" className="block px-4 py-2 text-primary font-medium text-sm hover:bg-slate-50">View All Articles →</Link>
            </div>
          </div>

          <Link href="/how-it-works" className={`font-medium ${isCurrent('/how-it-works') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>
            How It Works
          </Link>
          <Link href="/find-a-tutor" className={`font-medium ${isCurrent('/find-a-tutor') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>
            Find a Tutor
          </Link>
          <Link href="/parents" className={`font-medium ${isCurrent('/parents') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>
            For Parents
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://app.klaralearn.com/login" className="text-slate-600 font-medium hover:text-[#1B3D5C] transition-colors">
            Login
          </a>
          <Button asChild className="bg-[#00A896] hover:bg-[#00A896]/90 text-white rounded-full px-6 font-semibold">
            <a href="https://app.klaralearn.com">Find a Tutor</a>
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
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-900 font-medium">All Blog Articles</Link>
            <div className="flex flex-col gap-3 pt-4">
              <a href="https://app.klaralearn.com/login" className="w-full text-center py-3 font-medium border rounded-full">Login</a>
              <Button asChild className="w-full bg-[#00A896] hover:bg-[#00A896]/90 text-white rounded-full py-6 text-lg font-semibold">
                <a href="https://app.klaralearn.com">Find a Tutor</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
