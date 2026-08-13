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
      q: "How much does 11 Plus tutoring cost?",
      a: "The UK market average for a specialist 11 Plus tutor is between £40 and £80 per hour. At KlaraLearn, our global marketplace model means you can access highly qualified, vetted 11 Plus tutors starting from just £15 to £35 per hour."
    },
    {
      q: "When should I start 11 Plus tutoring?",
      a: "Most parents begin tutoring at the start of Year 5, giving their child a full year to prepare before the exams in September of Year 6. However, some prefer to start gently in Year 4 to build foundational skills in verbal and non-verbal reasoning."
    },
    {
      q: "Is online tutoring as effective for 11 Plus?",
      a: "Yes. The 11 Plus relies heavily on structured logic, pattern recognition, and past papers—all of which translate perfectly to an online interactive whiteboard. It also gives you access to a much wider pool of specialists rather than being limited to local tutors."
    },
    {
      q: "How many hours a week does my child need?",
      a: "Typically, one to two hours a week is sufficient for 11 Plus preparation, combined with independent practice and homework set by the tutor. Consistency is more important than cramming."
    },
    {
      q: "What does the 11 Plus exam cover?",
      a: "While it varies slightly by grammar school and region (GL Assessment vs CEM), the exam generally covers four areas: Verbal Reasoning, Non-Verbal Reasoning, Maths, and English."
    },
    {
      q: "Are KlaraLearn tutors qualified?",
      a: "Absolutely. Our tutors undergo a rigorous vetting process, including identity verification, background checks, and a trial lesson assessment. Many of our 11 Plus specialists hold degrees from top universities and have years of experience preparing students specifically for UK grammar schools."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "11 Plus Private Tutoring",
    "provider": {
      "@type": "Organization",
      "name": "KlaraLearn"
    },
    "description": "Affordable 11 Plus and Grammar School private tutors. Online tutoring for verbal reasoning, non-verbal reasoning, maths and English.",
    "offers": {
      "@type": "Offer",
      "price": "15.00",
      "priceCurrency": "GBP"
    }
  };

  return (
    <Layout>
      <SEOHead 
        title="11 Plus & Grammar School Tutors — Affordable UK-Wide & Online | KlaraLearn"
        description="Find expert 11 Plus tutors for grammar school admissions. Master the 11 Plus exam with our affordable online tutors from £15/hr. Book a free trial today."
        path="/subjects/11-plus"
        schema={schema}
      />

      <section className="bg-slate-50 pt-20 pb-16 border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-slate-900">11 Plus</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
            11 Plus & Grammar School Tutors — Affordable UK-Wide & Online
          </h1>
          
          <div className="prose prose-lg text-slate-600 mb-8 max-w-none">
            <p>
              The 11 Plus is a highly competitive selective entrance exam that determines admission to grammar schools across the UK. For many parents, it represents a crucial stepping stone in their child's educational journey. However, the preparation can be daunting, and the cost of local specialist tutors is often prohibitive.
            </p>
            <p>
              At KlaraLearn, we believe every child deserves a fair chance at grammar school entry. Our platform connects you with exceptional, vetted 11 Plus tutors who specialize in verbal reasoning, non-verbal reasoning, maths, and English. By leveraging a global pool of talent, we provide professional-quality grammar school entrance exam preparation at significantly lower prices than the UK market average.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white rounded-full px-8">
              <a href="https://app.klaralearn.com">Find an 11 Plus Tutor</a>
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
                  <li className="flex items-center gap-3 text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> £40 - £80 per hour</li>
                  <li className="flex items-center gap-3 text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> Limited to local availability</li>
                  <li className="flex items-center gap-3 text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> Agency placement fees</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 border shadow-sm border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Better Value</div>
                <h3 className="text-xl font-bold mb-6 text-primary">KlaraLearn Tutors</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-medium text-secondary"><CheckCircle2 className="w-5 h-5 text-primary" /> From £15 - £35 per hour</li>
                  <li className="flex items-center gap-3 font-medium text-secondary"><CheckCircle2 className="w-5 h-5 text-primary" /> Access to global experts</li>
                  <li className="flex items-center gap-3 font-medium text-secondary"><CheckCircle2 className="w-5 h-5 text-primary" /> Zero hidden fees</li>
                  <li className="flex items-center gap-3 font-medium text-secondary"><CheckCircle2 className="w-5 h-5 text-primary" /> Free 15-minute trial</li>
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
            <p className="text-slate-600">Browse a selection of our highly rated tutors ready to help your child succeed.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {elevenPlusTutors.map((tutor, index) => (
              <TutorCard key={tutor.id} tutor={tutor} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" className="rounded-full font-semibold px-8 border-primary text-primary hover:bg-primary hover:text-white">
              <a href="https://app.klaralearn.com">View All 11 Plus Tutors</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">Common 11 Plus Questions</h2>
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
          <h3 className="text-xl font-bold text-secondary mb-8">Related Subjects</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/subjects/gcse-maths" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">GCSE Maths</Link>
            <Link href="/subjects/english" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">English</Link>
            <Link href="/subjects/science" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Science</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
