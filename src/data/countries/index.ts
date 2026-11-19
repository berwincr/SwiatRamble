import { Country, Continent } from '../../types/country';
import { asiaCountries } from './asia';
import { europeCountries } from './europe';
import { africaCountries } from './africa';
import { northAmericaCountries } from './northAmerica';
import { southAmericaCountries } from './southAmerica';
import { oceaniaCountries } from './oceania';

export const allCountries: Country[] = [
  ...asiaCountries,
  ...europeCountries,
  ...africaCountries,
  ...northAmericaCountries,
  ...southAmericaCountries,
  ...oceaniaCountries,
];

export const continents: { name: Continent; count: number; image: string; description: string }[] = [
  {
    name: 'Asia',
    count: asiaCountries.length,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    description: 'Ancient philosophies, towering Himalayan peaks, kaleidoscopic spices, and living heritage.'
  },
  {
    name: 'Europe',
    count: europeCountries.length,
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    description: 'Renaissance art treasures, fairy-tale castles, sun-drenched plazas, and classical music.'
  },
  {
    name: 'Africa',
    count: africaCountries.length,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    description: 'Cradle of humanity, timeless pharaonic pyramids, rhythmic drums, and epic savannah wildlife.'
  },
  {
    name: 'North America',
    count: northAmericaCountries.length,
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80',
    description: 'Vast national parks, ancient Maya pyramids, jazz and blues rhythms, and northern lights.'
  },
  {
    name: 'South America',
    count: southAmericaCountries.length,
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80',
    description: 'Inca cloud citadels, the boundless Amazon basin, fiery tango, and thunderous waterfalls.'
  },
  {
    name: 'Oceania',
    count: oceaniaCountries.length,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    description: 'Sacred red deserts, turquoise coral barrier reefs, Māori haka chants, and lush green fiords.'
  }
];

export function getCountryBySlug(slug: string): Country | undefined {
  return allCountries.find(c => c.slug.toLowerCase() === slug.toLowerCase() || c.id.toLowerCase() === slug.toLowerCase());
}

export function getCountriesByContinent(continent: Continent): Country[] {
  return allCountries.filter(c => c.continent === continent);
}

export function getFeaturedCountries(): Country[] {
  return allCountries.filter(c => c.featured);
}

/**
 * Country of the day rotates deterministically by the day of the year
 */
export function getCountryOfTheDay(): Country {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const index = dayOfYear % allCountries.length;
  return allCountries[index] || allCountries[0];
}

export function getRandomCountry(excludeSlug?: string): Country {
  const filtered = excludeSlug 
    ? allCountries.filter(c => c.slug !== excludeSlug)
    : allCountries;
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex] || allCountries[0];
}
