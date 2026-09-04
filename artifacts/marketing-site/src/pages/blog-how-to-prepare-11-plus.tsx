import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'wouter';
import { ChevronRight, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

export function BlogHowToPrepare11Plus() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Prepare for the 11 Plus: Ultimate Parent Guide (2025)",
    "author": {
      "@type": "Organization",
      "name": "KlaraLearn"
    },
    "datePublished": "2025-09-01",
    "dateModified": "2026-08-13",
    "description": "A step-by-step guide to 11 plus preparation — when to start, what to study, how to use practice papers, and how expert tutoring can make the difference."
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Prepare for the 11 Plus Year by Year",
    "description": "A year-by-year preparation timeline for the 11 plus exam.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Year 3 (age 7–8): Build foundations",
        "text": "Establish a reading habit, develop mental arithmetic fluency, and introduce logic puzzles as enjoyable activities. No formal 11 plus practice needed yet."
      },
      {
        "@type": "HowToStep",
        "name": "Year 4 (age 8–9): Introduce verbal reasoning",
        "text": "Begin 1–2 hours per week of structured verbal reasoning work using Bond or CGP introductory books. Continue building maths fluency and reading widely."
      },
      {
        "@type": "HowToStep",
        "name": "Year 5 (age 9–10): Begin timed practice",
        "text": "Increase to 3–4 hours per week. Introduce timed practice papers once accuracy is established. Identify weak areas across all four subjects."
      },
      {
        "@type": "HowToStep",
        "name": "Year 5 April–July: Intensive targeted work",
        "text": "Focus on the 3 weakest question types. Begin mock exams. Tutor-led sessions become especially valuable here for personalised gap analysis."
      },
      {
        "@type": "HowToStep",
        "name": "Year 6 September: Exam month",
        "text": "Keep practice light to avoid burnout. Ensure good sleep, regular meals, and a calm routine. The preparation is done — now it is about performing under controlled conditions."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does 11 plus preparation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most specialists recommend 12–18 months of structured preparation before the September Year 6 exam. This means starting in Year 4 or early Year 5. Consistent practice over a longer period is more effective and less stressful than intensive cramming in the months before the exam."
        }
      },
      {
        "@type": "Question",
        "name": "What year should my child start 11 plus preparation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Year 4 (age 8–9) for a gentle start building verbal reasoning concepts and reading habits. Year 5 (age 9–10) for more structured preparation including timed practice and focus on all four subjects. Starting in Year 6 is possible but significantly harder and more stressful."
        }
      },
      {
        "@type": "Question",
        "name": "How many hours per week of 11 plus preparation does my child need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Year 4: 1–2 hours per week. Year 5 (first half): 2–3 hours. Year 5 (second half): 3–4 hours plus a tutor session. The key principle is daily short sessions (15–20 min) rather than long weekend blocks. Consistency matters more than total hours."
        }
      },
      {
        "@type": "Question",
        "name": "Can my child prepare for the 11 plus without a tutor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — with dedicated parent involvement, quality practice books, and discipline. However, Sutton Trust research shows 63% of grammar school pupils received private tutoring. A tutor's advantage is personalised gap analysis and exam technique coaching that self-study cannot replicate efficiently."
        }
      },
      {
        "@type": "Question",
        "name": "What is the most important subject for the 11 plus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Verbal reasoning is often the subject children find hardest and the one that makes the biggest difference to the standardised score, because it is not taught in schools and requires specific training. Maths is also critical, particularly mental arithmetic speed. The relative importance varies by exam board and by school."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know which exam board my child's target school uses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check the admissions policy on the grammar school's website. GL Assessment is used in Kent, Essex, Hertfordshire, and Gloucestershire. CEM (Durham University) is used in Birmingham, Cheshire, and parts of Berkshire. Contact the school admissions team if you cannot find the information online."
        }
      },
      {
        "@type": "Question",
        "name": "What if my child fails the 11 plus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many outstanding comprehensive schools produce excellent GCSE and A-level results. A child who does not pass the 11 plus can still access strong secondary education and progress to top universities. It is also worth noting that appeals processes exist, and some areas have Stage 2 headteacher assessment for borderline pupils."
        }
      },
      {
        "@type": "Question",
        "name": "Is 11 plus tutoring worth the money?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For families targeting grammar schools, structured tutoring has a strong track record. The Education Endowment Foundation research shows tutoring adds on average 5 months of additional academic progress. For a grammar school place worth potentially £14,000/yr in saved independent school fees, compare current KlaraLearn tutor rates with your preparation budget when assessing the potential return."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="How to Prepare for the 11 Plus: Ultimate Parent Guide (2025) | KlaraLearn"
        description="A step-by-step guide to 11 plus preparation — when to start, what to study, how to use practice papers, and how expert tutoring can make the difference."
        path="/blog/how-to-prepare-for-11-plus"
        schema={[articleSchema, howToSchema, faqSchema]}
      />

      <article className="pt-20 pb-24">
        <header className="bg-slate-50 py-16 border-b mb-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8">
              <Link href="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900">How to Prepare</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight">
              How to Prepare for the 11 Plus: The Ultimate Parent's Guide
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
                Start 11 plus preparation in Year 4 or early Year 5 — at least 12 to 18 months before the September exam. Build core skills gradually (verbal reasoning, non-verbal reasoning, maths, English). Most children benefit from structured tuition alongside practice papers rather than self-study alone.
              </p>
            </motion.div>

            <p>
              Preparing for the 11 plus is a marathon, not a sprint. The families who approach it methodically — starting early, building skills in the right order, and using targeted resources rather than throwing everything at it — consistently produce better outcomes with far less stress. This guide gives you a complete preparation framework from Year 3 through to exam day.
            </p>

            <h2>When Should My Child Start 11 Plus Preparation?</h2>
            <p>
              The answer depends on your child's starting point, the schools you are targeting, and how much pressure you want your family to be under. Here is a realistic year-by-year guide:
            </p>

            <div className="not-prose space-y-4 my-8">
              {[
                {
                  year: "Year 3 (age 7–8)",
                  label: "Foundation Building",
                  color: "bg-slate-100 border-slate-300",
                  actions: [
                    "Establish a daily reading habit — any books your child loves",
                    "Daily mental arithmetic: times tables, addition/subtraction speed",
                    "Logic games and puzzles (board games, Sudoku, Mastermind) — no pressure",
                    "No formal 11 plus practice needed at this stage"
                  ]
                },
                {
                  year: "Year 4 (Sep, age 8–9)",
                  label: "Introduce VR Concepts",
                  color: "bg-blue-50 border-blue-200",
                  actions: [
                    "1–2 hours per week of structured verbal reasoning introduction",
                    "Use Bond 11+ or CGP introductory books — untimed, concept-focused",
                    "Continue reading habit; begin introducing non-fiction and varied genres",
                    "Maintain maths fluency: progress from times tables to fractions and decimals"
                  ]
                },
                {
                  year: "Year 5 (Sep–Mar, age 9–10)",
                  label: "Structured Preparation",
                  color: "bg-[#00A896]/10 border-[#00A896]/30",
                  actions: [
                    "3–4 hours per week across all four subjects",
                    "Begin timed practice papers once 70%+ accuracy is established per type",
                    "Identify the 3 weakest question type families",
                    "Consider starting tutor sessions for targeted gap filling"
                  ]
                },
                {
                  year: "Year 5 (Apr–Jul)",
                  label: "Intensive Targeted Work",
                  color: "bg-[#E05C2A]/10 border-[#E05C2A]/30",
                  actions: [
                    "Tutor-led intensive sessions focusing on weakest areas",
                    "First full mock exam (diagnostic)",
                    "Focus on exam technique: timing, skipping and returning, managing pressure",
                    "Do not neglect English — comprehension and vocabulary are often underestimated"
                  ]
                },
                {
                  year: "Year 6 (Sep, age 10–11)",
                  label: "Exam Month",
                  color: "bg-green-50 border-green-200",
                  actions: [
                    "Keep preparation light: 30-minute review sessions only",
                    "Ensure good sleep (9–10 hours), regular meals, and a calm routine",
                    "Final mock exam in August: use the results to reassure, not to cram",
                    "Exam day logistics: arrive early, bring water and a snack, stay calm"
                  ]
                }
              ].map((stage, i) => (
                <div key={i} className={`border rounded-xl p-5 ${stage.color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-slate-600">{stage.year}</span>
                    <span className="text-xs font-bold uppercase tracking-wide bg-white border px-2 py-1 rounded-full text-slate-700">{stage.label}</span>
                  </div>
                  <ul className="space-y-1">
                    {stage.actions.map((action, j) => (
                      <li key={j} className="text-slate-700 text-sm flex gap-2"><span className="text-[#00A896] mt-1">✓</span>{action}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2>What Does the 11 Plus Exam Cover?</h2>
            <p>
              The specific content varies by exam board and school, but here is what children should be prepared for across all four subjects:
            </p>
            <ul>
              <li>
                <strong>Verbal Reasoning:</strong> analogies, letter/number codes, antonyms, synonyms, anagrams, letter sequences, hidden words, sentence completion, logic puzzles. GL Assessment draws from 21 standard question type families. CEM integrates these into a broader English-style paper.
              </li>
              <li>
                <strong>Non-Verbal Reasoning:</strong> shape sequences, 3×3 matrices, odd-one-out, reflection and rotation, 3D nets, spatial reasoning. The most common area where children underestimate the need for preparation.
              </li>
              <li>
                <strong>Mathematics:</strong> all KS2 topics (number, fractions, decimals, percentages, ratio, proportion) plus basic algebra, speed/distance/time, angles and geometry, area and volume. Some schools test to Year 7 level. Mental arithmetic speed is critical — many maths questions require quick calculation without written working.
              </li>
              <li>
                <strong>English (some schools):</strong> reading comprehension, vocabulary, grammar, punctuation. Some schools include a short creative or extended writing task. English is not tested by all grammar schools — check your target school's admissions policy.
              </li>
            </ul>

            <h2>How to Prepare for the 11 Plus at Home</h2>
            <p>
              The most effective home preparation is structured but not overwhelming. Here is a practical daily and weekly programme:
            </p>
            <ul>
              <li><strong>Morning (before school, 15 min):</strong> Verbal reasoning practice — VR is best done when the mind is fresh. A single question type family (e.g. 15 letter code questions) done at pace.</li>
              <li><strong>Evening (after school, 20 min):</strong> Reading — non-fiction, newspaper articles (BBC Newsround, First News), historical fiction, anything that builds vocabulary and comprehension naturally.</li>
              <li><strong>Weekend (45 min session):</strong> Maths — practice questions covering the current topic of focus, from Bond or CGP books. Alternate weekly between maths topics rather than covering everything every week.</li>
              <li><strong>Daily habit — word-a-day:</strong> Parent texts a word (parents.com and Merriam-Webster both have word-a-day features); child uses it in a sentence at dinner. Builds vocabulary in an enjoyable, pressure-free way.</li>
              <li><strong>Mental maths:</strong> Times Tables Rockstars builds multiplication speed. Progress to percentage calculations and fraction manipulation as these are high-frequency in 11 plus maths papers.</li>
            </ul>

            <h2>Should My Child Have an 11 Plus Tutor?</h2>
            <p>
              This is the most common question parents ask, and the honest answer is: it depends on your child, your budget, and your target schools. The Sutton Trust research found that <strong>63% of children who passed grammar school entrance exams had received private tutoring</strong>. In highly competitive London and Kent grammar school areas, that proportion is likely higher still.
            </p>
            <p>
              The genuine advantages of a specialist 11 plus tutor are:
            </p>
            <ul>
              <li><strong>Personalised gap analysis</strong> — a tutor identifies exactly which question types your child is losing marks on, not just their overall score</li>
              <li><strong>GL vs CEM format expertise</strong> — the preparation approach differs significantly between exam boards; a tutor familiar with both can calibrate precisely</li>
              <li><strong>Accountability and motivation</strong> — children often work harder and more consistently when they know they have a session to prepare for</li>
              <li><strong>Exam technique coaching</strong> — time management, when to skip, how to use the multiple-choice format strategically</li>
            </ul>
            <p>
              At <strong>KlaraLearn</strong>, families can compare globally sourced tutor profiles with the £55–80/hr charged by local London agencies. Reviewing each tutor's current rate helps families choose professional support that fits their budget throughout the full 12–18 month preparation period.
            </p>

            <h2>Building an 11 Plus Study Timetable</h2>
            <p>
              Here is a sample weekly timetable for a child in Year 5 preparing for a grammar school in a GL Assessment area:
            </p>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1B3D5C] text-white">
                    <th className="text-left p-3 font-semibold">Day</th>
                    <th className="text-left p-3 font-semibold">Activity</th>
                    <th className="text-left p-3 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Monday", "Verbal Reasoning paper section + review wrong answers", "30 min"],
                    ["Tuesday", "Maths — target weak topic (fractions / percentages / algebra)", "25 min"],
                    ["Wednesday", "Reading non-fiction or varied fiction", "30 min"],
                    ["Thursday", "Non-Verbal Reasoning — sequences and matrices", "20 min"],
                    ["Friday", "English comprehension passage + vocabulary", "25 min"],
                    ["Saturday", "KlaraLearn tutor session", "60 min"],
                    ["Sunday", "Rest / free reading / board games — no formal study"],
                  ].map(([day, activity, duration], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 border-b border-slate-100 font-bold text-slate-800">{day}</td>
                      <td className="p-3 border-b border-slate-100 text-slate-700">{activity}</td>
                      <td className="p-3 border-b border-slate-100 text-slate-500">{duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Mock Exams: When, How Often, and Which Ones?</h2>
            <p>
              Full mock exams serve a different purpose from regular practice papers. A mock exam replicates the full experience — duration, format, pressure, and environment. Children who have sat a mock exam before the real thing are significantly less likely to be derailed by anxiety on exam day.
            </p>
            <ul>
              <li><strong>First mock: July of Year 5</strong> — diagnostic purpose. Where does your child stand? What are the biggest gaps? Use results to shape the remaining preparation.</li>
              <li><strong>Second mock: August of Year 6</strong> — final calibration. Use to reassure and identify any last areas to tighten up. Do not panic at a below-expectation score; practice scores routinely underestimate real exam performance.</li>
            </ul>
            <p>
              Mock exam providers include: Chukra (free online), Atom Learning (paid, with detailed analytics), 11Plus Guide, and local mock exam centres run by tuition agencies. Treating the mock seriously — travelling to a venue, following the same morning routine as exam day — significantly increases its value as a preparation tool.
            </p>

            <h2>Managing 11 Plus Stress and Your Child's Wellbeing</h2>
            <p>
              The 11 plus can be a stressful experience for the whole family. It is important to maintain perspective: a grammar school place is a wonderful outcome, but it is not the only route to an excellent secondary education. Many outstanding comprehensive schools — and outstanding children from those schools — go on to study at top universities and have exceptional careers.
            </p>
            <p>
              Practical wellbeing strategies during 11 plus preparation:
            </p>
            <ul>
              <li>Celebrate progress, not just results — a child who improves their VR score from 105 to 118 has achieved something remarkable regardless of whether they hit 121</li>
              <li>Keep hobbies going — sport, music, arts, and social activities are not luxuries; they sustain the mental energy children need to study effectively</li>
              <li>Have frank, age-appropriate conversations about the alternatives available locally</li>
              <li>KlaraLearn tutors are trained to be encouraging and to communicate progress clearly to parents — so families always know where their child stands</li>
            </ul>

            <h2>How Much Does 11 Plus Tutoring Cost?</h2>
            <p>
              Tutoring costs vary widely by provider type and location:
            </p>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1B3D5C] text-white">
                    <th className="text-left p-3 font-semibold">Provider Type</th>
                    <th className="text-left p-3 font-semibold">Typical Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Local independent tutor", "£35–£60/hr"],
                    ["London agency tutor", "£55–£90/hr"],
                    ["Group tuition (4–6 pupils)", "£10–£20 per pupil per session"],
                    ["Major tutoring platform (Tutorful, MyTutor)", "£25–£50/hr"],
                    ["KlaraLearn (global tutors, online)", "Current profile rates"],
                  ].map(([provider, rate], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 border-b border-slate-100 font-medium text-slate-800">{provider}</td>
                      <td className={`p-3 border-b border-slate-100 font-bold ${provider.includes("KlaraLearn") ? "text-[#00A896]" : "text-slate-700"}`}>{rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="not-prose mt-8 mb-10 p-8 bg-[#1B3D5C] rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Start Preparing Today</h3>
              <p className="text-white/80 mb-6">Compare current tutor profile rates. Diagnostic first session. GL and CEM specialists. Free trial lesson.</p>
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
                { q: "How long does 11 plus preparation take?", a: "Most specialists recommend 12–18 months of structured preparation before the September Year 6 exam. Starting in Year 4 and building gradually through Year 5 is more effective and less stressful than intensive cramming close to the exam." },
                { q: "What year should my child start?", a: "Year 4 (age 8–9) for a gentle introduction to verbal reasoning and reading. Year 5 (age 9–10) for structured timed practice across all subjects. Starting in Year 6 is possible but significantly harder and more stressful for the child." },
                { q: "How many hours per week does my child need?", a: "Year 4: 1–2 hours. Year 5 (first half): 2–3 hours. Year 5 (second half): 3–4 hours plus weekly tutor sessions. Consistency matters more than total hours — 15 minutes daily is more effective than 3 hours on Sunday." },
                { q: "Can my child prep without a tutor?", a: "Yes — with dedicated parent involvement, quality practice books, and discipline. However, 63% of grammar school pupils received tutoring (Sutton Trust). The main advantage of a tutor is personalised gap analysis and exam technique coaching." },
                { q: "What is the most important subject for the 11 plus?", a: "Verbal reasoning — because it is not taught in schools and requires specific training. Maths mental arithmetic speed is also critical. Non-verbal reasoning is often underestimated and requires dedicated visual practice." },
                { q: "How do I find out which exam board my school uses?", a: "Check the grammar school's admissions policy on their website. GL Assessment is used in Kent, Essex, Hertfordshire, Gloucestershire. CEM is used in Birmingham, Cheshire, parts of Berkshire. Contact admissions directly if unclear." },
                { q: "What if my child fails the 11 plus?", a: "Many outstanding comprehensive schools produce excellent GCSE and A-level results. A child who does not pass can still access strong secondary education and top universities. It is worth exploring the appeals process and any Stage 2 headteacher assessment available." },
                { q: "Is tutoring worth the money?", a: "The Education Endowment Foundation finds tutoring adds on average 5 months of additional academic progress. For a grammar school place worth £14,000/yr in independent school fees savings, compare the current KlaraLearn tutor rate and expected session frequency with your budget when assessing the potential ROI." }
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
                <li><Link href="/blog/what-is-the-11-plus" className="text-primary font-medium hover:underline">→ What Is the 11 Plus Exam?</Link></li>
                <li><Link href="/blog/11-plus-verbal-reasoning" className="text-primary font-medium hover:underline">→ Verbal & Non-Verbal Reasoning Explained</Link></li>
                <li><Link href="/blog/11-plus-practice-papers" className="text-primary font-medium hover:underline">→ Best 11 Plus Practice Papers</Link></li>
                <li><Link href="/blog/grammar-school-admissions" className="text-primary font-medium hover:underline">→ Grammar School Admissions: Complete Guide</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
