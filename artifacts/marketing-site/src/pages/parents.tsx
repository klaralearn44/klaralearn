import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'wouter';
import { CheckCircle2, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export function ParentsPage() {
  const faqs = [
    {
      q: "How does KlaraLearn match tutors to my child?",
      a: "Use the available tutor profiles to compare subject, level, exam format, schedule, experience, qualifications where listed and rate. Parents should review these details and contact a tutor to discuss their child's needs before booking."
    },
    {
      q: "What should I check before booking a tutor?",
      a: "Review the available tutor's profile details, including subjects, experience, qualifications where listed, rate and availability. Ask questions about the support your child needs before making a booking."
    },
    {
      q: "How much does KlaraLearn cost?",
      a: "Tutoring rates vary by tutor. Check the current profile and booking details for the applicable hourly rate before arranging a session."
    },
    {
      q: "What if my child doesn't get on with their tutor?",
      a: "You can review other available tutor profiles and choose a tutor whose subjects, experience, schedule and rate better suit your child."
    },
    {
      q: "How can parents choose a suitable online tutor?",
      a: "Parents should review a tutor's available profile details, discuss expectations before booking and remain involved in decisions about their child's tuition."
    },
    {
      q: "How quickly can we start?",
      a: "Start by browsing currently available tutor profiles. Availability varies, so check each profile and discuss suitable times directly before booking."
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
      title: "Review available tutor profiles",
      desc: "Compare tutor profiles by subject, exam format, experience, qualifications where listed, availability and rate."
    },
    {
      num: "3",
      title: "Arrange an introductory session",
      desc: "Talk with a tutor about your child's goals and decide whether their approach is a suitable fit."
    },
    {
      num: "4",
      title: "Book and pay securely, session by session",
      desc: "Check the tutor's current rate and booking details before you arrange each session."
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="For Parents: How KlaraLearn Works | KlaraLearn"
        description="KlaraLearn helps UK parents compare available online tutor profiles for 11 Plus, GCSE and SATs support. Learn what to review before booking."
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
            Compare available online tutor profiles for your child's needs, then review the details and arrange tuition when you find a suitable fit.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white rounded-full px-8">
              <a href="https://app.klaralearn.com/version-test?view=signup" target="_blank" rel="noopener noreferrer">Start with a Free Trial Lesson</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-secondary text-secondary hover:bg-secondary hover:text-white">
              <Link href="/find-a-tutor">Browse tutors first</Link>
            </Button>
          </div>
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
              <a href="https://app.klaralearn.com/version-test?view=signup" target="_blank" rel="noopener noreferrer">Get Started — Free Trial</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Choosing a tutor */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Search className="w-12 h-12 text-[#00A896]" />
            </div>
            <h2 className="text-3xl font-bold text-secondary mb-4">What to Review Before Booking</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Review profile information and discuss your child's needs with a tutor before deciding whether to book.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Subjects and school stage",
                desc: "Check that the tutor lists the subject, year group or exam preparation your child needs."
              },
              {
                title: "Relevant experience",
                desc: "Read the experience and qualifications included on the available tutor profile."
              },
              {
                title: "Teaching approach",
                desc: "Ask how the tutor would support your child's goals, confidence and areas for development."
              },
              {
                title: "Schedule and rate",
                desc: "Confirm the tutor's availability and current hourly rate before booking."
              },
              {
                title: "Introductory conversation",
                desc: "Use an introductory conversation to ask questions and decide whether a tutor is a suitable fit."
              },
              {
                title: "Your decision",
                desc: "Compare other available profiles if you would like to consider different subjects, experience or rates."
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
            <p className="text-slate-600 max-w-2xl mx-auto">No subscriptions. No hidden fees. Review each tutor's current rate and pay per session.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { feature: "Profile-led rates", desc: "Compare current rates for specialist tutors including 11 plus, GCSE maths, and SATs." },
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

      {/* Parent toolkit */}
      <section className="py-16 bg-primary/5 border-y">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.16em] uppercase text-primary mb-2">Practical help before you book</p>
            <h2 className="text-3xl font-bold text-secondary mb-3">Use our free parent toolkit</h2>
            <p className="text-slate-600 max-w-2xl">Work through a readiness checklist, compare likely tutoring costs, create a weekly revision plan and prepare questions for a tutor trial.</p>
          </div>
          <Button asChild variant="outline" className="shrink-0 rounded-full border-primary text-primary hover:bg-primary hover:text-white px-7">
            <Link href="/parents/tools">Open Parent Tools</Link>
          </Button>
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
          <p className="text-white/80 mb-8">Available tutor profiles with current rates. Review the details before booking.</p>
          <Button asChild size="lg" className="bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white rounded-full px-10">
            <Link href="/find-a-tutor">Find a Tutor Today</Link>
          </Button>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-secondary mb-8">Explore More</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/subjects/11-plus" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">11 Plus Tutors</Link>
            <Link href="/find-a-tutor" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Find a Tutor</Link>
            <Link href="/parents/tools" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Parent Tools</Link>
            <Link href="/how-it-works" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">How It Works</Link>
            <Link href="/blog/how-much-does-tutoring-cost" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Tutoring Costs</Link>
            <Link href="/location/online" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Online Tutoring</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
