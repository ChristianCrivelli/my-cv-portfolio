export interface EducationEntry {
  institution: string;
  degree: string;
  startDate: string;
  endDate?: string;
  status: 'completed' | 'in-progress';
  skills?: string[];
  relevantCoursework?: string[];
  logo?: string;
}

export const education: EducationEntry[] = [
  {
    institution: 'Maastricht University School of Business and Economics',
    degree: 'Business Intelligence and Smart Services',
    startDate: '2026-08',
    endDate: '2027-07',
    status: 'in-progress',
  },
  {
    institution: 'Maastricht University School of Business and Economics',
    degree: "Bachelor's degree, Business Analytics",
    startDate: '2023-09',
    endDate: '2026-07',
    status: 'completed',
    skills: ['SQL', 'Microsoft Excel', 'Python', 'R', 'Statistical Data Analysis'],
    relevantCoursework: [
      'Data Engineering and Data Governance',
      'An Analytical Approach to Separating Fact from Fiction',
    ],
  },
];