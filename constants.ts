
import { Skill, Experience, Project, Education } from './types';

export const SKILLS: Skill[] = [
  { name: 'Prompt Engineering', level: 98, icon: 'fa-wand-magic-sparkles', category: 'core' },
  { name: 'Deep Learning', level: 88, icon: 'fa-brain', category: 'core' },
  { name: 'Machine Learning', level: 92, icon: 'fa-robot', category: 'core' },
  { name: 'Data Analytics', level: 90, icon: 'fa-chart-line', category: 'core' },
  { name: 'Python (Programming)', level: 95, icon: 'fa-brands fa-python', category: 'core' },
  { name: 'PyTorch / TensorFlow', level: 85, icon: 'fa-microchip', category: 'framework' },
  { name: 'Generative AI', level: 96, icon: 'fa-sparkles', category: 'core' },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'AI & Tech Creativity Mentor',
    company: 'Saylani Z.A.I.T Park',
    period: 'Jun 2025 – Present',
    description: [
      'Architecting advanced curricula for Agentic AI workflows and LLM orchestration.',
      'Mentoring over 500+ students in developing real-world generative AI applications.',
      'Leading sessions on high-impact AI strategies within the SMIT ecosystem.'
    ],
    technologies: ['Agentic AI', 'LangChain', 'Python', 'Enterprise LLMs']
  },
  {
    role: 'Lead Techno Trainer',
    company: 'Saylani Z.A.I.T Park',
    period: 'Mar 2025 – Present',
    description: [
      'Facilitating intensive coding bootcamps focused on Data Science and ML scalability.',
      'Developing hands-on modules for predictive modeling and feature engineering.',
      'Providing technical leadership and peer-review for capstone AI projects.'
    ],
    technologies: ['Machine Learning', 'Data Visualization', 'Scikit-Learn']
  },
  {
    role: 'AI & Data Science Program Lead',
    company: 'Saylani Mentorship Track',
    period: 'Jan 2025 – Present',
    description: [
      'Strategizing the long-term roadmap for AI mentorship and talent development.',
      'Coordinating with industry experts to align program outcomes with global AI trends.',
      'Designing technical evaluation frameworks for emerging AI specialists.'
    ],
    technologies: ['Strategic Planning', 'GenAI', 'Mentorship']
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Advanced Banking AI System',
    description: 'A comprehensive, high-security banking backend featuring predictive fraud detection and automated transaction classification.',
    tech: ['Python', 'FastAPI', 'Scikit-Learn', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    github: 'https://github.com'
  },
  {
    title: 'Agentic Workflow Automator',
    description: 'A multi-agent system designed to handle complex business logic and autonomous research using LangGraph.',
    tech: ['LangGraph', 'Python', 'OpenAI', 'Streamlit'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    github: 'https://github.com'
  },
  {
    title: 'Precision Sentiment Engine',
    description: 'Real-time NLP analysis tool that processes massive social media feeds to detect market shifts and consumer trends.',
    tech: ['BERT', 'TensorFlow', 'React', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200',
    link: 'https://demo.com'
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: 'Pre-Engineering (Second Year)',
    institution: 'Govt. Boys Jinnah College',
    period: '2023 - Present',
    details: 'Focusing on advanced mathematics and physics, building a rigorous analytical foundation for complex engineering systems.'
  },
  {
    degree: 'AI & Data Science Specialist',
    institution: 'Saylani Mass IT Training (SMIT)',
    period: '2024',
    details: 'Completed an intensive professional program covering advanced Machine Learning, Deep Learning, and end-to-end Python development.'
  }
];
