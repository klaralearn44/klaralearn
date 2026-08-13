import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { HowItWorksSteps } from '@/components/ui/how-it-works';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ShieldCheck, CreditCard, Video } from 'lucide-react';
import { motion } from 'framer-motion';

export function HowItWorksPage() {
  return (
    <Layout>
      <SEOHead 
        title="How KlaraLearn Works | Vetted Global Tutors"
        description="See how easy it is to find, book, and learn with KlaraLearn's affordable online tutors. Free trials and secure payments included."
        path="/how-it-works"
      />

      <section className="bg-[#1B3D5C] pt-24 pb-20 relative text-center">
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Simple, safe, and effective
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            We've built a platform that removes the stress from finding a great tutor, so you can focus on your child's progress.
          </p>
        </div>
      </section>

      <HowItWorksSteps />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-6">Rigorous vetting you can trust</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We don't let just anyone tutor on KlaraLearn. Our multi-stage vetting process ensures only the most capable, reliable, and safe educators make it onto the platform.
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1"><ShieldCheck className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg">ID & Background Checks</h4>
                    <p className="text-slate-600">Every tutor undergoes strict identity verification and background checks equivalent to a UK DBS check.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg">Qualifications Verified</h4>
                    <p className="text-slate-600">We manually check university degrees, teaching certificates, and professional credentials.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><Video className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg">Trial Lesson Assessment</h4>
                    <p className="text-slate-600">Tutors must pass a mock teaching session with our team to prove their communication skills and subject knowledge.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 p-8 md:p-12 rounded-2xl border"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border mb-6">
                <CreditCard className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Guarantees</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg text-secondary mb-2">Free Trial Session</h4>
                  <p className="text-slate-600">Message any tutor and book a 15-minute free video chat to see if they're a good fit before you spend a penny.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-secondary mb-2">Money-Back Promise</h4>
                  <p className="text-slate-600">Not happy with your first paid lesson? Let us know, and we'll refund you entirely and help you find a better match.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-secondary mb-2">Secure Payments</h4>
                  <p className="text-slate-600">All payments are handled securely via Stripe. Tutors are only paid once the lesson is successfully completed.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/10 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-secondary mb-6">Ready to find the perfect tutor?</h2>
          <Button asChild size="lg" className="bg-[#1B3D5C] hover:bg-[#1B3D5C]/90 text-white rounded-full px-10 h-14 text-lg">
            <a href="https://app.klaralearn.com">Start Searching Now</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
