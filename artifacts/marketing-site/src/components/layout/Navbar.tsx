import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isCurrent = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center">
            {/* SVG Logo */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:scale-105 transition-transform duration-300"
            >
              {/* K lettermark */}
              <path
                d="M12 12V32"
                stroke="#1B3D5C"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32 12L12 28"
                stroke="#1B3D5C"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 22L32 36"
                stroke="#1B3D5C"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Open Book Base */}
              <path
                d="M8 38C12 36 18 36 24 40C30 36 36 36 40 38"
                stroke="#00A896"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Orange Dot */}
              <circle cx="21" cy="22" r="5" fill="#E05C2A" />
            </svg>

            {/* Wordmark */}
            <span className="ml-1 text-2xl font-bold tracking-tight">
              <span className="text-[#1B3D5C]">Klara</span>
              <span className="text-[#00A896]">Learn</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-1 text-slate-600 hover:text-primary font-medium py-2">
              Subjects <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
              <Link href="/subjects/11-plus" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary">11 Plus</Link>
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
              <Link href="/location/manchester" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary">Manchester</Link>
              <Link href="/location/online" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary">Online</Link>
            </div>
          </div>

          <Link href="/how-it-works" className={`font-medium ${isCurrent('/how-it-works') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>
            How It Works
          </Link>
          <Link href="/blog" className={`font-medium ${isCurrent('/blog') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>
            Blog
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
              <Link href="/subjects/gcse-maths" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600">GCSE Maths</Link>
              <Link href="/subjects/english" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600">English</Link>
              <Link href="/subjects/science" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600">Science</Link>
            </div>
            <div className="space-y-3 pb-4 border-b">
              <h4 className="font-bold text-slate-900 px-2 uppercase text-sm tracking-wider">Locations</h4>
              <Link href="/location/london" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600">London</Link>
              <Link href="/location/manchester" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600">Manchester</Link>
              <Link href="/location/online" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-600">Online</Link>
            </div>
            <Link href="/how-it-works" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-900 font-medium">How It Works</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-2 py-2 text-slate-900 font-medium">Blog</Link>
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
