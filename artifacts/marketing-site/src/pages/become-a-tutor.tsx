import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Globe, BookOpen, Clock, Banknote, ShieldCheck, Laptop } from 'lucide-react';
import { Link } from 'wouter';

export function BecomeATutorPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Become a Tutor | Online Tutoring Jobs | KlaraLearn",
      "description": "Teach the UK curriculum online from Nigeria, Ghana, Kenya, the UK, and globally. Join KlaraLearn to find online tutoring jobs and manage your students securely."
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Become a Tutor | Online Tutoring Jobs | KlaraLearn"
        description="Teach the UK curriculum online from anywhere in the world. We welcome educators from Nigeria, Ghana, Kenya, and the UK to join our tutoring platform."
        path="/become-a-tutor"
        schema={schema}
      />

      <section className="bg-[#1B3D5C] pt-24 pb-20 md:pt-32 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1B3D5C] via-[#1B3D5C]/90 to-[#1B3D5C]/60" />
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15] tracking-tight">
              Teach globally, <br className="hidden md:block" />
              <span className="text-[#4DE1C1]">earn reliably</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light">
              KlaraLearn connects UK families with experienced educators worldwide. If you know the UK curriculum and have a passion for teaching, build your tutoring career with us from Nigeria, Ghana, Kenya, the UK, or anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white border-none text-lg h-14 px-8 rounded-full shadow-lg transition-all">
                <a href="https://app.klaralearn.com/register">Apply to Tutor</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Why teach on KlaraLearn?</h2>
            <p className="text-lg text-slate-600">We provide the students, the classroom and the tools, allowing you to focus on what you do best: teaching.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-50 border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Global reach</h3>
              <p className="text-slate-600 leading-relaxed">Connect with UK families seeking quality tuition. We welcome talent from Africa, the UK, and internationally.</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Flexible schedule</h3>
              <p className="text-slate-600 leading-relaxed">Set your own availability and manage your bookings. Work full-time or part-time around your existing commitments.</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Banknote className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Set your rates</h3>
              <p className="text-slate-600 leading-relaxed">You control your hourly rate. Families browse profiles based on subject, experience, and budget.</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Secure platform</h3>
              <p className="text-slate-600 leading-relaxed">Teach through our dedicated online classroom designed for interactive, effective remote learning.</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">UK Curriculum focus</h3>
              <p className="text-slate-600 leading-relaxed">Specialize in subjects you know best, including 11 Plus preparation, GCSEs, and SATs support.</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Professional environment</h3>
              <p className="text-slate-600 leading-relaxed">Every session is recorded for transparency, protecting both the student and the tutor.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Our requirements</h2>
            <p className="text-lg text-slate-600">To maintain our standards and ensure trust with parents, all tutors must successfully complete our verification process.</p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl border shadow-sm">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-secondary text-lg mb-1">Identity Verification</h4>
                  <p className="text-slate-600">You must provide valid identification during onboarding to confirm your identity.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-secondary text-lg mb-1">Curriculum Knowledge</h4>
                  <p className="text-slate-600">You must demonstrate a strong understanding of the UK curriculum in your chosen subjects.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-secondary text-lg mb-1">Professional Interview</h4>
                  <p className="text-slate-600">You will complete an interview and subject assessment with our team.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold text-secondary text-lg mb-1">Technical Setup</h4>
                  <p className="text-slate-600">You need a reliable internet connection, a quiet environment, and a working webcam and microphone for the secure platform lessons.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#00A896] text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'2\' fill=\'%23ffffff\' fill-opacity=\'0.1\'/%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start your tutoring career</h2>
          <p className="text-xl text-white/90 mb-10">Join our growing community of international educators supporting UK families.</p>
          <Button asChild size="lg" className="bg-[#1B3D5C] hover:bg-[#1B3D5C]/90 text-white text-lg h-14 px-10 rounded-full shadow-xl">
            <a href="https://app.klaralearn.com/register">Apply Now</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
