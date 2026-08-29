import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { TutorShowcase } from '@/components/ui/tutor-showcase';
import { tutors } from '@/data/tutors';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { TrustStats } from '@/components/ui/trust-stats';
import { Link } from 'wouter';
import { Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

export function SubjectGcseMaths() {
  const mathsTutors = tutors.filter(t => t.tags.includes("GCSE Maths") || t.tags.includes("Maths"));

  const faqs = [
    {
      q: "What is the difference between Foundation and Higher tier GCSE maths?",
      a: "Foundation tier covers grades 1 to 5, while Higher tier covers grades 4 to 9. A student taking Foundation cannot achieve higher than a grade 5, even with a perfect score. Schools typically decide which tier a student will sit during Year 10 or early Year 11 based on mock exam performance. A tutor can help strengthen skills if your child is aiming to move from Foundation to Higher tier."
    },
    {
      q: "Which exam boards do your tutors cover?",
      a: "GCSE Maths specifications differ between AQA, Edexcel (Pearson), OCR, and other exam boards. Check each profile and ask the tutor to confirm experience with your child's exact specification before booking."
    },
    {
      q: "How much does a GCSE maths tutor cost?",
      a: "Rates vary by tutor and are shown on current profiles. Compare the listed rate, relevant experience, and lesson focus together rather than choosing on price alone."
    },
    {
      q: "When is the best time to start GCSE maths tutoring?",
      a: "Starting in Year 10 allows time to identify and address foundational gaps before the pressure of Year 11 mock exams. However, targeted tutoring in Year 11 can still make a significant difference, particularly for exam technique and past paper practice."
    },
    {
      q: "Can I review the tutor's qualifications?",
      a: "Profiles may include educational background, tutoring experience, and areas of focus. Review the information shown and ask the tutor for any details that are important to your family."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private GCSE Maths Tutoring — Higher & Foundation Tiers",
    "provider": {
      "@type": "Organization",
      "name": "KlaraLearn"
    },
    "description": "Compare private GCSE maths tutor profiles for Higher and Foundation tier support."
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://klaralearn.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Subjects",
        "item": "https://klaralearn.com/subjects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "GCSE Maths",
        "item": "https://klaralearn.com/subjects/gcse-maths"
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="Private GCSE Maths Tutors UK | Higher & Foundation | KlaraLearn"
        description="Compare private GCSE maths tutor profiles for Higher and Foundation tiers, then check current rates, experience and availability."
        path="/subjects/gcse-maths"
        schema={[schema, faqSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section className="bg-slate-50 pt-20 pb-16 border-b">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-slate-900">Subjects</span>
            <span>/</span>
            <span className="text-slate-900">GCSE Maths</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
            Private GCSE Maths Tutors — Higher &amp; Foundation Tiers
          </h1>

          {/* Quick Answer */}
          <div className="border-l-4 border-[#00A896] bg-[#00A896]/8 p-6 rounded-r-xl mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-[#00A896] mb-2">Quick Answer</p>
            <p className="text-slate-800 leading-relaxed">
              KlaraLearn helps you compare online GCSE maths tutor profiles for Higher and Foundation tier preparation. Check each tutor’s current rate, availability and stated exam-board experience before booking.
            </p>
          </div>

          <div className="prose prose-lg text-slate-600 mb-8 max-w-none">
            <p>
              GCSE maths is a crucial gateway qualification, but classroom learning doesn't always suit every student's pace. Whether your child is aiming to secure a strong grade 4 or 5 in the Foundation tier, or pushing for a grade 8 or 9 in the Higher tier, reviewing our available tutor profiles can help you find the right support.
            </p>
          </div>

          <Button asChild size="lg" className="bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white rounded-full px-8">
            <Link href="/find-a-tutor">Find a GCSE Maths Tutor</Link>
          </Button>
        </div>
      </section>

      <TrustStats />

      {/* Topics Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Focus Areas for GCSE Maths</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Tutors can provide targeted help on the specific topics where your child needs the most support.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Algebra & Equations",
                desc: "From basic expanding and factorising to complex simultaneous equations and quadratic formulas.",
                color: "border-[#00A896]"
              },
              {
                title: "Geometry & Measures",
                desc: "Understanding theorems, trigonometry, area, volume, and working with complex shapes.",
                color: "border-[#E05C2A]"
              },
              {
                title: "Statistics & Probability",
                desc: "Interpreting data, calculating averages, and understanding probability trees and distributions.",
                color: "border-[#1B3D5C]"
              },
              {
                title: "Ratio & Proportion",
                desc: "Mastering fractions, percentages, and complex ratio problems essential for the new curriculum.",
                color: "border-purple-500"
              },
              {
                title: "Exam Technique",
                desc: "How to break down word-heavy problem-solving questions and secure method marks.",
                color: "border-amber-500"
              },
              {
                title: "Past Paper Practice",
                desc: "Working through real AQA, Edexcel, or OCR papers under timed conditions.",
                color: "border-emerald-500"
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
                <Calculator className={`w-8 h-8 mb-4 text-slate-400`} />
                <h3 className="text-xl font-bold text-secondary mt-3 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutors Grid */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Review Available GCSE Maths Tutors</h2>
            <p className="text-slate-600">Browse profile information for available online tutors.</p>
          </div>

          <div className="mb-12">
            <TutorShowcase
              fallbackTutors={mathsTutors}
              filter={(tutor) => tutor.tags.includes('GCSE Maths') || tutor.tags.includes('Maths')}
              limit={6}
              emptyMessage="Our next GCSE maths tutor profiles are being added. Browse all tutors to find the right match."
            />
          </div>

          <div className="text-center">
            <Button asChild variant="outline" className="rounded-full font-semibold px-8 border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/find-a-tutor">View All Tutors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">GCSE Maths Tutoring: Common Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-slate-800">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">{faq.a}</AccordionContent>
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
            <Link href="/find-a-tutor" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Find a Tutor</Link>
            <Link href="/subjects/maths" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">All Maths Tutors</Link>
            <Link href="/subjects/english" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">GCSE English</Link>
            <Link href="/subjects/science" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">GCSE Science</Link>
            <Link href="/location/online" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Online Tutoring</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
