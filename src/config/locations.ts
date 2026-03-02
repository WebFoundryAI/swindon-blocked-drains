export interface Location {
  slug: string;
  name: string;
  lat: number;
  lng: number;
  isPrimary: boolean;
}

export const locations: Location[] = [
  { slug: 'swindon', name: 'Swindon', lat: 51.5558, lng: -1.7797, isPrimary: true },
  { slug: 'royal-wootton-bassett', name: 'Royal Wootton Bassett', lat: 51.5424, lng: -1.9055, isPrimary: false },
  { slug: 'highworth', name: 'Highworth', lat: 51.6303, lng: -1.7099, isPrimary: false },
  { slug: 'purton', name: 'Purton', lat: 51.6128, lng: -1.8632, isPrimary: false },
  { slug: 'cricklade', name: 'Cricklade', lat: 51.6388, lng: -1.8569, isPrimary: false },
  { slug: 'wroughton', name: 'Wroughton', lat: 51.5222, lng: -1.7899, isPrimary: false },
];
