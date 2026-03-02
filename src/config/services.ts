export interface SubService {
  slug: string;
  name: string;
  shortName: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  subServices: SubService[];
}

export const services: Service[] = [
  {
    slug: 'blocked-drains',
    name: 'Blocked Drains',
    shortName: 'Blocked Drains',
    description: 'Fast, effective solutions for all types of blocked drains in domestic and commercial properties.',
    icon: '🚿',
    subServices: [
      { slug: 'blocked-toilet', name: 'Blocked Toilet', shortName: 'Blocked Toilet' },
      { slug: 'blocked-sink', name: 'Blocked Sink', shortName: 'Blocked Sink' },
      { slug: 'blocked-bath', name: 'Blocked Bath', shortName: 'Blocked Bath' },
    ],
  },
  {
    slug: 'drain-unblocking',
    name: 'Drain Unblocking',
    shortName: 'Drain Unblocking',
    description: 'Professional drain unblocking services using the latest equipment and techniques.',
    icon: '🔧',
    subServices: [
      { slug: 'external-drain-unblocking', name: 'External Drain Unblocking', shortName: 'External' },
      { slug: 'internal-drain-unblocking', name: 'Internal Drain Unblocking', shortName: 'Internal' },
    ],
  },
  {
    slug: 'cctv-drain-surveys',
    name: 'CCTV Drain Surveys',
    shortName: 'CCTV Surveys',
    description: 'High-definition CCTV drain inspections to diagnose problems without excavation.',
    icon: '📹',
    subServices: [
      { slug: 'pre-purchase-survey', name: 'Pre-Purchase Survey', shortName: 'Pre-Purchase' },
      { slug: 'drainage-investigation', name: 'Drainage Investigation', shortName: 'Investigation' },
    ],
  },
  {
    slug: 'drain-jetting',
    name: 'Drain Jetting',
    shortName: 'Drain Jetting',
    description: 'High-pressure water jetting to clear stubborn blockages and clean drain pipes.',
    icon: '💧',
    subServices: [
      { slug: 'domestic-jetting', name: 'Domestic Jetting', shortName: 'Domestic' },
      { slug: 'commercial-jetting', name: 'Commercial Jetting', shortName: 'Commercial' },
    ],
  },
  {
    slug: 'emergency-drain-services',
    name: 'Emergency Drain Services',
    shortName: 'Emergency',
    description: '24/7 emergency drain services for urgent blockages, flooding, and sewage issues.',
    icon: '🚨',
    subServices: [
      { slug: 'flooding-emergency', name: 'Flooding Emergency', shortName: 'Flooding' },
      { slug: 'sewage-emergency', name: 'Sewage Emergency', shortName: 'Sewage' },
    ],
  },
  {
    slug: 'drain-repairs',
    name: 'Drain Repairs',
    shortName: 'Drain Repairs',
    description: 'Expert drain repair services including pipe relining and drain excavation.',
    icon: '🛠️',
    subServices: [
      { slug: 'pipe-relining', name: 'Pipe Relining', shortName: 'Pipe Relining' },
      { slug: 'drain-excavation', name: 'Drain Excavation', shortName: 'Excavation' },
    ],
  },
];
