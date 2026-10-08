import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { HowItWorksSteps } from '@/components/ui/how-it-works';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { TrialSignupButton } from '@/components/cta/TrialSignupButton';
import { QuickAnswer } from '@/components/seo/QuickAnswer';
import { faqPageSchema } from '@/lib/faq-schema';
import { CheckCircle2, CreditCard, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export function HowItWorksPage() {
  const faqs = [
    {
      q: "How does KlaraLearn tutoring work?",
      a: "Parents compare tutor profiles by subject, age, curriculum, learning goal, availability and budget. They then meet the tutor in a free 15-minute trial before booking paid lessons."
    },
    {
      q: "What happens in the free 15-minute trial?",
      a: "The introductory session lets your child meet the tutor and lets you ask about the subject, the learning goal and whether the teaching style feels right before you pay for lessons."
    },
    {
      q: "Where do the lessons happen?",
      a: "Paid lessons happen in KlaraLearn's secure online classroom. Session recordings are available to parents, along with notes on topics covered and tutor feedback."
    },
    {
      q: "What can parents see after a lesson?",
      a: "Parents can review completed lessons, topics covered, tutor feedback and how progress is changing over time."
    },
    {
      q: "Do we have to commit to a package?",
      a: "No. The trial comes first, and families can choose another available tutor if the first match is not right."
    },
    {
      q: "How do I start?",
      a: "Create a parent account and start your journey today with a free 15-minute trial session."
    },
    {
      q: "Is a KlaraLearn lesson one to one?",
      a: "Yes. A 121 private tutor lesson is one tutor and one child. It is not a tuition-centre class. You agree the subject and the time, meet in a free 15-minute trial, then book paid lessons if the match is right."
    },
    {
      q: "What happens in a one-to-one private tutor lesson?",
      a: "The tutor teaches the agreed topic in the secure online classroom. Parents can review the recording, the topics covered and the tutor’s feedback afterwards. You can stop after the trial if you do not want a package."
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="How KlaraLearn Works | Find Available Tutors"
        description="See how a one-to-one private tutor lesson works: compare profiles, take a free 15-minute trial, then learn online with session recordings for parents."
        path="/how-it-works"
        schema={faqPageSchema(faqs)}
      />

      <section className="bg-[#1B3D5C] pt-24 pb-20 relative text-center">
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Simple, safe, and effective
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            We've built a platform that removes the stress from finding a great tutor, so you can focus on your child's progress.
          </p>
          <div className="max-w-3xl mx-auto text-left">
            <QuickAnswer tone="dark">
              Families create an account, compare tutor profiles, and meet a tutor in a free 15-minute trial. Paid lessons then run online, with session recordings and progress notes available to parents.
            </QuickAnswer>
          </div>
          <TrialSignupButton />
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

      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Questions about getting started</h2>
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

      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-left mb-10">
            <h2 className="text-3xl font-bold text-secondary mb-4">A 121 private tutor, not a class</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              One-to-one means the hour is spent on your child. The tutor can stop when a method has not landed and try another. That is the difference from a tuition centre, where the room moves on. You still read the profile first: subject, stage, and hourly rate. Then you use the free 15-minute trial. Paid lessons stay inside KlaraLearn, and <Link href="/safeguarding" className="text-primary font-semibold hover:underline">safeguarding</Link> explains identity checks and recordings.
            </p>
          </div>
          <h2 className="text-xl font-bold text-secondary mb-8">Read this before you book</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/find-a-tutor" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Find a Tutor</Link>
            <Link href="/safeguarding" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Safeguarding</Link>
            <Link href="/subjects/11-plus" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">11 Plus Tutors</Link>
            <Link href="/parents" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">For Parents</Link>
            <Link href="/blog/how-much-does-tutoring-cost" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Tutoring Costs</Link>
            <Link href="/about" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">About KlaraLearn</Link>
            <Link href="/become-a-tutor" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Become a Tutor</Link>
            <Link href="/subjects/maths" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Maths Tutors</Link>
            <Link href="/subjects/english" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">English Tutors</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
