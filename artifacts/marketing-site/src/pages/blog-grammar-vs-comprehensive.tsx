import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'wouter';
import { ChevronRight, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

export function BlogGrammarVsComprehensive() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Grammar School vs Comprehensive School: Which Is Better?",
    "author": {
      "@type": "Organization",
      "name": "KlaraLearn"
    },
    "datePublished": "2025-09-01",
    "dateModified": "2026-08-13",
    "description": "We objectively compare grammar schools and comprehensive schools on academic outcomes, social diversity, and long-term prospects — so parents can make an informed decision."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are grammar schools better than comprehensives?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Grammar schools achieve stronger average A-level and university results on average, but this is partly a selection effect — they admit children who are already high-achieving. When researchers control for prior attainment, the academic advantage of grammar schools over outstanding comprehensives reduces significantly. The right school depends on the individual child."
        }
      },
      {
        "@type": "Question",
        "name": "Do grammar school pupils do better in life?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Long-term outcome data is complex. Grammar school alumni are more likely to attend Russell Group universities on average, but this is partly explained by the selection of high-achieving pupils. Many comprehensive-educated individuals go on to excellent careers and top universities. School type is one factor among many — family support, tuition, and individual motivation matter more."
        }
      },
      {
        "@type": "Question",
        "name": "What are the disadvantages of grammar schools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Grammar schools admit a lower proportion of disadvantaged pupils than the national average — pupils eligible for free school meals make up approximately 2% of grammar school rolls versus 16% nationally (FFT Education Datalab). They can also create a highly pressurised academic environment that does not suit every child's personality or learning style."
        }
      },
      {
        "@type": "Question",
        "name": "What is an outstanding comprehensive school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An outstanding comprehensive school is rated 'Outstanding' by Ofsted and typically achieves GCSE and A-level results comparable to selective schools, particularly for high-ability pupils. Examples include Holland Park School in Kensington, Woodhouse College in Barnet, and many highly-rated comprehensives outside London. Outstanding comprehensives can be excellent alternatives to grammar schools."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if my child fails the 11 plus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many outstanding comprehensive schools produce excellent results and strong university progression rates. A child who does not pass the 11 plus can still access high-quality secondary education and progress to top universities. Some comprehensive-educated pupils outperform grammar school peers. The 11 plus is one pathway, not the only pathway."
        }
      },
      {
        "@type": "Question",
        "name": "Should my child do the 11 plus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Consider your child's personality, learning style, and local school options. A child who thrives in a competitive, academically focused environment may flourish in a grammar school. A child who learns best in a more collaborative, diverse environment may do better in an outstanding comprehensive. Your primary school teacher's view of your child's suitability is valuable input."
        }
      },
      {
        "@type": "Question",
        "name": "Can my child get into a Russell Group university from a comprehensive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Russell Group universities actively recruit from comprehensive schools and many offer contextual offers that take account of school background. Many of Britain's most successful professionals, academics, and political leaders attended comprehensive schools. A comprehensive school education is not a barrier to any university or career."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="Grammar School vs Comprehensive School: Which Is Better? | KlaraLearn"
        description="We objectively compare grammar schools and comprehensive schools on academic outcomes, social diversity, and long-term prospects — so parents can make an informed decision."
        path="/blog/grammar-school-vs-comprehensive"
        schema={[articleSchema, faqSchema]}
      />

      <article className="pt-20 pb-24">
        <header className="bg-slate-50 py-16 border-b mb-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8">
              <Link href="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900">Grammar vs Comprehensive</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight">
              Grammar School vs Comprehensive School: Which Is Better for Your Child?
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
                Grammar schools achieve stronger average A-level and university results, but this is partly a selection effect — they admit children who are already high-achieving. Outstanding comprehensive schools can match grammar school outcomes for high-ability pupils. The right choice depends entirely on your individual child's strengths, learning style, and wellbeing.
              </p>
            </motion.div>

            <p>
              The grammar school vs comprehensive debate is one of the most emotionally charged questions in British education. It involves genuine tensions between equity and excellence, between academic selection and social cohesion. This guide does not try to tell you which type of school is universally better — because the honest answer is that neither is. Instead, we examine what the evidence actually says on the key dimensions parents care about most.
            </p>

            <h2>Academic Outcomes: Grammar vs Comprehensive</h2>
            <p>
              On raw academic metrics, grammar schools outperform comprehensive schools on average. A higher proportion of grammar school pupils:
            </p>
            <ul>
              <li>Achieve grades 7–9 at GCSE (equivalent to the old A and A*)</li>
              <li>Complete the EBacc (English, Maths, Sciences, a Humanity, and a Language)</li>
              <li>Progress to A-levels and achieve higher grades</li>
              <li>Attend Russell Group universities</li>
            </ul>
            <p>
              However — and this is the critical caveat — the Education Policy Institute and Sutton Trust research consistently shows that when you control for pupils' prior attainment (i.e. compare grammar school pupils with equally able children in outstanding comprehensive schools), the academic advantage of grammar schools shrinks considerably.
            </p>
            <p>
              In other words: grammar schools produce excellent academic results partly because they select academically excellent children. Outstanding comprehensive schools educating similar high-ability cohorts achieve very similar outcomes.
            </p>

            <h2>Social Diversity: A Key Difference</h2>
            <p>
              One of the most significant and best-evidenced criticisms of grammar schools is their demographic profile. Research from FFT Education Datalab — one of the most rigorous independent education data analysts in the UK — consistently finds:
            </p>
            <ul>
              <li>Pupils eligible for free school meals (FSM) make up approximately <strong>2% of grammar school rolls</strong></li>
              <li>The national average for FSM eligibility across all schools is approximately <strong>16%</strong></li>
              <li>Even in areas where grammar schools are located, they admit FSM-eligible pupils at less than half the rate of their comprehensive neighbours</li>
            </ul>
            <p>
              This is a genuine tension. State grammar schools are free to attend — but access is effectively mediated through the ability to pay for 11 plus preparation, which cost an average of £2,000–£5,000 in London and Kent. This is precisely why comparing available KlaraLearn tutor profiles and current rates can help families assess the financial barrier to grammar school preparation.
            </p>

            <h2>Pressure and Wellbeing</h2>
            <p>
              Grammar schools are, by design, academically intense environments. The peer group is selected for academic ability, expectations are high, and competition between peers can be motivating — or stressful, depending on the individual child's personality and resilience.
            </p>
            <p>
              Comprehensive schools offer a broader ability range, less exam-culture pressure, and more social diversity. For some children — particularly those who are academically capable but less self-driven in a competitive environment — a comprehensive may produce better overall outcomes than a grammar school, including better mental health and more intrinsic motivation.
            </p>
            <p>
              Research on wellbeing in selective vs non-selective schools is less conclusive than research on academic outcomes. What is clear is that the child's personality and resilience matters significantly. A child who thrives on academic challenge and competitive motivation will typically do better in a grammar. A child who needs a more collaborative, supportive environment may flourish in an outstanding comprehensive.
            </p>

            <h2>What Happens If My Child Doesn't Get Into Grammar School?</h2>
            <p>
              It is important to frame this question correctly. <strong>Not getting into a grammar school is not a failure.</strong> Many outstanding secondary schools outside the selective system produce excellent academic results and strong university progression. In every part of England, there are outstanding comprehensive schools that educate high-ability pupils to exceptional standards.
            </p>
            <p>
              Some data points worth remembering:
            </p>
            <ul>
              <li>The majority of students at Russell Group universities attended state comprehensive schools</li>
              <li>Many of Britain's most successful professionals — in science, law, medicine, politics, the arts — attended comprehensive schools</li>
              <li>A child with strong parental engagement, quality tutoring support, and a growth mindset can thrive in any well-run secondary school</li>
            </ul>
            <p>
              The 11 plus is a real opportunity worth pursuing if your child is a strong candidate and grammar school suits their learning style. But it is emphatically not the only route to success. Having honest conversations with your child about this, throughout the preparation process, is important for their wellbeing.
            </p>

            <h2>Making the Right Decision for Your Child</h2>
            <p>
              Rather than asking "which is better?" — ask "which is better for my specific child?" The following checklist helps:
            </p>

            <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
              <div className="bg-slate-50 rounded-xl p-5 border">
                <h4 className="font-bold text-secondary mb-3">Your child may suit a grammar school if they...</h4>
                <ul className="space-y-2">
                  {[
                    "Thrive in a competitive, high-expectation environment",
                    "Are self-motivated and academically curious",
                    "Have shown consistent academic strength across subjects",
                    "Want to be surrounded by highly academic peers",
                    "Handle pressure and setbacks with resilience"
                  ].map((point, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm text-slate-600">
                      <span className="text-[#00A896] mt-0.5">✓</span>{point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border">
                <h4 className="font-bold text-secondary mb-3">A strong comprehensive may suit your child if they...</h4>
                <ul className="space-y-2">
                  {[
                    "Learn best in collaborative, supportive environments",
                    "Have a very specific talent (arts, sport, music) the comprehensive develops better",
                    "Find intense academic pressure demotivating or anxiety-inducing",
                    "Have strengths across the ability spectrum rather than purely academic",
                    "Benefit from diverse peer relationships"
                  ].map((point, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm text-slate-600">
                      <span className="text-[#1B3D5C] mt-0.5">→</span>{point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p>
              Your child's primary school teacher's view is genuinely valuable. They have observed your child across multiple contexts and years — their assessment of whether your child would flourish in a grammar school environment carries real weight. Listen to it carefully, alongside your own knowledge of your child's personality.
            </p>

            <div className="not-prose mt-8 mb-10 p-8 bg-[#1B3D5C] rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Explore the Grammar School Option</h3>
              <p className="text-white/80 mb-6">If you're considering grammar school for your child, KlaraLearn's 11 plus tutors can help you explore whether it's the right fit. Compare available profiles and current rates before booking.</p>
              <a
                href="/find-a-tutor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white font-bold py-3 px-8 rounded-full transition-colors no-underline"
              >
                Find an 11 Plus Tutor
              </a>
            </div>

            <hr className="my-12" />

            <h2>Frequently Asked Questions</h2>
            <div className="space-y-8 mt-8 not-prose">
              {[
                { q: "Are grammar schools better than comprehensives?", a: "On average, grammar schools achieve stronger academic results — but this is partly because they select high-achieving pupils. When researchers compare equally able children in grammar and outstanding comprehensive schools, the difference reduces significantly. Neither type is universally 'better'." },
                { q: "Do grammar school pupils do better in life?", a: "Grammar school alumni are more likely to attend Russell Group universities on average, but this is partly explained by the selection of high-achieving pupils. Many comprehensive-educated individuals achieve excellent outcomes. School type is one factor among many." },
                { q: "What are the disadvantages of grammar schools?", a: "Grammar schools admit very few disadvantaged pupils (approximately 2% FSM-eligible vs 16% national average). They can also create highly pressurised environments unsuitable for some children. And in some areas, attending grammar school means long commutes away from local community schools." },
                { q: "What is an outstanding comprehensive school?", a: "An Ofsted Outstanding comprehensive achieves excellent results across the ability range. Many Outstanding comprehensives — particularly in London — produce strong GCSE and A-level results comparable to selective schools for high-ability pupils." },
                { q: "What happens if my child fails the 11 plus?", a: "Not passing the 11 plus is not a failure. Many outstanding comprehensives produce excellent results. The majority of Russell Group university students attended comprehensive schools. A child with strong support and motivation can thrive in any well-run secondary school." },
                { q: "Should my child do the 11 plus?", a: "Consider your child's personality (competitive vs collaborative learner), learning style, resilience under pressure, and the quality of local alternatives. Your primary school teacher's view is valuable. It is worth exploring — but grammar school is not right for every child." },
                { q: "Can my child get into a Russell Group university from a comprehensive?", a: "Absolutely. The majority of Russell Group students attended state comprehensive schools. Universities actively recruit from comprehensives and many offer contextual offers. A comprehensive school education is not a barrier to any university or career." }
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
                <li><Link href="/blog/what-is-a-grammar-school" className="text-primary font-medium hover:underline">→ What Is a Grammar School?</Link></li>
                <li><Link href="/blog/grammar-school-fees" className="text-primary font-medium hover:underline">→ Are Grammar Schools Free?</Link></li>
                <li><Link href="/subjects/11-plus" className="text-primary font-medium hover:underline">→ Find an 11 Plus Tutor</Link></li>
                <li><Link href="/blog/grammar-school-admissions" className="text-primary font-medium hover:underline">→ Grammar School Admissions Guide</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
