import type { Project, SkillNode, NavItem, ContactLink, LabExperiment } from '../types';

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
    subtitle: 'Smart Hackathon Collaboration & Synergy-Based Team Matching',
    description:
      'A mobile platform for hackathon discovery, team creation, and synergy-based matching. Evaluates skill complementarity, time compatibility, commitment alignment, and experience to assemble balanced teams.',
    technologies: ['Flutter', 'Firebase', 'Dart Frog', 'Gemini'],
    status: 'complete',
    year: '2024',
    featured: true,
    githubUrl: 'https://github.com/HiyaDarwani/Catalyst-hopesoffinal',
  },
  {
    id: 'resumeroaster',
    title: 'RESUMEROASTER',
    subtitle: 'AI-Powered Structured Resume Analysis & Direct Feedback',
    description:
      'A full-stack AI application that parses resumes to generate multi-layer structured feedback and ATS evaluation without generic chatbot wrappers.',
    technologies: ['Next.js', 'Claude', 'Prisma', 'Supabase'],
    status: 'complete',
    year: '2024',
    githubUrl: 'https://github.com/HiyaDarwani/AI-Resume-Roaster',
  },
  {
    id: 'docrag',
    title: 'DOCRAG',
    subtitle: 'Document Intelligence Through Retrieval-Augmented Generation',
    description:
      'Document ingestion and document-isolated retrieval pipeline providing streamed, source-grounded answers with citations.',
    technologies: ['RAG', 'pgvector', 'Jina', 'SSE'],
    status: 'complete',
    year: '2024',
    githubUrl: 'https://github.com/HiyaDarwani/AI-Chatbot-with-Document-RAG',
  },
  {
    id: 'overwatch',
    title: 'OVERWATCH',
    subtitle: 'Real-Time Audio Processing & Telemetry System',
    description:
      'A real-time audio processing system implementing STFT, circular frame buffering, spectral subtraction, Wiener filtering, and hardware-aware ONNX ML inference.',
    technologies: ['Python', 'DSP', 'STFT', 'ONNX'],
    status: 'complete',
    year: '2024',
    githubUrl: 'https://github.com/Shantu-2580/OverWatch',
  },
  {
    id: 'jarvis',
    title: 'J.A.R.V.I.S.',
    subtitle: 'Local Voice-Enabled AI Personal Assistant & System Agent',
    description:
      'A local AI personal assistant built with Python and Ollama operating via an autonomous agent loop (Observe → Understand → Plan → Act → Verify) to execute system actions and voice interaction.',
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

export const labExperiments: LabExperiment[] = [
  {
    id: 'audio-dsp',
    index: '01',
    title: 'AUDIO DSP / STFT',
    purpose: 'Exploring spectral signal processing through short-time Fourier transforms, frame-based processing, and filtering.',
    concepts: ['STFT', 'FRAME BUFFERING', 'SPECTRAL FILTERING', 'WIENER FILTERING', 'ONNX INFERENCE'],
    flow: ['AUDIO INPUT', 'STFT', 'DSP / ML', 'TELEMETRY'],
    indicators: ['REAL-TIME DSP', 'LATENCY TELEMETRY', 'SPECTRAL SUBTRACTION'],
    sourceProject: 'OVERWATCH',
  },
  {
    id: 'local-ai-agent',
    index: '02',
    title: 'LOCAL AI AGENT',
    purpose: 'Autonomous execution loop framing for local AI, Ollama integration, and system-level control.',
    concepts: ['LOCAL AI AGENT', 'OLLAMA INTEGRATION', 'VOICE INTERACTION', 'SYSTEM CONTROL'],
    flow: ['OBSERVE', 'UNDERSTAND', 'PLAN', 'ACT', 'VERIFY'],
    indicators: ['SYSTEM AWARENESS', 'LOCAL AI // VOICE ENABLED', 'EXECUTION LOOP'],
    sourceProject: 'J.A.R.V.I.S.',
  },
  {
    id: 'vector-retrieval',
    index: '03',
    title: 'VECTOR RETRIEVAL',
    purpose: 'Document intelligence through retrieval-augmented generation and source-grounded answers.',
    concepts: ['RAG PIPELINE', 'PGVECTOR', 'JINA EMBEDDINGS', 'SOURCE-GROUNDED'],
    flow: ['INGEST', 'EMBED', 'RETRIEVE', 'CITE'],
    indicators: ['VECTOR RETRIEVAL', 'STREAMING RESPONSE', 'ISOLATED RETRIEVAL'],
    sourceProject: 'DOCRAG',
  },
];
