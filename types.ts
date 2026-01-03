
export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'core' | 'framework' | 'tool';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}
