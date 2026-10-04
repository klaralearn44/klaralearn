import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import { Shield, Video, CheckCircle2, UserCheck, FileCheck, Target } from 'lucide-react';
import { Link } from 'wouter';
import { TrialSignupButton } from '@/components/cta/TrialSignupButton';
import { QuickAnswer } from '@/components/seo/QuickAnswer';
import { faqPageSchema } from '@/lib/faq-schema';

export function SafeguardingPage() {
  const faqs = [
    {
      q: "Does KlaraLearn use DBS checks?",
      a: "A DBS check is a UK process and cannot be run on tutors who live outside the UK. KlaraLearn therefore uses identity verification, an interview and curriculum assessment, platform lessons, session recording, and a 15-minute introductory session."
    },
    {
      q: "How are tutor identities checked?",
      a: "Before a tutor can list their services, KlaraLearn verifies their identity so families know the person on the profile is the person teaching."
    },
    {
      q: "What happens in the tutor interview?",
      a: "Prospective tutors are interviewed on professionalism and communication, and they complete an assessment of curriculum knowledge for the UK subjects they want to teach."
    },
    {
      q: "Where do lessons take place?",
      a: "Tutoring sessions take place inside KlaraLearn's secure online classroom. Lessons are not moved to unmonitored third-party video tools."
    },
    {
      q: "Can parents watch or review a lesson?",
      a: "Lessons conducted through KlaraLearn are recorded. Parents can review the recording, the topics covered, and the tutor's feedback."
    },
    {
      q: "Can we meet a tutor before paying for lessons?",
      a: "Yes. Families can arrange a free 15-minute introductory session to ask questions and decide whether the tutor is a suitable fit."
    },
    {
      q: "Where is KlaraLearn's private tutor safeguarding policy?",
      a: "This page is the public explanation. Tutors outside the UK are not DBS checked, because DBS is a UK process. KlaraLearn checks identity, interviews the tutor, assesses curriculum knowledge, keeps lessons in its own classroom, records those lessons for parents, and offers a free 15-minute trial before paid bookings."
    }
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Safeguarding & Trust | KlaraLearn",
      "description": "Learn about KlaraLearn's international safeguarding processes, including identity verification, session recording, and parent visibility."
    },
    faqPageSchema(faqs)
  ];

  return (
    <Layout>
      <SEOHead 
        title="Safeguarding & Trust | KlaraLearn"
        description="KlaraLearn's private tutor safeguarding approach: identity checks, interviews, curriculum assessment, recorded online lessons, and a free 15-minute trial."
        path="/safeguarding"
        schema={schema}
      />

      <section className="bg-[#1B3D5C] pt-24 pb-20 relative">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Safety, transparency and <span className="text-[#4DE1C1]">peace of mind</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto font-light">
            We built KlaraLearn to give parents access to affordable, high-quality global teaching talent without compromising on safety or visibility.
          </p>
          <div className="max-w-3xl mx-auto">
            <QuickAnswer tone="dark">
              Tutors outside the UK cannot be DBS checked. KlaraLearn uses identity verification, an interview, a curriculum assessment, recorded lessons, and a free 15-minute introductory session before paid bookings.
            </QuickAnswer>
          </div>
        </div>
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-6">Our international safeguarding approach</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              When UK parents look for a tutor locally, they often rely on DBS (Disclosure and Barring Service) checks. However, a DBS check is a UK-specific process and cannot be run on international residents.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Because KlaraLearn connects families with educators in Nigeria, Ghana, Kenya and other locations, we do not rely on UK DBS checks. Instead, we have implemented a comprehensive alternative safeguarding process designed for international talent. This ensures that every tutor on our platform is verified and that every lesson is conducted with full transparency.
            </p>
          </div>

          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <UserCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-3">1. Identity Verification</h3>
                <p className="text-slate-600 leading-relaxed">
                  Before a tutor can list their services, we verify their identity. This process confirms they are who they say they are, providing a foundational layer of security.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-3">2. Interview and Assessment</h3>
                <p className="text-slate-600 leading-relaxed">
                  We interview prospective tutors to evaluate their professionalism and communication skills. They also undergo an assessment of their curriculum knowledge and subject expertise to ensure they meet the standard expected for UK curriculum tutoring.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Shield className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-3">3. Platform Lessons</h3>
                <p className="text-slate-600 leading-relaxed">
                  All tutoring sessions must happen within the KlaraLearn secure environment. We do not permit tutors and students to move lessons to unmonitored third-party video software, ensuring our safety tools are always active.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Video className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-3">4. Session Recording & Parent Visibility</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We believe transparency is a vital safeguard. Lessons conducted through KlaraLearn are recorded so parents can review learning activity and maintain visibility.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Parents have access to session recordings for review.</span></li>
                  <li className="flex items-start gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Learning activity and topics covered are documented.</span></li>
                  <li className="flex items-start gap-2 text-slate-600"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /> <span>Tutor feedback is visible to parents after sessions.</span></li>
                </ul>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <FileCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-3">5. The Introductory Session</h3>
                <p className="text-slate-600 leading-relaxed">
                  Before committing to paid lessons, families can arrange a 15-minute introductory session. This gives parents the opportunity to ask questions directly, observe the tutor's style, and ensure they feel completely comfortable with the arrangement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Safeguarding questions parents ask</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`item-${index}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="max-w-3xl mx-auto text-left mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Private tutor safeguarding policy</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              A parent handing a child to a tutor they have not met wants a written process, not a badge. KlaraLearn’s process is built for tutors who may live outside the UK, so a DBS certificate is not the test. DBS does not cover a tutor in Lagos or Nairobi.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Before a profile is shown, the tutor’s identity is checked, they are interviewed, and their curriculum knowledge is assessed for the UK subjects they want to teach. Lessons stay in KlaraLearn’s classroom and are recorded so a parent can watch what happened. The free 15-minute trial is part of that policy: you can leave before a paid lesson. Read <Link href="/how-it-works" className="text-primary font-semibold hover:underline">how a lesson runs</Link> and then <Link href="/find-a-tutor" className="text-primary font-semibold hover:underline">compare tutor profiles</Link>.
            </p>
          </div>
          <h2 className="text-3xl font-bold text-secondary mb-6">Experience the difference</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Find the right support for your child with the transparency you expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrialSignupButton />
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg bg-white border-primary text-primary hover:bg-primary/5">
              <Link href="/how-it-works">How It Works</Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link href="/find-a-tutor" className="text-primary font-semibold hover:underline">Find a tutor</Link>
            <Link href="/parents" className="text-primary font-semibold hover:underline">For parents</Link>
            <Link href="/about" className="text-primary font-semibold hover:underline">About KlaraLearn</Link>
            <Link href="/blog/how-much-does-tutoring-cost" className="text-primary font-semibold hover:underline">Tutoring costs</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
