import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { TutorShowcase } from '@/components/ui/tutor-showcase';
import { tutors } from '@/data/tutors';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { TrustStats } from '@/components/ui/trust-stats';
import { Link } from 'wouter';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export function SubjectEnglish() {
  const englishTutors = tutors.filter(t => t.tags.includes("English") || t.tags.includes("GCSE English"));

  const faqs = [
    {
      q: "Do English tutors cover both Language and Literature at GCSE?",
      a: "Some tutors may support both Language and Literature, while others focus on one area. Review the information shown and ask about experience with your child's set texts before booking."
    },
    {
      q: "How can an English tutor help with 11 Plus preparation?",
      a: "For the 11 Plus, English tutoring typically focuses on advanced reading comprehension, spelling, punctuation, grammar (SPAG), and creative or persuasive writing tasks. Time management and structuring answers effectively are also key areas of focus."
    },
    {
      q: "Can I choose an online English tutor?",
      a: "Online English lessons can support document sharing, live essay feedback, and focused discussion. Ask a tutor how they structure online sessions and which platform features they use."
    },
    {
      q: "What should I look for in an English tutor's profile?",
      a: "Review the profile information shown and ask the tutor to confirm familiarity with your child's exam board, age group, set texts, and learning goals."
    },
    {
      q: "How much does a private English tutor cost?",
      a: "Rates vary by tutor and are shown on current profiles. Compare the listed rate with the tutor's stated experience and proposed lesson approach."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private English Tutoring — KS2, 11 Plus & GCSE",
    "provider": {
      "@type": "Organization",
      "name": "KlaraLearn"
    },
    "description": "Compare private English tutor profiles for KS2, 11 Plus, GCSE Language and Literature."
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
        "name": "English",
        "item": "https://klaralearn.com/subjects/english"
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="Private English Tutors UK | KS2, 11 Plus & GCSE | KlaraLearn"
        description="Compare private English tutor profiles for KS2, 11 Plus, GCSE Language and Literature, including current rates and availability."
        path="/subjects/english"
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
            <span className="text-slate-900">English</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
            Private English Tutors — KS2, 11 Plus &amp; GCSE
          </h1>

          {/* Quick Answer */}
          <div className="border-l-4 border-[#00A896] bg-[#00A896]/8 p-6 rounded-r-xl mb-8">
            <p className="text-sm font-bold uppercase tracking-wider text-[#00A896] mb-2">Quick Answer</p>
            <p className="text-slate-800 leading-relaxed">
              Use KlaraLearn to compare English tutor profiles for reading comprehension, creative writing, and GCSE literature analysis. Check current availability, rates and stated experience to find a potential match for your child.
            </p>
          </div>

          <div className="prose prose-lg text-slate-600 mb-8 max-w-none">
            <p>
              English skills underpin success across the entire curriculum. Whether your child needs help structuring essays, dissecting 19th-century literature, or mastering the SPAG elements required for the 11 Plus, one-to-one support provides the detailed, personalised feedback that is hard to get in a busy classroom.
            </p>
          </div>

          <Button asChild size="lg" className="bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white rounded-full px-8">
            <Link href="/find-a-tutor">Find an English Tutor</Link>
          </Button>
        </div>
      </section>

      <TrustStats />

      {/* Topics Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">English Tutoring for Every Stage</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From early reading comprehension to advanced GCSE essay structuring.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Primary & KS2",
                desc: "Building confidence in reading, phonics, basic grammar, and spelling for younger learners.",
                color: "border-[#00A896]"
              },
              {
                title: "11 Plus English",
                desc: "Advanced comprehension, vocabulary expansion, and targeted creative writing for grammar school exams.",
                color: "border-[#E05C2A]"
              },
              {
                title: "GCSE English Language",
                desc: "Analysing fiction and non-fiction texts, persuasive writing, and mastering the specific exam mark schemes.",
                color: "border-[#1B3D5C]"
              },
              {
                title: "GCSE Literature",
                desc: "In-depth analysis of poetry anthologies, Shakespeare, and modern plays or novels.",
                color: "border-purple-500"
              },
              {
                title: "Essay Structuring",
                desc: "Learning how to build coherent, well-argued paragraphs (such as PEE or PEEL structures).",
                color: "border-amber-500"
              },
              {
                title: "SPAG",
                desc: "Focused help on spelling, punctuation, and grammar, which carry significant marks in exams.",
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
                <BookOpen className={`w-8 h-8 mb-4 text-slate-400`} />
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
            <h2 className="text-3xl font-bold text-secondary mb-4">Review Available English Tutors</h2>
            <p className="text-slate-600">Browse profile information for available online tutors.</p>
          </div>

          <div className="mb-12">
            <TutorShowcase
              fallbackTutors={englishTutors}
              filter={(tutor) => tutor.tags.includes('English') || tutor.tags.includes('GCSE English')}
              limit={6}
              emptyMessage="Our next English tutor profiles are being added. Browse all tutors to find the right match."
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
            <h2 className="text-3xl font-bold text-secondary">English Tutoring: Common Questions</h2>
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
          <h3 className="text-xl font-bold text-secondary mb-8">Explore More</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/find-a-tutor" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Find a Tutor</Link>
            <Link href="/subjects/11-plus" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">11 Plus Tutors</Link>
            <Link href="/subjects/gcse-maths" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">GCSE Maths</Link>
            <Link href="/location/online" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Online Tutoring</Link>
            <Link href="/parents/tools" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Parent Tools</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
