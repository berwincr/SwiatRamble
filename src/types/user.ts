import { QuizResult } from './quiz';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  iconName: string;
  badgeColor: 'lavender' | 'mint' | 'peach' | 'yellow' | 'sky' | 'pink';
  xpReward: number;
  conditionDescription: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio?: string;
  isGuest: boolean;
  joinedDate: string;
}

export interface UserProgress {
  exploredCountries: string[]; // Slugs
  wishlistCountries: string[]; // Slugs
  favoriteCountries: string[]; // Slugs
  savedStories: string[]; // Story IDs
  totalXP: number;
  unlockedAchievements: string[]; // Achievement IDs
  quizHistory: QuizResult[];
  lastActive: string;
}
