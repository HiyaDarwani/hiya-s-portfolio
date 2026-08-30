import type { Project, SkillNode, NavItem, ContactLink } from '../types';

export const navItems: NavItem[] = [
  { index: '01', label: 'ARRIVAL', sectionId: 'arrival' },
  { index: '02', label: 'ENGINEER', sectionId: 'engineer' },
  { index: '03', label: 'PROJECTS', sectionId: 'projects' },
  { index: '04', label: 'LAB', sectionId: 'lab' },
  { index: '05', label: 'CREATIVE', sectionId: 'creative' },
  { index: '06', label: 'CONTACT', sectionId: 'contact' },
];

export const projects: Project[] = [
  {
    id: 'catalyst',
    title: 'CATALYST',
    subtitle: 'Skill-Verified Team Matching for Hackathons',
    description:
      'A mobile application designed to form balanced hackathon teams using verified skills and commitment-based compatibility. Catalyst intelligently matches participants by analysing skill gaps, role distribution, and project preferences — removing the chaos from team formation.',
    technologies: ['Flutter', 'Firebase', 'Dart Frog', 'Gemini'],
    status: 'complete',
    year: '2024',
    featured: true,
  },
  {
    id: 'resumeroaster',
    title: 'RESUMEROASTER',
    subtitle: 'AI-Powered Structured Resume Analysis & Direct Feedback',
    description:
      'A full-stack application that analyzes resumes and provides structured, direct feedback using a multi-layer prompting architecture, PDF parsing, and AI classification.',
    technologies: ['Next.js', 'Claude', 'Prisma', 'Supabase'],
    status: 'complete',
    year: '2024',
  },
  {
    id: 'docrag',
    title: 'DOCRAG',
    subtitle: 'Document Intelligence Powered by Retrieval-Augmented Generation',
    description:
      'Document-isolated retrieval with streamed, source-grounded responses. Handles document ingestion and enables users to interact with documents using vector-grounded search and citations.',
    technologies: ['RAG', 'pgvector', 'Jina', 'SSE'],
    status: 'complete',
    year: '2024',
  },
  {
    id: 'overwatch',
    title: 'OVERWATCH',
    subtitle: 'Real-Time Audio Processing & Latency Telemetry System',
    description:
      'Real-time audio processing with DSP, ML inference and telemetry. Implements STFT, circular frame buffering, overlap-add reconstruction, spectral subtraction, and ONNX Runtime.',
    technologies: ['Python', 'DSP', 'STFT', 'ONNX'],
    status: 'complete',
    year: '2024',
  },
  {
    id: 'jarvis',
    title: 'J.A.R.V.I.S.',
    subtitle: 'Local Voice-Enabled AI Personal Assistant & System Agent',
    description:
      'A local, voice-enabled AI personal assistant built with Python and Ollama. Operates via an autonomous loop to observe system state, understand intent, plan tasks, act on local applications, and verify outcomes.',
    technologies: ['Local AI Agent', 'Python', 'Ollama', 'System Control'],
    status: 'wip',
    year: '2024',
  },
];

export const skillNodes: SkillNode[] = [
  {
    id: 'programming',
    label: 'PROGRAMMING',
    category: 'core',
    children: ['python', 'c', 'cpp', 'java', 'javascript', 'sql'],
    description: 'General-purpose programming across systems and application layers',
  },
  {
    id: 'hardware',
    label: 'HARDWARE',
    category: 'core',
    children: ['arduino', 'esp32', 'fpga'],
    description: 'Physical computing and hardware design',
  },
  {
    id: 'embedded',
    label: 'EMBEDDED',
    category: 'core',
    children: ['iot', 'verilog', 'c', 'esp32'],
    description: 'Firmware and embedded systems development',
  },
  {
    id: 'web',
    label: 'WEB',
    category: 'core',
    children: ['javascript', 'firebase', 'webdev'],
    description: 'Web application development and deployment',
  },
  {
    id: 'mobile',
    label: 'MOBILE',
    category: 'core',
    children: ['flutter', 'firebase'],
    description: 'Cross-platform mobile application development',
  },
  {
    id: 'creative',
    label: 'CREATIVE',
    category: 'core',
    children: [],
    description: 'Writing, design thinking and creative problem-solving',
  },
  { id: 'python', label: 'Python', category: 'language' },
  { id: 'c', label: 'C', category: 'language' },
  { id: 'cpp', label: 'C++', category: 'language' },
  { id: 'java', label: 'Java', category: 'language' },
  { id: 'javascript', label: 'JavaScript', category: 'language' },
  { id: 'sql', label: 'SQL', category: 'language' },
  { id: 'arduino', label: 'Arduino', category: 'platform' },
  { id: 'esp32', label: 'ESP32', category: 'platform' },
  { id: 'iot', label: 'IoT', category: 'platform' },
  { id: 'fpga', label: 'FPGA', category: 'platform' },
  { id: 'verilog', label: 'Verilog', category: 'language' },
  { id: 'flutter', label: 'Flutter', category: 'platform' },
  { id: 'firebase', label: 'Firebase', category: 'tool' },
  { id: 'webdev', label: 'Web Dev', category: 'tool' },
];

export const contactLinks: ContactLink[] = [
  { label: 'GITHUB', href: 'https://github.com/hiyadharwani', type: 'github' },
  { label: 'LINKEDIN', href: 'https://linkedin.com/in/hiyadharwani', type: 'linkedin' },
  { label: 'EMAIL', href: 'mailto:hiya@example.com', type: 'email' },
  { label: 'INSTAGRAM', href: 'https://instagram.com/hiyadharwani', type: 'instagram' },
];
