import { Country } from '../../types/country';

export const southAmericaCountries: Country[] = [
  {
    id: 'brazil',
    slug: 'brazil',
    name: 'Brazil',
    officialName: 'Federative Republic of Brazil (República Federativa do Brasil)',
    flagEmoji: '🇧🇷',
    capital: 'Brasília',
    continent: 'South America',
    heroImage: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The vibrant giant of South America, home to the Amazon Rainforest, thunderous Iguaçu Falls, sun-drenched Copacabana sands, and the pulsating rhythm of Samba.',
    taraGreeting: 'Olá! Welcome to Brazil! Can you feel the heartbeat of the samba drums? Look up at Christ the Redeemer opening his arms above the emerald bays of Rio de Janeiro! Let’s ramble through the Amazon rainforest and celebrate life’s vibrant colors!',
    taraFacts: [
      'The Amazon Rainforest in northern Brazil produces roughly 20% of the world’s river freshwater flow and houses over 10% of all known species on Earth!',
      'Brazil is the only Portuguese-speaking nation in the Americas and the fifth-largest country in the world by both area and population.',
      'Rio de Janeiro’s annual Carnival welcomes over two million revelers per day, making it the biggest carnival celebration on planet Earth!'
    ],
    population: '215.3 Million',
    currency: 'Brazilian Real (R$, BRL)',
    languagesSummary: 'Portuguese (Português do Brasil), over 150 indigenous languages (Guarani, Ticuna, Yanomami)',
    coordinates: { lat: -14.2350, lng: -51.9253 },
    featured: true,

    history: {
      timeline: [
        { period: 'Pre-1500 CE', title: 'Indigenous Peoples of the Amazon & Coast', description: 'Millions of indigenous people belonging to Tupi-Guarani, Ge, and Arawak linguistic families lived sustainably across ecosystems.' },
        { period: '1500 CE', title: 'Arrival of Pedro Álvares Cabral', description: 'Portuguese navigator claimed the land for Portugal, naming it after the precious red dye wood "Pau-Brasil".' },
        { period: '1690s–1750s', title: 'Brazilian Gold Rush', description: 'Discovery of immense gold and diamond deposits in Minas Gerais, leading to the creation of Baroque colonial jewel cities like Ouro Preto.' },
        { period: '1822 CE', title: 'Declaration of Independence', description: 'Prince Regent Dom Pedro declared independence from Portugal along the Ipiranga Brook with the cry "Independence or Death!".' },
        { period: '1888 CE', title: 'Lei Áurea & Abolition of Slavery', description: 'Princess Isabel signed the Golden Law, making Brazil the last nation in the Western Hemisphere to abolish slavery.' }
      ],
      majorCivilizations: ['Indigenous Tupi & Amazonian nations', 'Portuguese Colonial Empire', 'Afro-descendant Quilombos (Palmares)', 'Empire of Brazil', 'Modern Republic'],
      importantEventsSummary: 'A glorious Afro-indigenous-European synthesis producing world-defining innovations in football, bossa nova, modern architecture (Oscar Niemeyer), and aviation (Santos-Dumont).',
      culturalHeritage: '23 UNESCO World Heritage Sites including Historic Town of Ouro Preto, Salvador de Bahia Historic Centre, and Iguaçu National Park.'
    },

    languages: {
      official: ['Portuguese'],
      widelySpoken: ['Brazilian Portuguese (characterized by melodic cadence, nasal vowels, and warm open pronunciation)'],
      regional: ['Guarani (co-official in several municipalities)', 'Nheengatu (historic lingua franca of the Amazon)', 'Ticuna', 'Kaingang', 'Talian (Venetian dialect)', 'Riograndenser Hunsrückisch (Germanic dialect)'],
      linguisticDiversityNotes: 'Brazilian Portuguese incorporated hundreds of indigenous Tupi words for flora, fauna, and topography, alongside West African Yoruba and Bantu linguistic influences.',
      commonPhrases: [
        { phrase: 'Tudo bem?', meaning: 'Everything good? / How are you?', pronunciation: 'TOO-doo bayng' },
        { phrase: 'Obrigado / Obrigada', meaning: 'Thank you (said by male/female)', pronunciation: 'oh-bree-GAH-doo / dah' },
        { phrase: 'Por favor', meaning: 'Please', pronunciation: 'por fah-VOR' },
        { phrase: 'Saudade', meaning: 'Deep, bittersweet longing for someone or somewhere', pronunciation: 'sow-DAH-djee' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Feijoada Completa', localName: 'Feijoada', description: 'Rich, slow-simmered black bean stew with tender cuts of beef, pork, bacon, and smoked sausage, served with white rice, collard greens, toasted cassava flour (farofa), and orange slices.', tag: 'National Soul Dish' },
        { name: 'Pão de Queijo', localName: 'Pão de Queijo', description: 'Warm, puffed golden cheese rolls made from sour tapioca flour and cured Minas cheese, crisp on the crust and soft, chewy, and airy inside.', tag: 'Beloved Snack' },
        { name: 'Moqueca Baiana', localName: 'Moqueca', description: 'Fragrant seafood stew cooked in traditional clay pots with fresh white fish, shrimp, coconut milk, dendê red palm oil, sweet peppers, and fresh cilantro.', tag: 'Afro-Brazilian Art' },
        { name: 'Açaí Bowl', localName: 'Açaí na Tigela', description: 'Thick, creamy purple purée of antioxidant-rich Amazonian açaí berries blended frozen, topped with crunchy granola and fresh sliced bananas.', tag: 'Amazonian Energy' }
      ],
      popularIngredients: ['Cassava / Tapioca (Mandioca)', 'Black beans (Feijão)', 'Dendê palm oil', 'Coconut milk', 'Minas cheese', 'Cachaça (sugar cane spirit)', 'Lime', 'Guaraná'],
      foodCustoms: 'Rodízio dining: endless circulating skewers of wood-grilled meats brought directly to the table in traditional Churrascarias, where diners control the flow with a green/red token.',
      regionalSpecialties: 'Bahia for spicy Acarajé (black-eyed pea fritters fried in dendê oil); Minas Gerais for slow-cooked comfort foods and artisan cheeses; Rio Grande do Sul for gaucho barbecue.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Traje de Baiana', description: 'Voluminous, multi-layered flowing white lace skirts (saia rodada), embroidered starched camisas, turban headwraps (torço), and colorful glass bead necklaces (guias).', significance: 'Sacred attire of Afro-Brazilian women in Salvador da Bahia, UNESCO heritage.' },
        { name: 'Gaucho Attire', description: 'Baggy bombachas trousers, leather boots, wide-brimmed felt hat, and a silk neckerchief (lenço).', significance: 'Traditional dress of southern cattle ranchers and pampas riders.' }
      ],
      culturalSignificance: 'Carnival costumes represent months of community devotion in the favelas and samba schools, featuring hundreds of hours of hand-glued rhinestones, feathers, and sequins.',
      regionalVariations: 'Amazonian feather headdresses and body painting using natural red urucum and black genipapo dyes; casual Havaianas flip-flops worn everywhere in Rio.',
      occasionsWorn: 'Carnival parades in the Sambadrome, Festa Junina harvest dances, Lavagem do Bonfim in Bahia, and New Year’s Eve (Revellion).'
    },

    festivals: {
      majorFestivals: [
        { name: 'Carnaval (Rio de Janeiro & Salvador)', seasonOrDate: 'February/March (leading to Lent)', description: 'The grandest spectacle on Earth: 12 elite Samba Schools parade colossal multi-story floats and thousands of costumed dancers through the Sambadrome, while millions dance in street blocos.', tradition: 'All-night Sambadrome parades and neighborhood street blocos.' },
        { name: 'Festa Junina (Saint John Festivals)', seasonOrDate: 'June', description: 'Nationwide harvest festival honoring Saint John with square dances (Quadrilha), bonfires, checkered straw hats, and corn treats in Campina Grande and Caruaru.', tradition: 'Dancing the Quadrilha around roaring bonfires.' },
        { name: 'Réveillon (New Year on Copacabana)', seasonOrDate: 'December 31', description: 'Over two million people dress entirely in pristine white clothing to gather on Copacabana Beach, tossing white flowers into the ocean waves for Iemanjá, goddess of the sea.', tradition: 'Tossing white roses into the sea and watching midnight fireworks.' },
        { name: 'Festival Folclórico de Parintins', seasonOrDate: 'Late June (Amazonas)', description: 'Spectacular indigenous folklore competition in the heart of the Amazon between two giant mechanical ox teams: Boi Garantido (red) and Boi Caprichoso (blue).', tradition: 'Epic theatrical retelling of the Amazonian Boi-Bumbá legend.' }
      ],
      seasonalCelebrations: 'Círio de Nazaré in Belém (October), one of the world’s largest religious processions with over two million pilgrims honoring the Virgin of Nazareth.',
      culturalContext: 'A celebratory embrace of "Alegria" (pure joy) and "Ginga" (the fluid, rhythmic body swing shared by samba dancers, capoeira martial artists, and footballers alike).',
      howPeopleCelebrate: 'Playing batucada percussion instruments, dancing in the streets, singing in chorus, and sharing cold açaí and caipirinhas with friends.'
    },

    arts: {
      traditionalMusic: 'Samba, Bossa Nova (Tom Jobim, João Gilberto), Forró, Choro, Tropicália (Caetano Veloso, Gilberto Gil), and Baile Funk.',
      danceForms: ['Samba no Pé', 'Capoeira (Afro-Brazilian martial art disguised as a dance, UNESCO heritage)', 'Forró partner dance', 'Frevo energetic umbrella dance of Recife'],
      artFormsAndCrafts: ['Modernist architecture of Oscar Niemeyer', 'Indigenous feather art (Arte Plumária)', 'Clay figurines of Mestre Vitalino in Pernambuco', 'Chita brightly printed floral fabric art'],
      livingPractices: 'Playing footvolley on sandy beaches, weekend Churrasco barbecues with friends, and the welcoming warmth of "Jeitinho Brasileiro".'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Christ the Redeemer & Sugarloaf', location: 'Rio de Janeiro', description: 'Monumental 38-meter Art Deco statue of Jesus standing atop Corcovado mountain, arms outstretched over Guanabara Bay and Sugarloaf Mountain.', isUnesco: true },
        { name: 'Iguaçu Falls (Cataratas do Iguaçu)', location: 'Paraná (Border with Argentina)', description: 'One of the most awe-inspiring waterfall systems on Earth, comprising 275 individual cascades roaring through lush subtropical rainforest.', isUnesco: true },
        { name: 'Historic Centre of Salvador da Bahia (Pelourinho)', location: 'Salvador, Bahia', description: 'Colonial town of pastel 17th-century baroque mansions, cobblestone slopes, and gold-encrusted churches echoing with Olodum drumbeats.', isUnesco: true },
        { name: 'Teatro Amazonas', location: 'Manaus, Amazonas', description: 'Sumptuous Belle Époque opera house constructed deep in the heart of the Amazon during the rubber boom, crowned by a tiled dome of Brazilian national colors.', isUnesco: false }
      ],
      unescoSitesCount: 23,
      naturalAttractions: ['Amazon Basin and Rainforest', 'Pantanal (the world’s largest tropical wetland, premier spot for jaguar sightings)', 'Lençóis Maranhenses (rolling white sand dunes filled with crystal rainwater lagoons)', 'Fernando de Noronha volcanic marine archipelago']
    },

    interestingFacts: [
      'Brazil has won the FIFA World Cup five times (1958, 1962, 1970, 1994, 2002)—more than any other nation on Earth, making football a veritable national religion.',
      'The Amazon River releases roughly 209,000 cubic meters of water into the Atlantic Ocean every second—diluting the ocean’s salinity for more than 160 kilometers offshore!',
      'Brasília, the purpose-built federal capital inaugurated in 1960, was planned by Lúcio Costa in the shape of a massive airplane, with buildings designed by Oscar Niemeyer.',
      'Brazil is home to the largest population of Japanese descent outside of Japan, centered in the bustling Liberdade neighborhood of São Paulo.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'Warmth is immediate: women greet with two kisses on the cheeks (beijinhos); men greet with a warm handshake and back-slap (abraço).',
        'Physical warmth and standing close while talking is a natural sign of friendliness and engagement.',
        'Always keeping a napkin in your hand when eating finger foods or sandwiches—touching food directly with bare hands at tables is frowned upon.'
      ],
      familyTraditions: 'Sunday family barbecues (Churrasco em família) with multiple generations sharing picanha steaks, playing samba on acoustic guitars, and cheering soccer matches.',
      everydayCustoms: 'Drinking freshly pressed sugarcane juice (Caldo de Cana) with crisp fried pastéis at weekly street markets (feiras livres).',
      modernLifestyle: 'Dynamic megacities like São Paulo (the largest city in the Southern Hemisphere), world-leading aviation engineering (Embraer), and vibrant social media usage.'
    },

    geography: {
      locationDescription: 'Occupies almost half of the South American continent, bordering every South American country except Chile and Ecuador.',
      climate: 'predominantly tropical and equatorial with abundant rainfall; semi-arid in the northeastern Sertão; temperate in the southern highlands (Curitiba, Porto Alegre).',
      majorFeatures: ['Amazon River Basin', 'Brazilian Highlands (Planalto Brasileiro)', 'Pantanal Wetlands', 'Atlantic Rainforest (Mata Atlântica)'],
      wildlife: ['Jaguar (Onça-pintada)', 'Toco Toucan', 'Capybara (world’s largest rodent)', 'Golden Lion Tamarin', 'Pink River Dolphin (Boto Cor-de-Rosa)'],
      naturalAttractionsSummary: 'Incomparable biodiversity spanning the world’s largest rainforest, the world’s largest wetland, and thousands of kilometers of tropical coastline.'
    },

    sources: [
      { title: 'Embratur – Brazilian Tourist Board (Visit Brasil)', url: 'https://visitbrasil.com' },
      { title: 'Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN)', url: 'http://portal.iphan.gov.br' },
      { title: 'UNESCO World Heritage Centre – Brazil', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'argentina',
    slug: 'argentina',
    name: 'Argentina',
    officialName: 'Argentine Republic (República Argentina)',
    flagEmoji: '🇦🇷',
    capital: 'Buenos Aires',
    continent: 'South America',
    heroImage: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1545832063-74f2d924b61a?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The land of fiery Tango, passionate football legends, grand Parisian-style boulevards, gaucho horsemanship on the Pampas, and thunderous Patagonian glaciers.',
    taraGreeting: '¡Hola! Welcome to Argentina! Listen to the passionate weeping of the bandoneón accordion echoing through the cobblestone alleys of San Telmo! Let’s share a gourd of herbal mate tea, marvel at Perito Moreno Glacier, and explore the end of the world!',
    taraFacts: [
      'The Perito Moreno Glacier in Argentine Patagonia is one of the very few glaciers on Earth that is in a state of dynamic equilibrium rather than retreating!',
      'Ushuaia in Tierra del Fuego is the southernmost city on planet Earth, proudly nicknamed "El Fin del Mundo" (The End of the World).',
      'Argentines are the world’s leading consumers of beef per capita, celebrated for their sacred wood-fired Asado barbecue ritual.'
    ],
    population: '46.7 Million',
    currency: 'Argentine Peso ($, ARS)',
    languagesSummary: 'Spanish (Castellano Rioplatense), Italian influence, Welsh in Chubut, Indigenous Guaraní, Quechua, Mapudungun',
    coordinates: { lat: -38.4161, lng: -63.6167 },

    history: {
      timeline: [
        { period: 'Pre-1516 CE', title: 'Indigenous Peoples of the South', description: 'Diaguita agriculturalists in the northwest, nomadic Tehuelche and Mapuche in the pampas and Patagonia, and Selk’nam in Tierra del Fuego.' },
        { period: '1536 & 1580 CE', title: 'Founding of Buenos Aires', description: 'Founded on the Rio de la Plata estuary, growing into a key commercial hub of the Viceroyalty of the Río de la Plata.' },
        { period: '1810–1816 CE', title: 'May Revolution & Independence', description: 'General José de San Martín organized the Army of the Andes, crossing towering snow-covered peaks to liberate Chile and Peru.' },
        { period: 'Late 19th–Early 20th Century', title: 'The Golden Age of Immigration', description: 'Massive wave of European immigration (primarily Italian and Spanish), turning Buenos Aires into the "Paris of South America".' },
        { period: '1983 CE', title: 'Restoration of Democracy', description: 'End of military dictatorship and election of Raúl Alfonsín, cementing human rights and the heroic Mothers of the Plaza de Mayo movement.' }
      ],
      majorCivilizations: ['Indigenous Diaguita, Mapuche & Tehuelche', 'Viceroyalty of the Río de la Plata', 'Gaucho Culture of the Pampas', 'Modern Democratic Republic'],
      importantEventsSummary: 'A proud history characterized by passionate intellectual debate, timeless literature (Jorge Luis Borges), football triumphs (Maradona, Messi), and deep European architectural heritage.',
      culturalHeritage: '12 UNESCO World Heritage Sites including Los Glaciares National Park, Iguazú National Park, and Cueva de las Manos.'
    },

    languages: {
      official: ['Spanish'],
      widelySpoken: ['Rioplatense Spanish (famous for "voseo" using "vos" instead of "tú", and pronouncing "ll" and "y" as "sh")'],
      regional: ['Guaraní (co-official in Corrientes)', 'Quechua (northwest)', 'Mapudungun (Patagonia)', 'Patagonian Welsh (Chubut province)'],
      linguisticDiversityNotes: 'Lunfardo: a colorful historic slang originating in the lower-class ports and tango halls of Buenos Aires, heavily influenced by Italian immigrant dialects.',
      commonPhrases: [
        { phrase: '¡Che!', meaning: 'Hey! / Friend! (Iconic Argentine exclamation)', pronunciation: 'CHAY' },
        { phrase: '¿Cómo andás, che?', meaning: 'How are you doing, friend?', pronunciation: 'KOH-moh ahn-DAHS chay' },
        { phrase: 'Muchas gracias', meaning: 'Thank you very much', pronunciation: 'MOO-chahs GRAH-syahs' },
        { phrase: 'De nada', meaning: 'You are welcome', pronunciation: 'deh NAH-dah' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Asado Argentino', localName: 'Asado', description: 'Traditional ritual barbecue cooked over hardwood coals on a metal grill (parrilla), featuring beef ribs (tira de asado), flank (vacío), choripán sausages, and chimichurri sauce.', tag: 'National Soul Dish' },
        { name: 'Empanadas Criollas', localName: 'Empanadas', description: 'Flaky baked pastries stuffed with hand-cut beef seasoned with onions, cumin, pimentón, hard-boiled eggs, and green olives, with decorative braided edges (repulgue).', tag: 'Handheld Classic' },
        { name: 'Milanesa a la Napolitana', localName: 'Milanesa', description: 'Crisp breaded beef cutlet topped with rich tomato sauce, slices of ham, and melted mozzarella cheese, served with french fries.', tag: 'Porteño Comfort' },
        { name: 'Alfajores con Dulce de Leche', localName: 'Alfajores', description: 'Tender cornstarch cookies (maicena) sandwiched with thick, caramelized dulce de leche and rolled in shredded coconut.', tag: 'Beloved Sweet' }
      ],
      popularIngredients: ['Grass-fed beef', 'Dulce de leche', 'Yerba mate leaves', 'Chimichurri (parsley, garlic, oregano, vinegar, oil)', 'Malbec red wine', 'Provoleta cheese'],
      foodCustoms: 'The Mate Ritual: dried yerba mate leaves packed into a hollowed calabash gourd, sipped through a metal straw with a filter (bombilla). Passing the gourd around a circle builds intimate friendship and bonding.',
      regionalSpecialties: 'Mendoza for world-class high-altitude Malbec wine; Salta and Tucumán for spicy juicy empanadas; Bariloche for artisan Swiss-style chocolate shops.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Traje de Gaucho', description: 'Wide pleated trousers (bombachas de campo), leather riding boots, a wide leather belt studded with silver coins (tirador), a neckerchief, and a felt hat or beret (boina).', significance: 'National folk symbol of the fiercely independent horsemen of the Argentine Pampas.' },
        { name: 'Poncho Salteño', description: 'Heavy, handwoven wool poncho dyed in striking crimson red with black stripes and fringe.', significance: 'Worn by General Güemes’ cavalry during the War of Independence.' }
      ],
      culturalSignificance: 'Tango dancers wear sleek, elegant attire: dark pinstripe suits with fedoras for men, and dramatic slit dresses with high-heeled shoes for women.',
      regionalVariations: 'Llama and alpaca wool woven shawls in the Andean northwest; sheepskin chaps and heavy weather jackets in windy southern Patagonia.',
      occasionsWorn: 'Día de la Tradición (November 10), tango milongas in Buenos Aires, gaucho horse festivals in San Antonio de Areco.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Buenos Aires Tango Festival & World Cup', seasonOrDate: 'August (Buenos Aires)', description: 'The planet’s premier tango celebration, hosting thousands of competitive dancers, free open-air milongas, and concerts across historic halls.', tradition: 'Dancing tango into the early morning hours.' },
        { name: 'Fiesta Nacional de la Vendimia (Grape Harvest)', seasonOrDate: 'March (Mendoza)', description: 'Spectacular harvest celebration featuring hundreds of performers dancing in an open-air amphitheater, blessing the grapes, and crowning the Harvest Queen.', tradition: 'Blessing the new wine harvest with fireworks and theatrical dance.' },
        { name: 'Día de la Tradición', seasonOrDate: 'November 10 (San Antonio de Areco)', description: 'Celebration of gaucho heritage featuring parades of thousands of skilled horsemen, traditional folk dancing (Chacarera), and massive open-air asados.', tradition: 'Gaucho rodeo horsemanship displays and folk singing.' }
      ],
      seasonalCelebrations: 'Cosquín Folk Festival in January celebrating indigenous and gaucho folk music; Carnaval de Gualeguaychú in summer with glittering open-air parades.',
      culturalContext: 'A passionate culture where friendships are cherished deeply, coffee shop philosophical discussions stretch for hours, and football is a shared heartbeat.',
      howPeopleCelebrate: 'Gathering on Sundays around the smoking Asado grill, passing the mate gourd in parks, and cheering passionately for Boca Juniors or River Plate.'
    },

    arts: {
      traditionalMusic: 'Tango (Carlos Gardel, Astor Piazzolla), Argentine folklore music (Mercedes Sosa, Atahualpa Yupanqui), and Latin Rock (Charly García, Gustavo Cerati).',
      danceForms: ['Tango (UNESCO Intangible Cultural Heritage)', 'Milonga', 'Chacarera energetic folk dance', 'Zamba romantic handkerchief dance'],
      artFormsAndCrafts: ['Fileteado Porteño decorative sign painting (UNESCO heritage)', 'Platería Criolla (silver gaucho knives and mate cups)', 'Leather craft', 'Woven ponchos'],
      livingPractices: 'The daily Mate sharing circle, lingering at historic Bares Notables cafes (like Café Tortoni founded in 1858), and psychoanalysis cafe debates.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Perito Moreno Glacier', location: 'Los Glaciares National Park, Santa Cruz', description: 'Colossal 30-kilometer-long ice wall rising 74 meters above Lake Argentino, famous for thunderous ice calving collapses into the blue waters.', isUnesco: true },
        { name: 'Iguazú Falls (Argentine Side)', location: 'Misiones Province', description: 'Spectacular jungle walkways leading directly to the edge of the thundering Devil’s Throat (Garganta del Diablo) horseshoe chasm.', isUnesco: true },
        { name: 'Teatro Colón', location: 'Buenos Aires', description: 'World-renowned acoustic opera house built in 1908 in eclectic Italian neoclassical style, acclaimed as having one of the five best concert acoustics on Earth.', isUnesco: false },
        { name: 'Cueva de las Manos (Cave of the Hands)', location: 'Santa Cruz, Patagonia', description: 'Stunning prehistoric rock art dating back 9,300 years featuring stenciled handprints and hunting scenes left by ancient hunter-gatherers.', isUnesco: true }
      ],
      unescoSitesCount: 12,
      naturalAttractions: ['Mount Aconcagua (highest peak in the Americas and Western Hemisphere at 6,961m)', 'Tierra del Fuego National Park', 'Iberá Wetlands (rich marshland sanctuary for capybaras and caimans)', 'Bariloche and the Lake District']
    },

    interestingFacts: [
      'Buenos Aires has the highest concentration of bookstores per person of any city in the world, including El Ateneo Grand Splendid, built inside a lavish 1919 theater.',
      'Argentina was the first country in the world to use human fingerprinting as a reliable method of criminal identification in 1892, pioneered by police official Juan Vucetich.',
      'The Argentine Pope Francis (Jorge Mario Bergoglio) became the very first Pope from the Americas when elected in 2013.',
      'Argentines greet each other with a warm kiss on the right cheek—even between men who are casual acquaintances or business colleagues!'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A single warm kiss on the right cheek accompanied by a light touch on the shoulder, regardless of gender.',
        'When offered mate, never say "Gracias" until you have finished and do not want any more rounds (saying thanks means you are done!).',
        'Dinner is enjoyed very late: restaurants rarely fill up before 9:30 or 10:00 PM.'
      ],
      familyTraditions: 'Sunday Asado with extended family lasting from 1:00 PM until dusk, eating grilled meats in sequential courses accompanied by red wine and salad.',
      everydayCustoms: 'Carrying a thermos under your arm to refill your mate gourd in parks, buying fresh facturas pastries for afternoon merienda tea, passionate sports debates.',
      modernLifestyle: 'A cosmopolitan society with thriving indie cinema, late-night nightlife that runs until 6:00 AM, world-class software development, and historic cafes.'
    },

    geography: {
      locationDescription: 'Occupies the southern wedge of South America between the Andes Mountains to the west and the Atlantic Ocean to the east.',
      climate: 'Extremely diverse: subtropical in the northeast, temperate in the central Pampas, arid in the west, and subpolar alpine in southern Patagonia and Tierra del Fuego.',
      majorFeatures: ['Andes Mountain Range', 'The Pampas (vast fertile agricultural plains)', 'Patagonian Steppe and Ice Fields', 'Río de la Plata estuary'],
      wildlife: ['Guanaco', 'Patagonian Mara (hare-like rodent)', 'Andean Condor (one of the largest flying birds on Earth)', 'Magellanic Penguin', 'Southern Right Whale'],
      naturalAttractionsSummary: 'From sub-tropical jungle waterfalls and wine valleys to stark arid desert gorges and colossal blue calving glaciers.'
    },

    sources: [
      { title: 'Instituto Nacional de Promoción Turística (Argentina.travel)', url: 'https://www.argentina.travel' },
      { title: 'Ministerio de Cultura de la República Argentina', url: 'https://www.cultura.gob.ar' },
      { title: 'UNESCO World Heritage Centre – Argentina', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'peru',
    slug: 'peru',
    name: 'Peru',
    officialName: 'Republic of Peru (República del Perú)',
    flagEmoji: '🇵🇪',
    capital: 'Lima',
    continent: 'South America',
    heroImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The sacred land of the Inca Empire, where mist-veiled Machu Picchu crowns Andean ridges, ancient textiles tell cosmic stories, and ceviche defines gastronomic brilliance.',
    taraGreeting: 'Allianllachu! Welcome to Peru! Stand with me upon the sacred stone terraces of Machu Picchu as morning clouds lift to reveal the towering peak of Huayna Picchu! Let’s meet gentle alpacas, admire colorful woven ponchos, and taste fresh ceviche!',
    taraFacts: [
      'Machu Picchu sits at 2,430 meters (7,970 ft) in the cloud forest, engineered with mortar-free precision stone masonry (ashlar) so tight that a knife blade cannot fit between stones!',
      'Peru is the birthplace of the potato: indigenous Andean farmers domesticated potatoes over 8,000 years ago and cultivate over 4,000 distinct varieties today!',
      'Lake Titicaca on the Peru-Bolivia border is the highest navigable body of water in the world at 3,812 meters (12,507 ft) above sea level.'
    ],
    population: '34.3 Million',
    currency: 'Peruvian Sol (S/, PEN)',
    languagesSummary: 'Spanish & Quechua (Official), Aymara (Official), numerous Amazonian languages (Asháninka, Shipibo)',
    coordinates: { lat: -9.1900, lng: -75.0152 },
    featured: true,

    history: {
      timeline: [
        { period: 'c. 3000–1800 BCE', title: 'Caral-Supe Civilization', description: 'The oldest known civilization in the Americas, flourishing at Caral with monumental stone pyramids, flutes of pelican bone, and quipu knotted records.' },
        { period: 'c. 900–200 BCE', title: 'Chavín & Nazca Cultures', description: 'Monumental stone temple art at Chavín de Huántar; mysterious giant geoglyphs etched into the arid Nazca desert sands.' },
        { period: '1438–1533 CE', title: 'The Inca Empire (Tawantinsuyu)', description: 'Under Emperor Pachacuti, the Inca built the largest empire in pre-Columbian America, linked by the 40,000-kilometer Qhapaq Ñan stone road network.' },
        { period: '1533–1821 CE', title: 'Viceroyalty of Peru', description: 'Spanish conquest led by Pizarro; Lima became the wealthy "City of Kings" directing gold and silver extraction from Potosí.' },
        { period: '1821 CE', title: 'Independence', description: 'General José de San Martín proclaimed independence on July 28, 1821, followed by Simón Bolívar’s decisive victory at the Battle of Ayacucho.' }
      ],
      majorCivilizations: ['Caral-Supe', 'Chavín', 'Moche', 'Nazca', 'Wari', 'Chimú', 'Inca Empire (Tawantinsuyu)'],
      importantEventsSummary: 'A monumental center of indigenous engineering, terraced agriculture, astronomy, gold metallurgy, and world-acclaimed modern culinary synthesis.',
      culturalHeritage: '13 UNESCO World Heritage Sites including Historic Sanctuary of Machu Picchu, City of Cusco, and Nazca Lines.'
    },

    languages: {
      official: ['Spanish', 'Quechua', 'Aymara'],
      widelySpoken: ['Peruvian Spanish', 'Southern Quechua (Runasimi - spoken by over 3.5 million Peruvians)'],
      regional: ['Central Quechua', 'Aymara (around Lake Titicaca)', 'Shipibo-Konibo', 'Asháninka', 'Awajún'],
      linguisticDiversityNotes: 'Quechua (Runasimi, meaning "people’s speech") was the official language of the Inca Empire and continues to be actively spoken across Andean communities.',
      commonPhrases: [
        { phrase: 'Allillanchu', meaning: 'How are you? (Quechua)', pronunciation: 'ah-yee-yahn-CHOO' },
        { phrase: 'Allillanmi', meaning: 'I am well (Quechua response)', pronunciation: 'ah-yee-yahn-MEE' },
        { phrase: 'Muchas gracias', meaning: 'Thank you very much', pronunciation: 'MOO-chahs GRAH-syahs' },
        { phrase: 'Sulpayki', meaning: 'Thank you (Quechua)', pronunciation: 'sool-PY-kee' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Ceviche Clásico', localName: 'Ceviche Peruano', description: 'Fresh raw ocean fish diced and cured in freshly squeezed tart lime juice with red onions and fiery rocoto chili, served with sweet potato (camote) and giant Andean corn kernels (choclo).', tag: 'UNESCO Cultural Heritage' },
        { name: 'Lomo Saltado', localName: 'Lomo Saltado', description: 'Tender beef tenderloin strips flash-fried in a fiery wok with red onions, tomatoes, aji amarillo chilies, and soy sauce, served with crispy french fries and white rice.', tag: 'Chifa Fusion Masterpiece' },
        { name: 'Causa Rellena', localName: 'Causa Limeña', description: 'Chilled terrine of smooth yellow potato purée seasoned with aji amarillo chili paste and lime juice, layered with shredded chicken salad or tuna and creamy avocado.', tag: 'Pre-Columbian Beauty' },
        { name: 'Pachamanca', localName: 'Pachamanca', description: 'Ancient earth-oven banquet where marinated meats, tubers (potatoes, sweet potatoes, yuca), and fava beans are slow-cooked underground over red-hot volcanic stones covered in wild herbs.', tag: 'Sacred Earth Feast' }
      ],
      popularIngredients: ['Ají Amarillo (vibrant orange chili)', 'Ají Panca', 'Potatoes (Papas)', 'Quinoa', 'Giant white corn (Choclo)', 'Fresh lime', 'Cilantro', 'Huacatay (black mint)'],
      foodCustoms: 'Peru has been voted the World’s Leading Culinary Destination multiple times, blending indigenous Andean and Amazonian ingredients with Spanish, African, Chinese (Chifa), and Japanese (Nikkei) culinary influences.',
      regionalSpecialties: 'Arequipa is famous for Rocoto Relleno (spicy stuffed pepper); Cusco for roasted guinea pig (Cuy Chactado); the Amazon for Juane rice cakes wrapped in bijao leaves.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Andean Poncho & Chullo', description: 'Heavy handwoven alpaca or sheep’s wool poncho decorated with geometric tribal patterns, worn with a chullo ear-flap knit hat.', significance: 'Provides thermal insulation in thin high-altitude mountain air while signaling the wearer’s village.' },
        { name: 'Polleras & Montera', description: 'Voluminous multi-layered handwoven wool skirts trimmed with embroidered bands, worn with an ornate flat circular or tilted felt hat (montera).', significance: 'Traditional everyday dress of indigenous Quechua and Aymara women.' }
      ],
      culturalSignificance: 'Weaving in communities like Chinchero is a sacred living art where master weavers use natural plant and cochineal insect dyes to weave intricate ancestral memory patterns (Pallay).',
      regionalVariations: ' bowler hats (bombines) worn by Aymara women in Puno; reed-woven skirts of Lake Titicaca; Amazonian painted bark cloth cushma tunics.',
      occasionsWorn: 'Inti Raymi festival, Fiesta de la Candelaria, communal agricultural work (Ayni), and weddings.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Inti Raymi (Festival of the Sun)', seasonOrDate: 'June 24 (Winter Solstice in Cusco)', description: 'Grand reenactment of the ancient Inca winter solstice festival at the stone fortress of Sacsayhuamán, honoring Inti (the Sun God) with traditional prayers, music, and royal palanquins.', tradition: 'Solemn Inca imperial rites and colorful dance processions.' },
        { name: 'Fiesta de la Virgen de la Candelaria', seasonOrDate: 'February (Puno)', description: 'Massive cultural festival on the shores of Lake Titicaca featuring over 40,000 dancers and musicians in glittering costumes performing the energetic Diablada devil dance.', tradition: 'The Diablada dance drama of devils and archangels.' },
        { name: 'Qoyllur Rit’i (Snow Star Festival)', seasonOrDate: 'May/June (leading to Corpus Christi)', description: 'Over 10,000 indigenous pilgrims hike to the icy Sinakara Valley at 4,700 meters to celebrate ancient mountain spirits (Apus) and Christ.', tradition: 'Ukuku bear-spirit dancers climbing glaciers at night.' }
      ],
      seasonalCelebrations: 'Vendimia wine harvest festival in Ica; Corpus Christi in Cusco with 15 saint statues paraded around the Plaza de Armas.',
      culturalContext: 'Rooted in the ancient Quechua philosophy of "Ayni" (sacred reciprocal cooperation: "Today for you, tomorrow for me") and veneration of Pachamama (Mother Earth).',
      howPeopleCelebrate: 'Playing panpipes (zampoñas) and charangos, preparing massive earth-pot pachamanca feasts, and pouring a libation drops of chicha to Pachamama.'
    },

    arts: {
      traditionalMusic: 'Andean huayno music featuring bamboo panpipes (siku/zampoña), quena vertical flutes, and the ten-stringed charango lute made from armadillo or wood.',
      danceForms: ['Marinera (national courtship dance with white handkerchiefs)', 'Danza de las Tijeras (Scissor Dance of Ayacucho, UNESCO heritage)', 'Huayno folk dance'],
      artFormsAndCrafts: ['Traditional backstrap loom textile weaving', 'Retablos Ayacuchanos (portable wooden altarpieces filled with miniature clay figures)', 'Chulucanas pottery', 'Cusco school religious painting'],
      livingPractices: 'Ayni communal reciprocity, offering payments to Mother Earth (Pago a la Tierra), and chewing coca leaves for high-altitude acclimatization.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Machu Picchu', location: 'Urubamba Valley, Cusco', description: '15th-century Inca royal citadel perched dramatically between two forested mountain peaks above the Urubamba river, undiscovered by Spanish conquistadors.', isUnesco: true },
        { name: 'Cusco Historic City & Sacsayhuamán', location: 'Cusco', description: 'The ancient capital of the Inca Empire, featuring colonial mansions built directly atop colossal earthquake-resistant Inca polygonal stone foundations.', isUnesco: true },
        { name: 'Nazca Lines', location: 'Ica Desert', description: 'Enormous ancient geoglyphs etched into the desert floor between 500 BCE and 500 CE, depicting giant hummingbirds, monkeys, spiders, and geometric shapes visible from airplanes.', isUnesco: true },
        { name: 'Uros Floating Islands of Lake Titicaca', location: 'Puno', description: 'Man-made floating reed islands constructed from buoyant totora reed roots by the indigenous Uros people.', isUnesco: false }
      ],
      unescoSitesCount: 13,
      naturalAttractions: ['Colca Canyon (one of the deepest canyons in the world, home to soaring Andean Condors)', 'Vinicunca (Rainbow Mountain with mineral striped ridges at 5,200m)', 'Huascarán National Park (highest tropical mountain range)', 'Manú National Park in the pristine Amazon basin']
    },

    interestingFacts: [
      'The Inca possessed no written phonetic alphabet; instead, they recorded complex statistical census data, taxation, and historical narratives using "Quipus"—intricate systems of knotted colored strings!',
      'Cusco was designed by Emperor Pachacuti in the physical outline shape of a sacred mountain Puma, with the stone fortress of Sacsayhuamán representing the puma’s head.',
      'The Amazon River officially begins in the high snowcapped peaks of the Peruvian Andes (Nevado Mismi) before flowing across Brazil to the Atlantic Ocean.',
      'The traditional Peruvian hairless dog (Viringo) is an ancient breed depicted on pre-Inca pottery dating back over 2,000 years, celebrated as national heritage.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A warm handshake with a smile; women greet friends with a light kiss on the right cheek.',
        'Showing deep respect when visiting sacred indigenous sites (Huacas) and Andean communities.',
        'When toasting, taking a moment to sprinkle a drop of your drink on the earth as an offering to Pachamama (Mother Earth).'
      ],
      familyTraditions: 'Communal family Sundays enjoying hot bowls of soup or ceviche, and celebrating child haircutting ceremonies (Landaruto) with godparents.',
      everydayCustoms: 'Sipping hot herbal Muña or Coca tea to warm up in chilly mountain evenings, buying fresh tropical fruits at bustling municipal markets.',
      modernLifestyle: 'Lima is recognized as the culinary capital of the Americas, boasting multiple restaurants ranked in the World’s 50 Best, alongside thriving surf culture.'
    },

    geography: {
      locationDescription: 'Western South American nation fronting the Pacific Ocean, bordered by Ecuador, Colombia, Brazil, Bolivia, and Chile.',
      climate: 'Three dramatically contrasting geographical zones: Costa (arid Pacific coastal desert), Sierra (Andean mountain highlands), and Selva (dense Amazon tropical rainforest).',
      majorFeatures: ['Andes Mountains (Cordillera Blanca)', 'Amazon Rainforest (covers 60% of Peru’s territory)', 'Lake Titicaca', 'Marañón and Ucayali rivers'],
      wildlife: ['Vicuña (National Animal, producing the world’s finest wool)', 'Andean Condor', 'Spectacled Bear (South America’s only native bear)', 'Jaguar', 'Giant Amazon River Otter'],
      naturalAttractionsSummary: 'One of only 17 megadiverse nations on Earth, spanning arid Pacific dunes to 6,000-meter glacier peaks and pristine Amazonian canopies.'
    },

    sources: [
      { title: 'PROMPERÚ – Commission for the Promotion of Peru for Export and Tourism', url: 'https://www.peru.travel' },
      { title: 'Ministerio de Cultura del Perú', url: 'https://www.gob.pe/cultura' },
      { title: 'UNESCO World Heritage Centre – Peru', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'colombia',
    slug: 'colombia',
    name: 'Colombia',
    officialName: 'Republic of Colombia (República de Colombia)',
    flagEmoji: '🇨🇴',
    capital: 'Bogotá',
    continent: 'South America',
    heroImage: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The radiant crossroads of two oceans, famed for world-renowned Arabica coffee hills, magical realism, salsa rhythms in Cali, and warm biodiversity.',
    taraGreeting: '¡Hola! Welcome to Colombia! Feel the tropical Caribbean breeze on the stone fortress walls of Cartagena! Did you know Colombia is the butterfly and bird capital of the world? Let’s explore lush green coffee fincas and discover Gabriel García Márquez’s world of magical realism!',
    taraFacts: [
      'Colombia is the most biodiverse country on Earth per square kilometer, home to nearly 2,000 species of birds—more than Europe and North America combined!',
      'The Cocora Valley in Colombia is home to the Quindío Wax Palm, the tallest palm tree species in the world, growing up to 60 meters (200 ft) tall!',
      'Caño Cristales in the Serranía de la Macarena is known as the "River of Five Colors" or the "Liquid Rainbow", where aquatic plants turn the river vibrant magenta, red, and emerald each year.'
    ],
    population: '52.2 Million',
    currency: 'Colombian Peso ($, COP)',
    languagesSummary: 'Spanish & 65 Indigenous languages, two Creole languages (Palenquero & San Andrés Creole), Romani',
    coordinates: { lat: 4.5709, lng: -74.2973 },

    history: {
      timeline: [
        { period: 'Pre-1499 CE', title: 'Muisca, Tayrona & Quimbaya Civilizations', description: 'Flourishing indigenous cultures masterfully crafting intricate lost-wax gold alloys (Tumbaga); the Muisca Golden Raft inspired the Spanish legend of El Dorado.' },
        { period: '1533 CE', title: 'Founding of Cartagena & Santa Marta', description: 'Key fortified Caribbean ports guarding gold exports from the Spanish Main with stone fortresses and bastions.' },
        { period: '1819 CE', title: 'Battle of Boyacá & Gran Colombia', description: 'Simón Bolívar defeated royalist armies to establish the Republic of Gran Colombia, uniting present-day Colombia, Venezuela, Ecuador, and Panama.' },
        { period: '1967 CE', title: 'One Hundred Years of Solitude', description: 'Gabriel García Márquez published his masterpiece of magical realism, cementing Colombian literary culture globally and winning the Nobel Prize in 1982.' }
      ],
      majorCivilizations: ['Muisca Confederation', 'Tayrona', 'Quimbaya', 'Sinú (Zenú)', 'San Agustín Culture', 'Gran Colombia'],
      importantEventsSummary: 'A resilient nation transforming past conflicts into a celebrated global hub for eco-tourism, contemporary art (Fernando Botero), and scientific preservation.',
      culturalHeritage: '9 UNESCO World Heritage Sites including Coffee Cultural Landscape, Port and Monuments of Cartagena, and Chiribiquete National Park.'
    },

    languages: {
      official: ['Spanish', 'Indigenous and Creole languages (official in their territories)'],
      widelySpoken: ['Colombian Spanish (renowned throughout the Spanish-speaking world for clear diction and elegance)'],
      regional: ['Wayuunaiki (Guajira peninsula)', 'Nasa Yuwe', 'Embera', 'Palenquero (the only Spanish-Bantu creole language in the Americas)', 'San Andrés Creole'],
      linguisticDiversityNotes: 'San Basilio de Palenque, founded by escaped enslaved Africans led by Benkos Biohó in the 17th century, preserved Palenquero, recognized as UNESCO Intangible Heritage.',
      commonPhrases: [
        { phrase: '¡Hola! ¿Cómo estás?', meaning: 'Hello! How are you?', pronunciation: 'OH-lah KOH-moh ess-TAHS' },
        { phrase: 'Con mucho gusto', meaning: 'With great pleasure / You are very welcome', pronunciation: 'kohn MOO-choh GOOS-toh' },
        { phrase: '¡Qué chimba!', meaning: 'Awesome! / Cool! (Friendly Colombian youth slang)', pronunciation: 'keh CHEEM-bah' },
        { phrase: 'Muchas gracias', meaning: 'Thank you very much', pronunciation: 'MOO-chahs GRAH-syahs' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Bandeja Paisa', localName: 'Bandeja Paisa', description: 'Massive platter featuring grilled steak, crispy pork belly (chicharrón), chorizo sausage, white rice, red beans, fried egg, fried sweet plantain, avocado, and an arepa corn cake.', tag: 'Hearty Showstopper' },
        { name: 'Ajiaco Santafereño', localName: 'Ajiaco', description: 'Comforting chicken and potato soup cooked with three distinct varieties of Andean potatoes, fresh corn on the cob, flavored with the wild herb guascas, and topped with capers and cream.', tag: 'Bogotá Comfort' },
        { name: 'Arepas Colombianas', localName: 'Arepa de Choclo / Arepa con Queso', description: 'Griddled round corn patties made from sweet sweet corn or white corn flour, slathered in butter and stuffed with melted salty farmer’s cheese.', tag: 'Everyday Staple' },
        { name: 'Coffee (Café de Colombia)', localName: 'Tinto', description: 'Hand-picked, high-altitude 100% Arabica coffee, enjoyed black and sweet in small cups called "tinto" throughout the day.', tag: 'World-Renowned Brew' }
      ],
      popularIngredients: ['Corn (Maíz)', 'Plantains (Plátanos)', 'Panela (unrefined cane sugar)', 'Guascas herb', 'Avocado', 'Arabica coffee', 'Yuca', 'Chicharrón'],
      foodCustoms: 'Drinking hot chocolate with a chunk of fresh salty farmer’s cheese dropped right into the mug to melt (Chocolate con Queso) for breakfast or afternoon merienda.',
      regionalSpecialties: 'The Caribbean coast is famous for coconut rice, fried snapper, and arepas de huevo; the Coffee Triangle (Eje Cafetero) for mountain trout and sancocho stews.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Sombrero Vueltiao', description: 'Iconic black-and-beige braided hat woven from dried caña flecha palm leaves using ancient Zenú indigenous geometric weaving.', significance: 'Official cultural symbol of Colombian national identity.' },
        { name: 'Ruana Colombiana', description: 'Thick, undyed virgin sheep’s wool poncho with a central head opening, handwoven in Boyacá to shield against Andean mountain chills.', significance: 'Traditional everyday wear of Andean highland farmers.' },
        { name: 'Mochila Wayuu', description: 'Intricately crocheted colorful shoulder bags handcrafted by Wayuu indigenous women of the desert La Guajira peninsula.', significance: 'Celebrated globally for vibrant geometric storytelling patterns.' }
      ],
      culturalSignificance: 'The colorful ruffled Pollera Colorá dress worn by cumbia dancers represents the rhythmic historical dialogue between African rhythm, indigenous flutes, and Spanish dresses.',
      regionalVariations: 'White linen Guayabera shirts along the Caribbean coast; colorful flower-saddle carrier garments (Silletas) in Medellín.',
      occasionsWorn: 'Barranquilla Carnival, Medellín Flower Festival (Feria de las Flores), National Independence Day, and village patron saint fairs.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Carnaval de Barranquilla', seasonOrDate: 'Four days before Ash Wednesday', description: 'The second-largest carnival in South America, inscribed by UNESCO: a vibrant explosion of cumbia, marimonda costumed jokers, and garabato dancers.', tradition: 'Batalla de Flores (Battle of Flowers) parade float contest.' },
        { name: 'Feria de las Flores (Medellín)', seasonOrDate: 'August (Medellín)', description: 'Spectacular Flower Festival where silletero farmers carry colossal floral mosaic saddles weighing up to 80 kilos on their backs through the city streets.', tradition: 'Parade of the Silleteros carrying monumental flower mosaics.' },
        { name: 'Cali Salsa Fair (Feria de Cali)', seasonOrDate: 'December 25–30 (Cali)', description: 'Cali is the "World Capital of Salsa", hosting non-stop street concerts, the Salsódromo parade of 1,000 professional dancers, and marathon dance parties.', tradition: 'Watching acrobatic, lightning-fast Cali-style salsa footwork.' }
      ],
      seasonalCelebrations: 'Pastos’ Carnaval de Negros y Blancos in January, celebrating racial unity through cosmetic body paint and grease; Holy Week in Popayán.',
      culturalContext: 'Infused with infectious warmth, hospitality, musical rhythm, and immense pride in community resilience and regional heritage.',
      howPeopleCelebrate: 'Dancing Cumbia and Vallenato with friends, drinking aguardiente aniseed spirit, and welcoming visitors with "¡Mi casa es su casa!".'
    },

    arts: {
      traditionalMusic: 'Cumbia (the mother rhythm of Colombia), Vallenato with accordion (UNESCO heritage), Salsa Caleña, Champeta, and Andean Bambuco.',
      danceForms: ['Cumbia (candlelit courtship dance)', 'Salsa Caleña (acrobatic footwork)', 'Mapalé (frenetic Afro-Colombian drum dance)', 'Joropo plains dance'],
      artFormsAndCrafts: ['Sombrero Vueltiao weaving', 'Wayuu and Arhuaco mochila bags', 'Pre-Columbian gold replication', 'Sculptures and paintings of Fernando Botero'],
      livingPractices: 'Playing Tejo (indigenous sport throwing metal discs at gunpowder targets), sipping morning tintos, and chatting warmly with street fruit vendors.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Historic Walled City of Cartagena', location: 'Cartagena de Indias', description: 'Magnificent 16th-century Spanish colonial seaport surrounded by 11 kilometers of coral stone ramparts and the Castillo San Felipe fortress.', isUnesco: true },
        { name: 'Coffee Cultural Landscape (Eje Cafetero)', location: 'Caldas, Quindío, Risaralda', description: 'Verdant rolling Andean mountain hills terraced with Arabica coffee trees, colorful wooden balcony haciendas, and wax palm forests.', isUnesco: true },
        { name: 'Cocora Valley (Valle de Cocora)', location: 'Salento, Quindío', description: 'Surreal cloud forest valley featuring towering Quindío Wax Palms—the world’s tallest palms—rising up to 60 meters amidst grazing horses.', isUnesco: true },
        { name: 'Sanctuary of Las Lajas', location: 'Ipiales, Nariño', description: 'Dramatic neo-Gothic basilica built daringly across the canyon of the Guáitara River, linked by a monumental 50-meter stone bridge.', isUnesco: false }
      ],
      unescoSitesCount: 9,
      naturalAttractions: ['Caño Cristales ("The River of Five Colors")', 'Tayrona National Natural Park (where rainforest meets Caribbean granite boulders)', 'Chiribiquete National Park (tepui table-top mountains with 75,000 ancient rock paintings)', 'San Andrés and Providencia coral barrier reefs']
    },

    interestingFacts: [
      'Colombia is the only country in South America with coastlines on both the Pacific Ocean and the Caribbean Sea.',
      'The traditional sport of Tejo, officially recognized as the National Sport of Colombia, dates back over 500 years to the Muisca civilization—players throw a heavy metal puck (tejo) into a clay box to detonate tiny envelopes of gunpowder!',
      'Colombia produces the world’s most sought-after, radiant emeralds, accounting for over 70% of the world’s high-quality gem market.',
      'Colombia has no distinct winter or summer seasons; its climate is determined entirely by altitude, ranging from "Tierra Caliente" at sea level to "Tierra Fría" in Bogotá.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A warm, courteous handshake; women greet acquaintances with a soft kiss on the right cheek.',
        'Colombians are celebrated for polite manners, using phrases like "Con mucho gusto" (with pleasure) and "A la orden" (at your service).',
        'Punctuality can be relaxed in social settings, but warmth, generosity, and respect are taken very seriously.'
      ],
      familyTraditions: 'Sunday family sancocho stew lunches, celebrating Quinceañeras, and gathering for December Novenas leading up to Christmas with natilla and buñuelos.',
      everydayCustoms: 'Stopping at street corner stalls for freshly squeezed lulo or passion fruit juice, drinking tinto coffee throughout the workday.',
      modernLifestyle: 'Medellín has transformed into one of the world’s most innovative smart cities with public cable car metro systems, thriving digital nomad hubs, and global music stars (Shakira, J Balvin, Karol G).'
    },

    geography: {
      locationDescription: 'Northwestern South American nation connecting South America to Central America, bordered by Panama, Venezuela, Brazil, Peru, and Ecuador.',
      climate: 'Varies by altitude: hot and tropical on the Caribbean and Pacific coasts, temperate in the Andean valleys (Medellín is the "City of Eternal Spring"), and cool in high Bogotá (2,640m).',
      majorFeatures: ['The Andes Mountains (splitting into three distinct cordilleras: Western, Central, Eastern)', 'Amazon Basin', 'Orinoco Llanos plains', 'Magdalena and Cauca rivers'],
      wildlife: ['Andean Condor', 'Spectacled Bear', 'Pink Amazon Dolphin', 'Golden Poison Frog (world’s most poisonous animal)', 'Over 1,900 bird species'],
      naturalAttractionsSummary: 'Astonishing ecological richness ranging from Caribbean coral reefs and Pacific whale breeding grounds to snowcapped Andean volcanoes and Amazon jungles.'
    },

    sources: [
      { title: 'ProColombia (Colombia Travel)', url: 'https://colombia.travel' },
      { title: 'Ministerio de Comercio, Industria y Turismo', url: 'https://www.mincit.gov.co' },
      { title: 'UNESCO World Heritage Centre – Colombia', url: 'https://whc.unesco.org' }
    ]
  }
];
