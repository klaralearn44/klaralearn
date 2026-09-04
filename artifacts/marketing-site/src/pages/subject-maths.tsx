import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { TutorShowcase } from '@/components/ui/tutor-showcase';
import { tutors } from '@/data/tutors';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { TrustStats } from '@/components/ui/trust-stats';
import { Link } from 'wouter';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function SubjectMaths() {
  const mathsTutors = tutors.filter(t => t.tags.includes("GCSE Maths") || t.tags.includes("SATs"));

  const faqs = [
    {
      q: "What level of maths tutor does my child need?",
      a: "It depends on their age and current school year. For children in Years 3–6, a KS2 / primary maths tutor is ideal. For 11 plus preparation (Year 5–6), choose a specialist 11 plus maths tutor familiar with the specific exam format. For secondary pupils (Years 7–11), a GCSE maths tutor is appropriate. We'll help you match correctly."
    },
    {
      q: "How much does a maths tutor cost?",
      a: "Private maths tutors in the UK typically charge £25–£55/hr for KS2, and £35–£60/hr for GCSE. London agency rates reach £50–£90/hr. KlaraLearn lets families compare available maths tutor profiles and current rates."
    },
    {
      q: "Can tutoring improve my child's maths grade?",
      a: "Yes. The Education Endowment Foundation (EEF) research shows one-to-one tutoring adds an average of 5 months of additional academic progress. For maths specifically, the gains are often larger because the subject has clear building blocks — a tutor can identify and fix gaps in foundational understanding that hold back progress across multiple topics."
    },
    {
      q: "Is online maths tutoring effective?",
      a: "Yes — multiple independent studies, including from UCL's Institute of Education, confirm online tutoring is as effective as in-person for most school subjects, including maths. Interactive whiteboards allow tutors to write equations, draw graphs, and work through problems in real-time alongside students."
    },
    {
      q: "What maths topics does the 11 plus cover?",
      a: "The 11 plus maths paper covers all KS2 topics plus: fractions, decimals, percentages, ratio and proportion, basic algebra (solving for x), speed/distance/time, angles, area and perimeter, volume, data interpretation, and mental arithmetic. Some schools test to early Year 7 level. Mental arithmetic speed is particularly critical."
    },
    {
      q: "How do I choose the right maths tutor?",
      a: "Review available tutor profiles for experience with your child's specific exam format (KS2 SATs, 11 Plus GL/CEM or GCSE), listed qualifications and hourly rate. Ask questions before booking to decide whether a tutor's approach suits your child."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private Maths Tutoring — KS2, 11 Plus & GCSE",
    "provider": {
      "@type": "Organization",
      "name": "KlaraLearn"
    },
    "description": "Affordable private maths tutors for KS2, 11 plus, and GCSE. Compare expert online tutor profiles and current rates."
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
        title="Private Maths Tutors UK — KS2, GCSE & 11 Plus | KlaraLearn"
        description="Find affordable private maths tutors for KS2, 11 plus, and GCSE. Compare experienced online tutor profiles and current rates. Free trial lesson."
        path="/subjects/maths"
        schema={[schema, faqSchema]}
      />

      {/* Hero */}
      <section className="bg-slate-50 pt-20 pb-16 border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/subjects/11-plus" className="hover:text-primary">Subjects</Link>
            <span>/</span>
            <span className="text-slate-900">Maths</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
            Private Maths Tutors — KS2, 11 Plus &amp; GCSE
          </h1>

          {/* Quick Answer */}
          <div className="border-l-4 border-[#00A896] bg-[#00A896]/8 p-6 rounded-r-xl mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-[#00A896] mb-2">Quick Answer</p>
            <p className="text-slate-800 leading-relaxed">
              KlaraLearn connects families with maths tutors for KS2, 11 plus, and GCSE. Compare available profiles, UK curriculum experience and current rates with average UK tuition rates of £35–£60/hr.
            </p>
          </div>

          <div className="prose prose-lg text-slate-600 mb-8 max-w-none">
            <p>
              Maths is the subject where a great tutor makes the most difference. Unlike English — where improvement comes partly through broad exposure over time — maths progress tends to be blocked by specific foundational gaps. When a child doesn't understand fractions, everything that builds on fractions (percentages, ratio, algebra) becomes harder. A specialist tutor identifies and fixes those gaps directly.
            </p>
          </div>

          <Button asChild size="lg" className="bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white rounded-full px-8">
            <Link href="/find-a-tutor">Find a Maths Tutor</Link>
          </Button>
        </div>
      </section>

      <TrustStats />

      {/* Level Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Maths Tutoring for Every Stage</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From building number confidence in primary school to tackling GCSE Higher tier — we have specialists at every level.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                level: "KS2 Maths",
                ages: "Ages 7–11 · Years 3–6",
                topics: ["Times tables & mental arithmetic", "Fractions, decimals & percentages", "SATs preparation", "Problem solving & reasoning"],
                color: "border-[#00A896]",
                badge: "Primary"
              },
              {
                level: "11 Plus Maths",
                ages: "Ages 9–11 · Years 5–6",
                topics: ["GL Assessment & CEM formats", "Mental arithmetic speed", "Algebra & ratio", "KS2+ problem solving"],
                color: "border-[#E05C2A]",
                badge: "Grammar Prep"
              },
              {
                level: "GCSE Maths",
                ages: "Ages 11–16 · Years 7–11",
                topics: ["Foundation & Higher tiers", "Algebra, geometry, statistics", "Exam technique & past papers", "AQA, Edexcel, OCR"],
                color: "border-[#1B3D5C]",
                badge: "GCSE"
              },
              {
                level: "A-Level Maths",
                ages: "Ages 16–18 · Years 12–13",
                topics: ["Pure, Mechanics & Statistics", "Calculus & algebra", "Further Maths available", "University preparation"],
                color: "border-purple-500",
                badge: "Coming Soon"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`border-t-4 ${card.color} bg-white border rounded-xl p-6 shadow-sm`}
              >
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded-full">{card.badge}</span>
                <h3 className="text-xl font-bold text-secondary mt-3 mb-1">{card.level}</h3>
                <p className="text-sm text-slate-500 mb-4">{card.ages}</p>
                <ul className="space-y-1">
                  {card.topics.map((topic, j) => (
                    <li key={j} className="text-sm text-slate-600 flex gap-2 items-start">
                      <span className="text-[#00A896] mt-0.5">✓</span>{topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Quality Maths Tuition, Fairly Priced</h2>
            <p className="text-lg text-slate-600">Expert maths tutors at a fraction of the UK market rate.</p>
          </div>

          <div className="bg-white rounded-2xl border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold mb-6">UK Market Average</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> KS2 maths: £25–£40/hr</li>
                  <li className="flex items-center gap-3 text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> 11 plus maths: £35–£65/hr</li>
                  <li className="flex items-center gap-3 text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> GCSE maths: £35–£60/hr</li>
                  <li className="flex items-center gap-3 text-slate-600"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> London agencies: £50–£90/hr</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-8 border shadow-sm border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#E05C2A] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Better Value</div>
                <h3 className="text-xl font-bold mb-6 text-primary">KlaraLearn Tutors</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-medium text-secondary"><CheckCircle2 className="w-5 h-5 text-primary" /> Current rates shown on each profile (KS2 & 11 plus)</li>
                  <li className="flex items-center gap-3 font-medium text-secondary"><CheckCircle2 className="w-5 h-5 text-primary" /> Current rates shown on each profile (GCSE maths)</li>
                  <li className="flex items-center gap-3 font-medium text-secondary"><CheckCircle2 className="w-5 h-5 text-primary" /> Global expert pool</li>
                  <li className="flex items-center gap-3 font-medium text-secondary"><CheckCircle2 className="w-5 h-5 text-primary" /> Free trial lesson</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Maths Tutoring Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Why Maths Tutoring Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Identifies the real problem",
                desc: "Many children who struggle with GCSE algebra actually have a gap in Year 7 fraction work. A tutor finds the root cause, not just the symptom."
              },
              {
                title: "Personalised pace",
                desc: "Classroom teachers have 30 students. A tutor can spend 15 minutes on the exact fraction type your child finds confusing, then move on only when it is truly understood."
              },
              {
                title: "Confidence builds momentum",
                desc: "Maths confidence is self-reinforcing — once a child realises they can solve problems they previously couldn't, their approach to the whole subject changes."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 rounded-xl p-6 border"
              >
                <h3 className="text-lg font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutors Grid */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Our Top Maths Tutors</h2>
            <p className="text-slate-600">Browse available maths tutor profiles for online sessions and review the details before booking.</p>
          </div>

          <div className="mb-12">
            <TutorShowcase
              fallbackTutors={mathsTutors}
              filter={(tutor) => tutor.tags.includes('Maths') || tutor.tags.includes('GCSE Maths')}
              limit={6}
              emptyMessage="Our next maths tutor profiles are being added. Browse all tutors to find the right match."
            />
          </div>

          <div className="text-center">
            <Button asChild variant="outline" className="rounded-full font-semibold px-8 border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/find-a-tutor">View All Maths Tutors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">Maths Tutoring: Common Questions</h2>
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
            <Link href="/find-a-tutor" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Find a Maths Tutor</Link>
            <Link href="/parents/tools" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Parent Tools</Link>
            <Link href="/subjects/11-plus" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">11 Plus Tutors</Link>
            <Link href="/subjects/gcse-maths" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">GCSE Maths</Link>
            <Link href="/location/online" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Online Tutoring</Link>
            <Link href="/blog/how-to-prepare-for-11-plus" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">11 Plus Preparation Guide</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
