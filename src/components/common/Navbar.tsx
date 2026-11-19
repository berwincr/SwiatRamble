import React, { useState, useEffect } from 'react';
import { userService } from '../../services/userService';
import { UserProfile, UserProgress } from '../../types/user';
import { 
  Globe2, 
  Compass, 
  BookOpen, 
  Sparkles, 
  Award, 
  Search, 
  Menu, 
  X, 
  User as UserIcon, 
  LogOut,
  Flame,
  Shuffle
} from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, param?: string) => void;
  onOpenSearch: () => void;
  onOpenSpin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenSpin,
}) => {
  const [profile, setProfile] = useState<UserProfile>(userService.getProfile());
  const [progress, setProgress] = useState<UserProgress>(userService.getProgress());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = userService.subscribe(() => {
      setProfile(userService.getProfile());
      setProgress(userService.getProgress());
    });
    return unsubscribe;
  }, []);

  const levelInfo = userService.getLevelInfo(progress.totalXP);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Globe2 },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'discover', label: 'Discover', icon: BookOpen },
    { id: 'quiz', label: 'Culture Quiz', icon: Sparkles },
    { id: 'passport', label: 'My Passport', icon: Award },
  ];

  return (
    <header className="sticky top-0 z-40 w-full px-3 sm:px-6 py-3 transition-all">
      <nav className="clay-card max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between bg-white/90 backdrop-blur-md border-2 border-white shadow-lg">
        {/* Brand Logo */}
        <div
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#8B6CE8] via-[#C8B6FF] to-[#A9DEF9] flex items-center justify-center shadow-md transform group-hover:rotate-12 transition-transform duration-300 border-2 border-white">
            <span className="text-xl">🌍</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-[#303044] leading-none group-hover:text-[#8B6CE8] transition-colors">
              Swiat<span className="text-[#8B6CE8]">Ramble</span>
            </span>
            <span className="text-[9px] font-bold tracking-widest text-[#8B6CE8] uppercase mt-0.5">
              Explore the World
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`clay-btn text-xs xl:text-sm py-2 px-3.5 xl:px-4 transition-all duration-200 ${
                  isActive
                    ? 'clay-btn-purple text-white shadow-md'
                    : 'bg-transparent border-transparent hover:bg-[#F4EFE6] text-[#303044]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Side Utility Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Spin The Globe Shortcut Button */}
          <button
            onClick={onOpenSpin}
            className="hidden sm:inline-flex clay-btn clay-btn-peach text-xs py-2 px-3 shadow-sm"
            title="Spin the Globe for a random country adventure"
          >
            <Shuffle className="w-3.5 h-3.5 animate-spin-slow" />
            <span className="hidden md:inline">Spin Globe</span>
          </button>

          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 sm:p-2.5 rounded-full bg-[#F4EFE6] hover:bg-[#EBE5FF] text-[#303044] hover:text-[#8B6CE8] transition-all border border-white shadow-sm"
            title="Search countries, foods, landmarks..."
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* User Profile / Passport XP Pill */}
          <div className="relative">
            <button
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="clay-card py-1.5 pl-2 pr-3 flex items-center gap-2 border border-[#C8B6FF]/50 bg-white hover:bg-[#FAFAFF] transition-all"
            >
              <div className="w-7 h-7 rounded-full overflow-hidden bg-[#EBE5FF] border border-[#8B6CE8] shrink-0">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-bold text-[#303044] leading-none line-clamp-1">
                  {profile.name}
                </span>
                <span className="text-[10px] text-[#8B6CE8] font-bold flex items-center gap-0.5 mt-0.5">
                  <Flame className="w-2.5 h-2.5 text-[#FF9B71]" />
                  <span>
                    {profile.isGuest ? 'Guest • XP locked' : `${progress.totalXP} XP • Lvl ${levelInfo.level}`}
                  </span>
                </span>
              </div>
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 clay-card p-4 bg-white border-2 border-[#C8B6FF] shadow-2xl z-50 animate-fadeIn text-left">
                <div className="flex items-center gap-3 pb-3 border-b border-[#F0EBF8]">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#8B6CE8]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#303044] font-heading">{profile.name}</h4>
                    <p className="text-[10px] text-[#6B6882]">{profile.isGuest ? 'Guest Explorer' : profile.email}</p>
                    <span className={`inline-block px-2 py-0.5 mt-1 rounded-full text-[10px] font-bold ${
                      profile.isGuest ? 'bg-[#FFF2C7] text-[#8A5E00]' : 'bg-[#DCF8E8] text-[#1E8A54]'
                    }`}>
                      {profile.isGuest ? 'Create account to earn XP' : levelInfo.title}
                    </span>
                  </div>
                </div>

                <div className="py-2 space-y-1">
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      onNavigate('passport');
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#303044] hover:bg-[#EBE5FF] flex items-center gap-2"
                  >
                    <Award className="w-4 h-4 text-[#8B6CE8]" />
                    <span>My World Passport</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsProfileDropdownOpen(false);
                      onNavigate('profile');
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#303044] hover:bg-[#EBE5FF] flex items-center gap-2"
                  >
                    <UserIcon className="w-4 h-4 text-[#8B6CE8]" />
                    <span>Profile & Settings</span>
                  </button>
                </div>

                <div className="pt-2 border-t border-[#F0EBF8]">
                  {profile.isGuest ? (
                    <button
                      onClick={() => {
                        setIsProfileDropdownOpen(false);
                        onNavigate('profile');
                      }}
                      className="clay-btn clay-btn-purple w-full py-1.5 text-xs"
                    >
                      Create Local Account
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        userService.logout();
                        setIsProfileDropdownOpen(false);
                        onNavigate('home');
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-xl text-xs font-bold text-red-500 hover:bg-red-50 flex items-center gap-2"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-[#F4EFE6] text-[#303044]"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 clay-card p-4 bg-white/95 backdrop-blur-md border-2 border-[#C8B6FF] shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`clay-btn justify-start text-sm py-2.5 px-4 ${
                    isActive ? 'clay-btn-purple text-white' : 'clay-btn-white text-[#303044]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </button>
              );
            })}

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSpin();
              }}
              className="clay-btn clay-btn-peach justify-start text-sm py-2.5 px-4"
            >
              <Shuffle className="w-4 h-4" />
              <span>Spin the Globe</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
