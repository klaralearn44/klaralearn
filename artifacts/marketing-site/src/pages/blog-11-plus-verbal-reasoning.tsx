import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'wouter';
import { ChevronRight, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

export function Blog11PlusVerbalReasoning() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "11 Plus Verbal & Non-Verbal Reasoning: Complete Parent Guide",
    "author": {
      "@type": "Organization",
      "name": "KlaraLearn"
    },
    "datePublished": "2025-09-01",
    "dateModified": "2026-08-13",
    "description": "Verbal reasoning and non-verbal reasoning are core 11 plus subjects. Understand what they test, see example question types, and discover how to help your child prepare."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is verbal reasoning in the 11 plus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Verbal reasoning in the 11 plus tests a child's ability to understand and reason with words. It includes question types such as word analogies, letter and number codes, antonyms, synonyms, sentence completion, anagrams, and logic puzzles. It is different from reading comprehension — it is a specific reasoning skill that can be trained."
        }
      },
      {
        "@type": "Question",
        "name": "What is non-verbal reasoning in the 11 plus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Non-verbal reasoning (also called abstract reasoning) tests pattern recognition and spatial thinking using shapes and diagrams rather than words. Question types include completing sequences, odd-one-out, matrices (3×3 grids), reflection and rotation, and nets of 3D shapes."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my child's school uses GL Assessment or CEM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check the admissions policy published on the individual grammar school's website. GL Assessment is used in Kent, Essex, Hertfordshire, Gloucestershire, and most Berkshire schools. CEM (Durham University) is used in Birmingham, Cheshire, Wiltshire, and parts of Berkshire. If in doubt, contact the school's admissions department directly."
        }
      },
      {
        "@type": "Question",
        "name": "What is a good verbal reasoning score for the 11 plus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GL Assessment standardised scores range from approximately 69 to 141, with a mean of 100. A score of 121 or above on the verbal reasoning paper is typically needed for competitive grammar schools. Age standardisation means a child born in July receives a small uplift compared to a child born in September of the same school year."
        }
      },
      {
        "@type": "Question",
        "name": "How can I help my child improve verbal reasoning at home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most effective approach is 15 minutes of daily verbal reasoning practice rather than long weekend sessions, combined with wide reading (especially non-fiction and varied genres), word games like Scrabble, and targeted focus on specific weak question types. A tutor can diagnose precisely which question types to prioritise."
        }
      },
      {
        "@type": "Question",
        "name": "What age should my child start verbal reasoning practice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Begin introducing verbal reasoning concepts in Year 4 (age 8–9), starting with untimed practice to build understanding. Introduce timed conditions from Year 5. Most children benefit from 12–18 months of structured practice before the September Year 6 exam."
        }
      },
      {
        "@type": "Question",
        "name": "Is verbal reasoning taught in primary schools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No — verbal reasoning is not part of the standard primary school curriculum. This is why many children (and parents) find it unfamiliar at first. However, it is a learnable skill. With structured practice using the 21 standard GL question types, most children improve significantly within a few months."
        }
      },
      {
        "@type": "Question",
        "name": "How many verbal reasoning question types are there in the 11 plus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GL Assessment verbal reasoning papers draw from 21 standard question type families, though not all appear in every paper. The most common include word analogies, letter codes, number codes, antonyms, synonyms, anagrams, hidden words, letter sequences, and sentence completion. CEM uses a similar range but integrates them differently."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="11 Plus Verbal & Non-Verbal Reasoning: Complete Parent Guide | KlaraLearn"
        description="Verbal reasoning and non-verbal reasoning are core 11 plus subjects. Understand what they test, see example question types, and discover how to help your child prepare."
        path="/blog/11-plus-verbal-reasoning"
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
              <span className="text-slate-900">Verbal & Non-Verbal Reasoning</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight">
              11 Plus Verbal &amp; Non-Verbal Reasoning: What Parents Need to Know
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
                Verbal reasoning tests a child's ability to understand and reason with words — analogies, codes, antonyms, and logic puzzles. Non-verbal reasoning tests pattern recognition and spatial thinking using shapes and sequences. Both are core 11 plus subjects and are tested by both GL Assessment and CEM-style exams.
              </p>
            </motion.div>

            <p>
              When parents first encounter the terms "verbal reasoning" and "non-verbal reasoning," they often assume these are simply reading and maths under different names. They are not. Both are specific reasoning disciplines that sit outside the standard primary school curriculum — which is why preparation is so important. The good news is that both are genuinely learnable with the right approach.
            </p>

            <h2>What Is Verbal Reasoning?</h2>
            <p>
              Verbal reasoning tests a child's ability to identify patterns and relationships in language, reason with words, and apply logical rules to linguistic problems. It is not a test of general knowledge or wide vocabulary (though a good vocabulary helps). It is a test of structured, rule-based thinking applied to words.
            </p>
            <p>
              GL Assessment verbal reasoning papers draw from 21 standard question type families. Here are the five most commonly encountered, with example formats:
            </p>

            <div className="not-prose space-y-4 my-8">
              {[
                {
                  type: "1. Word Analogies",
                  format: 'cap : hat :: sock : ____ (answer: boot / shoe)',
                  explain: "Find the relationship between the first pair, then apply it to the second pair. Tests logical pattern recognition in language."
                },
                {
                  type: "2. Letter / Number Codes",
                  format: 'If A=1, B=2, C=3... what does the code 4-1-2 spell? (answer: DAB)',
                  explain: "Apply a consistent mapping rule between letters and numbers. Tests systematic thinking. A common mistake: rushing the mapping without double-checking every letter."
                },
                {
                  type: "3. Antonyms and Synonyms",
                  format: 'Choose the word most OPPOSITE in meaning to ANCIENT: modern / large / dusty / old',
                  explain: "Tests vocabulary range and precision. A strong reading habit across varied genres is the best long-term preparation."
                },
                {
                  type: "4. Sentence Completion",
                  format: '"The explorer was _____ by the size of the mountain." (daunted / pleased / bored / irritated)',
                  explain: "Tests reading comprehension and contextual reasoning. Children need to understand nuance and connotation, not just meaning."
                },
                {
                  type: "5. Logic and Sequencing",
                  format: 'AB, CD, EF, GH, ____ (answer: IJ)',
                  explain: "Letter and number sequences requiring identification of the underlying pattern. Often combines with other types for added complexity."
                }
              ].map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-[#1B3D5C] text-white px-4 py-2 text-sm font-bold">{item.type}</div>
                  <div className="p-4 bg-slate-50">
                    <code className="text-[#E05C2A] font-mono text-sm bg-white border border-slate-200 px-3 py-2 rounded block mb-3">{item.format}</code>
                    <p className="text-slate-600 text-sm">{item.explain}</p>
                  </div>
                </div>
              ))}
            </div>

            <p>
              A critical point for parents: verbal reasoning is <em>not</em> the same as reading comprehension. A child can be an advanced reader and still struggle with verbal reasoning question types they have never encountered. Conversely, a child who is not a bookworm can become very proficient at verbal reasoning with targeted practice. It is a trainable skill.
            </p>

            <h2>What Is Non-Verbal Reasoning?</h2>
            <p>
              Non-verbal reasoning (NVR) tests pattern recognition, spatial awareness, and abstract thinking using shapes, diagrams, and visual sequences rather than words or numbers. It is sometimes called "abstract reasoning." Because it does not rely on reading ability or English language proficiency, it is considered one of the fairest components of the 11 plus — children from all linguistic backgrounds start on more equal footing.
            </p>
            <p>
              The five main NVR question type families are:
            </p>

            <div className="not-prose space-y-4 my-8">
              {[
                {
                  type: "1. Complete the Sequence",
                  explain: "A series of shapes is shown with one missing. The child must identify the pattern (rotation, size change, shading, number of elements) and select the correct next shape. The sequence can change in multiple ways simultaneously."
                },
                {
                  type: "2. Odd One Out",
                  explain: "Five shapes are shown; one does not belong to the group. Children must identify what feature (number of sides, shading, symmetry, line direction) all others share — and which shape breaks the rule."
                },
                {
                  type: "3. Matrices (3×3 Grids)",
                  explain: "A 3×3 grid of shapes with one missing corner or cell. Changes occur consistently across rows and down columns. Children must decode both rules simultaneously — often the most cognitively demanding NVR type."
                },
                {
                  type: "4. Reflection and Rotation",
                  explain: "Shapes are reflected horizontally or vertically, or rotated by 90°/180°. Children must identify the correctly transformed version from multiple options. Common mistake: confusing reflection with rotation."
                },
                {
                  type: "5. Nets of 3D Shapes",
                  explain: "A flat unfolded shape (net) is shown; children must identify which 3D shape it would make when folded. Requires strong spatial visualisation. Becomes significantly easier with practice using real physical nets."
                }
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-[#00A896] pl-4 py-2">
                  <h4 className="font-bold text-secondary text-base mb-1">{item.type}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.explain}</p>
                </div>
              ))}
            </div>

            <p>
              NVR is often the subject parents find hardest to help with at home, because the visual nature of the questions does not translate well to verbal explanation. This is one of the areas where a tutor who can share a screen and work through questions interactively makes the biggest difference.
            </p>

            <h2>GL Assessment vs CEM: What's the Difference?</h2>
            <p>
              The exam format varies significantly depending on which board your target grammar school uses. Here is a direct comparison:
            </p>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1B3D5C] text-white">
                    <th className="text-left p-3 font-semibold">Feature</th>
                    <th className="text-left p-3 font-semibold">GL Assessment</th>
                    <th className="text-left p-3 font-semibold">CEM (Durham University)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Used in", "Kent, Essex, Buckinghamshire (some), Gloucestershire, Hertfordshire, Berkshire", "Birmingham, Cheshire, Wiltshire, parts of Berkshire"],
                    ["Verbal Reasoning format", "Dedicated 50-min paper with standard question types", "Integrated into English paper; varies year to year"],
                    ["Non-Verbal Reasoning", "Dedicated NVR paper; consistent types", "Shorter section; less emphasis"],
                    ["Predictability", "High — consistent year to year", "Low — designed to resist tutoring"],
                    ["Best preparation", "GL past papers + Bond 11+ books + specific type drilling", "Mixed practice + wide reading + speed drills + maths fluency"],
                    ["Marking", "Multiple choice (scanned)", "Multiple choice (scanned)"],
                    ["Age standardisation", "Yes", "Yes"],
                  ].map(([feature, gl, cem], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 border-b border-slate-100 font-medium text-slate-800">{feature}</td>
                      <td className="p-3 border-b border-slate-100 text-slate-700">{gl}</td>
                      <td className="p-3 border-b border-slate-100 text-slate-600">{cem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>How Are Verbal Reasoning Tests Scored?</h2>
            <p>
              Raw scores (the number of questions answered correctly) are converted to <strong>standardised scores</strong> that account for a child's exact age in months at the time of the exam. This age standardisation is important: a child born in August (the youngest in their school year) receives a small uplift in their standardised score compared to a child born in September (the oldest).
            </p>
            <p>
              GL Assessment standardised scores range from approximately 69 (lowest) to 141 (highest), with a mean of 100 and a standard deviation of 15. To put this in perspective:
            </p>
            <ul>
              <li>Score of 100 = average for that age</li>
              <li>Score of 115 = one standard deviation above average (top ~16%)</li>
              <li>Score of 121+ = typically qualifies for most grammar schools</li>
              <li>Score of 125+ = required for super-selective schools like QE Boys Barnet</li>
            </ul>
            <p>
              Each grammar school publishes its minimum qualifying score or historical cut-off ranges. Parents should check these annually, as they vary with the cohort.
            </p>

            <h2>Common Mistakes Children Make in Verbal Reasoning</h2>
            <p>
              In our experience across thousands of 11 plus preparation sessions, five mistakes come up again and again:
            </p>

            <div className="not-prose space-y-3 my-6">
              {[
                {
                  num: "1",
                  mistake: "Rushing codes without checking the mapping",
                  tip: "Always write down the code key for each question. Rushing a code and getting the mapping wrong wastes time recovering from an error."
                },
                {
                  num: "2",
                  mistake: "Misreading analogy direction",
                  tip: 'In "A is to B as C is to D," children sometimes apply the relationship backwards. Teach your child to state the relationship in words before choosing an answer.'
                },
                {
                  num: "3",
                  mistake: "Spending too long on hard questions",
                  tip: "The 11 plus rewards breadth over depth. Skipping a hard question, answering all other questions, and returning at the end is consistently more effective than spending 4 minutes on one problem."
                },
                {
                  num: "4",
                  mistake: "Not managing time",
                  tip: "Most children run out of time on verbal reasoning. The solution is timed practice from Year 5, learning to work at exam pace rather than accuracy-only pace."
                },
                {
                  num: "5",
                  mistake: "Second-guessing correct first instincts",
                  tip: "Research consistently shows that first instinct answers are more often correct than changed answers, especially in analogies and sequences. Teach children to change an answer only if they can identify a specific reason it is wrong."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-lg border">
                  <span className="bg-[#E05C2A] text-white text-sm font-bold w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center">{item.num}</span>
                  <div>
                    <p className="font-semibold text-secondary text-sm mb-1">{item.mistake}</p>
                    <p className="text-slate-600 text-sm">{item.tip}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2>How to Improve Verbal Reasoning Skills at Home</h2>
            <p>
              The most effective home preparation programme for verbal reasoning combines daily short sessions with rich language exposure:
            </p>
            <ul>
              <li><strong>15 minutes of daily practice</strong> (not 2-hour weekend sessions) — consistent exposure builds pattern recognition far better than infrequent cramming</li>
              <li><strong>Wide reading</strong> — non-fiction, historical fiction, newspapers (BBC Newsround, First News), and magazines. Vocabulary is the foundation of verbal reasoning, and reading is the most natural way to build it</li>
              <li><strong>Word games</strong> — Scrabble, Bananagrams, and (for older children) cryptic crosswords are enjoyable ways to engage with words as puzzles</li>
              <li><strong>Timed conditions from Year 5 Summer term</strong> — start practising with a countdown timer so exam pace becomes natural</li>
              <li><strong>Target weak question types specifically</strong> — rather than doing random mixed papers, identify the 3–4 question types where your child consistently loses marks and drill those</li>
            </ul>

            <h2>How a KlaraLearn Tutor Can Help</h2>
            <p>
              A specialist 11 plus tutor from KlaraLearn will begin with a diagnostic session that identifies exactly which verbal and non-verbal reasoning question types your child finds difficult. Rather than working through everything systematically from scratch, they create a personalised programme targeting the areas where improvement will have the most impact on the standardised score.
            </p>
            <p>
              Our tutors are trained in both GL Assessment and CEM formats, understand the specific requirements of grammar schools in different regions, and use interactive online whiteboards to work through visual NVR questions in real-time. Sessions start from £15 per hour. Every new family gets a free trial lesson.
            </p>

            <div className="not-prose mt-8 mb-10 p-8 bg-[#1B3D5C] rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Expert 11 Plus Verbal Reasoning Tutors</h3>
              <p className="text-white/80 mb-6">Diagnostic first session · GL and CEM formats · from £15/hr</p>
              <a
                href="https://app.klaralearn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white font-bold py-3 px-8 rounded-full transition-colors no-underline"
              >
                Find a Verbal Reasoning Tutor
              </a>
            </div>

            <hr className="my-12" />

            <h2>Frequently Asked Questions</h2>
            <div className="space-y-8 mt-8 not-prose">
              {[
                { q: "What is verbal reasoning in the 11 plus?", a: "Verbal reasoning tests a child's ability to understand and reason with words — analogies, letter/number codes, antonyms, synonyms, sentence completion, and logic puzzles. It is not the same as reading comprehension. It is a learnable reasoning skill that children can improve dramatically with targeted practice." },
                { q: "What is non-verbal reasoning?", a: "Non-verbal reasoning (NVR) tests pattern recognition and spatial thinking using shapes and diagrams rather than words. Types include sequences, matrices, odd-one-out, reflection, rotation, and 3D nets. It is sometimes called abstract reasoning and is considered one of the fairest 11 plus components." },
                { q: "How do I know if my child's school uses GL or CEM?", a: "Check the admissions policy on the grammar school's website. GL Assessment is used in Kent, Essex, Hertfordshire, and Gloucestershire. CEM is used in Birmingham, Cheshire, and parts of Berkshire. If unclear, contact the school admissions team directly." },
                { q: "What is a good verbal reasoning score for the 11 plus?", a: "GL Assessment verbal reasoning scores are standardised with a mean of 100 and SD of 15. A score of 121 or above is typically needed for competitive grammar schools. Age standardisation means children born in summer months receive a small uplift." },
                { q: "How can I help my child at home?", a: "15 minutes of daily verbal reasoning practice, wide reading across varied genres, word games (Scrabble, Bananagrams), and targeted drilling of specific weak question types. Consistency is more important than intensity." },
                { q: "What age should my child start VR practice?", a: "Begin introducing verbal reasoning concepts in Year 4 (age 8–9) without time pressure. Introduce timed conditions from Year 5. Most children benefit from 12–18 months of structured practice before September of Year 6." },
                { q: "Is verbal reasoning taught in schools?", a: "No — verbal reasoning is not part of the standard primary school curriculum. This is why many children are unfamiliar with it at first, and why preparation is so important. With structured practice, most children improve significantly." },
                { q: "How many VR question types are there in the 11+?", a: "GL Assessment verbal reasoning draws from 21 standard question type families. Not all appear in every paper, but the most common are: word analogies, letter codes, number codes, antonyms, synonyms, anagrams, hidden words, letter sequences, and sentence completion." }
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
                <li><Link href="/blog/what-is-the-11-plus" className="text-primary font-medium hover:underline">→ What Is the 11 Plus Exam? Complete Parent Guide</Link></li>
                <li><Link href="/blog/11-plus-practice-papers" className="text-primary font-medium hover:underline">→ Best 11 Plus Practice Papers</Link></li>
                <li><Link href="/blog/how-to-prepare-for-11-plus" className="text-primary font-medium hover:underline">→ How to Prepare for the 11 Plus: Ultimate Guide</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
