export type Continent = 
  | 'Asia' 
  | 'Europe' 
  | 'Africa' 
  | 'North America' 
  | 'South America' 
  | 'Oceania';

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

export interface DishItem {
  name: string;
  localName?: string;
  description: string;
  tag: string; // e.g., 'Street Food', 'Festive Dish', 'Sweet'
}

export interface ClothingItem {
  name: string;
  description: string;
  significance: string;
}

export interface FestivalItem {
  name: string;
  seasonOrDate: string;
  description: string;
  tradition: string;
}

export interface LandmarkItem {
  name: string;
  location: string;
  description: string;
  isUnesco?: boolean;
}

export interface Country {
  id: string;
  slug: string;
  name: string;
  officialName: string;
  flagEmoji: string;
  capital: string;
  continent: Continent;
  heroImage: string;
  cardImage: string;
  shortIntro: string;
  taraGreeting: string;
  taraFacts: string[]; // Extra trivia when clicking "Tell me more with Tara"
  population: string;
  currency: string;
  languagesSummary: string;
  coordinates: {
    lat: number;
    lng: number;
  };

  // 10 Mandatory Cultural Sections
  history: {
    timeline: TimelineItem[];
    majorCivilizations: string[];
    importantEventsSummary: string;
    culturalHeritage: string;
  };

  languages: {
    official: string[];
    widelySpoken: string[];
    regional: string[];
    linguisticDiversityNotes: string;
    commonPhrases: { phrase: string; meaning: string; pronunciation?: string }[];
  };

  food: {
    signatureDishes: DishItem[];
    popularIngredients: string[];
    foodCustoms: string;
    regionalSpecialties: string;
  };

  clothing: {
    traditionalGarments: ClothingItem[];
    culturalSignificance: string;
    regionalVariations: string;
    occasionsWorn: string;
  };

  festivals: {
    majorFestivals: FestivalItem[];
    seasonalCelebrations: string;
    culturalContext: string;
    howPeopleCelebrate: string;
  };

  arts: {
    traditionalMusic: string;
    danceForms: string[];
    artFormsAndCrafts: string[];
    livingPractices: string;
  };

  landmarks: {
    famousLandmarks: LandmarkItem[];
    unescoSitesCount?: number;
    naturalAttractions: string[];
  };

  interestingFacts: string[];

  dailyLife: {
    greetingsAndEtiquette: string[];
    familyTraditions: string;
    everydayCustoms: string;
    modernLifestyle: string;
  };

  geography: {
    locationDescription: string;
    climate: string;
    majorFeatures: string[];
    wildlife: string[];
    naturalAttractionsSummary: string;
  };

  sources: { title: string; url?: string }[];
  featured?: boolean;
}
