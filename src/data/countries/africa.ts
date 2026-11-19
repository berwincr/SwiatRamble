import { Country } from '../../types/country';

export const africaCountries: Country[] = [
  {
    id: 'egypt',
    slug: 'egypt',
    name: 'Egypt',
    officialName: 'Arab Republic of Egypt (Jumhuriyat Misr al-Arabiyah)',
    flagEmoji: '🇪🇬',
    capital: 'Cairo',
    continent: 'Africa',
    heroImage: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The gift of the Nile, where monumental pharaonic pyramids, golden treasures of Tutankhamun, and bustling Islamic medieval bazaars inspire the world.',
    taraGreeting: 'Marhaban! Welcome to Egypt! Close your eyes and imagine the great Pharaohs sailing down the timeless Nile River! Let’s stand before the Great Sphinx, decipher sacred hieroglyphs, and discover 5,000 years of wonders!',
    taraFacts: [
      'The Great Pyramid of Giza was the tallest human-made structure in the world for over 3,800 years until Lincoln Cathedral was built in England in 1311!',
      'Ancient Egyptians invented one of the earliest systems of writing (hieroglyphs), 365-day solar calendar calendars, and paper made from papyrus reeds.',
      'The Nile River is the longest river in Africa, stretching over 6,650 kilometers (4,130 miles) from Lake Victoria down to the Mediterranean Sea.'
    ],
    population: '112.7 Million',
    currency: 'Egyptian Pound (E£, EGP)',
    languagesSummary: 'Arabic (Modern Standard Arabic & Egyptian Arabic / Masri)',
    coordinates: { lat: 26.8206, lng: 30.8025 },
    featured: true,

    history: {
      timeline: [
        { period: 'c. 3100 BCE', title: 'Unification of Upper & Lower Egypt', description: 'King Narmer united the two lands, founding the First Dynasty with its capital at Memphis.' },
        { period: 'c. 2686–2181 BCE', title: 'Old Kingdom (The Age of Pyramids)', description: 'Architect Imhotep built the Step Pyramid of Djoser, followed by the monumental Great Pyramids of Giza by Pharaohs Khufu, Khafre, and Menkaure.' },
        { period: 'c. 1550–1077 BCE', title: 'New Kingdom (The Golden Age)', description: 'Peak of Egyptian imperial power with Queen Hatshepsut, Akhenaten, Tutankhamun, and Ramses the Great constructing Abu Simbel and Karnak.' },
        { period: '332–30 BCE', title: 'Ptolemaic Dynasty & Alexandria', description: 'Founded by Alexander the Great; construction of the Library of Alexandria and Lighthouse of Pharos, ending with Queen Cleopatra VII.' },
        { period: '969 CE', title: 'Fatimid Dynasty & Founding of Cairo', description: 'Founding of Al-Qahira (Cairo) and Al-Azhar University, one of the oldest continuously operating universities on Earth.' }
      ],
      majorCivilizations: ['Predynastic Naqada', 'Pharaonic Dynasties (Old, Middle, New Kingdoms)', 'Ptolemaic Kingdom', 'Roman & Byzantine Aegyptus', 'Islamic Caliphates', 'Mamluk & Ottoman eras'],
      importantEventsSummary: 'A civilization whose monumental stone architecture, medical papyri, religious beliefs in eternal afterlife, and agricultural irrigation shaped human civilization.',
      culturalHeritage: '7 UNESCO World Heritage Sites including Memphis and its Necropolis (Pyramids of Giza), Historic Cairo, and Ancient Thebes (Luxor).'
    },

    languages: {
      official: ['Arabic'],
      widelySpoken: ['Egyptian Arabic (Masri - the most widely understood dialect in the Arab world through cinema and music)'],
      regional: ['Sa’idi Arabic (Upper Egypt)', 'Nubian languages', 'Siwi Berber (Siwa Oasis)', 'Beja language'],
      linguisticDiversityNotes: 'Coptic, the liturgical language of the Coptic Orthodox Church, represents the direct grammatical descendant of ancient spoken Egyptian written with Greek letters.',
      commonPhrases: [
        { phrase: 'Ahlan wa Sahlan', meaning: 'Welcome', pronunciation: 'AH-lan wah SAH-lan' },
        { phrase: 'Shukran', meaning: 'Thank you', pronunciation: 'SHOOK-ran' },
        { phrase: 'Sabah al-khayr', meaning: 'Good morning', pronunciation: 'sah-BAH ahl-KHYR' },
        { phrase: 'Min fadlak / fadlik', meaning: 'Please (to male/female)', pronunciation: 'min FAHD-lahk' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Koshary', localName: 'كشري', description: 'Beloved national dish layering spiced lentils, rice, macaroni noodles, and chickpeas, smothered in garlicky tomato sauce and topped with crispy fried onions.', tag: 'National Soul Food' },
        { name: 'Ful Medames', localName: 'فول مدمس', description: 'Ancient slow-cooked fava beans mashed with extra virgin olive oil, cumin, lemon juice, garlic, and tahini, served with warm pita bread (eish baladi).', tag: 'Pharaonic Staple' },
        { name: 'Ta’ameya (Egyptian Falafel)', localName: 'طعمية', description: 'Crisp green patties crafted from ground dried fava beans and fresh herbs (dill, parsley, coriander) rolled in sesame seeds and fried golden.', tag: 'Crisp Breakfast' },
        { name: 'Umm Ali', localName: 'أم علي', description: 'Decadent baked dessert of flaky puff pastry soaked in sweetened spiced milk, topped with toasted nuts, raisins, and baked until bubbling golden.', tag: 'Royal Sweet' }
      ],
      popularIngredients: ['Fava beans', 'Cumin', 'Coriander', 'Tahini', 'Garlic', 'Molokhia (jute leaves)', 'Sesame seeds', 'Dates', 'Pita bread (Eish)'],
      foodCustoms: 'Bread is sacred in Egypt and is called "Eish", which translates directly to "Life". Meals are served with abundant pickles (torshi) and mint tea.',
      regionalSpecialties: 'Alexandria is renowned for fresh Mediterranean seafood and Alexandrian liver (kibda); Upper Egypt (Aswan) for dried dates and hibiscus tea (karkadeh).'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Galabeya', description: 'Ankle-length, loose-fitting cotton robe with wide sleeves, providing cooling air circulation in desert heat.', significance: 'Worn comfortably by both men and women across the Nile Valley and rural villages.' },
        { name: 'Shesh / Keffiyeh', description: 'Folded headscarf wrapped skillfully around the head and face to protect against sun and windblown desert sands.', significance: 'Practical and ceremonial headwear among Bedouin desert dwellers.' }
      ],
      culturalSignificance: 'Egyptian long-staple cotton (Giza cotton) is celebrated globally for its silk-like softness, exceptional strength, and luxurious breathability.',
      regionalVariations: 'Nubian colorful patterned robes and embroidered skullcaps in Aswan; Siwan women’s intricate silver-adorned bridal gowns.',
      occasionsWorn: 'Eid celebrations, Moulid festivals, wedding celebrations, and Friday prayers.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Sham En-Nessim (Smelling the Breeze)', seasonOrDate: 'Spring (Monday following Coptic Easter)', description: 'Ancient Pharaonic festival dating back over 4,500 years celebrating the arrival of spring; families picnic along the Nile eating colored eggs and salted fish (fesikh).', tradition: 'Picnicking by the Nile and coloring boiled eggs.' },
        { name: 'Ramadan and Eid al-Fitr', seasonOrDate: 'Ninth and tenth lunar months', description: 'Streets of Cairo come alive after sundown with glowing colorful metal lanterns (Fanous), family banquets, and lively midnight cafe gatherings.', tradition: 'Illuminating streets with intricate Fanous lanterns.' },
        { name: 'Sun Festival at Abu Simbel', seasonOrDate: 'February 22 & October 22', description: 'Astronomical phenomenon where the rising sun aligns perfectly through the temple entrance to illuminate the statues of Ramses II and the gods.', tradition: 'Witnessing solar alignment inside the inner rock sanctum.' }
      ],
      seasonalCelebrations: 'Wafaa El-Nil (Feast of the Nile) commemorating the ancient annual inundation that gave life to the desert.',
      culturalContext: 'Harmonious interweaving of thousands of years of Pharaonic river seasonal rites with Islamic and Coptic Christian devotions.',
      howPeopleCelebrate: 'Hanging colorful Ramadan lanterns across alleys, sharing massive communal charity banquets (Mawa’id al-Rahman), and listening to classical oud music.'
    },

    arts: {
      traditionalMusic: 'Classical Arabic music featuring the oud lute, nay bamboo flute, and qanun zither; songs of legendary diva Umm Kulthum and folk Saiyidi drums.',
      danceForms: ['Tanoura whirling dervish dance', 'Raqs Sharqi (oriental classical dance)', 'Tahtib (ancient Egyptian stick dancing)'],
      artFormsAndCrafts: ['Papyrus painting', 'Alabaster stone carving of Luxor', 'Mother-of-pearl wooden marquetry', 'Khan el-Khalili brass and copper lanterns'],
      livingPractices: 'Gathering at historic Ahwa street cafes to sip sweet mint tea or Turkish coffee while playing backgammon (tawla).'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Pyramids of Giza & Great Sphinx', location: 'Giza Plateau, Cairo', description: 'The only surviving wonder of the ancient world; monumental limestone pyramids built for Pharaoh Khufu guarded by the colossal lion-bodied Sphinx.', isUnesco: true },
        { name: 'Karnak & Luxor Temples', location: 'Luxor (Ancient Thebes)', description: 'The largest religious temple complex ever constructed, featuring the towering Great Hypostyle Hall with 134 colossal sandstone columns.', isUnesco: true },
        { name: 'Abu Simbel Temples', location: 'Aswan Governorate', description: 'Twin colossal rock-cut temples carved into a sandstone cliff in Nubia by Ramses II, rescued from rising lake waters in a heroic UNESCO relocation.', isUnesco: true },
        { name: 'Valley of the Kings', location: 'Luxor West Bank', description: 'Subterranean royal rock tombs carved into desert cliffs featuring brilliantly preserved mythological frescoes and the tomb of Tutankhamun.', isUnesco: true }
      ],
      unescoSitesCount: 7,
      naturalAttractions: ['Red Sea Coral Reefs (Ras Mohammed & Sharm El-Sheikh)', 'White Desert National Park (wind-carved chalk mushroom rock formations)', 'Siwa Oasis natural springs and palm groves', 'Mount Sinai (Jebel Musa)']
    },

    interestingFacts: [
      'Ancient Egyptian women enjoyed legal rights far ahead of their time, including owning property, initiating divorce, and serving as rulers (pharaohs).',
      'The Great Pyramid was originally covered in polished white Tura limestone casing stones that reflected the sunlight like a gleaming mirror.',
      'Egyptians were the first to domesticate cats (Mau), revering them as sacred protectors of grain stores and earthly embodiments of the goddess Bastet.',
      'Cairo is known as the "City of a Thousand Minarets" due to its dense concentration of historic Islamic architecture and mosques.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A warm handshake with a smile, often placing the right hand on the chest to indicate sincerity.',
        'Always accepting at least one glass of hot tea when invited into someone’s shop or home.',
        'Never using the left hand to eat or hand someone money.'
      ],
      familyTraditions: 'Extended families maintain deep daily ties; Friday is the sacred weekend day for family gatherings and communal prayers.',
      everydayCustoms: 'Haggling with friendly banter at local souks, hopping on traditional felucca sailboats at sunset on the Nile, and enjoying fresh sugarcane juice (Asab).',
      modernLifestyle: 'A bustling megacity with new satellite tech cities, vibrant film and music production studios, and bustling 24-hour street life.'
    },

    geography: {
      locationDescription: 'Transcontinental nation linking Northeast Africa with Southwest Asia via the Sinai Peninsula, bordering the Mediterranean and Red Seas.',
      climate: 'Arid desert climate with scorching dry summers, mild winters, and rare rainfall; moderated along northern Mediterranean coastal fringes.',
      majorFeatures: ['Nile River Valley and Delta', 'Sinai Peninsula', 'Eastern Desert and Western Desert', 'Lake Nasser reservoir'],
      wildlife: ['Fennec Fox', 'Egyptian Cobra', 'Nubian Ibex', 'Nile Crocodile', 'Dugong (in Red Sea seagrass meadows)'],
      naturalAttractionsSummary: 'A stark and beautiful contrast between vibrant green irrigated riverbanks and endless golden Saharan sand dunes.'
    },

    sources: [
      { title: 'Ministry of Tourism and Antiquities, Egypt', url: 'https://egymonuments.gov.eg' },
      { title: 'Egyptian Tourism Authority', url: 'https://experienceegypt.eg' },
      { title: 'UNESCO World Heritage Centre – Egypt', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'kenya',
    slug: 'kenya',
    name: 'Kenya',
    officialName: 'Republic of Kenya (Jamhuri ya Kenya)',
    flagEmoji: '🇰🇪',
    capital: 'Nairobi',
    continent: 'Africa',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The heart of East African wildlife safaris, dramatic Great Rift Valley vistas, world-champion distance runners, and rich Maasai cultural heritage.',
    taraGreeting: 'Jambo! Welcome to Kenya! "Hakuna Matata" means no worries! Picture herds of gentle elephants walking beneath snow-capped Mount Kilimanjaro, and the Great Migration crossing golden savannah plains! Let’s ramble together!',
    taraFacts: [
      'The Great Wildebeest Migration in Kenya’s Maasai Mara is recognized as one of the Seven Natural Wonders of Africa, with over 1.5 million animals on the move!',
      'Kenya’s Kalenjin community has produced more world-record marathoners and middle-distance Olympic gold medalists than any other group in history!',
      'Nairobi is the only capital city on Earth that borders a true wilderness national park with free-roaming lions, black rhinos, and giraffes right against city skyscrapers.'
    ],
    population: '55.1 Million',
    currency: 'Kenyan Shilling (KSh, KES)',
    languagesSummary: 'Swahili (Kiswahili) & English (Official), Kikuyu, Luhya, Luo, Kalenjin, Maasai',
    coordinates: { lat: -0.0236, lng: 37.9062 },

    history: {
      timeline: [
        { period: 'c. 2 Million BCE', title: 'Cradle of Humankind', description: 'Early hominid fossil discoveries at Lake Turkana by Dr. Richard Leakey (Homo habilis, Turkana Boy).' },
        { period: 'c. 1st–15th Century', title: 'Swahili Coast Trade', description: 'Coastal city-states like Lamu and Mombasa traded gold, ivory, and spices with Arab, Persian, and Indian merchants, developing the Swahili language.' },
        { period: '1895–1963 CE', title: 'Colonial Era & Uganda Railway', description: 'Construction of the "Lunatic Express" railway from Mombasa inland to Lake Victoria, founding the capital city of Nairobi in 1899.' },
        { period: '1952–1960 CE', title: 'Mau Mau Uprising', description: 'Armed rebellion against colonial land alienation, leading to national independence under Jomo Kenyatta on December 12, 1963.' }
      ],
      majorCivilizations: ['Early Hominids of Turkana', 'Swahili Merchant Sultanates', 'Maasai, Kikuyu, Luo, and Somali communities', 'Modern Republic'],
      importantEventsSummary: 'A legacy bridging ancient evolutionary roots of humanity, vibrant Indian Ocean maritime trade, and community-led wildlife conservation.',
      culturalHeritage: '7 UNESCO World Heritage Sites including Lamu Old Town, Fort Jesus in Mombasa, and Mount Kenya National Park.'
    },

    languages: {
      official: ['Swahili (Kiswahili)', 'English'],
      widelySpoken: ['Swahili', 'Sheng (urban youth slang dialect of Nairobi)', 'English'],
      regional: ['Gikuyu (Kikuyu)', 'Luhya', 'Dholuo (Luo)', 'Kalenjin', 'Kamba', 'Maa (Maasai)'],
      linguisticDiversityNotes: 'Swahili is a rich Bantu language with Arab, Persian, and Portuguese loanwords that serves as the unifying East African trade and cultural bridge.',
      commonPhrases: [
        { phrase: 'Jambo / Habari', meaning: 'Hello / How are you?', pronunciation: 'JAHM-boh / hah-BAH-ree' },
        { phrase: 'Asante sana', meaning: 'Thank you very much', pronunciation: 'ah-SAHN-teh SAH-nah' },
        { phrase: 'Karibu', meaning: 'Welcome', pronunciation: 'kah-REE-boo' },
        { phrase: 'Hakuna matata', meaning: 'No worries / No problems', pronunciation: 'hah-KOO-nah mah-TAH-tah' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Ugali with Sukuma Wiki', localName: 'Ugali na Sukuma Wiki', description: 'Dense, comforting cornmeal porridge shaped into a ball by hand and indented to scoop up braised collard greens, onions, and tomatoes.', tag: 'National Lifeline' },
        { name: 'Nyama Choma', localName: 'Nyama Choma', description: 'Succulent goat or beef slow-roasted over open charcoal coals, sliced into bite-sized pieces and served with fresh kachumbari tomato-onion salad.', tag: 'Beloved Barbecue' },
        { name: 'Kachumbari', localName: 'Kachumbari', description: 'Zesty salad of diced ripe tomatoes, red onions, fresh cilantro, fiery pili-pili chili peppers, and fresh lime juice.', tag: 'Fresh Zest' },
        { name: 'Mandazi & Chai', localName: 'Mandazi', description: 'Golden, cardamom-scented triangular fried sweet bread, paired with steaming spiced Kenyan milk tea brewed with fresh ginger.', tag: 'Morning Ritual' }
      ],
      popularIngredients: ['Maize flour (unga)', 'Collard greens (sukuma wiki)', 'Goat meat', 'Black tea leaves', 'Coconut milk', 'Ginger', 'Cardamom', 'Pili-pili peppers'],
      foodCustoms: 'Sharing food is central to hospitality. Ugali is eaten with the fingers of the right hand, rolling a small ball and pressing an indentation into the center to scoop up stew.',
      regionalSpecialties: 'The Swahili Coast is famous for fragrant Biryani Ya Kuku, coconut fish curries, and cassava chips; Central highlands love Mukimo (mashed potatoes, corn, and pumpkin leaves).'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Shúkà', description: 'Vibrant rectangular draped blanket woven in bold red, blue, and black plaid geometric patterns.', significance: 'Traditional attire of the Maasai and Samburu pastoralists, believed to deter savannah predators.' },
        { name: 'Kanga & Kitenge', description: 'Colorful printed cotton fabric wraps featuring vibrant patterns and printed Swahili proverbs (jina) along the bottom border.', significance: 'Worn gracefully by women as headscarves, skirts, or baby slings.' }
      ],
      culturalSignificance: 'Maasai beadwork (Enkanyitie) uses glass beads where every color has deep meaning: red for courage and blood, white for peace, blue for sky/rain, and yellow for hospitality.',
      regionalVariations: 'Swahili women’s black buibui cloaks on the coast; Turkana women’s towering tiered multi-strand beaded necklaces.',
      occasionsWorn: 'Maasai Eunoto coming-of-age ceremonies, Jamhuri Day (Independence Day), and weddings.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Jamhuri Day (Republic Day)', seasonOrDate: 'December 12', description: 'National holiday commemorating the founding of the republic with military flypasts, cultural dance performances at stadiums, and family feasts.', tradition: 'Parades, speeches, and patriotic cultural dances.' },
        { name: 'Lamu Cultural Festival', seasonOrDate: 'November (Lamu Island)', description: 'Celebration of ancient Swahili culture with traditional dhow sailing regattas, donkey races through narrow streets, and henna painting.', tradition: 'Thrilling dhow boat races on the Indian Ocean.' },
        { name: 'Lake Turkana Cultural Festival', seasonOrDate: 'May (Loiyangalani)', description: 'Brings together 14 ethnic communities around the jade sea of Lake Turkana with elaborate singing, dancing, and traditional costumes.', tradition: 'Inter-tribal dance ceremonies promoting regional peace.' }
      ],
      seasonalCelebrations: 'The Great Migration between July and October, drawing wildlife enthusiasts and naturalists from across the globe.',
      culturalContext: 'Rooted in the spirit of "Harambee" (meaning "Let us pull together" in Swahili), the national motto of community mutual self-help.',
      howPeopleCelebrate: 'Cooking large batches of Nyama Choma, singing choral and gospel music, and gathering multi-generational families.'
    },

    arts: {
      traditionalMusic: 'Benga music (energetic guitar-driven rhythm from the Lake Victoria basin), Swahili Taarab coastal music, and Maasai rhythmic vocal chanting (Adumu).',
      danceForms: ['Adumu (Maasai jumping dance)', 'Isukuti dance of the Luhya (UNESCO heritage)', 'Chakacha coastal hip-swaying dance'],
      artFormsAndCrafts: ['Maasai beadwork jewelry', 'Kisii soapstone carvings', 'Akamba fine wood carvings', 'Kiondo handwoven sisal baskets'],
      livingPractices: 'Harambee community fundraising, wilderness wildlife tracking, and running high-altitude training camps in Iten ("Home of Champions").'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Maasai Mara National Reserve', location: 'Narok County', description: 'World-famous open savannah ecosystem hosting the annual Great Migration, endless lions, leopards, and cheetahs.', isUnesco: false },
        { name: 'Mount Kenya', location: 'Central Kenya', description: 'Second-highest peak in Africa at 5,199 meters; an extinct stratovolcano with rugged glacier-clad peaks and alpine Afro-alpine flora.', isUnesco: true },
        { name: 'Lamu Old Town', location: 'Lamu Island, Swahili Coast', description: 'The oldest and best-preserved Swahili settlement in East Africa, built from coral stone and mangrove timber with no cars allowed.', isUnesco: true },
        { name: 'Great Rift Valley Viewpoint', location: 'Nakuru / Naivasha', description: 'Vast tectonic geological trench visible from space, containing pink-fringed flamingo lakes and volcanic craters.', isUnesco: true }
      ],
      unescoSitesCount: 7,
      naturalAttractions: ['Amboseli National Park (iconic views of elephants beneath Mount Kilimanjaro)', 'Lake Nakuru (millions of pink flamingos and rhinos)', 'Diani Beach (powdery white sands on the Indian Ocean)', 'Hell’s Gate National Park']
    },

    interestingFacts: [
      'Kenya pioneered mobile money across the developing world with M-PESA in 2007, allowing anyone to send money or pay bills instantly with basic phones!',
      'In 2017, Kenya enacted the world’s strictest ban on single-use plastic carrier bags, drastically cleaning up cities and protecting wildlife.',
      'Mount Kenya has equator-crossing snow and equatorial glaciers, where snow falls directly on the geographic zero-latitude line!',
      'The Great Rift Valley was formed over 20 million years ago by the splitting of the African tectonic plate.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A warm, prolonged handshake, often resting the left hand on the right forearm as a sign of respect for elders.',
        'Always asking about family and health before diving into business conversations.',
        'Never rushing a greeting—friendly conversation is a sign of good character.'
      ],
      familyTraditions: 'Extended family networks support school fees and major life milestones through organized Harambee community collections.',
      everydayCustoms: 'Taking an afternoon tea break with milk tea and mandazi, catching matatus (privately owned minibuses decorated with neon lights and blasting music).',
      modernLifestyle: 'Known as the "Silicon Savannah" for its thriving tech startups, mobile banking innovations, and energetic urban youth culture in Nairobi.'
    },

    geography: {
      locationDescription: 'Equatorial country in East Africa with a coast on the Indian Ocean, bisected by the equator and the Great Rift Valley.',
      climate: 'Varies from tropical coastal humidity to arid and semi-arid desert in the north, and cool, temperate highland conditions around Nairobi and Mount Kenya.',
      majorFeatures: ['Great Rift Valley', 'Mount Kenya', 'Lake Victoria (Africa’s largest lake)', 'Tana River (longest river in Kenya)'],
      wildlife: ['The Big Five: African Lion, Leopard, African Elephant, Black Rhinoceros, Cape Buffalo', 'Cheetah', 'Giraffe', 'Wildebeest'],
      naturalAttractionsSummary: 'Pristine Indian Ocean coral reefs, rolling golden savannahs, high alpine glaciers, and jade-green soda lakes.'
    },

    sources: [
      { title: 'Kenya Tourism Board (Magical Kenya)', url: 'https://magicalkenya.com' },
      { title: 'National Museums of Kenya', url: 'https://museums.or.ke' },
      { title: 'UNESCO World Heritage Centre – Kenya', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'south-africa',
    slug: 'south-africa',
    name: 'South Africa',
    officialName: 'Republic of South Africa',
    flagEmoji: '🇿🇦',
    capital: 'Pretoria (Exec), Cape Town (Legis), Bloemfontein (Judic)',
    continent: 'Africa',
    heroImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The "Rainbow Nation", where Table Mountain meets two oceans, world-class Cape vineyards thrive, and wildlife roams vast Kruger bushveld.',
    taraGreeting: 'Sawubona! Welcome to South Africa! From the flat-topped summit of Table Mountain overlooking two oceans to the deep human roots of Ubuntu ("I am because we are"), South Africa’s warmth and diversity will inspire you!',
    taraFacts: [
      'South Africa has 12 official languages, reflecting its vibrant multicultural title as the "Rainbow Nation" coined by Archbishop Desmond Tutu!',
      'The Cape Floral Kingdom at the southern tip of Africa contains over 9,000 plant species, 70% of which grow nowhere else on Earth.',
      'The world’s largest diamond, the 3,106-carat Cullinan Diamond, was discovered in South Africa in 1905 and is now part of the British Crown Jewels.'
    ],
    population: '62.0 Million',
    currency: 'South African Rand (R, ZAR)',
    languagesSummary: 'isiZulu, isiXhosa, Afrikaans, English, Sepedi, Setswana, Sesotho, Xitsonga, siSwati, Tshivenda, isiNdebele, SASL (12 official)',
    coordinates: { lat: -30.5595, lng: 22.9375 },

    history: {
      timeline: [
        { period: 'Pre-history', title: 'Cradle of Humankind & San Rock Art', description: 'Fossil sites in Sterkfontein (Mrs. Ples) and indigenous San hunter-gatherers creating thousands of rock paintings in the Drakensberg.' },
        { period: 'c. 11th–13th Century', title: 'Kingdom of Mapungubwe', description: 'Sophisticated indigenous southern African trading kingdom in the Limpopo Valley trading gold and ivory with China and India.' },
        { period: '1652 CE', title: 'Dutch & British Colonial Enclaves', description: 'Jan van Riebeeck founded the Dutch East India Company replenishment station at Cape Town; subsequent British takeover in 1806.' },
        { period: '1879 CE', title: 'Anglo-Zulu War', description: 'King Cetshwayo and the Zulu kingdom defeated British forces at the Battle of Isandlwana before eventual annexation.' },
        { period: '1994 CE', title: 'End of Apartheid & Nelson Mandela', description: 'First democratic non-racial elections held on April 27, 1994, inaugurating anti-apartheid hero Nelson Mandela as President.' }
      ],
      majorCivilizations: ['San and Khoekhoe', 'Kingdom of Mapungubwe', 'Zulu Kingdom', 'Xhosa polities', 'Democratic Rainbow Nation'],
      importantEventsSummary: 'A triumphant journey from colonial oppression and the racist apartheid system to a celebrated constitutional democracy guided by human rights and forgiveness.',
      culturalHeritage: '10 UNESCO World Heritage Sites including Robben Island, Cradle of Humankind, and Maloti-Drakensberg Park.'
    },

    languages: {
      official: ['isiZulu', 'isiXhosa', 'Afrikaans', 'English', 'Sepedi', 'Setswana', 'Sesotho', 'Xitsonga', 'siSwati', 'Tshivenda', 'isiNdebele', 'South African Sign Language'],
      widelySpoken: ['isiZulu (most spoken home language)', 'isiXhosa (famous for its expressive click consonants)', 'Afrikaans', 'English'],
      regional: ['Khoisan languages', 'Fanagalo'],
      linguisticDiversityNotes: 'isiXhosa and isiZulu belong to the Nguni language group and feature three primary click consonants: dental (c), postalveolar (q), and lateral (x).',
      commonPhrases: [
        { phrase: 'Sawubona', meaning: 'Hello / I see you (Zulu)', pronunciation: 'sah-woo-BOH-nah' },
        { phrase: 'Molo', meaning: 'Hello (Xhosa)', pronunciation: 'MOH-loh' },
        { phrase: 'Dankie', meaning: 'Thank you (Afrikaans)', pronunciation: 'DAHN-kee' },
        { phrase: 'Howzit!', meaning: 'How is it going? (Friendly local greeting)', pronunciation: 'HOW-zit' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Braai & Boerewors', localName: 'Braai', description: 'Traditional wood-fired barbecue featuring spiced minced beef-and-pork sausage spirals (boerewors), lamb chops, and grilled steaks.', tag: 'National Gathering' },
        { name: 'Bobotie', localName: 'Bobotie', description: 'Cape Malay baked dish of spiced minced beef flavored with curry, turmeric, dried apricots, topped with an egg-custard topping and bay leaves.', tag: 'Heritage Comfort' },
        { name: 'Bunny Chow', localName: 'Bunny Chow', description: 'Durban street food classic: a hollowed-out loaf of white bread filled to the brim with rich, fiery lamb, mutton, or bean curry.', tag: 'Durban Street Legend' },
        { name: 'Malva Pudding', localName: 'Malva Pudding', description: 'Warm, spongy apricot jam pudding soaked while hot in a rich cream-butter sauce, served with cold vanilla custard.', tag: 'Beloved Dessert' }
      ],
      popularIngredients: ['Boerewors spices (coriander, nutmeg, cloves)', 'Chakalaka relish', 'Maize meal (Pap)', 'Rooibos tea', 'Biltong (cured meat)', 'Apricot jam'],
      foodCustoms: 'The Braai is more than cooking—it is a cultural institution celebrated across all ethnic groups where people gather around burning hardwood coals for hours.',
      regionalSpecialties: 'Cape Malay cuisine in Bo-Kaap is famed for sweet-savory curries and samosas; KwaZulu-Natal for fiery Durban curries; the Karoo for grass-fed organic lamb.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'isiXhosa Umbhaco', description: 'Heavy white cotton canvas skirts and wraps decorated with precise black stitched braids, paired with bead necklaces and beaded turbans.', significance: 'Worn with regal pride during cultural weddings and initiation celebrations.' },
        { name: 'isiZulu Isidwaba & Isicholo', description: 'Pleated cowhide skirt rubbed with fat and charcoal, topped by a wide flared basketry hat (isicholo) worn by married women.', significance: 'Represents marital dignity and ancestral connection.' },
        { name: 'Ndebele Beaded Apron & Brass Rings', description: 'Geometric beaded aprons and neck rings (idzila) symbolizing status and artistic lineage.', significance: 'Famous for bold, graphic geometric compositions.' }
      ],
      culturalSignificance: 'Esther Mahlangu, a world-famous South African Ndebele artist, brought traditional geometric house-painting motifs to global art museums and BMW art cars.',
      regionalVariations: 'Basotho woolen blankets worn over shoulders with conical straw hats (mokorotlo) in mountain areas; Venda striped musisi cloths.',
      occasionsWorn: 'Heritage Day (September 24), traditional weddings (umgcagco), coming-of-age celebrations, and parliament openings.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Heritage Day (National Braai Day)', seasonOrDate: 'September 24', description: 'Nationwide holiday celebrating the diverse cultural roots of all South Africans by wearing traditional ethnic attire and sharing braais.', tradition: 'Gathering around barbecue braais wearing traditional attire.' },
        { name: 'Cape Town Minstrel Carnival (Kaapse Klopse)', seasonOrDate: 'January 2 ("Tweede Nuwe Jaar")', description: 'Vibrant musical parade of thousands of performers in brightly colored satin suits, straw boaters, and banjos singing Ghoema folk songs.', tradition: 'Dancing through Cape Town streets with colorful satin umbrellas.' },
        { name: 'Freedom Day', seasonOrDate: 'April 27', description: 'Commemorating the historic first non-racial democratic elections in 1994 that ended apartheid.', tradition: 'Reflective cultural rallies and music concerts celebrating democracy.' }
      ],
      seasonalCelebrations: 'Whale watching season in Hermanus (June–November); spring wildflower superblooms carpeting the arid Namaqualand desert in August.',
      culturalContext: 'Guided by the ancient African philosophy of "Ubuntu": "Umuntu ngumuntu ngabantu" (A person is a person through other persons).',
      howPeopleCelebrate: 'Singing the national anthem "Nkosi Sikelel’ iAfrika" in five languages, enjoying outdoor braais, and cheering the Springboks rugby team.'
    },

    arts: {
      traditionalMusic: 'Isicathamiya choral singing (made famous by Ladysmith Black Mambazo), Marabi jazz, Kwaito township beats, and global Amapiano house music.',
      danceForms: ['Indlamu Zulu warrior dance', 'Pantsula energetic township street dance', 'Gumboot dance (invented by gold miners using rhythmic boots and chains)'],
      artFormsAndCrafts: ['Ndebele geometric wall painting', 'Telephone wire woven baskets', 'Beaded Zulu love letters', 'Ardmore ceramic art'],
      livingPractices: 'Ubuntu philosophy of interconnected compassion, braai hospitality, and rooibos tea drinking.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Table Mountain', location: 'Cape Town', description: 'Monumental 1,086-meter flat-topped sandstone mountain flanked by Devil’s Peak and Lion’s Head, often draped in a dramatic white cloud "tablecloth".', isUnesco: true },
        { name: 'Kruger National Park', location: 'Mpumalanga & Limpopo', description: 'One of Africa’s largest and oldest game reserves spanning nearly 20,000 square kilometers, home to high densities of wild lions, rhinos, and elephants.', isUnesco: false },
        { name: 'Robben Island', location: 'Table Bay, Cape Town', description: 'Historic island prison where Nelson Mandela was incarcerated for 18 of his 27 years before leading the nation to democratic freedom.', isUnesco: true },
        { name: 'Blyde River Canyon', location: 'Mpumalanga', description: 'One of the largest green canyons on Earth, featuring the dramatic Three Rondavels rock formations and God’s Window viewpoint.', isUnesco: false }
      ],
      unescoSitesCount: 10,
      naturalAttractions: ['Cape Point where Atlantic currents surge', 'Boulders Beach African Penguin colony', 'Drakensberg mountain amphitheater', 'Kalahari Gemsbok red sand dunes']
    },

    interestingFacts: [
      'South Africa is the only nation on Earth to have three official capital cities: Pretoria (Executive), Cape Town (Legislative), and Bloemfontein (Judicial)!',
      'Rooibos herbal tea grows naturally only in the Cederberg mountain region of South Africa and nowhere else on Earth.',
      'South Africa was the first country in the world to successfully perform a human heart transplant, led by Dr. Christiaan Barnard in Cape Town in 1967.',
      'The Vredefort Dome in South Africa is the oldest and largest verified meteorite impact crater on Earth, created over 2 billion years ago.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A warm, enthusiastic greeting: "Howzit!" or "Sawubona", accompanied by the traditional three-part African handshake.',
        'Respecting cultural diversity and asking curious questions with genuine warmth.',
        'Never showing impatience—"Now-now" or "Just-now" means soon, but not necessarily immediately!'
      ],
      familyTraditions: 'Lobola (customary bridal gift negotiations between families), gathering on weekends for communal church services and family braais.',
      everydayCustoms: 'Sipping rooibos tea with honey, snacking on biltong dried meat while watching rugby, and sharing warm banter with neighborhood street vendors.',
      modernLifestyle: 'Thriving fashion and design scenes in Johannesburg (Maboneng) and Cape Town, vibrant outdoor surfing culture, and world-class wine estates.'
    },

    geography: {
      locationDescription: 'Occupies the southern tip of the African continent, framed by 2,798 kilometers of coastline along the South Atlantic and Indian Oceans.',
      climate: 'predominantly temperate and semi-arid; Mediterranean climate in the southwest Cape; subtropical along the eastern coast (Durban).',
      majorFeatures: ['Great Escarpment & Drakensberg Mountains', 'Table Mountain', 'Orange River (longest river)', 'Karoo semi-desert plateau'],
      wildlife: ['African Elephant', 'White and Black Rhinos', 'African Penguin', 'Great White Shark', 'Springbok (National Animal)'],
      naturalAttractionsSummary: 'From sub-tropical dolphin-filled waters and wine valleys to rugged red desert canyons and African bushveld.'
    },

    sources: [
      { title: 'South African Tourism', url: 'https://www.southafrica.net' },
      { title: 'South African Heritage Resources Agency', url: 'https://sahra.org.za' },
      { title: 'UNESCO World Heritage Centre – South Africa', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'morocco',
    slug: 'morocco',
    name: 'Morocco',
    officialName: 'Kingdom of Morocco (Al-Mamlakah al-Maghribiyah)',
    flagEmoji: '🇲🇦',
    capital: 'Rabat',
    continent: 'Africa',
    heroImage: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The gateway to Africa, where vibrant labyrinthine medinas, aromatic tagines, zellige tile courtyards, and Saharan sand dunes enchant the senses.',
    taraGreeting: 'Salam Alaykum! Welcome to Morocco! Listen to the calls of the spice merchants and the clinking of delicate tea glasses pouring sweet Moroccan mint tea from high above! Let’s explore the blue mountain streets of Chefchaouen together!',
    taraFacts: [
      'The University of al-Qarawiyyin in Fez, founded in 859 CE by Fatima al-Fihri, is recognized by UNESCO and Guinness as the oldest continuously operating university in the world!',
      'Morocco is home to the stunning blue-washed city of Chefchaouen in the Rif Mountains, painted in dazzling shades of cobalt and powder blue.',
      'Argan oil, often called "liquid gold", is endemic exclusively to southwestern Morocco and produced from the nuts of the UNESCO-protected argan tree.'
    ],
    population: '37.8 Million',
    currency: 'Moroccan Dirham (MAD)',
    languagesSummary: 'Arabic & Amazigh/Berber (Official), Moroccan Arabic (Darija), French',
    coordinates: { lat: 31.7917, lng: -7.0926 },

    history: {
      timeline: [
        { period: 'c. 1000 BCE', title: 'Berber (Amazigh) Roots', description: 'Indigenous Amazigh tribes lived throughout North Africa, developing trans-Saharan trade routes with Carthage and Rome (ruins of Volubilis).' },
        { period: '789 CE', title: 'Idrisid Dynasty & Fez', description: 'Idris I established the first Moroccan Islamic state; founding of the royal capital of Fez.' },
        { period: '1062–1269 CE', title: 'Almoravid & Almohad Empires', description: 'Mighty Berber empires uniting Morocco and Moorish Spain (Al-Andalus), building the Koutoubia Mosque in Marrakech and the Giralda in Seville.' },
        { period: '1666–Present', title: 'Alaouite Dynasty', description: 'Reigning royal family tracing ancestry back to the Prophet Muhammad; successfully defended independence against Ottoman expansion.' }
      ],
      majorCivilizations: ['Amazigh Kingdoms (Numidia/Mauretania)', 'Roman Tingitana', 'Idrisid', 'Almoravid', 'Almohad', 'Saadian', 'Alaouite Dynasty'],
      importantEventsSummary: 'A proud kingdom with centuries of unbroken sovereign continuity, synthesizing Arab-Islamic scholarship, indigenous Amazigh traditions, and Andalusian architecture.',
      culturalHeritage: '9 UNESCO World Heritage Sites including the Medinas of Fez, Marrakech, and Tetouan, and the fortified ksar of Ait-Ben-Haddou.'
    },

    languages: {
      official: ['Arabic', 'Amazigh (Tamazight)'],
      widelySpoken: ['Moroccan Arabic (Darija)', 'French (commerce, higher education)'],
      regional: ['Tashelhit (Shilha)', 'Central Atlas Tamazight', 'Tarifit'],
      linguisticDiversityNotes: 'The Amazigh language has its own ancient, distinctive geometric script called Tifinagh, which is officially taught in schools and visible on public signs.',
      commonPhrases: [
        { phrase: 'Salam Alaykum', meaning: 'Peace be upon you', pronunciation: 'sah-LAHM ah-LAY-koom' },
        { phrase: 'Shukran bzzaf', meaning: 'Thank you very much (Darija)', pronunciation: 'SHOOK-ran bzahf' },
        { phrase: 'Afak', meaning: 'Please', pronunciation: 'ah-FAHK' },
        { phrase: 'Inshallah', meaning: 'God willing / Hopefully', pronunciation: 'in-SHAH-lah' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Tagine', localName: 'طاجين', description: 'Slow-simmered savory stew cooked inside a conical earthenware pot, featuring tender lamb or chicken with preserved lemons, green olives, prunes, and toasted almonds.', tag: 'Iconic Gastronomy' },
        { name: 'Couscous Royale', localName: 'كسكس', description: 'Steamed semolina grains cooked over fragrant broth, served on Fridays piled high with seven seasonal vegetables and tender meats.', tag: 'Friday Tradition' },
        { name: 'Pastilla (Bastilla)', localName: 'بسطيلة', description: 'Delicate, paper-thin warqa pastry layered with spiced shredded pigeon or chicken, crushed almonds, cinnamon, and dusted with powdered sugar.', tag: 'Sweet-Savory Masterpiece' },
        { name: 'Moroccan Mint Tea (Maghrebi)', localName: 'أتاي (Atay)', description: 'Gunpowder green tea brewed with generous bunches of fresh spearmint leaves and sugar, poured aerated from high above into glasses.', tag: 'Hospitality Elixir' }
      ],
      popularIngredients: ['Ras el Hanout (blend of up to 30 spices)', 'Preserved lemons', 'Saffron', 'Cumin', 'Argan oil', 'Orange blossom water', 'Cinnamon', 'Harissa'],
      foodCustoms: 'Refusing an offered glass of hot mint tea is considered impolite. Meals are eaten communally from a central tagine using pieces of fresh crusty khobz bread.',
      regionalSpecialties: 'Essaouira for fresh ocean sardines grilled on the harbor dock; Fez for refined sweet-savory pastilla; Marrakech for slow-roasted tangia cooked in hammam ash.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Djellaba', description: 'Long, loose hooded robe with long sleeves, featuring a pointed hood (qob) worn by both men and women.', significance: 'National everyday and ceremonial dress protecting against sun, desert wind, and mountain chill.' },
        { name: 'Kaftan', description: 'Sumptuous, richly embroidered silk and velvet ankle-length robe fastened with handmade sfifa braiding and a wide ornate belt (mdamma).', significance: 'High-fashion ceremonial wear worn by women at Moroccan weddings.' },
        { name: 'Babouche (Belgha)', description: 'Traditional heel-less leather slippers handcrafted from soft tanned leather in the medina souks.', significance: 'Comfortable, slip-on footwear worn daily.' }
      ],
      culturalSignificance: 'Chouara Tannery in Fez has been softening and dyeing leather in stone vats using natural pigments (saffron, poppy flower, indigo) since the 11th century.',
      regionalVariations: 'Amazigh silver jewelry and woolen burnous capes in the High Atlas; Sahrawi women’s colorful lightweight melhfa wraps in the south.',
      occasionsWorn: 'Eid celebrations, Friday prayers, henna nights, and elaborate wedding ceremonies.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Fez Festival of World Sacred Music', seasonOrDate: 'June (Fez)', description: 'Prestigious international gathering bringing together Sufi singers, whirling dervishes, and global musicians inside ancient courtyards.', tradition: 'Spiritual music concerts beneath ancient cedar trees.' },
        { name: 'Rose Festival (Kelaat M’Gouna)', seasonOrDate: 'May (Dades Valley)', description: 'Harvest celebration in the "Valley of the Roses" celebrating the distillation of Damask rose petals with parades, music, and rosewater showers.', tradition: 'Crowing the Rose Queen and crowning floats with fresh roses.' },
        { name: 'Gnaoua World Music Festival', seasonOrDate: 'June (Essaouira)', description: 'Electrifying celebration of spiritual Gnaoua trance music played on heavy iron castanets (qraqeb) and three-stringed guembri lutes.', tradition: 'All-night Lila trance healing ceremonies.' }
      ],
      seasonalCelebrations: 'Imilchil Marriage Festival in the High Atlas Mountains where Amazigh tribes gather for annual betrothals and livestock trading.',
      culturalContext: 'A welcoming culture shaped by deep Islamic hospitality, Sufi mysticism, and millennia of Amazigh mountain traditions.',
      howPeopleCelebrate: 'Pouring hot mint tea from graceful silver teapots from great heights to produce a frothy foam crown (regga) atop each glass.'
    },

    arts: {
      traditionalMusic: 'Gnaoua trance rhythms, Andalusian classical orchestral music, Amazigh folk songs (Ahwash and Ahidous), and Chaabi popular folk music.',
      danceForms: ['Ahwash (communal Amazigh circle dance of the High Atlas)', 'Gnaoua spiritual dance', 'Guedra desert rhythm dance'],
      artFormsAndCrafts: ['Zellige geometric mosaic tilework', 'Hand-knotted Berber wool rugs (Beni Ourain)', 'Hammered brass and copper lamps', 'Taza pottery'],
      livingPractices: 'Hammam communal steam bath rituals with black olive soap (savon noir) and eucalyptus, and mint tea pouring rituals.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Jemaa el-Fnaa', location: 'Marrakech', description: 'Vibrant, ancient public square and UNESCO Intangible Cultural Heritage space filled with storytellers, snake charmers, musicians, and night food stalls.', isUnesco: true },
        { name: 'Aït Benhaddou', location: 'Ouarzazate Province', description: 'Spectacular earthen clay ksar (fortified village) on the ancient caravan route between the Sahara and Marrakech, featured in Gladiator and Lawrence of Arabia.', isUnesco: true },
        { name: 'Hassan II Mosque', location: 'Casablanca', description: 'Monumental modern mosque standing directly above the Atlantic Ocean, featuring the world’s second-tallest minaret at 210 meters and a retractable roof.', isUnesco: false },
        { name: 'Medina of Fez (Fes el-Bali)', location: 'Fez', description: 'The world’s largest contiguous car-free urban area, a maze of over 9,000 narrow cobbled alleys filled with donkey carts and artisan tanneries.', isUnesco: true }
      ],
      unescoSitesCount: 9,
      naturalAttractions: ['Erg Chebbi dunes in the Sahara Desert (golden dunes rising up to 150 meters)', 'Todra and Dades Gorges', 'Mount Toubkal (highest peak in North Africa at 4,167m)', 'Ouzoud Waterfalls']
    },

    interestingFacts: [
      'Chefchaouen was painted blue by Jewish refugees in the 1930s as a reminder of the heavens and spiritual peace, a tradition preserved by all residents today.',
      'Morocco was the very first nation in the world to recognize the newly formed United States as an independent country in December 1777!',
      'Goats in southwestern Morocco frequently climb high into the thorny branches of argan trees to munch on sweet argan fruit berries!',
      'The traditional Moroccan tea pourer holds the teapot up to a meter above the table to aerate the tea and ensure the proper crown of foam in the glass.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A warm handshake accompanied by placing the right hand over the heart, saying "Salam Alaykum".',
        'Removing your shoes before stepping onto carpeted areas or entering Moroccan salons.',
        'Always using the right hand when dipping bread into a communal tagine dish.'
      ],
      familyTraditions: 'Friday couscous lunch is an unshakeable family ritual, bringing together grandparents, parents, and children after Friday congregational prayers.',
      everydayCustoms: 'Weekly visits to the neighborhood Hammam for deep exfoliation, bargaining with humor and tea at souk shops, and strolling through city gardens.',
      modernLifestyle: 'A modern African economic hub with the continent’s first high-speed bullet train (Al Boraq connecting Tangier to Casablanca) and massive solar plants (Noor Ouarzazate).'
    },

    geography: {
      locationDescription: 'Northwestern African nation with extensive coastlines on both the Atlantic Ocean and the Mediterranean Sea, separated from Spain by the Strait of Gibraltar.',
      climate: 'Mediterranean on northern coasts, continental in the interior valleys, alpine in the High Atlas, and hyper-arid desert in the southern Sahara.',
      majorFeatures: ['Atlas Mountains (High, Middle, and Anti-Atlas)', 'Rif Mountains', 'Sahara Desert', 'Draa and Sebou rivers'],
      wildlife: ['Barbary Macaque (only native wild monkey in Europe/North Africa)', 'Fennec Fox', 'Dorcas Gazelle', 'Barbary Falcon'],
      naturalAttractionsSummary: 'Snow-capped 4,000-meter ski summits located just a few hours’ drive from rolling Saharan sand dunes.'
    },

    sources: [
      { title: 'Moroccan National Tourist Office (Visit Morocco)', url: 'https://www.visitmorocco.com' },
      { title: 'Ministry of Youth, Culture and Communication', url: 'https://mjcc.gov.ma' },
      { title: 'UNESCO World Heritage Centre – Morocco', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'nigeria',
    slug: 'nigeria',
    name: 'Nigeria',
    officialName: 'Federal Republic of Nigeria',
    flagEmoji: '🇳🇬',
    capital: 'Abuja (Lagos largest city)',
    continent: 'Africa',
    heroImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The "Giant of Africa", renowned for vibrant Afrobeats rhythms, prolific Nollywood cinema, rich ancient kingdoms, and unmatched entrepreneurial resilience.',
    taraGreeting: 'Bawo ni! Kedu! Sannu! Welcome to Nigeria! Can you feel the energetic pulse of Lagos? Nigeria is home to over 250 ethnic cultures, world-dominating Afrobeats music, and spicy Jollof rice that will make your taste buds dance!',
    taraFacts: [
      'Nigeria is Africa’s most populous country, with over 224 million people, and is projected to become the third most populous country on Earth by 2050!',
      'Nollywood (Nigeria’s film industry) produces over 2,500 films every year, making it the second-largest film producer in the world by volume after India!',
      'The ancient Kingdom of Benin produced the world-renowned Benin Bronzes—masterpieces of lost-wax brass and bronze metal casting from the 13th century.'
    ],
    population: '224.0 Million',
    currency: 'Nigerian Naira (₦, NGN)',
    languagesSummary: 'English (Official), Hausa, Yoruba, Igbo, Nigerian Pidgin (over 500 distinct languages)',
    coordinates: { lat: 9.0820, lng: 8.6753 },

    history: {
      timeline: [
        { period: 'c. 1500 BCE – 500 CE', title: 'Nok Culture', description: 'Early Iron Age civilization renowned for expressive, hollow terracotta sculptures and early iron smelting furnaces.' },
        { period: 'c. 9th–10th Century', title: 'Igbo-Ukwu & Kingdom of Nri', description: 'Early metallurgy producing sophisticated lost-wax bronze vessels and intricate beaded ceremonial regalia.' },
        { period: '11th–19th Century', title: 'Yoruba City-States & Benin Empire', description: 'Flourishing of Ife bronze naturalistic portrait heads, sacred spiritual kingship (Oba and Ooni), and fortified earthworks of the Benin Empire.' },
        { period: '1804–1903 CE', title: 'Sokoto Caliphate', description: 'Founded by Usman dan Fodio; one of the largest pre-colonial empires in sub-Saharan Africa fostering Islamic scholarship and commerce.' },
        { period: '1960 CE', title: 'Independence', description: 'Nigeria gained independence from British colonial rule on October 1, 1960, establishing a federal democratic republic.' }
      ],
      majorCivilizations: ['Nok Culture', 'Kingdom of Benin', 'Ife Kingdom', 'Oyo Empire', 'Sokoto Caliphate', 'Kingdom of Nri'],
      importantEventsSummary: 'A powerhouse of West African political thought, artistic metallurgy, literary Nobel laureates (Wole Soyinka, Chinua Achebe), and modern cultural influence.',
      culturalHeritage: '2 UNESCO World Heritage Sites: Osun-Osogbo Sacred Grove and Sukur Cultural Landscape.'
    },

    languages: {
      official: ['English'],
      widelySpoken: ['Nigerian Pidgin (widely spoken national lingua franca)', 'Hausa', 'Yoruba', 'Igbo'],
      regional: ['Fulfulde', 'Kanuri', 'Ijaw', 'Tiv', 'Edo', 'Ibibio'],
      linguisticDiversityNotes: 'With over 500 indigenous living languages, Nigeria represents approximately 7% of all languages spoken on the entire planet.',
      commonPhrases: [
        { phrase: 'How far?', meaning: 'How are things? / Hello (Nigerian Pidgin)', pronunciation: 'how far' },
        { phrase: 'Bawo ni', meaning: 'How are you? (Yoruba)', pronunciation: 'BAH-woh nee' },
        { phrase: 'Kedu', meaning: 'How are you? (Igbo)', pronunciation: 'keh-DOO' },
        { phrase: 'Sannu', meaning: 'Hello / Greetings (Hausa)', pronunciation: 'SAHN-noo' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Nigerian Jollof Rice', localName: 'Jollof Rice', description: 'Long-grain parboiled rice cooked in a rich, smoky reduction of blended plum tomatoes, red bell peppers (tatashe), scotch bonnet chilies, onions, and bay leaves.', tag: 'National Pride' },
        { name: 'Egusi Soup with Pounded Yam', localName: 'Ofe Egusi', description: 'Rich soup made from ground melon seeds, leafy spinach or bitterleaf, smoked dried fish, and tender beef, scooped up with smooth pounded yam swallow.', tag: 'Comfort Classic' },
        { name: 'Suya', localName: 'Suya', description: 'Thinly sliced beef or chicken skewers coated in spicy Yaji peanut spice mix (ground peanuts, ginger, chili, garlic) grilled over open street fires.', tag: 'Legendary Street Snack' },
        { name: 'Puff-Puff', localName: 'Puff-Puff', description: 'Deep-fried golden, sweet, spongy yeast dough balls, crisp on the outside and airy on the inside.', tag: 'Party Essential' }
      ],
      popularIngredients: ['Scotch bonnet peppers (Ata rodo)', 'Red palm oil', 'Egusi (melon seeds)', 'Crayfish powder', 'Yams', 'Plantains (dodo)', 'Locust beans (Iru)'],
      foodCustoms: '"Swallows" (pounded yam, eba, amala, fufu) are eaten with clean fingers of the right hand, pinching a small morsel, rolling it, and dipping it into rich soups.',
      regionalSpecialties: 'The North is famous for Suya and Masa rice cakes; the Southwest (Yoruba) for Amala with Ewedu soup; the Southeast (Igbo) for Oha soup and roasted yam with palm oil.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Agbada', description: 'Voluminous, wide-sleeved four-piece embroidered flowing robe worn by men, representing status and majesty.', significance: 'Worn with great flair by men at high-society events and weddings.' },
        { name: 'Gele & Iro and Buba', description: 'Elaborately folded sculptural head-tie (Gele) paired with a wrapped skirt (Iro) and blouse (Buba) woven from Aso-Oke or lace.', significance: 'The crowning artistic glory of women’s celebratory attire.' },
        { name: 'Kaftan & Fila', description: 'Tailored tunic and embroidered cap worn across all regions.', significance: 'Everyday and formal dignified wear.' }
      ],
      culturalSignificance: 'Aso-Ebi ("clothes of the family"): wedding guests wear coordinated uniform fabrics to show solidarity, love, and community belonging with the hosts.',
      regionalVariations: 'Hausa-Fulani embroidered Babban Riga robes and turbans in the north, Igbo lion-head patterned Isiagu tunics with red caps.',
      occasionsWorn: 'Owambe lavish weekend parties, weddings, coronation ceremonies, and national holidays.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Argungu Fishing Festival', seasonOrDate: 'March (Kebbi State)', description: 'Thousands of fishermen equipped with hand nets and traditional gourds plunge into the Matan Fada river simultaneously to catch the biggest Nile perch.', tradition: 'Massive synchronized river fishing competition.' },
        { name: 'Osun-Osogbo Festival', seasonOrDate: 'August (Osogbo, Osun State)', description: 'Centuries-old celebration in the sacred forest grove honoring Osun, the goddess of fertility and sweet waters, led by the Arugba virgin priestess.', tradition: 'Procession to the sacred river carrying the holy calabash.' },
        { name: 'Durbar Festival', seasonOrDate: 'Eid al-Fitr & Eid al-Adha (Kano & Katsina)', description: 'Spectacular equestrian parade of hundreds of elaborately costumed horsemen, emirs, and musicians charging in traditional cavalry salutes.', tradition: 'Thundering horse cavalry charges and royal pageantry.' },
        { name: 'Calabar Carnival', seasonOrDate: 'December (Cross River State)', description: 'Known as "Africa’s Biggest Street Party", featuring month-long cultural parades, dazzling feathered floats, and international musical concerts.', tradition: 'Vibrant 12-kilometer street carnival parade.' }
      ],
      seasonalCelebrations: 'New Yam Festivals (Iwa Ji) celebrated across Igbo communities in August, giving thanks for the harvest before any new yam is eaten.',
      culturalContext: 'A vibrant celebration of ancestry, royal heritage, communal solidarity, and unbridled joy for life expressed through dance and feasts.',
      howPeopleCelebrate: 'Throwing lavish "Owambe" weekend parties with live Juju or Fuji bands, spraying crisp currency notes on dancers, and enjoying unlimited food.'
    },

    arts: {
      traditionalMusic: 'Afrobeats (Fela Kuti, Burna Boy, Wizkid), Highlife, Juju music (King Sunny Ade), Fuji, and complex talking drum (Gangan) communication.',
      danceForms: ['Bata dance (acrobatic Yoruba drum dance)', 'Atilogwu acrobatic dance of the Igbo', 'Ekombi graceful coastal dance'],
      artFormsAndCrafts: ['Benin bronze lost-wax casting', 'Adire indigo tie-dye textile making', 'Calabash carving', 'Aso-Oke loom weaving'],
      livingPractices: 'Owambe party culture, respecting elders with prostration (Dobale) or kneeling, and vibrant market trading banter.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Zuma Rock', location: 'Niger State, near Abuja', description: 'Colossal natural monolithic inselberg rising 725 meters above the savannah, featuring a natural weathered face often called the "Gateway to Abuja".', isUnesco: false },
        { name: 'Osun-Osogbo Sacred Grove', location: 'Osogbo, Osun State', description: 'Dense primary sacred rainforest dotted with ancient sanctuaries, shrines, and monumental sculptures dedicated to the Yoruba river goddess Osun.', isUnesco: true },
        { name: 'Kano Ancient City Walls', location: 'Kano', description: 'Remnants of monumental 14-kilometer 11th-century earthen defensive ramparts that once protected the medieval trading capital.', isUnesco: false },
        { name: 'Lekki Conservation Centre', location: 'Lagos', description: 'Vast coastal wetland reserve featuring the longest canopy walkway in Africa suspended high above tropical mangrove forests.', isUnesco: false }
      ],
      unescoSitesCount: 2,
      naturalAttractions: ['Yankari National Park (warm Wikki natural springs and wild savanna elephants)', 'Gurara Waterfalls in Niger State', 'Awhum limestone caves and waterfalls in Enugu', 'Obudu Mountain Plateau']
    },

    interestingFacts: [
      'The Yoruba talking drum (Gangan) can mimic the exact tones, inflections, and cadences of human speech, allowing messages to be sent across miles between villages.',
      'Igbo-Ora in Oyo State has the highest recorded rate of twin births in the world, earning it the title "The Twin Capital of the World"!',
      'Nigeria is the birthplace of legendary author Chinua Achebe, whose 1958 novel "Things Fall Apart" is the most widely read book in modern African literature.',
      'Lagos is Africa’s largest megacity, with a booming metropolitan population exceeding 20 million people and a thriving creative economy.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'Great respect for elders: Yoruba men perform full prostration (Dobale); women kneel respectfully when greeting parents and elders.',
        'Always greeting everyone in a room upon entering, never ignoring anyone.',
        'Passing items, gifts, or food only with the right hand or both hands together.'
      ],
      familyTraditions: 'Children are given meaningful names at elaborate naming ceremonies on the 8th day after birth, reflecting family circumstances and prayers.',
      everydayCustoms: 'Listening to Afrobeats on the radio, stopping for hot Suya wrapped in old newspapers in the evening, and Sunday best church and mosque attire.',
      modernLifestyle: 'A powerhouse of digital fintech innovators, world-dominating music and fashion trends, and a resilient, optimistic entrepreneurial spirit.'
    },

    geography: {
      locationDescription: 'West African nation situated on the Gulf of Guinea, bordering Benin, Niger, Chad, and Cameroon.',
      climate: 'Varies from equatorial tropical rainforest along the southern coast to tropical savanna in the center and semi-arid Sahel in the far north.',
      majorFeatures: ['Niger River and Benue River confluence at Lokoja', 'Niger Delta (one of the world’s largest river deltas)', 'Jos Plateau', 'Mambilla Plateau'],
      wildlife: ['Cross River Gorilla (critically endangered)', 'African Elephant', 'Pangolin', 'Chimpanzee', 'Pygmy Hippopotamus'],
      naturalAttractionsSummary: 'From lush Atlantic mangrove swamps and tropical rainforests to rolling grassy plateaus and Sahelian savannah.'
    },

    sources: [
      { title: 'Nigerian Tourism Development Authority (NTDA)', url: 'https://tournigeria.gov.ng' },
      { title: 'National Commission for Museums and Monuments (NCMM)', url: 'https://ncmm.gov.ng' },
      { title: 'UNESCO World Heritage Centre – Nigeria', url: 'https://whc.unesco.org' }
    ]
  }
];
