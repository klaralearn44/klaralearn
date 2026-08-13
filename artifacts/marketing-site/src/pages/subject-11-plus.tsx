import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { TutorCard } from '@/components/ui/tutor-card';
import { tutors } from '@/data/tutors';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { TrustStats } from '@/components/ui/trust-stats';
import { Link } from 'wouter';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Subject11Plus() {
  const elevenPlusTutors = tutors.filter(t => t.tags.includes("11 Plus"));

  const faqs = [
    {
      q: "How much does 11 plus tuition cost?",
      a: "The UK market average for a specialist 11 plus tutor is between £40 and £80 per hour. At KlaraLearn, our global marketplace model means you can access highly qualified, vetted 11 plus tutors starting from just £15 per hour — a fraction of what most local agencies charge."
    },
    {
      q: "When should I start 11 plus tutoring?",
      a: "Most parents begin 11 plus tutoring at the start of Year 5, giving their child a full year to prepare before the exams in September of Year 6. However, some prefer to start gently in Year 4 to build foundational skills in verbal and non-verbal reasoning without time pressure."
    },
    {
      q: "Is online 11 plus tuition as effective as in-person?",
      a: "Yes. The 11 plus relies heavily on structured logic, pattern recognition, and past papers — all of which translate perfectly to an online interactive whiteboard. Online 11 plus tuition also gives you access to a much wider pool of specialists rather than being limited to local tutors."
    },
    {
      q: "How many hours a week does my child need for 11 plus tutoring?",
      a: "Typically, one to two hours a week with an 11 plus tutor is sufficient, combined with independent practice and homework set by the tutor. Consistency over 12–18 months is more important than intense cramming. Daily 15-minute practice between sessions compounds significantly."
    },
    {
      q: "What does the 11 plus exam cover?",
      a: "While it varies slightly by grammar school and region (GL Assessment vs CEM), the 11 plus exam generally covers four areas: Verbal Reasoning, Non-Verbal Reasoning, Maths, and English. GL Assessment — used in Kent, Essex, and Hertfordshire — tests these in separate papers. CEM integrates subjects."
    },
    {
      q: "Are KlaraLearn 11 plus tutors qualified?",
      a: "Absolutely. Our 11 plus tutors undergo a rigorous vetting process, including identity verification, enhanced DBS checks, and a trial lesson assessment. Many of our 11 plus specialists hold degrees from top universities and have years of experience preparing students specifically for UK grammar school admissions."
    },
    {
      q: "How can I get my child to pass the 11 plus?",
      a: "The most effective strategy is: start early (Year 4 or 5), build verbal reasoning and non-verbal reasoning skills systematically, use timed practice papers, identify and target specific weak question types, and work with a specialist 11 plus tutor experienced in the exact format your target school uses. Sutton Trust research shows 63% of grammar school pupils received private tutoring."
    },
    {
      q: "What is the 11 plus pass mark?",
      a: "There is no single national pass mark. Each grammar school sets its own minimum qualifying score (MQS). For GL Assessment, standardised scores have a mean of 100 and SD of 15. A score of 121 or above is typically needed for competitive grammar schools; super-selective schools like QE Boys Barnet require 125+."
    },
    {
      q: "How much does 11 plus tutoring cost at KlaraLearn?",
      a: "KlaraLearn's 11 plus tutors start from £15 per hour. Compared to local specialist tutor rates of £40–£80/hr and London agency rates of £55–£90/hr, this represents a saving of up to 80%. Your first lesson is free, with no commitment until you're satisfied."
    },
    {
      q: "Can my child have 11 plus tuition even if we're not near a grammar school area?",
      a: "Yes — KlaraLearn tutors work entirely online, so geography is irrelevant. Children in rural areas, Scotland, Wales, or anywhere in the UK can access expert 11 plus tuition via our secure online classroom. Many families in non-selective areas move to grammar school areas and want to prepare in advance."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "11 Plus & Grammar School Tutoring",
    "provider": {
      "@type": "Organization",
      "name": "KlaraLearn"
    },
    "description": "Affordable 11 plus and grammar school private tutors. Online 11 plus tuition for verbal reasoning, non-verbal reasoning, maths and English. Expert 11 plus tutors from £15/hr.",
    "offers": {
      "@type": "Offer",
      "price": "15.00",
      "priceCurrency": "GBP"
    }
  };

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

  return (
    <Layout>
      <SEOHead
        title="11 Plus & Grammar School Tutors — Affordable UK-Wide & Online | KlaraLearn"
        description="Find expert 11 Plus tutors for grammar school admissions. Master the 11 Plus exam with our affordable online tutors from £15/hr. Book a free trial today."
        path="/subjects/11-plus"
        schema={[schema, faqSchema]}
      />

      <section className="bg-slate-50 pt-20 pb-16 border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-slate-900">11 Plus</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
            11 Plus &amp; Grammar School Tutors — Affordable UK-Wide &amp; Online
          </h1>

          <div className="prose prose-lg text-slate-600 mb-8 max-w-none">
            <p>
              The 11 plus is a highly competitive selective entrance exam that determines admission to grammar schools across England. For many parents, it represents a crucial stepping stone in their child's educational journey. However, the preparation can be daunting, and the cost of local specialist 11 plus tutors is often prohibitive — particularly in London and Kent, where agencies charge £55–90/hr.
            </p>
            <p>
              At KlaraLearn, we believe every child deserves a fair chance at grammar school entry. Our platform connects you with exceptional, vetted 11 plus tutors who specialise in verbal reasoning, non-verbal reasoning, maths, and English. By leveraging a global pool of talent, we provide professional-quality grammar school entrance exam preparation at significantly lower prices than the UK market average.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white rounded-full px-8">
              <a href="https://app.klaralearn.com" target="_blank" rel="noopener noreferrer">Find an 11 Plus Tutor</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-secondary text-secondary hover:bg-secondary hover:text-white">
              <Link href="/blog/what-is-the-11-plus">Learn About the 11 Plus</Link>
            </Button>
          </div>
        </div>
      </section>

      <TrustStats />

      {/* Pricing Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Quality 11 Plus Tuition, Fairly Priced</h2>
            <p className="text-lg text-slate-600">See how we compare against traditional local tutors and agencies.</p>
          </div>

          <div className="bg-slate-50 rounded-2xl border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold mb-6">Traditional UK Market Average</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> £40–£80 per hour (local specialist)</li>
                  <li className="flex items-center gap-3 text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> £55–£90 per hour (London agency)</li>
                  <li className="flex items-center gap-3 text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> Limited to local availability</li>
                  <li className="flex items-center gap-3 text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> Agency placement fees</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 border shadow-sm border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Better Value</div>
                <h3 className="text-xl font-bold mb-6 text-primary">KlaraLearn 11 Plus Tutors</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-medium text-secondary"><CheckCircle2 className="w-5 h-5 text-primary" /> From £15–£35 per hour</li>
                  <li className="flex items-center gap-3 font-medium text-secondary"><CheckCircle2 className="w-5 h-5 text-primary" /> GL Assessment and CEM format specialists</li>
                  <li className="flex items-center gap-3 font-medium text-secondary"><CheckCircle2 className="w-5 h-5 text-primary" /> Access to global experts</li>
                  <li className="flex items-center gap-3 font-medium text-secondary"><CheckCircle2 className="w-5 h-5 text-primary" /> Zero hidden fees</li>
                  <li className="flex items-center gap-3 font-medium text-secondary"><CheckCircle2 className="w-5 h-5 text-primary" /> Free trial lesson</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutors Grid */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Our Top 11 Plus Specialists</h2>
            <p className="text-slate-600">Browse a selection of our highly rated 11 plus tutors ready to help your child succeed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {elevenPlusTutors.map((tutor, index) => (
              <TutorCard key={tutor.id} tutor={tutor} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" className="rounded-full font-semibold px-8 border-primary text-primary hover:bg-primary hover:text-white">
              <a href="https://app.klaralearn.com" target="_blank" rel="noopener noreferrer">View All 11 Plus Tutors</a>
            </Button>
          </div>
        </div>
      </section>

      {/* For Parents Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">For Parents: How It Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Everything you need to know about getting started with 11 plus tuition at KlaraLearn.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Tell us what you need", desc: "Share your child's year group, target schools, and which exam format (GL or CEM) — we'll match you with appropriate 11 plus tutors." },
              { step: "2", title: "Meet your matched tutor", desc: "Browse matched tutor profiles and book a free trial lesson. Assess their teaching style and how they connect with your child before committing." },
              { step: "3", title: "Start preparing", desc: "Regular sessions from £15/hr, tailored to your child's specific weak areas. Tutors set homework between sessions and report progress to parents." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#1B3D5C] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">{item.step}</div>
                <h3 className="font-bold text-secondary text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/parents" className="text-primary font-medium hover:underline">Learn more about how KlaraLearn works for parents →</Link>
          </div>
        </div>
      </section>

      {/* Regional Section */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">11 Plus Tutors by Region</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our online 11 plus tutors serve families across England. Different regions use different exam formats — our tutors are matched to your specific area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                region: "Kent",
                detail: "36 grammar schools · GL Assessment (Kent Test) · 4 papers",
                link: "/location/kent",
                label: "Kent Tutors"
              },
              {
                region: "London",
                detail: "Super-selective grammars in Barnet, Kingston, Sutton · GL Assessment",
                link: "/location/london",
                label: "London Tutors"
              },
              {
                region: "Birmingham",
                detail: "7 grammar schools · CEM format · Integrated papers",
                link: "/subjects/11-plus",
                label: "Birmingham Prep"
              },
              {
                region: "Buckinghamshire",
                detail: "13 grammar schools · Fully selective county · GL/CEM mix",
                link: "/subjects/11-plus",
                label: "Bucks Prep"
              }
            ].map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-5 border shadow-sm"
              >
                <h3 className="font-bold text-secondary text-lg mb-2">{area.region}</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">{area.detail}</p>
                <Link href={area.link} className="text-primary text-sm font-medium hover:underline">{area.label} →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">11 Plus Tutoring: Common Questions</h2>
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

      {/* Related Subjects */}
      <section className="py-16 bg-slate-50 border-t">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-secondary mb-8">Related Pages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/subjects/gcse-maths" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">GCSE Maths</Link>
            <Link href="/subjects/english" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">English</Link>
            <Link href="/subjects/science" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Science</Link>
            <Link href="/blog/what-is-the-11-plus" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">What Is the 11 Plus?</Link>
            <Link href="/blog/how-to-prepare-for-11-plus" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">How to Prepare</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
