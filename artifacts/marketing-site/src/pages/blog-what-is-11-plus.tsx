import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'wouter';
import { ChevronRight, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

export function BlogWhatIs11Plus() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is the 11 Plus Exam? A Parent's Complete Guide",
    "author": {
      "@type": "Organization",
      "name": "KlaraLearn"
    },
    "datePublished": "2025-09-01",
    "dateModified": "2026-08-13",
    "description": "The 11 plus is a selective entrance exam for grammar schools taken at age 10–11. It tests verbal reasoning, maths, English, and non-verbal reasoning. Everything parents need to know."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the 11 plus exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 11 plus (11+) is a selective entrance examination taken by children aged 10–11 in England. It is used by grammar schools and some independent schools to assess academic ability across verbal reasoning, non-verbal reasoning, mathematics, and English. Around 163 grammar schools in England currently use the exam."
        }
      },
      {
        "@type": "Question",
        "name": "What age do children take the 11 plus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Children take the 11 plus at the start of Year 6, typically in September, when they are 10 or 11 years old. This is the final year of primary school before starting secondary school."
        }
      },
      {
        "@type": "Question",
        "name": "What subjects does the 11 plus test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 11 plus typically tests four areas: Verbal Reasoning (word patterns, analogies, codes), Non-Verbal Reasoning (shapes, patterns, matrices), Mathematics (KS2 and above, including fractions, percentages, and algebra), and English (comprehension, grammar, vocabulary). Not all schools test all four subjects."
        }
      },
      {
        "@type": "Question",
        "name": "Is the 11 plus the same everywhere in England?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The 11 plus varies by region. The two main providers are GL Assessment (used in Kent, Essex, Hertfordshire, Gloucestershire, and Berkshire) and CEM/Durham University (used in Birmingham, Cheshire, and parts of Berkshire). The format, question types, and emphasis differ significantly between the two."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between GL Assessment and CEM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GL Assessment uses separate dedicated papers for each subject and has predictable question types from year to year, making it well-suited to structured preparation. CEM (Durham University) integrates subjects and deliberately varies its format to resist coaching. Both produce standardised scores, but the preparation approach should differ."
        }
      },
      {
        "@type": "Question",
        "name": "What is a good 11 plus score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GL Assessment scores are standardised with a mean of 100 and standard deviation of 15. A score of 121 or above is typically needed for competitive grammar schools. Some super-selective schools (e.g. QE Boys Barnet) require 125+. CEM cut-offs vary by school and year, typically ranging from 112 to 121."
        }
      },
      {
        "@type": "Question",
        "name": "How many children pass the 11 plus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roughly 1 in 4 children who sit the 11 plus achieve a qualifying score nationally. However, in highly competitive areas like Slough, Sutton, and Barnet, competition is far more intense — some schools receive 8–10 applicants per available place."
        }
      },
      {
        "@type": "Question",
        "name": "When should my child start preparing for the 11 plus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most specialists recommend beginning structured 11 plus preparation in Year 4 or early Year 5 — at least 12 to 18 months before the September exam. Starting gently in Year 4 and building intensity through Year 5 is more effective than intensive cramming close to the exam date."
        }
      },
      {
        "@type": "Question",
        "name": "Can my child prepare for the 11 plus without a tutor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but it is challenging. Practice papers and workbooks (Bond 11+, CGP) are widely available. However, research from the Sutton Trust shows that 63% of grammar school pupils had private tutoring. A tutor identifies specific weak areas and provides targeted, efficient preparation that self-study alone often misses."
        }
      },
      {
        "@type": "Question",
        "name": "How much does 11 plus tutoring cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Local specialist 11 plus tutors in the UK typically charge £35–£80 per hour, with London rates often exceeding £60/hr. KlaraLearn's global tutor marketplace offers the same expertise from £15/hr — making professional 11 plus preparation accessible to every family."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="What Is the 11 Plus Exam? A Parent's Complete Guide | KlaraLearn"
        description="The 11 plus is a selective entrance exam for grammar schools taken at age 10–11. It tests verbal reasoning, maths, English, and non-verbal reasoning. Everything parents need to know."
        path="/blog/what-is-the-11-plus"
        schema={[articleSchema, faqSchema]}
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
              <span className="text-slate-900">What Is the 11 Plus?</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight">
              What Is the 11 Plus Exam?
            </h1>

            <div className="flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>KlaraLearn Editorial Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>September 2025 · Updated August 2026</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg prose-slate max-w-none">

            {/* Quick Answer Box */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="border-l-4 border-[#00A896] bg-[#00A896]/8 p-6 rounded-r-xl mb-10 not-prose"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-[#00A896] mb-2">Quick Answer</p>
              <p className="text-slate-800 leading-relaxed">
                The 11 plus (11+) is a selective entrance examination taken by children aged 10–11 in England. Used by grammar schools and some independent schools to assess academic ability across verbal reasoning, non-verbal reasoning, mathematics, and English. Around 163 grammar schools in England currently use the exam.
              </p>
            </motion.div>

            <p>
              For millions of UK parents, the 11 plus exam is one of the most consequential educational milestones their child will face. Getting a place at a state grammar school is effectively free private-school quality education — which is why competition has intensified sharply in recent years. Nationally, roughly 1 in 4 children who sit the 11 plus achieve a qualifying score. In some of the most sought-after areas — Slough, Barnet, Sutton — up to 10 children apply for every single grammar school place.
            </p>
            <p>
              Understanding how the 11 plus works, what it tests, and how to prepare effectively is the first step for any family considering the grammar school route. This guide covers everything parents need to know.
            </p>

            <h2>What Does the 11 Plus Test?</h2>
            <p>
              The 11 plus tests academic reasoning across four core areas. Not every school tests all four — some focus on two or three — but knowing what each area involves helps parents plan targeted preparation.
            </p>

            <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
              {[
                {
                  title: "Verbal Reasoning",
                  desc: "Word analogies, letter/number codes, antonyms, synonyms, sentence completion, anagrams, and hidden word puzzles. Tests the ability to reason with language rather than general reading ability.",
                  color: "border-[#00A896]"
                },
                {
                  title: "Non-Verbal Reasoning",
                  desc: "Shape sequences, matrices (3×3 grids), odd-one-out, reflection and rotation, nets of 3D shapes. Tests spatial and abstract thinking. Often called 'abstract reasoning.'",
                  color: "border-[#E05C2A]"
                },
                {
                  title: "Mathematics",
                  desc: "All KS2 topics plus fractions, percentages, decimals, ratio, basic algebra, speed/distance/time, and geometry. Some schools test to Year 7 level. Mental arithmetic speed is critical.",
                  color: "border-[#1B3D5C]"
                },
                {
                  title: "English",
                  desc: "Reading comprehension, grammar, punctuation, vocabulary, and in some schools a short creative writing task. Tests language fluency and comprehension at a depth beyond the primary curriculum.",
                  color: "border-purple-500"
                }
              ].map((card, i) => (
                <div key={i} className={`border-l-4 ${card.color} bg-white border border-l-[4px] rounded-lg p-5 shadow-sm`}>
                  <h3 className="font-bold text-secondary text-lg mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            <p>
              There is an important regional difference in how these subjects are examined. <strong>GL Assessment</strong> (used in Kent, Essex, Hertfordshire, Gloucestershire, and Berkshire) produces separate, clearly structured papers for each subject with consistent question types from year to year. <strong>CEM/Durham University</strong> (used in Birmingham, Cheshire, and parts of Berkshire) integrates subjects into fewer papers and deliberately varies its format to make coaching harder. The preparation approach should differ based on which exam your child will sit.
            </p>

            <h2>Which Schools Use the 11 Plus?</h2>
            <p>
              The 11 plus is used by state grammar schools and some independent schools with selective admissions. Here is a county-by-county breakdown of the current grammar school landscape in England:
            </p>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1B3D5C] text-white">
                    <th className="text-left p-3 font-semibold">County / Area</th>
                    <th className="text-left p-3 font-semibold">Grammar Schools</th>
                    <th className="text-left p-3 font-semibold">Exam Board</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Kent", "36", "GL Assessment"],
                    ["Buckinghamshire", "13", "CEM / GL"],
                    ["Lincolnshire", "6", "GL Assessment"],
                    ["Birmingham / West Midlands", "7", "CEM"],
                    ["Essex", "4", "GL Assessment"],
                    ["Hertfordshire", "3", "GL Assessment"],
                    ["Gloucestershire", "2", "GL Assessment"],
                    ["Outer London (Barnet, Kingston, Sutton, Bromley)", "~15", "GL Assessment"],
                    ["Other counties", "Varies", "GL or CEM"],
                  ].map(([area, count, board], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 border-b border-slate-100 font-medium text-slate-800">{area}</td>
                      <td className="p-3 border-b border-slate-100 text-slate-700">{count}</td>
                      <td className="p-3 border-b border-slate-100 text-slate-600">{board}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              Note: London grammar schools are concentrated in the outer boroughs. Barnet has QE Boys and Henrietta Barnett. Kingston has Tiffin and Tiffin Girls'. Sutton has Wallington High School for Girls, Sutton Grammar, and Nonsuch High School. These schools are among the most competitive in England.
            </p>

            <h2>Is the 11 Plus Still Used?</h2>
            <p>
              Yes — and it is not going away. There are currently 163 state grammar schools across 36 local authorities in England. Competition has actually intensified in recent years. In 2024, some Kent and London grammar schools reported receiving 8–10 applications per available place. The government has not legislated to expand the grammar school system, but it has also made no moves to abolish existing schools.
            </p>
            <p>
              The debate around selective education continues in political and educational circles, but for families in grammar school areas, the practical reality is clear: if your child wants a grammar school place, they will need to pass the 11 plus.
            </p>

            <h2>How Long Is the 11 Plus Exam?</h2>
            <p>
              Paper length varies by exam board and by school:
            </p>
            <ul>
              <li><strong>GL Assessment:</strong> Verbal Reasoning paper ~50 minutes; Maths ~47 minutes; English ~45 minutes; Non-Verbal Reasoning ~45 minutes. Not all schools include all four papers — many use two or three.</li>
              <li><strong>CEM (Durham University):</strong> Typically two sessions of 45–60 minutes each. Subjects are integrated into the sessions rather than separated into individual papers. Total exam time is similar but the format feels different.</li>
            </ul>
            <p>
              Children usually sit all their papers on the same day, or occasionally across two sessions. The entire exam experience, including instructions and breaks, typically takes 2–3 hours.
            </p>

            <h2>What Is the 11 Plus Pass Mark?</h2>
            <p>
              There is no single national pass mark — each school sets its own minimum qualifying score (MQS). Raw scores are converted to standardised scores, which adjust for a child's age in months (a child born in August gets a slight uplift compared to one born in September, making the system fairer).
            </p>
            <ul>
              <li><strong>GL Assessment standardised scoring:</strong> Mean score of 100, standard deviation of 15. Scores range from approximately 69 to 141. A score of 121+ is typically needed for competitive grammar schools.</li>
              <li><strong>Super-selective schools</strong> (e.g. QE Boys Barnet) typically require 125+ to be considered for a place.</li>
              <li><strong>CEM:</strong> Also standardises scores, though cut-offs vary by school and year — typically between 112 and 121.</li>
            </ul>
            <p>
              Each school publishes its minimum qualifying score or historical score ranges. Parents should check the specific school's admissions information each year, as cut-offs change slightly based on the cohort.
            </p>

            <h2>When Do Children Take the 11 Plus?</h2>
            <p>
              The exam is sat in <strong>September of Year 6</strong>, when children are aged 10–11. This is crucial: registration is not automatic. Parents must proactively register their child for the test, typically between April and June of Year 6. Missing the registration deadline means missing that year's exam entirely.
            </p>
            <p>
              The typical timeline runs as follows: registration opens April–June → exam sits in September → results sent to families in October–November → Common Application Form submitted by October 31st → national offer day on March 1st → appeals process runs January–March.
            </p>

            <h2>Is the 11 Plus Compulsory?</h2>
            <p>
              No — the 11 plus is entirely voluntary. No child is required to sit it. However, grammar schools cannot offer places to children who have not achieved the school's minimum qualifying score. If a parent wants their child to be considered for a grammar school, sitting the exam is essential.
            </p>
            <p>
              Importantly, sitting (and not qualifying on) the 11 plus does not affect a child's application to comprehensive schools in the same area. Children can and do apply to both grammar schools and comprehensive schools simultaneously.
            </p>

            <h2>How Can a Tutor Help With the 11 Plus?</h2>
            <p>
              Research from the Sutton Trust found that 63% of grammar school pupils had received private tutoring. A specialist 11 plus tutor brings several advantages over self-study alone: they identify a child's specific weak question types rather than applying a one-size-fits-all approach, they are familiar with the exact format of GL or CEM papers for your area, they coach exam technique (time management, when to skip and return, how to handle uncertainty), and they provide accountability and motivation throughout a long preparation period.
            </p>
            <p>
              At <strong>KlaraLearn</strong>, our 11 plus tutors are experienced with both GL Assessment and CEM formats, available online across the UK, and start from just £15 per hour — a fraction of the £40–£80/hr charged by local specialists. Every new family gets a free trial lesson.
            </p>

            <div className="not-prose mt-8 mb-10 p-8 bg-[#1B3D5C] rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Start 11 Plus Preparation Today</h3>
              <p className="text-white/80 mb-6">Expert tutors from £15/hr. Free trial lesson. GL and CEM specialists available.</p>
              <a
                href="https://app.klaralearn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white font-bold py-3 px-8 rounded-full transition-colors no-underline"
              >
                Find an 11 Plus Tutor
              </a>
            </div>

            <hr className="my-12" />

            <h2>Frequently Asked Questions About the 11 Plus</h2>

            <div className="space-y-8 mt-8 not-prose">
              {[
                {
                  q: "What is the 11 plus?",
                  a: "The 11 plus (11+) is a selective entrance exam used by grammar schools in England to assess children's academic ability. It tests verbal reasoning, non-verbal reasoning, mathematics, and English. Children sit the exam in September of Year 6 at age 10–11."
                },
                {
                  q: "What age do children sit the 11 plus?",
                  a: "Children sit the 11 plus at age 10 or 11, during September of Year 6 — their final year of primary school. Most children are still 10 when they sit the exam, turning 11 during the autumn term."
                },
                {
                  q: "What subjects does the 11 plus test?",
                  a: "The exam typically covers four areas: Verbal Reasoning, Non-Verbal Reasoning, Mathematics, and English. Not all schools test all four subjects — some focus on two or three. The balance depends on which exam board (GL Assessment or CEM) your local grammar schools use."
                },
                {
                  q: "Is the 11 plus the same everywhere?",
                  a: "No. The 11 plus varies significantly by region. Kent, Essex, and Hertfordshire use GL Assessment with separate papers per subject. Birmingham and Cheshire use CEM, which integrates subjects and varies format year to year. Always check which board your target school uses."
                },
                {
                  q: "What is the difference between GL Assessment and CEM?",
                  a: "GL Assessment uses dedicated papers with consistent question types, making it well-suited to structured practice using commercial books. CEM (Durham University) deliberately varies its format to reduce the advantage of coaching — making wide reading, mathematical fluency, and mixed practice more important than paper-drilling alone."
                },
                {
                  q: "What is a good 11 plus score?",
                  a: "GL Assessment scores are standardised with a mean of 100. A score of 121 or above typically qualifies a child for most grammar schools. Super-selective schools like QE Boys Barnet require 125+. CEM cut-offs vary by school but typically range from 112 to 121."
                },
                {
                  q: "How many children pass the 11 plus?",
                  a: "Nationally, roughly 1 in 4 children who sit the exam achieve a qualifying score. In highly competitive areas (Barnet, Kingston, Sutton, Slough), pass rates relative to available places are much lower — sometimes 10 applicants per place in the most popular schools."
                },
                {
                  q: "When should my child start preparing for the 11 plus?",
                  a: "Most 11 plus specialists recommend starting in Year 4 or early Year 5 — at least 12 to 18 months before the September exam. Begin with gentle skill-building (verbal reasoning concepts, mental maths) in Year 4, and introduce timed practice papers from Year 5."
                },
                {
                  q: "Can my child prepare for the 11 plus without a tutor?",
                  a: "Yes, self-study with Bond 11+, CGP, and GL Assessment practice papers is possible. However, Sutton Trust research shows 63% of grammar school pupils received tutoring. A tutor's main advantage is identifying exactly which question types are weak and targeting those precisely, rather than practising everything uniformly."
                },
                {
                  q: "How much does 11 plus tutoring cost?",
                  a: "Local 11 plus specialist tutors typically charge £35–£80/hr, with London rates often exceeding £60/hr. KlaraLearn offers the same quality from £15/hr by working with highly qualified tutors globally. All sessions are conducted online via a secure virtual classroom."
                }
              ].map((faq, i) => (
                <div key={i} className="border-b border-slate-100 pb-6">
                  <h4 className="font-bold text-lg text-secondary mb-2">{faq.q}</h4>
                  <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="not-prose mt-16 p-8 bg-slate-50 rounded-2xl border border-primary/20">
              <h3 className="text-xl font-bold text-secondary mb-4">Related Guides</h3>
              <ul className="space-y-3">
                <li><Link href="/subjects/11-plus" className="text-primary font-medium hover:underline">→ Find an 11 Plus Tutor</Link></li>
                <li><Link href="/blog/how-to-prepare-for-11-plus" className="text-primary font-medium hover:underline">→ How to Prepare for the 11 Plus: Ultimate Parent Guide</Link></li>
                <li><Link href="/blog/11-plus-verbal-reasoning" className="text-primary font-medium hover:underline">→ 11 Plus Verbal & Non-Verbal Reasoning Explained</Link></li>
                <li><Link href="/blog/what-is-a-grammar-school" className="text-primary font-medium hover:underline">→ What Is a Grammar School?</Link></li>
                <li><Link href="/blog/11-plus-practice-papers" className="text-primary font-medium hover:underline">→ Best 11 Plus Practice Papers: A Parent's Guide</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
