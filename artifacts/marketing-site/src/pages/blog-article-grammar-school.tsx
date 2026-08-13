import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'wouter';
import { ChevronRight, Calendar, User } from 'lucide-react';

export function BlogArticleGrammarSchool() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is a Grammar School? A Complete Guide for UK Parents [2026]",
    "author": {
      "@type": "Organization",
      "name": "KlaraLearn Editorial Team"
    },
    "datePublished": "2026-08-15",
    "description": "A comprehensive guide explaining what a grammar school is, how they differ from comprehensive schools, and how the 11 Plus admissions process works."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is grammar school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A grammar school is a state-funded secondary school in the UK that selects its pupils based on academic ability. Students typically take an entrance exam, known as the 11 Plus, in their final year of primary school to secure a place."
        }
      },
      {
        "@type": "Question",
        "name": "Are grammar schools free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, state grammar schools are entirely free to attend. They are funded by the government, just like comprehensive schools. However, parents often incur costs preparing their children for the 11 Plus entrance exam."
        }
      },
      {
        "@type": "Question",
        "name": "What age do you take the grammar school test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Children take the 11 Plus exam at the beginning of Year 6, usually in September, when they are 10 or 11 years old."
        }
      },
      {
        "@type": "Question",
        "name": "What is special about grammar schools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Grammar schools group highly academic students together, often moving at a faster pace and achieving excellent exam results. They typically have a strong academic ethos and long-standing traditions."
        }
      },
      {
        "@type": "Question",
        "name": "Is grammar school the same as middle school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. In the UK, a grammar school is a selective secondary school (ages 11-18). The term 'middle school' is primarily used in the US education system."
        }
      },
      {
        "@type": "Question",
        "name": "How many grammar schools are in England?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are currently 163 state grammar schools in England, located in specific counties that retained the selective system, such as Kent, Buckinghamshire, and parts of London."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOHead 
        title="What Is a Grammar School? Complete Parent's Guide [2026] | KlaraLearn"
        description="Wondering what a grammar school is? Read our complete 2026 guide on UK grammar schools, 11 Plus admissions, fees, and how they differ from comprehensives."
        path="/blog/what-is-a-grammar-school"
        schema={[schema, faqSchema]}
      />

      <article className="pt-20 pb-24">
        {/* Header */}
        <header className="bg-slate-50 py-16 border-b mb-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8">
              <Link href="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900">Guides</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight">
              What Is a Grammar School? A Complete Guide for UK Parents [2026]
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>KlaraLearn Editorial Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>August 2026</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg prose-slate max-w-none">
            
            <h2>What is a grammar school?</h2>
            {/* Featured snippet target */}
            <p className="font-medium text-xl leading-relaxed text-secondary bg-primary/5 p-6 rounded-xl border border-primary/20">
              A grammar school is a state-funded secondary school in the UK that selects its pupils based on academic ability. Students must pass an entrance exam—usually the 11 Plus—in their final year of primary school to secure a place.
            </p>

            <p>
              For parents navigating the UK education system for the first time, the terminology can be confusing. Unlike standard comprehensive schools which must accept students regardless of their academic capability, grammar schools are explicitly selective. They aim to group the most academically able children together to provide a fast-paced, highly focused learning environment.
            </p>

            <h2>History and Context</h2>
            <p>
              The grammar school system has deep roots in British educational history. Historically, the UK operated under a "tripartite system" where children were tested at age 11 and sent to either grammar schools, secondary moderns, or technical schools. While most of the country moved to a comprehensive system in the 1960s and 70s, several counties—including Kent, Buckinghamshire, and specific London boroughs—retained their selective grammar schools.
            </p>

            <h2>How they differ from comprehensives</h2>
            <p>
              The primary difference lies in the admissions policy. Comprehensive schools are mostly determined by catchment area (how close you live to the school). Grammar schools also have catchment areas, but their defining feature is the academic entrance requirement. 
            </p>
            <p>
              Because the intake is academically selected, grammar schools often feature:
            </p>
            <ul>
              <li>A faster pace of learning in core subjects</li>
              <li>A strongly academic ethos and traditional values</li>
              <li>Consistently high performance in GCSE and A-Level league tables</li>
              <li>A highly competitive atmosphere</li>
            </ul>

            <h2>Grammar school admissions (The 11 Plus)</h2>
            <p>
              Admission is dictated almost entirely by the 11 Plus exam. This is a rigorous test taken at the start of Year 6. 
            </p>
            <p>
              Because the test is difficult and highly competitive, many parents employ <Link href="/subjects/11-plus" className="text-primary no-underline hover:underline font-semibold">specialist 11 Plus tutors</Link> to help their children prepare. The exam generally tests a mixture of verbal reasoning, non-verbal reasoning, mathematics, and English comprehension.
            </p>

            <h2>Are grammar schools free?</h2>
            <p>
              Yes, state grammar schools are completely free to attend. Because they are funded by the government, they do not charge tuition fees. This makes them highly sought after by parents who want a private-school level of academic rigor without the private school price tag. However, the associated costs of <Link href="/subjects/11-plus" className="text-primary no-underline hover:underline font-semibold">11 Plus tutoring</Link> can be a barrier, which is why KlaraLearn exists—to make that preparation affordable.
            </p>

            <h2>Key facts</h2>
            <ol>
              <li>There are currently <strong>163 state grammar schools</strong> in England.</li>
              <li>There are no state grammar schools in Wales or Scotland.</li>
              <li>Competition is fierce—some London grammar schools have over 10 applicants for every single place.</li>
              <li>Around 5% of secondary school children in England attend a grammar school.</li>
            </ol>

            <hr className="my-12" />

            <h2>Frequently Asked Questions</h2>
            
            <div className="space-y-6 mt-8">
              <div>
                <h4 className="font-bold text-lg text-secondary">What is grammar school?</h4>
                <p>A selective state-funded secondary school that admits students based on their performance in the 11 Plus entrance exam.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg text-secondary">What age do you take the grammar school test?</h4>
                <p>The 11 Plus exam is taken at the very beginning of Year 6, when children are 10 or 11 years old.</p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-secondary">What is special about grammar schools?</h4>
                <p>They provide a highly academic environment where academically gifted students are grouped together, often resulting in exceptional exam outcomes and high university progression rates.</p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-secondary">How many grammar schools are in England?</h4>
                <p>There are 163 state grammar schools currently operating in England.</p>
              </div>

              <div>
                <h4 className="font-bold text-lg text-secondary">Is grammar school the same as middle school?</h4>
                <p>No. "Middle school" is an American term. In the UK, a grammar school is a secondary school for ages 11 to 18.</p>
              </div>
            </div>

            <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-primary/20 text-center">
              <h3 className="text-2xl font-bold text-secondary mb-4 mt-0">Ready to start preparing?</h3>
              <p className="mb-6">Give your child the best chance of securing a grammar school place with our affordable, vetted 11 Plus tutors.</p>
              <Link href="/subjects/11-plus" className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full no-underline transition-colors">
                Find an 11 Plus Tutor from £15/hr
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
