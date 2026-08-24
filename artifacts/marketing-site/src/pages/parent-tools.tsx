import { useState } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, Calculator, CalendarDays, ClipboardList, ExternalLink, RefreshCw } from 'lucide-react';

// Sub-components for each tool
function ReadinessChecklist() {
  const readinessItems = [
    "Knows times tables up to 12x12 fluently without hesitation",
    "Can focus on a single academic task for 30-45 minutes",
    "Reads a diverse range of fiction and non-fiction books independently",
    "Has a dedicated, quiet space at home for homework and study",
    "Familiar with basic verbal reasoning logic (e.g., synonyms, antonyms)",
    "Comfortable working under timed conditions",
    "Understands the difference between GL and CEM exam formats",
    "Demonstrates resilience when facing difficult questions"
  ];

  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    const newChecked = new Set(checked);
    if (newChecked.has(index)) newChecked.delete(index);
    else newChecked.add(index);
    setChecked(newChecked);
  };

  const progress = Math.round((checked.size / readinessItems.length) * 100);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-secondary mb-2">11 Plus Readiness Checklist</h2>
      <p className="text-slate-600 mb-8">Assess whether your child is showing the foundational signs of readiness for the rigorous 11 Plus preparation journey.</p>
      
      <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-200">
        <div className="flex justify-between text-sm font-bold mb-3 uppercase tracking-wider">
          <span className="text-slate-600">Readiness Score</span>
          <span className="text-primary">{progress}%</span>
        </div>
        <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-primary transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="space-y-3">
        {readinessItems.map((item, i) => (
          <label key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-primary/40 cursor-pointer transition-colors bg-white group">
            <div className="relative mt-0.5">
              <input 
                type="checkbox" 
                className="sr-only peer"
                checked={checked.has(i)}
                onChange={() => toggle(i)}
              />
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors peer-focus:ring-2 peer-focus:ring-primary/30 ${checked.has(i) ? 'bg-primary border-primary text-white' : 'border-slate-300 bg-white group-hover:border-primary'}`}>
                <CheckCircle2 className={`w-3.5 h-3.5 ${checked.has(i) ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>
            <span className={`text-slate-700 transition-colors ${checked.has(i) ? 'line-through text-slate-400' : 'group-hover:text-slate-900'}`}>{item}</span>
          </label>
        ))}
      </div>
      
      <div className="mt-8 flex justify-end">
        <Button variant="outline" onClick={() => setChecked(new Set())} className="text-slate-500 hover:text-slate-800">
          <RefreshCw className="w-4 h-4 mr-2" /> Reset Checklist
        </Button>
      </div>
    </div>
  );
}

function CostComparison() {
  const [hours, setHours] = useState(2);
  const KLARA_RATE = 20;
  const LOCAL_RATE = 45;
  const AGENCY_RATE = 65;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-secondary mb-2">Tutoring Cost Calculator</h2>
      <p className="text-slate-600 mb-8">See how much you could save by choosing a global online specialist over traditional local or agency options.</p>

      <div className="mb-10 bg-slate-50 p-6 rounded-2xl border border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Hours of tutoring per week</label>
          <span className="text-2xl font-bold text-secondary">{hours} {hours === 1 ? 'hour' : 'hours'}</span>
        </div>
        <input 
          type="range" 
          min="1" 
          max="10" 
          value={hours} 
          onChange={(e) => setHours(Number(e.target.value))} 
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" 
        />
        <div className="flex justify-between text-xs font-medium text-slate-400 mt-2 px-1">
          <span>1h</span>
          <span>5h</span>
          <span>10h</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <CostCard title="London Agency" rate={AGENCY_RATE} hours={hours} />
        <CostCard title="Local Specialist" rate={LOCAL_RATE} hours={hours} />
        <CostCard title="KlaraLearn" rate={KLARA_RATE} hours={hours} highlight />
      </div>
    </div>
  );
}

