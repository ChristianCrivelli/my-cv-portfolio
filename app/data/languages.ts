export interface Language {
  name: string;
  level: 'Native' | 'Fluent' | 'Advanced' | 'Intermediate' | 'Basic';
}

export const languages: Language[] = [
  { name: 'Portuguese', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Italian', level: 'Advanced' },
];