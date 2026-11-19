import { Country } from '../../types/country';

export const northAmericaCountries: Country[] = [
  {
    id: 'united-states',
    slug: 'united-states',
    name: 'United States',
    officialName: 'United States of America',
    flagEmoji: '🇺🇸',
    capital: 'Washington, D.C.',
    continent: 'North America',
    heroImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'A continent-spanning tapestry of dramatic landscapes, multicultural innovation, cinematic storytelling, and iconic national parks.',
    taraGreeting: 'Hello there! Welcome to the USA! From the neon skyscrapers of New York City and the blues clubs of the Mississippi Delta to the red stone canyon rims of the Grand Canyon, there’s an adventure waiting in every state!',
    taraFacts: [
      'Yellowstone, established in 1872, was the very first National Park in the entire world, protecting over 10,000 geothermal features including Old Faithful!',
      'The United States has no official federal language at the national level, though English is the predominant national language.',
      'The Grand Canyon in Arizona is 446 kilometers (277 miles) long, up to 29 kilometers wide, and over a mile deep, exposing two billion years of Earth’s geological history.'
    ],
    population: '335.8 Million',
    currency: 'US Dollar ($, USD)',
    languagesSummary: 'English (predominant), Spanish (over 42 million speakers), Chinese, Tagalog, Indigenous Native American languages',
    coordinates: { lat: 37.0902, lng: -95.7129 },
    featured: true,

    history: {
      timeline: [
        { period: 'Pre-1492 CE', title: 'Indigenous Nations & Cultures', description: 'Hundreds of sovereign Native American nations including the Haudenosaunee (Iroquois Confederacy), ancestral Puebloans, Lakota, and Cherokee.' },
        { period: '1776 CE', title: 'Declaration of Independence', description: 'Thirteen colonies declared independence from the British Crown on July 4, 1776, articulating the ideals of liberty and equality.' },
        { period: '1787 CE', title: 'United States Constitution', description: 'Drafted in Philadelphia, establishing a federal constitutional republic with three co-equal branches of government and the Bill of Rights.' },
        { period: '1861–1865 CE', title: 'Civil War & Abolition of Slavery', description: 'President Abraham Lincoln led the Union to preserve the nation and issued the Emancipation Proclamation, leading to the 13th Amendment.' },
        { period: '1960s', title: 'Civil Rights Movement & Space Age', description: 'Dr. Martin Luther King Jr. led nonviolent marches for racial equality; Apollo 11 astronauts landed on the Moon in July 1969.' }
      ],
      majorCivilizations: ['Indigenous Native Nations', 'Colonial Foundations', 'Transatlantic Immigrant Waves', 'Modern Democratic Superpower'],
      importantEventsSummary: 'A history shaped by democratic experimentation, pioneer frontier spirit, systemic civil rights struggles, and groundbreaking scientific and cinematic innovations.',
      culturalHeritage: '25 UNESCO World Heritage Sites including the Statue of Liberty, Grand Canyon, Yellowstone, and Independence Hall.'
    },

    languages: {
      official: ['None at federal level (English de facto)'],
      widelySpoken: ['English', 'Spanish'],
      regional: ['Chinese (Mandarin & Cantonese)', 'Tagalog', 'Vietnamese', 'French / Cajun Creole', 'Navajo (Diné Bizaad)', 'Cherokee', 'Hawaiian (ʻŌlelo Hawaiʻi)'],
      linguisticDiversityNotes: 'Nearly 22% of US households speak a language other than English at home, creating rich bilingual communities across cities.',
      commonPhrases: [
        { phrase: 'How are you doing?', meaning: 'Friendly conversational greeting', pronunciation: 'how ar yoo DOO-ing' },
        { phrase: 'You’re welcome', meaning: 'Polite response to thank you', pronunciation: 'yoor WEL-kuhm' },
        { phrase: 'Have a great day!', meaning: 'Warm parting wish', pronunciation: 'hav ah grayt day' },
        { phrase: 'Road trip!', meaning: 'Excited journey across highways', pronunciation: 'rohd trip' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Slow-Smoked Barbecue (BBQ)', localName: 'American BBQ', description: 'Pork ribs or beef brisket smoked for up to 16 hours over hickory or mesquite wood with sweet-tangy sauce and cornbread.', tag: 'Regional Art' },
        { name: 'Classic Cheeseburger', localName: 'Cheeseburger', description: 'Seared beef patty topped with melted cheddar, crisp lettuce, ripe tomato, pickles, and special sauce on a toasted brioche bun.', tag: 'All-American Icon' },
        { name: 'Louisiana Gumbo & Jambalaya', localName: 'Creole Gumbo', description: 'Rich, dark roux stew packed with okra, andouille sausage, shrimp, and chicken seasoned with Creole holy trinity (onions, celery, bell peppers).', tag: 'Creole/Cajun Heritage' },
        { name: 'Apple Pie', localName: 'Traditional Apple Pie', description: 'Flaky butter pastry filled with spiced sliced cinnamon apples, baked golden and served warm with a scoop of vanilla ice cream ("à la mode").', tag: 'Comfort Dessert' }
      ],
      popularIngredients: ['Sweet corn', 'Cranberries', 'Maple syrup', 'Peanut butter', 'Cheddar cheese', 'Bourbon', 'Pecans', 'Tomatoes'],
      foodCustoms: 'Tipping 18–20% for table service is customary. Portions are generous, with diners frequently taking home leftovers in "to-go" boxes.',
      regionalSpecialties: 'New England clam chowder and Maine lobster rolls; Texas smoked brisket; Chicago deep-dish pizza; New Orleans beignets; Pacific Northwest wild salmon.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Blue Denim Jeans', description: 'Riveted indigo denim trousers invented by Levi Strauss and Jacob Davis in 1873 during the California Gold Rush.', significance: 'The single most universally worn garment in modern global history.' },
        { name: 'Cowboy Boots & Stetson Hat', description: 'Wide-brimmed felt hat and stitched leather riding boots developed for working ranch cattle hands in the American West.', significance: 'Iconic symbol of the American frontier.' }
      ],
      culturalSignificance: 'Native American ribbon shirts, Navajo woven blankets, and beaded moccasins embody sacred ancestral traditions that continue at annual inter-tribal powwows.',
      regionalVariations: 'Hawaiian Aloha shirts featuring tropical floral prints, Pacific Northwest flannel shirts, and New England preppy styles.',
      occasionsWorn: 'Independence Day parades (July 4th), inter-tribal powwows, rodeos, Thanksgiving, and sporting events.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Independence Day (4th of July)', seasonOrDate: 'July 4', description: 'Nationwide celebration of American independence with backyard barbecues, neighborhood parades, and spectacular municipal fireworks displays.', tradition: 'Barbecues, picnics, and evening fireworks.' },
        { name: 'Thanksgiving', seasonOrDate: 'Fourth Thursday of November', description: 'Families travel across the country to reunite, give thanks, watch the Macy’s parade, and feast on roast turkey, stuffing, cranberry sauce, and pumpkin pie.', tradition: 'Sharing what you are thankful for around a turkey feast.' },
        { name: 'Mardi Gras (New Orleans)', seasonOrDate: 'February/March (Fat Tuesday)', description: 'Exuberant festival of marching jazz brass bands, colorful floats, and throwing purple, green, and gold beads along St. Charles Avenue.', tradition: 'Catching beads and eating sweet King Cake.' }
      ],
      seasonalCelebrations: 'Halloween on October 31 with costumed trick-or-treating; Super Bowl Sunday in February; National Powwows.',
      culturalContext: 'Centers on democratic civic pride, family homecomings, freedom of self-expression, and sports enthusiasm.',
      howPeopleCelebrate: 'Tailgating outside football stadiums with portable grills, watching community parades, and going on cross-country road trips.'
    },

    arts: {
      traditionalMusic: 'Native American flute and drumming, Blues, Jazz, Country, Bluegrass, Rock and Roll, and Hip-Hop (born in the Bronx in 1973).',
      danceForms: ['Square Dancing (official folk dance of many states)', 'Tap dance', 'Lindy Hop & Swing', 'Breakdancing (Breaking)'],
      artFormsAndCrafts: ['Hollywood cinema and animation', 'Native American silver and turquoise jewelry', 'Appalachian quilt making', 'Abstract Expressionism (Jackson Pollock)'],
      livingPractices: 'The American road trip along historic Route 66, community sports leagues, volunteer charity work, and public library culture.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Statue of Liberty', location: 'New York Harbor', description: 'Colossal neoclassical copper sculpture gifted by France in 1886, welcoming millions of immigrants with the torch of freedom.', isUnesco: true },
        { name: 'Grand Canyon National Park', location: 'Arizona', description: 'Mile-deep geological chasm carved by the Colorado River displaying layered bands of red rock spanning millions of years.', isUnesco: true },
        { name: 'Yellowstone National Park', location: 'Wyoming / Montana / Idaho', description: 'Volcanic wonderland of geysers, hot springs (Grand Prismatic Spring), bison herds, and grizzly bears.', isUnesco: true },
        { name: 'Golden Gate Bridge', location: 'San Francisco, California', description: 'Majestic suspension bridge painted in International Orange spanning the 1.6-kilometer strait between the Pacific Ocean and San Francisco Bay.', isUnesco: false }
      ],
      unescoSitesCount: 25,
      naturalAttractions: ['Yosemite Valley granite monoliths (El Capitan)', 'Everglades National Park subtropical sawgrass wetlands', 'Monument Valley sandstone buttes', 'Hawaii Volcanoes National Park']
    },

    interestingFacts: [
      'The United States contains 63 designated National Parks covering over 85 million acres of preserved wilderness and ecosystems.',
      'The Smithsonian Institution in Washington, D.C., is the world’s largest museum and research complex, comprising 21 museums with completely free admission.',
      'The state of Alaska is larger than Texas, California, and Montana combined, with a coastline longer than all other 49 states together!',
      'The Apollo 11 computer that navigated Neil Armstrong and Buzz Aldrin to the Moon had less computing power than a modern basic pocket watch.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A warm, confident handshake with a smile and direct eye contact, or a friendly wave: "Hey, how are you doing?".',
        'Respecting personal physical space and tipping hospitality workers (servers, bartenders, cab drivers).',
        'Holding open doors for the person walking behind you.'
      ],
      familyTraditions: 'Traveling home for Thanksgiving dinner, decorating front porches with carved pumpkins for Halloween and fairy lights for winter holidays.',
      everydayCustoms: 'Grabbing a large coffee to go on the morning commute, weekend youth soccer or baseball games, browsing farmers markets.',
      modernLifestyle: 'Fast-paced technological hubs in Silicon Valley and Seattle, vibrant independent coffee shops, streaming entertainment, and active fitness culture.'
    },

    geography: {
      locationDescription: 'Spans the North American continent between Canada and Mexico, plus the non-contiguous state of Alaska and the Pacific archipelago of Hawaii.',
      climate: 'Nearly every climate type on Earth: subarctic in Alaska, tropical in Florida and Hawaii, arid desert in the Southwest, and temperate in the Midwest.',
      majorFeatures: ['Rocky Mountains', 'Appalachian Mountains', 'Mississippi-Missouri River system (4th longest in the world)', 'Great Lakes (largest freshwater system on Earth)'],
      wildlife: ['American Bison (National Mammal)', 'Bald Eagle (National Emblem)', 'Grizzly Bear', 'Alligator', 'Moose'],
      naturalAttractionsSummary: 'Unrivaled ecological diversity from desert badlands and ancient redwood forests to subtropical swamps and Arctic tundra.'
    },

    sources: [
      { title: 'National Park Service (NPS)', url: 'https://www.nps.gov' },
      { title: 'Smithsonian Institution', url: 'https://www.si.edu' },
      { title: 'UNESCO World Heritage Centre – United States', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'canada',
    slug: 'canada',
    name: 'Canada',
    officialName: 'Canada',
    flagEmoji: '🇨🇦',
    capital: 'Ottawa',
    continent: 'North America',
    heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1517935703635-27c94660abde?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The Great White North, boasting turquoise glacial lakes, bilingual warmth, vast boreal wilderness, and the radiant Northern Lights.',
    taraGreeting: 'Bonjour-Hi! Welcome to Canada! Picture turquoise glacial waters of Lake Louise mirroring snow-capped Rocky Mountains, and sweet maple syrup poured over hot pancakes! Let’s explore Canada’s warm, polite, and adventurous heart!',
    taraFacts: [
      'Canada has the longest national coastline of any country in the world, stretching over 202,080 kilometers (125,567 miles) along three oceans!',
      'Canada produces more than 75% of the world’s pure maple syrup, primarily tapped from sugar maple trees in Quebec each spring.',
      'Canada contains more than half of all natural lakes on planet Earth—over 2 million lakes in total!'
    ],
    population: '40.5 Million',
    currency: 'Canadian Dollar ($, CAD)',
    languagesSummary: 'English & French (Official bilingualism), Indigenous Inuktitut, Cree, Ojibwe',
    coordinates: { lat: 56.1304, lng: -106.3468 },

    history: {
      timeline: [
        { period: 'Time Immemorial', title: 'First Nations, Inuit & Métis', description: 'Diverse Indigenous nations inhabiting distinct ecological regions from West Coast totem carvers to Arctic sea hunters and Plains bison hunters.' },
        { period: 'c. 1000 CE', title: 'Norse Settlement at L’Anse aux Meadows', description: 'Viking explorers led by Leif Erikson established the first known European settlement in the Americas at Newfoundland.' },
        { period: '1608 CE', title: 'Samuel de Champlain & New France', description: 'Founded Quebec City on the Saint Lawrence River, establishing the fur trading empire of New France.' },
        { period: '1867 CE', title: 'Confederation & British North America Act', description: 'Unification of Ontario, Quebec, Nova Scotia, and New Brunswick into the Dominion of Canada on July 1, 1867.' },
        { period: '1982 CE', title: 'Patriation of the Constitution & Charter', description: 'Adoption of the Canadian Charter of Rights and Freedoms, establishing full constitutional independence.' }
      ],
      majorCivilizations: ['First Nations (Anishinaabe, Haudenosaunee, Cree, Blackfoot)', 'Inuit', 'Métis Nation', 'New France', 'Modern Confederation'],
      importantEventsSummary: 'A history defined by vast northern geography, Indigenous partnerships and reconciliation, bilingual coexistence, and peacekeeping.',
      culturalHeritage: '22 UNESCO World Heritage Sites including Banff and Jasper National Parks, Historic District of Old Québec, and L’Anse aux Meadows.'
    },

    languages: {
      official: ['English', 'French (Officially bilingual)'],
      widelySpoken: ['English', 'French (dominant in Quebec and parts of New Brunswick and Ontario)'],
      regional: ['Inuktitut & Inuinnaqtun (Nunavut)', 'Cree', 'Ojibwe', 'Dene', 'Mi’kmaq'],
      linguisticDiversityNotes: 'Federal government services, packaging labels, and currency are legally required to be presented in both English and French.',
      commonPhrases: [
        { phrase: 'Bonjour-Hi!', meaning: 'Bilingual Canadian urban greeting', pronunciation: 'bohn-zhoor HY' },
        { phrase: 'Thank you so much, eh?', meaning: 'Polite expression with iconic Canadian tag', pronunciation: 'thank yoo soh much AY' },
        { phrase: 'S’il vous plaît', meaning: 'Please (French)', pronunciation: 'seel voo pleh' },
        { phrase: 'Sorry!', meaning: 'Polite everyday reflexive apology', pronunciation: 'SORE-ee' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Poutine', localName: 'Poutine Québécoise', description: 'Crisp golden french fries topped with fresh squeaky white cheddar cheese curds and smothered in piping-hot rich brown gravy.', tag: 'Quebec Masterpiece' },
        { name: 'Tourtière', localName: 'Tourtière', description: 'Traditional French-Canadian spiced meat pie made with minced pork, beef, and potatoes seasoned with cloves, cinnamon, and allspice.', tag: 'Holiday Classic' },
        { name: 'Nanaimo Bars', localName: 'Nanaimo Bar', description: 'No-bake dessert bar featuring a coconut-graham crust, a middle layer of yellow custard icing, topped with melted chocolate ganache.', tag: 'Sweet Icon' },
        { name: 'Maple Taffy on Snow (Tire d’érable)', localName: 'Tire d’érable', description: 'Boiling pure maple syrup poured onto clean fresh snow and rolled up around a wooden popsicle stick into a warm, chewy candy.', tag: 'Sugar Shack Magic' }
      ],
      popularIngredients: ['Pure maple syrup', 'Cheese curds', 'Wild blueberries (Lac Saint-Jean)', 'Atlantic salmon', 'Bison meat', 'Saskatoon berries', 'Oats'],
      foodCustoms: 'Visiting a "Cabane à Sucre" (Sugar Shack) in early spring to enjoy hearty traditional meals accompanied by traditional fiddle music and fresh maple taffy.',
      regionalSpecialties: 'Atlantic provinces love Maritime lobster rolls and seafood chowder; the Prairies love Saskatoon berry pie and bison steaks; Montreal is famous for smoked meat sandwiches and wood-fired bagels.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Cowichan Sweater', description: 'Heavy, hand-knit raw sheep’s wool sweaters with geometric wildlife motifs (orcas, eagles) hand-knit by Coast Salish artisans of Vancouver Island.', significance: 'Water-resistant, warm indigenous artisanal heritage.' },
        { name: 'Tuque & Flannel Mackinaw', description: 'Knitted winter beanie (tuque) and heavy plaid wool coat designed to protect against sub-zero northern blizzards.', significance: 'Everyday winter outdoor clothing worn with warmth.' },
        { name: 'Inuit Anorak (Parka)', description: 'Traditional windproof winter coat crafted from caribou or seal hide with a fur-trimmed hood, the historical inspiration for modern winter parkas.', significance: 'Indigenous Arctic survival innovation.' }
      ],
      culturalSignificance: 'The Hudson’s Bay Point Blanket with green, red, yellow, and blue stripes remains a historical icon of 18th-century fur trade history.',
      regionalVariations: 'Métis vibrant finger-woven arrow sashes (ceinture fléchée) worn around the waist; Pacific Coast cedar-bark woven hats.',
      occasionsWorn: 'Canada Day, winter carnivals like Quebec’s Carnaval, powwows, and outdoor ice hockey rinks.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Canada Day', seasonOrDate: 'July 1', description: 'National birthday celebration featuring concerts on Parliament Hill in Ottawa, red-and-white face paint, outdoor barbecues, and fireworks.', tradition: 'Wearing red and white and singing "O Canada".' },
        { name: 'Calgary Stampede', seasonOrDate: 'July (10 days in Alberta)', description: 'The "Greatest Outdoor Show on Earth", celebrating Western cowboy heritage with rodeos, chuckwagon races, pancake breakfasts, and country music.', tradition: 'Free community pancake breakfasts and donning cowboy hats.' },
        { name: 'Carnaval de Québec', seasonOrDate: 'February (Quebec City)', description: 'The world’s largest winter carnival led by mascot Bonhomme Carnaval, featuring an ice palace, night parades, and ice canoe races across the icy St. Lawrence River.', tradition: 'Drinking Caribou warm spiced wine and dancing in the snow.' },
        { name: 'Montreal International Jazz Festival', seasonOrDate: 'June–July', description: 'The world’s largest jazz festival according to Guinness, filling downtown Montreal with hundreds of free open-air concerts.', tradition: 'Listening to open-air jazz concerts along Saint Catherine Street.' }
      ],
      seasonalCelebrations: 'Autumn foliage drives across Algonquin and Mont-Tremblant; viewing the Aurora Borealis (Northern Lights) in Yellowknife and Whitehorse in winter.',
      culturalContext: 'Guided by the cultural mosaic concept (preserving distinct cultural identities within a unified society) and deep respect for the great outdoors.',
      howPeopleCelebrate: 'Playing pond hockey on frozen neighborhood lakes, camping in national parks, and saying "Sorry" with polite good humor.'
    },

    arts: {
      traditionalMusic: 'Indigenous throat singing (Katajjaq), French-Canadian foot-tapping fiddle music (La Bolduc), and iconic singer-songwriters (Joni Mitchell, Leonard Cohen, Neil Young).',
      danceForms: ['First Nations Fancy Dance and Jingle Dress Dance', 'Métis Red River Jig', 'French-Canadian step dancing'],
      artFormsAndCrafts: ['Inuit soapstone carving', 'Group of Seven landscape paintings', 'West Coast Indigenous totem pole carving', 'Birchbark canoes'],
      livingPractices: 'Canoeing across tranquil wilderness lakes, ice fishing, winter snowshoeing, and gathering at the local Tim Hortons for coffee.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Banff & Jasper National Parks', location: 'Alberta (Canadian Rockies)', description: 'Majestic turquoise glacial waters of Lake Louise and Moraine Lake surrounded by towering alpine peaks, glaciers, and wildlife.', isUnesco: true },
        { name: 'Niagara Falls', location: 'Ontario (Border with USA)', description: 'Massive, thundering Horseshoe Falls dropping millions of gallons of water over a 50-meter crest into swirling emerald pools.', isUnesco: false },
        { name: 'Historic District of Old Québec', location: 'Quebec City', description: 'The only fortified city in North America north of Mexico, with 17th-century ramparts, cobblestone alleys, and the fairy-tale Château Frontenac.', isUnesco: true },
        { name: 'CN Tower', location: 'Toronto, Ontario', description: 'Iconic 553-meter communications and observation tower dominating Toronto’s skyline, featuring a glass floor and high EdgeWalk.', isUnesco: false }
      ],
      unescoSitesCount: 22,
      naturalAttractions: ['Gros Morne National Park (exposed Earth’s mantle in Newfoundland)', 'Bay of Fundy (highest tides in the world at 16 meters)', 'Churchill, Manitoba ("Polar Bear Capital of the World")', 'Nahanni National Park wild river canyons']
    },

    interestingFacts: [
      'The small town of Churchill in northern Manitoba is known as the "Polar Bear Capital of the World", where residents leave their car doors unlocked so pedestrians can take refuge if a polar bear wanders into town!',
      'Canada’s national animals are the industrious North American Beaver (symbol of perseverance) and the Canadian Horse.',
      'Yonge Street in Ontario was once listed by Guinness as the longest street in the world, running 1,896 kilometers (1,178 miles).',
      'The letters "H0H 0H0" represent the official postal code assigned by Canada Post to Santa Claus at the North Pole, answering millions of children’s letters annually in over 30 languages!'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A warm, polite handshake and friendly smile: "Hello, how are you today?".',
        'Canadians are internationally celebrated for their politeness, frequently saying "Sorry" even when someone else bumps into them.',
        'Taking off outdoor winter boots immediately at the entryway (mudroom) of any home.'
      ],
      familyTraditions: 'Spending summer weekends at the lakeside "Cottage" or "Cabin", paddling canoes, jumping off docks, and roasting marshmallows over campfires.',
      everydayCustoms: 'Checking the windchill and temperature forecast before leaving the house, drinking double-double coffees, cheering on hockey matches.',
      modernLifestyle: 'Clean, safe, highly multicultural cities (Toronto and Vancouver have over 50% foreign-born populations living in harmony), universal public healthcare, and nature-centric lifestyles.'
    },

    geography: {
      locationDescription: 'Occupies the northern half of North America, extending from the Atlantic Ocean in the east to the Pacific in the west and northward to the Arctic Ocean.',
      climate: 'Varies from mild maritime in coastal British Columbia to continental with hot summers and cold snowy winters, and extreme subarctic and polar tundra in the north.',
      majorFeatures: ['Canadian Rockies', 'Canadian Shield (ancient precambrian granite bedrock)', 'Saint Lawrence River', 'Mackenzie River (longest river system in Canada)'],
      wildlife: ['Polar Bear', 'Moose', 'Beaver', 'Grizzly Bear', 'Beluga Whale', 'Canada Goose'],
      naturalAttractionsSummary: 'Pristine endless boreal forests, majestic glaciers, massive freshwater lakes, and Arctic tundra.'
    },

    sources: [
      { title: 'Destination Canada', url: 'https://www.destinationcanada.com' },
      { title: 'Parks Canada', url: 'https://parks.canada.ca' },
      { title: 'UNESCO World Heritage Centre – Canada', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'mexico',
    slug: 'mexico',
    name: 'Mexico',
    officialName: 'United Mexican States (Estados Unidos Mexicanos)',
    flagEmoji: '🇲🇽',
    capital: 'Mexico City (CDMX)',
    continent: 'North America',
    heroImage: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'A magical land of ancient Maya pyramids, vibrant mariachi brass, sacred Day of the Dead marigolds, and world-renowned UNESCO gastronomic art.',
    taraGreeting: '¡Bienvenidos a México! Welcome to Mexico! Can you hear the joyful trumpets of the mariachi band? Let’s climb the stone steps of Chichén Itzá, admire Frida Kahlo’s cobalt Blue House, and taste fresh tacos topped with vibrant salsa!',
    taraFacts: [
      'Mexico City is built directly upon the sunken ruins of Tenochtitlan, the ancient Aztec island capital founded on Lake Texcoco in 1325!',
      'Traditional Mexican cuisine was the very first national cuisine in the world to be awarded UNESCO Intangible Cultural Heritage status in 2010.',
      'The Great Pyramid of Cholula in Puebla, Mexico, is the largest pyramid monument by volume ever constructed on planet Earth, larger even than the Great Pyramid of Giza!'
    ],
    population: '129.4 Million',
    currency: 'Mexican Peso ($, MXN)',
    languagesSummary: 'Spanish & 68 recognized Indigenous National Languages (Nahuatl, Maya, Mixtec, Zapotec)',
    coordinates: { lat: 23.6345, lng: -102.5528 },
    featured: true,

    history: {
      timeline: [
        { period: 'c. 1200–400 BCE', title: 'Olmec Civilization (Mother Culture)', description: 'Carved colossal basalt stone heads, invented early Mesoamerican ballgame courts, and developed early calendar glyphs.' },
        { period: 'c. 250–900 CE', title: 'Classic Maya Golden Age', description: 'Mastered mathematical astronomy, invented the mathematical zero, and built monumental limestone pyramids at Palenque, Calakmul, and Tikal.' },
        { period: '1325–1521 CE', title: 'Aztec (Mexica) Empire', description: 'Built the island capital of Tenochtitlan with canal networks, causeways, and the monumental Templo Mayor.' },
        { period: '1521–1821 CE', title: 'Viceroyalty of New Spain', description: 'Three centuries of Spanish rule creating Baroque silver mining towns like Guanajuato and culinary fusion.' },
        { period: '1810 CE', title: 'Grito de Dolores & Independence', description: 'Father Miguel Hidalgo launched the independence rebellion on September 16, 1810, celebrated today as Mexican Independence Day.' }
      ],
      majorCivilizations: ['Olmecs', 'Maya', 'Zapotecs', 'Teotihuacanos', 'Toltecs', 'Aztecs (Mexica)'],
      importantEventsSummary: 'A glorious cultural tapestry uniting profound Mesoamerican spiritual cosmologies, Spanish colonial architecture, and passionate modern muralist art (Diego Rivera, David Alfaro Siqueiros).',
      culturalHeritage: '35 UNESCO World Heritage Sites including Chichén Itzá, Teotihuacan, and the Historic Centre of Mexico City.'
    },

    languages: {
      official: ['Spanish', '68 Indigenous National Languages (officially co-equal)'],
      widelySpoken: ['Mexican Spanish', 'Nahuatl (over 1.5 million speakers)', 'Yucatec Maya (over 800,000 speakers)'],
      regional: ['Mixtec', 'Zapotec', 'Tzeltal', 'Tzotzil', 'Otomi', 'Totonac', 'Tarascan (Purépecha)'],
      linguisticDiversityNotes: 'English words like chocolate, tomato, avocado, coyote, and chili all derive directly from the indigenous Aztec Nahuatl language.',
      commonPhrases: [
        { phrase: '¡Hola! ¿Cómo estás?', meaning: 'Hello! How are you?', pronunciation: 'OH-lah KOH-moh ess-TAHS' },
        { phrase: 'Muchas gracias', meaning: 'Thank you very much', pronunciation: 'MOO-chahs GRAH-syahs' },
        { phrase: '¡Buen provecho!', meaning: 'Enjoy your meal!', pronunciation: 'bwen proh-VEH-choh' },
        { phrase: '¡Viva México!', meaning: 'Long live Mexico!', pronunciation: 'VEE-vah MEH-hee-koh' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Tacos al Pastor', localName: 'Tacos al Pastor', description: 'Thinly sliced pork marinated in achiote, dried chilies, and citrus, slow-roasted on a vertical spit (trompo) and sliced into warm corn tortillas with pineapple, cilantro, and onions.', tag: 'Street Food King' },
        { name: 'Mole Poblano', localName: 'Mole Poblano', description: 'Rich, complex dark sauce simmered from over 30 ingredients including dried chilies (ancho, pasilla), Mexican dark chocolate, sesame seeds, nuts, and spices over poultry.', tag: 'Culinary Masterpiece' },
        { name: 'Guacamole & Fresh Tortillas', localName: 'Guacamole con Totopos', description: 'Ripe Hass avocados mashed in a stone molcajete mortar with fresh lime juice, diced white onions, serrano chilies, and cilantro.', tag: 'Ancient Freshness' },
        { name: 'Chiles en Nogada', localName: 'Chiles en Nogada', description: 'Poblano peppers stuffed with spiced shredded meat and fruit (picadillo), blanketed in a velvety walnut cream sauce and studded with ruby pomegranate seeds.', tag: 'Patriotic Feast' }
      ],
      popularIngredients: ['Corn (Maíz)', 'Avocado', 'Chili peppers (Jalapeño, Serrano, Habanero, Ancho)', 'Cacao / Chocolate', 'Epazote', 'Cilantro', 'Tomatillos', 'Limes'],
      foodCustoms: 'Nixtamalization: the ancient Mesoamerican alkaline steeping process that unlocks essential nutrients in corn and creates authentic pliable masa for tortillas.',
      regionalSpecialties: 'Oaxaca is the "Land of the Seven Moles" and artisanal mezcal; Yucatán for Cochinita Pibil slow-roasted in banana leaves underground; Jalisco for Birria stew.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Huipil', description: 'Loose, sleeveless woven tunic embroidered with sacred geometric symbols, sacred flowers, and animal spirits by indigenous women.', significance: 'Worn since pre-Columbian times; the designs convey the weaver’s community, lineage, and marital status.' },
        { name: 'Traje de Charro & Sombrero', description: 'Fitted jacket and trousers adorned with elaborate silver buttons (botonaduras), worn with an embroidered silk bowtie and wide-brimmed felt sombrero.', significance: 'Traditional ceremonial dress of Mexican horsemen and Mariachi musicians.' },
        { name: 'Rebozo', description: 'Long handwoven fringed shawl crafted from cotton or silk using the intricate ikat dyeing technique.', significance: 'Worn as a warm wrap, baby sling, and emblem of female empowerment (Soldaderas).' }
      ],
      culturalSignificance: 'Artisanal embroidery in Chiapas and Oaxaca takes months of backstrap loom weaving, preserving ancient cosmological glyphs.',
      regionalVariations: 'Tehuana dresses of Oaxaca (made famous worldwide by artist Frida Kahlo); colorful embroidered floral dresses of Puebla; Veracruz all-white lace jarocho attire.',
      occasionsWorn: 'Día de los Muertos, Mexican Independence Day, Guelaguetza cultural festival, and family quinceañeras.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Día de los Muertos (Day of the Dead)', seasonOrDate: 'November 1–2', description: 'Joyful UNESCO-recognized holiday welcoming the spirits of deceased loved ones back home with ornate family altars (ofrendas), bright orange marigolds (cempasúchil), sugar skulls, and pan de muerto.', tradition: 'Decorating graves with candles, marigolds, and favorite foods.' },
        { name: 'Guelaguetza Festival (Oaxaca)', seasonOrDate: 'July (Two Mondays)', description: 'Spectacular indigenous celebration bringing together sixteen diverse ethnic communities from across Oaxaca with folk dances, music, and sharing agricultural gifts.', tradition: 'Traditional indigenous costume dances and throwing fruits to crowds.' },
        { name: 'Las Posadas & Christmas Piñatas', seasonOrDate: 'December 16–24', description: 'Nightly candlelit processions reenacting Mary and Joseph’s search for lodging, ending with children singing and breaking seven-pointed star clay piñatas filled with candy.', tradition: 'Breaking traditional seven-pointed star piñatas.' }
      ],
      seasonalCelebrations: 'Grito de Dolores on the evening of September 15, reenacted from the balcony of the National Palace in Mexico City amidst cheering crowds.',
      culturalContext: 'Death is embraced not with sorrow, but with humor, colorful celebration, and eternal familial love through memory.',
      howPeopleCelebrate: 'Singing with Mariachi bands, painting faces as elegant Catrinas, sharing hot spiced chocolate with pan de muerto, and dancing in town plazas.'
    },

    arts: {
      traditionalMusic: 'Mariachi brass and violins, Son Jarocho with harp and jarana (e.g., La Bamba), Ranchera ballads, and Marimba music of the south.',
      danceForms: ['Jarabe Tapatío (Mexican Hat Dance)', 'Danza de los Voladores (Totonic flyers swinging from a 30m pole, UNESCO heritage)', 'Danza de los Viejitos (Dance of the Old Men)'],
      artFormsAndCrafts: ['Alebrijes (whimsical carved and painted copal wood fantasy creatures)', 'Talavera glazed pottery of Puebla', 'Huichol bead yarn paintings', 'Papel picado cut paper flags'],
      livingPractices: 'Lucha Libre masked wrestling matches, Sunday family strolls along Paseo de la Reforma, and gathering in lively cantinas.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Chichén Itzá & El Castillo', location: 'Yucatán Peninsula', description: 'Monumental ancient Maya step-pyramid engineered with astronomical precision: on the equinoxes, sunlight casts a shadow of a descending feathered serpent (Kukulkan).', isUnesco: true },
        { name: 'Teotihuacan Pyramids', location: 'State of Mexico', description: 'Ancient holy city known as the "Place Where Gods Were Born", featuring the colossal Pyramid of the Sun and Avenue of the Dead.', isUnesco: true },
        { name: 'Palenque Archaeological Park', location: 'Chiapas', description: 'Classic Maya ceremonial center set deep in emerald tropical jungle, famous for the Temple of the Inscriptions and the jade tomb of King Pakal.', isUnesco: true },
        { name: 'Historic Centre of Oaxaca & Monte Albán', location: 'Oaxaca', description: 'Zapotec mountaintop capital flattened 2,500 years ago overlooking valleys, paired with picturesque Spanish colonial courtyards below.', isUnesco: true }
      ],
      unescoSitesCount: 35,
      naturalAttractions: ['Cenotes of the Yucatán (sacred natural sinkholes with crystal-clear turquoise waters)', 'Monarch Butterfly Biosphere Reserve (millions of overwintering butterflies)', 'Copper Canyon (Barrancas del Cobre - larger and deeper than the Grand Canyon)', 'Baja California whale calving lagoons']
    },

    interestingFacts: [
      'The Mexican meteorite impact at Chicxulub on the Yucatán peninsula 66 million years ago is the event that led to the extinction of the dinosaurs.',
      'Mexico City is slowly sinking at a rate of up to 10 to 50 centimeters per year because it was constructed directly over the soft clay bed of historic Lake Texcoco.',
      'Chocolate was revered as sacred money and divine medicine by the Aztecs and Maya, who drank it frothy, bitter, and spiced with chilies.',
      'The Mexican Axolotl is a legendary, critically endangered salamander that retains its aquatic juvenile gills throughout its entire life and can regrow severed limbs and organs!'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A warm embrace and a kiss on the right cheek for women; a handshake and back-pat (abrazo) for men.',
        'Always wishing diners "¡Buen provecho!" (enjoy your meal) when walking past their table, even to total strangers.',
        'Respecting and addressing elders with the formal title "Don" or "Doña".'
      ],
      familyTraditions: 'The Quinceañera: a grand coming-of-age celebration for young women turning 15, complete with waltzes, court of honor, and religious blessing.',
      everydayCustoms: 'Stopping at street corner taco stalls (taquerías) for late-night tacos, drinking fresh aguas frescas (hibiscus Jamaica or horchata), Sunday family park picnics.',
      modernLifestyle: 'A thriving artistic capital filled with world-class museums, cutting-edge gastronomy, vibrant tech incubators, and warm street hospitality.'
    },

    geography: {
      locationDescription: 'Occupies the southern portion of North America, bordered by the United States to the north, the Pacific Ocean to the west, and the Gulf of Mexico and Caribbean Sea to the east.',
      climate: 'Extraordinary climate variety from arid northern cactus deserts to lush central temperate volcanic highlands and southern tropical rainforests.',
      majorFeatures: ['Sierra Madre Occidental & Oriental mountain chains', 'Trans-Mexican Volcanic Belt (Popocatépetl and Iztaccíhuatl)', 'Yucatán Karst Peninsula', 'Rio Grande (Río Bravo)'],
      wildlife: ['Jaguar (sacred to ancient Maya)', 'Axolotl', 'Monarch Butterfly', 'Ocelot', 'Scarlet Macaw'],
      naturalAttractionsSummary: 'One of the world’s 17 "megadiverse" nations, containing 10–12% of the planet’s total biodiversity.'
    },

    sources: [
      { title: 'Secretaría de Turismo de México (SECTUR)', url: 'https://www.gob.mx/sectur' },
      { title: 'Instituto Nacional de Antropología e Historia (INAH)', url: 'https://www.inah.gob.mx' },
      { title: 'UNESCO World Heritage Centre – Mexico', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'cuba',
    slug: 'cuba',
    name: 'Cuba',
    officialName: 'Republic of Cuba (República de Cuba)',
    flagEmoji: '🇨🇺',
    capital: 'Havana (La Habana)',
    continent: 'North America',
    heroImage: 'https://images.unsplash.com/photo-1500759285222-a95626b934cb?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The vibrant pearl of the Caribbean, famed for vintage pastel American classic cars, soulful Buena Vista Social Club melodies, and warm colonial plazas.',
    taraGreeting: '¡Hola! Welcome to Cuba! Hear the rhythm of the conga drums echoing down the colorful colonial streets of Old Havana? Look at the vintage 1950s cars rolling along the Malecón seawall! Let’s ramble through Cuba’s musical heart!',
    taraFacts: [
      'Cuba is the largest island in the Caribbean, stretching over 1,250 kilometers from cape to cape!',
      'Due to historic import trade embargoes, thousands of vintage 1950s American cars (Chevrolets, Fords, Cadillacs) have been lovingly maintained and still drive the streets daily as "Almendrones"!',
      'Cuba has one of the highest literacy rates in the world at 99.8%, with free healthcare and education for all citizens.'
    ],
    population: '11.2 Million',
    currency: 'Cuban Peso (CUP)',
    languagesSummary: 'Spanish (Español Cubano)',
    coordinates: { lat: 21.5218, lng: -77.7812 },

    history: {
      timeline: [
        { period: 'Pre-1492 CE', title: 'Taíno & Guanahatabey Peoples', description: 'Indigenous agricultural and maritime communities skilled in pottery, tobacco cultivation, and wooden watercraft.' },
        { period: '1492 CE', title: 'Arrival of Columbus', description: 'Christopher Columbus landed on Cuba’s northeastern coast, famously declaring it "the most beautiful land human eyes have ever seen".' },
        { period: '1519 CE', title: 'Founding of Havana', description: 'San Cristóbal de La Habana established as the key assembly hub for the Spanish treasure fleets sailing back to Europe.' },
        { period: '1895–1898 CE', title: 'War of Independence & José Martí', description: 'National poet and philosopher José Martí led the struggle for liberation, culminating in the Spanish-American War.' },
        { period: '1959 CE', title: 'Cuban Revolution', description: 'Fidel Castro and Ernesto "Che" Guevara overthrew the Batista dictatorship, establishing a socialist state and nationalizing health and education.' }
      ],
      majorCivilizations: ['Taíno', 'Spanish Caribbean Empire', 'Afro-Cuban communities', 'Revolutionary Republic'],
      importantEventsSummary: 'A Caribbean crossroads where West African Yoruba spirituality and drumming merged with Spanish guitar and lyricism to create world-shaping musical and dance traditions.',
      culturalHeritage: '9 UNESCO World Heritage Sites including Old Havana and its Fortifications, Trinidad and the Valley of the Sugar Mills, and Viñales Valley.'
    },

    languages: {
      official: ['Spanish'],
      widelySpoken: ['Cuban Spanish (characterized by musical Caribbean rhythm, dropping final consonants, and warm diminutives)'],
      regional: ['Lucumí (liturgical language of Santería derived from West African Yoruba)', 'Haitian Creole'],
      linguisticDiversityNotes: 'Cuban Spanish is sprinkled with colorful local idioms like "Asere, ¿qué bolá?" (Hey friend, what’s up?).',
      commonPhrases: [
        { phrase: '¿Qué bolá?', meaning: 'What’s up? / How are you? (Iconic Cuban slang)', pronunciation: 'keh boh-LAH' },
        { phrase: 'Muchas gracias', meaning: 'Thank you very much', pronunciation: 'MOO-chahs GRAH-syahs' },
        { phrase: 'Asere', meaning: 'Friend / Buddy', pronunciation: 'ah-SEH-reh' },
        { phrase: '¡Hasta luego!', meaning: 'See you later!', pronunciation: 'AHS-tah LWEH-goh' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Ropa Vieja', localName: 'Ropa Vieja', description: 'Tender shredded flank steak slow-simmered in a rich sofrito sauce of sweet bell peppers, onions, tomatoes, and garlic, served with black beans and white rice.', tag: 'National Classic' },
        { name: 'Moros y Cristianos', localName: 'Arroz Congrí', description: 'Flavorful seasoned rice cooked together with tender black beans, garlic, bay leaves, cumin, oregano, and pork cracklings.', tag: 'Everyday Soul Food' },
        { name: 'Tostones & Yuca con Mojo', localName: 'Tostones', description: 'Twice-fried crisp savory green plantain rounds, served alongside boiled tender yuca root drenched in garlicky citrus mojo sauce.', tag: 'Crisp Comfort' },
        { name: 'Cuban Coffee (Cafecito)', localName: 'Café Cubano', description: 'Intense, velvety dark espresso whipped with raw demerara sugar to create a thick, caramel-like froth called espumita.', tag: 'Social Elixir' }
      ],
      popularIngredients: ['Black beans', 'White rice', 'Plantains (maduros and tostones)', 'Pork', 'Garlic', 'Citrus juice (Sour orange)', 'Cumin', 'Oregano'],
      foodCustoms: 'Paladares: intimate family-owned restaurants operated out of private colonial homes, serving authentic home-cooked Cuban recipes with personal hospitality.',
      regionalSpecialties: 'Santiago de Cuba in the east is famous for spicier Afro-Caribbean stews; Baracoa is famous for Cucurucho (sweet shredded coconut and guava honey wrapped in palm bark).'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Guayabera', description: 'Lightweight linen or cotton dress shirt with four front pockets, vertical pin-tucks (alforzas), and worn untucked over trousers.', significance: 'Recognized as the official diplomatic dress shirt of Cuba.' },
        { name: 'Bata Cubana (Rumbera Dress)', description: 'Flamboyant, form-fitting dress with voluminous ruffled flounces along the train and sleeves, worn by dancers of Afro-Cuban rumba.', significance: 'Celebrates the exuberant rhythmic energy of Afro-Cuban carnival traditions.' }
      ],
      culturalSignificance: 'The white attire worn by initiates (Iyawó) in the Afro-Cuban religion of Santería (Regla de Ocha) represents spiritual purity and new life for a full year.',
      regionalVariations: 'Straw woven hats (sombreros de yarey) worn by rural tobacco farmers (guajiros) in the Viñales Valley.',
      occasionsWorn: 'Havana Carnival, wedding galas, rumba street parties (peñas), and diplomatic gatherings.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Carnaval de Santiago de Cuba', seasonOrDate: 'July', description: 'The most vibrant carnival in the Caribbean, filled with thundering conga drum lines (comparsas), trumpet fanfares, and dancers flooding the streets.', tradition: 'Following the neighborhood conga line through the streets.' },
        { name: 'Havana Jazz Festival (Jazz Plaza)', seasonOrDate: 'January', description: 'World-renowned celebration of Afro-Cuban jazz bringing together international musical masters for jam sessions in theaters and open-air courtyards.', tradition: 'Late-night impromptu Latin jazz jam sessions.' },
        { name: 'Las Parrandas de Remedios', seasonOrDate: 'December 16–24', description: 'Centuries-old competition between two rival neighborhood wards in the colonial town of Remedios featuring dueling illuminated floats and massive firework battles.', tradition: 'Illuminated mechanical floats and deafening fireworks.' }
      ],
      seasonalCelebrations: 'International Ballet Festival of Havana; Festival del Habano celebrating world-famous tobacco agriculture in February.',
      culturalContext: 'A spirited synthesis of resilience, communal solidarity, musical pride, and spontaneous neighborhood joy.',
      howPeopleCelebrate: 'Singing, dancing salsa and son on the Malecón seawall, playing dominoes with neighbors on front porches, and sharing espresso.'
    },

    arts: {
      traditionalMusic: 'Son Cubano (foundation of salsa), Rumba, Danzón, Mambo, Cha-Cha-Chá, Bolero, and classical Afro-Cuban jazz.',
      danceForms: ['Salsa (Casino Cubano)', 'Rumba (Guaguancó, Yambú, Columbia)', 'Mambo', 'Ballet Nacional de Cuba (founded by Alicia Alonso)'],
      artFormsAndCrafts: ['Hand-rolled premium cigars (Habanos)', 'Vibrant street mural painting', 'Ceramics of Trinidad', 'Intricate wooden cigar humidor craftsmanship'],
      livingPractices: 'Playing competitive four-player dominoes on wooden tables on street sidewalks, gathering at the ocean Malecón at sunset.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Old Havana (Habana Vieja)', location: 'Havana', description: 'UNESCO World Heritage historic center featuring five colonial baroque plazas, pastel neoclassical balconies, and the Cathedral of Havana.', isUnesco: true },
        { name: 'Viñales Valley', location: 'Pinar del Río Province', description: 'Karst landscape of dramatic dome-like limestone hills (mogotes) rising above traditional ox-plowed red tobacco fields.', isUnesco: true },
        { name: 'Trinidad & Valley of the Sugar Mills', location: 'Sancti Spíritus Province', description: 'Pristine 16th-century Spanish colonial town with cobbled streets, pastel mansions with wooden grilles, and historic sugar estate towers.', isUnesco: true },
        { name: 'Morro Castle (Castillo del Morro)', location: 'Havana Harbor entrance', description: 'Formidable 16th-century stone fortress perched high on a rocky promontory guarding Havana harbor with ancient cannons.', isUnesco: true }
      ],
      unescoSitesCount: 9,
      naturalAttractions: ['Varadero white-sand beach (20 kilometers of uninterrupted turquoise waters)', 'Zapata Swamp (largest wetland in the Caribbean, home to the Cuban crocodile)', 'Topes de Collantes mountain waterfalls', 'Alejandro de Humboldt National Park (biodiversity sanctuary)']
    },

    interestingFacts: [
      'The Bee Hummingbird (Zunzuncito), native only to Cuba and the Isle of Youth, is the smallest bird in the world, measuring just 5 centimeters and weighing less than a dime!',
      'Cuba has zero venomous snakes or deadly spiders dangerous to humans anywhere on the island.',
      'Ernest Hemingway lived in Cuba for over 20 years at his estate Finca Vigía, where he wrote classics like "The Old Man and the Sea" and "For Whom the Bell Tolls".',
      'Cuba was one of the earliest countries in the world to implement public street rail trams and commercial television broadcasting.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A warm, enthusiastic greeting: a handshake and back-slap for men, a warm kiss on the right cheek for women.',
        'Conversations are lively, animated with expressive hand gestures and frequent bursts of laughter.',
        'Sharing is second nature: offering coffee, food, or assistance to neighbors is an unwritten community code.'
      ],
      familyTraditions: 'Extended families live in close proximity or within the same colonial home; birthdays and saint days are celebrated with community music and roast pork.',
      everydayCustoms: 'Sipping a quick cafecito on the sidewalk, sitting on rocking chairs on front porches watching the world go by, playing dominoes.',
      modernLifestyle: 'A creative, vibrant society where world-class art schools, classical ballet companies, indie music venues (Fábrica de Arte Cubano), and historic charm flourish.'
    },

    geography: {
      locationDescription: 'Long, narrow Caribbean archipelago situated where the Caribbean Sea, Gulf of Mexico, and Atlantic Ocean meet, south of Florida and the Bahamas.',
      climate: 'Tropical savanna climate moderated by trade winds with warm temperatures year-round; dry season (November–April) and wet season (May–October).',
      majorFeatures: ['Sierra Maestra mountain range', 'Viñales mogote hills', 'Cauto River (longest river in Cuba)', 'Zapata Peninsula wetlands'],
      wildlife: ['Cuban Crocodile', 'Bee Hummingbird (Zunzuncito)', 'Cuban Trogon / Tocororo (National Bird, feathers mirror the national flag)', 'Cuban Solenodon'],
      naturalAttractionsSummary: 'Over 4,000 cays and islets, pristine coral barrier reefs, underground limestone cavern rivers, and rolling green hills.'
    },

    sources: [
      { title: 'Ministry of Tourism of Cuba (Cuba Travel)', url: 'https://www.cubatravel.cu' },
      { title: 'Office of the Historian of the City of Havana', url: 'https://www.habanacultural.ohc.cu' },
      { title: 'UNESCO World Heritage Centre – Cuba', url: 'https://whc.unesco.org' }
    ]
  }
];
