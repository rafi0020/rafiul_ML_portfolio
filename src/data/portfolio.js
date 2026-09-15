import projects from './projects.json';
import publications from './publications.json';

export const FEATURED_IDS = ['track-my-container', 'bat-sop', 'unilever-argus', 'anpr-bangla'];
export const HERO_STATS = [
  { value: String(projects.length), label: 'Portfolio case studies' },
  { value: String(publications.filter(p => p.type === 'journal').length), label: 'Journal article' },
  { value: String(publications.filter(p => p.type === 'preprint').length), label: 'Research preprints' },
];
export const CAREER_EVIDENCE = [
  { ...HERO_STATS[0], detail: 'Including system modules and R&D', icon: 'repo' },
  { value: 'CV + Edge AI', label: 'Engineering focus', detail: 'Models, systems, and deployment', icon: 'gear' },
  { ...HERO_STATS[1], detail: 'Peer-reviewed research', icon: 'book' },
  { ...HERO_STATS[2], detail: 'Separate from the journal article', icon: 'doc' },
];
export const SITE = 'https://www.rafiulislam.me';
export const DEFAULT_IMAGE = '/assets/og-cover.png';
export const ROUTE_META = {
  '/': { title: null, description: 'Machine Learning Engineer building computer vision and Edge AI systems, with research in computational healthcare.' },
  '/about': { title: 'About', description: 'Machine learning engineer and researcher working on computer vision, Edge AI, and computational healthcare.' },
  '/projects': { title: 'Projects', description: 'Industry case studies, internal R&D, research, and academic projects in computer vision and machine learning.' },
  '/research': { title: 'Research', description: 'Peer-reviewed research and preprints in machine learning, computational healthcare, and trustworthy AI.' },
  '/skills': { title: 'Skills', description: 'Computer vision, deep learning, edge deployment, and backend tools used across industry work and research.' },
  '/contact': { title: 'Contact', description: 'Get in touch about roles, collaborations, or research enquiries.' },
};
export const orderedPublications = [...publications].sort((a, b) => a.year - b.year || a.id.localeCompare(b.id));
