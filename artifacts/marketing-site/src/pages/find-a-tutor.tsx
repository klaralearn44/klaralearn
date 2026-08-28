import { useState, useMemo } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { TutorCard } from '@/components/ui/tutor-card';
import { useLiveTutors } from '@/hooks/use-live-tutors';
import { Link } from 'wouter';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ShieldCheck, BookOpen, RotateCcw, CreditCard, Search, X, CheckCircle2 } from 'lucide-react';

function SkeletonCard() {
  return (
    <div className="rounded-2xl border bg-white p-6 animate-pulse">
      <div className="flex justify-between gap-4">
        <div className="flex gap-4">
          <div className="h-16 w-16 rounded-full bg-slate-200" />
          <div className="space-y-2 pt-1">
            <div className="h-5 w-28 rounded bg-slate-200" />
            <div className="h-4 w-20 rounded bg-slate-100" />
            <div className="h-4 w-16 rounded bg-slate-100" />
          </div>
        </div>
        <div className="h-8 w-12 rounded bg-slate-200" />
      </div>
      <div className="mt-6 space-y-2">
        <div className="h-4 w-full rounded bg-slate-100" />
        <div className="h-4 w-4/5 rounded bg-slate-100" />
      </div>
      <div className="mt-6 h-10 w-full rounded-full bg-slate-200" />
    </div>
  );
}

