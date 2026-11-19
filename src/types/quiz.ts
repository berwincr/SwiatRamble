export type QuizDifficulty = 'easy' | 'medium' | 'hard';

export type QuizCategory = 
  | 'General World Culture'
  | 'Food and Flavors'
  | 'Landmarks and Architecture'
  | 'Festivals and Celebrations'
  | 'History and Legends'
  | 'Traditions and Customs'
  | 'Languages of the World'
  | 'Geography and Nature';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  countryName?: string;
  category: QuizCategory;
  difficulty: QuizDifficulty;
  xpReward: number;
}

export interface QuizResult {
  date: string;
  category: QuizCategory;
  difficulty: QuizDifficulty;
  score: number;
  totalQuestions: number;
  earnedXP: number;
  isPerfect: boolean;
}
