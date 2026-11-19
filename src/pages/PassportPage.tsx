import React, { useState, useEffect } from 'react';
import { userService } from '../services/userService';
import { UserProfile, UserProgress, Achievement } from '../types/user';
import { achievementsList } from '../data/achievements';
import { allCountries, getCountryBySlug } from '../data/countries';
import { storiesData } from '../data/stories';
import { InteractiveWorldMap } from '../components/map/InteractiveWorldMap';
import { TaraMascot } from '../components/mascot/TaraMascot';
import { 
  Award, 
  MapPin, 
  Heart, 
  Bookmark, 
  Flame, 
  Star, 
  CheckCircle2, 
  Clock, 
  Globe2, 
  Sparkles,
  Trophy,
  ArrowRight,
  ShieldCheck,
  Compass,
  BookOpen
} from 'lucide-react';

interface PassportPageProps {
  onNavigate: (page: string, param?: string) => void;
}

export const PassportPage: React.FC<PassportPageProps> = ({ onNavigate }) => {
  const [profile, setProfile] = useState<UserProfile>(userService.getProfile());
  const [progress, setProgress] = useState<UserProgress>(userService.getProgress());
  const [activeTab, setActiveTab] = useState<'stamps' | 'map' | 'badges' | 'wishlist' | 'quizzes'>('stamps');

  useEffect(() => {
    const unsub = userService.subscribe(() => {
      setProfile(userService.getProfile());
      setProgress(userService.getProgress());
    });
    return unsub;
  }, []);

  const levelInfo = userService.getLevelInfo(progress.totalXP);

  const exploredCountryObjects = progress.exploredCountries
    .map(slug => getCountryBySlug(slug))
    .filter(Boolean);

  const wishlistCountryObjects = progress.wishlistCountries
    .map(slug => getCountryBySlug(slug))
    .filter(Boolean);

  const favoriteCountryObjects = progress.favoriteCountries
    .map(slug => getCountryBySlug(slug))
    .filter(Boolean);

  const savedStoryObjects = progress.savedStories
    .map(id => storiesData.find(s => s.id === id))
    .filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-10 text-left">
      {/* ========================================================
          PASSPORT COVER & IDENTITY BOOKLET HEADER
      ======================================================== */}
      <div className="clay-card p-6 sm:p-10 bg-gradient-to-r from-[#2B2353] via-[#3B2C6F] to-[#4F3699] text-white border-4 border-[#C8B6FF] shadow-2xl relative overflow-hidden">
        {/* Gold Foil Pattern Background */}
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <Globe2 className="w-80 h-80 text-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          {/* Passport Photo & Level */}
          <div className="md:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="relative">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-4 border-[#FFE69A] shadow-2xl bg-white p-1">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <span className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-[#FFE69A] text-[#B87000] shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </span>
            </div>

            <h2 className="text-2xl font-extrabold font-heading mt-3 text-white">
              {profile.name}
            </h2>
            <p className="text-xs text-[#C8B6FF] font-semibold">
              {profile.isGuest ? 'Guest Passport Holder' : profile.email}
            </p>

            <span className="mt-2 inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-[#FFE69A] border border-white/20">
              {profile.isGuest ? 'Guest Explorer' : levelInfo.title}
            </span>
          </div>

          {/* Passport Stats & Progress */}
          <div className="md:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/20 pb-3">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C8B6FF] font-bold block">
                  Official World Passport
                </span>
                <span className="text-sm font-semibold text-white/80">
                  Passport No: SW-{profile.id.slice(-6).toUpperCase()} • Issued: {profile.joinedDate}
                </span>
              </div>

              {profile.isGuest ? (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-white/80">
                    Create an account to earn XP, level up, and unlock achievements.
                  </span>
                  <button
                    onClick={() => onNavigate('profile')}
                    className="rounded-full bg-[#FFE69A] px-3 py-1.5 text-xs font-extrabold text-[#303044] hover:bg-[#FFDC70]"
                  >
                    Create Local Account
                  </button>
                </div>
              ) : (
                <div className="px-3 py-1.5 rounded-2xl bg-[#FFE69A] text-[#303044] text-xs font-extrabold flex items-center gap-1 shadow-sm">
                  <Flame className="w-4 h-4 text-[#FF9B71] fill-[#FF9B71]" />
                  <span>{progress.totalXP} Total XP</span>
                </div>
              )}
            </div>

            {/* Level Progress Bar */}
            {!profile.isGuest && (
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-white/90">Level {levelInfo.level} Progress</span>
                  <span className="text-[#FFE69A]">{levelInfo.progressPercent}% to Level {levelInfo.level + 1}</span>
                </div>
                <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden p-0.5 border border-white/30">
                  <div
                    className="bg-gradient-to-r from-[#FFE69A] to-[#B8F2D0] h-full rounded-full transition-all duration-500"
                    style={{ width: `${levelInfo.progressPercent}%` }}
                  />
                </div>
              </div>
            )}

            {/* Metric Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <span className="text-[10px] uppercase font-bold text-[#C8B6FF] block">Explored</span>
                <span className="text-xl font-extrabold text-white font-heading">
                  {progress.exploredCountries.length} / {allCountries.length}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <span className="text-[10px] uppercase font-bold text-[#C8B6FF] block">Wishlist</span>
                <span className="text-xl font-extrabold text-white font-heading">
                  {progress.wishlistCountries.length}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <span className="text-[10px] uppercase font-bold text-[#C8B6FF] block">Badges</span>
                <span className="text-xl font-extrabold text-white font-heading">
                  {progress.unlockedAchievements.length} / {achievementsList.length}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <span className="text-[10px] uppercase font-bold text-[#C8B6FF] block">Quizzes Taken</span>
                <span className="text-xl font-extrabold text-white font-heading">
                  {progress.quizHistory.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          PASSPORT TABS NAVIGATION
      ======================================================== */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs font-bold">
        {[
          { id: 'stamps', label: `Passport Stamps (${exploredCountryObjects.length})`, icon: MapPin },
          { id: 'map', label: 'Interactive Passport Map', icon: Globe2 },
          { id: 'badges', label: `Achievements (${progress.unlockedAchievements.length})`, icon: Award },
          { id: 'wishlist', label: `Wishlist & Favorites (${wishlistCountryObjects.length})`, icon: Bookmark },
          { id: 'quizzes', label: `Quiz History (${progress.quizHistory.length})`, icon: Trophy },
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`clay-btn text-xs py-2 px-4 whitespace-nowrap transition-all ${
                isActive
                  ? 'clay-btn-purple text-white shadow-md'
                  : 'clay-btn-white text-[#303044]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ========================================================
          TAB 1: PASSPORT STAMPS
      ======================================================== */}
      {activeTab === 'stamps' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-[#303044] font-heading">
              Your Visas and Entry Stamps
            </h3>
            <span className="text-xs text-[#8B6CE8] font-bold">
              {exploredCountryObjects.length} of {allCountries.length} countries stamped
            </span>
          </div>

          {exploredCountryObjects.length === 0 ? (
            <div className="clay-card p-12 text-center bg-white border-2 border-[#C8B6FF]">
              <p className="text-sm text-[#6B6882] mb-4">No stamps in your passport yet!</p>
              <button
                onClick={() => onNavigate('explore')}
                className="clay-btn clay-btn-purple text-xs py-2 px-4"
              >
                Start Exploring Now
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {exploredCountryObjects.map(country => (
                <div
                  key={country!.id}
                  onClick={() => onNavigate('country', country!.slug)}
                  className="clay-card p-4 bg-[#FFFBF0] border-2 border-dashed border-[#8B6CE8]/60 hover:border-[#8B6CE8] cursor-pointer group hover:-rotate-1 transition-all text-center relative overflow-hidden"
                >
                  {/* Circular Visa Stamp Look */}
                  <div className="w-16 h-16 mx-auto rounded-full border-2 border-dashed border-[#8B6CE8] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform bg-white/60">
                    <span className="text-3xl">{country!.flagEmoji}</span>
                  </div>

                  <span className="text-[10px] font-bold tracking-widest text-[#8B6CE8] uppercase block">
                    ★ ENTRY PERMITTED ★
                  </span>
                  <h4 className="text-base font-bold text-[#303044] font-heading mt-0.5">
                    {country!.name}
                  </h4>
                  <p className="text-[10px] text-[#6B6882]">
                    {country!.continent} • {country!.capital}
                  </p>

                  <div className="mt-3 pt-2 border-t border-[#8B6CE8]/20 flex items-center justify-center text-[10px] font-bold text-[#8B6CE8]">
                    <span>View Country Dossier →</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ========================================================
          TAB 2: INTERACTIVE PASSPORT MAP
      ======================================================== */}
      {activeTab === 'map' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-[#303044] font-heading">
              Personal World Exploration Map
            </h3>
            <span className="text-xs text-[#8B6CE8] font-bold">
              Green = Explored • Orange = Wishlist • Purple = Unexplored
            </span>
          </div>

          <InteractiveWorldMap
            onSelectCountry={(slug) => onNavigate('country', slug)}
            selectedContinent="All"
            mode="passport"
          />
        </div>
      )}

      {/* ========================================================
          TAB 3: ACHIEVEMENTS & BADGES
      ======================================================== */}
      {activeTab === 'badges' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-[#303044] font-heading">
              Exploration Badges & Honors
            </h3>
            <span className="text-xs text-[#8B6CE8] font-bold">
              {progress.unlockedAchievements.length} of {achievementsList.length} unlocked
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsList.map(ach => {
              const isUnlocked = progress.unlockedAchievements.includes(ach.id);

              return (
                <div
                  key={ach.id}
                  className={`clay-card p-5 border-2 transition-all text-left flex items-start gap-4 ${
                    isUnlocked
                      ? 'bg-white border-[#8B6CE8] shadow-md'
                      : 'bg-gray-50/80 border-gray-200 opacity-60'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-sm border ${
                      isUnlocked
                        ? 'bg-[#EBE5FF] border-[#8B6CE8] text-[#8B6CE8]'
                        : 'bg-gray-200 border-gray-300 text-gray-400'
                    }`}
                  >
                    {isUnlocked ? '🏆' : '🔒'}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#303044] font-heading">
                        {ach.name}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFE69A] text-[#B87000]">
                        +{ach.xpReward} XP
                      </span>
                    </div>

                    <p className="text-xs text-[#6B6882] leading-relaxed mt-1">
                      {ach.description}
                    </p>

                    <div className="mt-2 text-[10px] font-bold text-[#8B6CE8]">
                      Condition: {ach.conditionDescription}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 4: WISHLIST & FAVORITES
      ======================================================== */}
      {activeTab === 'wishlist' && (
        <div className="space-y-8">
          {/* Wishlist Countries */}
          <div>
            <h3 className="text-xl font-bold text-[#303044] font-heading mb-4 flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-[#E06D3B]" />
              <span>Wishlist Countries ({wishlistCountryObjects.length})</span>
            </h3>

            {wishlistCountryObjects.length === 0 ? (
              <p className="text-xs text-[#6B6882] italic">No countries saved to your wishlist yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {wishlistCountryObjects.map(c => (
                  <div
                    key={c!.id}
                    onClick={() => onNavigate('country', c!.slug)}
                    className="clay-card p-4 bg-white border border-[#FFE2D4] hover:border-[#E06D3B] transition-all cursor-pointer flex items-center gap-3"
                  >
                    <span className="text-3xl">{c!.flagEmoji}</span>
                    <div>
                      <h4 className="text-sm font-bold text-[#303044] font-heading">{c!.name}</h4>
                      <p className="text-xs text-[#6B6882]">{c!.continent}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Saved Discover Stories */}
          <div className="pt-4 border-t border-[#F0EBF8]">
            <h3 className="text-xl font-bold text-[#303044] font-heading mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#8B6CE8]" />
              <span>Bookmarked Cultural Stories ({savedStoryObjects.length})</span>
            </h3>

            {savedStoryObjects.length === 0 ? (
              <p className="text-xs text-[#6B6882] italic">No stories bookmarked yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {savedStoryObjects.map(s => (
                  <div
                    key={s!.id}
                    onClick={() => onNavigate('story', s!.slug)}
                    className="clay-card p-4 bg-white border border-[#E5DEFF] hover:border-[#8B6CE8] transition-all cursor-pointer flex items-center gap-3"
                  >
                    <img src={s!.image} alt={s!.title} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-[#8B6CE8] uppercase">{s!.category}</span>
                      <h4 className="text-xs sm:text-sm font-bold text-[#303044] line-clamp-1">{s!.title}</h4>
                      <p className="text-[11px] text-[#6B6882] line-clamp-1">{s!.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 5: QUIZ HISTORY
      ======================================================== */}
      {activeTab === 'quizzes' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-[#303044] font-heading">
              Culture Quiz History
            </h3>
            <button
              onClick={() => onNavigate('quiz')}
              className="clay-btn clay-btn-purple text-xs py-1.5 px-3"
            >
              Take a New Quiz
            </button>
          </div>

          {progress.quizHistory.length === 0 ? (
            <div className="clay-card p-12 text-center bg-white border-2 border-[#C8B6FF]">
              <p className="text-sm text-[#6B6882] mb-3">You haven't completed any quizzes yet!</p>
              <button
                onClick={() => onNavigate('quiz')}
                className="clay-btn clay-btn-purple text-xs py-2 px-4"
              >
                Take Your First Quiz
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {progress.quizHistory.map((q, idx) => (
                <div
                  key={idx}
                  className="clay-card p-4 bg-white border border-[#E5DEFF] flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-[#303044] font-heading">{q.category}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F4EFE6] text-[#6B6882] capitalize">
                        {q.difficulty}
                      </span>
                      {q.isPerfect && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFF2C7] text-[#B87000] flex items-center gap-0.5">
                          ⭐ Perfect Score!
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#6B6882] mt-0.5">{q.date}</p>
                  </div>

                  <div className="text-right">
                    <span className="text-sm font-extrabold text-[#303044]">
                      {q.score} / {q.totalQuestions}
                    </span>
                    <span className="text-xs font-bold text-[#8B6CE8] block">
                      {profile.isGuest ? 'Practice run · no XP' : `+${q.earnedXP} XP`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
