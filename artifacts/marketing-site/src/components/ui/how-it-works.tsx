import { motion } from 'framer-motion';
import { Search, CalendarCheck, GraduationCap } from 'lucide-react';

export function HowItWorksSteps() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search & filter",
      description: "Browse our vetted global tutors by subject, level, and hourly rate. Read real reviews from other parents."
    },
    {
      icon: <CalendarCheck className="w-8 h-8" />,
      title: "Book a free trial",
      description: "Message your chosen tutor and schedule a 15-minute free trial to see if they're the right fit for your child."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Start learning",
      description: "Join lessons in our secure online classroom. Pay easily after each session and watch their confidence grow."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231B3D5C\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How it works</h2>
          <p className="text-lg text-slate-600">Finding the perfect tutor is simple. We've removed the friction so you can focus on their learning.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-primary mb-6 relative z-10">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold shadow-md">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
