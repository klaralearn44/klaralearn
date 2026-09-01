import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'wouter';
import { ChevronRight, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

export function BlogGrammarSchoolAdmissions() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Grammar School Admissions: How the Process Works",
    "author": {
      "@type": "Organization",
      "name": "KlaraLearn"
    },
    "datePublished": "2025-09-01",
    "dateModified": "2026-08-13",
    "description": "A complete guide to grammar school admissions — how to apply, 11 plus exam details, key deadlines, Stage 2 assessments, and how to give your child the best chance."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I apply for a grammar school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "First, register your child for the 11 plus exam in the spring or early summer of Year 6 (registration is not automatic). After the exam in September, submit a Common Application Form (CAF) to your local authority by October 31st, listing your preferred schools in order. Offers are made on March 1st (National Offer Day)."
        }
      },
      {
        "@type": "Question",
        "name": "When is the 11 plus exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 11 plus is sat in September of Year 6, typically in the second or third week of the autumn term. Registration usually opens in April–June of that year. Results are sent to families in October or November."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Common Application Form for grammar school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Common Application Form (CAF) is the standard secondary school application form submitted to your local authority. For grammar school, you must have already sat and qualified on the 11 plus before the school can consider your application. The deadline is October 31st of Year 6. You can list up to 6 schools in preference order."
        }
      },
      {
        "@type": "Question",
        "name": "Can my child appeal a grammar school rejection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All parents have the right to appeal a grammar school rejection. The appeal is heard by an independent panel. To succeed, you typically need to demonstrate either that the admissions process was incorrectly applied, or that the school's case for refusal is outweighed by the prejudice to your child of not getting a place. Appeals are heard January–March."
        }
      },
      {
        "@type": "Question",
        "name": "Can my child apply to grammar schools outside our county?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. There is no rule preventing out-of-area applications. However, most grammar schools prioritise local applicants once places are oversubscribed — after applying the minimum qualifying score requirement. Children from Kent families regularly apply to London grammars, and vice versa."
        }
      },
      {
        "@type": "Question",
        "name": "What is a 'super selective' grammar school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Super-selective grammar schools effectively select only the very highest-scoring children nationally — roughly the top 5% of ability rather than the top 25%. Schools like QE Boys in Barnet and Henrietta Barnett receive 1,500–2,000+ applications for 100–170 places. These require standardised scores of 121–125+ and often have long waiting lists."
        }
      },
      {
        "@type": "Question",
        "name": "Do grammar schools check catchment area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Grammar schools use catchment areas as a secondary criterion after the 11 plus qualifying score. For most grammar schools, all qualified applicants are ranked equally (with distance from home to school as a tiebreaker). For super-selective schools, all qualifying children compete equally regardless of distance — making some London grammars genuinely national competitions."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="Grammar School Admissions: How the Process Works | KlaraLearn"
        description="A complete guide to grammar school admissions — how to apply, 11 plus exam details, key deadlines, Stage 2 assessments, and how to give your child the best chance."
        path="/blog/grammar-school-admissions"
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
              <span className="text-slate-900">Grammar School Admissions</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight">
              Grammar School Admissions: A Complete Parent's Guide
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
                To apply for a grammar school place in England, children must sit the 11 plus entrance exam (usually in September of Year 6), achieve the school's minimum qualifying score, and submit a Common Application Form (CAF) to their local authority by October 31st. Results are received in October; national offers are made on 1st March.
              </p>
            </motion.div>

            <p>
              Grammar school admissions in England is a multi-stage process with strict deadlines. Missing any step — particularly the 11 plus registration deadline — can mean losing the chance entirely for that year. This guide walks through the full process, from deciding to apply all the way through to the appeals procedure.
            </p>

            <h2>The Grammar School Admissions Timeline</h2>

            <div className="not-prose space-y-3 my-8">
              {[
                { month: "April–June (Year 6)", event: "Register for the 11 plus exam", detail: "Registration is not automatic — parents must actively register their child. Check each target school's website for registration deadlines, as they vary." },
                { month: "September (Year 6)", event: "11 plus exam day", detail: "Papers are typically sat in the second or third week of term. Children may sit papers on a single day or across two sessions." },
                { month: "October (Year 6)", event: "Results issued", detail: "Families receive standardised scores and are notified whether their child has reached the qualifying threshold for each school." },
                { month: "October 31st (Year 6)", event: "Common Application Form (CAF) deadline", detail: "Submit your CAF to your local authority listing up to 6 secondary school preferences in order. Grammar school and comprehensive preferences can be mixed." },
                { month: "January–February", event: "Possible Stage 2 assessment", detail: "Some schools (notably in Kent) use a Stage 2 headteacher assessment for borderline pupils before making final decisions." },
                { month: "March 1st", event: "National Offer Day", detail: "All families receive their secondary school offer simultaneously. Offers must be accepted or declined within 14 days." },
                { month: "March–April", event: "Appeals", detail: "Families who did not receive their preferred grammar school place can submit an appeal. Appeals are heard by an independent panel." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-lg border">
                  <div className="text-xs font-bold text-[#00A896] bg-[#00A896]/10 px-2 py-1 rounded h-fit flex-shrink-0 whitespace-nowrap min-w-[120px] text-center">{item.month}</div>
                  <div>
                    <p className="font-bold text-secondary text-sm">{item.event}</p>
                    <p className="text-slate-600 text-sm mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>How the 11 Plus Exam Works in the Admissions Process</h2>
            <p>
              The 11 plus is not simply a pass/fail test. Children receive a standardised score (typically on a scale of 69–141 for GL Assessment), which is then compared to the school's minimum qualifying score (MQS) for that year. Only children who meet or exceed the MQS are eligible for a place.
            </p>
            <p>
              For oversubscribed grammar schools (which most competitive ones are), meeting the MQS does not guarantee a place. Schools then rank qualifying applicants using additional criteria — most commonly distance from home to school, with siblings currently attending the school often receiving priority.
            </p>

            <h2>Which Grammar Schools Can My Child Apply For?</h2>
            <p>
              There is no national cap on the number of grammar schools a child can apply to. Children can apply to multiple schools in different local education authorities (LEAs) simultaneously. Common strategies include:
            </p>
            <ul>
              <li><strong>Local grammar schools</strong> — within the child's county or neighbouring county. Distance from home to school matters for oversubscribed grammars.</li>
              <li><strong>Out-of-area grammars</strong> — Kent families frequently apply to London grammars. London families apply to Kent schools. Legal and common.</li>
              <li><strong>Super-selective schools</strong> (e.g. QE Boys Barnet, Henrietta Barnett) — these require very high scores (121–125+) and attract applicants from across the country. Distance is essentially irrelevant as a tiebreaker because so few children achieve the required score.</li>
              <li><strong>Partially selective grammars</strong> — some Hertfordshire schools, for example, reserve only part of their intake for grammar admission. These are less competitive than fully selective schools.</li>
            </ul>

            <h2>What Is Stage 2 of Grammar School Admissions?</h2>
            <p>
              Stage 2 is a headteacher assessment process used primarily in Kent for pupils who score in the "borderline band" — close to the qualifying threshold but not clearly above it. It is also used in some other grammar schools.
            </p>
            <p>
              Stage 2 considers information that is not captured by the standardised exam score:
            </p>
            <ul>
              <li>Primary school reports and teacher recommendations</li>
              <li>CAT4 (Cognitive Abilities Test 4) scores, if the primary school administers them</li>
              <li>Evidence of academic potential that exam conditions may not have reflected</li>
            </ul>
            <p>
              Stage 2 is controversial — critics argue it introduces subjectivity and disadvantages children from schools that do not administer CAT4 tests. Legally, it is permitted provided the school's admissions policy clearly describes the process. Inclusion in Stage 2 does not guarantee qualification.
            </p>

            <h2>How to Improve Your Child's Chances</h2>
            <p>
              The single most impactful action is early, targeted preparation — starting at least 12 months before the September exam. Beyond preparation quality, several practical factors improve the overall admissions outcome:
            </p>
            <ul>
              <li><strong>Use a tutor experienced with the specific exam format</strong> — GL Assessment preparation differs significantly from CEM preparation. A tutor familiar with your target school's exact format is more effective than a generic 11 plus tutor.</li>
              <li><strong>Sit full mock exams</strong> — at least two before exam day. Children who have experienced full mock conditions are less likely to be derailed by exam-day anxiety.</li>
              <li><strong>Apply to 2–3 grammar schools</strong> — different schools have different minimum qualifying scores and varying levels of competition. Casting a wider net increases the probability of at least one offer.</li>
              <li><strong>Ensure a positive primary school report</strong> — particularly important for Stage 2 assessment. Maintain good engagement with the primary school throughout Year 5 and 6.</li>
              <li><strong>Understand the admissions criteria precisely</strong> — some schools give priority to siblings, or to children in particular faith categories, before applying distance as a tiebreaker. Read each school's admissions policy carefully.</li>
            </ul>

            <h2>Independent School Applications: A Separate Process</h2>
            <p>
              Independent (private) schools that use selective admissions — sometimes loosely called "grammar schools" in common usage but technically independent — run entirely separate admissions processes. They set their own entrance exams (often the ISEB Common Pre-Test, or their own bespoke papers), have their own deadlines (often earlier than the state grammar process), and charge tuition fees.
            </p>
            <p>
              Examples include Manchester Grammar School, King Edward's School Birmingham, and Latymer Upper London. These schools also typically offer means-tested bursaries covering up to 100% of fees for high-achieving pupils from lower-income families.
            </p>

            <div className="not-prose mt-8 mb-10 p-8 bg-[#1B3D5C] rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Start Grammar School Preparation Today</h3>
              <p className="text-white/80 mb-6">Expert 11 plus tutors familiar with GL Assessment and CEM formats. Compare current profile rates. Free trial lesson.</p>
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
                { q: "How do I apply for a grammar school?", a: "Register your child for the 11 plus in spring/summer of Year 6 (not automatic). After September's exam, submit a Common Application Form to your local authority by October 31st listing preferred schools. Offers arrive March 1st." },
                { q: "When is the 11 plus exam?", a: "September of Year 6, typically in the second or third week of term. Registration usually opens April–June. Missing the registration deadline means missing that year's exam." },
                { q: "What is the Common Application Form?", a: "The CAF is the standard secondary school application submitted to your local authority. You list up to 6 schools in preference order. For grammar school consideration, your child must have already achieved the qualifying score. Deadline: October 31st." },
                { q: "Can my child appeal a grammar school rejection?", a: "Yes. All parents can appeal. To succeed, you typically need to show the admissions process was incorrectly applied, or that the prejudice to your child outweighs the school's case for refusal. Appeals are heard January–March by an independent panel." },
                { q: "Can my child apply to grammar schools outside our area?", a: "Yes — there is no rule preventing this. Distance from home to school is typically a tiebreaker after qualifying score, so out-of-area applicants may be ranked lower than local applicants for oversubscribed schools." },
                { q: "What is a 'super selective' grammar school?", a: "Super-selective grammars admit only the very top scorers — effectively the top 5% nationally. Schools like QE Boys Barnet and Henrietta Barnett receive 1,500–2,000+ applications for 100–170 places. Scores of 121–125+ are typically needed." },
                { q: "Do grammar schools check catchment area?", a: "Grammar schools use catchment area as a secondary criterion after the qualifying score. For super-selective schools, all qualifying children compete equally regardless of distance. For standard grammars, distance from home to school is typically the tiebreaker for oversubscribed places." }
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
                <li><Link href="/blog/what-is-a-grammar-school" className="text-primary font-medium hover:underline">→ What Is a Grammar School?</Link></li>
                <li><Link href="/blog/how-to-prepare-for-11-plus" className="text-primary font-medium hover:underline">→ How to Prepare for the 11 Plus</Link></li>
                <li><Link href="/blog/best-grammar-schools-uk" className="text-primary font-medium hover:underline">→ Best Grammar Schools in England</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
