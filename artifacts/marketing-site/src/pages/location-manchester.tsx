import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { TutorShowcase } from '@/components/ui/tutor-showcase';
import { tutors } from '@/data/tutors';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'wouter';
import { TrialSignupButton } from '@/components/cta/TrialSignupButton';
import { MapPin } from 'lucide-react';

export function LocationManchester() {
  const manchesterTutors = tutors.slice(0, 3); // Display a selection

  const faqs = [
    {
      q: "Are there grammar schools in Greater Manchester?",
      a: "Yes. Trafford has a fully selective grammar school system. Schools like Altrincham Grammar School for Boys/Girls, Sale Grammar, Stretford Grammar, and Urmston Grammar require students to pass the 11 Plus exam (often run by the Trafford Grammar Schools CEM Consortium or GL Assessment)."
    },
    {
      q: "How can an online tutor help with Manchester 11 Plus exams?",
      a: "Online tutors can focus specifically on the verbal reasoning, non-verbal reasoning, maths, and English components required by Trafford consortium exams, providing tailored mock papers and time-management strategies regardless of their physical location."
    },
    {
      q: "How much do tutors cost in Manchester?",
      a: "Rates vary by tutor and are shown on current profiles. Manchester families can compare online tutors by listed rate, subject, experience, and availability."
    },
    {
      q: "Do I have to use a local tutor?",
      a: "No. The curriculum and exam formats (such as AQA, Edexcel, and GL/CEM) are standardised. We invite parents to review profile information for online tutors nationwide, expanding the pool of available expertise beyond just those who live nearby."
    },
    {
      q: "Can I find a private tutor in Manchester online?",
      a: "Yes. A private tutor for Manchester families can teach online for Trafford grammar entrance, GCSE and SATs. You still compare the subjects, the exam format and the hourly rate on the profile. The tutor does not have to commute across Greater Manchester."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private Tutors in Manchester — 11 Plus & GCSE",
    "provider": {
      "@type": "Organization",
      "name": "KlaraLearn"
    },
    "description": "Compare online private tutor profiles for Greater Manchester, Trafford grammar school entrance and GCSE support.",
    "areaServed": {
      "@type": "City",
      "name": "Manchester"
    }
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://klaralearn.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://klaralearn.com/location"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Manchester",
        "item": "https://klaralearn.com/location/manchester"
      }
    ]
  };

  return (
    <Layout>
      <SEOHead 
        title="Private Tutors in Manchester | Grammar School & GCSE | KlaraLearn"
        description="Find a private tutor in Manchester for Trafford grammar schools, GCSE and SATs. Compare online profiles and current hourly rates."
        path="/location/manchester"
        schema={[schema, faqSchema, breadcrumbSchema]}
      />

      <section className="bg-[#1B3D5C] pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1B3D5C] to-[#E05C2A]/30" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="flex items-center gap-2 text-sm font-medium text-white/70 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white/70">Locations</span>
            <span>/</span>
            <span className="text-white">Manchester</span>
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-accent" />
            <span className="text-accent font-bold tracking-wider uppercase">Manchester &amp; Trafford</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Private Tutors in Manchester — 11 Plus, GCSE &amp; SATs
          </h1>
          
          <div className="border-l-4 border-accent bg-black/20 p-6 rounded-r-xl mb-8 backdrop-blur-sm text-left">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Quick Answer</p>
            <p className="text-white/90 leading-relaxed">
              From Trafford grammar school entrance tests to GCSE options across Greater Manchester, families compare current tutor profiles for subjects, experience and rate. New families can start with a free 15-minute trial session.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <TrialSignupButton />
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 bg-white/10 text-white border-white/30 hover:bg-white/20">
              <Link href="/find-a-tutor">Browse tutors</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Online tutors ready to help Manchester students</h2>
            <p className="text-slate-600">Access a nationwide pool of expertise. We invite parents to review profile information and find the perfect match.</p>
          </div>
          
          <div className="mb-12">
            <TutorShowcase fallbackTutors={manchesterTutors} limit={3} />
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" className="rounded-full font-semibold px-8 border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/find-a-tutor">Browse All Tutors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="py-24 bg-slate-50 border-t">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">Tutoring in Manchester: FAQs</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-slate-800">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-left mb-10">
            <h2 className="text-3xl font-bold text-secondary mb-4">Private tutor Manchester</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Families searching for a private tutor in Manchester are often preparing for Trafford’s grammar schools or for GCSE. Altrincham, Sale, Stretford and Urmston do not all use the same entrance paper. Read the exam named on the profile, compare the hourly rate, and use a free 15-minute trial before you book weekly lessons. If the child is sitting the 11 Plus, start with the <Link href="/subjects/11-plus" className="text-primary font-semibold hover:underline">11 Plus tutor</Link> page as well as the Manchester profiles.
            </p>
          </div>
          <h3 className="text-xl font-bold text-secondary mb-8">Explore More</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/find-a-tutor" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Find a Tutor</Link>
            <Link href="/parents/tools" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Parent Tools</Link>
            <Link href="/subjects/11-plus" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">11 Plus Tutors</Link>
            <Link href="/location/online" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Online Tutoring</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
