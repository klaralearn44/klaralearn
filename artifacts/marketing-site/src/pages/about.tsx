import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Target, Heart, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <Layout>
      <SEOHead 
        title="About KlaraLearn | Affordable Private Tutoring Mission"
        description="Learn about KlaraLearn's mission to make high-quality private tutoring affordable for every UK family through a global network of vetted educators."
        path="/about"
      />

      <section className="bg-slate-50 pt-24 pb-20 border-b">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
            Making world-class tuition accessible to every UK family
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            KlaraLearn is a UK-focused online tutoring marketplace connecting parents with highly qualified, affordable educators from around the globe.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg text-slate-600 mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-6 text-center">Who it's for</h2>
            <p className="mb-12 text-center">
              We built KlaraLearn for parents who want the best for their children but are frustrated by the exclusionary pricing of the UK private tutoring market. Whether your child is preparing for the highly competitive 11 Plus grammar school exams, needs a confidence boost in GCSE Maths, or requires support for their SATs, KlaraLearn provides a trusted pathway to academic success without the £50/hour local premium.
            </p>

            <div className="grid md:grid-cols-2 gap-12 my-16 not-prose">
              <div className="bg-slate-50 p-8 rounded-2xl border">
                <Target className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-secondary mb-4">Our Mission</h3>
                <p className="text-slate-600">
                  To democratise access to high-quality private education. We believe that a child's academic potential should not be limited by their family's postcode or budget. By building a transparent, secure, global marketplace, we are radically lowering the cost of tutoring while maintaining uncompromising standards of quality.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border">
                <Globe className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-secondary mb-4">The Global Advantage</h3>
                <p className="text-slate-600">
                  There are brilliant, experienced educators all over the world who understand the UK curriculum perfectly. By bridging the gap between UK parents and these international professionals, we bypass local agency fees and geographic constraints, delivering exceptional value directly to you.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-secondary mb-6 mt-16 text-center">How we ensure quality</h2>
            <p className="mb-8">
              Affordability means nothing without quality and safety. We are obsessive about the tutors we allow onto the platform.
            </p>
            <ul className="space-y-4 mb-16">
              <li className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-accent shrink-0 mt-1" />
                <span><strong>Rigorous Vetting:</strong> Every tutor must pass identity verification, background checks, and a live teaching assessment.</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-accent shrink-0 mt-1" />
                <span><strong>Transparent Reviews:</strong> You see real, unedited reviews from other parents who have booked lessons.</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-accent shrink-0 mt-1" />
                <span><strong>Secure Classroom:</strong> All lessons happen in our purpose-built virtual classroom, which is safe, monitored, and recorded for safeguarding.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-secondary mb-6 text-center">Company Background</h2>
            <p>
              Founded in 2026, KlaraLearn was born out of the personal frustrations of parents navigating the UK grammar school system. Facing local tutor rates of up to £80 per hour, the founders realised that the traditional tutoring agency model was fundamentally broken—serving only those who could afford the highest premiums.
            </p>
            <p>
              By applying a modern marketplace model to online education, KlaraLearn has grown to host over 500 verified tutors, helping thousands of students across the UK achieve their academic goals. We remain proudly independent and fiercely committed to our mission of accessible education.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
