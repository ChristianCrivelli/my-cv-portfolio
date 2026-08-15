export interface Skill {
  name: string;
  proficiency: number; // 1-5
}

export const skills: Skill[] = [
  { name: 'SQL', proficiency: 4 },
  { name: 'Python', proficiency: 4 },
  { name: 'R', proficiency: 3 },
  { name: 'Statistical Analysis', proficiency: 4 },
  { name: 'Excel', proficiency: 4 },
  { name: 'Data Engineering', proficiency: 3 },
];