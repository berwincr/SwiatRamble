import { Continent } from './country';

export type StoryCategory = 
  | 'History'
  | 'Food'
  | 'Festivals'
  | 'Art and Music'
  | 'Clothing'
  | 'Traditions'
  | 'Architecture'
  | 'Nature'
  | 'Languages'
  | 'Daily Life';

export interface Story {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  countryId: string;
  countryName: string;
  continent: Continent;
  category: StoryCategory;
  readTimeMinutes: number;
  image: string;
  summary: string;
  contentParagraphs: string[];
  taraNote: string;
  funFact: string;
  sources: string[];
  featured?: boolean;
  publishedDate: string;
}
