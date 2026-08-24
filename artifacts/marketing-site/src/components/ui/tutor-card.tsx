import { Tutor } from '@/data/tutors';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export function TutorCard({ tutor, index = 0 }: { tutor: Tutor, index?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl border p-6 flex flex-col hover:shadow-xl transition-all duration-300 hover-elevate group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-4">
          <Avatar className="w-16 h-16 border-2 border-slate-50">
            {tutor.photoUrl && <AvatarImage src={tutor.photoUrl} alt={`${tutor.name}'s profile`} />}
            <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">{tutor.initials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">{tutor.name}</h3>
            <div className="flex items-center gap-1.5 text-sm text-slate-500 mt-1">
              <span>{tutor.flag}</span>
              <span className="truncate max-w-[120px]">{tutor.country}</span>
            </div>
            {tutor.rating > 0 ? (
              <div className="flex items-center gap-1 mt-1 text-sm font-medium">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span>{tutor.rating.toFixed(1)}</span>
                <span className="text-slate-400">({tutor.reviews})</span>
              </div>
            ) : (
              <p className="mt-1 text-sm font-medium text-primary">New on KlaraLearn</p>
            )}
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-secondary">£{tutor.rate}</div>
          <div className="text-xs text-slate-500">per hour</div>
        </div>
      </div>

      {tutor.headline && <p className="mb-2 text-sm font-semibold text-slate-700 line-clamp-1">{tutor.headline}</p>}
      <p className="text-slate-600 text-sm flex-1 line-clamp-3 leading-relaxed">
        {tutor.bio}
      </p>
      {tutor.experience && <p className="mt-3 text-xs leading-relaxed text-slate-500 line-clamp-2">{tutor.experience}</p>}

      <div className="flex flex-wrap gap-2 my-6">
        {tutor.tags.map(tag => (
          <Badge key={tag} variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200">
            {tag}
          </Badge>
        ))}
      </div>

      <Button asChild className="w-full bg-[#00A896] hover:bg-[#00A896]/90 text-white rounded-full">
        <a href="https://app.klaralearn.com" target="_blank" rel="noopener noreferrer">View Profile</a>
      </Button>
    </motion.div>
  );
}
