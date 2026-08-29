import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { Target, Heart, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <Layout>
      <SEOHead 
        title="About KlaraLearn | Affordable Private Tutoring Mission"
        description="Learn about KlaraLearn's mission to make private tutoring more affordable for UK families through an online tutor marketplace."
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

            <h2 className="text-3xl font-bold text-secondary mb-6 mt-16 text-center">Making an informed choice</h2>
            <p className="mb-8">
              Parents can use the information on an available tutor profile to compare options and decide what suits their child.
            </p>
            <ul className="space-y-4 mb-16">
              <li className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-accent shrink-0 mt-1" />
                <span><strong>Profile details:</strong> Browse listed subjects, experience, qualifications where provided and hourly rates.</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-accent shrink-0 mt-1" />
                <span><strong>Compare tutors:</strong> Look across available profiles for support relevant to your child's school stage and goals.</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-accent shrink-0 mt-1" />
                <span><strong>Ask before booking:</strong> Arrange an introductory conversation to discuss your needs and questions.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-secondary mb-6 text-center">Company Background</h2>
            <p>
              Founded in 2026, KlaraLearn was born out of the personal frustrations of parents navigating the UK grammar school system. Facing local tutor rates of up to £80 per hour, the founders realised that the traditional tutoring agency model was fundamentally broken—serving only those who could afford the highest premiums.
            </p>
            <p>
              By applying a modern marketplace model to online education, KlaraLearn helps UK families find available tutors and compare profile details before booking. We remain proudly independent and committed to making education more accessible.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
