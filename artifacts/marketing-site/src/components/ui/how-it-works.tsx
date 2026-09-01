import { motion } from 'framer-motion';
import { Search, CalendarCheck, ShieldCheck, LineChart } from 'lucide-react';

export function HowItWorksSteps() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "1. Find your tutor",
      description: "Match based on subject, age, curriculum, learning goal, availability, and budget."
    },
    {
      icon: <CalendarCheck className="w-8 h-8" />,
      title: "2. Meet your tutor",
      description: "Book a 15-minute introductory session to ensure they're the right fit for your child."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "3. Learn securely",
      description: "Lessons happen through KlaraLearn. Every session is recorded and available to parents for transparency."
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "4. Track progress",
      description: "Parents can see completed lessons, topics covered, tutor feedback, and progress over time."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231B3D5C\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">Every lesson is designed with transparency in mind</h2>
          <p className="text-lg text-slate-600">Lessons are conducted through our secure learning environment, with session recording and parent visibility built into the experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-primary mb-6 relative z-10">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
