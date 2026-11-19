import React, { useState } from 'react';
import { TaraMascot } from './TaraMascot';
import { X, Sparkles, ChevronRight, BookOpen } from 'lucide-react';

interface TaraDeepDiveModalProps {
  countryName: string;
  facts: string[];
  isOpen: boolean;
  onClose: () => void;
}

export const TaraDeepDiveModal: React.FC<TaraDeepDiveModalProps> = ({
  countryName,
  facts,
  isOpen,
  onClose,
}) => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentFactIndex((prev) => (prev + 1) % facts.length);
  };

  const handlePrev = () => {
    setCurrentFactIndex((prev) => (prev - 1 + facts.length) % facts.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="clay-card relative w-full max-w-lg p-6 md:p-8 bg-white border-4 border-[#C8B6FF] shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#FFF9F0] hover:bg-[#FFE0EA] text-[#303044] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-xl bg-[#EBE5FF] text-[#8B6CE8]">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#303044]">
              Tara's Storybook Secrets
            </h3>
            <p className="text-xs text-[#8B6CE8] font-bold uppercase tracking-wider">
              {countryName} Exclusive Discovery
            </p>
          </div>
        </div>

        {/* Mascot & Content */}
        <div className="flex flex-col sm:flex-row items-center gap-6 my-4 bg-[#FFF9F0] p-5 rounded-3xl border border-[#FFE69A]/60">
          <div className="shrink-0">
            <TaraMascot pose="reading" size="md" animate={true} />
          </div>

          <div className="flex-1">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFE69A] text-[#B87000] text-xs font-bold mb-2">
              <Sparkles className="w-3 h-3" />
              <span>Fact {currentFactIndex + 1} of {facts.length}</span>
            </div>
            <p className="text-sm md:text-base text-[#303044] font-medium leading-relaxed">
              "{facts[currentFactIndex] || 'Every country has magical traditions waiting to be explored!'}"
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-1.5">
            {facts.map((_, idx) => (
              <span
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentFactIndex ? 'w-6 bg-[#8B6CE8]' : 'bg-[#E5DEFF]'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={facts.length <= 1}
              className="clay-btn clay-btn-white py-1.5 px-3 text-xs"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="clay-btn clay-btn-purple py-1.5 px-4 text-xs"
            >
              <span>Next Fact</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
