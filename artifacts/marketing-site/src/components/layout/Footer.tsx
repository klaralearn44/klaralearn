import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const logoSrc = `${import.meta.env.BASE_URL}brand/logo-mono-white.png`;

  return (
    <footer className="bg-[#1B3D5C] text-white/80 py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img src={logoSrc} alt="KlaraLearn" className="h-10 w-auto max-w-[178px] object-contain" />
            </Link>
            <p className="text-lg mb-6 text-white/90 max-w-sm">
              Global tutors. Brighter futures.
            </p>
            <p className="text-sm max-w-sm leading-relaxed">
              Professional-quality tutoring for 11 Plus, GCSE & SATs at significantly lower price points than the UK market average.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Subjects</h4>
            <ul className="space-y-4">
              <li><Link href="/subjects/11-plus" className="hover:text-white transition-colors">11 Plus Tutoring</Link></li>
              <li><Link href="/subjects/gcse-maths" className="hover:text-white transition-colors">GCSE Maths</Link></li>
              <li><Link href="/subjects/english" className="hover:text-white transition-colors">English Tutoring</Link></li>
              <li><Link href="/subjects/science" className="hover:text-white transition-colors">Science Tutoring</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Locations</h4>
            <ul className="space-y-4">
              <li><Link href="/location/london" className="hover:text-white transition-colors">Tutors in London</Link></li>
              <li><Link href="/location/manchester" className="hover:text-white transition-colors">Tutors in Manchester</Link></li>
              <li><Link href="/location/online" className="hover:text-white transition-colors">Online Tutors UK</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/safeguarding" className="hover:text-white transition-colors">Safeguarding</Link></li>
              <li><Link href="/find-a-tutor" className="hover:text-white transition-colors">Find a Tutor</Link></li>
              <li><Link href="/become-a-tutor" className="hover:text-white transition-colors">Become a Tutor</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/parents" className="hover:text-white transition-colors">For Parents</Link></li>
              <li><Link href="/parents/tools" className="hover:text-white transition-colors">Parent Tools</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 KlaraLearn. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
