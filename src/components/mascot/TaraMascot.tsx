import React from 'react';

const taraImageUrl = `${import.meta.env.BASE_URL}assets/tara/tara_avatar.png`;

export type TaraPose = 
  | 'welcoming' 
  | 'waving' 
  | 'reading' 
  | 'pointing' 
  | 'celebrating' 
  | 'thinking' 
  | 'hero';

export type TaraSize = 'sm' | 'md' | 'lg' | 'xl' | 'hero';

interface TaraMascotProps {
  pose?: TaraPose;
  size?: TaraSize;
  speechBubble?: string;
  speechPosition?: 'top' | 'right' | 'left' | 'bottom';
  className?: string;
  animate?: boolean;
  variant?: '3d' | 'svg';
  title?: string;
}

export const TaraMascot: React.FC<TaraMascotProps> = ({
  pose = 'pointing',
  size = 'md',
  speechBubble,
  speechPosition = 'top',
  className = '',
  animate = true,
  variant = '3d',
  title,
}) => {
  // Size dimensions mapping
  const sizeMap: Record<TaraSize, { 
    containerClass: string; 
    imgClass: string; 
    svgWidth: number; 
    svgHeight: number;
    avatarSize: string;
  }> = {
    sm: { 
      containerClass: 'w-14 h-14', 
      imgClass: 'w-14 h-14 object-cover object-top', 
      svgWidth: 56, 
      svgHeight: 64,
      avatarSize: 'w-14 h-14'
    },
    md: { 
      containerClass: 'w-24 h-24 sm:w-28 sm:h-28', 
      imgClass: 'w-24 h-24 sm:w-28 sm:h-28 object-cover object-top', 
      svgWidth: 100, 
      svgHeight: 120,
      avatarSize: 'w-24 h-24 sm:w-28 sm:h-28'
    },
    lg: { 
      containerClass: 'w-36 h-36 sm:w-44 sm:h-44', 
      imgClass: 'w-36 h-36 sm:w-44 sm:h-44 object-cover object-top', 
      svgWidth: 150, 
      svgHeight: 180,
      avatarSize: 'w-36 h-36 sm:w-44 sm:h-44'
    },
    xl: { 
      containerClass: 'w-52 sm:w-60', 
      imgClass: 'w-full h-auto object-contain', 
      svgWidth: 200, 
      svgHeight: 240,
      avatarSize: 'w-52 sm:w-60 h-auto'
    },
    hero: { 
      containerClass: 'w-64 sm:w-80 md:w-96', 
      imgClass: 'w-full h-auto object-contain', 
      svgWidth: 320, 
      svgHeight: 380,
      avatarSize: 'w-72 sm:w-80 md:w-96 h-auto'
    },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Speech Bubble (Top/Left/Right/Bottom) */}
      {speechBubble && (
        <div 
          className={`tara-bubble px-4 py-3 text-sm md:text-base font-bold text-[#303044] mb-3 max-w-xs md:max-w-sm text-center z-20 transition-all duration-300 shadow-xl ${
            speechPosition === 'left' ? '-translate-x-4' : speechPosition === 'right' ? 'translate-x-4' : ''
          }`}
        >
          <div className="flex items-center gap-1.5 justify-center mb-1 text-xs text-[#8B6CE8] font-bold uppercase tracking-wider">
            <span>✨ {title || 'Tara says'}</span>
          </div>
          <p className="leading-snug">"{speechBubble}"</p>
        </div>
      )}

      {/* 3D Character Display (Exact match to uploaded Tara image) */}
      {variant === '3d' ? (
        <div 
          className={`relative group ${animate ? 'animate-soft-float' : ''}`}
        >
          {size === 'hero' || size === 'xl' ? (
            <div className={`relative ${currentSize.containerClass}`}>
              <img
                src={taraImageUrl}
                alt="Tara - Official SwiatRamble Storyteller"
                className={`${currentSize.imgClass} drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.02]`}
              />
            </div>
          ) : (
            <div className={`relative ${currentSize.avatarSize}`}>
              <img
                src={taraImageUrl}
                alt="Tara Avatar"
                className="w-full h-full object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
        </div>
      ) : (
        /* Pure SVG Vector Fallback matching the new light-blue dress & wavy chestnut hair */
        <div className={`relative ${animate ? 'animate-soft-float' : ''}`}>
          <svg
            viewBox="0 0 200 240"
            className={currentSize.avatarSize}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Soft Skin Gradient */}
              <radialGradient id="taraSkin" cx="40%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FFF4EC" />
                <stop offset="60%" stopColor="#FFE0CE" />
                <stop offset="100%" stopColor="#F5BEA0" />
              </radialGradient>

              {/* Chestnut Hair Gradient matching the photo */}
              <linearGradient id="taraChestnutHair" x1="20%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor="#8C5338" />
                <stop offset="40%" stopColor="#6A3B24" />
                <stop offset="100%" stopColor="#452312" />
              </linearGradient>

              {/* Sky Blue Dress Gradient matching the photo */}
              <linearGradient id="taraSkyBlueDress" x1="10%" y1="0%" x2="90%" y2="100%">
                <stop offset="0%" stopColor="#D4EFFF" />
                <stop offset="40%" stopColor="#A9DEF9" />
                <stop offset="85%" stopColor="#75BEEC" />
                <stop offset="100%" stopColor="#4CA4E0" />
              </linearGradient>

              {/* Ornate Gold Filigree for Book */}
              <linearGradient id="taraGoldFiligree" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE69A" />
                <stop offset="100%" stopColor="#D4A017" />
              </linearGradient>
            </defs>

            {/* Flowing Back Wavy Hair */}
            <path
              d="M48 80 C30 110, 25 155, 42 190 C50 205, 66 210, 78 195 C68 165, 62 130, 68 100 Z"
              fill="url(#taraChestnutHair)"
            />
            <path
              d="M152 80 C170 110, 175 155, 158 190 C150 205, 134 210, 122 195 C132 165, 138 130, 132 100 Z"
              fill="url(#taraChestnutHair)"
            />

            {/* Sky Blue Dress Body */}
            <path
              d="M68 135 C68 128, 76 122, 86 122 L114 122 C124 122, 132 128, 132 135 L144 196 C144 200, 138 204, 130 204 L70 204 C62 204, 56 200, 56 196 Z"
              fill="url(#taraSkyBlueDress)"
            />

            {/* Puffed Sleeves */}
            <circle cx="68" cy="132" r="14" fill="url(#taraSkyBlueDress)" />
            <circle cx="132" cy="132" r="14" fill="url(#taraSkyBlueDress)" />

            {/* Head & Neck */}
            <rect x="92" y="105" width="16" height="20" rx="8" fill="url(#taraSkin)" />
            <ellipse cx="100" cy="78" rx="34" ry="36" fill="url(#taraSkin)" />

            {/* Rosy Cheeks */}
            <circle cx="82" cy="88" r="7" fill="#FF8FA6" opacity="0.6" />
            <circle cx="118" cy="88" r="7" fill="#FF8FA6" opacity="0.6" />

            {/* Joyful Eyes */}
            <ellipse cx="85" cy="74" rx="5.5" ry="7" fill="#4A2618" />
            <circle cx="87" cy="72" r="2" fill="#FFFFFF" />
            <ellipse cx="115" cy="74" rx="5.5" ry="7" fill="#4A2618" />
            <circle cx="117" cy="72" r="2" fill="#FFFFFF" />

            {/* Joyful Open Mouth with Smile */}
            <path d="M90 92 Q100 106 110 92 Z" fill="#D3455B" />
            <path d="M92 92 Q100 96 108 92 Z" fill="#FFFFFF" />

            {/* Front Wavy Chestnut Hair with Side Part */}
            <path
              d="M66 68 C68 40, 94 30, 114 32 C132 34, 142 50, 142 68 C136 54, 120 48, 102 50 C82 52, 70 60, 66 68 Z"
              fill="url(#taraChestnutHair)"
            />
            <path
              d="M64 68 C58 84, 58 105, 68 120 C72 108, 72 90, 72 75 Z"
              fill="url(#taraChestnutHair)"
            />
            <path
              d="M136 68 C144 84, 146 105, 138 122 C134 108, 132 90, 130 75 Z"
              fill="url(#taraChestnutHair)"
            />

            {/* Open Storybook in Left Hand */}
            <g transform="translate(48, 140)">
              {/* Book Spine & Cover */}
              <rect x="0" y="0" width="38" height="26" rx="3" fill="#2C3549" />
              {/* White Pages */}
              <rect x="2" y="2" width="16" height="22" rx="1.5" fill="#FFFDF8" />
              <rect x="20" y="2" width="16" height="22" rx="1.5" fill="#FFFDF8" />
              {/* Gold Filigree on Cover */}
              <line x1="4" y1="2" x2="34" y2="2" stroke="url(#taraGoldFiligree)" strokeWidth="1" />
            </g>

            {/* Right Arm Pointing Enthusiastically Upward */}
            <g transform="translate(136, 115) rotate(-35)">
              <rect x="0" y="0" width="12" height="38" rx="6" fill="url(#taraSkin)" />
              {/* Pointing Index Finger */}
              <path d="M4 -6 L8 -6 L8 4 L4 4 Z" fill="url(#taraSkin)" />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};
