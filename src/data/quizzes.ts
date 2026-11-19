import { QuizQuestion, QuizCategory, QuizDifficulty } from '../types/quiz';

export const quizCategories: QuizCategory[] = [
  'General World Culture',
  'Food and Flavors',
  'Landmarks and Architecture',
  'Festivals and Celebrations',
  'History and Legends',
  'Traditions and Customs',
  'Languages of the World',
  'Geography and Nature',
];

export const quizQuestions: QuizQuestion[] = [
  // GENERAL WORLD CULTURE
  {
    id: 'gen-1',
    question: 'Which country has the highest number of UNESCO World Heritage Sites in the entire world?',
    options: ['France', 'China', 'Italy', 'India'],
    correctIndex: 2,
    explanation: 'Italy holds the world record with 60 UNESCO World Heritage Sites, closely followed by China with 57 sites!',
    category: 'General World Culture',
    difficulty: 'easy',
    xpReward: 10,
    countryName: 'Italy'
  },
  {
    id: 'gen-2',
    question: 'What is the world’s only country with a national flag that is not rectangular or square?',
    options: ['Switzerland', 'Nepal', 'Vatican City', 'Bhutan'],
    correctIndex: 1,
    explanation: 'Nepal’s unique national flag consists of two stacked triangular pennants, representing the Himalayan mountains and the sun and moon.',
    category: 'General World Culture',
    difficulty: 'easy',
    xpReward: 10,
    countryName: 'Nepal'
  },
  {
    id: 'gen-3',
    question: 'The traditional philosophy of "Ubuntu", often translated as "I am because we are", originates from which region?',
    options: ['Southern Africa', 'West Africa', 'East Asia', 'Polynesia'],
    correctIndex: 0,
    explanation: 'Ubuntu is a profound southern African Nguni humanist philosophy popularized worldwide by Archbishop Desmond Tutu and Nelson Mandela.',
    category: 'General World Culture',
    difficulty: 'medium',
    xpReward: 20,
    countryName: 'South Africa'
  },
  {
    id: 'gen-4',
    question: 'Which country is known as the only Southeast Asian nation that was never colonized by a European colonial power?',
    options: ['Vietnam', 'Indonesia', 'Thailand', 'Philippines'],
    correctIndex: 2,
    explanation: 'Thailand (formerly Siam) maintained its sovereignty through skillful diplomacy and modernization under King Chulalongkorn (Rama V).',
    category: 'General World Culture',
    difficulty: 'medium',
    xpReward: 20,
    countryName: 'Thailand'
  },
  {
    id: 'gen-5',
    question: 'What ancient Japanese aesthetic concept finds beauty and dignity in broken, repaired, or weathered things?',
    options: ['Ikebana', 'Wabi-Sabi', 'Bushido', 'Origami'],
    correctIndex: 1,
    explanation: 'Wabi-Sabi honors transience, rustic simplicity, and the beauty of natural aging, as seen in Kintsugi gold ceramic repair.',
    category: 'General World Culture',
    difficulty: 'hard',
    xpReward: 30,
    countryName: 'Japan'
  },

  // FOOD AND FLAVORS
  {
    id: 'food-1',
    question: 'In which country was the humble potato first domesticated by indigenous farmers over 8,000 years ago?',
    options: ['Ireland', 'Peru', 'Germany', 'United States'],
    correctIndex: 1,
    explanation: 'Indigenous Andean farmers around Lake Titicaca in Peru first domesticated wild potatoes, breeding over 4,000 distinct varieties!',
    category: 'Food and Flavors',
    difficulty: 'easy',
    xpReward: 10,
    countryName: 'Peru'
  },
  {
    id: 'food-2',
    question: 'What is the signature national street food dish of Egypt that mixes lentils, rice, macaroni, tomato sauce, and fried onions?',
    options: ['Koshary', 'Falafel', 'Tagine', 'Shakshuka'],
    correctIndex: 0,
    explanation: 'Koshary is Egypt’s ultimate comforting carbohydrate feast, sold by bustling street vendors across Cairo and Alexandria.',
    category: 'Food and Flavors',
    difficulty: 'easy',
    xpReward: 10,
    countryName: 'Egypt'
  },
  {
    id: 'food-3',
    question: 'Under official French law, what are the ONLY four ingredients permitted in a traditional "Baguette de Tradition Française"?',
    options: [
      'Flour, butter, sugar, and yeast',
      'Flour, water, salt, and yeast (or sourdough)',
      'Flour, milk, eggs, and baking powder',
      'Wheat flour, olive oil, yeast, and honey'
    ],
    correctIndex: 1,
    explanation: 'Under France’s 1993 Bread Decree, a traditional artisan baguette cannot have any chemicals, fats, or preservatives—strictly wheat flour, water, salt, and yeast!',
    category: 'Food and Flavors',
    difficulty: 'medium',
    xpReward: 20,
    countryName: 'France'
  },
  {
    id: 'food-4',
    question: 'Which fiery, smoky rice dish has sparked legendary, passionate culinary rivalry between Nigeria, Ghana, and Senegal?',
    options: ['Biryani', 'Paella', 'Jollof Rice', 'Nasi Goreng'],
    correctIndex: 2,
    explanation: 'The famous "Jollof Wars" see West African neighbors playfully debating whose tomato-pepper slow-steamed Jollof rice reigns supreme!',
    category: 'Food and Flavors',
    difficulty: 'medium',
    xpReward: 20,
    countryName: 'Nigeria'
  },
  {
    id: 'food-5',
    question: 'What traditional Argentine social ritual involves packing herbal leaves into a gourd and sipping through a metal straw called a bombilla?',
    options: ['Tinto', 'Yerba Mate', 'Chicha', 'Horchata'],
    correctIndex: 1,
    explanation: 'Sharing a gourd of Yerba Mate is an unshakeable daily symbol of friendship, hospitality, and bonding across Argentina and Uruguay.',
    category: 'Food and Flavors',
    difficulty: 'hard',
    xpReward: 30,
    countryName: 'Argentina'
  },

  // LANDMARKS AND ARCHITECTURE
  {
    id: 'land-1',
    question: 'The Taj Mahal in Agra, India, was commissioned in 1632 by which Mughal emperor as a mausoleum for his beloved wife?',
    options: ['Akbar the Great', 'Babur', 'Shah Jahan', 'Aurangzeb'],
    correctIndex: 2,
    explanation: 'Emperor Shah Jahan commissioned the breathtaking ivory-white marble monument to honor his wife Mumtaz Mahal.',
    category: 'Landmarks and Architecture',
    difficulty: 'easy',
    xpReward: 10,
    countryName: 'India'
  },
  {
    id: 'land-2',
    question: 'Which monumental 15th-century Inca royal citadel sits nestled between peaks in the Peruvian cloud forest?',
    options: ['Teotihuacan', 'Tikal', 'Machu Picchu', 'Chichén Itzá'],
    correctIndex: 2,
    explanation: 'Machu Picchu was built during the reign of Inca Emperor Pachacuti and was never discovered or looted by Spanish conquistadors.',
    category: 'Landmarks and Architecture',
    difficulty: 'easy',
    xpReward: 10,
    countryName: 'Peru'
  },
  {
    id: 'land-3',
    question: 'In which European city would you find the soaring, still-under-construction Sagrada Família designed by architect Antoni Gaudí?',
    options: ['Madrid', 'Valencia', 'Barcelona', 'Seville'],
    correctIndex: 2,
    explanation: 'Gaudí’s organic modernist masterpiece has been under construction in Barcelona since 1882, funded entirely by private donations and visitor tickets.',
    category: 'Landmarks and Architecture',
    difficulty: 'medium',
    xpReward: 20,
    countryName: 'Spain'
  },
  {
    id: 'land-4',
    question: 'What is the largest Buddhist monument in the world, built in Central Java in the 9th century with 504 Buddha statues?',
    options: ['Angkor Wat', 'Borobudur', 'Boudhanath', 'Wat Arun'],
    correctIndex: 1,
    explanation: 'Borobudur in Indonesia is a colossal stone mandala pyramid featuring nine tiered platforms and 2,672 carved stone relief panels.',
    category: 'Landmarks and Architecture',
    difficulty: 'medium',
    xpReward: 20,
    countryName: 'Indonesia'
  },
  {
    id: 'land-5',
    question: 'Which iconic European castle in Bavaria, built by King Ludwig II, served as the primary visual inspiration for Disney’s fairy-tale Cinderella Castle?',
    options: ['Chambord Castle', 'Neuschwanstein Castle', 'Bran Castle', 'Windsor Castle'],
    correctIndex: 1,
    explanation: 'Neuschwanstein Castle towers dramatically above the pine forests of the Bavarian Alps near Füssen, Germany.',
    category: 'Landmarks and Architecture',
    difficulty: 'hard',
    xpReward: 30,
    countryName: 'Germany'
  },

  // FESTIVALS AND CELEBRATIONS
  {
    id: 'fest-1',
    question: 'During which joyful spring Hindu festival do people playfully shower each other with brightly colored organic powders (gulal)?',
    options: ['Diwali', 'Holi', 'Navratri', 'Pongal'],
    correctIndex: 1,
    explanation: 'Holi, the Festival of Colors, celebrates the end of winter, forgiveness, and the eternal playful love of Radha and Krishna.',
    category: 'Festivals and Celebrations',
    difficulty: 'easy',
    xpReward: 10,
    countryName: 'India'
  },
  {
    id: 'fest-2',
    question: 'Songkran is the world-famous traditional New Year water-splashing festival celebrated in which country?',
    options: ['Thailand', 'Japan', 'South Korea', 'Philippines'],
    correctIndex: 0,
    explanation: 'Songkran takes place every April in Thailand, turning streets into joyous water celebrations symbolizing the washing away of misfortune.',
    category: 'Festivals and Celebrations',
    difficulty: 'easy',
    xpReward: 10,
    countryName: 'Thailand'
  },
  {
    id: 'fest-3',
    question: 'What is the traditional date celebrated as "Tweede Nuwe Jaar" with the colorful Kaapse Klopse minstrel parade in Cape Town, South Africa?',
    options: ['January 1st', 'January 2nd', 'December 31st', 'April 27th'],
    correctIndex: 1,
    explanation: 'January 2nd ("Second New Year") historically gave enslaved workers a day of rest to celebrate after the New Year, creating a century-old carnival tradition.',
    category: 'Festivals and Celebrations',
    difficulty: 'medium',
    xpReward: 20,
    countryName: 'South Africa'
  },
  {
    id: 'fest-4',
    question: 'Which mid-winter national holiday in New Zealand celebrates the rising of the Pleiades star cluster to honor ancestors and new beginnings?',
    options: ['Waitangi Day', 'Matariki', 'ANZAC Day', 'Bayanihan'],
    correctIndex: 1,
    explanation: 'Matariki marks the Māori New Year when the cluster of stars rises in the mid-winter sky, becoming an official national public holiday in 2022.',
    category: 'Festivals and Celebrations',
    difficulty: 'medium',
    xpReward: 20,
    countryName: 'New Zealand'
  },
  {
    id: 'fest-5',
    question: 'In the ancient festival of Kukur Tihar in Nepal, which animal is honored with flower garlands, red tika on the forehead, and delicious treats?',
    options: ['Cows', 'Crows', 'Dogs', 'Elephants'],
    correctIndex: 2,
    explanation: 'During Kukur Tihar (Day of the Dogs), dogs are celebrated as loyal companions and sacred messengers to Yama, the god of justice and death.',
    category: 'Festivals and Celebrations',
    difficulty: 'hard',
    xpReward: 30,
    countryName: 'Nepal'
  },

  // LANGUAGES OF THE WORLD
  {
    id: 'lang-1',
    question: 'Which phonetic writing system was invented in 1443 by King Sejong the Great to make literacy accessible to all citizens?',
    options: ['Kanji', 'Hangul', 'Devanagari', 'Quoc Ngu'],
    correctIndex: 1,
    explanation: 'Hangul is acclaimed by linguists worldwide as one of the most scientific alphabetic scripts ever designed, with letter shapes mirroring mouth and tongue positions.',
    category: 'Languages of the World',
    difficulty: 'easy',
    xpReward: 10,
    countryName: 'South Korea'
  },
  {
    id: 'lang-2',
    question: 'The words "chocolate", "tomato", "avocado", and "coyote" all trace their origins to which indigenous Mesoamerican language?',
    options: ['Maya', 'Nahuatl (Aztec)', 'Quechua', 'Guarani'],
    correctIndex: 1,
    explanation: 'Nahuatl gave the world "xocolātl" (chocolate), "tomatl" (tomato), "āhuacatl" (avocado), and "coyōtl" (coyote)!',
    category: 'Languages of the World',
    difficulty: 'medium',
    xpReward: 20,
    countryName: 'Mexico'
  },
  {
    id: 'lang-3',
    question: 'How many living languages are estimated to be spoken across the Federal Republic of Nigeria?',
    options: ['Around 25', 'Roughly 100', 'Over 500', 'Exactly 12'],
    correctIndex: 2,
    explanation: 'Nigeria is a linguistic powerhouse, with over 500 indigenous living languages including Hausa, Yoruba, Igbo, and Nigerian Pidgin.',
    category: 'Languages of the World',
    difficulty: 'hard',
    xpReward: 30,
    countryName: 'Nigeria'
  },

  // TRADITIONS AND CUSTOMS
  {
    id: 'trad-1',
    question: 'In New Zealand, what is the traditional Māori greeting of pressing noses and foreheads together to share the breath of life called?',
    options: ['Haka', 'Hongi', 'Waiata', 'Koha'],
    correctIndex: 1,
    explanation: 'The Hongi is a sacred, intimate greeting where two people press noses and foreheads together, acknowledging that they now breathe the same air as equals.',
    category: 'Traditions and Customs',
    difficulty: 'easy',
    xpReward: 10,
    countryName: 'New Zealand'
  },
  {
    id: 'trad-2',
    question: 'What is the Filipino cultural tradition called where community members literally lift an entire bamboo house on their shoulders to move it?',
    options: ['Bayanihan', 'Harana', 'Pahiyas', 'Tinikling'],
    correctIndex: 0,
    explanation: 'Bayanihan represents the spirit of communal unity, selflessness, and mutual assistance in Filipino culture.',
    category: 'Traditions and Customs',
    difficulty: 'medium',
    xpReward: 20,
    countryName: 'Philippines'
  },
  {
    id: 'trad-3',
    question: 'In Japan, what is the polite phrase uttered before beginning a meal to express humble gratitude to ingredients, nature, and cooks?',
    options: ['Konnichiwa', 'Itadakimasu', 'Gochisousama', 'Otsukaresama'],
    correctIndex: 1,
    explanation: 'Itadakimasu literally translates to "I humbly receive", expressing deep thankfulness for the life sacrificed for nourishment.',
    category: 'Traditions and Customs',
    difficulty: 'medium',
    xpReward: 20,
    countryName: 'Japan'
  },
  {
    id: 'trad-4',
    question: 'What is the name of the traditional wax-resist textile dyeing technique recognized by UNESCO in Indonesia as Intangible Cultural Heritage?',
    options: ['Songket', 'Batik', 'Ikat', 'Tenun'],
    correctIndex: 1,
    explanation: 'Indonesian Batik uses molten wax drawn with a copper pen (canting) or stamp before cold immersion dyeing, creating intricate motifs.',
    category: 'Traditions and Customs',
    difficulty: 'hard',
    xpReward: 30,
    countryName: 'Indonesia'
  },

  // GEOGRAPHY AND NATURE
  {
    id: 'geo-1',
    question: 'Which South American country is officially the most biodiverse country on Earth per square kilometer, home to nearly 2,000 species of birds?',
    options: ['Brazil', 'Colombia', 'Argentina', 'Chile'],
    correctIndex: 1,
    explanation: 'Colombia boasts the highest avian diversity on Earth per square kilometer, containing nearly 20% of all bird species in the world!',
    category: 'Geography and Nature',
    difficulty: 'easy',
    xpReward: 10,
    countryName: 'Colombia'
  },
  {
    id: 'geo-2',
    question: 'What is the longest national coastline of any country on planet Earth, stretching over 202,000 kilometers along three oceans?',
    options: ['Russia', 'Australia', 'Canada', 'Indonesia'],
    correctIndex: 2,
    explanation: 'Canada holds the world record for the longest coastline by a wide margin, bordering the Atlantic, Pacific, and Arctic Oceans.',
    category: 'Geography and Nature',
    difficulty: 'medium',
    xpReward: 20,
    countryName: 'Canada'
  },
  {
    id: 'geo-3',
    question: 'Where is the lowest point and largest natural cave passage in the world, Son Doong Cave, located?',
    options: ['Vietnam', 'Malaysia', 'United States', 'Slovenia'],
    correctIndex: 0,
    explanation: 'Son Doong Cave in Phong Nha-Ke Bang National Park, Vietnam, is so vast that a 40-story skyscraper could fit inside its largest cavern!',
    category: 'Geography and Nature',
    difficulty: 'hard',
    xpReward: 30,
    countryName: 'Vietnam'
  }
];

export function getQuestionsByCategory(category: QuizCategory): QuizQuestion[] {
  return quizQuestions.filter(q => q.category === category);
}

export function getQuestionsByDifficulty(difficulty: QuizDifficulty): QuizQuestion[] {
  return quizQuestions.filter(q => q.difficulty === difficulty);
}

export function getRandomQuizSet(
  category?: QuizCategory,
  difficulty?: QuizDifficulty,
  count: number = 5
): QuizQuestion[] {
  let pool = quizQuestions;
  if (category && category !== 'General World Culture') {
    pool = pool.filter(q => q.category === category);
  }
  if (difficulty) {
    pool = pool.filter(q => q.difficulty === difficulty);
  }

  // Fallback if pool is too small
  if (pool.length < count) {
    pool = quizQuestions;
  }

  // Shuffle pool without modifying original
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
