import projects from './projects.json';
import publications from './publications.json';

export const FEATURED_IDS = ['track-my-container', 'bat-sop', 'unilever-argus', 'anpr-bangla'];
const deployedIndustryProjects = projects.filter(
  project => project.maturity === 'Industry implementation'
).length;

export const HERO_STATS = [
  { value: String(projects.length), label: 'CV/ML works' },
  { value: String(deployedIndustryProjects), label: 'Industry deployments' },
  { value: String(publications.length), label: 'Research papers' },
];
export const CAREER_EVIDENCE = [
  { ...HERO_STATS[0], detail: 'Industry, R&D, research, and academic work', icon: 'repo' },
  { ...HERO_STATS[1], detail: 'Deployed projects from ANPR through Mobil', icon: 'briefcase' },
  { ...HERO_STATS[2], detail: 'One journal article and two preprints', icon: 'book' },
  { value: 'CV + Edge AI', label: 'Engineering focus', detail: 'Models, systems, and deployment', icon: 'gear' },
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
