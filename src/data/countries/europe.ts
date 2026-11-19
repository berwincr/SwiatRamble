import { Country } from '../../types/country';

export const europeCountries: Country[] = [
  {
    id: 'france',
    slug: 'france',
    name: 'France',
    officialName: 'French Republic (République française)',
    flagEmoji: '🇫🇷',
    capital: 'Paris',
    continent: 'Europe',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The heart of European art, haute cuisine, philosophy, and fashion, celebrated for romantic boulevards, Gothic cathedrals, and sunlit lavender valleys.',
    taraGreeting: 'Bonjour! Welcome to France! Picture the scent of warm buttery baguettes drifting from corner boulangeries, the golden lights of the Eiffel Tower, and master painters setting up easels along the Seine!',
    taraFacts: [
      'France is the most visited country in the world, welcoming over 100 million international travelers annually!',
      'In France, the traditional baguette has official UNESCO Intangible Cultural Heritage status, with strict laws governing its flour, water, yeast, and salt recipe.',
      'The Louvre Museum in Paris is so vast that if you spent just 30 seconds viewing each artwork, it would take you over 100 days to see everything!'
    ],
    population: '68.4 Million',
    currency: 'Euro (€, EUR)',
    languagesSummary: 'French (Français)',
    coordinates: { lat: 46.2276, lng: 2.2137 },
    featured: true,

    history: {
      timeline: [
        { period: 'c. 58–50 BCE', title: 'Gallo-Roman Era', description: 'Julius Caesar conquered Celtic Gaul; Romans built enduring aqueducts like Pont du Gard and amphitheaters in Nîmes.' },
        { period: '800 CE', title: 'Charlemagne & Carolingian Empire', description: 'Crowned Emperor of the Romans, Charlemagne spearheaded an educational and scriptural cultural revival across Western Europe.' },
        { period: 'c. 12th–13th Century', title: 'High Gothic Cathedrals', description: 'Master architects developed flying buttresses, ribbed vaults, and rose windows at Notre-Dame de Paris and Chartres.' },
        { period: '1661–1715 CE', title: 'Louis XIV (The Sun King)', description: 'Peak of French absolutism and classical arts centered at the opulent Palace of Versailles.' },
        { period: '1789 CE', title: 'French Revolution', description: 'Storming of the Bastille, Declaration of the Rights of Man, and establishment of the motto "Liberté, Égalité, Fraternité".' }
      ],
      majorCivilizations: ['Gauls (Celts)', 'Gallo-Romans', 'Franks', 'Capetian Dynasty', 'Bourbon Monarchy'],
      importantEventsSummary: 'A powerhouse of Enlightenment philosophy (Voltaire, Rousseau), republican democratic ideals, and avant-garde modern artistic movements.',
      culturalHeritage: '52 UNESCO World Heritage Sites including Mont-Saint-Michel, Palace of Versailles, and the Loire Valley châteaux.'
    },

    languages: {
      official: ['French'],
      widelySpoken: ['Standard French'],
      regional: ['Occitan', 'Breton (Celtic)', 'Alsatian (Germanic)', 'Corsican', 'Basque', 'Catalan'],
      linguisticDiversityNotes: 'Guarded by the Académie Française founded in 1635, French is an international diplomatic language celebrated for philosophical precision.',
      commonPhrases: [
        { phrase: 'Bonjour', meaning: 'Good morning / Hello', pronunciation: 'bohn-ZHOOR' },
        { phrase: 'Merci beaucoup', meaning: 'Thank you very much', pronunciation: 'mair-SEE boh-KOO' },
        { phrase: 'S’il vous plaît', meaning: 'Please', pronunciation: 'seel voo PLEH' },
        { phrase: 'C’est magnifique!', meaning: 'It is magnificent!', pronunciation: 'seh mah-nyee-FEEK' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Croissant & Baguette', localName: 'Croissant au Beurre', description: 'Laminated, paper-thin buttery pastry layers with golden flaky crust and airy honeycomb interior.', tag: 'Bakery Art' },
        { name: 'Boeuf Bourguignon', localName: 'Bœuf Bourguignon', description: 'Tender beef cubes slow-braised in red Burgundy wine with lardons, button mushrooms, baby carrots, and pearl onions.', tag: 'Country Classic' },
        { name: 'Ratatouille', localName: 'Ratatouille Provençale', description: 'Sun-drenched Mediterranean vegetable stew of layered zucchini, eggplant, bell peppers, tomatoes, garlic, and fresh thyme.', tag: 'Provençal Sunshine' },
        { name: 'Crème Brûlée', localName: 'Crème Brûlée', description: 'Silky rich vanilla custard base topped with a contrasting layer of brittle, caramelized sugar torched to a golden crack.', tag: 'Dessert Icon' }
      ],
      popularIngredients: ['Butter (Beurre)', 'Dijon mustard', 'Truffles', 'Wine', 'Shallots', 'Tarragon', 'Cheeses (Camembert, Roquefort, Comté)', 'Olive oil'],
      foodCustoms: 'The French gastronomic meal is inscribed by UNESCO. Dining is a sacred social ritual: meals consist of multiple courses enjoyed unhurriedly around a shared table.',
      regionalSpecialties: 'Bordeaux and Burgundy for legendary wines; Normandy for apples, cider, and rich cream; Provence for lavender honey and bouillabaisse fish stew; Alsace for choucroute.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Breton Coiffe and Marinière', description: 'Striped sailor sweater (marinière) with navy stripes on white cotton, historically worn by Brittany fishermen and elevated by Coco Chanel.', significance: 'Timeless nautical symbol of understated French elegance.' },
        { name: 'Beret', description: 'Flat, round knitted wool cap originating among shepherds in the Pyrenees and Bearn mountains.', significance: 'Recognized globally as an enduring symbol of French artistic character.' }
      ],
      culturalSignificance: 'Paris has been the unchallenged global capital of Haute Couture since the 19th century, setting international standards for craftsmanship, tailoring, and fabric quality.',
      regionalVariations: 'Elaborate lace headdresses of Brittany, floral embroidered shawls of Alsace, and black velvet jackets of Arles.',
      occasionsWorn: 'Folk heritage festivals (Fêtes folkloriques), wine harvest celebrations (Vendanges), and historic village fêtes.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Bastille Day (Fête Nationale)', seasonOrDate: 'July 14', description: 'Commemorates the French Revolution with grand military parades along the Champs-Élysées, public firemen’s balls (Bals des pompiers), and Eiffel Tower fireworks.', tradition: 'Dancing at local firehouses and watching fireworks.' },
        { name: 'Fête de la Musique', seasonOrDate: 'June 21 (Summer Solstice)', description: 'A nationwide free music festival where musicians of all genres perform live on street corners, plazas, and parks all night long.', tradition: 'Spontaneous open-air concerts on every corner.' },
        { name: 'Fête des Lumières (Lyon)', seasonOrDate: 'December (4 days)', description: 'Spectacular Festival of Lights in Lyon where city monuments and bridges are transformed into glowing architectural art projections.', tradition: 'Placing candle luminaries (lumignons) in window sills.' }
      ],
      seasonalCelebrations: 'Vendanges (wine harvest festivals) in September across Champagne, Bordeaux, and Saint-Émilion; festive Christmas markets in Strasbourg.',
      culturalContext: 'Celebrates secular republican unity, creative intellectual expression, and deep appreciation for the agricultural bounty of the terroir.',
      howPeopleCelebrate: 'Sharing long leisurely picnic lunches along riverbanks, clinking glasses with "Santé!", and gathering in town squares.'
    },

    arts: {
      traditionalMusic: 'Chanson française (Edith Piaf, Jacques Brel), accordion musette waltzes, and classical masters (Claude Debussy, Maurice Ravel).',
      danceForms: ['Classical Ballet (codified at Louis XIV’s court)', 'French Cancan of Parisian cabarets', 'Folk bourrée dances'],
      artFormsAndCrafts: ['Impressionist and Post-Impressionist painting (Monet, Renoir, Cézanne)', 'Sèvres porcelain', 'Limoges enamel', 'Haute couture embroidery (Lesage)'],
      livingPractices: 'Café terrace philosophy debates, flânerie (the art of leisurely city strolling), and Sunday flea market browsing (Brocante).'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Eiffel Tower', location: 'Paris', description: 'Puddle-iron lattice tower standing 330 meters high, built by Gustave Eiffel for the 1889 World’s Fair.', isUnesco: true },
        { name: 'Palace and Park of Versailles', location: 'Versailles, Île-de-France', description: 'Gilded royal residence featuring the 73-meter Hall of Mirrors, 2,143 windows, and monumental formal gardens.', isUnesco: true },
        { name: 'Mont-Saint-Michel', location: 'Normandy', description: 'Magical medieval Benedictine abbey perched on a tidal granite island engulfed by dramatic ocean tides.', isUnesco: true },
        { name: 'Château de Chambord', location: 'Loire Valley', description: 'Masterpiece of French Renaissance châteaux featuring a famous double-helix staircase attributed to Leonardo da Vinci.', isUnesco: true }
      ],
      unescoSitesCount: 52,
      naturalAttractions: ['Gorges du Verdon (Europe’s Grand Canyon)', 'Mont Blanc (highest peak in Western Europe at 4,807m)', 'Calanques of Cassis (limestone coastal fjords)', 'Lavender fields of the Valensole Plateau']
    },

    interestingFacts: [
      'France covers 12 distinct time zones when including its overseas territories—more than any other single sovereign nation on Earth!',
      'There are over 1,500 distinct types of French cheeses, prompting General Charles de Gaulle’s famous quote: "How can anyone govern a nation that has 246 different kinds of cheese?"',
      'The French coastline gave birth to the metric system during the French Revolution, creating universal units like the meter, gram, and liter.',
      'French railway operator SNCF holds the world record for the fastest conventional train wheel-on-rail speed: 574.8 km/h set by the TGV in 2007!'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'La Bise: exchanging air kisses on alternating cheeks (two, three, or four kisses depending on the region).',
        'Always saying "Bonjour, Madame/Monsieur" immediately upon entering any shop or bakery.',
        'Never rushing a meal or eating on the go while walking down the street.'
      ],
      familyTraditions: 'Gathering on Sundays for long multi-course family lunches that stretch through the afternoon with fresh cheese boards and pastries.',
      everydayCustoms: 'Buying fresh warm baguettes daily at the local artisan boulangerie, playing pétanque in gravel town squares with metallic boules.',
      modernLifestyle: 'Fast commuter high-speed TGV trains, 35-hour work weeks with ample holiday time for summer vacations, and thriving eco-friendly bicycle lanes.'
    },

    geography: {
      locationDescription: 'Western European nation with a roughly hexagonal shape, bounded by the Atlantic Ocean, English Channel, Mediterranean Sea, Alps, and Pyrenees.',
      climate: 'Temperate oceanic in the west, semi-continental in the east, Mediterranean in the south, and alpine in mountain regions.',
      majorFeatures: ['French Alps', 'Pyrenees', 'Loire River (longest in France)', 'Seine River', 'Rhône Valley'],
      wildlife: ['Alpine Ibex', 'Chamois', 'European Brown Bear (Pyrenees)', 'Wild Boar', 'Flamingos in the Camargue wetlands'],
      naturalAttractionsSummary: 'Remarkable geographical diversity from Atlantic dunes in Arcachon to dramatic Alpine glaciers and Mediterranean coves.'
    },

    sources: [
      { title: 'France.fr – Official Tourism Portal', url: 'https://www.france.fr' },
      { title: 'Centre des Monuments Nationaux', url: 'https://www.monuments-nationaux.fr' },
      { title: 'UNESCO World Heritage Centre – France', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'italy',
    slug: 'italy',
    name: 'Italy',
    officialName: 'Italian Republic (Repubblica Italiana)',
    flagEmoji: '🇮🇹',
    capital: 'Rome',
    continent: 'Europe',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The sunlit cradle of the Roman Empire and the Renaissance, blessed with world-leading art treasures, rolling Tuscan vineyards, and unmatched culinary passion.',
    taraGreeting: 'Ciao! Benvenuti in Italia! Welcome to the land of "La Dolce Vita"! Did you know Italy holds the highest number of UNESCO World Heritage Sites of any country in the world? Let’s grab a creamy gelato and wander through ancient Rome!',
    taraFacts: [
      'Italy has 60 UNESCO World Heritage Sites—more than any other country on the planet!',
      'Pizza was invented in Naples in the 18th century; the classic Pizza Margherita with tomatoes, mozzarella, and basil was created in 1889 to represent the Italian tricolor flag.',
      'Inside Rome lies Vatican City, the world’s smallest independent sovereign state, measuring just 0.49 square kilometers.'
    ],
    population: '58.8 Million',
    currency: 'Euro (€, EUR)',
    languagesSummary: 'Italian (Italiano)',
    coordinates: { lat: 41.8719, lng: 12.5674 },
    featured: true,

    history: {
      timeline: [
        { period: '753 BCE', title: 'Founding of Rome', description: 'Legendary founding of Rome by Romulus and Remus on the Palatine Hill overlooking the Tiber River.' },
        { period: '27 BCE – 476 CE', title: 'Roman Empire', description: 'Pioneered Roman law, monumental engineering (aqueducts, Colosseum, Pantheon), and paved roads across Europe, North Africa, and the Middle East.' },
        { period: '14th–16th Century', title: 'The Italian Renaissance', description: 'Explosion of humanism, scientific inquiry, and revolutionary artistic mastery led by Leonardo da Vinci, Michelangelo, Botticelli, and Raphael in Florence and Venice.' },
        { period: '1861 CE', title: 'Il Risorgimento (Italian Unification)', description: 'Political unification orchestrated by Giuseppe Garibaldi and Count Cavour, making Rome the unified capital in 1871.' }
      ],
      majorCivilizations: ['Etruscans', 'Magna Graecia', 'Roman Republic & Empire', 'Maritime Republics (Venice, Genoa, Pisa, Amalfi)', 'Florentine Republic'],
      importantEventsSummary: 'A monumental legacy shaping Western law, republican architecture, Christian history, opera, painting, sculpture, and scientific methodology.',
      culturalHeritage: '60 UNESCO World Heritage Sites, from Pompeii’s preserved volcanic ruins to the historic centers of Florence, Venice, and Rome.'
    },

    languages: {
      official: ['Italian'],
      widelySpoken: ['Standard Italian (derived from Tuscan literary Italian of Dante Alighieri)'],
      regional: ['Neapolitan', 'Sicilian', 'Venetian', 'Lombard', 'Piedmontese', 'Sardinian', 'Friulian'],
      linguisticDiversityNotes: 'Regional dialects are linguistically distinct Romance languages derived independently from spoken Vulgar Latin.',
      commonPhrases: [
        { phrase: 'Ciao!', meaning: 'Hello / Goodbye', pronunciation: 'CHOW' },
        { phrase: 'Grazie mille', meaning: 'A thousand thanks', pronunciation: 'GRAHT-syeh MEE-leh' },
        { phrase: 'Per favore', meaning: 'Please', pronunciation: 'pair fah-VOH-reh' },
        { phrase: 'La dolce vita', meaning: 'The sweet life', pronunciation: 'lah DOHL-cheh VEE-tah' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Neapolitan Pizza', localName: 'Pizza Napoletana', description: 'Wood-fired sourdough crust with blistered leopard spotting, San Marzano tomato sauce, fresh buffalo mozzarella, basil leaves, and extra virgin olive oil.', tag: 'UNESCO Cultural Heritage' },
        { name: 'Pasta Carbonara', localName: 'Spaghetti alla Carbonara', description: 'Roman classic tossed with crisp cured pork jowl (guanciale), fresh egg yolks, aged Pecorino Romano cheese, and coarse black pepper—never cream.', tag: 'Roman Masterpiece' },
        { name: 'Risotto alla Milanese', localName: 'Risotto con Zafferano', description: 'Creamy slow-stirred Carnaroli rice infused with golden saffron strands, rich beef bone marrow, butter, and Parmigiano-Reggiano.', tag: 'Northern Elegance' },
        { name: 'Tiramisù', localName: 'Tiramisù', description: 'Layers of espresso-soaked savoiardi ladyfinger cookies layered with velvety mascarpone cream and dusted with dark cocoa powder.', tag: 'Sweet Perfection' }
      ],
      popularIngredients: ['Extra virgin olive oil', 'Parmigiano-Reggiano', 'San Marzano tomatoes', 'Basil', 'Garlic', 'Pecorino Romano', 'Prosciutto di Parma', 'Balsamic vinegar of Modena'],
      foodCustoms: 'Cappuccino is enjoyed strictly in the morning with a cornetto pastry; ordering one after midday or after lunch is a cultural faux pas. Spaghetti is swirled with a fork only—never cut with a knife.',
      regionalSpecialties: 'Emilia-Romagna is the "Food Valley" (Parma ham, balsamic, lasagna); Tuscany is famed for bistecca alla fiorentina; Sicily is celebrated for cannoli and arancini.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Costume Sardo (Sardinia)', description: 'Elaborately embroidered pleated woolen skirts, laced brocade bodices, and crisp white linen shirts adorned with filigree silver buttons.', significance: 'One of the most preserved and diverse folk costumes in Europe.' },
        { name: 'Venetian Carnival Attire', description: 'Voluminous silk mantles, tricorn hats, and white Bauta porcelain masks.', significance: 'Historically allowed citizens of Venice to mingle anonymously across social classes during Carnival.' }
      ],
      culturalSignificance: 'Milan is the global capital of prêt-à-porter fashion, celebrated for peerless leather goods, silk weaving in Como, and bespoke tailoring.',
      regionalVariations: 'Colorful ribboned skirts in Calabria, Tyrolean trachten in South Tyrol (Alto Adige), and shepherd sheepskin capes in Abruzzo.',
      occasionsWorn: 'Venice Carnival, historical pageants like Siena’s Palio, Easter processions, and village patron saint festivals (Sagre).'
    },

    festivals: {
      majorFestivals: [
        { name: 'Carnival of Venice (Carnevale)', seasonOrDate: 'February (leading to Lent)', description: 'Fairytale masquerade ball filling historic canals with ornate masks, velvet cloaks, and gondola flotillas.', tradition: 'Wearing hand-painted papier-mâché masks and dancing in candlelit palazzi.' },
        { name: 'Il Palio di Siena', seasonOrDate: 'July 2 & August 16', description: 'Fierce, bareback horse race dating to medieval times, held in Siena’s shell-shaped Piazza del Campo between historic city contrade (neighborhood wards).', tradition: 'Bareback horse race around dirt-covered historic piazza.' },
        { name: 'Festa di San Gennaro (Naples)', seasonOrDate: 'September 19', description: 'Passionate gathering in Naples Cathedral awaiting the miraculous liquefaction of the dried blood of patron Saint Januarius.', tradition: 'Solemn liturgical vigil followed by exuberant street celebrations.' }
      ],
      seasonalCelebrations: 'Ferragosto summer holiday on August 15; autumn white truffle fairs in Alba (Piedmont); olive harvest festivals in Tuscany.',
      culturalContext: 'Infused with Catholic patron saint days, neighborhood pride (Campanilismo), and celebration of seasonal harvest abundance.',
      howPeopleCelebrate: 'Joining in the evening Passeggiata (leisurely stroll through the piazza), sharing aperitivo with friends, and enjoying communal outdoor dinners.'
    },

    arts: {
      traditionalMusic: 'Italian Opera (Giuseppe Verdi, Giacomo Puccini, Gioachino Rossini), Neapolitan folk songs (Canzone Napoletana), and mandolin serenades.',
      danceForms: ['Tarantella (exuberant southern folk dance to cure spider bites)', 'Monferrina folk waltz', 'Sardinian Ballu Tundu'],
      artFormsAndCrafts: ['Murano blown glass (Venice)', 'Florentine leather marbling', 'Capodimonte porcelain', 'Deruta majolica ceramics'],
      livingPractices: 'The art of La Bella Figura (presenting oneself with dignity and poise), slow dining, and daily coffee bar espresso rituals.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'The Colosseum', location: 'Rome', description: 'Massive freestanding oval amphitheater built in 80 CE holding 50,000 spectators, the iconic symbol of ancient Roman imperial engineering.', isUnesco: true },
        { name: 'Canals of Venice', location: 'Venice, Veneto', description: 'Fairytale lagoon city built on 118 small islands connected by over 400 stone bridges and traversed by traditional black gondolas.', isUnesco: true },
        { name: 'Leaning Tower of Pisa', location: 'Pisa, Tuscany', description: 'Freestanding Romanesque marble bell tower world-famous for its unintended 3.97-degree tilt, situated in the Piazza dei Miracoli.', isUnesco: true },
        { name: 'Pompeii Archaeological Park', location: 'Campania', description: 'Vibrant ancient Roman city frozen in time under meters of volcanic ash following the devastating eruption of Mount Vesuvius in 79 CE.', isUnesco: true }
      ],
      unescoSitesCount: 60,
      naturalAttractions: ['The Dolomites (UNESCO pink limestone peaks)', 'Amalfi Coast cliffs and pastel fishing villages', 'Cinque Terre terraced coastal hamlets', 'Lake Como surrounded by alpine villas']
    },

    interestingFacts: [
      'Italy has three active volcanoes: Mount Vesuvius near Naples, Mount Etna on Sicily (one of Europe’s most active), and Stromboli in the Aeolian Islands.',
      'Over €1.5 million in coins is tossed every single year into Rome’s Trevi Fountain—by tradition, all coins are collected daily and donated to charities supporting those in need.',
      'Italy is the world’s leading wine producer by volume, cultivating hundreds of indigenous grape varieties that grow nowhere else on Earth.',
      'The University of Bologna, founded in 1088, is the oldest continuously operating university in the Western world.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A warm handshake with eye contact; close friends and family greet each other with kisses on both cheeks.',
        'Standing at the counter (al banco) to drink your espresso quickly in two sips.',
        'Always dressing neatly and with pride—the cultural philosophy of "Bella Figura".'
      ],
      familyTraditions: 'Sunday family lunch (Pranzo della Domenica) is sacred, often stretching 3 to 4 hours with multiple homemade courses and espresso.',
      everydayCustoms: 'Taking part in the evening Passeggiata stroll through the town piazza dressed in stylish clothes, stopping for an aperitivo or gelato.',
      modernLifestyle: 'Design-conscious aesthetics, stylish Vespa scooters darting through cobbled alleys, high-speed Frecciarossa trains connecting major cities.'
    },

    geography: {
      locationDescription: 'Boot-shaped peninsula extending into the central Mediterranean Sea, bordered by the Alps to the north and surrounded by five seas.',
      climate: 'Mediterranean across most of the peninsula with hot, dry summers and mild winters; continental in the Po Valley; alpine in the high northern ranges.',
      majorFeatures: ['The Apennine Mountains (spine of the peninsula)', 'The Italian Alps', 'Po River (longest river in Italy)', 'Garda, Como, and Maggiore lakes'],
      wildlife: ['Italian Wolf (National Animal)', 'Marsican Brown Bear', 'Apennine Chamois', 'Golden Eagle'],
      naturalAttractionsSummary: 'Dramatic variety from turquoise Mediterranean beaches and smoking volcanic peaks to snow-blanketed Alpine ski slopes.'
    },

    sources: [
      { title: 'Italian National Tourist Board (ENIT)', url: 'https://www.italia.it' },
      { title: 'Ministry of Culture (MiC)', url: 'https://cultura.gov.it' },
      { title: 'UNESCO World Heritage Centre – Italy', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'germany',
    slug: 'germany',
    name: 'Germany',
    officialName: 'Federal Republic of Germany (Bundesrepublik Deutschland)',
    flagEmoji: '🇩🇪',
    capital: 'Berlin',
    continent: 'Europe',
    heroImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The land of poets and thinkers ("Dichter und Denker"), fairy-tale castles, dense Black Forest pine trails, classical symphonies, and precision engineering.',
    taraGreeting: 'Guten Tag! Welcome to Germany! Look at Neuschwanstein Castle perched high above misty Bavarian forests—it inspired Disney’s fairy-tale castle! Let’s explore Germany’s half-timbered towns and world-changing inventions!',
    taraFacts: [
      'Germany is home to over 25,000 castles and fortresses scattered across hillsides and riverbanks!',
      'Johannes Gutenberg invented the movable-type mechanical printing press in Mainz around 1440, launching the global information revolution.',
      'Germany has over 3,000 distinct varieties of bread and more than 1,500 types of sausages, celebrated with official baker guild traditions.'
    ],
    population: '84.4 Million',
    currency: 'Euro (€, EUR)',
    languagesSummary: 'German (Deutsch)',
    coordinates: { lat: 51.1657, lng: 10.4515 },

    history: {
      timeline: [
        { period: '9 CE', title: 'Battle of the Teutoburg Forest', description: 'Arminius united Germanic tribes to halt Roman imperial expansion past the Rhine River.' },
        { period: '962–1806 CE', title: 'Holy Roman Empire', description: 'Complex elective confederation of principalities, free imperial cities, and bishoprics crowned in Aachen and Frankfurt.' },
        { period: '1517 CE', title: 'Protestant Reformation', description: 'Martin Luther posted his Ninety-Five Theses in Wittenberg, fundamentally transforming European religion, education, and language.' },
        { period: '1871 CE', title: 'Unification of Germany', description: 'Otto von Bismarck orchestrated the founding of the German Empire under Prussian leadership in the Hall of Mirrors at Versailles.' },
        { period: '1989 CE', title: 'Fall of the Berlin Wall', description: 'Peaceful revolution bringing down the Cold War barrier on November 9, 1989, leading to democratic reunification.' }
      ],
      majorCivilizations: ['Germanic Tribes', 'Holy Roman Empire', 'Hanseatic League', 'Kingdom of Prussia', 'Weimar Republic'],
      importantEventsSummary: 'A powerhouse of philosophical thought (Kant, Hegel, Nietzsche), classical music (Bach, Beethoven, Brahms), and scientific breakthroughs (Einstein, Planck).',
      culturalHeritage: '54 UNESCO World Heritage Sites including Cologne Cathedral, Museum Island in Berlin, and the Wartburg Castle.'
    },

    languages: {
      official: ['German'],
      widelySpoken: ['Standard German (Hochdeutsch)'],
      regional: ['Bavarian', 'Swabian', 'Kölsch', 'Plattdeutsch (Low German)', 'Sorbian (recognized minority)', 'Frisian'],
      linguisticDiversityNotes: 'German is famous for compound words like "Gemütlichkeit" (cozy contentment) and "Fernweh" (longing for distant faraway places).',
      commonPhrases: [
        { phrase: 'Guten Tag', meaning: 'Good day / Hello', pronunciation: 'GOO-ten tahk' },
        { phrase: 'Danke schön', meaning: 'Thank you very much', pronunciation: 'DAHN-keh shern' },
        { phrase: 'Bitte sehr', meaning: 'You are welcome / Please', pronunciation: 'BIT-teh zair' },
        { phrase: 'Auf Wiedersehen', meaning: 'Goodbye', pronunciation: 'owf VEE-der-zay-en' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Schnitzel & Spätzle', localName: 'Schnitzel mit Käsespätzle', description: 'Golden breaded pork or veal cutlet fried crisp, paired with handmade egg noodles tossed with melted alpine cheese and fried onions.', tag: 'Comfort Classic' },
        { name: 'Sauerbraten', localName: 'Rheinischer Sauerbraten', description: 'Pot roast marinated for days in red wine, vinegar, cloves, and juniper berries, served with potato dumplings and red cabbage.', tag: 'Traditional Roast' },
        { name: 'Currywurst', localName: 'Berliner Currywurst', description: 'Steamed then fried pork sausage sliced and smothered in spiced tomato-curry ketchup, served with golden french fries.', tag: 'Berlin Street Icon' },
        { name: 'Black Forest Cake', localName: 'Schwarzwälder Kirschtorte', description: 'Layers of rich chocolate sponge cake brushed with Kirsch cherry schnapps, whipped cream, sour cherries, and dark chocolate curls.', tag: 'Pastry Perfection' }
      ],
      popularIngredients: ['Rye and sourdough grains', 'Potatoes', 'Cabbage (Sauerkraut)', 'Pork', 'Mustard (Senf)', 'Juniper berries', 'Caraway seeds'],
      foodCustoms: 'Abendbrot: a traditional light evening supper consisting of fresh artisan bread, cold cuts, specialty cheeses, and pickles, eaten together as a family.',
      regionalSpecialties: 'Bavaria is famed for Weisswurst white sausages and giant soft pretzels; Thuringia for grilled bratwurst; Hamburg for fresh herring Fischbrötchen rolls.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Dirndl', description: 'Alpine dress featuring a tight bodice, blouse, full skirt, and apron tied with a bow (the bow placement indicates relationship status).', significance: 'Celebrated across Bavaria and Austria as regional festive attire.' },
        { name: 'Lederhosen', description: 'Durable leather breeches made from deer or goat hide with decorative horn buttons and suspenders (H-Träger).', significance: 'Originally rugged Alpine workwear, now worn with immense pride at folk festivals.' }
      ],
      culturalSignificance: 'Tracht (traditional clothing) differs subtly from valley to valley, with specific embroidery patterns identifying an individual’s home village.',
      regionalVariations: 'Bollenhut broad-brimmed hats topped with large red or black wool pompoms in the Black Forest; maritime sailor caps in northern port cities.',
      occasionsWorn: 'Oktoberfest, Maypole (Maibaum) celebrations, parish festivals (Kirchweih), and village weddings.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Oktoberfest (Munich)', seasonOrDate: 'Late September–First Sunday of October', description: 'The world’s largest folk festival (Volksfest) welcoming over six million visitors with giant brass band beer tents, roast chicken, and traditional trachten.', tradition: 'Mayor tapping the first keg with the cry "O’zapft is!".' },
        { name: 'Weihnachtsmärkte (Christmas Markets)', seasonOrDate: 'Advent (Late November–Christmas Eve)', description: 'Magical cobblestone town squares lit by fairy lights, filled with wooden stalls selling Glühwein, gingerbread (Lebkuchen), and wooden nutcrackers.', tradition: 'Sipping warm spiced Glühwein around festive pine trees.' },
        { name: 'Karneval / Fasching', seasonOrDate: 'Rose Monday (Rosenmontag, February)', description: 'The "Fifth Season" of joyful craziness, especially in Cologne, Mainz, and Düsseldorf, with satire floats, silly costumes, and street dancing.', tradition: 'Dressing in whimsical costumes shouting "Kölle Alaaf!".' }
      ],
      seasonalCelebrations: 'Maibaum raising on May 1; Walpurgisnacht bonfires in the Harz mountains; autumn wine festivals along the Moselle river.',
      culturalContext: 'Combines deep reverence for nature, community volunteerism in Vereine (clubs), and centuries of civic pride in independent Hanseatic and imperial cities.',
      howPeopleCelebrate: 'Singing brass band folk anthems, clinking hefty glass mugs, and taking brisk weekend forest hikes (Wandern).'
    },

    arts: {
      traditionalMusic: 'Symphonies of Ludwig van Beethoven, Johann Sebastian Bach’s organ fugues, and Bavarian brass bands (Blasmusik).',
      danceForms: ['Schuhplattler (alpine thigh-slapping dance)', 'Zwiefacher folk waltz', 'Polka'],
      artFormsAndCrafts: ['Bauhaus design movement (Walter Gropius)', 'Meissen porcelain', 'Erzgebirge wooden toys and nutcrackers', 'Cuckoo clock woodcarving'],
      livingPractices: 'Kaffee und Kuchen (afternoon coffee and cake tradition), Wandern (passionate forest trail hiking), and ecological recycling consciousness (Pfand).'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Neuschwanstein Castle', location: 'Füssen, Bavaria', description: '19th-century Romanesque Revival fairy-tale palace commissioned by King Ludwig II perched dramatically on a rugged hill above pine forests.', isUnesco: false },
        { name: 'Brandenburg Gate', location: 'Berlin', description: '18th-century neoclassical sandstone triumphal arch crowned by the Quadriga chariot, the defining monument of German unity and freedom.', isUnesco: false },
        { name: 'Cologne Cathedral (Kölner Dom)', location: 'Cologne, North Rhine-Westphalia', description: 'Monumental High Gothic twin-spired cathedral that took over 630 years to complete, housing the Shrine of the Three Holy Kings.', isUnesco: true },
        { name: 'Upper Middle Rhine Valley', location: 'Rhineland-Palatinate', description: 'Dramatic 65-kilometer river gorge lined with over 40 hilltop medieval castles, terraced vineyards, and the mythical Lorelei rock.', isUnesco: true }
      ],
      unescoSitesCount: 54,
      naturalAttractions: ['Black Forest (Schwarzwald)', 'Saxon Switzerland National Park (Bastei rock bridge)', 'Zugspitze (Germany’s highest peak at 2,962m)', 'Wadden Sea tidal mudflats']
    },

    interestingFacts: [
      'Germany was the first country in the world to adopt Daylight Saving Time (DST) on April 30, 1916, during the First World War.',
      'Over 65% of the highways (Autobahn) in Germany have no mandatory general speed limit, relying instead on recommended advisory speeds.',
      'The Christmas tree (Weihnachtsbaum) tradition originated in Germany in the 16th century before spreading worldwide.',
      'Berlin has more bridges (over 960) than Venice, accompanied by an extensive network of connecting rivers, canals, and urban lakes.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A firm, direct handshake while maintaining clear eye contact.',
        'Punctuality is a deeply ingrained sign of respect—arriving five minutes early is considered on time.',
        'Never crossing pedestrian crosswalks on red lights, especially when children are present.'
      ],
      familyTraditions: 'Children receive a large cardboard cone filled with sweets and school supplies (Schultüte) on their very first day of primary school.',
      everydayCustoms: 'Returning recyclable beverage bottles to grocery store reverse vending machines for cash deposits (Pfand), Sunday quiet hours (Ruhetag).',
      modernLifestyle: 'Pioneers in solar and wind renewable energy, bike commuting, thriving techno music clubs in Berlin, and summer river swimming.'
    },

    geography: {
      locationDescription: 'Situated in the heart of Central Europe, bordered by nine neighboring countries, the North Sea, and the Baltic Sea.',
      climate: 'Moderate temperate oceanic and continental with warm summers and cool, snowy winters in southern highland regions.',
      majorFeatures: ['Bavarian Alps', 'Rhine, Danube, and Elbe Rivers', 'Black Forest', 'North German Lowlands'],
      wildlife: ['Red Deer', 'Wild Boar', 'Eurasian Lynx', 'Chamois', 'White-tailed Eagle'],
      naturalAttractionsSummary: 'Spanning windswept Baltic chalk cliffs to dense enchanted pine woodlands and rugged Alpine crags.'
    },

    sources: [
      { title: 'German National Tourist Board (Germany Travel)', url: 'https://www.germany.travel' },
      { title: 'Stiftung Preußische Schlösser und Gärten', url: 'https://www.spsg.de' },
      { title: 'UNESCO World Heritage Centre – Germany', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'spain',
    slug: 'spain',
    name: 'Spain',
    officialName: 'Kingdom of Spain (Reino de España)',
    flagEmoji: '🇪🇸',
    capital: 'Madrid',
    continent: 'Europe',
    heroImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'A passionate peninsula of sun-drenched plazas, Flamenco rhythms, Moorish palace courtyards, Gaudi’s surreal architecture, and festive tapas evenings.',
    taraGreeting: '¡Hola! Welcome to Spain! Can you hear the rhythmic clapping and passionate guitar chords of flamenco? Let’s explore the breathtaking stone lace of the Alhambra and admire Antoni Gaudí’s magical towers in Barcelona!',
    taraFacts: [
      'The monumental Sagrada Família basilica in Barcelona has been under construction since 1882—longer than the Egyptian Pyramids took to build!',
      'Spain produces roughly 45% of the entire world’s total olive oil supply, predominantly from the sunlit hills of Andalusia.',
      'Spanish is the world’s second most spoken native language, with nearly 500 million native speakers worldwide.'
    ],
    population: '48.6 Million',
    currency: 'Euro (€, EUR)',
    languagesSummary: 'Spanish (Castilian), Catalan, Basque (Euskara), Galician (Galego)',
    coordinates: { lat: 40.4637, lng: -3.7492 },

    history: {
      timeline: [
        { period: 'c. 218 BCE – 400 CE', title: 'Roman Hispania', description: 'Romans established flourishing cities, magnificent aqueducts in Segovia, and produced Roman emperors Trajan and Hadrian.' },
        { period: '711–1492 CE', title: 'Al-Andalus & Moorish Golden Age', description: 'Nearly eight centuries of Islamic civilization fostering mathematics, astronomy, medicine, and building the Mosque-Cathedral of Córdoba and the Alhambra.' },
        { period: '1492 CE', title: 'Reconquista & Voyages of Columbus', description: 'Fall of Granada under Catholic Monarchs Isabella and Ferdinand, beginning transatlantic expeditions to the Americas.' },
        { period: '16th–17th Century', title: 'Spanish Golden Age (Siglo de Oro)', description: 'Artistic pinnacle with painters Velázquez and El Greco, and Miguel de Cervantes authoring Don Quixote.' }
      ],
      majorCivilizations: ['Iberians and Celts', 'Roman Hispania', 'Visigothic Kingdom', 'Emirate & Caliphate of Córdoba', 'Crowns of Castile and Aragon'],
      importantEventsSummary: 'A vibrant crossroads of Christian, Muslim, and Jewish intellectual heritage, maritime global exploration, and avant-garde modern art (Picasso, Dalí, Miró).',
      culturalHeritage: '50 UNESCO World Heritage Sites including the Alhambra, Works of Antoni Gaudí, and the Camino de Santiago.'
    },

    languages: {
      official: ['Spanish (Castellano)'],
      widelySpoken: ['Castilian Spanish'],
      regional: ['Catalan / Valencian', 'Basque (Euskara - unique language isolate)', 'Galician (Galego)'],
      linguisticDiversityNotes: 'Spain constitutionally protects its co-official regional languages, which have their own rich literature, broadcasting, and education systems.',
      commonPhrases: [
        { phrase: '¡Hola!', meaning: 'Hello!', pronunciation: 'OH-lah' },
        { phrase: 'Muchas gracias', meaning: 'Thank you very much', pronunciation: 'MOO-chahs GRAH-syahs' },
        { phrase: 'Por favor', meaning: 'Please', pronunciation: 'por fah-VOR' },
        { phrase: '¡Qué aproveche!', meaning: 'Enjoy your meal!', pronunciation: 'keh ah-proh-VEH-cheh' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Paella Valenciana', localName: 'Paella Valenciana', description: 'Saffron-infused bomba rice cooked in a wide shallow pan with chicken, rabbit, green beans, garrofon beans, and a prized crisp bottom crust (socarrat).', tag: 'Culinary Masterpiece' },
        { name: 'Jamón Ibérico de Bellota', localName: 'Jamón Ibérico', description: 'Acorn-fed free-range Iberian cured ham, cured for up to four years, sliced paper-thin so it melts at room temperature.', tag: 'Artisan Treasure' },
        { name: 'Gazpacho Andaluz', localName: 'Gazpacho', description: 'Chilled, refreshing raw soup blended from ripe tomatoes, cucumbers, bell peppers, garlic, crusty bread, sherry vinegar, and olive oil.', tag: 'Summer Classic' },
        { name: 'Churros con Chocolate', localName: 'Churros', description: 'Crisp fluted fried pastry dough dusted with sugar, dipped into thick, velvety molten dark drinking chocolate.', tag: 'Beloved Breakfast' }
      ],
      popularIngredients: ['Olive oil (Aceite de oliva)', 'Saffron (Azafrán)', 'Pimentón (smoked paprika)', 'Garlic', 'Iberian pork', 'Sherry vinegar', 'Seafood'],
      foodCustoms: 'Tapas and Pintxos culture: socializing by hopping from bar to bar (Tapeo), enjoying small savory bites accompanied by wine or cider with friends.',
      regionalSpecialties: 'Basque Country is world-renowned for Michelin-starred culinary artistry and pintxos; Galicia for boiled octopus (pulpo a la gallega); Madrid for cocido stew.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Traje de Flamenca (Faralaes)', description: 'Form-fitting ruffled dress featuring polka dots, vibrant colors, shawls (mantón de Manila), and flowers in the hair.', significance: 'Worn with immense joy during the Seville April Fair (Feria de Abril).' },
        { name: 'Traje de Luces', description: 'Elaborately sequined and gold-embroidered silk jacket and trousers worn by classical bullfighters.', significance: 'Represents centuries of ceremonial tailoring craftsmanship.' }
      ],
      culturalSignificance: 'Traditional mantillas (black or ivory lace veils supported by a high comb called a peineta) symbolize classical Spanish elegance during holy week.',
      regionalVariations: 'Basque black berets and txapela hats, Aragonese baturro vests, and Valencian fallera silk brocades.',
      occasionsWorn: 'Feria de Abril in Seville, Las Fallas in Valencia, Holy Week (Semana Santa) processions, and local fiestas.'
    },

    festivals: {
      majorFestivals: [
        { name: 'La Tomatina (Buñol)', seasonOrDate: 'Last Wednesday of August', description: 'The world’s biggest tomato fight where tens of thousands throw over 150,000 kilograms of overripe tomatoes through the streets.', tradition: 'Joyous street tomato battle followed by street hosing.' },
        { name: 'Las Fallas (Valencia)', seasonOrDate: 'March 15–19', description: 'Spectacular festival of towering satirical wooden and papier-mâché monument sculptures (fallas) ignited in massive bonfires on the final night (La Cremà).', tradition: 'Burning giant artistic sculptures in spectacular fires.' },
        { name: 'Semana Santa (Holy Week)', seasonOrDate: 'Week leading to Easter', description: 'Dramatic, solemn processions of hooded penitents (nazarenos) carrying monumental gilded religious floats (pasos) accompanied by mournful saeta songs.', tradition: 'Solemn candlelight processions and mournful flamenco singing.' },
        { name: 'Feria de Abril (Seville)', seasonOrDate: 'Two weeks after Easter', description: 'Fairgrounds filled with private striped tents (casetas), women dancing Sevillanas in ruffled dresses, and horse-drawn carriages.', tradition: 'Dancing Sevillanas and drinking rebujito cocktails.' }
      ],
      seasonalCelebrations: 'San Fermín running of the bulls in Pamplona; grape harvest celebrations in La Rioja; Castells (towering human towers) in Catalonia.',
      culturalContext: 'A vibrant collective celebration of life lived outdoors, community identity, and ancient religious devotions.',
      howPeopleCelebrate: 'Singing, dancing flamenco, playing castanets, and socializing at lively outdoor terrace tables until late into the night.'
    },

    arts: {
      traditionalMusic: 'Flamenco guitar (Paco de Lucía), cante jondo deep singing, copla ballads, and classical guitar (Andrés Segovia).',
      danceForms: ['Flamenco (UNESCO heritage)', 'Sevillanas', 'Sardana (Catalan circle dance)', 'Jota of Aragon'],
      artFormsAndCrafts: ['Modernist architecture of Antoni Gaudí', 'Talavera de la Reina ceramics', 'Toledo damascene gold inlay steelwork', 'Lace fan making'],
      livingPractices: 'The Siesta (afternoon rest during peak heat), late-night dining (dinner often starting after 9:30 or 10:00 PM), and passionate football discussions.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'La Sagrada Família', location: 'Barcelona, Catalonia', description: 'Antoni Gaudí’s breathtaking organic basilica blending Gothic and Art Nouveau forms with natural tree-trunk stone columns and stained glass.', isUnesco: true },
        { name: 'The Alhambra & Generalife', location: 'Granada, Andalusia', description: 'Dazzling Moorish hilltop fortress-palace complex featuring intricate arabesque plaster carvings, marble fountains, and serene reflecting pools.', isUnesco: true },
        { name: 'Mosque-Cathedral of Córdoba (Mezquita)', location: 'Córdoba, Andalusia', description: 'Hypostyle hall featuring a mesmerizing forest of 856 red-and-white double-tiered horseshoe stone arches.', isUnesco: true },
        { name: 'Aqueduct of Segovia', location: 'Segovia, Castile and León', description: 'Pristine 1st-century Roman granite aqueduct standing 28 meters high, built without a single drop of mortar.', isUnesco: true }
      ],
      unescoSitesCount: 50,
      naturalAttractions: ['Teide National Park (Mount Teide on Tenerife, Spain’s highest peak at 3,715m)', 'Picos de Europa limestone mountains', 'Doñana National Park wetland sanctuary', 'Cabo de Gata volcanic coastal reserve']
    },

    interestingFacts: [
      'The Spanish national anthem, the "Marcha Real", is one of the only national anthems on Earth that has no official lyrics!',
      'Spain is home to the world’s oldest continuously operating restaurant: Sobrino de Botín in Madrid, serving roast suckling pig since 1725!',
      'Spain operates the second-longest high-speed rail network (AVE) in the world after China, linking Madrid to all coastal regions.',
      'The Spanish tradition on New Year’s Eve is to eat 12 grapes (uvas de la suerte)—one on each stroke of the clock at midnight—for twelve months of good luck.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'Greeting friends with two kisses on the cheeks (dos besos), starting with the right cheek.',
        'Mealtimes are substantially later than in northern Europe: lunch at 2:00–3:30 PM, dinner at 9:30–11:00 PM.',
        'Addressing people with warm enthusiasm and affectionate terms like "Guapo/Guapa".'
      ],
      familyTraditions: 'Sundays are spent with grandparents, aunts, uncles, and cousins sharing an enormous pan of paella at beachside chiringuitos or country fincas.',
      everydayCustoms: 'Taking an afternoon stroll along the paseo marítimo or town rambla, enjoying a mid-morning café con leche and pan con tomate.',
      modernLifestyle: 'A progressive society with high life expectancy, vibrant terrace culture, renewable wind and solar power leadership, and walkable cities.'
    },

    geography: {
      locationDescription: 'Occupies about 85% of the Iberian Peninsula in southwestern Europe, including the Balearic Islands in the Mediterranean and the Canary Islands in the Atlantic.',
      climate: 'predominantly Mediterranean with warm dry summers; oceanic and lush green in the northern "Green Spain" (Galicia, Asturias, Basque); semi-arid in the central Meseta.',
      majorFeatures: ['Pyrenees mountain range', 'Meseta Central plateau', 'Sierra Nevada', 'Tagus (Tajo) and Ebro rivers'],
      wildlife: ['Iberian Lynx (one of the world’s rarest cats)', 'Spanish Imperial Eagle', 'Cantabrian Brown Bear', 'Iberian Wolf'],
      naturalAttractionsSummary: 'Extremes from the lush green eucalyptus hills of Galicia to the desert badlands of Tabernas and volcanic Atlantic islands.'
    },

    sources: [
      { title: 'Turespaña (Spain.info)', url: 'https://www.spain.info' },
      { title: 'Patrimonio Nacional de España', url: 'https://www.patrimonionacional.es' },
      { title: 'UNESCO World Heritage Centre – Spain', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'united-kingdom',
    slug: 'united-kingdom',
    name: 'United Kingdom',
    officialName: 'United Kingdom of Great Britain and Northern Ireland',
    flagEmoji: '🇬🇧',
    capital: 'London',
    continent: 'Europe',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'An island nation steeped in royal history, literary giants, ancient prehistoric stones, iconic red double-decker buses, and cozy village pubs.',
    taraGreeting: 'Hello! Welcome to the United Kingdom! Did you know the UK brings together England, Scotland, Wales, and Northern Ireland? Let’s hear the chimes of Big Ben, walk the cobbled royal streets of Edinburgh, and solve mysteries with Sherlock Holmes!',
    taraFacts: [
      'Stonehenge on Salisbury Plain is over 4,500 years old—constructed before the Egyptian Pyramids were completed!',
      'The British Library in London holds over 170 million items, adding around 3 million new items to its collection every year.',
      'British people drink an estimated 100 million cups of tea every single day, turning afternoon tea into a beloved cultural art form.'
    ],
    population: '68.2 Million',
    currency: 'Pound Sterling (£, GBP)',
    languagesSummary: 'English (Official), Welsh (Cymraeg), Scots, Scottish Gaelic, Irish, Cornish',
    coordinates: { lat: 55.3781, lng: -3.4360 },

    history: {
      timeline: [
        { period: 'c. 3000–2000 BCE', title: 'Stonehenge & Prehistoric Britain', description: 'Construction of megalithic stone henges aligned precisely with the summer and winter solstices.' },
        { period: '43–410 CE', title: 'Roman Britannia', description: 'Emperor Claudius conquered Britain; Romans built Londinium and Emperor Hadrian built the 73-mile stone wall to guard northern frontiers.' },
        { period: '1066 CE', title: 'Norman Conquest', description: 'William the Conqueror defeated King Harold at the Battle of Hastings, building the Tower of London and compiling the Domesday Book.' },
        { period: '1215 CE', title: 'Magna Carta', description: 'Barons compelled King John to sign the Great Charter at Runnymede, establishing the foundational principle that nobody, not even the monarch, is above the law.' },
        { period: '18th–19th Century', title: 'Industrial Revolution & Victorian Era', description: 'Steam engine development (James Watt), railway expansion, and scientific breakthroughs transforming global trade and manufacturing.' }
      ],
      majorCivilizations: ['Britons & Celts', 'Roman Britannia', 'Anglo-Saxons', 'Vikings', 'Normans', 'Tudors', 'Victorians'],
      importantEventsSummary: 'A history that forged parliamentary democracy, common law, the Industrial Revolution, and timeless literature (Shakespeare, Dickens, Austen).',
      culturalHeritage: '33 UNESCO World Heritage Sites including the Tower of London, Palace of Westminster, Giant’s Causeway, and Edinburgh Old and New Towns.'
    },

    languages: {
      official: ['English'],
      widelySpoken: ['British English'],
      regional: ['Welsh (Cymraeg - official in Wales)', 'Scots', 'Scottish Gaelic (Gàidhlig)', 'Irish (Gaeilge)', 'Cornish'],
      linguisticDiversityNotes: 'Welsh has seen a world-leading linguistic revival, with bilingual road signs, schools, and television broadcasts across Wales.',
      commonPhrases: [
        { phrase: 'Cheers!', meaning: 'Thank you / Good health / Toast', pronunciation: 'CHEERZ' },
        { phrase: 'Fancy a cuppa?', meaning: 'Would you like a cup of tea?', pronunciation: 'FAN-see ah KUP-pah' },
        { phrase: 'Mind the gap', meaning: 'Be careful of the space between train and platform', pronunciation: 'mynd thuh gap' },
        { phrase: 'Brilliant!', meaning: 'Excellent / Wonderful!', pronunciation: 'BRIL-yuhnt' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Fish and Chips', localName: 'Fish and Chips', description: 'Flaky cod or haddock encased in crisp, golden beer batter, served with thick-cut chips, mushy peas, and malt vinegar.', tag: 'National Seaside Classic' },
        { name: 'Sunday Roast & Yorkshire Pudding', localName: 'Sunday Roast', description: 'Roast beef with crispy roast potatoes, puffed golden Yorkshire puddings, seasonal vegetables, and rich onion gravy.', tag: 'Family Tradition' },
        { name: 'Full English Breakfast', localName: 'Full English', description: 'Hearty plate featuring fried eggs, Cumberland sausages, back bacon, baked beans, grilled tomatoes, mushrooms, and buttered toast.', tag: 'Iconic Morning Feast' },
        { name: 'Afternoon Tea', localName: 'Cream Tea / Afternoon Tea', description: 'Three-tiered stand of crustless finger sandwiches, warm scones with clotted cream and strawberry jam, and delicate pastries.', tag: 'Refined Elegance' }
      ],
      popularIngredients: ['Cheddar cheese (Somerset)', 'Black tea', 'Malt vinegar', 'Mustard (Colman’s)', 'Beef', 'Potatoes', 'Bramley apples', 'Butter'],
      foodCustoms: 'Tea etiquette: debating whether milk goes in first or jam goes before clotted cream (Cornish vs. Devon traditions!). Queuing patiently in lines is a national social norm.',
      regionalSpecialties: 'Scotland is famous for Haggis with neeps and tatties; Wales for Welsh Rarebit and Cawl lamb broth; Northern Ireland for the Ulster Fry.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Scottish Kilt', description: 'Pleated knee-length skirt-like garment woven from wool with specific clan tartan patterns, worn with a sporran pouch and sgian-dubh dagger.', significance: 'Proud symbol of Scottish Highland heritage and clan identity.' },
        { name: 'Tweed Jacket & Flat Cap', description: 'Durable woven wool twill jacket and cap originating for protection against cold Scottish and English rains.', significance: 'Classic countryside attire associated with British understated elegance.' }
      ],
      culturalSignificance: 'Savile Row in London remains the gold standard of bespoke gentlemen’s tailoring, dressing royalty and statesmen for centuries.',
      regionalVariations: 'Welsh national costume featuring tall black beaver-fur stovepipe hats and flannel cloaks; Pearly Kings and Queens pearl-button suits in London.',
      occasionsWorn: 'Highland Games, ceilidh folk dances, royal garden parties, and formal weddings.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Edinburgh Festival Fringe', seasonOrDate: 'August (Scotland)', description: 'The single greatest arts and comedy festival on Earth, turning Edinburgh into thousands of pop-up theaters, street shows, and comedy gigs.', tradition: 'Non-stop street performances along the Royal Mile.' },
        { name: 'Notting Hill Carnival', seasonOrDate: 'August Bank Holiday (London)', description: 'Massive Caribbean celebration filling West London with vibrant feathered masquerade dancers, steelpan drums, and jerk chicken stalls.', tradition: 'Feathered costume parades and Caribbean street food.' },
        { name: 'Bonfire Night (Guy Fawkes)', seasonOrDate: 'November 5', description: 'Commemorates the foiled 1605 Gunpowder Plot to blow up Parliament with neighborhood bonfires, fireworks, and sparklers.', tradition: 'Reciting "Remember, remember the fifth of November" around bonfires.' },
        { name: 'Glastonbury Festival', seasonOrDate: 'June (Somerset)', description: 'World-famous contemporary music and performing arts festival held on dairy farmland, featuring the iconic Pyramid Stage.', tradition: 'Camping in wellington boots and watching legendary rock/pop headliners.' }
      ],
      seasonalCelebrations: 'Burns Night in Scotland on January 25 with haggis and poetry; St. Patrick’s Day in Northern Ireland; May Day Morris dancing at dawn.',
      culturalContext: 'Blends ancient pagan solstices, historic royal pageantry, literary commemorations, and vibrant multicultural urban celebrations.',
      howPeopleCelebrate: 'Meeting friends down at the cozy local pub with a crackling fireplace, cheering on Premier League football matches, and drinking pints of cider or ale.'
    },

    arts: {
      traditionalMusic: 'Scottish bagpipes, Welsh male voice choirs, sea shanties, English folk ballads, and global pop revolutions (The Beatles, Queen, The Rolling Stones).',
      danceForms: ['Scottish Highland Dancing', 'Morris Dancing with bells and sticks', 'Cèilidh communal folk dances'],
      artFormsAndCrafts: ['William Morris Arts & Crafts movement', 'Staffordshire pottery (Wedgwood)', 'Tartan weaving', 'Harris Tweed hand-weaving'],
      livingPractices: 'Gardening pride (Chelsea Flower Show), pub pub-quiz nights, Sunday village cricket matches, and walking public footpaths across green pastures.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Big Ben & Houses of Parliament', location: 'London, England', description: 'The Elizabeth Tower and neo-Gothic palace on the River Thames, the seat of the British Parliament and world symbol of democracy.', isUnesco: true },
        { name: 'Stonehenge', location: 'Wiltshire, England', description: 'Iconic prehistoric stone circle erected between 3000 and 2000 BCE, aligned with astronomical precision.', isUnesco: true },
        { name: 'Edinburgh Castle', location: 'Edinburgh, Scotland', description: 'Historic fortress dominating the skyline of Edinburgh from atop an extinct volcanic crag, housing the Honours of Scotland crown jewels.', isUnesco: true },
        { name: 'Giant’s Causeway', location: 'County Antrim, Northern Ireland', description: 'Geological marvel of approximately 40,000 interlocking polygonal basalt columns formed by ancient volcanic activity and linked to the legend of giant Finn MacCool.', isUnesco: true }
      ],
      unescoSitesCount: 33,
      naturalAttractions: ['Lake District National Park (inspiration for Beatrix Potter & Wordsworth)', 'Loch Ness and the Scottish Highlands', 'Jurassic Coast fossil cliffs (Dorset)', 'Snowdonia (Eryri) National Park in Wales']
    },

    interestingFacts: [
      'The Queen (and now King) does not require a driver’s license or passport to travel, as all British passports and licenses are officially issued in the monarch’s name!',
      'Windsor Castle is the oldest and largest continuously occupied castle on Earth, serving as a royal residence for over 900 years.',
      'London’s Underground rail system ("The Tube"), opened in 1863, was the world’s very first subterranean passenger railway.',
      'Nowhere in the United Kingdom is further than 75 miles (120 km) from the sea!'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A polite handshake, saying "Please", "Thank you", and "Sorry" constantly (even if someone else bumps into you!).',
        'Standing strictly on the right side of escalators on the London Underground to let people walk past on the left.',
        'Always respecting the queue: jumping a line is considered the ultimate social infraction.'
      ],
      familyTraditions: 'Gathering for a Sunday roast with extended family, pulling colorful Christmas crackers at the holiday dinner table while wearing paper crowns.',
      everydayCustoms: 'Discussing the unpredictable weather daily, heading to the corner pub after work on Fridays, enjoying a warm cup of tea during any crisis.',
      modernLifestyle: 'A powerhouse of world-class museums with free public admission, bustling West End theater productions, and vibrant fintech hubs in London.'
    },

    geography: {
      locationDescription: 'Island nation located off the northwestern coast of mainland Europe, comprising the island of Great Britain, northeastern Ireland, and numerous smaller islands.',
      climate: 'Temperate maritime with abundant rainfall, cool winters, and warm, pleasant summers influenced by the Atlantic Gulf Stream.',
      majorFeatures: ['Scottish Highlands (Ben Nevis, highest peak at 1,345m)', 'Pennine Hills ("Backbone of England")', 'River Thames', 'Severn River (longest river)'],
      wildlife: ['Red Fox', 'European Badger', 'Red Deer', 'Scottish Wildcat', 'Atlantic Puffin'],
      naturalAttractionsSummary: 'Gentle green rolling downs, heather-covered moors, rugged sea cliffs, and mist-covered mountain lochs.'
    },

    sources: [
      { title: 'VisitBritain – Official Tourism Site', url: 'https://www.visitbritain.com' },
      { title: 'Historic England', url: 'https://historicengland.org.uk' },
      { title: 'UNESCO World Heritage Centre – United Kingdom', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'greece',
    slug: 'greece',
    name: 'Greece',
    officialName: 'Hellenic Republic (Elliniki Dimokratia)',
    flagEmoji: '🇬🇷',
    capital: 'Athens',
    continent: 'Europe',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The radiant birthplace of democracy, Western philosophy, theater, and the Olympic Games, crowned by white-and-blue Aegean island sanctuaries.',
    taraGreeting: 'Yassas! Welcome to Greece! Stand atop the marble steps of the Acropolis and imagine Socrates and Plato discussing the mysteries of truth and virtue beneath the warm Mediterranean sun! Let’s explore!',
    taraFacts: [
      'Greece is considered the cradle of Western civilization: democracy, Western philosophy, theater, historical writing, and the Olympic Games were all born here!',
      'Greece has over 6,000 islands and islets scattered across the Aegean and Ionian Seas, of which only 227 are inhabited.',
      'Mount Olympus was believed by ancient Greeks to be the mythological home of the 12 Olympian Gods, led by Zeus.'
    ],
    population: '10.4 Million',
    currency: 'Euro (€, EUR)',
    languagesSummary: 'Greek (Ellinika with Greek alphabet)',
    coordinates: { lat: 39.0742, lng: 21.8243 },

    history: {
      timeline: [
        { period: 'c. 3000–1100 BCE', title: 'Minoan & Mycenaean Civilizations', description: 'Flourishing Bronze Age palace cultures in Crete (Knossos labyrinth) and Mycenae (Mask of Agamemnon).' },
        { period: '776 BCE', title: 'First Olympic Games', description: 'Athletes gathered in Olympia every four years under a sacred pan-Hellenic truce to compete in honor of Zeus.' },
        { period: '5th Century BCE', title: 'Classical Golden Age of Athens', description: 'Pericles commissioned the Parthenon; development of direct democracy; drama by Sophocles and philosophy by Socrates.' },
        { period: '336–323 BCE', title: 'Alexander the Great', description: 'Conquered the Persian Empire and spread Hellenistic Greek culture, science, and philosophy as far as India and Egypt.' },
        { period: '330–1453 CE', title: 'Byzantine Empire', description: 'Greek-speaking Eastern Roman Empire centered at Constantinople, producing golden mosaics and Christian Orthodox theology.' }
      ],
      majorCivilizations: ['Minoans', 'Mycenaeans', 'Classical City-States (Athens, Sparta)', 'Macedonian Empire', 'Byzantine Empire'],
      importantEventsSummary: 'The foundational catalyst for European science (geometry, astronomy, medicine), political philosophy, epic poetry (Homer’s Iliad and Odyssey), and sculpture.',
      culturalHeritage: '19 UNESCO World Heritage Sites including the Acropolis of Athens, Delphi, Meteora, and Rhodes Medieval City.'
    },

    languages: {
      official: ['Greek'],
      widelySpoken: ['Modern Greek (Demotic)'],
      regional: ['Pontic Greek', 'Cretan Greek', 'Tsakonian (descendant of ancient Doric)'],
      linguisticDiversityNotes: 'The Greek alphabet has been used continuously for over 2,800 years and gave birth to both the Latin and Cyrillic alphabets used across the globe.',
      commonPhrases: [
        { phrase: 'Yassas / Yassou', meaning: 'Hello / Good health to you', pronunciation: 'YAH-sahss / YAH-soo' },
        { phrase: 'Efcharisto', meaning: 'Thank you', pronunciation: 'ef-hah-rees-TOH' },
        { phrase: 'Parakalo', meaning: 'Please / You are welcome', pronunciation: 'pah-rah-kah-LOH' },
        { phrase: 'Opa!', meaning: 'Joyful exclamation of celebration!', pronunciation: 'OH-pah' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Moussaka', localName: 'Μουσακάς', description: 'Layers of roasted eggplant, spiced minced lamb or beef in tomato-cinnamon sauce, topped with a thick, golden-baked béchamel custard.', tag: 'Baked Masterpiece' },
        { name: 'Greek Salad (Horiatiki)', localName: 'Χωριάτικη σαλάτα', description: 'Sun-ripened tomatoes, crisp cucumbers, red onions, Kalamata olives, topped with a slab of authentic barrel-aged feta cheese and Greek oregano.', tag: 'Fresh Mediterranean' },
        { name: 'Souvlaki & Gyros', localName: 'Σουβλάκι', description: 'Tender marinated pork or chicken skewers wrapped in warm pita bread with garlicky tzatziki yogurt sauce, onions, tomatoes, and fries.', tag: 'Beloved Street Food' },
        { name: 'Baklava', localName: 'Μπακλαβάς', description: 'Layers of paper-thin phyllo pastry stuffed with crushed walnuts and cinnamon, soaked in fragrant lemon-honey syrup.', tag: 'Sweet Golden Crunch' }
      ],
      popularIngredients: ['Extra virgin Greek olive oil', 'Feta cheese (PDO)', 'Kalamata olives', 'Greek yogurt', 'Wild oregano', 'Lemon', 'Honey', 'Garlic'],
      foodCustoms: 'Meals are leisurely affairs eaten meze-style with small plates shared among everyone at outdoor seaside tavernas with the sea breeze gently blowing.',
      regionalSpecialties: 'Crete is celebrated as the home of the original healthy Mediterranean Diet (Dakos barley rusks, wild greens); Santorini for fava bean purée and cherry tomatoes.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Foustanella', description: 'Pleated white kilt-like skirt made of 400 pleats representing 400 years of Ottoman occupation, worn by the Evzones presidential guard.', significance: 'National military and ceremonial symbol of freedom and sacrifice.' },
        { name: 'Tsarouchia', description: 'Red leather clogs adorned with large black wool pompoms on the toes, historically hiding sharp blades for combat.', significance: 'Traditional ceremonial footwear of the Evzones.' }
      ],
      culturalSignificance: 'Ancient Greeks pioneered the draped chiton and peplos garments of linen and wool, celebrating natural body proportions and fluidity.',
      regionalVariations: 'Ornate gold-embroidered Amalia dress of royal Athens; embroidered velvet bodices and headscarves across Aegean islands.',
      occasionsWorn: 'Independence Day (March 25), Oxi Day (October 28), and village saint festivals (Panigiri).'
    },

    festivals: {
      majorFestivals: [
        { name: 'Greek Easter (Pascha)', seasonOrDate: 'Spring (Orthodox calendar)', description: 'The most sacred holiday in Greece; celebrated with midnight candlelight church vigils, cracking red-dyed eggs saying "Christos Anesti!", and spit-roasted lamb.', tradition: 'Midnight fireworks and sharing roasted lamb.' },
        { name: 'Apokries (Carnival)', seasonOrDate: 'Three weeks before Lent', description: 'Exuberant festival of costumes, satirical floats in Patras, and the meat-feasting feast day of Tsiknopempti (Smoky Thursday).', tradition: 'Grilling meats outdoors on Smoky Thursday.' },
        { name: 'Panigiria (Summer Village Festivals)', seasonOrDate: 'Summer (especially August 15)', description: 'Village squares host live violin and clarinet musicians, dancing traditional circle dances, and roasting meats until sunrise.', tradition: 'All-night circle dancing in village squares.' }
      ],
      seasonalCelebrations: 'Epiphany on January 6 where young men dive into freezing ocean waters to retrieve a wooden cross blessed by the priest.',
      culturalContext: 'Centers on Orthodox Christian spirituality, ancient hospitality (Philoxenia—welcoming the stranger), and love of music and dance.',
      howPeopleCelebrate: 'Shouting "Opa!", dancing the Syrtaki or Zeibekiko with arms outstretched, and clinking glasses of chilled ouzo or retsina.'
    },

    arts: {
      traditionalMusic: 'Rebetiko (the "Greek blues" played on the bouzouki and baglamas), Dimotika island folk tunes with violin and lute, and Mikis Theodorakis compositions.',
      danceForms: ['Syrtaki (Zorba’s dance)', 'Kalamatianos (12-step circle dance)', 'Hasapiko (butchers’ dance)', 'Pentozali of Crete'],
      artFormsAndCrafts: ['Marble sculpture', 'Black-figure and red-figure pottery', 'Byzantine gold-leaf icon painting', 'Flokati wool rugs'],
      livingPractices: 'Philoxenia (legendary generous hospitality to guests), sipping iced frappé or freddo espresso at outdoor cafes, and playing with komboloi worry beads.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'The Acropolis & Parthenon', location: 'Athens, Attica', description: 'Ancient rocky citadel crowned by the 5th-century BCE marble temple dedicated to Goddess Athena, the crowning achievement of Doric architecture.', isUnesco: true },
        { name: 'Meteora Monasteries', location: 'Thessaly', description: 'Eastern Orthodox monasteries daringly perched atop towering, near-vertical sandstone rock pillars rising hundreds of meters into the sky.', isUnesco: true },
        { name: 'Sanctuary of Delphi', location: 'Mount Parnassus', description: 'Ancient Panhellenic religious sanctuary and seat of the Pythia oracle, considered by ancient Greeks to be the naval center of the world (Omphalos).', isUnesco: true },
        { name: 'Santorini Caldera & Oia', location: 'Cyclades Islands', description: 'Whitewashed cubist houses with cobalt-blue domes perched dramatically on volcanic cliff edges overlooking an Aegean sunken caldera.', isUnesco: false }
      ],
      unescoSitesCount: 19,
      naturalAttractions: ['Samaria Gorge in Crete (longest canyon in Europe)', 'Navagio (Shipwreck) Beach in Zakynthos', 'Mount Olympus National Park', 'Blue Caves of Paxos']
    },

    interestingFacts: [
      'Athens is one of the oldest continuously named cities in the world, having been inhabited for at least 5,000 years.',
      'According to mythology, Athena won patronage of Athens over Poseidon by gifting citizens the olive tree, symbolizing peace, wisdom, and sustenance.',
      'Greece enjoys over 250 days of bright sunshine per year—averaging over 3,000 sunshine hours in southern Aegean islands!',
      'No point in mainland Greece is located more than 137 kilometers (85 miles) from the sparkling sea.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A warm hug and kisses on both cheeks for acquaintances; an enthusiastic handshake for newcomers.',
        'Never showing an open palm facing someone’s face (the "Moutza"), which is considered deeply insulting.',
        'Accepting food or drink offered by a Greek host with genuine gratitude—refusing is seen as impolite.'
      ],
      familyTraditions: 'Children are almost always named after their grandparents (firstborn son after the paternal grandfather), preserving lineage across generations.',
      everydayCustoms: 'Taking your time over a cold Freddo Cappuccino for two hours at an outdoor seaside cafe, swimming in crystal waters after work in summer.',
      modernLifestyle: 'A relaxed Mediterranean rhythm where work, evening strolls along the harbor, and long convivial dinners under star-filled skies blend naturally.'
    },

    geography: {
      locationDescription: 'Situated at the southern tip of the Balkan Peninsula in Southeastern Europe, flanked by the Aegean, Ionian, and Mediterranean Seas.',
      climate: 'Mediterranean with mild, wet winters and hot, dry, sun-drenched summers with cooling meltemi island breezes.',
      majorFeatures: ['Pindus Mountain Range', 'Mount Olympus (2,917m)', 'Aegean and Ionian Island archipelagos', 'Peloponnese peninsula'],
      wildlife: ['Loggerhead Sea Turtle (Caretta caretta)', 'Mediterranean Monk Seal (Monachus monachus)', 'Balkan Chamois', 'Golden Jackal'],
      naturalAttractionsSummary: 'Dramatic turquoise coastlines, limestone gorges, hidden sea caves, and olive grove-covered mountain valleys.'
    },

    sources: [
      { title: 'Visit Greece – Greek National Tourism Organization', url: 'https://www.visitgreece.gr' },
      { title: 'Hellenic Ministry of Culture and Sports', url: 'https://www.culture.gov.gr' },
      { title: 'UNESCO World Heritage Centre – Greece', url: 'https://whc.unesco.org' }
    ]
  }
];
