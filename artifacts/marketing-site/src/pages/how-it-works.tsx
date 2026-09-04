import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { HowItWorksSteps } from '@/components/ui/how-it-works';
import { Button } from '@/components/ui/button';
import { CheckCircle2, CreditCard, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export function HowItWorksPage() {
  return (
    <Layout>
      <SEOHead 
        title="How KlaraLearn Works | Find Available Tutors"
        description="See how to compare available online tutor profiles, arrange an introductory session, learn securely and track your child’s progress."
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
              <h2 className="text-3xl font-bold text-secondary mb-6">Choose a tutor with confidence</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Start by comparing available tutor profiles. Parents should review a tutor's listed subjects, experience, qualifications where provided and hourly rate, then ask questions before booking.
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg">Profile details</h4>
                    <p className="text-slate-600">Use profile information to compare subjects, school stages, experience and qualifications where listed.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg">Ask your questions</h4>
                    <p className="text-slate-600">Use an introductory session to discuss your child's needs, learning goals and the tutor's approach.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-primary" /></div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg">Full visibility</h4>
                    <p className="text-slate-600">Every lesson is recorded and stored securely so you can monitor progress and ensure quality.</p>
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
              <h3 className="text-2xl font-bold text-secondary mb-4">Before you book</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg text-secondary mb-2">Review the profile</h4>
                  <p className="text-slate-600">Check the tutor's listed details and current hourly rate, and decide whether they are relevant to your child's needs.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-secondary mb-2">Talk before committing</h4>
                  <p className="text-slate-600">An introductory conversation can help you decide whether a tutor is a suitable fit.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-secondary mb-2">Check booking details</h4>
                  <p className="text-slate-600">Review the booking and payment details shown when you arrange a lesson.</p>
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
            <a href="https://app.klaralearn.com/version-test?view=signup">Sign Up Now</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
