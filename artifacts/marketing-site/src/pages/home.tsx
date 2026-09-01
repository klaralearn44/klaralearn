import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { TutorShowcase } from '@/components/ui/tutor-showcase';
import { SubjectCard } from '@/components/ui/subject-card';
import { TrustStats } from '@/components/ui/trust-stats';
import { HowItWorksSteps } from '@/components/ui/how-it-works';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen, Calculator, PenTool, Beaker, CheckCircle2, ArrowRight, Search, Target, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export function Home() {
  const heroImageSrc = `${import.meta.env.BASE_URL}images/klara-school-tutoring.jpg`;

  const faqs = [
    {
      q: "How are KlaraLearn tutors so affordable?",
      a: "KlaraLearn lets families compare available tutor profiles and current hourly rates directly. Access to international teaching talent can offer better value than traditional local agencies; review each profile to decide whether a tutor is right for your child."
    },
    {
      q: "Is online tutoring as effective as in-person?",
      a: "Yes. In fact, many parents find it more effective. Online sessions allow for interactive whiteboards, screen sharing, and immediate resource access. It also means you aren't restricted by geography; your child gets the best tutor for their needs, not just the one who lives closest."
    },
    {
      q: "Are the tutors familiar with the UK curriculum?",
      a: "Tutor profiles list subjects, experience and qualifications where provided. Use these details to identify tutors whose experience is relevant to the UK curriculum, including the 11 Plus, GCSEs and SATs."
    },
    {
      q: "How should I choose a tutor for my child?",
      a: "Read the available tutor's profile carefully, including their subjects, experience, qualifications and hourly rate. Ask questions during an introductory session and make sure you are comfortable with the arrangement before booking further lessons."
    },
    {
      q: "Can we try a tutor before committing?",
      a: "Yes! We offer a 15-minute free trial session with any tutor so you and your child can make sure they're the right fit before booking a full lesson."
    },
    {
      q: "What if a tutor is not the right fit?",
      a: "You can compare other available tutor profiles and choose a tutor who better suits your child's needs, schedule and budget."
    }
  ];

  const homepageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "KlaraLearn",
      "url": "https://klaralearn.com/",
      "logo": "https://klaralearn.com/brand/logo-full.png",
      "description": "Affordable online tutoring for UK families, including 11 Plus, GCSE and SATs support."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Online tutoring for UK students",
      "serviceType": "Online private tutoring",
      "provider": {
        "@type": "Organization",
        "name": "KlaraLearn",
        "url": "https://klaralearn.com/"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United Kingdom"
      },
      "url": "https://klaralearn.com/find-a-tutor"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Affordable Private Tutors | 11 Plus, GCSE & SATs | KlaraLearn"
        description="Find available private tutors online for Maths, English, Science, GCSE and A-Level support. Compare live profiles, experience and current hourly rates."
        path="/"
        schema={homepageSchema}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-[#1B3D5C]">
        <img
          src={heroImageSrc}
          alt="Student taking an online lesson with a tutor on a laptop"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1B3D5C]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1B3D5C] via-[#1B3D5C]/90 to-[#1B3D5C]/20" />

        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#4DE1C1]"></span>
                Available online tutors
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-[1.15] tracking-tight">
                Give your child high-quality tutoring at an affordable price
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl font-light">
                KlaraLearn connects UK families with carefully selected educators in the UK, Africa and other international locations who are experienced in teaching the UK curriculum. <span className="font-semibold text-white">Experience the safety, transparency, and progress visibility parents expect.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white border-none text-lg h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                   <Link href="/find-a-tutor">Browse Live Tutors</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg h-14 px-8 rounded-full backdrop-blur-sm transition-all">
                  <a href="https://app.klaralearn.com">Book a Free Trial</a>
                </Button>
              </div>
              
              <div className="mt-10 flex items-center gap-4 text-sm text-white/80 font-medium flex-wrap">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-5 h-5 text-[#4DE1C1]" /> Compare profiles</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-5 h-5 text-[#4DE1C1]" /> Free Trial</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-5 h-5 text-[#4DE1C1]" /> No Commitments</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Available Tutors */}
      <section className="py-16 md:py-20 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-sm font-bold tracking-[0.16em] uppercase text-primary mb-3">Available tutors</p>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Meet tutors ready to help</h2>
              <p className="text-lg text-slate-600">
                Compare available profiles, teaching experience and hourly rates before choosing who feels right for your child.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white font-semibold px-7 self-start md:self-auto">
              <Link href="/find-a-tutor">View all available tutors <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>

          <TutorShowcase limit={3} emptyMessage="No tutor profiles are available at the moment. Please check again shortly." />
        </div>
      </section>

      <TrustStats />

      {/* Why parents choose KlaraLearn */}
      <section className="py-24 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Why parents choose KlaraLearn</h2>
            <p className="text-lg text-slate-600">We connect UK families with exceptional international educators, combining affordable rates with uncompromising safety and transparency.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="p-8 rounded-2xl bg-slate-50 border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Verified tutors</h3>
              <p className="text-slate-600">Every tutor goes through KlaraLearn’s verification and safeguarding process, ensuring high standards.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="p-8 rounded-2xl bg-slate-50 border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Transparent lessons</h3>
              <p className="text-slate-600">Lessons are conducted through our secure online classroom, with session recording available for transparency.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="p-8 rounded-2xl bg-slate-50 border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">See your child’s progress</h3>
              <p className="text-slate-600">Parents can understand what their child is learning, where they’re improving and where they need more support.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="p-8 rounded-2xl bg-slate-50 border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Global teaching talent</h3>
              <p className="text-slate-600">Access experienced UK-curriculum educators from Nigeria, the UK, Ghana, Kenya and around the world.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="p-8 rounded-2xl bg-slate-50 border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 8h.01"/><path d="M2 4v16"/><path d="M22 4v16"/><path d="M15.5 15h.01"/><path d="M8.5 15h.01"/><path d="M8 8h.01"/><path d="M22 10H2"/><path d="M22 14H2"/></svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">Better value</h3>
              <p className="text-slate-600">International delivery allows KlaraLearn to offer high-quality tutoring without the traditional UK price premium.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} className="p-8 rounded-2xl bg-slate-50 border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 2v6h6"/></svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">No long-term commitment</h3>
              <p className="text-slate-600">Try a 15-minute introductory session to ensure a tutor is the right fit before committing to paid lessons.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Snippet */}
      <section className="py-12 bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl text-secondary font-medium flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
            <span className="opacity-70 line-through decoration-destructive decoration-2">Local UK tutors: £35-£80/hr</span>
            <span className="hidden md:inline text-primary/30">|</span>
            <span className="text-primary font-bold">KlaraLearn tutors: compare current profile rates</span>
          </p>
        </div>
      </section>

      {/* Parent decision path */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-bold tracking-[0.16em] uppercase text-primary mb-3">Not sure where to start?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Start with what your child needs</h2>
            <p className="text-lg text-slate-600">Choose a clear next step, whether you are ready to meet a tutor today or still working out the right support.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Search,
                title: 'Find the right tutor',
                description: 'Browse live profiles by subject, school stage, learning goal and budget before you decide.',
                href: '/find-a-tutor',
                label: 'Explore tutor matches',
              },
              {
                icon: Target,
                title: 'Plan exam support',
                description: 'Start with 11 Plus, GCSE or SATs guidance tailored to the kind of progress your child needs.',
                href: '/subjects/11-plus',
                label: 'Explore exam tuition',
              },
              {
                icon: CalendarCheck,
                title: 'Use parent tools',
                description: 'Try free checklists, a tutoring-cost comparison and a simple weekly revision planner.',
                href: '/parents/tools',
                label: 'Open the parent toolkit',
              },
            ].map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border bg-slate-50 p-7 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <path.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{path.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-1 mb-6">{path.description}</p>
                <Link href={path.href} className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                  {path.label} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Master every subject</h2>
              <p className="text-lg text-slate-600 max-w-2xl">Specialised support for the exams that matter most to your child's future.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SubjectCard 
              title="11 Plus"
              description="Verbal reasoning, non-verbal reasoning, maths and English for grammar school entry."
              href="/subjects/11-plus"
              icon={<BookOpen className="w-6 h-6" />}
              index={0}
            />
            <SubjectCard 
              title="GCSE Maths"
              description="Build confidence and fill knowledge gaps across the foundation and higher tiers."
              href="/subjects/gcse-maths"
              icon={<Calculator className="w-6 h-6" />}
              index={1}
            />
            <SubjectCard 
              title="GCSE English"
              description="Text analysis, creative writing, and literature preparation for top grades."
              href="/subjects/english"
              icon={<PenTool className="w-6 h-6" />}
              index={2}
            />
            <SubjectCard 
              title="Science"
              description="Physics, Chemistry, and Biology tuition for KS3 and GCSE."
              href="/subjects/science"
              icon={<Beaker className="w-6 h-6" />}
              index={3}
            />
          </div>
        </div>
      </section>

      <HowItWorksSteps />

      {/* FAQ */}
      <section className="py-24 bg-slate-50 border-t">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about learning with us.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border p-4 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#00A896] text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'2\' fill=\'%23ffffff\' fill-opacity=\'0.1\'/%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Give them the confidence to succeed</h2>
          <p className="text-xl text-white/90 mb-10">Start your journey today with a free 15-minute trial session.</p>
          <Button asChild size="lg" className="bg-[#1B3D5C] hover:bg-[#1B3D5C]/90 text-white text-lg h-14 px-10 rounded-full shadow-xl">
            <a href="https://app.klaralearn.com">Find Your Perfect Tutor <ArrowRight className="ml-2 w-5 h-5" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
