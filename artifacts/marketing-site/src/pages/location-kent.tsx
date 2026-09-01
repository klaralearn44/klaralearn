import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { TutorShowcase } from '@/components/ui/tutor-showcase';
import { tutors } from '@/data/tutors';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { TrustStats } from '@/components/ui/trust-stats';
import { Link } from 'wouter';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function LocationKent() {
  const kentTutors = tutors.filter(t => t.tags.includes("11 Plus")).slice(0, 3);

  const faqs = [
    {
      q: "What is the Kent Test?",
      a: "The Kent Test is Kent County Council's version of the 11 plus entrance exam, using GL Assessment format. It consists of up to four papers: verbal reasoning, maths, English, and non-verbal reasoning. Children sit the papers in September of Year 6. A two-stage process applies for borderline pupils — Stage 2 involves headteacher assessment using school reports and CAT4 scores."
    },
    {
      q: "When do children sit the Kent 11 plus?",
      a: "The Kent Test is sat in September of Year 6, typically in the second or third week of term. Registration opens in the preceding spring (usually April–June of Year 6) — it is not automatic. Parents must proactively register their child with Kent County Council to participate."
    },
    {
      q: "How many grammar schools are in Kent?",
      a: "Kent has 36 state grammar schools — more than any other county in England. They are spread across the county in areas including Tonbridge, Maidstone, Canterbury, Folkestone, Gillingham, Gravesend, and Sittingbourne."
    },
    {
      q: "What is Stage 2 of the Kent Test?",
      a: "Stage 2 is a headteacher assessment process used for pupils who score in the 'borderline' band — close to the qualifying threshold but not clearly above or below it. It considers primary school reports, CAT4 cognitive ability test scores, and teacher recommendations. Inclusion in Stage 2 is not guaranteed and does not mean a child will qualify."
    },
    {
      q: "How do I find an 11 plus tutor in Kent?",
      a: "KlaraLearn offers online 11 plus tutors experienced with the Kent Test GL Assessment format, available to families anywhere in Kent. Compare available profiles and current rates with the £40–£65/hr charged by local Tonbridge, Maidstone, or Canterbury tutors. Book a free trial lesson to get started."
    },
    {
      q: "How much does 11 plus tutoring cost in Kent?",
      a: "Local Kent tutors typically charge £40–£65/hr for specialist 11 plus preparation. KlaraLearn lets families compare online tutors experienced in the specific Kent Test GL format, with the current rate shown on each profile."
    }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "KlaraLearn — Kent 11 Plus Tutors",
    "description": "Online 11 plus tutors for Kent grammar school preparation. Compare expert tutor profiles experienced in the Kent Test GL Assessment format and their current rates.",
    "url": "https://klaralearn.com/location/kent",
    "areaServed": {
      "@type": "State",
      "name": "Kent, England"
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <Layout>
      <SEOHead
        title="Kent 11 Plus Tutors — Grammar School Preparation | KlaraLearn"
        description="Expert 11 plus tutors for Kent's grammar schools. Compare online profiles, Kent Test experience and current tutor rates. Free trial lesson."
        path="/location/kent"
        schema={[localBusinessSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="bg-[#1B3D5C] pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1B3D5C] to-[#00A896]/30" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="flex items-center gap-2 text-sm font-medium text-white/70 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span>Locations</span>
            <span>/</span>
            <span className="text-white">Kent</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-[#E05C2A]" />
            <span className="text-[#E05C2A] font-bold tracking-wider uppercase">Kent</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            11 Plus &amp; Grammar School Tutors for Kent Families
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Kent has 36 grammar schools — more than any county in England. The Kent Test is intensely competitive. Compare expert preparation from tutors who know the GL Assessment format inside out, with current rates shown on each profile.
          </p>

          <Button asChild size="lg" className="bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white rounded-full px-8">
            <a href="https://app.klaralearn.com" target="_blank" rel="noopener noreferrer">Find a Kent Tutor</a>
          </Button>
        </div>
      </section>

      <TrustStats />

      {/* Why Kent Families Choose KlaraLearn */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Why Kent Families Choose KlaraLearn</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The Kent Test uses GL Assessment format — and our tutors are specialists in exactly that.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Kent Test Specialists",
                desc: "Our tutors understand the specific GL Assessment format used in Kent — four papers, verbal reasoning, maths, English, and non-verbal reasoning. Not the CEM format used elsewhere.",
                icon: "📋"
              },
              {
                title: "Stage 2 Support",
                desc: "We help borderline pupils maximise their Stage 2 headteacher assessment chances by ensuring strong school engagement and targeted support throughout the year.",
                icon: "🎯"
              },
              {
                title: "Fraction of Local Rates",
                desc: "Local Tonbridge, Maidstone, and Canterbury tutors charge £40–£65/hr. Compare KlaraLearn's global tutor profiles and current rates for online Kent Test support.",
                icon: "💰"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Is the Kent Test */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">What Is the Kent Test?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Kent's grammar school entrance exam has two stages and a specific GL Assessment format that every family should understand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border">
              <h3 className="text-xl font-bold text-secondary mb-4">Stage 1: Standardised Test</h3>
              <p className="text-slate-600 mb-4">Sat in September of Year 6. GL Assessment format with up to four papers:</p>
              <ul className="space-y-2">
                {["Verbal Reasoning (~50 min)", "Mathematics (~47 min)", "English (~45 min)", "Non-Verbal Reasoning (~45 min)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-[#00A896] flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 mt-4">Raw scores are standardised for age. A score of 121+ typically qualifies.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border">
              <h3 className="text-xl font-bold text-secondary mb-4">Stage 2: Headteacher Assessment</h3>
              <p className="text-slate-600 mb-4">For borderline pupils. Based on:</p>
              <ul className="space-y-2">
                {[
                  "Primary school report and teacher recommendation",
                  "CAT4 cognitive ability test scores",
                  "Evidence of academic potential",
                  "Headteacher's holistic assessment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-[#E05C2A] flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500 mt-4">Results: October. Appeals: January–March.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kent Grammar Schools */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Kent's Grammar Schools</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              36 grammar schools across Kent — more than any other county in England. Competition varies by location and school.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1B3D5C] text-white">
                  <th className="text-left p-3 font-semibold">School</th>
                  <th className="text-left p-3 font-semibold">Town</th>
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
                  ["Highsted Grammar School", "Sittingbourne", "Girls' Grammar"],
                  ["Invicta Grammar School", "Maidstone", "Girls' Grammar"],
                  ["Folkestone School for Girls", "Folkestone", "Girls' Grammar"],
                  ["Harvey Grammar School", "Folkestone", "Boys' Grammar"],
                ].map(([school, town, type], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-medium text-slate-800">{school}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-700">{town}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-500">{type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">These are a selection of Kent's 36 grammar schools. Always verify current admissions information directly with each school.</p>
        </div>
      </section>

      {/* Tutors Grid */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Our Top 11 Plus Specialists for Kent</h2>
            <p className="text-slate-600">All experienced with the Kent Test GL Assessment format.</p>
          </div>

          <div className="mb-12">
            <TutorShowcase
              fallbackTutors={kentTutors}
              filter={(tutor) => tutor.tags.includes('11 Plus')}
              limit={3}
              emptyMessage="Our next Kent Test tutor profiles are being added. Browse all tutors to find an 11 Plus specialist."
            />
          </div>

          <div className="text-center">
            <Button asChild variant="outline" className="rounded-full font-semibold px-8 border-primary text-primary hover:bg-primary hover:text-white">
              <a href="https://app.klaralearn.com" target="_blank" rel="noopener noreferrer">View All 11 Plus Tutors</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Kent Tutoring Rates</h2>
            <p className="text-slate-600">Expert Kent Test preparation at a fraction of local prices.</p>
          </div>
          <div className="bg-slate-50 rounded-2xl border p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-slate-700">Local Kent Tutor Rates</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-300"></span>Tonbridge area: £50–£65/hr</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-300"></span>Maidstone area: £40–£55/hr</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-300"></span>Canterbury area: £40–£60/hr</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-300"></span>Agency fee often added</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border shadow-sm border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#E05C2A] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Better Value</div>
                <h3 className="text-xl font-bold mb-4 text-primary">KlaraLearn</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 font-medium text-secondary">✓ Current rate shown on each profile</li>
                  <li className="flex items-center gap-2 font-medium text-secondary">✓ Kent Test GL specialists</li>
                  <li className="flex items-center gap-2 font-medium text-secondary">✓ Online — no commute</li>
                  <li className="flex items-center gap-2 font-medium text-secondary">✓ Free trial lesson</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white rounded-full px-8">
              <a href="https://app.klaralearn.com" target="_blank" rel="noopener noreferrer">Book a Free Trial Lesson</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 border-t">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">Kent 11 Plus: Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-secondary mb-8">Explore More</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/find-a-tutor" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Find a Tutor</Link>
            <Link href="/parents/tools" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">11 Plus Parent Tools</Link>
            <Link href="/subjects/11-plus" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">11 Plus Tutors</Link>
            <Link href="/blog/what-is-the-11-plus" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">What Is the 11 Plus?</Link>
            <Link href="/blog/how-to-prepare-for-11-plus" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">How to Prepare</Link>
            <Link href="/location/london" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">London Tutors</Link>
            <Link href="/location/online" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Online Tutoring</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
