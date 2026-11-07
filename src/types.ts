export interface ServerStatusData {
  online: boolean;
  ip: string;
  port: number;
  players: {
    online: number;
    max: number;
    list?: Array<{ name: string; uuid?: string }>;
  };
  version: {
    name_clean?: string;
    name_raw?: string;
  };
  motd: {
    clean?: string;
    html?: string;
  };
  icon?: string;
  ping?: number;
  lastChecked: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  image: string;
  responsibilities: string[];
  badges: string[];
}

export interface ServerRule {
  id: number;
  title: string;
  description: string;
  category: 'Oyun İçi' | 'Sohbet' | 'Topluluk';
}

export interface ServerFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
}
