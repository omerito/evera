export interface Portfolio {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  detailedDescription?: string;
  challenges?: string;
  solutions?: string;
  results?: string;
  link?: string;
  caseStudyLink?: string;
}
