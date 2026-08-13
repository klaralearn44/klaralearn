import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'wouter';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export function BlogIndex() {
  const articles = [
    {
      title: "What is the 11 Plus exam? Complete Parent's Guide [2026]",
      excerpt: "Everything you need to know about the 11 Plus exam: what it is, how it works, and how to prepare your child for grammar school entry.",
      date: "August 12, 2026",
      href: "/blog/what-is-a-grammar-school",
      category: "Guides"
    },
    {
      title: "How much does an 11 Plus tutor cost in the UK?",
      excerpt: "A complete breakdown of tutoring rates across the UK, why local prices are so high, and how to find affordable alternatives.",
      date: "August 5, 2026",
      href: "/blog/how-much-does-tutoring-cost",
      category: "Pricing"
    },
    {
      title: "Grammar school admissions: what parents need to know",
      excerpt: "Navigating the complex world of grammar school admissions, catchment areas, and appeal processes.",
      date: "July 28, 2026",
      href: "/blog/grammar-school-admissions",
      category: "Admissions"
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
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
