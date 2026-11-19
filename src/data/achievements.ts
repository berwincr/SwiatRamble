import { Achievement } from '../types/user';

export const achievementsList: Achievement[] = [
  {
    id: 'first-adventure',
    name: 'First Adventure',
    description: 'Began your global journey by exploring your very first country!',
    iconName: 'Compass',
    badgeColor: 'lavender',
    xpReward: 50,
    conditionDescription: 'Explore 1 country'
  },
  {
    id: 'asian-explorer',
    name: 'Asian Explorer',
    description: 'Journeyed across the ancient lands and traditions of 5 Asian nations.',
    iconName: 'Globe',
    badgeColor: 'peach',
    xpReward: 100,
    conditionDescription: 'Explore 5 Asian countries'
  },
  {
    id: 'european-voyager',
    name: 'European Voyager',
    description: 'Wandered through the historic castles and art capitals of 5 European nations.',
    iconName: 'Castle',
    badgeColor: 'sky',
    xpReward: 100,
    conditionDescription: 'Explore 5 European countries'
  },
  {
    id: 'african-safari',
    name: 'African Odyssey',
    description: 'Discovered the ancient pyramids and rich cultural rhythms of 3 African nations.',
    iconName: 'Sun',
    badgeColor: 'yellow',
    xpReward: 100,
    conditionDescription: 'Explore 3 African countries'
  },
  {
    id: 'american-trail',
    name: 'Pan-American Pioneer',
    description: 'Crossed the Andes, Maya pyramids, and national parks across 4 American nations.',
    iconName: 'MapPin',
    badgeColor: 'mint',
    xpReward: 100,
    conditionDescription: 'Explore 4 American countries'
  },
  {
    id: 'oceania-nomad',
    name: 'Oceania Nomad',
    description: 'Explored the ancient red heart of Australia and the green fiords of New Zealand.',
    iconName: 'Anchor',
    badgeColor: 'pink',
    xpReward: 100,
    conditionDescription: 'Explore Australia and New Zealand'
  },
  {
    id: 'culture-collector',
    name: 'Culture Collector',
    description: 'Reached a milestone of exploring 10 distinct countries around the world!',
    iconName: 'Sparkles',
    badgeColor: 'lavender',
    xpReward: 150,
    conditionDescription: 'Explore 10 countries'
  },
  {
    id: 'world-wanderer',
    name: 'World Wanderer',
    description: 'Traveled through the stories, food, and traditions of 20 countries!',
    iconName: 'Award',
    badgeColor: 'peach',
    xpReward: 250,
    conditionDescription: 'Explore 20 countries'
  },
  {
    id: 'global-explorer',
    name: 'Global Grand Ambassador',
    description: 'Explored all 30 launch countries across all six continents! A true citizen of the world!',
    iconName: 'Crown',
    badgeColor: 'yellow',
    xpReward: 500,
    conditionDescription: 'Explore all 30 launch countries'
  },
  {
    id: 'quiz-champion',
    name: 'Quiz Champion',
    description: 'Achieved a flawless 100% score on a Culture Quiz!',
    iconName: 'Trophy',
    badgeColor: 'yellow',
    xpReward: 75,
    conditionDescription: 'Get 100% on any culture quiz'
  },
  {
    id: 'story-seeker',
    name: 'Story Seeker',
    description: 'Dove deep into the world by reading and bookmarking 5 cultural Discover stories.',
    iconName: 'BookOpen',
    badgeColor: 'sky',
    xpReward: 80,
    conditionDescription: 'Bookmark or read 5 stories'
  },
  {
    id: 'master-voyager',
    name: 'Master Voyager',
    description: 'Earned over 500 total XP on SwiatRamble through quizzes and exploration!',
    iconName: 'Flame',
    badgeColor: 'mint',
    xpReward: 200,
    conditionDescription: 'Reach 500 total XP'
  }
];

export function getAchievementById(id: string): Achievement | undefined {
  return achievementsList.find(a => a.id === id);
}
