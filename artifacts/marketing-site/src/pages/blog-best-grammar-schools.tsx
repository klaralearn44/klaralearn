import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'wouter';
import { ChevronRight, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

export function BlogBestGrammarSchools() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Grammar Schools in England: Top Schools by Region",
    "author": {
      "@type": "Organization",
      "name": "KlaraLearn"
    },
    "datePublished": "2025-09-01",
    "dateModified": "2026-08-13",
    "description": "Discover the top grammar schools in England by county — London, Kent, Buckinghamshire, Lincolnshire, and the West Midlands. Includes exam type and entry requirements."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best grammar school in England?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By academic results and competition for places, Queen Elizabeth's School (Boys) in Barnet and The Henrietta Barnett School in Barnet are consistently considered among the best state grammar schools in England. Both are super-selective and receive 1,500–2,000+ applications for fewer than 170 places."
        }
      },
      {
        "@type": "Question",
        "name": "What score do I need for QE Boys?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Queen Elizabeth's School (Boys) in Barnet is among the most competitive grammar schools in England. Applicants typically need a GL Assessment standardised score of 121 or above to be considered for a place. In practice, most successful applicants score significantly higher. The school receives over 2,000 applications for 168 places."
        }
      },
      {
        "@type": "Question",
        "name": "Are grammar schools in London more competitive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — London grammar schools are among the most competitive in England due to high population density, strong parent aspirations, and a culture of intensive 11 plus preparation. Super-selective London grammars like QE Boys and Henrietta Barnett attract applicants from across the country."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a super-selective and a grammar school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard grammar schools admit approximately the top 25% of ability in their area. Super-selective grammar schools admit only the very top scorers — effectively the top 5% nationally. Schools like QE Boys Barnet and Henrietta Barnett receive thousands of applications and accept fewer than 200 pupils."
        }
      },
      {
        "@type": "Question",
        "name": "Do grammar schools have sixth forms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most state grammar schools in England have sixth forms offering A-levels, and some also offer IB (International Baccalaureate). Sixth forms at grammar schools typically accept only their own pupils who meet grade requirements, though some admit external applicants from comprehensives."
        }
      },
      {
        "@type": "Question",
        "name": "Can I apply to grammar schools outside my county?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — there is no rule preventing out-of-county applications. You must sit the 11 plus for each school separately (they may use different exam providers or different papers). Distance from home to school is typically used as a tiebreaker for oversubscribed standard grammars. For super-selectives, distance is rarely a factor because so few children qualify."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="Best Grammar Schools in England: Top Schools by Region | KlaraLearn"
        description="Discover the top grammar schools in England by county — London, Kent, Buckinghamshire, Lincolnshire, and the West Midlands. Includes exam type and entry requirements."
        path="/blog/best-grammar-schools-uk"
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
              <span className="text-slate-900">Best Grammar Schools</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight">
              Best Grammar Schools in England: A Regional Guide
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
                The top-ranked grammar schools in England include Queen Elizabeth's School (Boys) in Barnet, The Henrietta Barnett School in Barnet, Tiffin School and Tiffin Girls' School in Kingston, Wallington High School for Girls, and St Olave's in Bromley. Competition is extremely high — QE Boys receives over 2,000 applications for 168 places.
              </p>
            </motion.div>

            <p>
              <em>Important note: school rankings, entry requirements, and competition levels change year to year. The information below is correct as of 2025 but parents should always verify current admissions information directly with each school before applying.</em>
            </p>

            <p>
              England's 163 state grammar schools are concentrated in specific counties and London outer boroughs. The most competitive schools attract applications from across the country. This guide covers the top schools by region, including what exam board is used and roughly how competitive each area is.
            </p>

            <h2>London and Outer London Grammar Schools</h2>
            <p>
              London's grammar schools are in the outer boroughs — not Inner London, which is fully comprehensive. The schools in Barnet, Kingston, Sutton, and Bromley are among the most competitive in England. Here is a selection of the most prominent:
            </p>

            <div className="not-prose space-y-4 my-8">
              {[
                {
                  name: "Queen Elizabeth's School (Boys)",
                  location: "Barnet",
                  type: "Boys' Grammar · Super-Selective",
                  exam: "GL Assessment",
                  notes: "Consistently top of national league tables. 2,000+ applicants for 168 places. Score of 121+ required; in practice, most successful applicants score 125+."
                },
                {
                  name: "The Henrietta Barnett School",
                  location: "Barnet",
                  type: "Girls' Grammar · Super-Selective",
                  exam: "GL Assessment",
                  notes: "One of the highest-performing girls' schools in England. 1,800+ applicants for 93 places. Extremely competitive — children prepare for years specifically for this school."
                },
                {
                  name: "Tiffin School",
                  location: "Kingston upon Thames",
                  type: "Boys' Grammar · Super-Selective",
                  exam: "GL Assessment",
                  notes: "Excellent academic reputation in Kingston. Draws applicants from across South London and Surrey. Highly competitive."
                },
                {
                  name: "Tiffin Girls' School",
                  location: "Kingston upon Thames",
                  type: "Girls' Grammar",
                  exam: "GL Assessment",
                  notes: "Among the top girls' state schools in England. Strong sixth form with outstanding A-level results."
                },
                {
                  name: "Wallington High School for Girls",
                  location: "Sutton",
                  type: "Girls' Grammar",
                  exam: "GL Assessment",
                  notes: "Part of the Sutton grammar school cluster alongside Sutton Grammar and Wilson's School. Very competitive area."
                },
                {
                  name: "St Olave's Grammar School",
                  location: "Bromley",
                  type: "Boys' Grammar",
                  exam: "GL Assessment",
                  notes: "Known for strong A-level results. One of the few London state schools offering a boarding option. Draws from a wide geographic catchment."
                }
              ].map((school, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white border rounded-xl p-5 shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-secondary text-lg">{school.name}</h3>
                    <span className="text-xs bg-[#1B3D5C] text-white px-2 py-1 rounded-full font-medium">{school.exam}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">📍 {school.location}</span>
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">{school.type}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{school.notes}</p>
                </motion.div>
              ))}
            </div>

            <h2>Kent Grammar Schools</h2>
            <p>
              Kent has 36 grammar schools — more than any other county in England. The Kent Test uses GL Assessment format. Some of the most prominent Kent grammars:
            </p>

            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1B3D5C] text-white">
                    <th className="text-left p-3 font-semibold">School</th>
                    <th className="text-left p-3 font-semibold">Location</th>
                    <th className="text-left p-3 font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Tonbridge Grammar School for Girls", "Tonbridge", "Girls' Grammar"],
                    ["The Judd School", "Tonbridge", "Boys' Grammar"],
                    ["Maidstone Grammar School", "Maidstone", "Boys' Grammar"],
                    ["Simon Langton Girls' Grammar School", "Canterbury", "Girls' Grammar"],
                    ["The Skinners' School", "Tunbridge Wells", "Boys' Grammar"],
                    ["Invicta Grammar School", "Maidstone", "Girls' Grammar"],
                    ["Harvey Grammar School", "Folkestone", "Boys' Grammar"],
                  ].map(([name, location, type], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 border-b border-slate-100 font-medium text-slate-800">{name}</td>
                      <td className="p-3 border-b border-slate-100 text-slate-700">{location}</td>
                      <td className="p-3 border-b border-slate-100 text-slate-500">{type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              For families in Kent, our <Link href="/location/kent" className="text-primary hover:underline">Kent 11 Plus tutors</Link> guide covers the specific Kent Test format and Stage 2 assessment process in detail.
            </p>

            <h2>Buckinghamshire Grammar Schools</h2>
            <p>
              Buckinghamshire is one of the last remaining fully selective counties — all state secondary schools are either grammar or secondary modern. The Buckinghamshire 11 plus has recently transitioned to a mix of GL Assessment and CEM-style testing.
            </p>
            <ul>
              <li><strong>Royal Latin School, Buckingham</strong> — one of the oldest grammar schools in England, boys and girls</li>
              <li><strong>Sir Henry Floyd Grammar School, Aylesbury</strong> — mixed grammar, strong sixth form</li>
              <li><strong>Aylesbury Grammar School</strong> — boys' grammar</li>
              <li><strong>Aylesbury High School</strong> — girls' grammar</li>
              <li><strong>Dr Challoner's Grammar School, Amersham</strong> — boys' grammar, consistently high results</li>
              <li><strong>Dr Challoner's High School, Little Chalfont</strong> — girls' grammar, associated school</li>
            </ul>

            <h2>West Midlands and Birmingham Grammar Schools</h2>
            <p>
              Birmingham uses the CEM (Durham University) exam format, which differs significantly from GL Assessment. The West Midlands grammar landscape includes both state grammar and prestigious independent schools:
            </p>
            <ul>
              <li><strong>King Edward VI Camp Hill School for Boys</strong> — state selective, extremely competitive, uses CEM format</li>
              <li><strong>King Edward VI Camp Hill School for Girls</strong> — state selective, one of the top girls' schools in the Midlands</li>
              <li><strong>Handsworth Grammar School</strong> — boys' grammar in Birmingham</li>
              <li><strong>Sutton Coldfield Grammar School for Girls</strong> — highly regarded girls' grammar in North Birmingham</li>
              <li><strong>King Edward's School Birmingham</strong> — <em>independent, fee-paying</em> (approx £13,100/yr), not a state school. Uses its own entrance exam. Often included in local discussions but technically a private school.</li>
            </ul>

            <h2>Lincolnshire Grammar Schools</h2>
            <p>
              Lincolnshire has six state grammar schools, less competitive than London or Kent but still academically rigorous:
            </p>
            <ul>
              <li><strong>Queen Elizabeth's High School, Gainsborough</strong> — mixed grammar, good results</li>
              <li><strong>Caistor Grammar School</strong> — mixed grammar, rural area with lower competition than urban grammars</li>
              <li><strong>Lincoln Christ's Hospital School</strong> — large mixed grammar in Lincoln city</li>
            </ul>

            <h2>How to Choose the Right Grammar School for Your Child</h2>
            <p>
              League table position is only one factor. When choosing which grammar schools to apply to, parents should also consider:
            </p>
            <ul>
              <li><strong>Distance from home</strong> — for oversubscribed schools, children who live closer are ranked higher as tiebreaker after the qualifying score. A competitive application within reasonable distance beats a borderline application at a school far away.</li>
              <li><strong>Subject strengths</strong> — some grammar schools have exceptional science departments; others are known for arts, music, or languages. If your child has a clear strength, research which school nurtures it best.</li>
              <li><strong>Co-ed vs single-sex</strong> — evidence on outcomes is mixed, but personal preference and learning style matter. Some children thrive in single-sex environments; others do not.</li>
              <li><strong>Sixth form provision</strong> — if your child is aiming for university, look at sixth form results, A-level subject breadth, and enrichment programmes.</li>
              <li><strong>Pastoral care reputation</strong> — grammar schools can be academically intense environments. A school with strong pastoral support and emphasis on wellbeing matters as much as academic results.</li>
            </ul>

            <h2>Super-Selective vs Standard Grammar Schools</h2>
            <p>
              The distinction between super-selective and standard grammar schools is important for preparation strategy:
            </p>
            <ul>
              <li><strong>Standard grammar schools</strong> select the top 25% academically in their local area. Competition exists but is manageable with structured preparation. Most grammar schools outside London fall into this category.</li>
              <li><strong>Super-selective grammar schools</strong> effectively select only the top 5% nationally. QE Boys, Henrietta Barnett, Tiffin (boys and girls) — these schools require exceptionally high scores and draw applicants from across the country. Preparation for these schools requires longer timelines and more intensive tuition.</li>
            </ul>

            <div className="not-prose mt-8 mb-10 p-8 bg-[#1B3D5C] rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Prepare for Any Grammar School</h3>
              <p className="text-white/80 mb-6">Whether you're targeting a local grammar or a super-selective London school, KlaraLearn tutors know the specific requirements. From £15/hr.</p>
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
                { q: "What is the best grammar school in England?", a: "By competition and academic results, Queen Elizabeth's School (Boys) in Barnet and The Henrietta Barnett School in Barnet are consistently top-ranked. Both are super-selective with 1,500–2,000+ applications for fewer than 170 places." },
                { q: "What score do I need for QE Boys?", a: "QE Boys requires a GL Assessment standardised score of 121 or above to qualify, but in practice most successful applicants score significantly higher. Over 2,000 children apply for 168 places." },
                { q: "Are grammar schools in London more competitive?", a: "Yes — particularly super-selective schools in Barnet, Kingston, and Sutton. They attract applicants from across the country and receive far more applications per place than standard grammars outside London." },
                { q: "What is the difference between a super-selective and a grammar school?", a: "Standard grammars admit approximately the top 25% locally. Super-selective grammars admit only the top 5% nationally. Schools like QE Boys and Henrietta Barnett receive thousands of applications for fewer than 200 places." },
                { q: "Do grammar schools have sixth forms?", a: "Most state grammar schools offer A-levels in sixth form. Some admit external applicants from comprehensive schools. A small number offer IB (International Baccalaureate) as an alternative to A-levels." },
                { q: "Can I apply to grammar schools outside my county?", a: "Yes — no rule prevents out-of-county applications. You must sit each school's 11 plus separately. Distance is typically a tiebreaker for standard grammars; for super-selectives, distance rarely matters as very few children achieve the required score." }
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
                <li><Link href="/location/london" className="text-primary font-medium hover:underline">→ London 11 Plus Tutors</Link></li>
                <li><Link href="/location/kent" className="text-primary font-medium hover:underline">→ Kent 11 Plus Tutors</Link></li>
                <li><Link href="/blog/grammar-school-admissions" className="text-primary font-medium hover:underline">→ Grammar School Admissions Guide</Link></li>
                <li><Link href="/blog/what-is-a-grammar-school" className="text-primary font-medium hover:underline">→ What Is a Grammar School?</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </article>
    </Layout>
  );
}
