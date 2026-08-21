export interface ExperienceEntry {
  employer: string;
  role: string;
  startDate: string; // 'YYYY-MM'
  endDate?: string;   // omit if current
  location?: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    employer: 'Brasserie Monopole',
    role: 'Waiter',
    startDate: '2024-04',
    endDate: '2025-01',
    location: 'Maastricht, Netherlands',
    highlights: [
      'Served guests at a busy restaurant in central Maastricht, handling high-volume service with pace and accuracy.',
      'Maintained customer communication and reliability standards while balancing a full academic course load.',
    ],
  },
  {
    employer: "Dunkin' Donuts",
    role: 'Barista',
    startDate: '2024-12',
    endDate: '2025-07',
    location: 'Maastricht, Netherlands',
    highlights: [
      'Prepared and served drinks and food during high-traffic shifts, prioritizing speed and order accuracy.',
      'Handled point-of-sale and customer-facing responsibilities independently.',
    ],
  },
  {
    employer: 'The Social Hub Maastricht',
    role: 'Waiter',
    startDate: '2026-02',
    location: 'Maastricht, Netherlands',
    highlights: [
      'Providing dining and event service while completing the Business Intelligence & Smart Services Master\'s.',
      'Maintaining reliability and customer-facing service skills alongside a full-time academic schedule.',
    ],
  },
];
