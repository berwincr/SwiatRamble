import { UserProfile, UserProgress, Achievement } from '../types/user';
import { QuizResult } from '../types/quiz';
import { achievementsList } from '../data/achievements';
import { allCountries } from '../data/countries';
import confetti from 'canvas-confetti';

const STORAGE_PROFILE_KEY = 'swiatramble_user_profile';
const STORAGE_PROGRESS_KEY = 'swiatramble_user_progress';

const defaultProfile: UserProfile = {
  id: 'guest-explorer',
  name: 'Curious Explorer',
  email: 'explorer@swiatramble.com',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  bio: 'Roaming the globe, discovering traditions and stories with Tara!',
  isGuest: true,
  joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
};

const defaultProgress: UserProgress = {
  exploredCountries: ['japan'], // starter country explored to greet user
  wishlistCountries: ['peru', 'egypt'],
  favoriteCountries: ['india', 'italy'],
  savedStories: ['japanese-tea-ceremony'],
  totalXP: 0,
  unlockedAchievements: [],
  quizHistory: [],
  lastActive: new Date().toISOString(),
};

function withoutGuestRewards(progress: UserProgress): UserProgress {
  return {
    ...progress,
    totalXP: 0,
    unlockedAchievements: [],
    quizHistory: progress.quizHistory.map(result => ({ ...result, earnedXP: 0 })),
  };
}

type Listener = () => void;
const listeners: Set<Listener> = new Set();

function notifyListeners() {
  listeners.forEach(cb => cb());
}

