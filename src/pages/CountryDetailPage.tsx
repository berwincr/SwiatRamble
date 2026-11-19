import React, { useState, useEffect } from 'react';
import { getCountryBySlug, getCountriesByContinent } from '../data/countries';
import { getStoriesByCountry } from '../data/stories';
import { Country } from '../types/country';
import { TaraMascot } from '../components/mascot/TaraMascot';
import { TaraDeepDiveModal } from '../components/mascot/TaraDeepDiveModal';
import { userService } from '../services/userService';
import { 
  ArrowLeft, 
  Heart, 
  Bookmark, 
  Share2, 
  Sparkles, 
  Clock, 
  MapPin, 
  Utensils, 
  Music, 
  Shirt, 
  PartyPopper, 
  Compass, 
  Languages, 
  Sun, 
  BookOpen, 
  Check, 
  ChevronDown, 
  ChevronUp,
  Volume2
} from 'lucide-react';

interface CountryDetailPageProps {
  slug: string;
  onNavigate: (page: string, param?: string) => void;
}

export const CountryDetailPage: React.FC<CountryDetailPageProps> = ({
  slug,
  onNavigate,
}) => {
  const [country, setCountry] = useState<Country | undefined>(getCountryBySlug(slug));
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const [isWishlist, setIsWishlist] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isExplored, setIsExplored] = useState(false);

  useEffect(() => {
    const found = getCountryBySlug(slug);
    setCountry(found);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (found) {
      // Auto-mark country as explored in passport
      userService.markCountryExplored(found.slug);

      const progress = userService.getProgress();
      setIsWishlist(progress.wishlistCountries.includes(found.slug));
      setIsFavorite(progress.favoriteCountries.includes(found.slug));
      setIsExplored(progress.exploredCountries.includes(found.slug));
    }
  }, [slug]);

  if (!country) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-[#303044] mb-3 font-heading">Country Not Found</h2>
        <p className="text-sm text-[#6B6882] mb-6">We couldn’t find the country you were looking for.</p>
        <button
          onClick={() => onNavigate('explore')}
          className="clay-btn clay-btn-purple text-sm py-2 px-5"
        >
          Return to Explore
        </button>
      </div>
    );
  }

  const handleToggleWishlist = () => {
    const res = userService.toggleWishlistCountry(country.slug);
    setIsWishlist(res);
  };

  const handleToggleFavorite = () => {
    const res = userService.toggleFavoriteCountry(country.slug);
    setIsFavorite(res);
  };

  const handleShare = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    } catch {
      // Fallback
    }
  };

  const relatedCountries = getCountriesByContinent(country.continent)
    .filter(c => c.slug !== country.slug)
    .slice(0, 3);

  const relatedStories = getStoriesByCountry(country.id);

  const toggleSection = (sectionName: string) => {
    setExpandedSection(prev => prev === sectionName ? null : sectionName);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-12 text-left">
      {/* Back to Explore Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('explore', country.continent)}
          className="clay-btn clay-btn-white text-xs py-2 px-4 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {country.continent}</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Wishlist Button */}
          <button
            onClick={handleToggleWishlist}
            className={`clay-btn text-xs py-2 px-3.5 transition-all ${
              isWishlist
                ? 'bg-[#FFE2D4] border-[#E06D3B] text-[#E06D3B]'
                : 'clay-btn-white text-[#303044]'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isWishlist ? 'fill-[#E06D3B]' : ''}`} />
            <span>{isWishlist ? 'Saved to Wishlist' : 'Add to Wishlist'}</span>
          </button>

          {/* Favorite Button */}
          <button
            onClick={handleToggleFavorite}
            className={`clay-btn text-xs py-2 px-3.5 transition-all ${
              isFavorite
                ? 'bg-[#FFE0EA] border-[#E45C89] text-[#E45C89]'
                : 'clay-btn-white text-[#303044]'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-[#E45C89]' : ''}`} />
            <span>{isFavorite ? 'Favorited' : 'Favorite'}</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="p-2.5 rounded-full bg-white border border-[#C8B6FF] hover:bg-[#EBE5FF] text-[#303044] transition-all shadow-sm relative"
            title="Share this country"
          >
            <Share2 className="w-4 h-4" />
            {copiedShare && (
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md bg-[#303044] text-white text-[10px] font-bold shadow-md animate-fadeIn">
                Copied Link!
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ========================================================
          COUNTRY HERO HEADER
      ======================================================== */}
      <div className="clay-card overflow-hidden bg-white border-4 border-white shadow-xl">
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
          <img
            src={country.heroImage}
            alt={country.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

          {/* Floating Pill on Hero */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
            <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs sm:text-sm font-bold text-[#303044] shadow-md flex items-center gap-2">
              <span className="text-xl">{country.flagEmoji}</span>
              <span>{country.continent}</span>
            </span>
          </div>

          {/* Bottom Title on Hero */}
          <div className="absolute bottom-6 left-6 right-6 text-white text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-md font-heading">
              {country.name}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium max-w-2xl mt-1 drop-shadow-sm">
              {country.officialName} • Capital: {country.capital} • Currency: {country.currency}
            </p>
          </div>
        </div>

        {/* Tara's Personalized Country Greeting Bar */}
        <div className="p-6 md:p-8 bg-gradient-to-r from-[#FFF9F0] via-white to-[#F6F0FF] border-t-2 border-[#C8B6FF]/40 flex flex-col sm:flex-row items-center gap-6">
          <div className="shrink-0 -mt-2">
            <TaraMascot pose="welcoming" size="md" animate={true} />
          </div>

          <div className="flex-1 text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE5FF] text-[#8B6CE8] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tara's Welcome to {country.name}</span>
            </div>
            <p className="text-base sm:text-lg text-[#303044] font-medium leading-relaxed">
              "{country.taraGreeting}"
            </p>

            <div className="pt-1">
              <button
                onClick={() => setIsDeepDiveOpen(true)}
                className="clay-btn clay-btn-purple text-xs py-2 px-4 shadow-sm"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Tell me more with Tara!</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Overview Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="clay-card p-4 text-left bg-[#EBE5FF]/50 border-2 border-white">
          <span className="text-xs text-[#8B6CE8] font-bold uppercase tracking-wider block">Capital City</span>
          <span className="text-base sm:text-lg font-extrabold text-[#303044] font-heading">{country.capital}</span>
        </div>
        <div className="clay-card p-4 text-left bg-[#DCF8E8]/50 border-2 border-white">
          <span className="text-xs text-[#1E8A54] font-bold uppercase tracking-wider block">Population</span>
          <span className="text-base sm:text-lg font-extrabold text-[#303044] font-heading">{country.population}</span>
        </div>
        <div className="clay-card p-4 text-left bg-[#FFE2D4]/50 border-2 border-white">
          <span className="text-xs text-[#E06D3B] font-bold uppercase tracking-wider block">Currency</span>
          <span className="text-base sm:text-lg font-extrabold text-[#303044] font-heading">{country.currency}</span>
        </div>
        <div className="clay-card p-4 text-left bg-[#D9F1FD]/50 border-2 border-white">
          <span className="text-xs text-[#0284C7] font-bold uppercase tracking-wider block">UNESCO Sites</span>
          <span className="text-base sm:text-lg font-extrabold text-[#303044] font-heading">
            {country.landmarks.unescoSitesCount ? `${country.landmarks.unescoSitesCount} Sites` : 'Treasures'}
          </span>
        </div>
      </div>

      {/* ========================================================
          THE 10 MANDATORY CULTURAL SECTIONS
      ======================================================== */}
      <div className="space-y-8">
        <div className="border-b-2 border-[#C8B6FF]/40 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#303044] font-heading">
              Cultural Encounters
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6882]">
              Explore all 10 in-depth cultural pillars of {country.name}.
            </p>
          </div>
          <span className="text-xs font-bold text-[#8B6CE8] bg-[#EBE5FF] px-3 py-1 rounded-full">
            10 Themes Complete
          </span>
        </div>

        {/* 1. HISTORY AND HERITAGE */}
        <section className="clay-card p-6 md:p-8 bg-white border-2 border-white shadow-md space-y-6">
          <div className="flex items-center gap-3 border-b border-[#F0EBF8] pb-4">
            <div className="w-10 h-10 rounded-2xl bg-[#EBE5FF] text-[#8B6CE8] flex items-center justify-center font-bold text-lg shadow-sm">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#303044] font-heading">
                1. History and Heritage
              </h3>
              <p className="text-xs text-[#6B6882]">Historical timeline, major civilizations, and cultural heritage</p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#6B6882] leading-relaxed">
            {country.history.importantEventsSummary}
          </p>

          {/* Interactive Historical Timeline */}
          <div className="pt-2">
            <h4 className="text-xs font-bold text-[#8B6CE8] uppercase tracking-wider mb-4">
              ✨ Historical Milestones Timeline:
            </h4>
            <div className="relative border-l-2 border-[#C8B6FF] ml-3 sm:ml-4 space-y-6">
              {country.history.timeline.map((item, idx) => (
                <div key={idx} className="relative pl-6 sm:pl-8 group">
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#8B6CE8] border-2 border-white group-hover:scale-125 transition-transform" />
                  <span className="inline-block px-2 py-0.5 rounded-full bg-[#EBE5FF] text-[#8B6CE8] text-[11px] font-bold mb-1">
                    {item.period}
                  </span>
                  <h5 className="text-sm sm:text-base font-bold text-[#303044] font-heading">
                    {item.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-[#6B6882] leading-relaxed mt-0.5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Major Civilizations & Heritage Note */}
          <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#FFE69A] flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[#B87000] uppercase block">Major Civilizations / Dynasties</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {country.history.majorCivilizations.map((civ, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-white text-xs font-semibold text-[#303044] border border-[#FFE69A]">
                    {civ}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-xs text-[#6B6882] max-w-sm italic">
              Heritage: {country.history.culturalHeritage}
            </p>
          </div>
        </section>

        {/* 2. LANGUAGES AND REGIONAL DIVERSITY */}
        <section className="clay-card p-6 md:p-8 bg-white border-2 border-white shadow-md space-y-6">
          <div className="flex items-center gap-3 border-b border-[#F0EBF8] pb-4">
            <div className="w-10 h-10 rounded-2xl bg-[#D9F1FD] text-[#0284C7] flex items-center justify-center font-bold text-lg shadow-sm">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#303044] font-heading">
                2. Languages and Regional Diversity
              </h3>
              <p className="text-xs text-[#6B6882]">Official tongues, regional dialects, and everyday conversational phrases</p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#6B6882] leading-relaxed">
            {country.languages.linguisticDiversityNotes}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E5DEFF]">
              <span className="text-xs font-bold text-[#8B6CE8] uppercase block mb-1">Official Languages</span>
              <div className="flex flex-wrap gap-1.5">
                {country.languages.official.map((lang, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-full bg-[#EBE5FF] text-[#8B6CE8] text-xs font-bold">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E5DEFF]">
              <span className="text-xs font-bold text-[#8B6CE8] uppercase block mb-1">Widely Spoken & Regional</span>
              <p className="text-xs text-[#6B6882] leading-relaxed">
                {country.languages.widelySpoken.concat(country.languages.regional).join(', ')}
              </p>
            </div>
          </div>

          {/* Useful Common Phrases with Tara */}
          <div>
            <h4 className="text-xs font-bold text-[#8B6CE8] uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Volume2 className="w-4 h-4" />
              <span>Say it like a local: Common Phrases</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {country.languages.commonPhrases.map((phraseItem, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[#FFF9F0] border border-[#FFE69A] shadow-sm">
                  <span className="text-base font-extrabold text-[#303044] block font-heading">
                    {phraseItem.phrase}
                  </span>
                  <span className="text-xs text-[#8B6CE8] font-bold block mt-0.5">
                    "{phraseItem.meaning}"
                  </span>
                  {phraseItem.pronunciation && (
                    <span className="text-[11px] text-[#A5A0B8] italic block mt-1">
                      🗣️ {phraseItem.pronunciation}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. FOOD AND CUISINE */}
        <section className="clay-card p-6 md:p-8 bg-white border-2 border-white shadow-md space-y-6">
          <div className="flex items-center gap-3 border-b border-[#F0EBF8] pb-4">
            <div className="w-10 h-10 rounded-2xl bg-[#FFE2D4] text-[#E06D3B] flex items-center justify-center font-bold text-lg shadow-sm">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#303044] font-heading">
                3. Food and Cuisine
              </h3>
              <p className="text-xs text-[#6B6882]">Signature dishes, popular ingredients, and culinary dining customs</p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#6B6882] leading-relaxed">
            {country.food.foodCustoms}
          </p>

          {/* Signature Dishes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {country.food.signatureDishes.map((dish, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#FFE2D4] flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#FFE2D4] text-[#E06D3B]">
                      {dish.tag}
                    </span>
                    {dish.localName && (
                      <span className="text-xs text-[#A5A0B8] font-semibold">{dish.localName}</span>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-[#303044] font-heading mt-1">
                    {dish.name}
                  </h4>
                  <p className="text-xs text-[#6B6882] leading-relaxed mt-1">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Popular Ingredients & Regional Specialties */}
          <div className="p-4 rounded-2xl bg-white border border-[#EBE5FF] space-y-2">
            <div>
              <span className="text-xs font-bold text-[#8B6CE8] uppercase tracking-wider block mb-1">
                Popular Pantry Ingredients
              </span>
              <div className="flex flex-wrap gap-1.5">
                {country.food.popularIngredients.map((ing, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-full bg-[#F4EFE6] text-xs font-semibold text-[#303044]">
                    🌿 {ing}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-2 border-t border-[#F0EBF8]">
              <span className="text-xs font-bold text-[#303044]">Regional Specialties: </span>
              <span className="text-xs text-[#6B6882]">{country.food.regionalSpecialties}</span>
            </div>
          </div>
        </section>

        {/* 4. TRADITIONAL CLOTHING */}
        <section className="clay-card p-6 md:p-8 bg-white border-2 border-white shadow-md space-y-6">
          <div className="flex items-center gap-3 border-b border-[#F0EBF8] pb-4">
            <div className="w-10 h-10 rounded-2xl bg-[#FFE0EA] text-[#E45C89] flex items-center justify-center font-bold text-lg shadow-sm">
              <Shirt className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#303044] font-heading">
                4. Traditional Clothing
              </h3>
              <p className="text-xs text-[#6B6882]">Traditional garments, cultural significance, and occasions when they are worn</p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#6B6882] leading-relaxed">
            {country.clothing.culturalSignificance}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {country.clothing.traditionalGarments.map((garment, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#FFE0EA] shadow-sm">
                <h4 className="text-base font-bold text-[#303044] font-heading mb-1">
                  {garment.name}
                </h4>
                <p className="text-xs text-[#6B6882] leading-relaxed mb-2">
                  {garment.description}
                </p>
                <span className="text-[11px] font-bold text-[#E45C89] block">
                  Significance: {garment.significance}
                </span>
              </div>
            ))}
          </div>

          <div className="text-xs text-[#6B6882] bg-[#F8F9FA] p-3 rounded-xl border border-[#E5DEFF]">
            <strong className="text-[#303044]">Occasions Worn: </strong>
            {country.clothing.occasionsWorn} • <strong className="text-[#303044]">Regional Variations: </strong>
            {country.clothing.regionalVariations}
          </div>
        </section>

        {/* 5. FESTIVALS AND CELEBRATIONS */}
        <section className="clay-card p-6 md:p-8 bg-white border-2 border-white shadow-md space-y-6">
          <div className="flex items-center gap-3 border-b border-[#F0EBF8] pb-4">
            <div className="w-10 h-10 rounded-2xl bg-[#DCF8E8] text-[#1E8A54] flex items-center justify-center font-bold text-lg shadow-sm">
              <PartyPopper className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#303044] font-heading">
                5. Festivals and Celebrations
              </h3>
              <p className="text-xs text-[#6B6882]">Major annual festivals, seasonal celebrations, and communal traditions</p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#6B6882] leading-relaxed">
            {country.festivals.howPeopleCelebrate}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {country.festivals.majorFestivals.map((fest, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#F4FCF7] border border-[#DCF8E8] shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#1E8A54] uppercase tracking-wide">
                    {fest.seasonOrDate}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#303044] font-heading mt-1">
                  {fest.name}
                </h4>
                <p className="text-xs text-[#6B6882] leading-relaxed mt-1 mb-2">
                  {fest.description}
                </p>
                <div className="text-xs font-bold text-[#1E8A54] pt-2 border-t border-[#DCF8E8]">
                  Tradition: {fest.tradition}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. ARTS, MUSIC AND CULTURE */}
        <section className="clay-card p-6 md:p-8 bg-white border-2 border-white shadow-md space-y-6">
          <div className="flex items-center gap-3 border-b border-[#F0EBF8] pb-4">
            <div className="w-10 h-10 rounded-2xl bg-[#EBE5FF] text-[#8B6CE8] flex items-center justify-center font-bold text-lg shadow-sm">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#303044] font-heading">
                6. Arts, Music and Culture
              </h3>
              <p className="text-xs text-[#6B6882]">Traditional musical instruments, dance forms, and living artistic crafts</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#FFE69A]">
              <span className="text-xs font-bold text-[#B87000] uppercase block mb-1">Traditional Music</span>
              <p className="text-xs text-[#6B6882] leading-relaxed">{country.arts.traditionalMusic}</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#FFE69A]">
              <span className="text-xs font-bold text-[#B87000] uppercase block mb-1">Dance Traditions</span>
              <ul className="text-xs text-[#6B6882] space-y-1">
                {country.arts.danceForms.map((dance, i) => (
                  <li key={i}>💃 {dance}</li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#FFE69A]">
              <span className="text-xs font-bold text-[#B87000] uppercase block mb-1">Living Crafts</span>
              <ul className="text-xs text-[#6B6882] space-y-1">
                {country.arts.artFormsAndCrafts.map((craft, i) => (
                  <li key={i}>🎨 {craft}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. LANDMARKS AND HERITAGE SITES */}
        <section className="clay-card p-6 md:p-8 bg-white border-2 border-white shadow-md space-y-6">
          <div className="flex items-center gap-3 border-b border-[#F0EBF8] pb-4">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF2C7] text-[#B87000] flex items-center justify-center font-bold text-lg shadow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#303044] font-heading">
                7. Landmarks and Heritage Sites
              </h3>
              <p className="text-xs text-[#6B6882]">World-famous architectural monuments and natural sanctuaries</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {country.landmarks.famousLandmarks.map((landmark, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#FFFBF0] border border-[#FFE69A] shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-[#8B6CE8] font-bold">{landmark.location}</span>
                  {landmark.isUnesco && (
                    <span className="px-2 py-0.5 rounded-full bg-[#EBE5FF] text-[#8B6CE8] text-[10px] font-bold">
                      UNESCO Heritage
                    </span>
                  )}
                </div>
                <h4 className="text-base font-bold text-[#303044] font-heading mt-1">
                  {landmark.name}
                </h4>
                <p className="text-xs text-[#6B6882] leading-relaxed mt-1">
                  {landmark.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E5DEFF]">
            <span className="text-xs font-bold text-[#8B6CE8] uppercase tracking-wider block mb-1">
              Natural Wonders & Attractions:
            </span>
            <div className="flex flex-wrap gap-2">
              {country.landmarks.naturalAttractions.map((nat, i) => (
                <span key={i} className="px-2.5 py-1 rounded-full bg-white text-xs font-semibold text-[#303044] border border-[#E5DEFF]">
                  🏞️ {nat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 8. INTERESTING FACTS */}
        <section className="clay-card p-6 md:p-8 bg-gradient-to-br from-[#FFF9F0] to-[#F5EFFF] border-2 border-white shadow-md space-y-4">
          <div className="flex items-center gap-3 border-b border-[#F0EBF8] pb-4">
            <div className="w-10 h-10 rounded-2xl bg-[#EBE5FF] text-[#8B6CE8] flex items-center justify-center font-bold text-lg shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#303044] font-heading">
                8. Interesting Facts & Trivia
              </h3>
              <p className="text-xs text-[#6B6882]">Surprising details and curious world records</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {country.interestingFacts.map((fact, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-[#C8B6FF]/50 shadow-sm flex items-start gap-3">
                <span className="text-lg">✨</span>
                <p className="text-xs sm:text-sm text-[#303044] font-medium leading-relaxed">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. DAILY LIFE AND CUSTOMS */}
        <section className="clay-card p-6 md:p-8 bg-white border-2 border-white shadow-md space-y-6">
          <div className="flex items-center gap-3 border-b border-[#F0EBF8] pb-4">
            <div className="w-10 h-10 rounded-2xl bg-[#D9F1FD] text-[#0284C7] flex items-center justify-center font-bold text-lg shadow-sm">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#303044] font-heading">
                9. Daily Life and Customs
              </h3>
              <p className="text-xs text-[#6B6882]">Greetings etiquette, family traditions, and modern day-to-day lifestyle</p>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#6B6882] leading-relaxed">
            <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#FFE69A]">
              <strong className="text-[#303044] block mb-2 font-heading text-sm">
                Social Etiquette & Greetings:
              </strong>
              <ul className="list-disc list-inside space-y-1">
                {country.dailyLife.greetingsAndEtiquette.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E5DEFF]">
                <strong className="text-[#303044] block mb-1 font-heading text-sm">Family Traditions</strong>
                <p>{country.dailyLife.familyTraditions}</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E5DEFF]">
                <strong className="text-[#303044] block mb-1 font-heading text-sm">Modern Lifestyle</strong>
                <p>{country.dailyLife.modernLifestyle}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. GEOGRAPHY AND NATURE */}
        <section className="clay-card p-6 md:p-8 bg-white border-2 border-white shadow-md space-y-6">
          <div className="flex items-center gap-3 border-b border-[#F0EBF8] pb-4">
            <div className="w-10 h-10 rounded-2xl bg-[#DCF8E8] text-[#1E8A54] flex items-center justify-center font-bold text-lg shadow-sm">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#303044] font-heading">
                10. Geography and Nature
              </h3>
              <p className="text-xs text-[#6B6882]">Climate zones, geographic features, and native wildlife</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-[#6B6882] leading-relaxed">
            <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#DCF8E8]">
              <strong className="text-[#303044] block mb-1 font-heading text-sm">Location & Climate:</strong>
              <p className="mb-2">{country.geography.locationDescription}</p>
              <p><strong className="text-[#303044]">Climate:</strong> {country.geography.climate}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#DCF8E8]">
              <strong className="text-[#303044] block mb-1 font-heading text-sm">Native Wildlife:</strong>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {country.geography.wildlife.map((animal, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-full bg-white text-xs font-semibold text-[#303044] border border-[#DCF8E8]">
                    🐾 {animal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================
          RELATED STORIES FROM THIS COUNTRY
      ======================================================== */}
      {relatedStories.length > 0 && (
        <div className="space-y-4 pt-6">
          <h3 className="text-xl sm:text-2xl font-bold text-[#303044] font-heading">
            Stories from {country.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedStories.map(story => (
              <div
                key={story.id}
                onClick={() => onNavigate('story', story.slug)}
                className="clay-card p-4 bg-white border border-[#C8B6FF]/50 hover:border-[#8B6CE8] transition-all cursor-pointer flex items-center gap-4 group"
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-20 h-20 rounded-2xl object-cover shrink-0"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#8B6CE8]">{story.category}</span>
                  <h4 className="text-sm font-bold text-[#303044] group-hover:text-[#8B6CE8] transition-colors line-clamp-1">
                    {story.title}
                  </h4>
                  <p className="text-xs text-[#6B6882] line-clamp-2 mt-0.5">
                    {story.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================
          RELATED NEIGHBORING COUNTRIES
      ======================================================== */}
      <div className="space-y-4 pt-6">
        <h3 className="text-xl sm:text-2xl font-bold text-[#303044] font-heading">
          Explore More of {country.continent}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedCountries.map(rel => (
            <div
              key={rel.id}
              onClick={() => onNavigate('country', rel.slug)}
              className="clay-card p-4 bg-white border-2 border-white hover:border-[#8B6CE8] transition-all cursor-pointer group flex items-center gap-3"
            >
              <span className="text-3xl">{rel.flagEmoji}</span>
              <div>
                <h4 className="text-base font-bold text-[#303044] font-heading group-hover:text-[#8B6CE8] transition-colors">
                  {rel.name}
                </h4>
                <p className="text-xs text-[#6B6882]">Capital: {rel.capital}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tara Secret Trivia Deep Dive Modal */}
      <TaraDeepDiveModal
        countryName={country.name}
        facts={country.taraFacts}
        isOpen={isDeepDiveOpen}
        onClose={() => setIsDeepDiveOpen(false)}
      />
    </div>
  );
};
