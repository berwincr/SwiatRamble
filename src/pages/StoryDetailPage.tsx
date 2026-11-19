import React, { useState, useEffect } from 'react';
import { getStoryBySlug, getStoriesByCountry } from '../data/stories';
import { Story } from '../types/story';
import { TaraMascot } from '../components/mascot/TaraMascot';
import { userService } from '../services/userService';
import { 
  ArrowLeft, 
  Bookmark, 
  Share2, 
  Clock, 
  MapPin, 
  Sparkles, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface StoryDetailPageProps {
  slug: string;
  onNavigate: (page: string, param?: string) => void;
}

export const StoryDetailPage: React.FC<StoryDetailPageProps> = ({
  slug,
  onNavigate,
}) => {
  const [story, setStory] = useState<Story | undefined>(getStoryBySlug(slug));
  const [isSaved, setIsSaved] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  useEffect(() => {
    const found = getStoryBySlug(slug);
    setStory(found);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (found) {
      const progress = userService.getProgress();
      setIsSaved(progress.savedStories.includes(found.id));
    }
  }, [slug]);

  if (!story) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-[#303044] mb-3 font-heading">Story Not Found</h2>
        <p className="text-sm text-[#6B6882] mb-6">We couldn’t find the story you were looking for.</p>
        <button
          onClick={() => onNavigate('discover')}
          className="clay-btn clay-btn-purple text-sm py-2 px-5"
        >
          Return to Discover
        </button>
      </div>
    );
  }

  const handleToggleSave = () => {
    const res = userService.toggleSaveStory(story.id);
    setIsSaved(res);
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-8 text-left">
      {/* Back button and actions */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('discover')}
          className="clay-btn clay-btn-white text-xs py-2 px-4 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Stories</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleSave}
            className={`clay-btn text-xs py-2 px-3.5 transition-all ${
              isSaved
                ? 'bg-[#FFE2D4] border-[#E06D3B] text-[#E06D3B]'
                : 'clay-btn-white text-[#303044]'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#E06D3B]' : ''}`} />
            <span>{isSaved ? 'Story Saved' : 'Save Story'}</span>
          </button>

          <button
            onClick={handleShare}
            className="p-2.5 rounded-full bg-white border border-[#C8B6FF] hover:bg-[#EBE5FF] text-[#303044] transition-all shadow-sm relative"
            title="Share story"
          >
            <Share2 className="w-4 h-4" />
            {copiedShare && (
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md bg-[#303044] text-white text-[10px] font-bold shadow-md">
                Copied Link!
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Story Hero Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#8B6CE8] uppercase tracking-wider">
          <span className="px-2.5 py-1 rounded-full bg-[#EBE5FF]">{story.category}</span>
          <span>•</span>
          <button
            onClick={() => onNavigate('country', story.countryId)}
            className="hover:underline flex items-center gap-1 text-[#303044]"
          >
            <MapPin className="w-3.5 h-3.5 text-[#8B6CE8]" />
            <span>{story.countryName}</span>
          </button>
          <span>•</span>
          <span className="flex items-center gap-1 text-[#6B6882]">
            <Clock className="w-3.5 h-3.5" /> {story.readTimeMinutes} min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#303044] font-heading leading-tight">
          {story.title}
        </h1>
        <p className="text-base sm:text-lg text-[#8B6CE8] font-bold">
          {story.subtitle}
        </p>
      </div>

      {/* Story Image */}
      <div className="clay-card overflow-hidden bg-white border-4 border-white shadow-xl">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-72 sm:h-96 object-cover"
        />
      </div>

      {/* Story Text Paragraphs */}
      <div className="clay-card p-6 sm:p-10 bg-white border-2 border-white shadow-md space-y-6">
        <div className="prose max-w-none text-base sm:text-lg text-[#303044] leading-relaxed space-y-5">
          {story.contentParagraphs.map((paragraph, idx) => (
            <p key={idx} className="font-normal text-[#303044]/90">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tara's Commentary Note */}
        <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-[#FFF9F0] via-white to-[#F2EDFF] border-2 border-[#C8B6FF] shadow-sm flex flex-col sm:flex-row items-center gap-5">
          <div className="shrink-0 -mt-2">
            <TaraMascot pose="reading" size="md" animate={true} />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EBE5FF] text-[#8B6CE8] text-xs font-bold uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tara's Storybook Thoughts</span>
            </div>
            <p className="text-sm sm:text-base text-[#303044] font-medium leading-relaxed italic">
              "{story.taraNote}"
            </p>
          </div>
        </div>

        {/* Fun Fact Callout */}
        <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#FFE69A] flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <strong className="text-xs font-bold text-[#B87000] uppercase block">Did You Know?</strong>
            <p className="text-xs sm:text-sm text-[#303044] font-medium leading-relaxed mt-0.5">
              {story.funFact}
            </p>
          </div>
        </div>

        {/* Bottom Country CTA */}
        <div className="pt-6 border-t border-[#F0EBF8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#6B6882] block">Want to learn more about this country?</span>
            <span className="text-sm font-bold text-[#303044]">
              Explore the complete culture, foods, and history of {story.countryName}!
            </span>
          </div>

          <button
            onClick={() => onNavigate('country', story.countryId)}
            className="clay-btn clay-btn-purple text-xs sm:text-sm py-2 px-5 whitespace-nowrap shadow-sm"
          >
            <span>Explore {story.countryName}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
