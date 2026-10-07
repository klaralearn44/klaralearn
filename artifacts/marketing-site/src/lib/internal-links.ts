export type SiteLink = { href: string; label: string };

/** Visible sitewide paths. Anchor text stays descriptive so crawlers and parents see the same label. */
export const subjectLinks: readonly SiteLink[] = [
  { href: '/subjects/11-plus', label: '11 Plus Tutoring' },
  { href: '/subjects/maths', label: 'Maths Tutoring' },
  { href: '/subjects/gcse-maths', label: 'GCSE Maths' },
  { href: '/subjects/english', label: 'English Tutoring' },
  { href: '/subjects/science', label: 'Science Tutoring' },
];

export const locationLinks: readonly SiteLink[] = [
  { href: '/location/london', label: 'Tutors in London' },
  { href: '/location/kent', label: 'Tutors in Kent' },
  { href: '/location/manchester', label: 'Tutors in Manchester' },
  { href: '/location/online', label: 'Online Tutors UK' },
];

export const familyLinks: readonly SiteLink[] = [
  { href: '/about', label: 'About Us' },
  { href: '/safeguarding', label: 'Safeguarding' },
  { href: '/find-a-tutor', label: 'Find a Tutor' },
  { href: '/become-a-tutor', label: 'Become a Tutor' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/blog', label: 'Blog' },
  { href: '/parents', label: 'For Parents' },
  { href: '/parents/tools', label: 'Parent Tools' },
];

export const guideLinks: readonly SiteLink[] = [
  { href: '/blog/what-is-the-11-plus', label: 'What Is the 11 Plus?' },
  { href: '/blog/how-to-prepare-for-11-plus', label: 'How to Prepare for the 11 Plus' },
  { href: '/blog/11-plus-verbal-reasoning', label: 'Verbal and Non-Verbal Reasoning' },
  { href: '/blog/11-plus-practice-papers', label: '11 Plus Practice Papers' },
  { href: '/blog/what-is-a-grammar-school', label: 'What Is a Grammar School?' },
  { href: '/blog/grammar-school-admissions', label: 'Grammar School Admissions' },
  { href: '/blog/best-grammar-schools-uk', label: 'Best Grammar Schools' },
  { href: '/blog/grammar-school-fees', label: 'Grammar School Fees' },
  { href: '/blog/grammar-school-vs-comprehensive', label: 'Grammar vs Comprehensive' },
  { href: '/blog/how-much-does-tutoring-cost', label: 'Tutoring Costs' },
];
