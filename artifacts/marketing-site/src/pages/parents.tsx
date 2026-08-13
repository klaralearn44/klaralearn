import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'wouter';
import { CheckCircle2, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function ParentsPage() {
  const faqs = [
    {
      q: "How does KlaraLearn match tutors to my child?",
      a: "When you tell us what your child needs — subject, level, exam format (e.g. GL Assessment for Kent), and preferred schedule — our platform presents you with matched tutors who meet those criteria. You can review each tutor's profile, subject specialisms, and reviews before selecting. You then book a free trial lesson with your preferred tutor."
    },
    {
      q: "Are KlaraLearn tutors DBS checked?",
      a: "Yes. All tutors on the KlaraLearn platform go through identity verification and enhanced DBS (Disclosure and Barring Service) check before they can teach. For tutors based outside the UK, we carry out equivalent background checks through accredited providers. All vetting documentation is held on file."
    },
    {
      q: "How much does KlaraLearn cost?",
      a: "Tutoring starts from £15 per hour. There is no subscription or membership fee — you pay per session. Your first trial lesson is free, so you can assess the tutor before making any financial commitment."
    },
    {
      q: "What if my child doesn't get on with their tutor?",
      a: "Tutor-student fit is crucial. If, after the trial lesson or early sessions, your child is not connecting well with their tutor, simply contact us and we will match you with another tutor at no charge. We want long-term relationships that produce results — not one-off sessions."
    },
    {
      q: "Is online tutoring safe for children?",
      a: "Yes. All KlaraLearn sessions take place on our secure, moderated platform. Sessions are conducted via video with a shared interactive whiteboard. Parents can request session recordings for review. We require parental consent for all child accounts and sessions are never one-to-one without our platform's oversight layer."
    },
    {
      q: "How quickly can we start?",
      a: "In most cases within 48 hours. Once you've completed registration and told us your child's needs, we present matched tutors immediately. Most tutors have availability within a few days. Free trial lessons can typically be booked within 24–48 hours of registration."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const steps = [
    {
      num: "1",
      title: "Tell us what your child needs",
      desc: "Share the subject, exam type (11 plus GL, CEM, GCSE, SATs), your child's year group, and any specific goals. Takes 2 minutes."
    },
    {
      num: "2",
      title: "We match you with 3 qualified tutors",
      desc: "Our matching system presents tutors who meet your exact requirements — right subject specialisms, right exam format, right availability."
    },
    {
      num: "3",
      title: "Book a free trial lesson",
      desc: "Meet your matched tutor in a live 45-minute session. No cost. Assess their teaching style and whether they connect with your child."
    },
    {
      num: "4",
      title: "Book and pay securely, session by session",
      desc: "No subscription. No lock-in. Pay per session from £15/hr. Sessions are held on our secure platform with all safety measures in place."
    }
  ];

  const testimonials = [
    {
      text: "My daughter went from predicted Band 1 to getting a place at our first-choice grammar school. Her KlaraLearn tutor found the exact question types she was losing marks on and targeted those for six months. Genuinely life-changing — and at a price we could actually afford.",
      name: "Rachel M.",
      detail: "Mother of Year 6 pupil, Tonbridge"
    },
    {
      text: "We'd tried a local agency tutor at £65 an hour and didn't see much progress. KlaraLearn matched us with a specialist at £22/hr who was honestly better. My son found out he'd qualified for two grammar schools in October — we were so relieved. The saving on tutoring fees was significant too.",
      name: "David K.",
      detail: "Father of Year 6 pupil, Barnet"
    },
    {
      text: "I was sceptical about online tutoring — my daughter had struggled with screen time and I worried she wouldn't engage. But her tutor is fantastic at keeping her focused and she looks forward to sessions every week. Her maths has improved two levels in four months.",
      name: "Priya S.",
      detail: "Mother of Year 5 pupil, Birmingham"
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="For Parents: How KlaraLearn Works | KlaraLearn"
        description="KlaraLearn helps UK parents find qualified, affordable tutors for 11 plus, GCSE, and SATs. Learn how matching works, what safeguarding measures are in place, and how to get started."
        path="/parents"
        schema={faqSchema}
      />

      {/* Hero */}
      <section className="bg-slate-50 pt-20 pb-16 border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
            For Parents: Everything You Need to Know About KlaraLearn
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl">
            We exist for one reason: to make expert tutoring accessible to every UK family, regardless of budget. Here's how we work, what we do to keep children safe, and how to get started.
          </p>
          <Button asChild size="lg" className="bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white rounded-full px-8">
            <a href="https://app.klaralearn.com" target="_blank" rel="noopener noreferrer">Start with a Free Trial Lesson</a>
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">How Matching Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From registration to your child's first lesson in 4 straightforward steps.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-slate-50 rounded-2xl p-6 border h-full">
                  <div className="w-10 h-10 rounded-full bg-[#1B3D5C] text-white font-bold flex items-center justify-center text-lg mb-4">{step.num}</div>
                  <h3 className="font-bold text-secondary text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-[#00A896] hover:bg-[#00A896]/90 text-white rounded-full px-8">
              <a href="https://app.klaralearn.com" target="_blank" rel="noopener noreferrer">Get Started — Free Trial</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Safeguarding */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12 text-[#00A896]" />
            </div>
            <h2 className="text-3xl font-bold text-secondary mb-4">Safeguarding: How We Protect Your Child</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Online safeguarding is something we take seriously. Here are the specific measures we have in place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "DBS Checks for All UK Tutors",
                desc: "Every UK-based tutor completes an enhanced DBS (Disclosure and Barring Service) check before their first session. Certificates are reviewed and stored by our compliance team."
              },
              {
                title: "Equivalent International Background Checks",
                desc: "Tutors based outside the UK complete equivalent background checks through accredited providers, verified against their national criminal record systems."
              },
              {
                title: "Identity Verification",
                desc: "All tutors submit photo ID (passport or driving licence) and proof of qualifications. These are manually reviewed by our team before onboarding."
              },
              {
                title: "Parental Consent Required",
                desc: "All child accounts require verified parental consent. Parents set up and manage their child's account and have full visibility of session history and tutor communication."
              },
              {
                title: "Session Recording Available",
                desc: "Parents can request that sessions are recorded for review. This is an opt-in feature that provides an additional layer of oversight."
              },
              {
                title: "Platform Moderation",
                desc: "All communication between tutors and pupils happens within the KlaraLearn platform. Direct communication outside the platform is against our terms of service."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 border flex gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-[#00A896] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-secondary text-base mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Transparent, Affordable Pricing</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">No subscriptions. No hidden fees. Pay per session from £15/hr.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { feature: "From £15/hr", desc: "Specialist tutors including 11 plus, GCSE maths, and SATs specialists." },
              { feature: "Free trial lesson", desc: "Your first lesson is completely free — assess the tutor before you commit." },
              { feature: "Pay per session", desc: "No monthly subscription. No lock-in contracts. Book sessions individually." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 border text-center">
                <p className="text-2xl font-bold text-[#00A896] mb-2">{item.feature}</p>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">What Parents Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-secondary text-sm">{testimonial.name}</p>
                  <p className="text-slate-500 text-xs">{testimonial.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">Parents' Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B3D5C]">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find the Right Tutor?</h2>
          <p className="text-white/80 mb-8">Free trial lesson. Expert tutors from £15/hr. No commitment until you're happy.</p>
          <Button asChild size="lg" className="bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white rounded-full px-10">
            <a href="https://app.klaralearn.com" target="_blank" rel="noopener noreferrer">Find a Tutor Today</a>
          </Button>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-secondary mb-8">Explore More</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/subjects/11-plus" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">11 Plus Tutors</Link>
            <Link href="/how-it-works" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">How It Works</Link>
            <Link href="/blog/how-much-does-tutoring-cost" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Tutoring Costs</Link>
            <Link href="/location/online" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Online Tutoring</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
