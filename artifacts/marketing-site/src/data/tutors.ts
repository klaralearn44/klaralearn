export interface Tutor {
  id: string;
  name: string;
  flag: string;
  country: string;
  subject: string;
  rate: number;
  rating: number;
  reviews: number;
  bio: string;
  tags: string[];
  initials: string;
  photoUrl?: string;
  headline?: string;
  experience?: string;
}

export const tutors: Tutor[] = [
  {
    id: "1",
    name: "Dr. Amara S.",
    flag: "🇳🇬",
    country: "Nigeria",
    subject: "11 Plus & GCSE Maths",
    rate: 22,
    rating: 4.9,
    reviews: 142,
    bio: "PhD in Mathematics. 10+ years helping UK students ace the 11 Plus grammar school entrance exams.",
    tags: ["11 Plus", "GCSE Maths", "SATs"],
    initials: "AS"
  },
  {
    id: "2",
    name: "James T.",
    flag: "🇬🇧",
    country: "United Kingdom",
    subject: "GCSE English",
    rate: 35,
    rating: 5.0,
    reviews: 89,
    bio: "Former Head of English at a top London grammar school. Specialist in GCSE text analysis.",
    tags: ["GCSE English", "A-Level"],
    initials: "JT"
  },
  {
    id: "3",
    name: "Priya M.",
    flag: "🇮🇳",
    country: "India",
    subject: "Science & Maths",
    rate: 18,
    rating: 4.8,
    reviews: 215,
    bio: "Passionate science educator making complex physics and chemistry topics easy to grasp for KS3 and GCSE.",
    tags: ["GCSE Science", "GCSE Maths", "KS3"],
    initials: "PM"
  },
  {
    id: "4",
    name: "Maria C.",
    flag: "🇵🇭",
    country: "Philippines",
    subject: "SATs & Primary English",
    rate: 15,
    rating: 4.9,
    reviews: 304,
    bio: "Specializing in primary education. I build foundational confidence in reading, writing, and phonics.",
    tags: ["SATs", "Primary English", "11 Plus"],
    initials: "MC"
  },
  {
    id: "5",
    name: "David O.",
    flag: "🇳🇬",
    country: "Nigeria",
    subject: "11 Plus & Science",
    rate: 20,
    rating: 4.9,
    reviews: 176,
    bio: "Expert in 11 Plus verbal and non-verbal reasoning. Proven track record of grammar school admissions.",
    tags: ["11 Plus", "Verbal Reasoning", "Science"],
    initials: "DO"
  },
  {
    id: "6",
    name: "Sarah L.",
    flag: "🇬🇧",
    country: "United Kingdom",
    subject: "11 Plus & English",
    rate: 32,
    rating: 4.8,
    reviews: 95,
    bio: "London-based tutor with a focus on 11 Plus preparation for highly selective grammar schools.",
    tags: ["11 Plus", "GCSE English", "London"],
    initials: "SL"
  },
];
