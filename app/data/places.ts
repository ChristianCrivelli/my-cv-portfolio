export interface Place {
  city: string;
  country: string;
  label: string;
  lat: number;
  lon: number;
}

// Coordinates are network centroids computed from the city_walkability
// project's own OpenStreetMap pedestrian-node data for these exact five
// cities — see github.com/ChristianCrivelli/city_walkability.
export const places: Place[] = [
  {
    city: 'Mindelo',
    country: 'Portugal',
    label: 'Early childhood',
    lat: 41.314,
    lon: -8.723,
  },
  {
    city: 'Matosinhos',
    country: 'Portugal',
    label: 'School years',
    lat: 41.198,
    lon: -8.670,
  },
  {
    city: 'Lanaken',
    country: 'Belgium',
    label: 'First year of university',
    lat: 50.899,
    lon: 5.649,
  },
  {
    city: 'Maastricht',
    country: 'Netherlands',
    label: 'University',
    lat: 50.848,
    lon: 5.693,
  },
  {
    city: 'Sabancı University, Istanbul',
    country: 'Turkey',
    label: 'Exchange semester',
    lat: 40.892,
    lon: 29.380,
  },
];
