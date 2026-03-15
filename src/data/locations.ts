export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "swindon",
  name: "Swindon",
  countyOrRegion: "Wiltshire",
  latitude: 51.5558,
  longitude: -1.7797,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "royal-wootton-bassett",
    name: "Royal Wootton Bassett",
    countyOrRegion: "Wiltshire",
    latitude: 51.5400,
    longitude: -1.9012,
  },
  {
    slug: "highworth",
    name: "Highworth",
    countyOrRegion: "Wiltshire",
    latitude: 51.6302,
    longitude: -1.7146,
  },
  {
    slug: "wroughton",
    name: "Wroughton",
    countyOrRegion: "Wiltshire",
    latitude: 51.5188,
    longitude: -1.7877,
  },
  {
    slug: "chippenham",
    name: "Chippenham",
    countyOrRegion: "Wiltshire",
    latitude: 51.4583,
    longitude: -2.1162,
  },
  {
    slug: "marlborough",
    name: "Marlborough",
    countyOrRegion: "Wiltshire",
    latitude: 51.4196,
    longitude: -1.7284,
  },
  {
    slug: "purton",
    name: "Purton",
    countyOrRegion: "Wiltshire",
    latitude: 51.6024,
    longitude: -1.8439,
  },
  {
    slug: "cricklade",
    name: "Cricklade",
    countyOrRegion: "Wiltshire",
    latitude: 51.6389,
    longitude: -1.8569,
  },
  {
    slug: "lydiard-millicent",
    name: "Lydiard Millicent",
    countyOrRegion: "Wiltshire",
    latitude: 51.5693,
    longitude: -1.8397,
  },
  {
    slug: "wanborough",
    name: "Wanborough",
    countyOrRegion: "Wiltshire",
    latitude: 51.5388,
    longitude: -1.6938,
  },
  {
    slug: "blunsdon",
    name: "Blunsdon",
    countyOrRegion: "Wiltshire",
    latitude: 51.6099,
    longitude: -1.7802,
  },
  {
    slug: "stratton-saint-margaret",
    name: "Stratton Saint Margaret",
    countyOrRegion: "Wiltshire",
    latitude: 51.5744,
    longitude: -1.7476,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
