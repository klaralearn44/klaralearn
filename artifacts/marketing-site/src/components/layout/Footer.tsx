import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { PARENT_SIGNUP_URL, TRIAL_BUTTON_LABEL } from '@/lib/trial-cta';
import { familyLinks, guideLinks, locationLinks, subjectLinks } from '@/lib/internal-links';

export function Footer() {
  const logoSrc = `${import.meta.env.BASE_URL}brand/logo-mono-white.png`;

  return (
    <footer className="bg-[#1B3D5C] text-white/80 py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-12">
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
            <a href={PARENT_SIGNUP_URL} className="inline-flex mt-6 text-white font-semibold hover:text-[#4DE1C1] transition-colors">
              {TRIAL_BUTTON_LABEL}
            </a>
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
              {subjectLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Locations</h4>
            <ul className="space-y-4">
              {locationLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Guides</h4>
            <ul className="space-y-4">
              {guideLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {familyLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 KlaraLearn. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
