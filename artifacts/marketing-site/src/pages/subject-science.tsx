import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { TutorShowcase } from '@/components/ui/tutor-showcase';
import { tutors } from '@/data/tutors';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { TrustStats } from '@/components/ui/trust-stats';
import { Link } from 'wouter';
import { Beaker } from 'lucide-react';
import { motion } from 'framer-motion';

export function SubjectScience() {
  const scienceTutors = tutors.filter(t => t.tags.includes("Science") || t.tags.includes("Physics") || t.tags.includes("Chemistry") || t.tags.includes("Biology"));

  const faqs = [
    {
      q: "Do I need a separate tutor for Biology, Chemistry, and Physics?",
      a: "For Combined Science, a tutor may cover several disciplines; Triple Science can require more subject-specific support. Check the subjects stated on each profile and confirm the lesson scope before booking."
    },
    {
      q: "What is the difference between Combined and Triple Science at GCSE?",
      a: "Combined Science covers Biology, Chemistry, and Physics, resulting in two GCSE grades. Triple Science (or Separate Sciences) covers the same subjects but in greater depth, resulting in three distinct GCSE grades. Tutors can provide specific support depending on the route your child is taking."
    },
    {
      q: "How does online science tutoring handle practical experiments?",
      a: "While online tutors cannot physically conduct experiments with your child, they can use interactive simulations, videos of core practicals, and diagram tools to ensure the theoretical understanding of experiments—which is what the exams actually test—is solid."
    },
    {
      q: "How can I verify the tutor's background?",
      a: "We invite parents to review profile information for any tutor they are considering. Profiles list their educational history, the subjects they offer, and pricing details."
    },
    {
      q: "How much do science tutors cost?",
      a: "Rates vary by tutor and are shown on current profiles. Compare the listed rate, subject focus, level, and current availability before choosing."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private Science Tutoring — KS3, Combined & Triple Science",
    "provider": {
      "@type": "Organization",
      "name": "KlaraLearn"
    },
    "description": "Compare private science tutor profiles for Biology, Chemistry, Physics, Combined Science and Triple Science."
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
        "name": "Science",
        "item": "https://klaralearn.com/subjects/science"
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="Private Science Tutors UK | Biology, Chemistry, Physics | KlaraLearn"
        description="Compare private science tutor profiles for KS3, GCSE Combined Science and Triple Science, including current rates and availability."
        path="/subjects/science"
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
            <span className="text-slate-900">Science</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
            Private Science Tutors — KS2, KS3 &amp; GCSE Triple Science
          </h1>

          {/* Quick Answer */}
          <div className="border-l-4 border-[#00A896] bg-[#00A896]/8 p-6 rounded-r-xl mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-[#00A896] mb-2">Quick Answer</p>
            <p className="text-slate-800 leading-relaxed">
              KlaraLearn helps you compare online science tutor profiles for Biology, Chemistry, Physics, Combined Science and Triple Science. Check the subjects, levels, rates and availability stated on each current profile.
            </p>
          </div>

          <div className="prose prose-lg text-slate-600 mb-8 max-w-none">
            <p>
              Science subjects introduce a massive amount of new vocabulary, complex conceptual models, and applied maths. It's common for students to grasp one discipline (like Biology) while struggling with another (like Physics). Exploring our available tutor profiles lets you find targeted support for the exact areas where your child needs a boost.
            </p>
          </div>

          <Button asChild size="lg" className="bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white rounded-full px-8">
            <Link href="/find-a-tutor">Find a Science Tutor</Link>
          </Button>
        </div>
      </section>

      <TrustStats />

      {/* Topics Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Science Subject Breakdown</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Different scientific disciplines require different approaches to learning and revision.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Biology",
                desc: "Focusing on complex vocabulary, understanding systems (like the circulatory or nervous system), and explaining biological processes clearly.",
                color: "border-[#00A896]"
              },
              {
                title: "Chemistry",
                desc: "Mastering the periodic table, balancing chemical equations, quantitative chemistry, and understanding atomic structure.",
                color: "border-[#E05C2A]"
              },
              {
                title: "Physics",
                desc: "Applying maths to scientific problems, memorising and manipulating formulas, and understanding energy, forces, and electricity.",
                color: "border-[#1B3D5C]"
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
                <Beaker className={`w-8 h-8 mb-4 text-slate-400`} />
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
            <h2 className="text-3xl font-bold text-secondary mb-4">Review Available Science Tutors</h2>
            <p className="text-slate-600">Browse profile information for available online tutors.</p>
          </div>

          <div className="mb-12">
            <TutorShowcase
              fallbackTutors={scienceTutors}
              filter={(tutor) => tutor.tags.includes('Science') || tutor.tags.includes('Biology') || tutor.tags.includes('Chemistry') || tutor.tags.includes('Physics')}
              limit={6}
              emptyMessage="Our next science tutor profiles are being added. Browse all tutors to find the right match."
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
            <h2 className="text-3xl font-bold text-secondary">Science Tutoring: Common Questions</h2>
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
            <Link href="/subjects/gcse-maths" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">GCSE Maths</Link>
            <Link href="/subjects/english" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">GCSE English</Link>
            <Link href="/location/online" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Online Tutoring</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
