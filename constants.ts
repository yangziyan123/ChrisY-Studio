import { Project, ProjectCategory, ServiceItem, NavItem } from './types';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export const BRAND_NAME = "ChrisY";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Ethereal Gaze',
    category: ProjectCategory.PORTRAIT,
    imageUrl: 'https://picsum.photos/seed/chris1/800/1000',
    year: '2024'
  },
  {
    id: '2',
    title: 'Urban Solitude',
    category: ProjectCategory.URBAN,
    imageUrl: 'https://picsum.photos/seed/chris2/800/600',
    year: '2023'
  },
  {
    id: '3',
    title: 'Mountain Mist',
    category: ProjectCategory.NATURE,
    imageUrl: 'https://picsum.photos/seed/chris3/800/1000',
    year: '2024'
  },
  {
    id: '4',
    title: 'Noir Fashion',
    category: ProjectCategory.COMMERCIAL,
    imageUrl: 'https://picsum.photos/seed/chris4/800/800',
    year: '2023'
  },
  {
    id: '5',
    title: 'Neon Nights',
    category: ProjectCategory.URBAN,
    imageUrl: 'https://picsum.photos/seed/chris5/800/1000',
    year: '2024'
  },
  {
    id: '6',
    title: 'Silent Waters',
    category: ProjectCategory.NATURE,
    imageUrl: 'https://picsum.photos/seed/chris6/800/600',
    year: '2023'
  },
  {
    id: '7',
    title: 'Golden Hour',
    category: ProjectCategory.PORTRAIT,
    imageUrl: 'https://picsum.photos/seed/chris7/800/1000',
    year: '2024'
  },
  {
    id: '8',
    title: 'Product Minimal',
    category: ProjectCategory.COMMERCIAL,
    imageUrl: 'https://picsum.photos/seed/chris8/800/800',
    year: '2024'
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'basic',
    title: 'Essential Portrait',
    price: '$299',
    description: 'Perfect for individuals looking for professional headshots or social media content.',
    features: [
      '1 Hour Session',
      '1 Location',
      '10 Retouched Images',
      'Online Gallery',
      'Print Rights'
    ]
  },
  {
    id: 'standard',
    title: 'Brand Narrative',
    price: '$899',
    description: 'Comprehensive coverage for brands and small businesses to tell their story.',
    popular: true,
    features: [
      '3 Hour Session',
      '2 Locations',
      '40 Retouched Images',
      'Style Consultation',
      'Commercial License',
      'Priority Editing'
    ]
  },
  {
    id: 'premium',
    title: 'Full Editorial',
    price: '$1,999',
    description: 'A complete production experience for high-end campaigns and editorial spreads.',
    features: [
      'Full Day Coverage',
      'Studio + On-location',
      'Unlimited Edits',
      'Hair & Makeup Artist',
      'Creative Direction',
      'Same-day Teasers'
    ]
  }
];

export const SOCIAL_LINKS = [
  { platform: 'Instagram', url: '#', icon: Instagram },
  { platform: 'Twitter', url: '#', icon: Twitter },
  { platform: 'LinkedIn', url: '#', icon: Linkedin },
  { platform: 'Email', url: 'mailto:hello@chrisy.studio', icon: Mail },
];