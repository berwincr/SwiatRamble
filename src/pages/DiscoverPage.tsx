import React, { useState, useMemo } from 'react';
import { storiesData } from '../data/stories';
import { Story, StoryCategory } from '../types/story';
import { userService } from '../services/userService';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Clock, 
  Bookmark, 
  ArrowRight, 
  Sparkles,
  Heart
} from 'lucide-react';

interface DiscoverPageProps {
  onNavigate: (page: string, param?: string) => void;
  onSelectStory: (slug: string) => void;
}

export const DiscoverPage: React.FC<DiscoverPageProps> = ({
  onNavigate,
  onSelectStory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedContinent, setSelectedContinent] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'readTime'>('newest');

  const progress = userService.getProgress();

  const categories: (StoryCategory | 'All')[] = [
    'All',
    'Traditions',
    'Festivals',
    'Food',
    'Art and Music',
    'Clothing',
    'Architecture',
    'History',
    'Nature',
  ];

  const continents = ['All', 'Asia', 'Europe', 'Africa', 'North America', 'South America', 'Oceania'];

  const filteredStories = useMemo(() => {
    return storiesData
      .filter((s) => {
        const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;
        const matchesContinent = selectedContinent === 'All' || s.continent === selectedContinent;
        const matchesSearch =
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.countryName.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesContinent && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'newest') return b.publishedDate.localeCompare(a.publishedDate);
        return a.readTimeMinutes - b.readTimeMinutes;
      });
  }, [selectedCategory, selectedContinent, searchQuery, sortBy]);

  const handleToggleSave = (e: React.MouseEvent, storyId: string) => {
    e.stopPropagation();
    userService.toggleSaveStory(storyId);
  };

  const featured = storiesData.find(s => s.featured) || storiesData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-10 text-left">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9F1FD] text-[#0284C7] text-xs font-bold mb-2 uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Cultural Chronicles</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#303044] tracking-tight font-heading">
          Discover World Stories
        </h1>
        <p className="text-sm sm:text-base text-[#6B6882] mt-1 max-w-xl">
          Dive into fascinating narratives behind tea ceremonies, sacred dances, culinary traditions, and ancient architecture.
        </p>
      </div>

      {/* Featured Story Banner */}
      {featured && (
        <div
          onClick={() => onSelectStory(featured.slug)}
          className="clay-card overflow-hidden bg-white border-4 border-white shadow-xl cursor-pointer group hover:border-[#8B6CE8] transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#8B6CE8] text-white text-xs font-bold shadow-md">
                Featured Story
              </span>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#8B6CE8] uppercase tracking-wider mb-2">
                  <span>{featured.category}</span>
                  <span>•</span>
                  <span>{featured.countryName}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#6B6882]">
                    <Clock className="w-3.5 h-3.5" /> {featured.readTimeMinutes} min read
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#303044] font-heading group-hover:text-[#8B6CE8] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#8B6CE8] font-bold mt-1">
                  {featured.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#6B6882] leading-relaxed mt-3">
                  {featured.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EBF8] flex items-center justify-between">
                <span className="clay-btn clay-btn-purple text-xs py-2 px-4 shadow-sm">
                  <span>Read Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </span>

                <button
                  onClick={(e) => handleToggleSave(e, featured.id)}
                  className="p-2 rounded-full hover:bg-[#FFE2D4] text-[#E06D3B] transition-colors"
                >
                  <Bookmark
                    className={`w-5 h-5 ${
                      progress.savedStories.includes(featured.id) ? 'fill-[#E06D3B]' : ''
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="clay-card p-4 sm:p-5 bg-white border-2 border-white shadow-md space-y-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold">
          <span className="text-[#A5A0B8] uppercase text-[10px] tracking-wider shrink-0 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#8B6CE8] text-white shadow-md'
                  : 'bg-[#F4EFE6] text-[#6B6882] hover:bg-[#EBE5FF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Continents & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-[#F0EBF8]">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#8B6CE8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stories by keyword or country..."
              className="clay-inset w-full pl-9 pr-4 py-2 text-xs md:text-sm font-medium focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between text-xs font-semibold text-[#6B6882]">
            <span>
              Showing <strong className="text-[#303044]">{filteredStories.length}</strong> stories
            </span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'readTime')}
              className="bg-[#F4EFE6] border border-white rounded-full px-2.5 py-1 text-xs font-bold text-[#303044] focus:outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="readTime">Shortest Read</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStories.map((story) => {
          const isSaved = progress.savedStories.includes(story.id);

          return (
            <div
              key={story.id}
              onClick={() => onSelectStory(story.slug)}
              className="clay-card overflow-hidden group cursor-pointer border-2 border-white hover:border-[#8B6CE8] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-[#8B6CE8] shadow-sm">
                    {story.category}
                  </span>

                  <button
                    onClick={(e) => handleToggleSave(e, story.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-[#E06D3B] shadow-sm transition-all"
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#E06D3B]' : ''}`} />
                  </button>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs text-white/90 font-bold block">
                      📍 {story.countryName}
                    </span>
                  </div>
                </div>

                <div className="p-5 text-left">
                  <h3 className="text-lg font-bold text-[#303044] font-heading group-hover:text-[#8B6CE8] transition-colors line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-xs text-[#6B6882] line-clamp-3 leading-relaxed mt-2">
                    {story.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0 border-t border-[#F0EBF8] pt-3 flex items-center justify-between text-xs font-bold text-[#6B6882]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#8B6CE8]" />
                  <span>{story.readTimeMinutes} min read</span>
                </span>
                <span className="text-[#8B6CE8] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
