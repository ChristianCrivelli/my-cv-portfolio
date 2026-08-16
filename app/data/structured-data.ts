export function getPersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Christian Crivelli',
    jobTitle: 'Business Analytics Student',
    url: 'https://your-domain.com', // TODO: replace once deployed
    sameAs: [
      'https://www.linkedin.com/in/christian-crivelli-120391231/',
      'https://github.com/ChristianCrivelli',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Maastricht University School of Business and Economics',
    },
    knowsAbout: [
      'SQL',
      'Python',
      'R',
      'Statistical Data Analysis',
      'Data Engineering',
      'Data Governance',
    ],
    description:
      'Business Analytics student building data-driven projects spanning sports analytics, civic data, demographic research, and recommendation systems.',
  };
}