export function FindATutor() {
  const { data: liveTutors, isLoading, error } = useLiveTutors();
  // Never substitute unreviewed marketing samples into a public discovery
  // surface. The API and fetch adapter both enforce the approved inventory.
  const baseTutors = liveTutors ?? [];

  // Filter State
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const subjectsList = ['Maths', 'English', 'Science', 'Verbal Reasoning', 'Non-Verbal Reasoning'];
  const levelsList = ['Primary', '11 Plus', 'KS3', 'GCSE', 'A-Level'];
  const goalsList = [
    { label: 'Build confidence', matches: ['confidence', 'primary', 'sats', 'foundation'] },
    { label: '11 Plus preparation', matches: ['11 plus', 'verbal reasoning', 'non-verbal reasoning'] },
    { label: 'GCSE & exam prep', matches: ['gcse', 'a-level', 'exam'] },
  ];
  const priceOptions = [
    { label: 'Up to £20', value: 20 },
    { label: 'Up to £30', value: 30 },
    { label: 'Up to £40', value: 40 },
    { label: 'Any Price', value: null },
  ];

  const toggleSelection = (list: string[], setList: (l: string[]) => void, item: string) => {
    if (list.includes(item)) setList(list.filter(i => i !== item));
    else setList([...list, item]);
  };

  const clearFilters = () => {
    setSelectedSubjects([]);
    setSelectedLevels([]);
    setSelectedGoals([]);
    setMaxPrice(null);
  };

  // Derive filtered tutors
  const filteredTutors = useMemo(() => {
    return baseTutors.filter(t => {
      const subjectMatch = selectedSubjects.length === 0 || selectedSubjects.some(sub => {
        const lowerSub = sub.toLowerCase();
        return t.tags.some(tag => tag.toLowerCase().includes(lowerSub)) || t.subject.toLowerCase().includes(lowerSub);
      });
      
      const levelMatch = selectedLevels.length === 0 || selectedLevels.some(lvl => {
        const lowerLvl = lvl.toLowerCase();
        return t.tags.some(tag => tag.toLowerCase().includes(lowerLvl)) || t.subject.toLowerCase().includes(lowerLvl);
      });
      
      const goalMatch = selectedGoals.length === 0 || selectedGoals.some(goal => {
        const goalDefinition = goalsList.find((item) => item.label === goal);
        const tutorText = [t.subject, t.bio, t.headline ?? '', ...t.tags].join(' ').toLowerCase();
        return goalDefinition?.matches.some((term) => tutorText.includes(term));
      });

      const priceMatch = maxPrice === null || t.rate <= maxPrice;
      
      return subjectMatch && levelMatch && goalMatch && priceMatch;
    });
  }, [baseTutors, selectedSubjects, selectedLevels, selectedGoals, maxPrice]);

  // SEO Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://klaralearn.com/" },
      { "@type": "ListItem", "position": 2, "name": "Find a Tutor", "item": "https://klaralearn.com/find-a-tutor" }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Find a UK Tutor",
    "description": "Browse our vetted UK tutors for 11 Plus, GCSE, SATs, and core subjects.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": filteredTutors.map((tutor, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Person",
          "name": tutor.name,
          "description": tutor.bio,
          "url": tutor.profileUrl || "https://app.klaralearn.com"
        }
      }))
    }
  };

  const faqs = [
    {
      q: "Are KlaraLearn tutors vetted?",
      a: "Yes, every KlaraLearn tutor undergoes a rigorous vetting process including identity verification, qualification checks, and an assessment of their teaching methodology to ensure safeguarding and quality."
    },
    {
      q: "Can I get a free trial lesson?",
      a: "Absolutely. We encourage parents to book a free, no-commitment introductory session to ensure the tutor is the perfect fit for their child's learning style."
    },
    {
      q: "Do your tutors teach the UK curriculum?",
      a: "Yes, our marketplace specifically highlights tutors who have deep expertise in UK curriculums, including 11 Plus, Key Stage 3, GCSEs, and SATs."
    },
    {
      q: "How do I book lessons after the trial?",
      a: "If you're happy with the trial, you can seamlessly schedule regular weekly slots directly through the KlaraLearn platform, managing all payments and communication in one secure place."
    }
  ];

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
        title="Find a Tutor — 11 Plus, GCSE & SATs | KlaraLearn"
        description="Search our directory of affordable, vetted online tutors. Find specialists for the UK curriculum, from 11 Plus to GCSEs, starting from just £15/hr."
        path="/find-a-tutor"
        schema={[breadcrumbSchema, collectionSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="bg-slate-50 pt-20 pb-12 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-900">Find a Tutor</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Find Your Perfect UK Tutor
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Browse our hand-picked network of subject specialists. Whether you're preparing for the 11 Plus or supporting GCSEs, find the right fit for your child's learning journey.
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b shadow-sm relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:divide-x divide-slate-100">
            <div className="px-4">
              <CreditCard className="w-6 h-6 text-accent mx-auto mb-3" />
              <h4 className="font-bold text-secondary text-sm">Affordable Rates</h4>
              <p className="text-xs text-slate-500 mt-1">Starting from just £15/hr</p>
            </div>
            <div className="px-4">
              <RotateCcw className="w-6 h-6 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-secondary text-sm">No Commitment</h4>
              <p className="text-xs text-slate-500 mt-1">Free introductory trial</p>
            </div>
            <div className="px-4 mt-6 md:mt-0">
              <BookOpen className="w-6 h-6 text-secondary mx-auto mb-3" />
              <h4 className="font-bold text-secondary text-sm">UK Curriculum</h4>
              <p className="text-xs text-slate-500 mt-1">Experts in 11+, GCSE & SATs</p>
            </div>
            <div className="px-4 mt-6 md:mt-0">
              <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-secondary text-sm">Fully Vetted</h4>
              <p className="text-xs text-slate-500 mt-1">Identity & safeguarding checked</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white min-h-[60vh]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="md:sticky md:top-24 bg-slate-50 md:bg-transparent p-5 md:p-0 rounded-2xl md:rounded-none border md:border-none border-slate-200">
              
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-secondary text-lg">Filters</h3>
                {(selectedSubjects.length > 0 || selectedLevels.length > 0 || selectedGoals.length > 0 || maxPrice !== null) && (
                  <button onClick={clearFilters} className="text-xs text-primary font-medium hover:underline flex items-center">
                    <X className="w-3 h-3 mr-1" /> Clear All
                  </button>
                )}
              </div>
              
              <div className="space-y-8">
                {/* Subjects */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Subject</h4>
                  <div className="space-y-3">
                    {subjectsList.map(sub => (
                      <label key={sub} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          className="sr-only peer"
                          checked={selectedSubjects.includes(sub)}
                          onChange={() => toggleSelection(selectedSubjects, setSelectedSubjects, sub)}
                        />
                        <div className="w-5 h-5 rounded border bg-white border-slate-300 peer-focus:ring-2 peer-focus:ring-primary/30 peer-checked:bg-primary peer-checked:border-primary text-white flex items-center justify-center transition-colors">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${selectedSubjects.includes(sub) ? 'opacity-100' : 'opacity-0'}`} />
                        </div>
                        <span className="text-sm text-slate-700 peer-checked:font-medium peer-checked:text-slate-900">{sub}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Levels */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">School Stage</h4>
                  <div className="flex flex-wrap gap-2">
                    {levelsList.map(lvl => (
                      <button 
                        key={lvl}
                        onClick={() => toggleSelection(selectedLevels, setSelectedLevels, lvl)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all border ${selectedLevels.includes(lvl) ? 'bg-primary border-primary text-white shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:border-primary/50 hover:bg-slate-50'}`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Learning Goal</h4>
                  <div className="space-y-3">
                    {goalsList.map((goal) => (
                      <label key={goal.label} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={selectedGoals.includes(goal.label)}
                          onChange={() => toggleSelection(selectedGoals, setSelectedGoals, goal.label)}
                        />
                        <div className="w-5 h-5 rounded border bg-white border-slate-300 peer-focus:ring-2 peer-focus:ring-primary/30 peer-checked:bg-primary peer-checked:border-primary text-white flex items-center justify-center transition-colors">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${selectedGoals.includes(goal.label) ? 'opacity-100' : 'opacity-0'}`} />
                        </div>
                        <span className="text-sm text-slate-700 peer-checked:font-medium peer-checked:text-slate-900">{goal.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Max Hourly Rate</h4>
                  <div className="space-y-3">
                    {priceOptions.map(opt => (
                      <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="maxRate"
                          className="sr-only peer"
                          checked={maxPrice === opt.value}
                          onChange={() => setMaxPrice(opt.value)}
                        />
                        <div className="w-4 h-4 rounded-full border bg-white border-slate-300 peer-focus:ring-2 peer-focus:ring-primary/30 peer-checked:border-primary flex items-center justify-center transition-colors">
                          <div className={`w-2 h-2 rounded-full bg-primary transition-opacity ${maxPrice === opt.value ? 'opacity-100' : 'opacity-0'}`} />
                        </div>
                        <span className="text-sm text-slate-700 peer-checked:font-medium peer-checked:text-slate-900">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </aside>
          
          {/* Results Grid */}
          <div className="w-full md:flex-1">
            <div className="mb-7">
              <p className="text-xs font-bold tracking-[0.16em] uppercase text-primary mb-2">Available profiles</p>
              <h2 className="text-2xl font-bold text-secondary">
                {isLoading ? 'Loading available tutors' : `${filteredTutors.length} tutors available`}
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Profiles shown here are currently available through KlaraLearn. Review each tutor’s experience and details before booking.
              </p>
            </div>

            {error && (
              <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900 flex items-start gap-3" role="alert">
                <div className="mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                </div>
                <p>
                  Live tutor availability is temporarily offline. We are not
                  showing unreviewed profiles.{' '}
                  <a
                    href="https://app.klaralearn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-2"
                  >
                    Open KlaraLearn
                  </a>{' '}
                  to enquire about current availability.
                </p>
              </div>
            )}

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map(i => <SkeletonCard key={i} />)}
              </div>
            ) : error ? (
              <div className="bg-slate-50 border border-slate-200 border-dashed rounded-2xl p-12 text-center my-8">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm border border-slate-100">
                  <ShieldCheck className="w-6 h-6 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">Tutor profiles are being checked</h3>
                <p className="text-slate-500 max-w-md mx-auto">
                  We’ll show profiles here once the approved live inventory is
                  available. Your search is not being filled with test or
                  unreviewed data.
                </p>
              </div>
            ) : filteredTutors.length === 0 ? (
              <div className="bg-slate-50 border border-slate-200 border-dashed rounded-2xl p-12 text-center my-8">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm border border-slate-100">
                  <Search className="w-6 h-6 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">No tutors found</h3>
                <p className="text-slate-500 mb-6 max-w-md mx-auto">We couldn't find any tutors matching all your exact criteria. Try broadening your search by selecting 'Any Price' or fewer subjects.</p>
                <Button onClick={clearFilters} variant="outline" className="rounded-full">Clear All Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTutors.map((tutor, index) => (
                  <TutorCard key={tutor.id} tutor={tutor} index={index} />
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 border-t">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about finding and working with a KlaraLearn tutor.</p>
          </div>
          <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border p-2 shadow-sm">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b last:border-0 px-4">
                <AccordionTrigger className="text-left font-semibold text-secondary hover:text-primary py-4">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
}
