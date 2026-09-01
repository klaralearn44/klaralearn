import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'wouter';
import { ChevronRight, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

export function BlogGrammarSchoolFees() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Are Grammar Schools Free? Fees, Costs & What Parents Pay",
    "author": {
      "@type": "Organization",
      "name": "KlaraLearn"
    },
    "datePublished": "2025-09-01",
    "dateModified": "2026-08-13",
    "description": "State grammar schools in England are free — no tuition fees. But private grammar schools charge £12,000–£20,000/yr. We explain the difference and the one cost parents often overlook."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are grammar schools free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "State grammar schools in England are completely free to attend. They are government-funded, charge no tuition fees, and are bound by the same rules as all state schools. However, parents often spend £1,000–£4,000+ on 11 plus tutoring to prepare their children for the competitive entrance exam."
        }
      },
      {
        "@type": "Question",
        "name": "Do you pay for grammar school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For state grammar schools: no, attendance is free. For private (independent) grammar schools such as Manchester Grammar School or King Edward's Birmingham: yes, fees are typically £12,000–£20,000 per year for day pupils."
        }
      },
      {
        "@type": "Question",
        "name": "What are the costs of sending a child to grammar school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a state grammar school: there are no tuition fees. However, families typically pay £200–£400 per year for school uniform, plus variable costs for school trips, activities, and any optional extras. The main pre-entry cost is 11 plus tutoring, which can range from £500 to £4,000+ depending on the tutor rate and duration of preparation."
        }
      },
      {
        "@type": "Question",
        "name": "Are private grammar schools worth it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Schools like Manchester Grammar School and King Edward's School Birmingham have outstanding academic reputations and excellent university progression rates. Whether they are worth the fees depends on your financial situation and whether bursary support is available. Both schools offer significant means-tested bursaries — in some cases covering 100% of fees for eligible families."
        }
      },
      {
        "@type": "Question",
        "name": "Do grammar schools charge for extras?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "State grammar schools may charge for some optional extras: school trips, residential experiences, music tuition, and sports tours. However, these are not mandatory, and many are subsidised. The core education — lessons, resources, and standard activities — is free."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a grammar school and a private school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "State grammar schools are government-funded, free to attend, and selective by academic ability via the 11 plus. Private (independent) schools charge tuition fees (typically £14,000–£45,000/yr) and set their own admission criteria. Some private schools are also selective and called 'grammar' schools (e.g. Manchester Grammar) but this is a historical label, not a legal category."
        }
      },
      {
        "@type": "Question",
        "name": "How much does the 11 plus cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sitting the 11 plus exam itself is free. However, most families invest in preparation: 11 plus tutors cost £35–£80/hr locally. On KlaraLearn, families can compare available specialist tutor profiles and current rates. Over a 12–18 month preparation period, total tutoring costs depend on frequency and tutor rate."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="Are Grammar Schools Free? Fees, Costs & What Parents Pay | KlaraLearn"
        description="State grammar schools in England are free — no tuition fees. But private grammar schools charge £12,000–£20,000/yr. We explain the difference and the one cost parents often overlook."
        path="/blog/grammar-school-fees"
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
              <span className="text-slate-900">Grammar School Fees</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight">
              Grammar School Fees: Are Grammar Schools Free?
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
                State grammar schools in England are free — they are funded by the government and charge no tuition fees. However, private (independent) grammar schools such as Manchester Grammar School charge between £12,000 and £20,000 per year. The confusion arises because both types are called 'grammar schools' but are fundamentally different.
              </p>
            </motion.div>

            <h2>Are Grammar Schools Free?</h2>
            <p>
              <strong>Yes — emphatically yes.</strong> State-maintained grammar schools in England are completely free to attend. They receive government funding, operate under the same financial rules as all state schools, and cannot charge tuition fees. A place at Tonbridge Grammar School for Girls, The Judd School in Kent, or Tiffin Girls' School in Kingston costs parents nothing in tuition — the same as any comprehensive secondary school.
            </p>
            <p>
              Grammar schools can and do charge for some optional extras: school trips, residential visits, music tuition, and specialist equipment. These costs are not mandatory. The core education — lessons, textbooks, examinations, and standard school activities — is entirely free.
            </p>
            <p>
              Uniform costs at grammar schools are typically £200–£400 per year, similar to or slightly higher than comprehensive schools due to branded items and sports kits. Some grammar schools have quite prescriptive uniform requirements which can add cost in the first year.
            </p>

            <h2>What Are Private Grammar Schools?</h2>
            <p>
              The confusion arises because some of England's most prestigious independent (private) schools are called "grammar schools" — a historical label that has nothing to do with their funding model. These are fee-paying institutions that happen to have retained the grammar school name from their origins.
            </p>
            <p>
              Examples of notable private "grammar" schools and their fees (2025):
            </p>
            <ul>
              <li><strong>Manchester Grammar School</strong> — approximately £15,900/yr (day)</li>
              <li><strong>King Edward's School Birmingham</strong> — approximately £13,100/yr (day)</li>
              <li><strong>Latymer Upper School, London</strong> — approximately £24,000/yr (day)</li>
              <li><strong>Bristol Grammar School</strong> — approximately £16,000/yr (day)</li>
            </ul>
            <p>
              These schools also offer means-tested bursaries — in some cases covering 100% of fees for high-achieving pupils from low-income families. Manchester Grammar School and King Edward's Birmingham are particularly well known for their bursary programmes.
            </p>

            <h2>State Grammar vs Independent Grammar vs Outstanding Comprehensive</h2>
            <p>
              Understanding the three types of schools parents typically consider helps make the comparison clear:
            </p>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1B3D5C] text-white">
                    <th className="text-left p-3 font-semibold">Feature</th>
                    <th className="text-left p-3 font-semibold">State Grammar</th>
                    <th className="text-left p-3 font-semibold">Independent Grammar</th>
                    <th className="text-left p-3 font-semibold">Outstanding Comp</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Tuition fees", "Free", "£12,000–£20,000/yr", "Free"],
                    ["11 plus required", "Yes", "Own entrance exam", "No"],
                    ["State funded", "Yes", "No", "Yes"],
                    ["Uniform costs", "£200–£400/yr", "£400–£800/yr", "£100–£300/yr"],
                    ["Trips/activities", "Subsidised", "Often expensive", "Variable"],
                    ["Bursaries available", "N/A (free)", "Yes, means-tested", "N/A (free)"],
                    ["Typical class size", "28–30", "20–24", "28–30"],
                  ].map(([feature, state, independent, comp], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 border-b border-slate-100 font-medium text-slate-800">{feature}</td>
                      <td className="p-3 border-b border-slate-100 text-[#00A896] font-medium">{state}</td>
                      <td className="p-3 border-b border-slate-100 text-slate-700">{independent}</td>
                      <td className="p-3 border-b border-slate-100 text-slate-600">{comp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>The Hidden Cost: 11 Plus Tutoring</h2>
            <p>
              Here is the cost parents often overlook when celebrating the fact that grammar schools are free: the 11 plus entrance exam is highly competitive, and most families invest significantly in preparation. Even though the school itself costs nothing, the road to getting there can be expensive.
            </p>
            <p>
              Typical 11 plus preparation costs:
            </p>
            <ul>
              <li><strong>Local specialist tutor:</strong> £35–£80/hr. Over 12–18 months at 1–2 sessions per week, total cost can reach £3,000–£7,000+.</li>
              <li><strong>London agency tutor:</strong> £55–£90/hr. Total preparation cost can exceed £8,000 for intensive programmes.</li>
              <li><strong>Practice books and papers:</strong> £50–£150 total. Bond 11+, CGP, and official GL specimen papers are relatively affordable.</li>
              <li><strong>Mock exam sessions:</strong> £20–£50 per session at local test centres.</li>
            </ul>
            <p>
              <strong>KlaraLearn can help families compare this hidden cost.</strong> By working with global tutors, the platform lets families review specialist profiles and current rates before planning a full 12-month preparation programme. This helps parents choose an option that fits their budget alongside local tuition comparisons.
            </p>

            <h2>Bursaries and Financial Support at Independent Grammar Schools</h2>
            <p>
              For families who are attracted to independent grammar schools but cannot afford the full fees, means-tested bursaries can make attendance possible. Some of the most prestigious independent grammar schools have made significant commitments to access:
            </p>
            <ul>
              <li><strong>King Edward's School Birmingham</strong> — one of the most progressive bursary programmes in the country. Approximately 25% of pupils receive some form of financial support, including full fee remission for the highest-achieving pupils from low-income households.</li>
              <li><strong>Manchester Grammar School</strong> — the Bursary Access Programme offers support across a range of income levels, with full bursaries available for families earning below a defined threshold.</li>
            </ul>
            <p>
              Bursaries at these schools are means-tested and typically require evidence of household income, savings, and assets. Applications are usually made at the same time as the school entrance exam application.
            </p>

            <div className="not-prose mt-8 mb-10 p-8 bg-[#1B3D5C] rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Make Grammar School Preparation Affordable</h3>
              <p className="text-white/80 mb-6">Compare expert 11 plus tutor profiles and current rates. Don't let local tuition rates stand between your child and a grammar school place.</p>
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

            <h2>Frequently Asked Questions</h2>
            <div className="space-y-8 mt-8 not-prose">
              {[
                { q: "Are grammar schools free?", a: "Yes — state grammar schools in England are completely free to attend. They are government-funded and cannot charge tuition fees. The main cost families encounter is 11 plus tutoring to prepare for the entrance exam." },
                { q: "Do you pay for grammar school?", a: "For state grammar schools: no tuition fees. For private (independent) grammar schools like Manchester Grammar School: fees of £12,000–£20,000/yr for day pupils." },
                { q: "What are the costs of sending a child to grammar school?", a: "No tuition fees for state grammars. Expect £200–£400/yr for uniform, plus optional trip and activity costs. The main pre-entry cost is 11 plus tutoring: typically £500–£4,000+ depending on tutor rate and preparation length." },
                { q: "Are private grammar schools worth it?", a: "Schools like Manchester Grammar School and King Edward's Birmingham have outstanding academic reputations. Whether fees are worth paying depends on individual circumstances. Both offer substantial means-tested bursaries — in some cases 100% fee remission." },
                { q: "Do grammar schools charge for extras?", a: "State grammar schools may charge for optional extras (trips, music tuition, sports tours) but these are not mandatory. Core education is free. Some grammars have more expensive uniform requirements than comprehensives." },
                { q: "What is the difference between a grammar school and a private school?", a: "State grammar schools are free and government-funded. Private (independent) schools charge tuition fees of £14,000–£45,000/yr. Some private schools are called 'grammar schools' historically but this is not a legal category — they are fully independent fee-paying schools." },
                { q: "How much does the 11 plus cost?", a: "Sitting the 11 plus exam is free. However, preparation costs money: local specialist tutors charge £35–£80/hr. KlaraLearn profiles show current rates for available tutors, so families can compare options before booking." }
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
                <li><Link href="/subjects/11-plus" className="text-primary font-medium hover:underline">→ Find an 11 Plus Tutor</Link></li>
                <li><Link href="/blog/how-much-does-tutoring-cost" className="text-primary font-medium hover:underline">→ How Much Does Private Tutoring Cost?</Link></li>
                <li><Link href="/blog/grammar-school-vs-comprehensive" className="text-primary font-medium hover:underline">→ Grammar School vs Comprehensive: Which Is Better?</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
