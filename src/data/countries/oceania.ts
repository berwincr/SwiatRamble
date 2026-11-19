import { Country } from '../../types/country';

export const oceaniaCountries: Country[] = [
  {
    id: 'australia',
    slug: 'australia',
    name: 'Australia',
    officialName: 'Commonwealth of Australia',
    flagEmoji: '🇦🇺',
    capital: 'Canberra',
    continent: 'Oceania',
    heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The ancient island continent of sacred red sandstone monoliths, the Great Barrier Reef, hopping marsupials, and an easygoing outdoor beach lifestyle.',
    taraGreeting: 'G’day mate! Welcome to Australia! "No worries!" Picture the iconic sail-shaped shells of the Sydney Opera House gleaming in the sunlight, and the sacred red sands of Uluru glowing crimson at sunset! Let’s ramble Down Under together!',
    taraFacts: [
      'Aboriginal Australians represent the world’s oldest continuous living culture on Earth, with verified ancestral histories dating back over 65,000 years!',
      'The Great Barrier Reef is the largest living organism structure on Earth, stretching over 2,300 kilometers—so colossal that it can be seen from space!',
      'Australia is home to more than 140 species of unique marsupials (kangaroos, koalas, wombats, wallabies) and the world’s only egg-laying mammals (platypus and echidna).'
    ],
    population: '26.8 Million',
    currency: 'Australian Dollar ($, AUD)',
    languagesSummary: 'English (Australian English), over 250 Indigenous Australian and Torres Strait Islander languages (Kriol, Pitjantjatjara, Warlpiri)',
    coordinates: { lat: -25.2744, lng: 133.7751 },
    featured: true,

    history: {
      timeline: [
        { period: '65,000+ BCE', title: 'Aboriginal Dreamtime & Deep History', description: 'First Nations peoples managed landscapes using cultural fire management ("fire-stick farming") and mapped territories via oral Songlines.' },
        { period: '1770 CE', title: 'Captain James Cook at Botany Bay', description: 'Cook charted the eastern coastline of the continent, claiming it for the British Crown under the fiction of "terra nullius".' },
        { period: '1788 CE', title: 'First Fleet & Penal Colony', description: 'Arrival of Captain Arthur Phillip and eleven convict ships at Sydney Cove on January 26, establishing colonial New South Wales.' },
        { period: '1851 CE', title: 'Australian Gold Rush', description: 'Discovery of immense gold fields in Victoria and New South Wales, attracting hundreds of thousands of international fortune seekers and the Eureka Stockade rebellion.' },
        { period: '1901 CE', title: 'Federation of Australia', description: 'Six self-governing colonies united peacefully on January 1, 1901, into the Commonwealth of Australia.' }
      ],
      majorCivilizations: ['Aboriginal Australian First Nations (over 500 clan nations)', 'Torres Strait Islanders', 'Colonial Foundations', 'Modern Multicultural Nation'],
      importantEventsSummary: 'A history of profound ancestral connection to Country, pioneer frontier struggles, democratic milestones (one of the first to grant women’s suffrage in 1902), and modern reconciliation.',
      culturalHeritage: '20 UNESCO World Heritage Sites including the Great Barrier Reef, Uluru-Kata Tjuta National Park, and the Sydney Opera House.'
    },

    languages: {
      official: ['English (National language de facto)'],
      widelySpoken: ['Australian English (famous for colorful colloquialisms and word shortenings like arvo, brekkie, barbie)'],
      regional: ['Kriol (Northern Australia)', 'Pitjantjatjara (Central Desert)', 'Warlpiri', 'Yolŋu Matha (Arnhem Land)', 'Torres Strait Creole (Yumplatok)'],
      linguisticDiversityNotes: 'Intensive First Nations language revival programs are restoring endangered indigenous languages to schools and dual-named geographical landmarks across the continent.',
      commonPhrases: [
        { phrase: 'G’day mate', meaning: 'Hello friend', pronunciation: 'guh-DAY mayt' },
        { phrase: 'No worries!', meaning: 'You’re welcome / Everything is fine', pronunciation: 'noh WUR-eez' },
        { phrase: 'How ya going?', meaning: 'How are you?', pronunciation: 'how yah GOH-ing' },
        { phrase: 'Fair dinkum', meaning: 'Genuine / Honest truth', pronunciation: 'fair DING-kuhm' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Meat Pie & Sauce', localName: 'Aussie Meat Pie', description: 'Hand-sized flaky shortcrust pastry filled with minced beef in rich savory gravy, topped with puff pastry and a generous squirt of tomato sauce.', tag: 'National Footy Staple' },
        { name: 'Pavlova', localName: 'Pavlova', description: 'Crisp, delicate meringue crust with a soft marshmallow-like pillowy center, heaped with freshly whipped cream, passionfruit pulp, strawberries, and kiwi slices.', tag: 'Festive Dessert' },
        { name: 'Barramundi Fillet', localName: 'Grilled Barramundi', description: 'Native Australian freshwater-to-saltwater fish with delicate white, buttery flakes, pan-seared skin-crisp with lemon myrtle butter.', tag: 'Native Seafood' },
        { name: 'Vegemite on Toast', localName: 'Vegemite on Toast', description: 'Crunchy hot buttered toast spread sparingly with a thin veneer of salty, savory yeast extract spread.', tag: 'Cultural Rite of Passage' }
      ],
      popularIngredients: ['Vegemite', 'Macadamia nuts (native to Queensland)', 'Lemon myrtle', 'Finger limes (citrus caviar)', 'Wattle seed', 'Grass-fed beef & lamb', 'Prawns'],
      foodCustoms: 'The Aussie "Barbie" (barbecue): grilling sausages ("snags"), steaks, and ocean prawns outdoors with friends and cold drinks on sunny afternoons.',
      regionalSpecialties: 'Melbourne is the undisputed specialty coffee capital of the world (inventor of the Flat White); Tasmania for wild oysters, truffles, and artisan cheeses; South Australia for Barossa Shiraz.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Akubra Hat & Drizabone Coat', description: 'Durable rabbit-fur felt wide-brimmed hat paired with a heavy oilskin waterproof riding coat, built to withstand torrential rains and baking sun.', significance: 'Iconic bushwear of the Australian outback stockman.' },
        { name: 'Boardshorts & Thongs (Flip-Flops)', description: 'Quick-drying swimwear and rubber thong sandals.', significance: 'The informal national summer uniform worn across coastal towns and suburbs.' }
      ],
      culturalSignificance: 'Aboriginal ochre body paint and ceremonial feather headdresses are used during sacred Corroboree dance gatherings, with white and red clay patterns denoting ancestral clan relationships.',
      regionalVariations: 'R.M. Williams elastic-sided leather yearling boots worn universally from outback cattle stations to Sydney corporate boardrooms.',
      occasionsWorn: 'Australia Day, ANZAC Day dawn services (April 25), surf life saving competitions, and AFL Grand Final day.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Sydney New Year’s Eve', seasonOrDate: 'December 31', description: 'World-famous celebration viewed by over a billion people globally, setting off synchronized fireworks cascading from the Sydney Harbour Bridge and Opera House.', tradition: 'Picnicking along Sydney Harbour and watching midnight bridge fireworks.' },
        { name: 'ANZAC Day', seasonOrDate: 'April 25', description: 'Solemn national day of remembrance honoring military veterans, beginning with moving dawn services, sounding of the Last Post, and gunfire breakfasts.', tradition: 'Dawn vigil services and playing the traditional game of two-up in pubs.' },
        { name: 'Adelaide Fringe Festival', seasonOrDate: 'February–March (Adelaide)', description: 'The second-largest annual arts festival in the world after Edinburgh, transforming parks into magical open-air circus tents, comedy hubs, and theaters.', tradition: 'Spontaneous garden cabaret and fringe street performances.' }
      ],
      seasonalCelebrations: 'Boxing Day Sydney to Hobart Yacht Race in December; Melbourne Cup horse racing carnival ("the race that stops a nation") on the first Tuesday of November.',
      culturalContext: 'Guided by the core ethos of "Mateship" (unshakeable loyalty, equality, and mutual support) and "A Fair Go" (egalitarian opportunity for all).',
      howPeopleCelebrate: 'Firing up beachside municipal electric barbecues, surfing ocean waves, throwing backyard cricket matches, and shouting "Aussie, Aussie, Aussie, Oi Oi Oi!".'
    },

    arts: {
      traditionalMusic: 'The Yidaki (Didgeridoo - the ancient hollowed eucalyptus drone instrument invented by First Nations peoples in Arnhem Land), country folk ballads (Waltzing Matilda), and pub rock (AC/DC, INXS).',
      danceForms: ['Corroboree Aboriginal ceremonial dance', 'Bangarra Dance Theatre contemporary Indigenous dance', 'Bush dancing'],
      artFormsAndCrafts: ['Aboriginal Dot Painting (Papunya Tula acrylic art)', 'Bark painting with natural ochres', 'Opal gem cutting and polishing', 'Boomerang craftsmanship'],
      livingPractices: 'Volunteer Surf Life Saving club culture, weekend morning café brunches, and Welcome to Country acknowledgments honoring First Nations custodians.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Sydney Opera House & Harbour Bridge', location: 'Sydney Harbour, New South Wales', description: 'Architectural masterpiece designed by Jørn Utzon with interlocking concrete arched shell roofs, framed by the iconic steel "Coathanger" Harbour Bridge.', isUnesco: true },
        { name: 'Uluru (Ayers Rock)', location: 'Red Centre, Northern Territory', description: 'Sacred red sandstone inselberg rising 348 meters above the desert plains, sacred to the indigenous Anangu people who have walked its base for millennia.', isUnesco: true },
        { name: 'Great Barrier Reef', location: 'Coral Sea off Queensland coast', description: 'Vast marine wonderland composed of over 2,900 individual coral reefs and 900 islands, inhabited by sea turtles, clownfish, manta rays, and whales.', isUnesco: true },
        { name: 'Great Ocean Road & Twelve Apostles', location: 'Victoria', description: 'Spectacular 243-kilometer coastal scenic drive carved by WWI return soldiers, featuring limestone sea stacks rising from crashing Southern Ocean swells.', isUnesco: false }
      ],
      unescoSitesCount: 20,
      naturalAttractions: ['Kakadu National Park (biodiverse wetlands and 20,000-year-old rock art)', 'K’gari (Fraser Island - world’s largest sand island with rainforests)', 'Blue Mountains sandstone cliffs and eucalyptus haze', 'Tasmanian Wilderness ancient temperate rainforests']
    },

    interestingFacts: [
      'Australia was the second country in the world to give women the right to vote (1902) and the very first to allow women to stand for parliamentary election!',
      'Australia has the world’s longest continuous fence: the Dingo Fence, stretching 5,614 kilometers across three states to protect agricultural sheep country.',
      'Koalas are not bears—they are tree-dwelling marsupials that sleep up to 18–20 hours a day because eucalyptus leaves require immense energy to digest.',
      'Melbourne has been named the "World’s Most Livable City" more times than any other global metropolis.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A friendly, unpretentious handshake and warm smile: "G’day, how are you?".',
        'Australians value egalitarianism—treating everyone with equal respect regardless of wealth, status, or background.',
        'Sitting in the front passenger seat next to the driver when hailing a solo taxi or rideshare.'
      ],
      familyTraditions: 'Spending Christmas Day outdoors on sunny ocean beaches wearing festive swimsuits, eating cold peeled prawns, and playing backyard cricket.',
      everydayCustoms: 'Ordering a morning Flat White coffee at local neighborhood roasteries, swimming at ocean tidal rock pools, heading to the beach for a swim before work.',
      modernLifestyle: 'A relaxed, outdoor-focused lifestyle emphasizing work-life balance, beach recreation, clean urban parklands, and multicultural food markets.'
    },

    geography: {
      locationDescription: 'Comprises the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands between the Indian and Pacific Oceans.',
      climate: 'predominantly arid and semi-arid ("The Outback") covering roughly 70% of the land; tropical savanna in the north; temperate on southeastern and southwestern coasts.',
      majorFeatures: ['The Great Dividing Range', 'Uluru and Kata Tjuta', 'Murray-Darling River Basin', 'Great Barrier Reef'],
      wildlife: ['Red Kangaroo', 'Koala', 'Duck-billed Platypus', 'Wombat', 'Emu', 'Tasmanian Devil', 'Kookaburra'],
      naturalAttractionsSummary: 'Incomparable isolated ecosystems home to ancient prehistoric ferns, blinding white silica sand beaches, and endless red ochre outback deserts.'
    },

    sources: [
      { title: 'Tourism Australia (Australia.com)', url: 'https://www.australia.com' },
      { title: 'Australian Heritage Council', url: 'https://www.dcceew.gov.au/parks-heritage/heritage' },
      { title: 'UNESCO World Heritage Centre – Australia', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'new-zealand',
    slug: 'new-zealand',
    name: 'New Zealand',
    officialName: 'New Zealand (Aotearoa)',
    flagEmoji: '🇳🇿',
    capital: 'Wellington',
    continent: 'Oceania',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'Aotearoa – "The Land of the Long White Cloud", where dramatic snow-capped fiords, geothermal geysers, Māori Haka chants, and gentle Kiwi birds inspire epic journeys.',
    taraGreeting: 'Kia Ora! Welcome to New Zealand! Feel the thunderous earth beneath your feet as the All Blacks perform the powerful Māori Haka! Look out over the misty waterfalls of Milford Sound—it feels like stepping into Middle-earth! Let’s explore together!',
    taraFacts: [
      'In 1893, New Zealand became the very first self-governing country in the world to grant all women the right to vote in parliamentary elections, led by suffragist Kate Sheppard!',
      'New Zealand’s national bird, the flightless nocturnal Kiwi, lays an egg that is up to 20% of the mother’s entire body size—one of the largest egg-to-body ratios in the animal kingdom!',
      'Sir Edmund Hillary of New Zealand and Tenzing Norgay Sherpa of Nepal became the first people to reach the summit of Mount Everest on May 29, 1953.'
    ],
    population: '5.2 Million',
    currency: 'New Zealand Dollar ($, NZD)',
    languagesSummary: 'English, Te Reo Māori (Official), New Zealand Sign Language (NZSL - Official)',
    coordinates: { lat: -40.9006, lng: 174.8860 },
    featured: true,

    history: {
      timeline: [
        { period: 'c. 1250–1300 CE', title: 'Polynesian Voyaging & Māori Settlement', description: 'Skilled Polynesian navigators sailed double-hulled waka canoes across the Pacific guided by stars, discovering Aotearoa and developing Māori iwi tribal societies.' },
        { period: '1642 CE', title: 'Abel Tasman Expedition', description: 'Dutch explorer Abel Tasman was the first European to sight the islands, naming them "Staten Landt" before being renamed Nieuw Zeeland by Dutch cartographers.' },
        { period: '1840 CE', title: 'Treaty of Waitangi (Te Tiriti o Waitangi)', description: 'Signed on February 6 between Māori chiefs (Rangatira) and representatives of the British Crown, establishing the foundational founding document of New Zealand.' },
        { period: '1893 CE', title: 'Universal Women’s Suffrage', description: 'New Zealand made world history by becoming the first country where women could vote in general elections.' },
        { period: '1987 CE', title: 'Māori Language Act', description: 'Te Reo Māori was declared an official language of New Zealand, sparking an inspiring nationwide cultural and linguistic revival.' }
      ],
      majorCivilizations: ['Māori Iwi & Hapū nations', 'Polynesian Navigators', 'European Settlers (Pākehā)', 'Modern Bicultural & Multicultural Pacific Nation'],
      importantEventsSummary: 'A nation deeply grounded in the bicultural partnership of Te Tiriti o Waitangi, renowned for nuclear-free stances, world-record mountaineering, and epic film production (The Lord of the Rings).',
      culturalHeritage: '3 UNESCO World Heritage Sites: Te Wahipounamu (South West New Zealand), Tongariro National Park, and New Zealand Subantarctic Islands.'
    },

    languages: {
      official: ['Te Reo Māori', 'New Zealand Sign Language (NZSL)', 'English (de facto official)'],
      widelySpoken: ['New Zealand English (known for distinctive vowel shifts and colloquial slang)', 'Te Reo Māori'],
      regional: ['Samoan', 'Tongan', 'Cook Islands Māori', 'Mandarin'],
      linguisticDiversityNotes: 'Te Reo Māori words like "Kia Ora" (Hello/Wellness), "Whānau" (Family), "Aroha" (Love), and "Kai" (Food) are universally used in daily New Zealand life.',
      commonPhrases: [
        { phrase: 'Kia Ora', meaning: 'Hello / Wishing you life and good health', pronunciation: 'kee-ah OH-rah' },
        { phrase: 'Ngā mihi', meaning: 'Thank you / Warm regards', pronunciation: 'ngah MEE-hee' },
        { phrase: 'Haere mai', meaning: 'Welcome / Come here', pronunciation: 'HY-reh my' },
        { phrase: 'Sweet as!', meaning: 'Awesome / Great / No problem', pronunciation: 'sweet az' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Hāngī Feast', localName: 'Hāngī', description: 'Sacred Māori underground earth-oven cooking where baskets of pork, chicken, kūmara (sweet potato), pumpkin, and stuffing are slow-steamed for hours beneath hot volcanic stones and damp burlap.', tag: 'Sacred Cultural Feast' },
        { name: 'Pavlova with Kiwifruit', localName: 'Pavlova', description: 'Crisp white meringue shell filled with soft marshmallow center, topped with whipped fresh dairy cream and slices of tart green and gold kiwifruit.', tag: 'Celebration Classic' },
        { name: 'Whitebait Fritters', localName: 'Whitebait Fritters', description: 'Delicate egg patties filled with tiny, sweet native whitebait fish, flash-fried in fresh butter and served on white bread with fresh lemon.', tag: 'South Island Delicacy' },
        { name: 'Hokey Pokey Ice Cream', localName: 'Hokey Pokey', description: 'Creamy rich vanilla ice cream generously studded with crisp, crunchy balls of golden honeycomb toffee.', tag: 'Beloved Sweet Icon' }
      ],
      popularIngredients: ['Kūmara (sweet potato)', 'New Zealand grass-fed lamb', 'Green-lipped mussels (Perna canaliculus)', 'Kiwifruit', 'Mānuka honey', 'Sauvignon Blanc wine'],
      foodCustoms: 'Kai (food) brings people together. Māori custom requires sharing kai after meetings or welcoming ceremonies (pōwhiri) to lift tapu (spiritual sacredness) and build fellowship.',
      regionalSpecialties: 'Marlborough is world-famous for pungent, citrusy Sauvignon Blanc; Central Otago for high-altitude Pinot Noir; Rotorua for geothermal-cooked sweet corn; Bluff for world-prized wild oysters.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Korowai & Kahu Huruhuru', description: 'Finely woven feather cloak made from woven muka (flax fiber) adorned with iridescent kiwi, tūī, or pukeko bird feathers.', significance: 'Prestigious Māori ceremonial cloak representing leadership, honor, and ancestral warmth.' },
        { name: 'Pounamu (Greenstone) Pendants', description: 'Smooth, polished nephrite jade carved into sacred forms: the Hei Tiki (ancestral human figure), Hei Matau (fish hook for prosperity and ocean safety), and Koru (unfurling fern for new life).', significance: 'Pounamu holds spiritual mana; by tradition, it is never bought for oneself but always gifted to honor someone.' }
      ],
      culturalSignificance: 'Tā Moko: sacred Māori facial and body tattooing carved into the skin using bone chisels, displaying an individual’s genealogy (whakapapa), achievements, and tribal status.',
      regionalVariations: 'Swanndri heavy wool bush shirts worn by high-country sheep station musterers; gumboots worn on rural dairy farms.',
      occasionsWorn: 'Waitangi Day (February 6), Matariki (Māori New Year), pōwhiri welcoming ceremonies, university graduations, and state funerals.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Matariki (Māori New Year)', seasonOrDate: 'June/July (Winter rising of the Pleiades cluster)', description: 'Official national public holiday marking the rising of the Matariki star cluster; a time to remember ancestors, celebrate the present harvest, and plan for the new year.', tradition: 'Gathering at dawn to view the stars, sharing feasts, and flying kites.' },
        { name: 'Waitangi Day', seasonOrDate: 'February 6', description: 'National day commemorating the 1840 signing of the Treaty of Waitangi at the Waitangi Treaty Grounds, featuring dawn services, naval salutes, and giant waka war canoes paddling the bay.', tradition: 'Paddling magnificent 80-man carved waka war canoes.' },
        { name: 'Te Matatini Kapa Haka Festival', seasonOrDate: 'Every two years (Summer)', description: 'The Olympic Games of Māori performing arts: elite kapa haka troupes from across the nation compete in powerful choreographed choral singing, poi swinging, and haka.', tradition: 'Breathtaking 30-minute synchronized kapa haka performances.' }
      ],
      seasonalCelebrations: 'Queenstown Winter Festival in June with alpine skiing, dog derbies, and lake fireworks; World of WearableArt (WOW) in Wellington showcasing theatrical wearable sculpture.',
      culturalContext: 'Guided by core Māori values: Kaitiakitanga (guardianship and protection of the natural environment), Manaakitanga (deep hospitality and generosity to visitors), and Whānaungatanga (kinship).',
      howPeopleCelebrate: 'Performing the Hongi greeting (pressing noses and foreheads together to share the breath of life), preparing community hāngī feasts, and tramping (hiking) in the wilderness.'
    },

    arts: {
      traditionalMusic: 'Waiata Māori choral singing, Taonga Pūoro (traditional carved bone and wooden musical instruments mimicking bird calls and winds), and modern dub/reggae (Fat Freddy’s Drop).',
      danceForms: ['Haka (powerful ceremonial challenge and dance of unified strength and passion)', 'Poi (rhythmic swinging of tethered balls by women dancers)'],
      artFormsAndCrafts: ['Whakairo (Māori wood carving of meeting house marae panels)', 'Raranga (flax weaving of baskets and mats)', 'Pounamu jade carving', 'Bone carving'],
      livingPractices: 'Tramping (passionate multi-day wilderness trekking across Great Walks), river jet boating, and the sacred Hongi greeting.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Milford Sound (Piopiotahi)', location: 'Fiordland National Park, South Island', description: 'Breathtaking glacier-carved fiord flanked by sheer granite rock walls rising 1,200 meters from deep dark waters, with cascading waterfalls and Mitre Peak.', isUnesco: true },
        { name: 'Waitomo Glowworm Caves', location: 'Waikato, North Island', description: 'Subterranean limestone cavern system where thousands of tiny bioluminescent glowworms (Arachnocampa luminosa) light up the dark ceiling like a galaxy of stars.', isUnesco: false },
        { name: 'Tongariro National Park', location: 'Central North Island', description: 'Sacred volcanic peaks (Mount Ruapehu, Ngauruhoe / "Mount Doom", and Tongariro) and emerald alpine lakes, gifted by Paramount Chief Te Heuheu Tukino IV.', isUnesco: true },
        { name: 'Hobbiton Movie Set', location: 'Matamata, Waikato', description: 'Permanent, lush green rolling sheep farm movie set featuring 44 detailed hobbit holes, the Mill, and the Green Dragon Inn from Peter Jackson’s film trilogies.', isUnesco: false }
      ],
      unescoSitesCount: 3,
      naturalAttractions: ['Mount Cook (Aoraki - New Zealand’s highest peak at 3,724m)', 'Rotorua geothermal geysers and bubbling sulfur mud pools', 'Fox and Franz Josef glaciers descending into temperate rainforests', 'Cathedral Cove sea arch in the Coromandel']
    },

    interestingFacts: [
      'In 2017, the Whanganui River in New Zealand was granted the exact same legal status and rights as a living human being under New Zealand law, recognizing the Māori worldview that the river is an ancestor!',
      'New Zealand was the very last major habitable landmass on Earth to be settled by humans, remaining completely untouched by human footsteps until around 750–800 years ago.',
      'A hill in Hawke’s Bay holds the Guinness World Record for the longest place name in the world: "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu" (85 letters)!',
      'There are zero native land mammals in New Zealand other than two species of small bats—all native wildlife evolved as birds, reptiles, and insects!'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'The Hongi: pressing noses and foreheads together gently while closing your eyes to share the "ha" (breath of life) during formal encounters.',
        'Taking your shoes off before stepping inside a Māori Wharenui (meeting house) on a marae.',
        'New Zealanders ("Kiwis") value modesty, friendliness, humility, and treating everyone as equals.'
      ],
      familyTraditions: 'Spending summer holidays in simple coastal bach beach huts, diving for paua abalone and crayfish, and surfing uncrowded ocean breaks.',
      everydayCustoms: 'Saying "Kia Ora" when picking up phone calls or greeting colleagues, enjoying fish and chips wrapped in paper on the beach on Friday nights.',
      modernLifestyle: 'A progressive society with world-leading renewable geothermal and hydroelectric energy (over 80% renewable electricity), vibrant café culture, and outdoor adventure sports.'
    },

    geography: {
      locationDescription: 'Island nation in the southwestern Pacific Ocean, comprising two main landmasses—the North Island (Te Ika-a-Māui) and the South Island (Te Waipounamu)—and around 700 smaller islands.',
      climate: 'Temperate maritime with abundant sunshine and rainfall; subtropical in the far north ("The Winterless North") and cooler with alpine snowfields in the South Island.',
      majorFeatures: ['Southern Alps (spine of the South Island with 23 peaks over 3,000m)', 'Taupō Volcanic Zone', 'Waikato River (longest river)', 'Lake Taupō (massive caldera lake)'],
      wildlife: ['Kiwi bird', 'Kea (the world’s only alpine parrot, famed for mischievous intelligence)', 'Tuatara (ancient reptile living since the dinosaur era)', 'Kakapo (critically endangered flightless nocturnal parrot)', 'Hector’s Dolphin'],
      naturalAttractionsSummary: 'Unmatched pristine drama from smoking volcanic geysers and ancient fern canopies to glacier-fed sapphire lakes and towering ocean fiords.'
    },

    sources: [
      { title: 'Tourism New Zealand (100% Pure New Zealand)', url: 'https://www.newzealand.com' },
      { title: 'Department of Conservation (DOC)', url: 'https://www.doc.govt.nz' },
      { title: 'UNESCO World Heritage Centre – New Zealand', url: 'https://whc.unesco.org' }
    ]
  }
];
