import React, { useState } from 'react';
import { allCountries, continents, getFeaturedCountries, getCountryOfTheDay } from '../data/countries';
import { storiesData } from '../data/stories';
import { TaraMascot } from '../components/mascot/TaraMascot';
import { InteractiveWorldMap } from '../components/map/InteractiveWorldMap';
import { userService } from '../services/userService';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  Heart, 
  Bookmark, 
  Globe2, 
  Shuffle, 
  Star, 
  Award, 
  BookOpen,
  ChevronRight,
  Flame,
  Check
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, param?: string) => void;
  onOpenSpin: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenSpin }) => {
  const [selectedContinent, setSelectedContinent] = useState<string>('All');
  const [savedStatus, setSavedStatus] = useState<Record<string, boolean>>({});

  const featuredCountries = getFeaturedCountries();
  const countryOfDay = getCountryOfTheDay();
  const progress = userService.getProgress();

  const handleToggleFavorite = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation();
    const added = userService.toggleFavoriteCountry(slug);
    setSavedStatus(prev => ({ ...prev, [slug]: added }));
  };

  const didYouKnowFacts = [
    {
      country: 'Japan',
      slug: 'japan',
      flag: '🇯🇵',
      fact: 'The art of "Kintsugi" repairs broken ceramics with powdered gold, honoring the item’s history rather than disguising its cracks.',
      tag: 'Philosophy',
      bgClass: 'clay-card-lavender'
    },
    {
      country: 'Mexico',
      slug: 'mexico',
      flag: '🇲🇽',
      fact: 'The Great Pyramid of Cholula in Puebla has a base four times larger than Giza’s Great Pyramid, making it the largest pyramid by volume on Earth!',
      tag: 'Ancient Architecture',
      bgClass: 'clay-card-peach'
    },
    {
      country: 'Kenya',
      slug: 'kenya',
      flag: '🇰🇪',
      fact: 'Over 1.5 million wildebeest, zebras, and gazelles participate in the annual Great Migration across the savannah—a spectacle visible from airplanes!',
      tag: 'Wildlife Marvel',
      bgClass: 'clay-card-mint'
    },
    {
      country: 'New Zealand',
      slug: 'new-zealand',
      flag: '🇳🇿',
      fact: 'In 1893, New Zealand became the very first self-governing country on Earth where all women won the democratic right to vote.',
      tag: 'History Maker',
      bgClass: 'clay-card-sky'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 text-left">
      {/* ========================================================
          SECTION A: HERO
      ======================================================== */}
      <section className="relative pt-6 sm:pt-10 pb-12 overflow-hidden">
        {/* Floating Pastel Decorative Blobs */}
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#C8B6FF]/30 blur-3xl -z-10 animate-soft-float" />
        <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-[#FFC6A8]/30 blur-3xl -z-10 animate-soft-float-delayed" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-[#B8F2D0]/30 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C8B6FF] shadow-sm text-xs font-bold text-[#8B6CE8]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Global Culture Discovery Platform</span>
              </div>

              {/* Large Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#303044] leading-[1.1] tracking-tight">
                The world is full of stories.{' '}
                <span className="text-[#8B6CE8] block mt-1">Let’s discover them!</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg md:text-xl text-[#6B6882] font-medium leading-relaxed max-w-xl">
                Travel across continents, explore fascinating cultures, uncover traditions, and discover the stories that make every country unique.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('explore')}
                  className="clay-btn clay-btn-purple text-sm sm:text-base py-3 px-6 shadow-md"
                >
                  <Compass className="w-5 h-5" />
                  <span>Start Exploring</span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('meet-tara');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="clay-btn clay-btn-white text-sm sm:text-base py-3 px-6 shadow-md"
                >
                  <span>Meet Tara</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenSpin}
                  className="clay-btn clay-btn-peach text-sm sm:text-base py-3 px-5 shadow-md"
                >
                  <Shuffle className="w-4 h-4" />
                  <span>Spin the Globe</span>
                </button>
              </div>

              {/* Quick Trust / Stats Bar */}
              <div className="pt-6 grid grid-cols-3 gap-3 max-w-md border-t border-[#C8B6FF]/30">
                <div>
                  <span className="font-heading font-extrabold text-2xl text-[#8B6CE8]">30</span>
                  <p className="text-xs text-[#6B6882] font-bold">Launch Countries</p>
                </div>
                <div>
                  <span className="font-heading font-extrabold text-2xl text-[#303044]">6</span>
                  <p className="text-xs text-[#6B6882] font-bold">Continents</p>
                </div>
                <div>
                  <span className="font-heading font-extrabold text-2xl text-[#1E8A54]">10</span>
                  <p className="text-xs text-[#6B6882] font-bold">Cultural Themes</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Tara Mascot Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative">
                {/* Floating Clay Pill Cards around Tara */}
                <div className="absolute -top-4 -left-6 z-20 clay-card py-2 px-3.5 bg-white/95 border-2 border-[#FFE69A] shadow-lg flex items-center gap-2 animate-soft-float">
                  <span className="text-xl">🌸</span>
                  <div className="text-left">
                    <span className="text-xs font-bold text-[#303044] block">Hanami Season</span>
                    <span className="text-[10px] text-[#8B6CE8] font-bold">Japan</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 z-20 clay-card py-2 px-3.5 bg-white/95 border-2 border-[#B8F2D0] shadow-lg flex items-center gap-2 animate-soft-float-delayed">
                  <span className="text-xl">🍛</span>
                  <div className="text-left">
                    <span className="text-xs font-bold text-[#303044] block">Biryani Feast</span>
                    <span className="text-[10px] text-[#28A56E] font-bold">India</span>
                  </div>
                </div>

                {/* 3D Mascot Illustration */}
                <div className="p-6 rounded-[36px] bg-gradient-to-tr from-[#EBE5FF] via-[#FFF9F0] to-[#FFE2D4] border-4 border-white shadow-2xl">
                  <TaraMascot
                    pose="hero"
                    size="hero"
                    speechBubble="Ready for a new adventure? Let’s discover the magic in every corner of our world!"
                    animate={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION B: INTERACTIVE WORLD MAP
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE5FF] text-[#8B6CE8] text-xs font-bold mb-2 uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Interactive World Map</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#303044]">
            Touch the map to explore cultures
          </h2>
          <p className="text-sm sm:text-base text-[#6B6882] mt-2">
            Hover over any country pin to reveal its story, or click to dive into history, cuisines, traditional attire, and festivals.
          </p>
        </div>

        <InteractiveWorldMap
          onSelectCountry={(slug) => onNavigate('country', slug)}
          selectedContinent="All"
          mode="explore"
        />
      </section>

      {/* ========================================================
          SECTION C: EXPLORE BY CONTINENT
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCF8E8] text-[#1E8A54] text-xs font-bold mb-2 uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Continental Journeys</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#303044]">
              Explore by Continent
            </h2>
            <p className="text-sm text-[#6B6882] mt-1">
              Select any continent card to browse its unique civilizations and destinations.
            </p>
          </div>

          <button
            onClick={() => onNavigate('explore')}
            className="clay-btn clay-btn-white text-xs py-2 px-4 shadow-sm"
          >
            <span>View All Countries</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {continents.map((continent) => (
            <div
              key={continent.name}
              onClick={() => onNavigate('explore', continent.name)}
              className="clay-card overflow-hidden group cursor-pointer border-2 border-white hover:border-[#8B6CE8] transition-all"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={continent.image}
                  alt={continent.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-[#8B6CE8] px-2 py-0.5 rounded-full">
                      {continent.count} Destinations
                    </span>
                    <h3 className="text-2xl font-bold font-heading mt-1 text-white">
                      {continent.name}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-5 text-left">
                <p className="text-xs text-[#6B6882] line-clamp-2 leading-relaxed mb-4">
                  {continent.description}
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-[#8B6CE8] group-hover:translate-x-1 transition-transform">
                  <span>Explore {continent.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION D: POPULAR DESTINATIONS
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE2D4] text-[#C2511E] text-xs font-bold mb-2 uppercase tracking-wider">
              <Star className="w-3.5 h-3.5" />
              <span>Curated Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#303044]">
              Popular Destinations
            </h2>
            <p className="text-sm text-[#6B6882] mt-1">
              Top countries loved by explorers for their vibrant traditions and breathtaking sights.
            </p>
          </div>

          <button
            onClick={() => onNavigate('explore')}
            className="clay-btn clay-btn-purple text-xs py-2 px-4 shadow-sm"
          >
            <span>Browse All 30 Countries</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCountries.slice(0, 6).map((country) => {
            const isFav = progress.favoriteCountries.includes(country.slug);
            const isExplored = progress.exploredCountries.includes(country.slug);

            return (
              <div
                key={country.id}
                onClick={() => onNavigate('country', country.slug)}
                className="clay-card overflow-hidden group cursor-pointer border-2 border-white hover:border-[#8B6CE8] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={country.cardImage}
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-[#303044] shadow-sm flex items-center gap-1">
                        <span>{country.flagEmoji}</span>
                        <span>{country.continent}</span>
                      </span>

                      <button
                        onClick={(e) => handleToggleFavorite(e, country.slug)}
                        className={`p-2 rounded-full backdrop-blur-md transition-all shadow-sm ${
                          isFav ? 'bg-red-500 text-white' : 'bg-white/80 hover:bg-white text-[#303044]'
                        }`}
                        title={isFav ? 'Remove from favorites' : 'Save to favorites'}
                      >
                        <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
                      </button>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold font-heading text-white drop-shadow-md">
                        {country.name}
                      </h3>
                      <p className="text-xs text-white/90 font-semibold drop-shadow-sm">
                        Capital: {country.capital}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 text-left">
                    <p className="text-xs text-[#6B6882] line-clamp-2 leading-relaxed mb-4">
                      {country.shortIntro}
                    </p>

                    {/* Quick highlights tag row */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="px-2 py-0.5 rounded-md bg-[#FFF2C7] text-[#9E7307] text-[10px] font-bold">
                        {country.food.signatureDishes[0]?.name || 'Culinary Art'}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-[#EBE5FF] text-[#8B6CE8] text-[10px] font-bold">
                        {country.festivals.majorFestivals[0]?.name || 'Festival'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-[#F0EBF8] pt-3 text-xs font-bold">
                  {isExplored ? (
                    <span className="text-[#1E8A54] flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Explored
                    </span>
                  ) : (
                    <span className="text-[#8B6CE8]">Unexplored</span>
                  )}
                  <span className="clay-btn clay-btn-white py-1 px-3 text-[11px] group-hover:bg-[#8B6CE8] group-hover:text-white transition-all">
                    Explore
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          SECTION E: COUNTRY OF THE DAY
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="clay-card p-6 sm:p-10 bg-gradient-to-br from-[#FFF9F0] via-white to-[#F2EDFF] border-4 border-[#C8B6FF] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Mascot & Badge */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE69A] text-[#B87000] text-xs font-bold mb-4 uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5" />
                <span>Featured Country of the Day</span>
              </div>
              <div className="mb-2">
                <TaraMascot
                  pose="reading"
                  size="lg"
                  animate={true}
                  speechBubble={`Let's discover ${countryOfDay.name}!`}
                />
              </div>
            </div>

            {/* Right: Country Info Card */}
            <div className="lg:col-span-8 text-left space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-4xl">{countryOfDay.flagEmoji}</span>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-[#303044] font-heading">
                    {countryOfDay.name}
                  </h3>
                  <p className="text-xs font-bold text-[#8B6CE8] uppercase tracking-wider">
                    {countryOfDay.continent} • Capital: {countryOfDay.capital} • Population: {countryOfDay.population}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6B6882] leading-relaxed">
                {countryOfDay.shortIntro}
              </p>

              {/* Fascinating Cultural Fact Box */}
              <div className="p-4 rounded-2xl bg-white border-2 border-[#FFE69A] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-[#B87000] uppercase mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Tara's Fascinating Fact</span>
                </div>
                <p className="text-xs sm:text-sm text-[#303044] font-medium leading-relaxed italic">
                  "{countryOfDay.interestingFacts[0]}"
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('country', countryOfDay.slug)}
                  className="clay-btn clay-btn-purple text-xs sm:text-sm py-2.5 px-6 shadow-md"
                >
                  <span>Explore {countryOfDay.name} in Detail</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenSpin}
                  className="clay-btn clay-btn-white text-xs sm:text-sm py-2.5 px-4 shadow-sm"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                  <span>Spin for Another</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION F: DID YOU KNOW?
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE5FF] text-[#8B6CE8] text-xs font-bold mb-2 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curiosity Corner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#303044]">
            Did You Know?
          </h2>
          <p className="text-sm sm:text-base text-[#6B6882] mt-1">
            Fascinating world trivia and cultural discoveries to expand your horizons.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {didYouKnowFacts.map((factItem, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate('country', factItem.slug)}
              className={`clay-card ${factItem.bgClass} p-6 flex flex-col justify-between cursor-pointer hover:-translate-y-1 transition-all group text-left`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{factItem.flag}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/70 text-[#303044]">
                    {factItem.tag}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[#303044] mb-2 font-heading">
                  {factItem.country}
                </h4>

                <p className="text-xs text-[#303044]/90 font-medium leading-relaxed">
                  "{factItem.fact}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-black/10 flex items-center justify-between text-xs font-bold text-[#303044] group-hover:text-[#8B6CE8] transition-colors">
                <span>Explore {factItem.country}</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION G: MEET TARA
      ======================================================== */}
      <section id="meet-tara" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="clay-card p-8 sm:p-12 bg-white border-4 border-[#C8B6FF] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Mascot Avatar */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="p-6 rounded-[32px] bg-gradient-to-tr from-[#FFF2E2] via-[#EBE5FF] to-[#DCF8E8] border-4 border-white shadow-xl">
                <TaraMascot
                  pose="waving"
                  size="xl"
                  animate={true}
                  speechBubble="Hi! I'm Tara, your companion on SwiatRamble!"
                />
              </div>
            </div>

            {/* Mascot Story & Philosophy */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE5FF] text-[#8B6CE8] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Official Storyteller & Guide</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#303044] font-heading">
                Meet Tara: Your Guide Across the Globe
              </h2>

              <p className="text-sm sm:text-base text-[#6B6882] leading-relaxed">
                Tara is a joyful 9-year-old storyteller and explorer who carries an ornate open storybook wherever she goes. With flowing wavy chestnut hair, sparkling brown eyes, an enchanting sky-blue puff-sleeve dress, and an eager pointing gesture, Tara guides you through every corner of our planet to uncover its most cherished tales.
              </p>

              <div className="space-y-2 py-2">
                <div className="flex items-start gap-2 text-xs sm:text-sm text-[#303044] font-medium">
                  <span className="text-[#8B6CE8] font-bold">✨</span>
                  <span>She introduces each of the 30 launch countries with personalized greetings.</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-[#303044] font-medium">
                  <span className="text-[#8B6CE8] font-bold">✨</span>
                  <span>She shares secret storybook trivia when you click "Tell me more with Tara".</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-[#303044] font-medium">
                  <span className="text-[#8B6CE8] font-bold">✨</span>
                  <span>She cheers you on during Culture Quizzes and stamps your World Passport!</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('explore')}
                  className="clay-btn clay-btn-purple text-xs sm:text-sm py-2.5 px-6 shadow-md"
                >
                  <Compass className="w-4 h-4" />
                  <span>Begin Exploring with Tara</span>
                </button>

                <button
                  onClick={() => onNavigate('quiz')}
                  className="clay-btn clay-btn-white text-xs sm:text-sm py-2.5 px-4 shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Test Your Knowledge</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
