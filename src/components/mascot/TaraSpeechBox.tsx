import React from 'react';
import { TaraMascot, TaraPose } from './TaraMascot';

interface TaraSpeechProps {
  message: string;
  pose?: TaraPose;
  title?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const TaraSpeechBox: React.FC<TaraSpeechProps> = ({
  message,
  pose = 'welcoming',
  title = 'Tara says:',
  actionText,
  onAction,
  className = '',
}) => {
  return (
    <div className={`clay-card p-5 md:p-6 flex flex-col sm:flex-row items-center gap-5 bg-gradient-to-br from-[#FFF9F0] via-white to-[#F6F0FF] border-2 border-[#C8B6FF]/40 ${className}`}>
      <div className="shrink-0 -mt-2">
        <TaraMascot pose={pose} size="md" animate={true} />
      </div>

      <div className="flex-1 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE5FF] text-[#8B6CE8] text-xs font-bold tracking-wide mb-2 uppercase">
          <span>✨ {title}</span>
        </div>
        <p className="text-base md:text-lg font-medium text-[#303044] leading-relaxed">
          "{message}"
        </p>

        {actionText && onAction && (
          <button
            onClick={onAction}
            className="mt-3.5 clay-btn clay-btn-purple text-xs md:text-sm py-2 px-4 shadow-sm"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};
