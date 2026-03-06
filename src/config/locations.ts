export interface Location {
  slug: string;
  name: string;
  shortName: string;
  lat: number;
  lng: number;
}

export const locations: Location[] = [
  { slug: 'swindon', name: 'Swindon', shortName: 'Swindon', lat: 51.5558, lng: -1.7797 },
  { slug: 'royal-wootton-bassett', name: 'Royal Wootton Bassett', shortName: 'RWB', lat: 51.5424, lng: -1.9055 },
  { slug: 'highworth', name: 'Highworth', shortName: 'Highworth', lat: 51.6303, lng: -1.7099 },
  { slug: 'purton', name: 'Purton', shortName: 'Purton', lat: 51.6128, lng: -1.8632 },
  { slug: 'cricklade', name: 'Cricklade', shortName: 'Cricklade', lat: 51.6388, lng: -1.8569 },
  { slug: 'wroughton', name: 'Wroughton', shortName: 'Wroughton', lat: 51.5222, lng: -1.7899 },
];
