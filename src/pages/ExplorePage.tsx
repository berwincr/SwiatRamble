import React, { useState, useMemo } from 'react';
import { allCountries, continents } from '../data/countries';
import { Continent, Country } from '../types/country';
import { InteractiveWorldMap } from '../components/map/InteractiveWorldMap';
import { TaraSpeechBox } from '../components/mascot/TaraSpeechBox';
import { userService } from '../services/userService';
import { 
  Compass, 
  Search, 
  Map as MapIcon, 
  Grid, 
  CheckCircle2, 
  Heart, 
  Bookmark, 
  ArrowRight,
  Filter,
  Sparkles
} from 'lucide-react';

interface ExplorePageProps {
  onNavigate: (page: string, param?: string) => void;
  initialContinent?: string;
  onOpenSpin: () => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  onNavigate,
  initialContinent = 'All',
  onOpenSpin,
}) => {
  const [selectedContinent, setSelectedContinent] = useState<string>(initialContinent);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'continent'>('name');

  const progress = userService.getProgress();

  // Filter and sort countries
  const filteredCountries = useMemo(() => {
    return allCountries
      .filter((c) => {
        const matchesContinent = selectedContinent === 'All' || c.continent === selectedContinent;
        const matchesSearch =
          c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.shortIntro.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesContinent && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return a.continent.localeCompare(b.continent);
      });
  }, [selectedContinent, searchQuery, sortBy]);

  const continentList: (Continent | 'All')[] = [
    'All',
    'Asia',
    'Europe',
    'Africa',
    'North America',
    'South America',
    'Oceania',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8 text-left">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE5FF] text-[#8B6CE8] text-xs font-bold mb-2 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Atlas & Discovery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#303044] tracking-tight">
            Explore the World
          </h1>
          <p className="text-sm sm:text-base text-[#6B6882] mt-1 max-w-xl">
            Choose from 30 launch countries across six continents. Discover their history, food, traditional garments, and festivals.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 bg-[#F4EFE6] p-1.5 rounded-full border border-white self-start md:self-auto">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              viewMode === 'grid'
                ? 'bg-white text-[#303044] shadow-sm'
                : 'text-[#6B6882] hover:text-[#303044]'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Card Grid</span>
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              viewMode === 'map'
                ? 'bg-white text-[#303044] shadow-sm'
                : 'text-[#6B6882] hover:text-[#303044]'
            }`}
          >
            <MapIcon className="w-3.5 h-3.5" />
            <span>Interactive Map</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="clay-card p-4 sm:p-5 bg-white border-2 border-white shadow-md space-y-4">
        {/* Continent Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold">
          <span className="text-[#A5A0B8] uppercase text-[10px] tracking-wider shrink-0 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Continents:
          </span>
          {continentList.map((continent) => (
            <button
              key={continent}
              onClick={() => setSelectedContinent(continent)}
              className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all ${
                selectedContinent === continent
                  ? 'bg-[#8B6CE8] text-white shadow-md'
                  : 'bg-[#F4EFE6] text-[#6B6882] hover:bg-[#EBE5FF] hover:text-[#8B6CE8]'
              }`}
            >
              {continent}
            </button>
          ))}
        </div>

        {/* Search input and sort controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-[#F0EBF8]">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#8B6CE8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by country, capital, or keyword..."
              className="clay-inset w-full pl-9 pr-4 py-2 text-xs md:text-sm font-medium focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between w-full sm:w-auto gap-4 text-xs font-semibold text-[#6B6882]">
            <span>
              Showing <strong className="text-[#303044]">{filteredCountries.length}</strong> countries
            </span>

            <div className="flex items-center gap-1.5">
              <span>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'continent')}
                className="bg-[#F4EFE6] border border-white rounded-full px-2.5 py-1 text-xs font-bold text-[#303044] focus:outline-none"
              >
                <option value="name">Alphabetical (A-Z)</option>
                <option value="continent">By Continent</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area: Grid View vs. Map View */}
      {viewMode === 'map' ? (
        <div className="space-y-6">
          <InteractiveWorldMap
            onSelectCountry={(slug) => onNavigate('country', slug)}
            selectedContinent={selectedContinent as Continent | 'All'}
            mode="explore"
          />
        </div>
      ) : (
        <div>
          {filteredCountries.length === 0 ? (
            <div className="clay-card p-12 text-center bg-white border-2 border-[#C8B6FF] my-8">
              <div className="w-16 h-16 rounded-full bg-[#FFE2D4] mx-auto flex items-center justify-center text-3xl mb-3 shadow-inner">
                🔍
              </div>
              <h3 className="text-xl font-bold text-[#303044] font-heading mb-1">
                No countries found
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6882] max-w-sm mx-auto mb-4">
                We couldn't find any country matching "{searchQuery}" in {selectedContinent}.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedContinent('All');
                }}
                className="clay-btn clay-btn-purple text-xs py-2 px-4"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCountries.map((country) => {
                const isExplored = progress.exploredCountries.includes(country.slug);
                const isWishlist = progress.wishlistCountries.includes(country.slug);
                const isFavorite = progress.favoriteCountries.includes(country.slug);

                return (
                  <div
                    key={country.id}
                    onClick={() => onNavigate('country', country.slug)}
                    className="clay-card overflow-hidden group cursor-pointer border-2 border-white hover:border-[#8B6CE8] transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={country.cardImage}
                          alt={country.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-[#303044] shadow-sm flex items-center gap-1.5">
                            <span className="text-base">{country.flagEmoji}</span>
                            <span>{country.continent}</span>
                          </span>

                          {/* Quick Wishlist / Fav Indicator */}
                          <div className="flex gap-1">
                            {isWishlist && (
                              <span className="p-1.5 rounded-full bg-[#FFE2D4] text-[#E06D3B] shadow-sm">
                                <Bookmark className="w-3.5 h-3.5 fill-[#E06D3B]" />
                              </span>
                            )}
                            {isFavorite && (
                              <span className="p-1.5 rounded-full bg-[#FFE0EA] text-[#E45C89] shadow-sm">
                                <Heart className="w-3.5 h-3.5 fill-[#E45C89]" />
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Bottom Name on Image */}
                        <div className="absolute bottom-3 left-4 right-4 text-white">
                          <h3 className="text-2xl font-bold font-heading text-white drop-shadow-md">
                            {country.name}
                          </h3>
                          <p className="text-xs text-white/90 font-semibold drop-shadow-sm">
                            Capital: {country.capital}
                          </p>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 text-left">
                        <p className="text-xs text-[#6B6882] line-clamp-2 leading-relaxed mb-4">
                          {country.shortIntro}
                        </p>

                        {/* Highlight Pills */}
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 rounded-md bg-[#FFF2C7] text-[#9E7307] text-[10px] font-bold">
                            🍲 {country.food.signatureDishes[0]?.name || 'Cuisine'}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-[#EBE5FF] text-[#8B6CE8] text-[10px] font-bold">
                            🎉 {country.festivals.majorFestivals[0]?.name || 'Festival'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="px-5 pb-5 pt-3 border-t border-[#F0EBF8] flex items-center justify-between text-xs font-bold">
                      {isExplored ? (
                        <span className="text-[#1E8A54] flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Explored
                        </span>
                      ) : (
                        <span className="text-[#8B6CE8]">Not yet explored</span>
                      )}

                      <span className="clay-btn clay-btn-white py-1 px-3 text-[11px] group-hover:bg-[#8B6CE8] group-hover:text-white transition-all">
                        <span>Explore</span>
                        <ArrowRight className="w-3 h-3 inline-block ml-1" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Tara Encouraging Speech Box */}
      <TaraSpeechBox
        pose="pointing"
        title="Tara's Travel Tip"
        message="Every country detail page features all 10 cultural sections, from historical timelines and cuisines to traditional clothing and UNESCO landmarks. Don't forget to click 'Tell me more with Tara' for secret storybook trivia!"
        actionText="Try Spin the Globe"
        onAction={onOpenSpin}
      />
    </div>
  );
};
