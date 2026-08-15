export interface ExperienceEntry {
  company: string;
  role: string;
  startDate: string;   // e.g. '2024-06'
  endDate?: string;     // omit if current
  location?: string;
  highlights: string[]; // each should lead with an action + end with a measurable result
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Company Name',
    role: 'Data Analyst Intern',
    startDate: '2025-06',
    endDate: '2025-09',
    location: 'City, Country',
    highlights: [
      'Automated the weekly reporting pipeline with Python, cutting manual processing time from 4 hours to 20 minutes.',
      'Built a dashboard that flagged data anomalies in real time, reducing reporting errors by 30%.',
    ],
  },
  // add more entries, most recent first
];