import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { TutorCard } from '@/components/ui/tutor-card';
import { tutors } from '@/data/tutors';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'wouter';
import { MapPin } from 'lucide-react';

export function LocationLondon() {
  const londonTutors = tutors.slice(0, 3); // Just showing a few for mockup

  const faqs = [
    {
      q: "How much does a tutor cost in London?",
      a: "Traditional private tutoring in London is among the most expensive in the country, often ranging from £50 to over £80 per hour due to living costs and high demand. By using KlaraLearn, London parents can connect with highly qualified global tutors from just £15 to £35 per hour."
    },
    {
      q: "Can London parents use online tutors?",
      a: "Yes! Online tutoring is completely location-independent. Whether you're in Barnet, Sutton, or Kingston, your child can learn from our expert tutors via our secure online classroom."
    },
    {
      q: "Which grammar schools are in London?",
      a: "London has a highly competitive grammar school landscape. Key areas include the London Borough of Bexley, Bromley, Enfield, Barnet (e.g., Queen Elizabeth's School, Henrietta Barnett), Kingston upon Thames (e.g., Tiffin School), and Sutton (e.g., Sutton Grammar, Nonsuch High School)."
    },
    {
      q: "Do your tutors understand the specific London 11 Plus exams?",
      a: "Yes. Different London boroughs use different exam boards (like GL Assessment or SET). Our 11 Plus specialists are experienced in preparing students for the specific requirements of London grammar school admissions."
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Private Tutors in London — 11 Plus, GCSE & SATs from £15/hr | KlaraLearn"
        description="Looking for private tutors in London? Beat the high local prices. Get expert online tutoring for grammar school admissions, GCSE & SATs from £15/hr."
        path="/location/london"
      />

      <section className="bg-[#1B3D5C] pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1B3D5C] to-[#00A896]/30" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="flex items-center gap-2 text-sm font-medium text-white/70 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span>Locations</span>
            <span>/</span>
            <span className="text-white">London</span>
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-accent" />
            <span className="text-accent font-bold tracking-wider uppercase">London</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Private Tutors in London — 11 Plus, GCSE & SATs from £15/hr
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            London's grammar school landscape is intensely competitive. Sutton, Kingston, and Barnet catchments demand rigorous preparation, but local tutor prices shouldn't hold your child back.
          </p>

          <Button asChild size="lg" className="bg-[#00A896] hover:bg-[#00A896]/90 text-white rounded-full px-8">
            <a href="https://app.klaralearn.com">Find a London Tutor</a>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-secondary mb-4">Online tutors ready to help London students</h2>
            <p className="text-slate-600">Avoid the commute and the high London premiums. Meet our expert tutors who teach online.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {londonTutors.map((tutor, index) => (
              <TutorCard key={tutor.id} tutor={tutor} index={index} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" className="rounded-full font-semibold px-8 border-primary text-primary hover:bg-primary hover:text-white">
              <a href="https://app.klaralearn.com">Browse All Tutors</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="py-24 bg-slate-50 border-t">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">Tutoring in London: FAQs</h2>
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

      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-secondary mb-8">Explore More</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/subjects/11-plus" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">11 Plus Tutors</Link>
            <Link href="/location/online" className="px-6 py-3 bg-slate-50 border rounded-full font-medium hover:border-primary hover:text-primary transition-colors">Online Tutoring</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