function CostCard({ title, rate, hours, highlight }: { title: string, rate: number, hours: number, highlight?: boolean }) {
  const monthly = rate * hours * 4.33;
  const yearly = rate * hours * 52;
  
  return (
    <div className={`p-6 rounded-2xl border ${highlight ? 'bg-primary/5 border-primary shadow-sm relative overflow-hidden' : 'bg-white border-slate-200'}`}>
      {highlight && <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Best Value</div>}
      <h3 className={`font-bold mb-4 ${highlight ? 'text-primary' : 'text-slate-700'}`}>{title}</h3>
      <div className="mb-6">
        <div className={`text-4xl font-bold ${highlight ? 'text-primary' : 'text-secondary'}`}>£{rate}</div>
        <div className="text-sm text-slate-500 mt-1 font-medium">per hour</div>
      </div>
      <div className={`space-y-4 pt-5 border-t ${highlight ? 'border-primary/20' : 'border-slate-100'}`}>
        <div className="flex justify-between items-center">
          <span className="text-slate-500 text-sm font-medium">Monthly Est.</span>
          <span className={`font-semibold ${highlight ? 'text-primary' : 'text-slate-700'}`}>£{Math.round(monthly).toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-500 text-sm font-medium">Yearly Est.</span>
          <span className={`font-bold text-lg ${highlight ? 'text-primary' : 'text-secondary'}`}>£{Math.round(yearly).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

function RevisionPlanner() {
  const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [planner, setPlanner] = useState<Record<string, string>>({
    Monday: 'Maths - Fractions & Decimals',
    Tuesday: '',
    Wednesday: 'English - Reading Comprehension',
    Thursday: '',
    Friday: 'Verbal Reasoning Practice',
    Saturday: 'Timed Mock Paper (45m)',
    Sunday: 'Rest Day'
  });

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-secondary mb-2">Weekly Revision Planner</h2>
      <p className="text-slate-600 mb-8">Plan manageable chunks of revision to build consistency without burnout. Keep sessions focused and realistic.</p>
      
      <div className="space-y-3 bg-slate-50 p-4 md:p-6 rounded-2xl border border-slate-200">
        {DAYS.map(day => (
          <div key={day} className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center bg-white p-3 md:p-4 rounded-xl border border-slate-100 shadow-sm hover:border-primary/30 transition-colors focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20">
            <div className="w-32 font-bold text-secondary md:text-right md:pr-4">{day}</div>
            <input 
              type="text" 
              value={planner[day]} 
              onChange={(e) => setPlanner({ ...planner, [day]: e.target.value })}
              placeholder="e.g. Maths - Algebra, 30 mins"
              className="flex-1 px-3 py-2 bg-transparent text-slate-700 focus:outline-none w-full placeholder:text-slate-300 font-medium"
            />
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-end">
        <Button variant="outline" onClick={() => {
           if (window.confirm('Clear all plans?')) {
             const empty = DAYS.reduce((acc, d) => ({...acc, [d]: ''}), {});
             setPlanner(empty);
           }
        }} className="text-slate-500 hover:text-slate-800">
          <RefreshCw className="w-4 h-4 mr-2" /> Clear Planner
        </Button>
      </div>
    </div>
  );
}

function TrialChecklist() {
  const trialItems = [
    "Did the tutor establish a warm, encouraging rapport from the start?",
    "Did they ask about your child's current school level and struggles?",
    "Did they clearly explain their teaching methodology and structure?",
    "Was the pace of the lesson appropriate for your child?",
    "Did your child feel comfortable asking questions?",
    "Did the tutor discuss goal-setting and how they will track progress?",
    "Was the technical setup (video, audio, shared whiteboard) reliable?"
  ];

  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    const newChecked = new Set(checked);
    if (newChecked.has(index)) newChecked.delete(index);
    else newChecked.add(index);
    setChecked(newChecked);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-secondary mb-2">Tutor Trial Checklist</h2>
      <p className="text-slate-600 mb-8">Use this checklist during or immediately after a free trial lesson to evaluate if the tutor is the right fit.</p>
      
      <div className="space-y-3">
        {trialItems.map((item, i) => (
          <label key={i} className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 hover:border-primary/40 cursor-pointer transition-colors bg-white group">
            <div className="relative mt-0.5">
              <input 
                type="checkbox" 
                className="sr-only peer"
                checked={checked.has(i)}
                onChange={() => toggle(i)}
              />
              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors peer-focus:ring-2 peer-focus:ring-primary/30 ${checked.has(i) ? 'bg-primary border-primary text-white' : 'border-slate-300 bg-white group-hover:border-primary'}`}>
                <CheckCircle2 className={`w-3.5 h-3.5 ${checked.has(i) ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>
            <span className={`text-slate-700 font-medium transition-colors ${checked.has(i) ? 'text-primary' : 'group-hover:text-slate-900'}`}>{item}</span>
          </label>
        ))}
      </div>
      
      <div className="mt-8 flex justify-end">
        <Button variant="outline" onClick={() => setChecked(new Set())} className="text-slate-500 hover:text-slate-800">
          <RefreshCw className="w-4 h-4 mr-2" /> Reset Checklist
        </Button>
      </div>
    </div>
  );
}

function ResourceCard({ title, desc, url }: { title: string, desc: string, url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col bg-white p-6 rounded-2xl border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all group h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">{title}</h3>
        <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors flex-shrink-0" />
      </div>
      <p className="text-slate-600 text-sm flex-1">{desc}</p>
    </a>
  );
}

// Main Page Component
export function ParentTools() {
  const [activeTab, setActiveTab] = useState('readiness');

  const TOOLS = [
    { id: 'readiness', label: '11 Plus Readiness', icon: CheckCircle2 },
    { id: 'cost', label: 'Cost Calculator', icon: Calculator },
    { id: 'planner', label: 'Revision Planner', icon: CalendarDays },
    { id: 'trial', label: 'Trial Checklist', icon: ClipboardList }
  ];

  // SEO Schemas
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://klaralearn.com/" },
      { "@type": "ListItem", "position": 2, "name": "Parent Tools", "item": "https://klaralearn.com/parents/tools" }
    ]
  };

  const faqs = [
    {
      q: "How can I assess if my child is ready for the 11 Plus?",
      a: "You can use our free 11 Plus Readiness Checklist to evaluate foundational skills, focus, and core academic competencies required for rigorous exam preparation."
    },
    {
      q: "How much should I pay for an online tutor in the UK?",
      a: "Online tutoring rates vary widely. While local agencies often charge £60-£100 per hour, platforms like KlaraLearn offer highly qualified online tutors from just £15-£30 per hour, providing significant savings."
    },
    {
      q: "How many hours of tutoring does my child need per week?",
      a: "For most primary and KS3 students, 1 to 2 hours per week is optimal. Consistency and short, regular practice between sessions yield better results than intensive cramming."
    },
    {
      q: "What should I look for in a trial lesson?",
      a: "A trial lesson should demonstrate the tutor's ability to build rapport, assess your child's current level, and clearly explain their teaching methods. Ensure your child feels comfortable asking questions."
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
        title="Free Parent Tools & Resources | KlaraLearn"
        description="Access free, practical tools to manage your child's learning journey, including 11 Plus readiness checklists, revision planners, and cost calculators."
        path="/parents/tools"
        schema={[breadcrumbSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="bg-secondary text-white pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Parent Tools</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif !text-white">
            Free Parent Tools &amp; Resources
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            Practical, interactive tools designed to help you navigate exam preparation, compare tutoring costs, and make informed decisions for your child's education.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-white border-b sticky top-20 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto hide-scrollbar py-1">
            {TOOLS.map(tool => {
              const Icon = tool.icon;
              return (
                <button 
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className={`px-5 py-4 font-medium text-sm flex items-center gap-2.5 whitespace-nowrap transition-all border-b-2 outline-none focus-visible:bg-slate-50 ${
                    activeTab === tool.id 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${activeTab === tool.id ? 'text-primary' : 'text-slate-400'}`} />
                  {tool.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 bg-white min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-4xl">
           {activeTab === 'readiness' && <ReadinessChecklist />}
           {activeTab === 'cost' && <CostComparison />}
           {activeTab === 'planner' && <RevisionPlanner />}
           {activeTab === 'trial' && <TrialChecklist />}
        </div>
      </section>

      {/* External Resources */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Curated Educational Resources</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Trusted official sources to support your child's learning and ensure safe educational practices outside of school.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <ResourceCard 
              title="BBC Bitesize" 
              desc="Free online study support resources aligned to the UK curriculum, covering primary, KS3, and GCSE levels." 
              url="https://www.bbc.co.uk/bitesize" 
            />
            <ResourceCard 
              title="Oxford Owl" 
              desc="Expert advice, educational resources and free eBooks to support children's learning at home." 
              url="https://home.oxfordowl.co.uk/" 
            />
            <ResourceCard 
              title="GOV.UK Safeguarding" 
              desc="Official guidance on keeping children safe during out-of-school settings and private tutoring." 
              url="https://www.gov.uk/government/publications/guidance-for-parents-and-carers-on-safeguarding-children-in-out-of-school-settings/using-after-school-clubs-tuition-and-community-activities" 
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full bg-slate-50 rounded-2xl border p-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b last:border-0 px-4 border-slate-200">
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
