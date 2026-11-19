import React, { useState, useEffect, useCallback } from 'react';
import { getRandomCountry } from '../../data/countries';
import { Country } from '../../types/country';
import { TaraMascot } from '../mascot/TaraMascot';
import { X, Compass, ArrowRight, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SpinTheGlobeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExplore: (slug: string) => void;
}

export const SpinTheGlobeModal: React.FC<SpinTheGlobeModalProps> = ({
  isOpen,
  onClose,
  onExplore,
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [currentFact, setCurrentFact] = useState<string>('');
  const [spinDeg, setSpinDeg] = useState(0);

  const handleSpin = useCallback(() => {
    setIsSpinning(true);
    setSpinDeg(prev => prev + 1080 + Math.floor(Math.random() * 360));

    setTimeout(() => {
      const chosen = getRandomCountry();
      setSelectedCountry(chosen);
      const fact = chosen.interestingFacts[Math.floor(Math.random() * chosen.interestingFacts.length)] || chosen.shortIntro;
      setCurrentFact(fact);
      setIsSpinning(false);

      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#C8B6FF', '#A9DEF9', '#FFC6A8', '#B8F2D0', '#FFE69A']
        });
      } catch {
        // Safe fallback
      }
    }, 1200);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const openTimeout = window.setTimeout(handleSpin, 0);
      return () => window.clearTimeout(openTimeout);
    }
    return undefined;
  }, [isOpen, handleSpin]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fadeIn">
      <div className="clay-card relative w-full max-w-lg p-6 md:p-8 bg-gradient-to-b from-[#FFF9F0] via-white to-[#F6F0FF] border-4 border-[#C8B6FF] shadow-2xl text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-[#FFE0EA] text-[#303044] transition-colors shadow-sm"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5FF] text-[#8B6CE8] text-xs font-bold mb-3 uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" />
          <span>Spin the Globe • Random Discovery</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-[#303044] mb-4">
          Where will Tara take you today?
        </h3>

        {/* 3D Animated Clay Globe */}
        <div className="relative my-4 flex items-center justify-center">
          <div
            className={`w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center shadow-2xl border-4 border-white transition-all duration-1000 ease-out ${
              isSpinning ? 'scale-110' : 'scale-100'
            }`}
            style={{
              background: 'radial-gradient(circle at 35% 35%, #A9DEF9 0%, #68BCE8 50%, #298EC9 100%)',
              boxShadow: '0 20px 40px -10px rgba(41, 142, 201, 0.4), inset 0 6px 12px rgba(255, 255, 255, 0.8), inset 0 -8px 16px rgba(0, 0, 0, 0.25)',
              transform: `rotate(${spinDeg}deg)`,
            }}
          >
            <div className="text-5xl md:text-6xl select-none filter drop-shadow-md">
              🌍
            </div>
          </div>
        </div>

        {/* Result Reveal Section */}
        {isSpinning ? (
          <div className="py-6">
            <p className="text-lg font-bold text-[#8B6CE8] animate-pulse">
              Spinning across oceans and continents... ✨
            </p>
          </div>
        ) : selectedCountry ? (
          <div className="animate-fadeIn">
            <div className="p-4 md:p-5 rounded-3xl bg-white border-2 border-[#C8B6FF]/50 shadow-md my-4 text-left">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">{selectedCountry.flagEmoji}</span>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#303044] font-heading">
                    {selectedCountry.name}
                  </h4>
                  <p className="text-xs text-[#8B6CE8] font-bold uppercase tracking-wider">
                    {selectedCountry.continent} • Capital: {selectedCountry.capital}
                  </p>
                </div>
              </div>

              {/* Tara Quote */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#F0EBF8]">
                <div className="shrink-0">
                  <TaraMascot pose="pointing" size="sm" animate={false} />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-[#303044] font-medium leading-relaxed italic">
                    "{currentFact}"
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handleSpin}
                className="clay-btn clay-btn-white w-full sm:w-auto py-2.5 px-5 text-sm"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Spin Again</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onExplore(selectedCountry.slug);
                }}
                className="clay-btn clay-btn-purple w-full sm:w-auto py-2.5 px-6 text-sm"
              >
                <span>Explore {selectedCountry.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
