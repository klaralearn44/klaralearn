import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'wouter';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export function BlogIndex() {
  const articles = [
    {
      title: "What Is the 11 Plus Exam? A Parent's Complete Guide",
      excerpt: "Everything you need to know about the 11 plus: what it tests, which schools use it, the difference between GL Assessment and CEM, and what a good score looks like.",
      date: "September 1, 2025",
      href: "/blog/what-is-the-11-plus",
      category: "Guides"
    },
    {
      title: "How to Prepare for the 11 Plus: The Ultimate Parent's Guide",
      excerpt: "A year-by-year preparation guide from Year 3 to exam day in Year 6 — when to start, what to study, sample timetables, and how tutoring makes the difference.",
      date: "September 1, 2025",
      href: "/blog/how-to-prepare-for-11-plus",
      category: "Guides"
    },
    {
      title: "11 Plus Verbal & Non-Verbal Reasoning: What Parents Need to Know",
      excerpt: "Verbal reasoning and non-verbal reasoning are core 11 plus subjects not taught in primary schools. See example question types and learn how to build these skills at home.",
      date: "September 1, 2025",
      href: "/blog/11-plus-verbal-reasoning",
      category: "11 Plus"
    },
    {
      title: "Best 11 Plus Practice Papers: Everything Parents Need to Know",
      excerpt: "GL Assessment and CEM-style practice papers compared, plus a 6-step guide to using them effectively — from untimed concept-building to full mock exams.",
      date: "September 1, 2025",
      href: "/blog/11-plus-practice-papers",
      category: "11 Plus"
    },
    {
      title: "Grammar School Admissions: A Complete Parent's Guide",
      excerpt: "How to apply for a grammar school place — the full timeline, Common Application Form, Stage 2 headteacher assessments, and tips for improving your child's chances.",
      date: "September 1, 2025",
      href: "/blog/grammar-school-admissions",
      category: "Admissions"
    },
    {
      title: "Are Grammar Schools Free? Fees, Costs & What Parents Pay",
      excerpt: "State grammar schools charge no tuition fees. But private grammar schools charge £12,000–£20,000/yr. We explain the difference — and the hidden cost most parents overlook.",
      date: "September 1, 2025",
      href: "/blog/grammar-school-fees",
      category: "Guides"
    },
    {
      title: "How Much Does Private Tutoring Cost in the UK? (2025 Prices)",
      excerpt: "Private tutoring costs £25–£80/hr on average in the UK. We break down prices by subject, level, and location — and explain how to compare current tutor profile rates.",
      date: "September 1, 2025",
      href: "/blog/how-much-does-tutoring-cost",
      category: "Pricing"
    },
    {
      title: "Best Grammar Schools in England: A Regional Guide",
      excerpt: "Top grammar schools in London, Kent, Buckinghamshire, and the West Midlands — with competition levels, exam boards, and what makes each area different.",
      date: "September 1, 2025",
      href: "/blog/best-grammar-schools-uk",
      category: "Schools"
    },
    {
      title: "Grammar School vs Comprehensive School: Which Is Better?",
      excerpt: "An objective comparison of grammar schools and comprehensives on academic outcomes, social diversity, and wellbeing — so parents can make a genuinely informed decision.",
      date: "September 1, 2025",
      href: "/blog/grammar-school-vs-comprehensive",
      category: "Guides"
    },
    {
      title: "What Is a Grammar School? A Complete Guide for UK Parents",
      excerpt: "A grammar school is a state-funded secondary school that selects its pupils by academic ability through the 11 plus. Here's everything you need to know.",
      date: "August 15, 2026",
      href: "/blog/what-is-a-grammar-school",
      category: "Guides"
    }
  ];

  return (
    <Layout>
      <SEOHead
        title="KlaraLearn Blog | Guides for 11 Plus, GCSEs & Tutoring"
        description="Expert advice, study guides, and cost breakdowns for UK parents navigating grammar school admissions, GCSEs, and private tutoring."
        path="/blog"
      />

      <section className="bg-slate-50 pt-24 pb-16 border-b">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">The KlaraLearn Blog</h1>
          <p className="text-xl text-slate-600">
            Clear, honest advice for parents navigating the UK education system.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group flex flex-col bg-white rounded-2xl border overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">{article.category}</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    <Link href={article.href}>{article.title}</Link>
                  </h2>
                  <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Link href={article.href} className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all mt-auto">
                    Read article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
