import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { TutorShowcase } from '@/components/ui/tutor-showcase';
import { tutors } from '@/data/tutors';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'wouter';
import { Clock, PiggyBank, ShieldCheck } from 'lucide-react';

export function LocationOnline() {
  const onlineTutors = tutors.slice(1, 4);

  const faqs = [
    {
      q: "Is online tutoring as effective as in-person tutoring?",
      a: "Yes. Research consistently shows that online tutoring is just as effective as face-to-face tuition. With modern tools like interactive whiteboards, screen sharing, and instant access to digital resources, many students actually find online learning more engaging."
    },
    {
      q: "What equipment do we need?",
      a: "All you need is a laptop or tablet with a reliable internet connection, a webcam, and a microphone. Our platform runs entirely in the browser, so there's no complicated software to install."
    },
    {
      q: "How does payment work for online tutoring?",
      a: "Payments are handled securely through the KlaraLearn platform. You only pay after a session is completed, and we hold the funds safely. No need to worry about cash or bank transfers."
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Online Tutors UK — 11 Plus, GCSE & SATs | KlaraLearn"
        description="Find expert online tutors in the UK. Flexible online tutoring for 11 Plus, GCSE and SATs. Compare global educator profiles and current hourly rates."
        path="/location/online"
      />

      <section className="bg-slate-50 pt-20 pb-20 border-b relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="#00A896" strokeWidth="8" strokeDasharray="10 10" />
            <path d="M20 50 L80 50 M50 20 L50 80" stroke="#1B3D5C" strokeWidth="4" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-6">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span>Locations</span>
            <span>/</span>
            <span className="text-slate-900">Online</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
            Online Tutors UK — 11 Plus, GCSE & SATs
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
            Break free from geographical limits. Access a global network of professional tutors who understand the UK curriculum, offering flexibility and affordability that local tutoring can't match.
          </p>

          <Button asChild size="lg" className="bg-[#E05C2A] hover:bg-[#E05C2A]/90 text-white rounded-full px-8">
            <Link href="/find-a-tutor">Browse Online Tutors</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <PiggyBank className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Lower Cost</h3>
              <p className="text-slate-600">No travel costs or local agency fees. Global tutors mean significantly lower hourly rates without compromising quality.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Ultimate Flexibility</h3>
              <p className="text-slate-600">Schedule lessons that fit your busy family life. Evenings, weekends, and holidays are all easily accommodated.</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Wider Choice</h3>
              <p className="text-slate-600">Don't settle for the only tutor available in your postcode. Choose the perfect match for your child's specific needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Available Online Tutor Profiles</h2>
            <p className="text-slate-600">Review available tutor profiles, subjects and rates before choosing.</p>
          </div>
          
          <div className="mb-12">
            <TutorShowcase fallbackTutors={onlineTutors} limit={3} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">Online Tutoring FAQs</h2>
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

      <section className="py-16 bg-slate-50 border-t">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-secondary mb-8">Keep Exploring</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/find-a-tutor" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Find an Online Tutor</Link>
            <Link href="/parents/tools" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Parent Tools</Link>
            <Link href="/parents" className="px-6 py-3 bg-white border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">For Parents</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
