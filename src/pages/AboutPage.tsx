import React from 'react';
import { TaraMascot } from '../components/mascot/TaraMascot';
import { Globe2, Heart, Sparkles, BookOpen, Compass, Award } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-12 text-left">
      {/* Hero */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE5FF] text-[#8B6CE8] text-xs font-bold uppercase tracking-wider">
          <Globe2 className="w-3.5 h-3.5" />
          <span>Our Vision & Story</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#303044] font-heading">
          About SwiatRamble
        </h1>
        <p className="text-base sm:text-lg text-[#6B6882] max-w-xl mx-auto">
          "Explore the world. Discover its stories."
        </p>
      </div>

      {/* Main Philosophy Card */}
      <div className="clay-card p-6 sm:p-10 bg-white border-4 border-white shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="shrink-0">
            <TaraMascot pose="welcoming" size="lg" animate={true} />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#303044] font-heading">
              Why We Built SwiatRamble
            </h2>
            <p className="text-sm sm:text-base text-[#6B6882] leading-relaxed">
              We believe the world is not merely a collection of borders, airport terminals, or administrative statistics. It is an extraordinary living library of stories, ancient philosophies, family feasts, seasonal dances, and living craftsmanship.
            </p>
            <p className="text-sm sm:text-base text-[#6B6882] leading-relaxed">
              SwiatRamble was designed as a warm, tactile, 3D claymorphic journey where students, families, and curious adults can explore 30 launch countries across all six continents without getting lost in generic tourist blogs or sterile encyclopedia entries.
            </p>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#F0EBF8]">
          <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#FFE69A]">
            <span className="text-2xl block mb-2">✨</span>
            <h3 className="text-base font-bold text-[#303044] font-heading mb-1">
              Respect for Diversity
            </h3>
            <p className="text-xs text-[#6B6882] leading-relaxed">
              We celebrate multiple languages, diverse ethnic traditions, and avoid stereotypes or monolithic portrayals of any culture.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#FFE69A]">
            <span className="text-2xl block mb-2">🎨</span>
            <h3 className="text-base font-bold text-[#303044] font-heading mb-1">
              Tactile 3D Clay Aesthetic
            </h3>
            <p className="text-xs text-[#6B6882] leading-relaxed">
              Warm cream backgrounds, soft pastel cards, puffy buttons, and gentle lighting invite playful curiosity and visual joy.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FFF9F0] border border-[#FFE69A]">
            <span className="text-2xl block mb-2">📖</span>
            <h3 className="text-base font-bold text-[#303044] font-heading mb-1">
              Story-Driven Education
            </h3>
            <p className="text-xs text-[#6B6882] leading-relaxed">
              History, food, clothing, and festivals are illuminated through narrative immersion and interactive quizzes with Tara.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Tara Feature */}
      <div className="clay-card p-6 sm:p-8 bg-gradient-to-r from-[#FFF9F0] via-white to-[#F2EDFF] border-2 border-[#C8B6FF] shadow-md space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-[#303044] font-heading flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8B6CE8]" />
          <span>Tara: The Heart and Soul of SwiatRamble</span>
        </h3>
        <p className="text-sm text-[#6B6882] leading-relaxed">
          Tara is the 9-year-old storyteller who accompanies you on every single page. From welcoming you at the gates of Paris and Kyoto to testing your knowledge on Culture Quizzes and stamping your World Passport, Tara ensures learning always feels like a warm conversation between friends.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('explore')}
            className="clay-btn clay-btn-purple text-xs sm:text-sm py-2 px-5 shadow-sm"
          >
            <span>Start Exploring with Tara</span>
            <Compass className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
