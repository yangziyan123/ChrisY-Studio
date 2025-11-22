export enum ProjectCategory {
  ALL = 'All',
  PORTRAIT = 'Portrait',
  // COMMERCIAL = 'Commercial',
  HUMANITIES ='humanities',
  NATURE = 'Nature',
  URBAN = 'Urban',
  AIGC = 'AIGC'
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
  year: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}