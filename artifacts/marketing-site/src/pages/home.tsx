import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { TutorShowcase } from '@/components/ui/tutor-showcase';
import { SubjectCard } from '@/components/ui/subject-card';
import { TrustStats } from '@/components/ui/trust-stats';
import { HowItWorksSteps } from '@/components/ui/how-it-works';
import { tutors } from '@/data/tutors';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen, Calculator, PenTool, Beaker, CheckCircle2, ArrowRight, Search, Target, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export function Home() {
  const faqs = [
    {
      q: "How are KlaraLearn tutors so affordable?",
      a: "By connecting you directly with vetted international educators—many of whom are qualified teachers in their home countries—we bypass the high local agency fees. This global model brings the price down from £35-£80/hr to as low as £15/hr, while maintaining rigorous quality standards."
    },
    {
      q: "Is online tutoring as effective as in-person?",
      a: "Yes. In fact, many parents find it more effective. Online sessions allow for interactive whiteboards, screen sharing, and immediate resource access. It also means you aren't restricted by geography; your child gets the best tutor for their needs, not just the one who lives closest."
    },
    {
      q: "Are the tutors familiar with the UK curriculum?",
      a: "Absolutely. All tutors on our platform who teach UK students have been specifically vetted for their knowledge of the UK system, including the 11 Plus, GCSEs, and SATs. Many specialise exclusively in these exams."
    },
    {
      q: "How do I know my child is safe?",
      a: "Safeguarding is our top priority. Every single tutor undergoes a comprehensive background and identity check (equivalent to a DBS check). All lessons take place within our secure platform and are recorded for safety and review."
    },
    {
      q: "Can we try a tutor before committing?",
      a: "Yes! We offer a 15-minute free trial session with any tutor so you and your child can make sure they're the right fit before booking a full lesson."
    },
    {
      q: "What if we're not happy with the tutor?",
      a: "We offer a money-back guarantee on your first paid lesson. If you don't feel it's working out, we'll refund the cost and help you find a better match."
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Affordable Private Tutors | 11 Plus, GCSE & SATs | KlaraLearn"
        description="Connect with professional private tutors from £15/hr. Expert online tuition for 11 Plus, GCSE Maths, English & Science. Book a free trial today."
        path="/"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-[#1B3D5C]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B3D5C] to-[#00A896]/20 mix-blend-multiply" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Affordable private tutors for 11 Plus, GCSE & SATs
              </h1>
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
                World-class education shouldn't be a luxury. Connect with highly-rated global tutors who understand the UK curriculum—at a fraction of the cost.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white border-none text-lg h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                   <Link href="/find-a-tutor">Browse Live Tutors</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg h-14 px-8 rounded-full backdrop-blur-sm transition-all">
                  <a href="https://app.klaralearn.com">Book a Free Trial</a>
                </Button>
              </div>
              
              <div className="mt-10 flex items-center gap-4 text-sm text-white/80 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-5 h-5 text-[#00A896]" /> DBS Checked</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-5 h-5 text-[#00A896]" /> Free Trial</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-5 h-5 text-[#00A896]" /> No Commitments</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TrustStats />

      {/* Pricing Comparison Snippet */}
      <section className="py-12 bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl text-secondary font-medium flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
            <span className="opacity-70 line-through decoration-destructive decoration-2">Local UK tutors: £35-£80/hr</span>
            <span className="hidden md:inline text-primary/30">|</span>
            <span className="text-primary font-bold">KlaraLearn tutors: from £15/hr</span>
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

      {/* Featured Tutors */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Meet some of our expert tutors</h2>
            <p className="text-lg text-slate-600 mb-8">Passionate educators from around the world, rigorously vetted to teach the UK curriculum.</p>
            <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8">
               <Link href="/find-a-tutor">Browse All Tutors</Link>
            </Button>
          </div>

          <TutorShowcase fallbackTutors={tutors} limit={6} />
        </div>
      </section>

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
