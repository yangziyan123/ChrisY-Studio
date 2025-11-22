import { Project, ProjectCategory, ServiceItem, NavItem } from './types';
import { MessageCircleMore, Music2, Mail } from 'lucide-react';

export const BRAND_NAME = "ChrisY";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  // {
  //   id: '1',
  //   title: 'Ethereal Gaze',
  //   category: ProjectCategory.PORTRAIT,
  //   imageUrl: 'https://picsum.photos/seed/chris1/800/1000',
  //   year: '2024'
  // },
  // {
  //   id: '2',
  //   title: 'Urban Solitude',
  //   category: ProjectCategory.URBAN,
  //   imageUrl: 'https://picsum.photos/seed/chris2/800/600',
  //   year: '2023'
  // },
  // {
  //   id: '3',
  //   title: 'Mountain Mist',
  //   category: ProjectCategory.NATURE,
  //   imageUrl: 'https://picsum.photos/seed/chris3/800/1000',
  //   year: '2024'
  // },
  // {
  //   id: '4',
  //   title: 'Noir Fashion',
  //   category: ProjectCategory.COMMERCIAL,
  //   imageUrl: 'https://picsum.photos/seed/chris4/800/800',
  //   year: '2023'
  // },
  // {
  //   id: '5',
  //   title: 'Neon Nights',
  //   category: ProjectCategory.URBAN,
  //   imageUrl: 'https://picsum.photos/seed/chris5/800/1000',
  //   year: '2024'
  // },
  // {
  //   id: '6',
  //   title: 'Silent Waters',
  //   category: ProjectCategory.NATURE,
  //   imageUrl: 'https://picsum.photos/seed/chris6/800/600',
  //   year: '2023'
  // },
  // {
  //   id: '7',
  //   title: 'Golden Hour',
  //   category: ProjectCategory.PORTRAIT,
  //   imageUrl: 'https://picsum.photos/seed/chris7/800/1000',
  //   year: '2024'
  // },
  // {
  //   id: '8',
  //   title: 'Product Minimal',
  //   category: ProjectCategory.COMMERCIAL,
  //   imageUrl: 'https://picsum.photos/seed/chris8/800/800',
  //   year: '2024'
  // },  
  {
    id: '13',
    title: '',
    category: ProjectCategory.HUMANITIES,
    imageUrl: '\\photos\\DSC_2063.jpg',
    year: '2024'
  },
  {
    id: '2',
    title: 'Kanroji Mitsuri Cos1',
    category: ProjectCategory.PORTRAIT,
    imageUrl: '\photos\\DSC_2863.jpg',
    year: '2025'
  },
  {
    id: '4',
    title: '',
    category: ProjectCategory.PORTRAIT,
    imageUrl: '\\photos\\DSC_0886.JPG',
    year: '202'
  },
  {
    id: '12',
    title: '',
    category: ProjectCategory.HUMANITIES,
    imageUrl: '\\photos\\DSC_2061.jpg',
    year: '2025'
  },
  {
    id: '10',
    title: '',
    category: ProjectCategory.URBAN,
    imageUrl: '\\photos\\DSC_2511-1.jpg',
    year: '2025'
  },
  {
    id: '1',
    title: 'Kanroji Mitsuri Cos2',
    category: ProjectCategory.PORTRAIT,
    imageUrl: '\photos\\DSC_2613.jpg',
    year: '2025'
  },
  {
    id: '3',
    title: '',
    category: ProjectCategory.PORTRAIT,
    imageUrl: '\\photos\\DSC_0657.JPG',
    year: '2025'
  },
  {
    id: '5',
    title: '',
    category: ProjectCategory.PORTRAIT,
    imageUrl: '\\photos\\DSC_1805.JPG',
    year: '2025'
  },
  {
    id: '6',
    title: '',
    category: ProjectCategory.PORTRAIT,
    imageUrl: '\\photos\\4991e6ebdc9e35b329134a7b6b93342.jpg',
    year: '2025'
  },
  {
    id: '7',
    title: '',
    category: ProjectCategory.PORTRAIT,
    imageUrl: '\\photos\\DSC_3422.jpg',
    year: '2025'
  },
      {
    id: '8',
    title: '',
    category: ProjectCategory.NATURE,
    imageUrl: '\\photos\\default.jpeg',
    year: '2025'
  },
      {
    id: '9',
    title: '',
    category: ProjectCategory.NATURE,
    imageUrl: '\\photos\\DSC_0405_2.JPG',
    year: '2025'
  },
  {
    id: '11',
    title: '',
    category: ProjectCategory.URBAN,
    imageUrl: '\\photos\\DSC_2559-1.jpg',
    year: '2025'
  },
  {
    id: '15',
    title: 'Zombies',
    category: ProjectCategory.HUMANITIES,
    imageUrl: '\\photos\\DSC_1994.JPG',
    year: '2025'
  },
  {
    id: '14',
    title: '',
    category: ProjectCategory.HUMANITIES,
    imageUrl: '\\photos\\DSC_2467-1.jpg',
    year: '2025'
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'portrait-starter',
    title: 'Portrait Starter',
    price: '￥159',
    description: 'Ideal for individuals seeking a high-quality portrait session for social media or personal use.',
    features: [
      '1-hour session',
      '1 location (studio or outdoor)',
      '8 retouched high-resolution images',
      'Online gallery download',
      'Personal use rights (non-commercial)'
    ]
  },
  {
    id: 'portrait-deluxe',
    title: 'Portrait Deluxe',
    price: '￥399',
    description: 'A refined portrait experience for individuals wanting variety in style and setting.',
    popular: true,
    features: [
      '2-hour session',
      'Up to 2 locations (indoor + outdoor)',
      '20 retouched high-resolution images',
      'Style/consultation prior to shoot',
      'Online gallery download',
      'Personal & small-business commercial use rights'
    ]
  },
  {
    id: 'portrait-premium',
    title: 'Portrait Premium',
    price: '￥1,499',
    description: 'The full-scale portrait production for models, brands, or premium personal branding needs.',
    features: [
      'Half-day session (approx. 5 hours)',
      'Studio + outdoor + optional hair & makeup artist',
      'Unlimited location choice (or multiple settings)',
      '50 retouched high-resolution images (or full-set retouched)',
      'Same-day teaser preview',
      'Online gallery + curated USB or premium print package',
      'Full commercial usage rights (branding / modelling)'
    ]
  }
];

export const SOCIAL_LINKS = [
  { platform: 'WeChat', url: '#', icon: MessageCircleMore, type: 'wechat' },
  { platform: 'Douyin', url: '#', icon: Music2, type: 'douyin' },
  { platform: 'Email', url: 'mailto:yangziyan0708@foxmail.com', icon: Mail, type: 'email' },
];