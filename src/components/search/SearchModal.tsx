import React, { useState, useMemo } from 'react';
import { allCountries } from '../../data/countries';
import { storiesData } from '../../data/stories';
import { Search, X, MapPin, BookOpen, Utensils, PartyPopper, Sparkles, ChevronRight } from 'lucide-react';

interface SearchResultItem {
  id: string;
  type: 'country' | 'story' | 'food' | 'festival' | 'landmark';
  title: string;
  subtitle: string;
  countryName: string;
  countrySlug: string;
  flagEmoji?: string;
  linkType: 'country' | 'story';
  targetSlug: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateCountry: (slug: string) => void;
  onNavigateStory: (slug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateCountry,
  onNavigateStory,
}) => {
  const [query, setQuery] = useState('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<string>('all');

  // Perform live multi-category search across countries, stories, foods, festivals, landmarks
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const items: SearchResultItem[] = [];

    // 1. Match Countries (name, capital, continent, officialName)
    allCountries.forEach(country => {
      if (
        country.name.toLowerCase().includes(q) ||
        country.capital.toLowerCase().includes(q) ||
        country.continent.toLowerCase().includes(q) ||
        country.officialName.toLowerCase().includes(q)
      ) {
        items.push({
          id: `country-${country.id}`,
          type: 'country',
          title: country.name,
          subtitle: `${country.continent} • Capital: ${country.capital}`,
          countryName: country.name,
          countrySlug: country.slug,
          flagEmoji: country.flagEmoji,
          linkType: 'country',
          targetSlug: country.slug,
        });
      }

      // 2. Match Foods
      country.food.signatureDishes.forEach(dish => {
        if (dish.name.toLowerCase().includes(q) || dish.description.toLowerCase().includes(q)) {
          items.push({
            id: `food-${country.id}-${dish.name}`,
            type: 'food',
            title: dish.name,
            subtitle: `${dish.tag} in ${country.name} • ${dish.description.slice(0, 70)}...`,
            countryName: country.name,
            countrySlug: country.slug,
            flagEmoji: country.flagEmoji,
            linkType: 'country',
            targetSlug: country.slug,
          });
        }
      });

      // 3. Match Festivals
      country.festivals.majorFestivals.forEach(fest => {
        if (fest.name.toLowerCase().includes(q) || fest.description.toLowerCase().includes(q)) {
          items.push({
            id: `fest-${country.id}-${fest.name}`,
            type: 'festival',
            title: fest.name,
            subtitle: `Festival in ${country.name} (${fest.seasonOrDate})`,
            countryName: country.name,
            countrySlug: country.slug,
            flagEmoji: country.flagEmoji,
            linkType: 'country',
            targetSlug: country.slug,
          });
        }
      });

      // 4. Match Landmarks
      country.landmarks.famousLandmarks.forEach(land => {
        if (land.name.toLowerCase().includes(q) || land.description.toLowerCase().includes(q)) {
          items.push({
            id: `land-${country.id}-${land.name}`,
            type: 'landmark',
            title: land.name,
            subtitle: `Landmark in ${land.location}, ${country.name}`,
            countryName: country.name,
            countrySlug: country.slug,
            flagEmoji: country.flagEmoji,
            linkType: 'country',
            targetSlug: country.slug,
          });
        }
      });
    });

    // 5. Match Discover Stories
    storiesData.forEach(story => {
      if (
        story.title.toLowerCase().includes(q) ||
        story.summary.toLowerCase().includes(q) ||
        story.category.toLowerCase().includes(q)
      ) {
        items.push({
          id: `story-${story.id}`,
          type: 'story',
          title: story.title,
          subtitle: `Story (${story.category}) • ${story.countryName}`,
          countryName: story.countryName,
          countrySlug: story.countryId,
          linkType: 'story',
          targetSlug: story.slug,
        });
      }
    });

    // Apply type filter if not 'all'
    if (selectedTypeFilter !== 'all') {
      return items.filter(i => i.type === selectedTypeFilter);
    }

    return items.slice(0, 30);
  }, [query, selectedTypeFilter]);

  if (!isOpen) return null;

  const handleItemClick = (item: SearchResultItem) => {
    onClose();
    if (item.linkType === 'story') {
      onNavigateStory(item.targetSlug);
    } else {
      onNavigateCountry(item.targetSlug);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'country': return <MapPin className="w-4 h-4 text-[#8B6CE8]" />;
      case 'story': return <BookOpen className="w-4 h-4 text-[#38BDF8]" />;
      case 'food': return <Utensils className="w-4 h-4 text-[#FF9B71]" />;
      case 'festival': return <PartyPopper className="w-4 h-4 text-[#EC4899]" />;
      case 'landmark': return <Sparkles className="w-4 h-4 text-[#EAB308]" />;
      default: return <Search className="w-4 h-4 text-[#8B6CE8]" />;
    }
  };

  const popularSearches = ['Sushi', 'Machu Picchu', 'Taj Mahal', 'Diwali', 'Croissant', 'Samba', 'Eiffel Tower', 'Kimchi'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 md:pt-20 p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="clay-card relative w-full max-w-2xl bg-white border-4 border-[#C8B6FF] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Top Input Bar */}
        <div className="p-4 md:p-5 border-b border-[#F0EBF8] flex items-center gap-3 bg-[#FFF9F0]">
          <Search className="w-6 h-6 text-[#8B6CE8] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search countries, stories, foods, festivals, landmarks..."
            autoFocus
            className="w-full bg-transparent text-base md:text-lg font-semibold text-[#303044] focus:outline-none placeholder:text-[#A5A0B8]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-[#6B6882] hover:bg-black/5"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white hover:bg-[#FFE0EA] text-[#303044] transition-colors shadow-sm ml-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-5 py-2.5 bg-white border-b border-[#F0EBF8] flex items-center gap-2 overflow-x-auto text-xs font-bold">
          <span className="text-[#A5A0B8] uppercase text-[10px] tracking-wider shrink-0">Filter:</span>
          {['all', 'country', 'story', 'food', 'festival', 'landmark'].map(type => (
            <button
              key={type}
              onClick={() => setSelectedTypeFilter(type)}
              className={`px-3 py-1 rounded-full capitalize transition-all shrink-0 ${
                selectedTypeFilter === type
                  ? 'bg-[#8B6CE8] text-white shadow-sm'
                  : 'bg-[#F4EFE6] text-[#6B6882] hover:bg-[#EBE5FF]'
              }`}
            >
              {type === 'all' ? 'All Results' : `${type}s`}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-4 md:p-6 overflow-y-auto flex-1 text-left">
          {!query ? (
            <div>
              <p className="text-xs font-bold text-[#8B6CE8] uppercase tracking-wider mb-3">
                ✨ Popular Searches to explore:
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {popularSearches.map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="clay-btn clay-btn-white py-1.5 px-3.5 text-xs hover:border-[#8B6CE8]"
                  >
                    <span>{term}</span>
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#FFE69A]/80 flex items-center gap-3">
                <span className="text-2xl">🌍</span>
                <p className="text-xs text-[#6B6882] leading-relaxed">
                  Tip: You can search by country name (e.g., <span className="font-bold text-[#303044]">Japan</span>), signature dish (<span className="font-bold text-[#303044]">Biryani</span>), historic landmark (<span className="font-bold text-[#303044]">Alhambra</span>), or festival (<span className="font-bold text-[#303044]">Songkran</span>).
                </p>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#FFE2D4] mx-auto flex items-center justify-center text-3xl mb-3 shadow-inner">
                🔍
              </div>
              <h4 className="text-lg font-bold text-[#303044] mb-1 font-heading">
                No cultural matches found
              </h4>
              <p className="text-xs md:text-sm text-[#6B6882] max-w-sm mx-auto mb-4">
                We couldn’t find anything matching "{query}". Try checking your spelling or searching for another country or dish!
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-xs font-bold text-[#8B6CE8] uppercase tracking-wider mb-2">
                Found {results.length} result{results.length > 1 ? 's' : ''}:
              </p>
              {results.map(item => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="p-3.5 rounded-2xl bg-white hover:bg-[#F9F6FF] border border-[#EBE5FF] hover:border-[#C8B6FF] transition-all cursor-pointer flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FFF9F0] border border-[#E5DEFF] flex items-center justify-center shrink-0 shadow-sm">
                      {item.flagEmoji ? (
                        <span className="text-lg">{item.flagEmoji}</span>
                      ) : (
                        getTypeIcon(item.type)
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-sm font-bold text-[#303044] group-hover:text-[#8B6CE8] transition-colors">
                          {item.title}
                        </h5>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase bg-[#EBE5FF] text-[#8B6CE8]">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-xs text-[#6B6882] line-clamp-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#A5A0B8] group-hover:text-[#8B6CE8] group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
