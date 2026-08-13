import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface SubjectCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  index?: number;
}

export function SubjectCard({ title, description, href, icon, index = 0 }: SubjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href}>
        <div className="group h-full bg-white border rounded-2xl p-8 hover:shadow-lg transition-all hover:border-primary/30 flex flex-col items-start cursor-pointer">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
          <p className="text-slate-600 mb-8 flex-1">{description}</p>
          <div className="flex items-center gap-2 text-primary font-medium mt-auto group-hover:gap-3 transition-all">
            Explore Tutors <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
