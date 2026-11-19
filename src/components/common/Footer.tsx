import React from 'react';
import { TaraMascot } from '../mascot/TaraMascot';
import { Globe, Heart, Sparkles, Mail, Shield, BookOpen, Compass } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, param?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-20 border-t-4 border-[#C8B6FF]/30 bg-gradient-to-b from-[#FFF9F0] via-[#FAF5FF] to-[#F3EBFF] relative overflow-hidden text-left">
      {/* Subtle background decoration */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Mascot Intro */}
          <div className="lg:col-span-2">
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 cursor-pointer select-none mb-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#8B6CE8] to-[#A9DEF9] flex items-center justify-center shadow-md border-2 border-white">
                <span className="text-xl">🌍</span>
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl tracking-tight text-[#303044]">
                  Swiat<span className="text-[#8B6CE8]">Ramble</span>
                </span>
                <p className="text-[10px] font-bold tracking-widest text-[#8B6CE8] uppercase">
                  Explore the world. Discover its stories.
                </p>
              </div>
            </div>

            <p className="text-sm text-[#6B6882] leading-relaxed mb-6 max-w-md">
              A playful 3D claymorphic cultural discovery journey designed for students, families, and curious explorers around the globe. Learn history, cuisine, festivals, and traditions with Tara as your guide.
            </p>

            <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-[#C8B6FF]/40 shadow-sm max-w-sm">
              <div className="shrink-0">
                <TaraMascot pose="welcoming" size="sm" animate={false} />
              </div>
              <p className="text-xs font-semibold text-[#303044] leading-snug">
                "Keep your passport handy and never stop asking questions about our magnificent world!" ✨
              </p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-heading font-bold text-base text-[#303044] mb-4 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#8B6CE8]" />
              <span>Explore</span>
            </h4>
            <ul className="space-y-2 text-sm text-[#6B6882]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#8B6CE8] transition-colors"
                >
                  Homepage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('explore')}
                  className="hover:text-[#8B6CE8] transition-colors"
                >
                  Interactive World Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('discover')}
                  className="hover:text-[#8B6CE8] transition-colors"
                >
                  Cultural Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quiz')}
                  className="hover:text-[#8B6CE8] transition-colors"
                >
                  World Culture Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('passport')}
                  className="hover:text-[#8B6CE8] transition-colors"
                >
                  My World Passport
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Continents */}
          <div>
            <h4 className="font-heading font-bold text-base text-[#303044] mb-4 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#8B6CE8]" />
              <span>Continents</span>
            </h4>
            <ul className="space-y-2 text-sm text-[#6B6882]">
              <li>
                <button
                  onClick={() => onNavigate('explore', 'Asia')}
                  className="hover:text-[#8B6CE8] transition-colors"
                >
                  Asia (9 Countries)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('explore', 'Europe')}
                  className="hover:text-[#8B6CE8] transition-colors"
                >
                  Europe (6 Countries)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('explore', 'Africa')}
                  className="hover:text-[#8B6CE8] transition-colors"
                >
                  Africa (5 Countries)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('explore', 'North America')}
                  className="hover:text-[#8B6CE8] transition-colors"
                >
                  North America (4 Countries)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('explore', 'South America')}
                  className="hover:text-[#8B6CE8] transition-colors"
                >
                  South America (4 Countries)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('explore', 'Oceania')}
                  className="hover:text-[#8B6CE8] transition-colors"
                >
                  Oceania (2 Countries)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Platform & Info */}
          <div>
            <h4 className="font-heading font-bold text-base text-[#303044] mb-4 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#8B6CE8]" />
              <span>Platform</span>
            </h4>
            <ul className="space-y-2 text-sm text-[#6B6882]">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#8B6CE8] transition-colors"
                >
                  About SwiatRamble
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#8B6CE8] transition-colors"
                >
                  Contact & Feedback
                </button>
              </li>
              <li>
                <span className="text-xs text-[#A5A0B8]">Privacy Policy</span>
              </li>
              <li>
                <span className="text-xs text-[#A5A0B8]">Terms of Adventure</span>
              </li>
              <li>
                <span className="text-xs text-[#A5A0B8]">Educational Resources</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#C8B6FF]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6882]">
          <p>© {new Date().getFullYear()} SwiatRamble. All rights reserved. Crafted with 3D claymorphism.</p>
          <div className="flex items-center gap-1.5">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for curious minds worldwide.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
