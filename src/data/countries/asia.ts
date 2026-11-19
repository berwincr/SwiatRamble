import { Country } from '../../types/country';

export const asiaCountries: Country[] = [
  {
    id: 'india',
    slug: 'india',
    name: 'India',
    officialName: 'Republic of India (Bharat)',
    flagEmoji: '🇮🇳',
    capital: 'New Delhi',
    continent: 'Asia',
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'A breathtaking subcontinent of ancient civilizations, vibrant colors, thousands of spoken dialects, diverse spiritual traditions, and legendary spices.',
    taraGreeting: 'Namaste! Step into India with me! From the snowcapped Himalayas down to the sunlit backwaters of Kerala, every street corner here has a story steeped in thousands of years of living philosophy and colorful celebrations.',
    taraFacts: [
      'India gave the world chess (originally called Chaturanga) and the mathematical concept of zero (shunya)!',
      'The Kumbh Mela gathering is so monumental that it is visibly identifiable from satellites in space!',
      'Varanasi along the holy river Ganges is considered one of the oldest continuously inhabited cities on Earth.'
    ],
    population: '1.43 Billion',
    currency: 'Indian Rupee (₹, INR)',
    languagesSummary: 'Hindi & English (Union Official), 22 Scheduled languages, over 19,500 dialects',
    coordinates: { lat: 20.5937, lng: 78.9629 },
    featured: true,

    history: {
      timeline: [
        { period: '2600–1900 BCE', title: 'Indus Valley Civilization', description: 'Advanced urban planning with standardized brick architecture, sophisticated drainage systems, and dockyards at Lothal.' },
        { period: 'c. 1500–500 BCE', title: 'Vedic Age & Upanishads', description: 'Composition of foundational sacred hymns, Sanskrit epics (Mahabharata and Ramayana), and early philosophical traditions.' },
        { period: '322–185 BCE', title: 'Maurya Empire & Ashoka', description: 'Unification of most of the subcontinent; Emperor Ashoka embraced Buddhist principles of nonviolence (Ahimsa) and ethical governance.' },
        { period: '320–550 CE', title: 'Gupta Golden Age', description: 'Epoch of profound discoveries in astronomy (Aryabhata), classical Sanskrit drama (Kalidasa), and foundational mathematics.' },
        { period: '1526–1857 CE', title: 'Mughal Architectural Splendor', description: 'Synthesis of Indo-Islamic architecture, classical miniature painting, garden design, and the construction of the Taj Mahal.' },
        { period: '1947 CE', title: 'Independence & Nonviolent Movement', description: 'Mahatma Gandhi led the nationwide nonviolent satyagraha movement, achieving independence from British colonial rule.' }
      ],
      majorCivilizations: ['Harappan (Indus Valley)', 'Vedic Kingdoms', 'Maurya', 'Gupta', 'Chola Dynasty', 'Mughal Empire'],
      importantEventsSummary: 'From the urban granaries of Harappa to the nonviolent struggle for self-rule, Indian history has constantly woven together diverse regional dynasties and philosophical inquiries.',
      culturalHeritage: 'India is home to 42 UNESCO World Heritage Sites, encompassing rock-cut temple sanctuaries, Mughal fortresses, and biodiverse national parks.'
    },

    languages: {
      official: ['Hindi', 'English'],
      widelySpoken: ['Bengali', 'Marathi', 'Telugu', 'Tamil', 'Gujarati', 'Urdu', 'Kannada', 'Odia', 'Malayalam', 'Punjabi'],
      regional: ['Bhojpuri', 'Maithili', 'Assamese', 'Konkani', 'Manipuri', 'Kashmiri', 'Dogri', 'Sanskrit'],
      linguisticDiversityNotes: 'India belongs to two major language families: Indo-Aryan (northern & central) and Dravidian (southern), complemented by Austroasiatic and Tibeto-Burman families in the northeast.',
      commonPhrases: [
        { phrase: 'Namaste', meaning: 'I bow to the divine within you', pronunciation: 'nuh-muh-STAY' },
        { phrase: 'Dhanyavaad', meaning: 'Thank you (Hindi)', pronunciation: 'dhun-yuh-VAAD' },
        { phrase: 'Nandri', meaning: 'Thank you (Tamil)', pronunciation: 'NUN-dree' },
        { phrase: 'Kaisa hai?', meaning: 'How are you?', pronunciation: 'KY-saa HY' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Biryani', localName: 'बिरयानी', description: 'Fragrant basmati rice slow-cooked with saffron, whole spices, caramelized onions, and marinated vegetables or meat in a sealed pot.', tag: 'Festive Classic' },
        { name: 'Dosa & Sambar', localName: 'தோசை', description: 'Crispy fermented rice and black lentil crepe served with spiced lentil-vegetable stew and fresh coconut chutney.', tag: 'South Indian Staple' },
        { name: 'Paneer Butter Masala', localName: 'पनीर बटर मसाला', description: 'Fresh cottage cheese cubes simmered in a velvety, mildly spiced tomato, butter, and cashew gravy.', tag: 'Comfort Curry' },
        { name: 'Pani Puri / Golgappa', localName: 'पानी पूरी', description: 'Hollow crisp puris filled with spiced potatoes, chickpeas, and plunged into chilled mint-tamarind water.', tag: 'Beloved Street Food' }
      ],
      popularIngredients: ['Cumin', 'Turmeric', 'Coriander', 'Cardamom', 'Mustard seeds', 'Ghee', 'Lentils (Dals)', 'Basmati rice', 'Curry leaves'],
      foodCustoms: 'Meals are traditionally eaten with the fingers of the right hand to connect senses with nourishment. Hospitality (Atithi Devo Bhava - the guest is divine) means guests are always served first and generously.',
      regionalSpecialties: 'Northern cuisine features tandoori breads, rich gravies, and paneer; Southern cuisine relies on rice, coconut, tamarind, and fermented batters; Eastern states cherish freshwater fish and mustard paste; Western states excel in vegetarian thalis and savory snacks.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Sari (Saree)', description: 'An unstitched drape of woven silk or cotton ranging from five to nine yards, gracefully wrapped and pleated around the waist with a pallu over the shoulder.', significance: 'Ancient symbol of elegance, with distinct regional weaving styles like Banarasi, Kanjeevaram, and Chanderi.' },
        { name: 'Kurta-Pyjama & Dhoti', description: 'Tunic paired with loose trousers or traditional unstitched rectangular cloth wrapped around the waist and legs.', significance: 'Comfortable everyday and ceremonial wear for men across all seasons.' },
        { name: 'Lehenga Choli', description: 'Embroidered flared long skirt paired with a fitted blouse and ornate dupatta scarf.', significance: 'Worn during grand weddings and festive dance celebrations like Navratri.' }
      ],
      culturalSignificance: 'Fabrics carry deep spiritual and auspicious meaning; saffron and red represent energy and celebration, while handlooms reflect centuries of generational artisanal mastery.',
      regionalVariations: 'From Phulkari needlework in Punjab and Bandhani tie-dye in Rajasthan to Kasavu gold-bordered garments in Kerala.',
      occasionsWorn: 'Festivals, wedding ceremonies, temple celebrations, and national holidays.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Diwali', seasonOrDate: 'Autumn (October–November)', description: 'The Festival of Lights celebrating the triumph of light over darkness and knowledge over ignorance with clay oil lamps (diyas), rangoli floor art, and sweets.', tradition: 'Illuminating homes and sharing dry fruits and mithai.' },
        { name: 'Holi', seasonOrDate: 'Spring (March)', description: 'The exuberant festival of colors celebrating the arrival of spring, forgiveness, and the timeless love of Radha and Krishna.', tradition: 'Playful smearing of colored organic powders (gulal) and water splashes.' },
        { name: 'Eid ul-Fitr', seasonOrDate: 'Varies with lunar calendar', description: 'Celebrated joyously across communities with communal prayers, new clothing, charity (Zakat), and sharing sweet sewaiyan.', tradition: 'Gathering at historic mosques like Jama Masjid.' },
        { name: 'Onam', seasonOrDate: 'Harvest season (August–September)', description: 'Harvest festival of Kerala welcoming legendary King Mahabali with flower carpets (Pookalam), boat races, and the grand Onam Sadya feast served on banana leaves.', tradition: 'Grand 26-dish vegetarian banquet on a banana leaf.' }
      ],
      seasonalCelebrations: 'Seasonal transitions bring harvest celebrations such as Makar Sankranti, Pongal, Bihu, and Lohri, where kites dance in skies and bonfires are lit.',
      culturalContext: 'Festivals transcend individual families, bringing entire villages and communities together through food distribution and collective music.',
      howPeopleCelebrate: 'Families clean and paint houses, decorate doorways with mango leaves and floor mandalas, wear brand-new traditional attire, and exchange handmade confections.'
    },

    arts: {
      traditionalMusic: 'Two classical traditions: Hindustani music in the north emphasizing ragas and emotional improvisation, and Carnatic music in the south with rigorous tala rhythms and devotional compositions.',
      danceForms: ['Bharatanatyam (Tamil Nadu)', 'Kathak (North India)', 'Kathakali (Kerala)', 'Odissi (Odisha)', 'Manipuri', 'Garba (Gujarat)', 'Bhangra (Punjab)'],
      artFormsAndCrafts: ['Madhubani folk painting', 'Pashmina shawl weaving', 'Tanjore gold-foil paintings', 'Kashmiri walnut wood carving', 'Blue pottery of Jaipur'],
      livingPractices: 'Oral storytelling traditions, yoga and classical Ayurveda meditation systems, and community brass-casting techniques.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Taj Mahal', location: 'Agra, Uttar Pradesh', description: 'Ivory-white marble mausoleum on the Yamuna riverbank built by Emperor Shah Jahan, acclaimed as the jewel of Muslim art in India.', isUnesco: true },
        { name: 'Ajanta and Ellora Caves', location: 'Maharashtra', description: 'Spectacular rock-cut temple sanctuaries dating from 2nd century BCE featuring ancient Buddhist frescoes and the monumental monolithic Kailasa temple.', isUnesco: true },
        { name: 'Hampi Ruins', location: 'Karnataka', description: 'Atmospheric boulder-strewn capital ruins of the Vijayanagara Empire, filled with carved stone chariot shrines and royal pavilions.', isUnesco: true },
        { name: 'Amber Fort', location: 'Jaipur, Rajasthan', description: 'Imposing hilltop fortress of pink sandstone and yellow marble featuring the legendary Sheesh Mahal (hall of mirrors).', isUnesco: true }
      ],
      unescoSitesCount: 42,
      naturalAttractions: ['Sundarbans Mangrove Forest', 'Valley of Flowers National Park (Uttarakhand)', 'Western Ghats biodiversity hotspot', 'Kerala Backwaters']
    },

    interestingFacts: [
      'India is the birthplace of four major world religions: Hinduism, Buddhism, Jainism, and Sikhism.',
      'The village of Mawsynram in Meghalaya is the wettest inhabited place on planet Earth, receiving nearly 12 meters of rainfall annually!',
      'India possesses the largest postal network in the world, including a floating post office situated on Dal Lake in Srinagar, Kashmir.',
      'Yoga originated in ancient India over 5,000 years ago as a comprehensive philosophy uniting body, breath, and consciousness.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'Pressing palms together at heart level while gently bowing and uttering "Namaste".',
        'Removing footwear before entering any home or place of worship.',
        'Offering water and refreshments to any guest within minutes of their arrival.'
      ],
      familyTraditions: 'Joint and extended families maintain close bonds; elders receive deep veneration through the ritual touching of feet (charan sparsh) for blessings.',
      everydayCustoms: 'Starting the morning with hot spiced chai, burning incense, and drawing protective white flour kolam designs on the doorstep.',
      modernLifestyle: 'A dynamic fusion where centuries-old temple rituals and street bazaars coexist effortlessly with world-leading tech hubs, UPI instant digital payments, and electric commuter trains.'
    },

    geography: {
      locationDescription: 'Occupies the bulk of South Asia, bordered by the mighty Himalayas to the north and flanked by the Arabian Sea, Bay of Bengal, and Indian Ocean.',
      climate: 'Ranges from alpine glaciers in Ladakh to tropical rainforests in the south and the arid Thar Desert in the west.',
      majorFeatures: ['Himalayan Mountain Range', 'Indo-Gangetic Plain', 'Deccan Plateau', 'Ganges and Brahmaputra river systems'],
      wildlife: ['Bengal Tiger', 'Indian One-Horned Rhinoceros', 'Asian Elephant', 'Snow Leopard', 'Indian Peafowl (National Bird)'],
      naturalAttractionsSummary: 'Home to 70% of the world’s wild tiger population across dedicated reserves, sacred rivers, and coral reef atolls in Lakshadweep.'
    },

    sources: [
      { title: 'Archaeological Survey of India (ASI)', url: 'https://asi.nic.in' },
      { title: 'Incredible India – Ministry of Tourism', url: 'https://www.incredibleindia.org' },
      { title: 'UNESCO World Heritage Centre – India', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'japan',
    slug: 'japan',
    name: 'Japan',
    officialName: 'Nippon-koku (State of Japan)',
    flagEmoji: '🇯🇵',
    capital: 'Tokyo',
    continent: 'Asia',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'An island nation where centuries of quiet Zen mindfulness, samurai heritage, and seasonal harmony meet futuristic innovation.',
    taraGreeting: 'Konnichiwa! Welcome to Japan! I love how Japan finds beauty in gentle impermanence—whether it’s cherry blossoms falling like snow or the quiet warmth of a handcrafted ceramic tea bowl.',
    taraFacts: [
      'Japan is composed of 6,852 islands, with over 70% of the land being forested and mountainous!',
      'There is a Japanese aesthetic concept called "Kintsugi", where broken pottery is mended with lacquer and powdered gold to honor its history.',
      'Mount Fuji is an active stratovolcano and Japan’s highest sacred mountain, depicted in thousands of classic woodblock prints.'
    ],
    population: '124 Million',
    currency: 'Japanese Yen (¥, JPY)',
    languagesSummary: 'Japanese (Nihongo)',
    coordinates: { lat: 36.2048, lng: 138.2529 },
    featured: true,

    history: {
      timeline: [
        { period: '14,000–300 BCE', title: 'Jomon Period', description: 'Hunter-gatherer culture noted for some of the oldest pottery in human history featuring cord-marked impressions.' },
        { period: '794–1185 CE', title: 'Heian Period & Classical Court', description: 'Flourishing of court literature; Lady Murasaki Shikibu wrote The Tale of Genji, recognized as the world’s first novel.' },
        { period: '1185–1868 CE', title: 'Feudal Era & Samurai Rule', description: 'Rule by shoguns and daimyo; development of the Bushido moral code, Zen gardens, and Noh theater.' },
        { period: '1603–1867 CE', title: 'Edo Period (Pax Tokugawa)', description: 'Over two centuries of national isolation (sakoku), fostering unique kabuki theater, ukiyo-e prints, and geisha traditions.' },
        { period: '1868 CE', title: 'Meiji Restoration', description: 'Rapid modernization and opening to international relations, transforming industry while preserving imperial identity.' }
      ],
      majorCivilizations: ['Jomon & Yayoi cultures', 'Yamato Court', 'Heian Aristocracy', 'Kamakura & Ashikaga Shogunates', 'Tokugawa Shogunate'],
      importantEventsSummary: 'A history shaped by profound respect for ancestral tradition, geographic isolation, and the resilient ability to synthesize external knowledge into unique national art forms.',
      culturalHeritage: '25 UNESCO World Heritage Sites including ancient temples of Kyoto, Himeji Castle, and the sacred shrines of Nikko.'
    },

    languages: {
      official: ['Japanese'],
      widelySpoken: ['Standard Japanese (Tokyo dialect)', 'Kansai-ben (Osaka/Kyoto)'],
      regional: ['Ryukyuan languages (Okinawa)', 'Ainu language (Hokkaido)', 'Tohoku dialects'],
      linguisticDiversityNotes: 'Japanese uses three writing scripts simultaneously: Kanji (Chinese characters), Hiragana (phonetic syllabary for native words), and Katakana (for foreign loanwords).',
      commonPhrases: [
        { phrase: 'Konnichiwa', meaning: 'Hello / Good afternoon', pronunciation: 'kohn-nee-chee-wah' },
        { phrase: 'Arigatou gozaimasu', meaning: 'Thank you very much', pronunciation: 'ah-ree-GAH-toh go-zah-ee-mahs' },
        { phrase: 'Itadakimasu', meaning: 'I humbly receive this meal', pronunciation: 'ee-tah-dah-kee-mahs' },
        { phrase: 'Otsukaresama desu', meaning: 'Thank you for your hard work', pronunciation: 'oht-soo-kah-reh-sah-mah dess' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Nigiri Sushi', localName: '握り寿司', description: 'Artfully hand-pressed vinegared rice topped with glistening fresh slices of raw seafood like fatty tuna (otoro) and salmon.', tag: 'Iconic Gastronomy' },
        { name: 'Tonkotsu Ramen', localName: '豚骨ラーメン', description: 'Springy noodles in a deeply simmered, rich pork bone broth topped with tender chashu pork, seasoned soft-boiled egg, and nori.', tag: 'Soul Food' },
        { name: 'Tempura', localName: '天ぷら', description: 'Light, feather-crisp battered prawns and seasonal mountain vegetables fried to golden perfection.', tag: 'Artisan Technique' },
        { name: 'Matcha & Wagashi', localName: '抹茶と和菓子', description: 'Whisked ceremonial green tea accompanied by delicate bean-paste sweets shaped like seasonal maple leaves or blossoms.', tag: 'Tea Ritual' }
      ],
      popularIngredients: ['Dashi broth (kelp & bonito)', 'Soy sauce (shoyu)', 'Miso paste', 'Mirin', 'Rice vinegar', 'Wasabi', 'Nori seaweed', 'Shiitake mushrooms'],
      foodCustoms: 'Washoku (traditional dietary culture) is a UNESCO Intangible Cultural Heritage. Saying "Itadakimasu" before eating expresses gratitude to the ingredients, farmers, and cooks.',
      regionalSpecialties: 'Hokkaido is famed for fresh crab and miso ramen; Osaka is known for takoyaki octopus balls and okonomiyaki pancakes; Kyoto excels in delicate multi-course Kaiseki dining.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Kimono', description: 'T-shaped, straight-lined robe worn with an obi sash, tailored with seasonal motifs and sleeve lengths indicating marital status.', significance: 'Represents the pinnacle of textile dyeing, silk weaving, and formal etiquette.' },
        { name: 'Yukata', description: 'Unlined, breathable cotton kimono worn during warm summer evenings, onsen bath visits, and fireworks festivals.', significance: 'Accessible, casual, and playful summer attire.' },
        { name: 'Hakama', description: 'Tied pleated trousers worn over kimono by martial artists and university graduates during ceremonies.', significance: 'Associated with samurai dignity and scholarly accomplishment.' }
      ],
      culturalSignificance: 'Every kimono pattern holds symbolic weight—cranes for longevity, pine for resilience, and cherry blossoms for fresh beginnings.',
      regionalVariations: 'Nishijin silk weaving from Kyoto, Yuzen hand-painted paste resist dyeing from Kanazawa, and Ryukyu Bingata from Okinawa.',
      occasionsWorn: 'Coming-of-Age Day (Seijin no Hi), weddings, New Year shrine visits, and tea ceremonies.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Gion Matsuri', seasonOrDate: 'July (Kyoto)', description: 'One of Japan’s most famous festivals dating back to 869 CE, featuring massive towering wooden floats (yamaboko) paraded through ancient streets.', tradition: 'Nights of lantern illuminations and traditional flute music.' },
        { name: 'Hanami (Cherry Blossom Viewing)', seasonOrDate: 'Spring (March–April)', description: 'Nationwide custom of picnicking beneath blooming sakura trees to reflect upon the fleeting beauty of life.', tradition: 'Picnics under cherry blossoms with bento boxes.' },
        { name: 'Aomori Nebuta Matsuri', seasonOrDate: 'August', description: 'Dazzling parade of enormous illuminated paper warrior lantern floats accompanied by energetic taiko drummers and dancers calling "Rassera!".', tradition: 'Dancing around glowing mythological floats.' },
        { name: 'Shogatsu (New Year)', seasonOrDate: 'January 1–3', description: 'The most sacred holiday; people visit local shrines (Hatsumode), eat osechi ryori delicacies, and listen to 108 temple bell tolls.', tradition: 'Joyanokane bell ringing to cleanse worldly desires.' }
      ],
      seasonalCelebrations: 'Autumn brings Tsukimi (moon viewing festivals), winter brings Sapporo Snow Festival with towering ice sculptures, and spring brings lively Golden Week parades.',
      culturalContext: 'Rooted in Shinto animism and Buddhist commemoration, festivals honor kami (spirits) and ancestors while unifying neighborhood associations.',
      howPeopleCelebrate: 'Locals wear colorful yukata, carry heavy portable shrines (mikoshi) on shoulders through town, and enjoy street stalls serving grilled dango and yakitori.'
    },

    arts: {
      traditionalMusic: 'Ensembles featuring the gagaku court instruments, the 13-stringed koto zither, the three-stringed shamisen lute, and resonant taiko drums.',
      danceForms: ['Noh drama dance', 'Kabuki dance (Buyo)', 'Awa Odori folk dance', 'Bon Odori circle dances'],
      artFormsAndCrafts: ['Ukiyo-e woodblock printing', 'Ikebana flower arrangement', 'Origami paper folding', 'Kintsugi gold ceramic repair', 'Washi paper making'],
      livingPractices: 'Chado (the Way of Tea), Shodo (calligraphy), onsen hot spring bathing culture, and forest bathing (shinrin-yoku).'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Mount Fuji', location: 'Shizuoka & Yamanashi Prefectures', description: 'Symmetrical, snow-capped sacred volcanic peak standing at 3,776 meters, inspiring poets and pilgrims for millennia.', isUnesco: true },
        { name: 'Fushimi Inari Taisha', location: 'Kyoto', description: 'Historic Shinto shrine featuring a breathtaking tunnel of over 10,000 vibrant vermilion torii gates winding up sacred Mount Inari.', isUnesco: false },
        { name: 'Himeji Castle (White Heron)', location: 'Hyogo Prefecture', description: 'Japan’s most spectacular surviving feudal castle with pristine white plaster walls and complex defensive moats.', isUnesco: true },
        { name: 'Kinkaku-ji (Golden Pavilion)', location: 'Kyoto', description: 'Zen Buddhist temple whose top two floors are completely covered in pure gold leaf, mirrored across a tranquil reflecting pond.', isUnesco: true }
      ],
      unescoSitesCount: 25,
      naturalAttractions: ['Arashiyama Bamboo Grove', 'Yakushima Ancient Cedar Forests', 'Shiretoko Peninsula drift ice', 'Jigokudani Snow Monkey Park']
    },

    interestingFacts: [
      'Tokyo’s Shinjuku Station is the busiest transport hub on Earth, serving over 3.5 million passengers every single day.',
      'Japan is home to the world’s oldest continuously operating business: Kongo Gumi, a temple construction company founded in 578 CE!',
      'Heated toilet seats with sound-masking melodies and warm spray controls are standard in homes and train stations alike.',
      'There are over 5 million vending machines across Japan selling everything from piping-hot green tea cans to freshly baked bread.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'Bowing (ojigi) rather than shaking hands, with deeper bows indicating greater respect.',
        'Taking off outdoor shoes at the genkan entryway and slipping into indoor slippers.',
        'Never speaking loudly on public subway trains or blowing one’s nose in public spaces.'
      ],
      familyTraditions: 'Children carry sturdy randoseru leather backpacks to school; multi-generational families gather around a heated kotatsu table during chilly winters.',
      everydayCustoms: 'Separating recyclables into precise categories, carrying trash home, and bathing in hot baths every evening to soak away fatigue.',
      modernLifestyle: 'Flawless bullet trains (Shinkansen) traveling at 320 km/h, automated convenience stores (konbini) open 24/7, and vibrant gaming and manga subcultures.'
    },

    geography: {
      locationDescription: 'An east-Asian archipelago situated along the Pacific Ring of Fire, extending across four main islands: Honshu, Hokkaido, Kyushu, and Shikoku.',
      climate: 'Subarctic in snowy Hokkaido with heavy powder snow; temperate and humid in central Honshu; subtropical in the southern Ryukyu Islands.',
      majorFeatures: ['Japanese Alps', 'Mount Fuji', 'Shinano River', 'Biwa Lake (Japan’s largest lake)'],
      wildlife: ['Japanese Macaque (Snow Monkey)', 'Sika Deer of Nara', 'Tanuki (Japanese Raccoon Dog)', 'Japanese Giant Salamander'],
      naturalAttractionsSummary: 'Dotted with thousands of natural geothermal hot springs (onsen) and steep volcanic mountain trails.'
    },

    sources: [
      { title: 'Japan National Tourism Organization (JNTO)', url: 'https://www.japan.travel' },
      { title: 'Agency for Cultural Affairs, Government of Japan', url: 'https://www.bunka.go.jp' },
      { title: 'UNESCO World Heritage Centre – Japan', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'china',
    slug: 'china',
    name: 'China',
    officialName: "People's Republic of China",
    flagEmoji: '🇨🇳',
    capital: 'Beijing',
    continent: 'Asia',
    heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'One of the world’s oldest continuous civilizations, blending imperial palaces, serene karst landscapes, tea culture, and calligraphy.',
    taraGreeting: 'Ni hao! Did you know China has over 5,000 years of recorded history? Join me as we walk the stone ramparts of the Great Wall and learn why red represents joy, vitality, and good fortune!',
    taraFacts: [
      'China is credited with the "Four Great Inventions" that changed humanity: papermaking, the magnetic compass, gunpowder, and movable type printing!',
      'The Giant Panda is native only to south-central China and is cherished globally as a symbol of peace and conservation.',
      'The Terracotta Army in Xi’an consists of over 8,000 life-sized clay soldiers, each with unique facial expressions and hairstyles.'
    ],
    population: '1.41 Billion',
    currency: 'Chinese Yuan / Renminbi (¥, CNY)',
    languagesSummary: 'Standard Mandarin (Putonghua), Cantonese, Shanghainese, Min, Hakka',
    coordinates: { lat: 35.8617, lng: 104.1954 },

    history: {
      timeline: [
        { period: 'c. 2070–1600 BCE', title: 'Xia & Shang Dynasties', description: 'Early bronze casting, oracle bone inscriptions, and ancestor veneration systems.' },
        { period: '221–206 BCE', title: 'Qin Dynasty & Unification', description: 'Qin Shi Huang unified weights, currencies, script, and linked northern frontier walls into the Great Wall.' },
        { period: '202 BCE – 220 CE', title: 'Han Dynasty & Silk Road', description: 'Establishment of Confucian state civil service exams and international trade routes connecting China with Rome.' },
        { period: '618–907 CE', title: 'Tang Dynasty Golden Age', description: 'Peak of classical Chinese poetry (Li Bai, Du Fu), cosmopolitan capitals, and international maritime trade.' },
        { period: '1368–1912 CE', title: 'Ming and Qing Dynasties', description: 'Construction of the Forbidden City in Beijing, blue-and-white porcelain export, and naval voyages of Zheng He.' }
      ],
      majorCivilizations: ['Shang', 'Zhou', 'Qin', 'Han', 'Tang', 'Song', 'Ming', 'Qing'],
      importantEventsSummary: 'Dynastic cycles guided by the concept of the Mandate of Heaven, marked by grand canal construction, philosophical schools (Confucianism, Daoism), and artistic pinnacles.',
      culturalHeritage: '57 UNESCO World Heritage Sites including the Forbidden City, Mogao Caves in Dunhuang, and the Great Wall.'
    },

    languages: {
      official: ['Standard Chinese (Mandarin / Putonghua)'],
      widelySpoken: ['Yue (Cantonese)', 'Wu (Shanghainese)', 'Min Nan', 'Xiang', 'Hakka', 'Gan'],
      regional: ['Tibetan', 'Uyghur', 'Mongolian', 'Zhuang'],
      linguisticDiversityNotes: 'Chinese characters (Hanzi) are logograms that convey meaning and pronunciation, uniting speakers of mutually unintelligible spoken dialects across provinces.',
      commonPhrases: [
        { phrase: 'Nǐ hǎo', meaning: 'Hello', pronunciation: 'nee how' },
        { phrase: 'Xièxie', meaning: 'Thank you', pronunciation: 'sheh-sheh' },
        { phrase: 'Zàijiàn', meaning: 'Goodbye', pronunciation: 'dzai-jyen' },
        { phrase: 'Chī fàn le ma?', meaning: 'Have you eaten? (Friendly greeting)', pronunciation: 'chur fahn luh mah' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Peking Duck', localName: '北京烤鸭', description: 'Air-dried, wood-roasted duck with glistening crisp amber skin, sliced thin and served with steamed pancakes, cucumber, scallions, and sweet bean sauce.', tag: 'Imperial Feast' },
        { name: 'Dim Sum & Xiaolongbao', localName: '小笼包', description: 'Delicate steamed soup dumplings filled with seasoned pork and piping-hot savory broth, dipped in aged black vinegar.', tag: 'Cantonese & Jiangnan Art' },
        { name: 'Sichuan Mapo Tofu', localName: '麻婆豆腐', description: 'Silken tofu cubes and minced meat swimming in a fiery chili oil sauce flavored with numbing Sichuan peppercorns.', tag: 'Spicy Landmark' },
        { name: 'Hand-Pulled Noodles (Lamian)', localName: '拉面', description: 'Chewy wheat noodles pulled by hand in seconds from single dough blocks, served in clear beef broth with fresh coriander.', tag: 'Street Masterpiece' }
      ],
      popularIngredients: ['Ginger', 'Garlic', 'Scallions', 'Soy sauce', 'Shaoxing rice wine', 'Sesame oil', 'Sichuan peppercorn', 'Five-spice powder'],
      foodCustoms: 'Meals are served family-style on a central lazy Susan turn-table. The host refills tea cups and dishes for guests. Leaving a tiny morsel of food can signal that the host was generous.',
      regionalSpecialties: 'The Eight Great Cuisines: spicy Sichuan and Hunan, delicate Cantonese seafood and dim sum, savory Shandong, sweet Jiangsu and Zhejiang, and earthy Anhui and Fujian.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Hanfu', description: 'Flowing historical robes characterized by cross collars, wide sleeves, and fabric sashes without buttons.', significance: 'Experiencing a major modern cultural renaissance among young people.' },
        { name: 'Qipao (Cheongsam)', description: 'Form-fitting high-collared dress with frog clasps and side slits, popularized in 1920s cosmopolitan Shanghai.', significance: 'Symbol of 20th-century Chinese feminine grace and sartorial modernization.' },
        { name: 'Tangzhuang', description: 'Jacket with a mandarin collar and traditional knotted cloth buttons.', significance: 'Worn for Lunar New Year and festive celebrations.' }
      ],
      culturalSignificance: 'Silk was first cultivated in China over 4,000 years ago; yellow was historically reserved strictly for the Emperor.',
      regionalVariations: 'Tibetan chuba woolen robes, Miao silver-embroidered jackets, and Uyghur colorful doppa caps.',
      occasionsWorn: 'Spring Festival, Mid-Autumn Festival, weddings, and traditional tea ceremonies.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Spring Festival (Chinese New Year)', seasonOrDate: 'January–February', description: 'The grandest holiday marked by family reunion dinners, dumpling making, red envelopes (hongbao), dragon dances, and fireworks.', tradition: 'Pasting red poetic couplets on front doors.' },
        { name: 'Mid-Autumn Festival', seasonOrDate: 'September–October', description: 'Celebrating the harvest moon, unity, and the legend of the Moon Goddess Chang’e with lanterns and mooncakes.', tradition: 'Eating sweet lotus-seed paste and salted egg yolk mooncakes.' },
        { name: 'Dragon Boat Festival (Duanwu)', seasonOrDate: 'Fifth day of fifth lunar month (June)', description: 'Commemorating the poet Qu Yuan with thrilling dragon boat races and pyramid-shaped bamboo-wrapped sticky rice dumplings (zongzi).', tradition: 'Paddling wooden dragon boats to drumbeats.' },
        { name: 'Lantern Festival', seasonOrDate: 'Fifteenth day of first lunar month', description: 'Closing the New Year celebrations with glowing lantern displays, riddle solving, and sweet glutinous rice balls (tangyuan).', tradition: 'Solving riddle papers hung beneath paper lanterns.' }
      ],
      seasonalCelebrations: 'Qingming (Tomb Sweeping Day) in early spring and the Double Ninth Festival honoring elderly ancestors in autumn.',
      culturalContext: 'Festivals follow the lunisolar calendar and center on family reunion, harmonious balance with seasons, and honoring lineage.',
      howPeopleCelebrate: 'Hundreds of millions travel home during "Chunyun" (the world’s largest annual human migration) to share feasts and ancestral respects.'
    },

    arts: {
      traditionalMusic: 'Instruments include the erhu two-stringed fiddle, the pipa lute, the guzheng plucked zither, and the bamboo dizi flute.',
      danceForms: ['Lion Dance', 'Dragon Dance', 'Sleeve Dance of classical court theater', 'Folk Yangge dance'],
      artFormsAndCrafts: ['Calligraphy (Shufa)', 'Porcelain ceramic making', 'Silk embroidery (Su, Xiang)', 'Paper cutting (Jianzhi)', 'Cloisonné enamelware'],
      livingPractices: 'Tai Chi (Taijiquan) morning practice in parks, Gongfu tea ceremonies, and Traditional Chinese Medicine (TCM).'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Great Wall of China', location: 'Northern China', description: 'Over 21,000 kilometers of stone ramparts, watchtowers, and beacons traversing mountain ridges.', isUnesco: true },
        { name: 'Forbidden City (Palace Museum)', location: 'Beijing', description: 'The world’s largest palace complex comprising 980 surviving buildings, housing 24 Ming and Qing emperors.', isUnesco: true },
        { name: 'Terracotta Army', location: 'Xi’an, Shaanxi', description: 'Thousands of life-sized subterranean clay warriors and horses buried in 210 BCE to guard Emperor Qin Shi Huang.', isUnesco: true },
        { name: 'Potala Palace', location: 'Lhasa, Tibet', description: 'Towering 13-story fortress and winter residence of the Dalai Lamas, built at an altitude of 3,700 meters.', isUnesco: true }
      ],
      unescoSitesCount: 57,
      naturalAttractions: ['Zhangjiajie National Forest Park (Avatar quartz sandstone pillars)', 'Jiuzhaigou multi-tiered turquoise waterfalls', 'Li River karst peaks of Guilin', 'Mount Huangshan (Yellow Mountain)']
    },

    interestingFacts: [
      'The modern calendar week’s tea culture originated here—the word "cha" in Hindi, Russian, and Japanese traces directly back to Chinese words for tea!',
      'Beijing has served as the capital of China across six distinct dynasties over more than 800 years.',
      'China’s high-speed rail network exceeds 45,000 kilometers—longer than all other countries’ high-speed rail lines combined!',
      'The Grand Canal of China is the longest and oldest artificial river on Earth, stretching 1,776 kilometers.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A gentle head nod or slight handshake; addressing people by title and surname first.',
        'Accepting and presenting business cards or gifts using both hands as a sign of respect.',
        'Pouring tea for everyone else at the table before filling your own cup.'
      ],
      familyTraditions: 'Filial piety (Xiao) is the bedrock of societal values; grandparents play an active role in raising grandchildren while parents work.',
      everydayCustoms: 'Drinking warm boiled water for health, early morning park exercises like square dancing, and playing Chinese chess (Xiangqi).',
      modernLifestyle: 'A cashless society run almost entirely on mobile QR code payments, automated package delivery robots, and vibrant night markets.'
    },

    geography: {
      locationDescription: 'Vast East Asian territory stretching from the Gobi Desert and Siberian borders in the north to tropical Hainan island in the south.',
      climate: 'Spans subarctic tundra in northern Heilongjiang, arid desert in Xinjiang, temperate plains in the east, and tropical monsoon climates in Guangdong.',
      majorFeatures: ['Tibetan Plateau (Roof of the World)', 'Yangtze River (Asia’s longest)', 'Yellow River (Cradle of Chinese civilization)', 'Gobi Desert'],
      wildlife: ['Giant Panda', 'Golden Snub-nosed Monkey', 'South China Tiger', 'Red-crowned Crane', 'Chinese Alligator'],
      naturalAttractionsSummary: 'Extremes ranging from the peak of Mount Everest on the Nepal border to the deep Turpan Depression.'
    },

    sources: [
      { title: 'National Cultural Heritage Administration of China', url: 'http://www.ncha.gov.cn' },
      { title: 'The Palace Museum (Beijing)', url: 'https://en.dpm.org.cn' },
      { title: 'UNESCO World Heritage Centre – China', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'south-korea',
    slug: 'south-korea',
    name: 'South Korea',
    officialName: 'Republic of Korea (Daehan Minguk)',
    flagEmoji: '🇰🇷',
    capital: 'Seoul',
    continent: 'Asia',
    heroImage: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The land of morning calm, where centuries of Joseon royal heritage, hanok villages, and kimchi-making seamlessly blend with vibrant global K-culture.',
    taraGreeting: 'Annyeonghaseyo! Welcome to South Korea! Look at the vibrant circular Taegeuk symbol on the flag—it represents the perfect cosmic balance of Yin and Yang. Let’s try on a colorful Hanbok and explore Seoul’s grand palaces!',
    taraFacts: [
      'King Sejong the Great invented Hangul in 1443—one of the most scientific and phonetic alphabetic writing systems ever conceived!',
      'South Korea has the fastest average internet connection speeds and the highest smartphone ownership rate in the world.',
      'The traditional community practice of preparing and fermenting winter kimchi (Kimjang) is recognized on the UNESCO Intangible Cultural Heritage list.'
    ],
    population: '51.7 Million',
    currency: 'South Korean Won (₩, KRW)',
    languagesSummary: 'Korean (Hangul)',
    coordinates: { lat: 35.9078, lng: 127.7669 },

    history: {
      timeline: [
        { period: '2333 BCE (Mythic)', title: 'Gojoseon Founding', description: 'Legendary founding of the first Korean kingdom by Dangun Wanggeom.' },
        { period: '57 BCE – 668 CE', title: 'Three Kingdoms Period', description: 'Goguryeo, Baekje, and Silla competed until Silla unified the peninsula, promoting Buddhism.' },
        { period: '918–1392 CE', title: 'Goryeo Dynasty', description: 'Introduced metal movable type printing before Gutenberg (Jikji, 1377 CE) and produced renowned celadon ceramics.' },
        { period: '1392–1910 CE', title: 'Joseon Dynasty', description: 'Neo-Confucian governance, construction of Gyeongbokgung Palace, invention of Hangul, and turtle warship defense by Admiral Yi Sun-sin.' },
        { period: '1953–Present', title: 'Miracle on the Han River', description: 'Rapid transformation from wartime devastation into an economic and technological superpower.' }
      ],
      majorCivilizations: ['Gojoseon', 'Three Kingdoms (Goguryeo, Baekje, Silla)', 'Unified Silla', 'Goryeo', 'Joseon'],
      importantEventsSummary: 'A resilient history of cultural endurance, scholarly pride in language and ethics, and extraordinary modern innovation.',
      culturalHeritage: '16 UNESCO World Heritage Sites including Changdeokgung Palace Complex, Bulguksa Temple, and Hwaseong Fortress.'
    },

    languages: {
      official: ['Korean'],
      widelySpoken: ['Seoul Standard Korean'],
      regional: ['Jeju language (Jejueo)', 'Gyeongsang dialect (Busan)', 'Jeolla dialect'],
      linguisticDiversityNotes: 'Hangul contains 14 consonants and 10 vowels designed to mirror the shapes made by the mouth and tongue when speaking.',
      commonPhrases: [
        { phrase: 'Annyeonghaseyo', meaning: 'Hello / Peace be with you', pronunciation: 'ahn-nyong-hah-seh-yo' },
        { phrase: 'Gamsahamnida', meaning: 'Thank you', pronunciation: 'gahm-sah-hahm-nee-dah' },
        { phrase: 'Jal meokgesseumnida', meaning: 'I will eat well (Before meal)', pronunciation: 'jahl muk-gess-sum-nee-dah' },
        { phrase: 'Daebak!', meaning: 'Awesome! / Wow!', pronunciation: 'deh-bahk' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Bibimbap', localName: '비빔밥', description: 'Warm bowl of rice topped with sautéed namul vegetables, seasoned beef, raw egg yolk, and gochujang chili paste, mixed vigorously before eating.', tag: 'Harmonious Classic' },
        { name: 'Korean BBQ (Samgyeopsal)', localName: '삼겹살', description: 'Thick pork belly strips grilled directly at the table, wrapped in crisp perilla and lettuce leaves with ssamjang paste and garlic.', tag: 'Social Dining' },
        { name: 'Kimchi Jjigae', localName: '김치찌개', description: 'Bubbling, comforting stew made with fermented aged kimchi, pork belly, tofu, and scallions in a clay pot.', tag: 'Everyday Soul Food' },
        { name: 'Tteokbokki', localName: '떡볶이', description: 'Chewy cylindrical rice cakes simmered in a sweet and fiery red gochujang chili broth with fish cakes and hard-boiled eggs.', tag: 'Street Food Icon' }
      ],
      popularIngredients: ['Gochujang (fermented chili paste)', 'Gochugaru (chili flakes)', 'Doenjang (soybean paste)', 'Sesame oil', 'Garlic', 'Ginger', 'Kimchi'],
      foodCustoms: 'Meals are accompanied by a rainbow of complimentary side dishes (banchan). Younger people pour drinks with two hands for elders and turn their heads slightly when drinking.',
      regionalSpecialties: 'Jeonju is the spiritual home of Bibimbap; Busan is famous for Dwaeji Gukbap (pork soup); Jeju Island is famous for Black Pork and hallabong citrus.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Hanbok', description: 'Traditional Korean dress characterized by vibrant natural colors (obangsaek), curved silhouettes, a short jacket (jeogori), and a flowing voluminous skirt (chima) for women or loose pants (baji) for men.', significance: 'Emphasizes graceful lines and freedom of movement without body constrictions.' },
        { name: 'Gat', description: 'Translucent cylindrical horsehair hat worn by Joseon scholars and gentlemen.', significance: 'Symbol of scholarly dignity and moral integrity.' }
      ],
      culturalSignificance: 'The five cardinal colors (white, black, blue, yellow, red) correspond to the five natural elements and protect the wearer from negative energy.',
      regionalVariations: 'Specialized ramie cloth weaving in Hansan and warmer padded quilted winter jackets in northern mountain regions.',
      occasionsWorn: 'Seollal (Lunar New Year), Chuseok (Harvest festival), Doljanchi (baby’s 1st birthday), and weddings.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Chuseok', seasonOrDate: 'Autumn (8th lunar month)', description: 'Korean Thanksgiving; families travel to ancestral hometowns to share songpyeon half-moon rice cakes and perform Charye ancestral memorial rites.', tradition: 'Making pine needle-scented songpyeon rice cakes.' },
        { name: 'Seollal', seasonOrDate: 'First day of Korean Lunar Calendar', description: 'New Year celebration where younger generations perform deep bows (sebae) to elders and eat tteokguk rice cake soup for longevity.', tradition: 'Eating tteokguk to symbolically gain one year in age.' },
        { name: 'Boryeong Mud Festival', seasonOrDate: 'July', description: 'Energetic summer celebration of mineral-rich mud with obstacle courses, slides, and mud baths on Daecheon Beach.', tradition: 'Mud wrestling and mineral mud painting.' },
        { name: 'Lotus Lantern Festival (Yeondeunghoe)', seasonOrDate: 'May (Buddha’s Birthday)', description: 'Thousands of glowing paper lotus lanterns paraded through downtown Seoul, recognized by UNESCO.', tradition: 'Carrying glowing lotus lanterns through ancient streets.' }
      ],
      seasonalCelebrations: 'Cherry blossom festivals around Jinhae in spring and fiery red maple foliage viewings at Seoraksan in autumn.',
      culturalContext: 'Harmonizes Shinto-like native shamanism, Buddhist tranquility, and Confucian devotion to familial lineage.',
      howPeopleCelebrate: 'Playing traditional games such as Yut Nori (stick-tossing board game) and flying decorative kites (yeon).'
    },

    arts: {
      traditionalMusic: 'Pansori (epic solo dramatic storytelling with buk drum), Samulnori (four percussion instruments), and court music (Jongmyo Jeryeak).',
      danceForms: ['Buchaechum (vibrant Korean Fan Dance)', 'Talchum (satirical mask dance)', 'Salpuri (shamanic spiritual cleansing dance)'],
      artFormsAndCrafts: ['Najeonchilgi (mother-of-pearl lacquerware)', 'Buncheong and celadon ceramics', 'Hanji mulberry paper making', 'Bojagi patchwork wrapping cloths'],
      livingPractices: 'Jimjilbang bathhouse culture, tea ceremonies (Dado), and Taekwondo martial arts.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Gyeongbokgung Palace', location: 'Seoul', description: 'The grandest of the Five Grand Palaces built in 1395, featuring the picturesque Hyangwonjeong pavilion and royal changing of guards.', isUnesco: false },
        { name: 'Bukchon Hanok Village', location: 'Seoul', description: 'Preserved neighborhood of hundreds of traditional Joseon-era tiled-roof homes dating back 600 years.', isUnesco: false },
        { name: 'Bulguksa Temple & Seokguram Grotto', location: 'Gyeongju', description: 'Pinnacle of Silla Buddhist art featuring stone pagodas and an introspective granite Buddha overlooking the East Sea.', isUnesco: true },
        { name: 'Jeju Volcanic Island & Lava Tubes', location: 'Jeju Island', description: 'Dramatic volcanic shield containing Hallasan mountain and the subterranean Geomunoreum lava tube system.', isUnesco: true }
      ],
      unescoSitesCount: 16,
      naturalAttractions: ['Seoraksan National Park', 'Boseong Green Tea Terraces', 'Suncheonman Bay Wetland Reserve', 'Ulleungdo volcanic island']
    },

    interestingFacts: [
      'Every major apartment complex and home features floor-level underfloor radiant heating called "Ondol", a heating system invented over 2,000 years ago!',
      'When Koreans take photos, they say "Kimchi!" instead of "Cheese!" to trigger natural smiles.',
      'South Korea produces over 200 distinct varieties of kimchi, ranging from water kimchi (dongchimi) to mustard leaf kimchi.',
      'Babies were traditionally considered one year old on the day they were born, though modern legal age has transitioned to international standards.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A slight bow when saying hello, thank you, or goodbye.',
        'Using two hands when passing items, cups, or money to an elder or colleague.',
        'Taking off shoes before stepping into homes, traditional restaurants, and temple lodgings.'
      ],
      familyTraditions: 'Honoring ancestors through biannual Jesa memorial tables laden with carefully arranged fruits, meats, and soups.',
      everydayCustoms: 'Hiking on weekends wearing vibrant outdoor gear, drinking iced Americano coffee all year round, and enjoying evening Noraebang (karaoke).',
      modernLifestyle: 'Hyper-efficient subway systems, late-night cafe culture, 24-hour food delivery (baedal), and ultra-modern aesthetic skin-care routines.'
    },

    geography: {
      locationDescription: 'Occupies the southern half of the Korean Peninsula in East Asia, surrounded by the Yellow Sea, East China Sea, and East Sea.',
      climate: 'Four distinct seasons with warm humid summers and crisp, dry, snowy winters.',
      majorFeatures: ['Taebaek Mountain Range', 'Han River', 'Hallasan (highest peak at 1,947m on Jeju)', 'Nakdong River'],
      wildlife: ['Siberian Roe Deer', 'Korean Goral', 'Asian Black Bear', 'Eurasian Magpie (National Bird)'],
      naturalAttractionsSummary: 'Over 70% mountainous terrain offering world-class hiking trails, rocky granite peaks, and coastlines with thousands of rocky islets.'
    },

    sources: [
      { title: 'Korea Tourism Organization (VisitKorea)', url: 'https://english.visitkorea.or.kr' },
      { title: 'Cultural Heritage Administration of Korea', url: 'https://english.cha.go.kr' },
      { title: 'UNESCO World Heritage Centre – Republic of Korea', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'thailand',
    slug: 'thailand',
    name: 'Thailand',
    officialName: 'Kingdom of Thailand (Prathet Thai)',
    flagEmoji: '🇹🇭',
    capital: 'Bangkok',
    continent: 'Asia',
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The "Land of Smiles", where glittering golden Buddhist temples, floating markets, lush jungle sanctuaries, and aromatic street cuisines thrive.',
    taraGreeting: 'Sawasdee ka! Welcome to Thailand! Hear the gentle ringing of temple bells? Let’s learn the respectful "Wai" greeting and explore how Thai cuisine balances sweet, sour, salty, and spicy in every single bite!',
    taraFacts: [
      'Thailand is the only Southeast Asian nation that was never colonized by any European power, reflected in its name meaning "Land of the Free".',
      'Bangkok’s ceremonial name is the longest city name on Earth, spanning 168 letters and 21 distinct poetic epithets!',
      'Thailand is home to both the world’s smallest mammal (Kitti’s hog-nosed bat) and the world’s largest fish (the whale shark).'
    ],
    population: '71.8 Million',
    currency: 'Thai Baht (฿, THB)',
    languagesSummary: 'Thai (Central Thai script), Isan, Northern Thai (Kam Mueang), Southern Thai',
    coordinates: { lat: 15.8700, lng: 100.9925 },

    history: {
      timeline: [
        { period: 'c. 1238–1438 CE', title: 'Sukhothai Kingdom', description: 'Regarded as the cradle of Thai civilization; King Ramkhamhaeng created the Thai alphabet and established Theravada Buddhism.' },
        { period: '1351–1767 CE', title: 'Ayutthaya Kingdom', description: 'One of the wealthiest cosmopolitan trading capitals of Asia with grand gilded canals, hosting international merchant enclaves.' },
        { period: '1782–Present', title: 'Rattanakosin & Chakri Dynasty', description: 'King Rama I founded Bangkok as the royal capital and commissioned the magnificent Grand Palace and Temple of the Emerald Buddha.' }
      ],
      majorCivilizations: ['Dvaravati', 'Hariphunchai', 'Sukhothai', 'Ayutthaya', 'Thonburi', 'Rattanakosin'],
      importantEventsSummary: 'A proud heritage of diplomatic sovereignty, preserving deep Buddhist temple traditions while adopting modern international cooperation.',
      culturalHeritage: '7 UNESCO World Heritage Sites including the Historic City of Ayutthaya and Sukhothai.'
    },

    languages: {
      official: ['Thai'],
      widelySpoken: ['Central Thai', 'Isan (Northeastern Thai)', 'Northern Thai', 'Southern Thai'],
      regional: ['Karen', 'Hmong', 'Malay (Pattani)', 'Mon', 'Khmer dialects'],
      linguisticDiversityNotes: 'Thai is a tonal language with five tones (low, mid, high, falling, rising) written in a graceful script adapted from ancient Khmer.',
      commonPhrases: [
        { phrase: 'Sawasdee krup/ka', meaning: 'Hello / Goodbye', pronunciation: 'sah-wah-DEE krahp / kah' },
        { phrase: 'Khob khun krup/ka', meaning: 'Thank you', pronunciation: 'kob-KOON krahp / kah' },
        { phrase: 'Aroi mak!', meaning: 'Delicious!', pronunciation: 'ah-ROY mahk' },
        { phrase: 'Mai pen rai', meaning: 'No worries / You are welcome', pronunciation: 'my-pen-RY' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Pad Thai', localName: 'ผัดไทย', description: 'Stir-fried rice noodles with eggs, firm tofu, dried shrimp, tamarind pulp, palm sugar, topped with crushed roasted peanuts and fresh lime.', tag: 'National Street Icon' },
        { name: 'Tom Yum Goong', localName: 'ต้มยำกุ้ง', description: 'Hot and sour aromatic broth infused with lemongrass, kaffir lime leaves, galangal, fresh chili, and plump river prawns.', tag: 'Aromatic Mastery' },
        { name: 'Green Curry (Gaeng Keow Wan)', localName: 'แกงเขียวหวาน', description: 'Fragrant curry paste pounded from fresh green chilies, coconut milk, Thai eggplants, and sweet basil leaves.', tag: 'Rich & Spicy' },
        { name: 'Mango Sticky Rice (Khao Niew Mamuang)', localName: 'ข้าวเหนียวมะม่วง', description: 'Warm glutinous rice cooked in rich coconut milk and sugar, served alongside slices of sweet yellow honey mango.', tag: 'Heavenly Dessert' }
      ],
      popularIngredients: ['Lemongrass', 'Galangal', 'Kaffir lime leaves', 'Fish sauce (nam pla)', 'Thai bird’s eye chili', 'Tamarind', 'Coconut milk', 'Holy basil'],
      foodCustoms: 'Dishes are eaten with a fork and spoon (the spoon brings food to the mouth; the fork merely guides). Chopsticks are reserved mainly for noodle soups.',
      regionalSpecialties: 'Northern cuisine features herbal Khao Soi coconut noodle soup; Isan in the northeast is famous for spicy Som Tum papaya salad and grilled chicken.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Chut Thai', description: 'Official royal Thai dress composed of silk fabrics, featuring the Pha Nung sarong and Sabai shawl draped diagonally across the chest.', significance: 'Codified by Queen Sirikit to celebrate indigenous Thai silk weaving.' },
        { name: 'Pha Sin', description: 'Traditional tube skirt woven from cotton or silk with intricate geometric hem borders.', significance: 'Everyday regional garment worn gracefully by women across rural provinces.' }
      ],
      culturalSignificance: 'Thai silk weaving, championed by master artisans and natural sericulture, displays vibrant patterns inspired by tropical flora and Buddhist motifs.',
      regionalVariations: 'Hill tribe embroidered tunics in Chiang Rai, indigo tie-dyed Mo Hom cotton in Phrae, and Mudmee ikat silk in Isan.',
      occasionsWorn: 'Songkran, Loy Krathong, royal birthdays, Buddhist merit-making ceremonies, and weddings.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Songkran', seasonOrDate: 'April 13–15', description: 'Traditional Thai New Year transformed into the world’s biggest joyful water splash festival, symbolizing the washing away of sins and bad luck.', tradition: 'Gently pouring scented water over elders’ hands and joyous water battles.' },
        { name: 'Loy Krathong', seasonOrDate: 'November (Full moon of 12th lunar month)', description: 'The Festival of Lights where people float ornate handmade lotus-shaped leaf boats (krathongs) bearing candles on rivers to thank the Water Goddess.', tradition: 'Floating glowing candle-lit leaf boats onto waterways.' },
        { name: 'Yi Peng Lantern Festival', seasonOrDate: 'November (Chiang Mai)', description: 'Thousands of glowing rice-paper sky lanterns (khom loi) released simultaneously into the night sky like constellations of stars.', tradition: 'Releasing paper sky lanterns with personal wishes.' }
      ],
      seasonalCelebrations: 'Phi Ta Khon (Ghost Festival) in Dan Sai featuring colorful spirit masks and joyful bell dances.',
      culturalContext: 'Deeply intertwined with Theravada Buddhist values of merit-making (tham bun), respect for community elders, and nature’s monsoon cycles.',
      howPeopleCelebrate: 'Visiting temples early in the morning to offer food to orange-robed monks, releasing caged birds or fish for good karma, and gathering for family feasts.'
    },

    arts: {
      traditionalMusic: 'Piphat ensemble featuring the ranat ek bamboo xylophone, khong wong gong circles, and pi woodwinds.',
      danceForms: ['Khon (classical masked dance drama based on the Ramakien)', 'Lakhon classical dance', 'Fon Leb fingernail dance of the North'],
      artFormsAndCrafts: ['Fruit and vegetable carving', 'Thai celadon ceramics', 'Lacquerware and gold-leaf stencil work', 'Benjarong painted porcelain'],
      livingPractices: 'Traditional Thai Massage (Nuad Thai, UNESCO heritage), Muay Thai kickboxing, and Buddhist meditation.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Grand Palace & Wat Phra Kaew', location: 'Bangkok', description: 'Opulent royal complex with gold-leaf chedis and the revered 14th-century Emerald Buddha carved from a single piece of jade.', isUnesco: false },
        { name: 'Wat Arun (Temple of Dawn)', location: 'Bangkok', description: 'Iconic riverside temple with an 82-meter porcelain-encrusted prang tower reflecting golden sunrise over the Chao Phraya River.', isUnesco: false },
        { name: 'Historic City of Ayutthaya', location: 'Ayutthaya Province', description: 'Atmospheric red-brick temple ruins and the famous Buddha head gently intertwined within sacred banyan tree roots.', isUnesco: true },
        { name: 'Wat Rong Khun (White Temple)', location: 'Chiang Rai', description: 'Stunning contemporary Buddhist temple rendered entirely in pure white plaster and mirrored glass chips.', isUnesco: false }
      ],
      unescoSitesCount: 7,
      naturalAttractions: ['Phang Nga Bay limestone karst islands', 'Khao Sok National Park (ancient rainforest)', 'Erawan 7-tiered emerald waterfalls', 'Similan Islands coral reefs']
    },

    interestingFacts: [
      'It is considered culturally impolite to touch someone’s head, as the head is revered as the most sacred and elevated part of the body.',
      'Thailand has over 40,000 Buddhist temples (Wats), with nearly 300,000 resident monks across the country.',
      'Monkeys in Lopburi are celebrated every year with their very own royal banquet buffet featuring tons of fresh fruits and treats!',
      'Bangkok was originally known as the "Venice of the East" due to its intricate maze of natural canals (khlongs).'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'The Wai greeting: pressing palms together at chest or chin height with a slight bow.',
        'Never pointing the soles of your feet toward people, monks, or Buddha statues.',
        'Showing profound respect for the royal family and Buddhist relics.'
      ],
      familyTraditions: 'Young men traditionally spend a short period living as ordained novice monks to show gratitude and dedicate spiritual merit to their parents.',
      everydayCustoms: 'Grabbing fresh skewers and iced Thai tea from street carts, kicking off shoes before stepping into shops or homes.',
      modernLifestyle: 'Glitzy mega-malls with lush indoor waterfalls, bustling night markets with live indie music, and sky-trains gliding above historic canals.'
    },

    geography: {
      locationDescription: 'Heart of mainland Southeast Asia, shaped like an elephant’s head with its trunk extending down the Malay Peninsula.',
      climate: 'Tropical savanna and monsoon climate with three seasons: hot (March–May), rainy (June–October), and cool (November–February).',
      majorFeatures: ['Chao Phraya River Basin', 'Khorat Plateau', 'Tenasserim Mountain Range', 'Gulf of Thailand and Andaman Sea coasts'],
      wildlife: ['Asian Elephant (National Symbol)', 'Indochinese Tiger', 'Malayan Sun Bear', 'Clouded Leopard', 'Gibbons'],
      naturalAttractionsSummary: 'Pristine tropical islands with turquoise waters, hidden limestone lagoons, and protected elephant sanctuaries.'
    },

    sources: [
      { title: 'Tourism Authority of Thailand (TAT)', url: 'https://www.tourismthailand.org' },
      { title: 'Fine Arts Department of Thailand', url: 'https://www.finearts.go.th' },
      { title: 'UNESCO World Heritage Centre – Thailand', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'indonesia',
    slug: 'indonesia',
    name: 'Indonesia',
    officialName: 'Republic of Indonesia',
    flagEmoji: '🇮🇩',
    capital: 'Jakarta (Nusantara developing)',
    continent: 'Asia',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The world’s largest archipelago nation of over 17,000 islands, uniting hundreds of ethnic cultures under the national motto "Bhinneka Tunggal Ika" (Unity in Diversity).',
    taraGreeting: 'Halo! Selamat datang di Indonesia! Imagine an archipelago so vast it stretches across three time zones! From the ancient stone stupas of Borobudur to the turquoise waves of Bali, Indonesia is an endless tropical wonderland.',
    taraFacts: [
      'Indonesia is composed of more than 17,500 islands, of which approximately 6,000 are inhabited!',
      'The prehistoric Komodo Dragon, the world’s largest living lizard species, lives in the wild only on five Indonesian islands.',
      'Indonesian Batik was inscribed by UNESCO as an Intangible Cultural Heritage of Humanity in 2009.'
    ],
    population: '278 Million',
    currency: 'Indonesian Rupiah (Rp, IDR)',
    languagesSummary: 'Bahasa Indonesia (Official), Javanese, Sundanese, Balinese, Minangkabau (over 700 languages)',
    coordinates: { lat: -0.7893, lng: 113.9213 },

    history: {
      timeline: [
        { period: 'c. 7th–13th Century', title: 'Srivijaya Maritime Empire', description: 'Powerful Buddhist maritime thalassocracy based in Sumatra controlling the lucrative Malacca Strait trade.' },
        { period: 'c. 8th–9th Century', title: 'Sailendra & Sanjaya Dynasties', description: 'Built the monumental Buddhist Borobudur temple and the towering Hindu Prambanan temple compound in Central Java.' },
        { period: '1293–1527 CE', title: 'Majapahit Empire', description: 'Golden age under Prime Minister Gajah Mada, unifying much of the Indonesian archipelago.' },
        { period: '1602–1945 CE', title: 'Dutch East Indies & Independence', description: 'Centuries of Dutch spice monopoly ended with declaration of independence led by Sukarno on August 17, 1945.' }
      ],
      majorCivilizations: ['Srivijaya', 'Sailendra', 'Mataram', 'Majapahit', 'Aceh Sultanate', 'Ternate & Tidore'],
      importantEventsSummary: 'A maritime crossroad where Indian, Arab, Chinese, and European merchants met, creating rich layers of syncretic architecture, dance, and music.',
      culturalHeritage: '10 UNESCO World Heritage Sites including Borobudur Temple Compounds, Prambanan, and Komodo National Park.'
    },

    languages: {
      official: ['Indonesian (Bahasa Indonesia)'],
      widelySpoken: ['Javanese', 'Sundanese', 'Madurese', 'Minangkabau', 'Balinese', 'Buginese'],
      regional: ['Batak languages', 'Banjarese', 'Toraja', 'Papuan languages (over 270 distinct languages)'],
      linguisticDiversityNotes: 'Bahasa Indonesia, based on classic Riau Malay, was intentionally adopted as a unifying democratic national lingua franca in 1928 (Sumpah Pemuda).',
      commonPhrases: [
        { phrase: 'Selamat pagi', meaning: 'Good morning', pronunciation: 'suh-LAH-maht PAH-gee' },
        { phrase: 'Terima kasih', meaning: 'Thank you', pronunciation: 'tuh-REE-mah KAH-see' },
        { phrase: 'Sama-sama', meaning: 'You are welcome', pronunciation: 'SAH-mah SAH-mah' },
        { phrase: 'Apa kabar?', meaning: 'How are you?', pronunciation: 'AH-pah KAH-bahr' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Rendang', localName: 'Rendang Daging', description: 'Tender beef slow-simmered for hours in rich coconut milk, lemongrass, galangal, turmeric leaves, and spices until caramelized and intensely flavorful.', tag: 'World-Renowned Culinary Gem' },
        { name: 'Nasi Goreng', localName: 'Nasi Goreng', description: 'Indonesian fried rice cooked with sweet aromatic soy sauce (kecap manis), shallots, shrimp paste (terasi), topped with a fried egg and krupuk crackers.', tag: 'National Staple' },
        { name: 'Satay (Sate Ayam)', localName: 'Sate Ayam Madura', description: 'Skewered marinated chicken grilled over glowing coconut charcoal, smothered in velvety roasted peanut sauce.', tag: 'Beloved Skewers' },
        { name: 'Gado-Gado', localName: 'Gado-Gado', description: 'Warm salad of blanched vegetables, boiled eggs, fried tofu, and tempeh tossed in rich spicy peanut dressing.', tag: 'Nutritious Classic' }
      ],
      popularIngredients: ['Kecap manis (sweet soy sauce)', 'Terasi (fermented shrimp paste)', 'Lemongrass', 'Shallots', 'Galangal', 'Turmeric', 'Coconut milk', 'Bird’s eye chili'],
      foodCustoms: 'Sambal (spicy chili relish) is served with every single meal. Eating with clean fingers of the right hand is common in traditional warungs (local eateries).',
      regionalSpecialties: 'Padang cuisine in Sumatra is served by lining dozens of bowls in front of diners; Yogyakarta is famous for sweet Gudeg jackfruit stew; Bali is renowned for aromatic herbs.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Batik', description: 'Wax-resist dyed cotton or silk textiles featuring intricate geometric, floral, and royal patterns.', significance: 'Worn with immense pride on Fridays, national holidays, and international forums.' },
        { name: 'Kebaya', description: 'Embroidered, form-fitting blouse worn over a batik sarong by women across Java, Sunda, and Bali.', significance: 'National dress representing feminine poise and heritage.' },
        { name: 'Songket', description: 'Handwoven silk or cotton interwoven with gold and silver metallic threads from West Sumatra and Palembang.', significance: 'Luxurious ceremonial fabric worn during high royal occasions.' }
      ],
      culturalSignificance: 'Batik motifs like Parang (knife blade) were once reserved exclusively for royal sultans, symbolizing courage and nobility.',
      regionalVariations: 'Ikat weaving from Sumba and Flores, Ulos sacred cloths from Batak communities in Sumatra.',
      occasionsWorn: 'Independence Day, wedding ceremonies, government functions, and religious celebrations.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Independence Day (Tujuhbelasan)', seasonOrDate: 'August 17', description: 'Nationwide community celebration with flagpole ceremonies and playful neighborhood games like Panjat Pinang (greased pole climbing).', tradition: 'Neighborhood competitions and red-and-white flags everywhere.' },
        { name: 'Nyepi (Balinese Day of Silence)', seasonOrDate: 'March (Balinese Saka calendar)', description: 'Balinese Hindu New Year where the entire island shuts down completely for 24 hours—no flights, no lights, no travel—for deep meditation.', tradition: 'Day of complete silence preceded by fiery Ogoh-Ogoh demon effigy parades.' },
        { name: 'Waisak at Borobudur', seasonOrDate: 'May (Full moon)', description: 'Pilgrims gather at dawn at Borobudur to celebrate Buddha’s enlightenment and release thousands of warm lanterns into the starry night.', tradition: 'Releasing glowing paper lanterns over Borobudur temple.' }
      ],
      seasonalCelebrations: 'Toraja funeral ceremonies (Rambu Solo) with grand buffalo sacrifices and traditional house gatherings.',
      culturalContext: 'Harmony across religious traditions (Islam, Hinduism, Christianity, Buddhism, Confucianism) guided by the state philosophy of Pancasila.',
      howPeopleCelebrate: 'Families return home during Mudik (Eid homecoming), gathering for Halal bi Halal forgiveness ceremonies.'
    },

    arts: {
      traditionalMusic: 'Gamelan orchestras featuring bronze gongs, metallophones (saron), drums (kendang), and bamboo flutes (suling).',
      danceForms: ['Kecak Fire Dance (Bali)', 'Saman "Dance of a Thousand Hands" (Aceh)', 'Legong dance', 'Jaipongan (West Java)'],
      artFormsAndCrafts: ['Wayang Kulit shadow puppetry', 'Batik wax-dyeing', 'Wood carving of Jepara and Bali', 'Kris dagger metal forging'],
      livingPractices: 'Gotong royong (community mutual assistance), Jamu herbal medicine, and Pencak Silat martial arts.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Borobudur Temple', location: 'Central Java', description: 'The world’s largest Buddhist monument built in the 9th century, featuring nine stacked platforms, 2,672 relief panels, and 504 Buddha statues.', isUnesco: true },
        { name: 'Prambanan Temple Compounds', location: 'Yogyakarta', description: 'Majestic 9th-century Hindu temple compound dedicated to the Trimurti, with towering spires rising 47 meters.', isUnesco: true },
        { name: 'Uluwatu Temple', location: 'Bali', description: 'Ancient sea cliff temple perched 70 meters above crashing Indian Ocean waves, famous for sunset Kecak performances.', isUnesco: false },
        { name: 'Tana Toraja Traditional Settlements', location: 'South Sulawesi', description: 'Ancestral villages featuring dramatic boat-shaped Tongkonan clan houses with high-curved roofs.', isUnesco: false }
      ],
      unescoSitesCount: 10,
      naturalAttractions: ['Komodo National Park (pink beaches and dragons)', 'Mount Bromo volcanic caldera', 'Raja Ampat archipelago (epic marine biodiversity)', 'Lake Toba (largest volcanic lake in the world)']
    },

    interestingFacts: [
      'Indonesia is the birthplace of the world’s most expensive and unique coffee, Kopi Luwak.',
      'The Rafflesia arnoldii flower, native to Sumatran rainforests, produces the largest individual flower on Earth, measuring up to 1 meter in diameter!',
      'Java is the most populated island on the planet, home to more than 150 million residents.',
      'Indonesia sits right along the Pacific Ring of Fire, with over 130 active volcanoes across its islands.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A gentle handshake accompanied by touching your right hand to your heart as a sign of sincere goodwill.',
        'Never handing money, food, or objects with the left hand.',
        'Using polite familial titles like "Pak" (father/sir) and "Ibu" (mother/ma’am).'
      ],
      familyTraditions: 'Extensive multi-generational support networks; community events and decisions are settled through Musyawarah (consensus consultation).',
      everydayCustoms: 'Sipping sweet iced tea (Es Teh) in the afternoon, stopping at mobile roadside carts (kaki lima), and hanging out at warungs.',
      modernLifestyle: 'A powerhouse of digital motorcycle ride-hailing apps (GoJek, Grab), bustling metropolitan skyscrapers, and active social media communities.'
    },

    geography: {
      locationDescription: 'Equatorial archipelago lying between the Indian and Pacific Oceans, bridging Southeast Asia and Oceania.',
      climate: 'Tropical rainforest and monsoon climate with consistently warm temperatures and high humidity year-round.',
      majorFeatures: ['Barisan Mountains of Sumatra', 'Java volcanic arc', 'Kapuas River (Borneo)', 'Puncak Jaya (snow-capped mountain in Papua at 4,884m)'],
      wildlife: ['Komodo Dragon', 'Sumatran Orangutan', 'Javan Rhinoceros', 'Sumatran Tiger', 'Birds of Paradise'],
      naturalAttractionsSummary: 'Home to the Coral Triangle, containing 76% of all known coral species and over 3,000 species of reef fish.'
    },

    sources: [
      { title: 'Ministry of Tourism and Creative Economy (Wonderful Indonesia)', url: 'https://www.indonesia.travel' },
      { title: 'National Museum of Indonesia', url: 'https://museumnasional.or.id' },
      { title: 'UNESCO World Heritage Centre – Indonesia', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'vietnam',
    slug: 'vietnam',
    name: 'Vietnam',
    officialName: 'Socialist Republic of Vietnam',
    flagEmoji: '🇻🇳',
    capital: 'Hanoi',
    continent: 'Asia',
    heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'A country of dramatic emerald bays, ancient lantern-lit merchant streets, aromatic noodle broths, and deep perseverance.',
    taraGreeting: 'Xin chao! Let’s explore Vietnam together! From cruising past the mist-shrouded limestone karsts of Ha Long Bay to sipping rich condensed-milk egg coffee in Hanoi’s Old Quarter, Vietnam will steal your heart!',
    taraFacts: [
      'Vietnam is the world’s second-largest exporter of coffee, celebrated for its bold Robusta beans and sweet condensed milk drip brews.',
      'Son Doong Cave in central Vietnam is the largest natural cave passage in the world, so enormous it has its own localized weather and clouds!',
      'The graceful Vietnamese traditional dress, the Ao Dai, consists of a long split silk tunic worn over loose trousers.'
    ],
    population: '100.3 Million',
    currency: 'Vietnamese Dong (₫, VND)',
    languagesSummary: 'Vietnamese (Tieng Viet with Latin-based Quoc Ngu script)',
    coordinates: { lat: 14.0583, lng: 108.2772 },

    history: {
      timeline: [
        { period: 'c. 1000–100 BCE', title: 'Dong Son Bronze Culture', description: 'Famous for masterfully cast ceremonial Dong Son bronze drums depicting daily agricultural life and watercraft.' },
        { period: '111 BCE – 938 CE', title: 'Northern Domination & Ngo Quyen', description: 'Centuries of resisting Chinese imperial rule, culminating in General Ngo Quyen’s naval victory at the Battle of Bach Dang River.' },
        { period: '1009–1225 CE', title: 'Ly Dynasty & Temple of Literature', description: 'Golden age of national stability; Emperor Ly Thai To moved the capital to Thang Long (Hanoi) and founded Vietnam’s first university.' },
        { period: '1802–1945 CE', title: 'Nguyen Dynasty at Hue', description: 'Construction of the imperial walled citadel, royal tombs, and UNESCO-recognized court music (Nha Nhac) in Hue.' }
      ],
      majorCivilizations: ['Dong Son', 'Van Lang / Au Lac', 'Champa Kingdom', 'Ly & Tran Dynasties', 'Nguyen Dynasty'],
      importantEventsSummary: 'A history marked by legendary resilience, love for rivers and agriculture, and rich assimilation of Confucian scholarship with indigenous animism.',
      culturalHeritage: '8 UNESCO World Heritage Sites including Ha Long Bay, Hoi An Ancient Town, and the Complex of Hue Monuments.'
    },

    languages: {
      official: ['Vietnamese'],
      widelySpoken: ['Northern (Hanoi)', 'Central (Hue)', 'Southern (Saigon/Ho Chi Minh City)'],
      regional: ['Tay', 'Thai', 'Muong', 'Hmong', 'Khmer Krom', 'Cham'],
      linguisticDiversityNotes: 'Vietnamese is an Austroasiatic tonal language with six distinct tones, written since the 17th century using the Latin-based Quoc Ngu alphabet with diacritical marks.',
      commonPhrases: [
        { phrase: 'Xin chào', meaning: 'Hello', pronunciation: 'sin chow' },
        { phrase: 'Cảm ơn', meaning: 'Thank you', pronunciation: 'gahm un' },
        { phrase: 'Ngon quá!', meaning: 'Very delicious!', pronunciation: 'ngawn kwah' },
        { phrase: 'Tạm biệt', meaning: 'Goodbye', pronunciation: 'tahm byet' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Pho Bo', localName: 'Phở bò', description: 'Silky flat rice noodles in a 12-hour clear bone broth scented with star anise, cinnamon, charred ginger, topped with tender beef slices and herbs.', tag: 'National Soul' },
        { name: 'Banh Mi', localName: 'Bánh mì', description: 'Crisp French-style baguette filled with savory pâté, pickled daikon and carrots, fresh cilantro, cucumber, and pork charcuterie.', tag: 'Colonial Fusion' },
        { name: 'Bun Cha', localName: 'Bún chả', description: 'Charcoal-grilled pork patties and belly slices served over fresh rice vermicelli, fragrant herbs, and warm dipping nuoc cham sauce.', tag: 'Hanoi Specialty' },
        { name: 'Egg Coffee', localName: 'Cà phê trứng', description: 'Rich dark drip coffee topped with a creamy, custard-like whipped egg yolk and sweetened condensed milk foam.', tag: 'Artisanal Cafe Drink' }
      ],
      popularIngredients: ['Fish sauce (nuoc mam)', 'Star anise', 'Lemongrass', 'Fresh mint', 'Coriander', 'Thai basil', 'Rice paper (banh trang)', 'Lime'],
      foodCustoms: 'Meals emphasize extreme freshness, crunchy raw herbs, and the balance of the Five Elements (spicy/metal, sour/wood, bitter/fire, salty/water, sweet/earth).',
      regionalSpecialties: 'Hanoi in the north favors subtle, clean broths; Central Hue is famous for royal spicy soups like Bun Bo Hue; the South embraces rich coconut broths and sweet notes.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Ao Dai', description: 'Elegant two-piece garment featuring a fitted silk tunic with high neck and thigh-high side slits, worn over loose silk pants.', significance: 'National pride symbol worn by schoolteachers, students, and brides.' },
        { name: 'Non La', description: 'Conical sun hat skillfully woven from dried palm leaves and bamboo strips.', significance: 'Protects against tropical sun and downpours; can also be used as a handy cooling fan.' },
        { name: 'Ao Ba Ba', description: 'Simple silk pajama-style tunic and pants worn throughout the Mekong Delta.', significance: 'Traditional everyday working attire of southern riverways.' }
      ],
      culturalSignificance: 'The Ao Dai blends classic Vietnamese modesty with graceful fluidity, fluttering gently with the breeze as the wearer walks or cycles.',
      regionalVariations: 'Hmong, Dao, and Tay ethnic hill tribes weave breathtaking hemp costumes dyed in indigo and adorned with heavy silver torc necklaces.',
      occasionsWorn: 'Tet (Lunar New Year), graduation ceremonies, national festivals, and weddings.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Tet Nguyen Dan (Lunar New Year)', seasonOrDate: 'January–February', description: 'The most sacred holiday; families gather to clean ancestral altars, cook Banh Chung sticky rice cakes, and display peach blossom trees.', tradition: 'Sharing square Banh Chung wrapped in green dong leaves.' },
        { name: 'Hoi An Lantern Festival', seasonOrDate: 'Every full moon night', description: 'The historic town of Hoi An switches off electric lights, illuminating streets with thousands of colorful handmade silk lanterns.', tradition: 'Floating paper lotus lanterns on the Hoai River.' },
        { name: 'Hung Kings Temple Festival', seasonOrDate: '10th day of 3rd lunar month', description: 'National commemoration of the legendary founding kings of the nation at Mount Nghia Linh.', tradition: 'Solemn palanquin processions and bronze drum performances.' }
      ],
      seasonalCelebrations: 'Mid-Autumn Festival (Tet Trung Thu) with vibrant lion dances, glowing star lanterns, and sweet mooncakes for children.',
      culturalContext: 'Centers on ancestor veneration, filial piety, gratitude for good harvests, and deep communal harmony.',
      howPeopleCelebrate: 'Red lucky money envelopes (Li Xi) are gifted to children; homes are decorated with bright yellow apricot blossoms (Mai) in the south.'
    },

    arts: {
      traditionalMusic: 'Ca Tru sung poetry, Don Ca Tai Tu chamber music of the south, and Hue court orchestra (Nha Nhac).',
      danceForms: ['Water Puppetry (Mua Roi Nuoc)', 'Imperial Court Fan Dance', 'Cham traditional apsara dance'],
      artFormsAndCrafts: ['Lacquerware painting (Son mai)', 'Silk painting', 'Bat Trang ceramic pottery', 'Dong Ho woodcut folk prints'],
      livingPractices: 'Tea appreciation, sitting on tiny plastic stools on sidewalks drinking iced green tea (Tra Da), and practicing morning Tai Chi beside misty lakes.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Ha Long Bay', location: 'Quang Ninh Province', description: 'A surreal seascape of over 1,600 towering limestone pillars and islets rising from tranquil emerald waters.', isUnesco: true },
        { name: 'Hoi An Ancient Town', location: 'Quang Nam Province', description: 'Remarkably preserved 15th to 19th-century international trading port featuring Japanese covered bridges and Chinese merchant shophouses.', isUnesco: true },
        { name: 'Complex of Hue Monuments', location: 'Thua Thien Hue', description: 'Imperial City along the Perfume River featuring the Forbidden Purple City, palaces, and elaborately carved royal tombs.', isUnesco: true },
        { name: 'Phong Nha-Ke Bang Caves', location: 'Quang Binh Province', description: 'Ancient karst national park containing the world’s most spectacular cave systems, including Son Doong.', isUnesco: true }
      ],
      unescoSitesCount: 8,
      naturalAttractions: ['Sapa tiered rice terraces', 'Mekong Delta floating markets', 'Ban Gioc multi-tiered waterfall on the Chinese border', 'Phu Quoc white-sand beaches']
    },

    interestingFacts: [
      'Water puppetry (Mua Roi Nuoc) originated in the 11th century in flooded rice paddies of northern Vietnam, where hidden puppeteers operated bamboo rods behind bamboo screens.',
      'There are over 65 million registered motorbikes in Vietnam—making crossing the bustling city street an art of confident, steady walking!',
      'Cashews are a major Vietnamese treasure: Vietnam is the world’s leading exporter of processed cashew kernels.',
      'Vietnam’s coastline resembles the letter "S", stretching over 3,260 kilometers along the South China Sea.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'A warm smile and a slight bow, using both hands when handing something to an elder.',
        'Addressing elders with kinship terms like "Anh" (older brother), "Chi" (older sister), or "Bac" (uncle/aunt).',
        'Finishing everything in your rice bowl as a sign of appreciation for the farmer’s sweat.'
      ],
      familyTraditions: 'Every home maintains a prominent ancestral altar (Ban Tho) where incense, fresh fruit, and tea are offered on the first and fifteenth of each lunar month.',
      everydayCustoms: 'Waking up at 5:30 AM to exercise by Hoan Kiem Lake, shopping at morning wet markets for live fish and herbs, and taking a short midday nap.',
      modernLifestyle: 'A youthful tech-savvy population building rapid software startups, hip rooftop cafes overlooking centuries-old temples, and electric scooters.'
    },

    geography: {
      locationDescription: 'Occupies the eastern coast of the Indochinese Peninsula, bounded by China to the north, Laos and Cambodia to the west, and the sea to the east and south.',
      climate: 'Tropical monsoon; subtropical four-season climate in the north (cool misty winters), and year-round tropical warmth in the south.',
      majorFeatures: ['Red River Delta', 'Mekong River Delta', 'Annamite Mountain Range (Truong Son)', 'Ha Long Bay karsts'],
      wildlife: ['Saola (the rare "Asian Unicorn")', 'Indochinese Tiger', 'Red-shanked Douc Langur', 'Sun Bear'],
      naturalAttractionsSummary: 'Lush tropical biodiversity spanning dense mountain jungles, river deltas, and thousand-year-old rice terraces.'
    },

    sources: [
      { title: 'Vietnam National Authority of Tourism', url: 'https://vietnam.travel' },
      { title: 'Vietnam National Museum of History', url: 'https://baotanglichsu.vn' },
      { title: 'UNESCO World Heritage Centre – Vietnam', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'nepal',
    slug: 'nepal',
    name: 'Nepal',
    officialName: 'Federal Democratic Republic of Nepal',
    flagEmoji: '🇳🇵',
    capital: 'Kathmandu',
    continent: 'Asia',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'The Himalayan kingdom of the gods, home to Mount Everest, sacred Buddhist prayer flags, medieval pagoda squares, and snow leopards.',
    taraGreeting: 'Namaste! Welcome to the roof of the world! Did you know Nepal has the only non-rectangular national flag on Earth? Its two triangular pennants represent the towering Himalayan peaks and the enduring hope that Nepal lasts as long as the sun and the moon!',
    taraFacts: [
      'Nepal contains 8 of the world’s 14 highest mountain peaks over 8,000 meters, including Mount Everest (Sagarmatha) at 8,848.86 meters!',
      'Lumbini in southern Nepal is the verified historical birthplace of Siddhartha Gautama, who became the Buddha.',
      'The multi-tiered pagoda architectural style originated in the Kathmandu Valley before spreading across East Asia.'
    ],
    population: '30.9 Million',
    currency: 'Nepalese Rupee (Rs, NPR)',
    languagesSummary: 'Nepali (Official), Maithili, Bhojpuri, Tharu, Tamang, Newar',
    coordinates: { lat: 28.3949, lng: 84.1240 },

    history: {
      timeline: [
        { period: 'c. 6th Century BCE', title: 'Birth of Buddha & Kirat Dynasty', description: 'Siddhartha Gautama born in Lumbini; Kirat kings ruled the central hill valleys.' },
        { period: 'c. 400–750 CE', title: 'Licchavi Golden Age', description: 'Proliferation of classical stone sculptures, Sanskrit inscriptions, and Hindu-Buddhist synthesis in Kathmandu.' },
        { period: '1201–1769 CE', title: 'Malla Kingdoms & Durbar Squares', description: 'Flourishing of exquisite Newar woodcarving, metalwork, and competition between Kathmandu, Patan, and Bhaktapur kingdoms.' },
        { period: '1768 CE', title: 'Unification by Prithvi Narayan Shah', description: 'King Prithvi Narayan Shah unified fragmented hill principalities into the modern Kingdom of Nepal.' }
      ],
      majorCivilizations: ['Kirat', 'Licchavi', 'Malla', 'Shah Dynasty', 'Newar city-states'],
      importantEventsSummary: 'A proud mountain redoubt that retained independence throughout history, preserving living traditions of craftsmanship and sacred festivals.',
      culturalHeritage: '4 UNESCO World Heritage Sites including Kathmandu Valley (seven monument zones) and Sagarmatha National Park.'
    },

    languages: {
      official: ['Nepali'],
      widelySpoken: ['Nepali', 'Maithili', 'Bhojpuri', 'Tharu', 'Tamang'],
      regional: ['Newar (Nepal Bhasa)', 'Magar', 'Gurung', 'Sherpa', 'Rai', 'Limbu'],
      linguisticDiversityNotes: 'Nepal is home to over 120 indigenous mother tongues belonging to Indo-Aryan and Tibeto-Burman language families.',
      commonPhrases: [
        { phrase: 'Namaste', meaning: 'I bow to your divine soul', pronunciation: 'nah-muh-STAY' },
        { phrase: 'Dhanyabaad', meaning: 'Thank you', pronunciation: 'dhun-yuh-BAHD' },
        { phrase: 'Kasto chha?', meaning: 'How are you?', pronunciation: 'KUS-toh chuh' },
        { phrase: 'Mitho chha', meaning: 'It is delicious', pronunciation: 'MEE-toh chuh' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Dal Bhat Tarkari', localName: 'दाल भात तरकारी', description: 'Steamed rice served with spiced yellow lentil soup, seasonal vegetable curry, spicy tomato achar pickle, and crisp papadum.', tag: 'National Lifeline' },
        { name: 'Momos', localName: 'मोमो', description: 'Delicate steamed or fried dumplings filled with spiced minced meat or vegetables, dipped in fiery sesame-tomato-chili chutney.', tag: 'Beloved Street Food' },
        { name: 'Sel Roti', localName: 'सेल रोटी', description: 'Crisp, ring-shaped sweet fried rice-flour bread prepared during festive Hindu holidays.', tag: 'Festive Bread' },
        { name: 'Thukpa', localName: 'थुक्पा', description: 'Hearty Himalayan noodle soup with vegetables, ginger, and garlic, perfect for warming up after chilly mountain treks.', tag: 'Mountain Comfort' }
      ],
      popularIngredients: ['Mustard oil', 'Fenugreek seeds (methi)', 'Jimbu (Himalayan herb)', 'Timmur (Sichuan-like pepper)', 'Cumin', 'Turmeric', 'Ginger', 'Garlic'],
      foodCustoms: 'Nepalis say "Dal Bhat Power, 24 Hour!" reflecting how this balanced meal fuels farmers and mountain porters daily. Food is offered with hospitality.',
      regionalSpecialties: 'Newar cuisine features spicy Choila buffalo meat and Yomari sweet dumplings; Sherpa mountain cuisine relies on yak butter, tsampa roasted barley, and potato stew.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Daura Suruwal', description: 'Double-breasted cross-front tunic tied with eight fabric ties representing the Ashtamatrika deities, worn with tapered trousers.', significance: 'National formal dress for men, paired with a Dhaka Topi hat.' },
        { name: 'Dhaka Topi', description: 'Geometric handwoven cotton cap made on wooden looms in Palpa or Tehrathum.', significance: 'Proud symbol of Nepali national identity.' },
        { name: 'Gunyo Cholo', description: 'Traditional wrapped sari-like skirt and blouse gifted to young girls upon reaching womanhood.', significance: 'Marks female coming of age and cultural continuity.' }
      ],
      culturalSignificance: 'Fabrics are dyed in auspicious red and marigold tones, reflecting Hindu and Buddhist devotion.',
      regionalVariations: 'Bakhu heavy woolen wraps worn by Sherpas and Tamangs in mountain regions, colorful Newar Haku Patasi black saris with red borders.',
      occasionsWorn: 'Dashain, Tihar, wedding celebrations, and national assembly meetings.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Dashain', seasonOrDate: 'Autumn (September–October)', description: 'The grandest 15-day festival celebrating Goddess Durga’s victory over the demon Mahishasura; elders bestow red rice tika and jamara barley shoots on family members.', tradition: 'Receiving blessing tika and soaring high on towering bamboo swings (ping).' },
        { name: 'Tihar (Deepawali)', seasonOrDate: 'October–November', description: 'Five-day Festival of Lights; unique for dedicating specific days to honor crows, dogs (Kukur Tihar), cows, and brothers (Bhai Tika).', tradition: 'Garlanding faithful dogs and illuminating houses with oil lamps.' },
        { name: 'Holi', seasonOrDate: 'March', description: 'Joyful festival of colors marking the end of cold winter, celebrated enthusiastically in Kathmandu’s historic squares.', tradition: 'Splashing vibrant colors and singing folk songs.' },
        { name: 'Buddha Jayanti', seasonOrDate: 'May (Full moon)', description: 'Celebrating the birth, enlightenment, and passing of Buddha with thousands of butter lamps lit around Swayambhunath and Boudhanath stupas.', tradition: 'Circumambulating stupas spinning prayer wheels.' }
      ],
      seasonalCelebrations: 'Indra Jatra in Kathmandu featuring the chariot procession of the living goddess (Kumari) and masked Lakhey spirit dances.',
      culturalContext: 'Remarkable harmonious syncretism where Hindus and Buddhists worship at the exact same temple sanctuaries without distinction.',
      howPeopleCelebrate: 'Families construct huge towering bamboo swings in every village, feast on mutton curries and sweets, and fly colorful kites across clear autumn skies.'
    },

    arts: {
      traditionalMusic: 'Gandharva fiddle players playing the four-stringed Sarangi, Madal two-headed hand drums, and bansuri flutes.',
      danceForms: ['Charya Nritya Buddhist ritual dance', 'Lakhey mask dance', 'Maruni folk dance', 'Deuda circle dance of western hills'],
      artFormsAndCrafts: ['Thangka and Paubha scroll painting', 'Intricate wooden window carvings (Newar art)', 'Hand-hammered singing bowls', 'Lokta handmade paper'],
      livingPractices: 'Carving stone Mani stones with the mantra "Om Mani Padme Hum", spinning bronze prayer wheels, and mountain Sherpa guiding culture.'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Boudhanath Stupa', location: 'Kathmandu', description: 'One of the largest spherical Buddhist stupas in the world, with giant painted eyes of the Buddha looking in all four cardinal directions.', isUnesco: true },
        { name: 'Swayambhunath (Monkey Temple)', location: 'Kathmandu Valley hill', description: 'Ancient golden spire hilltop sanctuary overlooking the entire valley, inhabited by sacred holy monkeys.', isUnesco: true },
        { name: 'Bhaktapur Durbar Square', location: 'Bhaktapur', description: 'Open-air museum of medieval Newar architecture featuring the 55-Window Palace and the towering Nyatapola five-story pagoda.', isUnesco: true },
        { name: 'Mount Everest (Sagarmatha)', location: 'Solukhumbu District', description: 'The world’s highest point at 8,848.86 meters, surrounded by dramatic glaciers and Sherpa villages.', isUnesco: true }
      ],
      unescoSitesCount: 4,
      naturalAttractions: ['Chitwan National Park (One-horned rhinos and Bengal tigers)', 'Phewa Lake in Pokhara mirroring the Annapurna range', 'Annapurna Circuit trail', 'Rara Lake (deep turquoise alpine lake)']
    },

    interestingFacts: [
      'Nepal is the only country on Earth with a non-rectangular flag; mathematically, its unique proportions and geometry are encoded directly in the national constitution!',
      'Kathmandu Valley alone has seven distinct UNESCO Monument Zones within a radius of just 20 kilometers.',
      'Nepal was never conquered or colonized by foreign colonial powers, maintaining its sovereign freedom throughout history.',
      'Tenzing Norgay Sherpa of Nepal and Sir Edmund Hillary of New Zealand became the first humans to stand atop Mount Everest on May 29, 1953.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'Pressing palms together in front of the chest and warmly saying "Namaste".',
        'Always walking around stupas, shrines, and mani walls in a clockwise direction.',
        'Never stepping over someone’s outstretched legs or pointing feet at sacred images.'
      ],
      familyTraditions: 'Deep familial respect where younger members touch the feet of parents and grandparents during morning prayers and festivals.',
      everydayCustoms: 'Drinking sweet spiced milk tea (chiya) multiple times daily, shopping for fresh greens at roadside markets, and spinning prayer wheels.',
      modernLifestyle: 'A bustling hub for international trekking adventurers, creative arts cafes in Patan, and a proud generation of digital innovators in Kathmandu.'
    },

    geography: {
      locationDescription: 'Landlocked Himalayan nation nestled between China (Tibet) to the north and India to the south, east, and west.',
      climate: 'Extraordinary climate gradient: subtropical jungles in the southern Terai plains, temperate middle hills, and arctic glaciers in the high Himalayas.',
      majorFeatures: ['Himalayan Range', 'Mahabharat Range (Lesser Himalayas)', 'Terai Lowland Plains', 'Kali Gandaki Gorge (deepest gorge on Earth)'],
      wildlife: ['Snow Leopard', 'Greater One-Horned Rhinoceros', 'Bengal Tiger', 'Red Panda', 'Himalayan Monal (National Bird)'],
      naturalAttractionsSummary: 'From sub-tropical rhinos grazing in tall elephant grass to ice-clad 8,000-meter giants.'
    },

    sources: [
      { title: 'Nepal Tourism Board', url: 'https://ntb.gov.np' },
      { title: 'Department of Archaeology, Nepal', url: 'http://doa.gov.np' },
      { title: 'UNESCO World Heritage Centre – Nepal', url: 'https://whc.unesco.org' }
    ]
  },

  {
    id: 'philippines',
    slug: 'philippines',
    name: 'Philippines',
    officialName: 'Republic of the Philippines',
    flagEmoji: '🇵🇭',
    capital: 'Manila',
    continent: 'Asia',
    heroImage: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1600&q=80',
    cardImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    shortIntro: 'An emerald archipelago of over 7,600 islands, famed for warm "Bayanihan" community spirit, festive fiestas, and crystal turquoise waters.',
    taraGreeting: 'Kumusta! Welcome to the sunny Philippines! Did you know Filipinos are renowned worldwide for their joyful singing, legendary hospitality, and colorful Jeepneys? Let’s explore together!',
    taraFacts: [
      'The Philippines consists of 7,641 islands, surrounded by some of the most biodiverse marine ecosystems on Earth!',
      'Filipino "Bayanihan" refers to neighbors literally lifting an entire bamboo house (bahay kubo) on their shoulders to move it to a new location together.',
      'The Puerto Princesa Subterranean River is one of the New 7 Wonders of Nature, featuring an 8.2-kilometer navigable underground river.'
    ],
    population: '115.5 Million',
    currency: 'Philippine Peso (₱, PHP)',
    languagesSummary: 'Filipino (Tagalog-based) & English (Official), Cebuano, Ilocano, Hiligaynon (over 170 living languages)',
    coordinates: { lat: 12.8797, lng: 121.7740 },

    history: {
      timeline: [
        { period: 'Pre-1521 CE', title: 'Indigenous Datus & Maritime Rajahnates', description: 'Flourishing maritime polities like the Kingdom of Tondo, Rajahnate of Butuan, and Sultanate of Sulu trading with China and Southeast Asia.' },
        { period: '1521–1898 CE', title: 'Spanish Colonial Era & Galleon Trade', description: 'Over 300 years of Spanish rule introducing Christianity, Baroque stone churches, and the Manila-Acapulco Galleon trade connecting Asia and the Americas.' },
        { period: '1898 CE', title: 'Philippine Revolution & Independence', description: 'Revolutionary leaders like Jose Rizal and Emilio Aguinaldo declared independence on June 12, 1898.' },
        { period: '1898–1946 CE', title: 'American Period & Commonwealth', description: 'Introduction of English language public education system, democratic institutions, followed by heroic liberation after WWII.' }
      ],
      majorCivilizations: ['Pre-colonial Rajahnates', 'Sultanates of Sulu and Maguindanao', 'Spanish East Indies', 'First Philippine Republic'],
      importantEventsSummary: 'A dynamic fusion of Austronesian roots, Spanish Catholic devotion, Mexican galleon trade cultural ties, and modern American influences.',
      culturalHeritage: '6 UNESCO World Heritage Sites including Baroque Churches of the Philippines and the Rice Terraces of the Philippine Cordilleras.'
    },

    languages: {
      official: ['Filipino (Standard Tagalog)', 'English'],
      widelySpoken: ['Tagalog', 'Cebuano (Bisaya)', 'Ilocano', 'Hiligaynon', 'Bikol', 'Waray'],
      regional: ['Kapampangan', 'Pangasinan', 'Maranao', 'Maguindanaon', 'Tausug'],
      linguisticDiversityNotes: 'English is universally spoken in education, commerce, and government, alongside vibrant Taglish (Tagalog-English code-switching).',
      commonPhrases: [
        { phrase: 'Kumusta ka?', meaning: 'How are you?', pronunciation: 'koo-moos-TAH kah' },
        { phrase: 'Salamat', meaning: 'Thank you', pronunciation: 'sah-LAH-maht' },
        { phrase: 'Masarap!', meaning: 'Delicious!', pronunciation: 'mah-sah-RAHP' },
        { phrase: 'Mabuhay!', meaning: 'Welcome / Long live!', pronunciation: 'mah-BOO-hy' }
      ]
    },

    food: {
      signatureDishes: [
        { name: 'Adobo', localName: 'Adobong Baboy/Manok', description: 'Chicken or pork braised in soy sauce, cane vinegar, crushed garlic, whole black peppercorns, and bay leaves until deeply savory and tender.', tag: 'National Soul Dish' },
        { name: 'Sinigang', localName: 'Sinigang na Baboy', description: 'Comforting sour tamarind broth packed with tender meat, water spinach (kangkong), radish, and long green chili peppers.', tag: 'Sour Comfort' },
        { name: 'Lechon', localName: 'Lechon Baboy', description: 'Whole roasted pig spit-roasted over charcoal until the skin is shatteringly crisp and the meat is succulent and herb-infused.', tag: 'Fiesta Showstopper' },
        { name: 'Halo-Halo', localName: 'Halo-Halo', description: 'Layers of crushed shaved ice, sweet beans, jackfruit, coconut jelly, topped with leche flan custard and purple ube ice cream.', tag: 'Ultimate Summer Treat' }
      ],
      popularIngredients: ['Cane vinegar', 'Calamansi (Philippine lime)', 'Soy sauce', 'Garlic', 'Bagoong (shrimp paste)', 'Coconut milk (gata)', 'Ube (purple yam)'],
      foodCustoms: 'Boodle Fight: eating together with hands (Kamayan) from a giant communal banquet spread across clean banana leaves, symbolizing total equality and camaraderie.',
      regionalSpecialties: 'Bicol in the south is famous for spicy Bicol Express simmered in chili and coconut; Pampanga is recognized as the culinary capital of sizzling Sisig; Cebu is world-famous for aromatic Lechon.'
    },

    clothing: {
      traditionalGarments: [
        { name: 'Barong Tagalog', description: 'Embroidered, sheer formal shirt made from piña (pineapple leaf fiber) or jusi (silk) worn untucked over an undershirt.', significance: 'National formal attire for men, prized for its intricate needlework.' },
        { name: 'Baro’t Saya / Filipiniana', description: 'Traditional ensemble featuring butterfly sleeves (made iconic by the Terno dress), a blouse (baro), and a long skirt (saya).', significance: 'Celebrates Filipino elegance and historical resilience.' }
      ],
      culturalSignificance: 'Piña fabric weaving from Aklan is a painstakingly fine art where individual fibers from pineapple leaves are hand-knotted and loomed.',
      regionalVariations: 'T’boli T’nalak dream weaving from abaca fibers in Mindanao, Yakan colorful geometric weaves in Basilan, and Ifugao mountain wraps.',
      occasionsWorn: 'Weddings, national holidays, Buwan ng Wika (Language Month), and formal diplomatic galas.'
    },

    festivals: {
      majorFestivals: [
        { name: 'Sinulog Festival', seasonOrDate: 'Third Sunday of January (Cebu)', description: 'Grand celebration honoring the Santo Niño with millions dancing in streets to the hypnotic drumbeat rhythm "Pit Señor!".', tradition: 'Two steps forward, one step back prayer dance.' },
        { name: 'Ati-Atihan', seasonOrDate: 'January (Kalibo, Aklan)', description: 'The "Mother of All Philippine Festivals"; revelers coat their faces with dark soot and dance in wild tribal costumes to non-stop street drums.', tradition: 'Face painting and non-stop street percussion.' },
        { name: 'Panagbenga Flower Festival', seasonOrDate: 'February (Baguio City)', description: 'Spectacular month-long celebration featuring giant floats made entirely of fresh mountain flowers.', tradition: 'Flower-covered parade floats and street dancers.' },
        { name: 'Pahiyas Festival', seasonOrDate: 'May 15 (Lucban, Quezon)', description: 'Harvest thanksgiving to San Isidro Labrador where houses are decorated with colorful translucent rice wafers (kiping) and farm produce.', tradition: 'Decorating home facades with edible kiping leaf art.' }
      ],
      seasonalCelebrations: 'The world’s longest Christmas season, beginning on September 1 ("Ber months") and running through early January with glowing parol star lanterns.',
      culturalContext: 'A vibrant synthesis of Catholic religious devotion and lively native fiesta traditions uniting entire barangay communities.',
      howPeopleCelebrate: 'Singing karaoke with relatives, preparing overflowing fiesta tables for neighbors and visitors, and sharing desserts.'
    },

    arts: {
      traditionalMusic: 'Kulintang gong ensembles in Mindanao, Kundiman lyrical love ballads, and Rondalla string orchestra featuring bandurrias.',
      danceForms: ['Tinikling (dancing between clapping bamboo poles)', 'Singkil (regal Maranao royal umbrella and bamboo dance)', 'Pandanggo sa Ilaw (dancing with oil lamps balanced on head and hands)'],
      artFormsAndCrafts: ['Piña cloth embroidery', 'Abaca weaving', 'Woodcarving of Paete, Laguna', 'Capiz shell craftsmanship'],
      livingPractices: 'Bayanihan spirit of communal help, Harana serenading traditions, and Arnis/Eskrima martial arts (National Sport).'
    },

    landmarks: {
      famousLandmarks: [
        { name: 'Banaue Rice Terraces', location: 'Ifugao, Cordillera Mountains', description: '2,000-year-old mountain terraces carved into the contours of the mountains by ancestors using hand tools, often called the Eighth Wonder of the World.', isUnesco: true },
        { name: 'Chocolate Hills', location: 'Bohol', description: 'Over 1,200 symmetrical conical karst mounds that turn cocoa-brown during the dry season, looking like giant chocolate drops.', isUnesco: false },
        { name: 'Intramuros & San Agustin Church', location: 'Manila', description: 'Historic 16th-century Spanish walled city featuring the oldest surviving stone church in the Philippines.', isUnesco: true },
        { name: 'Puerto Princesa Underground River', location: 'Palawan', description: 'A vast subterranean cave passage containing spectacular stalactite formations flowing directly into the South China Sea.', isUnesco: true }
      ],
      unescoSitesCount: 6,
      naturalAttractions: ['Tubbataha Reefs Natural Park', 'Mayon Volcano (world’s most perfect symmetrical volcanic cone)', 'El Nido limestone karst lagoons', 'Coron shipwreck diving']
    },

    interestingFacts: [
      'The iconic Philippine Jeepney was originally created from surplus US military jeeps left behind after WWII, decorated with flamboyant metal art, mirrors, and horns.',
      'The Philippine Eagle (Haribon) is one of the largest and most powerful eagles in the world, with a wingspan exceeding two meters!',
      'Filipinos are globally renowned as passionate singers—karaoke machines are found in almost every neighborhood, celebration, and living room.',
      'San Fernando in Pampanga is known as the "Christmas Capital of the Philippines" for its colossal giant kaleidoscope lanterns (Giant Parols) reaching 20 feet wide.'
    ],

    dailyLife: {
      greetingsAndEtiquette: [
        'Mano Po: taking an elder’s hand and pressing it gently to your forehead to receive their blessing and show respect.',
        'Using the polite words "Po" and "Opo" at the end of sentences when speaking to elders.',
        'Offering food immediately to anyone who visits: "Kain tayo!" (Let’s eat!).'
      ],
      familyTraditions: 'Close-knit extended families with deep bonds; Godparents (Ninong/Ninang) play an active lifelong spiritual and supportive role.',
      everydayCustoms: 'Afternoon merienda snacks (like banana-cue or turon), gathering in sari-sari neighborhood convenience stores for local news, and Sunday family gatherings.',
      modernLifestyle: 'Thriving IT and BPO industry hubs, vibrant shopping mall culture with ice skating rinks and rooftop gardens, and creative indie music scenes.'
    },

    geography: {
      locationDescription: 'Archipelagic nation in Southeast Asia situated in the western Pacific Ocean, divided into three main island groups: Luzon, Visayas, and Mindanao.',
      climate: 'Tropical maritime with a dry season (November–April) and a wet monsoon season (May–October).',
      majorFeatures: ['Sierra Madre mountain range', 'Cagayan River', 'Mayon Volcano', 'Taal Volcano (volcano on an island within a lake on an island)'],
      wildlife: ['Philippine Eagle', 'Philippine Tarsier (one of the world’s smallest primates)', 'Tamaraw dwarf buffalo', 'Whale Shark (Butanding)'],
      naturalAttractionsSummary: 'Over 36,000 kilometers of coastline filled with powdery white and pink beaches, coral walls, and hidden lagoons.'
    },

    sources: [
      { title: 'Department of Tourism, Philippines', url: 'https://philippines.travel' },
      { title: 'National Museum of the Philippines', url: 'https://nationalmuseum.gov.ph' },
      { title: 'UNESCO World Heritage Centre – Philippines', url: 'https://whc.unesco.org' }
    ]
  }
];
