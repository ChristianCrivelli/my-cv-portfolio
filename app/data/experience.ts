export interface ExperienceEntry {
  employer: string;
  role: string;
  startDate: string; // 'YYYY-MM'
  endDate?: string;   // omit if current
  location?: string;
  highlights: string[]; // TODO: replace placeholders with real responsibilities/impact
}

export const experience: ExperienceEntry[] = [
  {
    // TODO: fill in real employer, dates, role, and highlights
    employer: 'Employer Name',
    role: 'Role Title',
    startDate: '2023-01',
    endDate: '2023-12',
    location: 'City, Country',
    highlights: [
      'Placeholder — replace with a real responsibility, framed around a transferable skill (reliability, pace, accuracy, customer communication).',
      'Placeholder — second bullet.',
    ],feat: restore experience timeline with data file
  },
];