export const userService = {
  subscribe(listener: Listener) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },

  getProfile(): UserProfile {
    try {
      const data = localStorage.getItem(STORAGE_PROFILE_KEY);
      if (data) return JSON.parse(data);
    } catch {
      // Fallback
    }
    return defaultProfile;
  },

  hasAccount(): boolean {
    return this.getProfile().isGuest === false;
  },

  getProgress(): UserProgress {
    try {
      const data = localStorage.getItem(STORAGE_PROGRESS_KEY);
      if (data) {
        const progress: UserProgress = JSON.parse(data);
        return this.hasAccount() ? progress : withoutGuestRewards(progress);
      }
    } catch {
      // Fallback
    }
    return this.hasAccount() ? defaultProgress : withoutGuestRewards(defaultProgress);
  },

  saveProfile(profile: UserProfile) {
    if (this.getProfile().isGuest && profile.isGuest === false) {
      const progress = withoutGuestRewards(this.getProgress());
      progress.lastActive = new Date().toISOString();
      localStorage.setItem(STORAGE_PROGRESS_KEY, JSON.stringify(progress));
    }
    localStorage.setItem(STORAGE_PROFILE_KEY, JSON.stringify(profile));
    notifyListeners();
  },

  saveProgress(progress: UserProgress) {
    const progressToSave = this.hasAccount() ? progress : withoutGuestRewards(progress);
    progressToSave.lastActive = new Date().toISOString();
    localStorage.setItem(STORAGE_PROGRESS_KEY, JSON.stringify(progressToSave));
    notifyListeners();
  },

  login(name: string, email: string) {
    const current = this.getProfile();
    const updated: UserProfile = {
      ...current,
      id: `user-${Date.now()}`,
      name: name.trim() || 'Curious Explorer',
      email: email.trim() || 'user@swiatramble.com',
      isGuest: false,
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    };
    this.saveProfile(updated);
  },

  logout() {
    const progress = withoutGuestRewards(this.getProgress());
    progress.lastActive = new Date().toISOString();
    localStorage.removeItem(STORAGE_PROFILE_KEY);
    localStorage.setItem(STORAGE_PROGRESS_KEY, JSON.stringify(progress));
    notifyListeners();
  },

  updateAvatar(avatarUrl: string) {
    const current = this.getProfile();
    this.saveProfile({ ...current, avatar: avatarUrl });
  },

  markCountryExplored(slug: string): boolean {
    const progress = this.getProgress();
    if (!progress.exploredCountries.includes(slug)) {
      progress.exploredCountries.push(slug);
      const hasAccount = this.hasAccount();
      if (hasAccount) progress.totalXP += 15;
      this.saveProgress(progress);
      if (hasAccount) this.checkAndUnlockAchievements();
      return true;
    }
    return false;
  },

  toggleWishlistCountry(slug: string): boolean {
    const progress = this.getProgress();
    const index = progress.wishlistCountries.indexOf(slug);
    let added = false;
    if (index > -1) {
      progress.wishlistCountries.splice(index, 1);
    } else {
      progress.wishlistCountries.push(slug);
      added = true;
    }
    this.saveProgress(progress);
    return added;
  },

  toggleFavoriteCountry(slug: string): boolean {
    const progress = this.getProgress();
    const index = progress.favoriteCountries.indexOf(slug);
    let added = false;
    if (index > -1) {
      progress.favoriteCountries.splice(index, 1);
    } else {
      progress.favoriteCountries.push(slug);
      added = true;
    }
    this.saveProgress(progress);
    return added;
  },

  toggleSaveStory(storyId: string): boolean {
    const progress = this.getProgress();
    const index = progress.savedStories.indexOf(storyId);
    let added = false;
    if (index > -1) {
      progress.savedStories.splice(index, 1);
    } else {
      progress.savedStories.push(storyId);
      added = true;
    }
    this.saveProgress(progress);
    this.checkAndUnlockAchievements();
    return added;
  },

  recordQuizAttempt(result: QuizResult) {
    const progress = this.getProgress();
    const hasAccount = this.hasAccount();
    progress.quizHistory.unshift({
      ...result,
      earnedXP: hasAccount ? result.earnedXP : 0,
    });
    if (hasAccount) progress.totalXP += result.earnedXP;
    this.saveProgress(progress);
    if (hasAccount) this.checkAndUnlockAchievements(result);
  },

  checkAndUnlockAchievements(latestQuiz?: QuizResult) {
    if (!this.hasAccount()) return;

    const progress = this.getProgress();
    const unlocked = new Set(progress.unlockedAchievements);
    const newUnlocks: Achievement[] = [];

    const triggerUnlock = (id: string) => {
      if (!unlocked.has(id)) {
        const ach = achievementsList.find(a => a.id === id);
        if (ach) {
          unlocked.add(id);
          progress.totalXP += ach.xpReward;
          newUnlocks.push(ach);
        }
      }
    };

    const explored = progress.exploredCountries;

    // 1. First adventure
    if (explored.length >= 1) triggerUnlock('first-adventure');

    // 2. Count by continent
    const exploredObj = allCountries.filter(c => explored.includes(c.slug));
    const asiaCount = exploredObj.filter(c => c.continent === 'Asia').length;
    const europeCount = exploredObj.filter(c => c.continent === 'Europe').length;
    const africaCount = exploredObj.filter(c => c.continent === 'Africa').length;
    const americasCount = exploredObj.filter(c => c.continent === 'North America' || c.continent === 'South America').length;
    const hasAus = explored.includes('australia');
    const hasNZ = explored.includes('new-zealand');

    if (asiaCount >= 5) triggerUnlock('asian-explorer');
    if (europeCount >= 5) triggerUnlock('european-voyager');
    if (africaCount >= 3) triggerUnlock('african-safari');
    if (americasCount >= 4) triggerUnlock('american-trail');
    if (hasAus && hasNZ) triggerUnlock('oceania-nomad');

    // 3. Overall counts
    if (explored.length >= 10) triggerUnlock('culture-collector');
    if (explored.length >= 20) triggerUnlock('world-wanderer');
    if (explored.length >= 30) triggerUnlock('global-explorer');

    // 4. Stories
    if (progress.savedStories.length >= 5) triggerUnlock('story-seeker');

    // 5. Perfect quiz
    if (latestQuiz && latestQuiz.isPerfect) triggerUnlock('quiz-champion');

    // 6. XP threshold
    if (progress.totalXP >= 500) triggerUnlock('master-voyager');

    if (newUnlocks.length > 0) {
      progress.unlockedAchievements = Array.from(unlocked);
      this.saveProgress(progress);
      // Trigger joyful celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C8B6FF', '#B8F2D0', '#FFC6A8', '#FFE69A', '#A9DEF9']
        });
      } catch {
        // Safe fallback
      }
    }
  },

  getLevelInfo(xp: number): { level: number; title: string; nextLevelXP: number; progressPercent: number } {
    if (!this.hasAccount()) xp = 0;

    const levelThresholds = [0, 100, 250, 450, 700, 1000, 1500, 2200];
    const titles = [
      'Curious Wanderer',
      'Junior Explorer',
      'Globe Trotter',
      'Culture Enthusiast',
      'World Ambassador',
      'Master Voyager',
      'Grand Historian',
      'Legendary Pathfinder'
    ];

    let currentLevel = 1;
    for (let i = 0; i < levelThresholds.length; i++) {
      if (xp >= levelThresholds[i]) {
        currentLevel = i + 1;
      } else {
        break;
      }
    }

    const currentBaseXP = levelThresholds[currentLevel - 1] || 0;
    const nextTargetXP = levelThresholds[currentLevel] || currentBaseXP + 500;
    const levelXP = xp - currentBaseXP;
    const span = nextTargetXP - currentBaseXP;
    const progressPercent = Math.min(100, Math.max(0, Math.round((levelXP / span) * 100)));

    return {
      level: currentLevel,
      title: titles[currentLevel - 1] || 'Global Pathfinder',
      nextLevelXP: nextTargetXP,
      progressPercent
    };
  }
};
