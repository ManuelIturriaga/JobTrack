export interface Job {
  id: string;
  role: string;
  company: string;
  location: string;
  status: 'wishlist' | 'applied' | 'interviewing' | 'offers';
  level: 'Junior' | 'Mid' | 'Senior' | 'Lead';
  logoLetter: string;
  addedAgo: string;
  matchScore?: number;
  tags?: string[];
  nextStep?: string;
  salary?: string;
  expiresIn?: string;
}

export interface UserProfile {
  name: string;
  tier: 'Free' | 'Premium';
  initials: string;
}

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    role: 'Product Designer',
    company: 'Google',
    location: 'Remote',
    status: 'wishlist',
    level: 'Junior',
    logoLetter: 'G',
    addedAgo: '2d ago',
    matchScore: 92
  },
  {
    id: '2',
    role: 'UI Engineer',
    company: 'Figma',
    location: 'San Francisco',
    status: 'wishlist',
    level: 'Junior',
    logoLetter: 'F',
    addedAgo: '5d ago',
    matchScore: 88
  },
  {
    id: '3',
    role: 'Frontend Developer',
    company: 'Stripe',
    location: 'Remote',
    status: 'applied',
    level: 'Mid',
    logoLetter: 'S',
    addedAgo: '1w ago',
    tags: ['PENDING'],
    nextStep: 'Follow up in 3d',
    matchScore: 95
  },
  {
    id: '4',
    role: 'UX Researcher',
    company: 'Airbnb',
    location: 'Hybrid',
    status: 'interviewing',
    level: 'Mid',
    logoLetter: 'A',
    addedAgo: '2w ago',
    tags: ['ROUND 2', 'TOP MATCH'],
    nextStep: 'Tomorrow, 2:00 PM',
    matchScore: 98
  },
  {
    id: '5',
    role: 'Visual Designer',
    company: 'Netflix',
    location: 'Los Angeles',
    status: 'interviewing',
    level: 'Senior',
    logoLetter: 'N',
    addedAgo: '1w ago',
    tags: ['ROUND 1'],
    nextStep: 'Scheduling...',
    matchScore: 82
  },
  {
    id: '6',
    role: 'Design Lead',
    company: 'Spotify',
    location: 'Stockholm',
    status: 'offers',
    level: 'Lead',
    logoLetter: 'S',
    addedAgo: '3w ago',
    tags: ['NEW OFFER'],
    salary: '$140k + Equity',
    expiresIn: 'Expires in 2d',
    matchScore: 99
  }
];