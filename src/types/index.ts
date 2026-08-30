export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  status: 'complete' | 'wip' | 'concept';
  year: string;
  featured?: boolean;
}

export interface SkillNode {
  id: string;
  label: string;
  category: 'core' | 'language' | 'platform' | 'tool';
  children?: string[];
  description?: string;
}

export interface NavItem {
  index: string;
  label: string;
  sectionId: string;
}

export interface ParallaxConfig {
  depth: 'background' | 'midground' | 'foreground';
  factor: number;
}

export interface ContactLink {
  label: string;
  href: string;
  type: 'github' | 'linkedin' | 'email' | 'instagram';
}
