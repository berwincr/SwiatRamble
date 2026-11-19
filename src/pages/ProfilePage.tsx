import React, { useState, useEffect, useRef } from 'react';
import { userService } from '../services/userService';
import { UserProfile, UserProgress } from '../types/user';
import { TaraMascot } from '../components/mascot/TaraMascot';
import { User, Check, RotateCcw, Upload } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>(userService.getProfile());
  const [progress, setProgress] = useState<UserProgress>(userService.getProgress());

  const [nameInput, setNameInput] = useState(profile.name);
  const [emailInput, setEmailInput] = useState(profile.email);
  const [isSavedNotice, setIsSavedNotice] = useState(false);
  const [avatarError, setAvatarError] = useState('');
  const avatarInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const unsub = userService.subscribe(() => {
      setProfile(userService.getProfile());
      setProgress(userService.getProgress());
    });
    return unsub;
  }, []);

  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80',
  ];

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (profile.isGuest) {
      userService.login(nameInput, emailInput);
    } else {
      userService.saveProfile({
        ...profile,
        name: nameInput.trim() || 'Curious Explorer',
        email: emailInput.trim() || 'explorer@swiatramble.com',
      });
    }
    setIsSavedNotice(true);
    setTimeout(() => setIsSavedNotice(false), 2500);

    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#C8B6FF', '#B8F2D0', '#FFE69A']
      });
    } catch {
      // Safe fallback
    }
  };

  const handleSelectAvatar = (url: string) => {
    userService.updateAvatar(url);
  };

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setAvatarError('Please choose an image file.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setAvatarError('The image must be smaller than 5 MB.');
      return;
    }

    setAvatarError('');
    const reader = new FileReader();
    reader.onerror = () => setAvatarError('The image could not be read.');
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => setAvatarError('The selected image format is not supported.');
      image.onload = () => {
        const size = 512;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext('2d');
        if (!context) {
          setAvatarError('Your browser could not process this image.');
          return;
        }

        const sourceSize = Math.min(image.naturalWidth, image.naturalHeight);
        const sourceX = (image.naturalWidth - sourceSize) / 2;
        const sourceY = (image.naturalHeight - sourceSize) / 2;
        context.drawImage(image, sourceX, sourceY, sourceSize, sourceSize, 0, 0, size, size);
        userService.updateAvatar(canvas.toDataURL('image/jpeg', 0.88));
        setIsSavedNotice(true);
        window.setTimeout(() => setIsSavedNotice(false), 2500);
      };
      image.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleResetData = () => {
    if (window.confirm('Are you sure you want to reset your passport exploration progress? This will reset your visited countries, XP, and badges.')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  const levelInfo = userService.getLevelInfo(progress.totalXP);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10 text-left">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE5FF] text-[#8B6CE8] text-xs font-bold uppercase tracking-wider">
          <User className="w-3.5 h-3.5" />
          <span>Explorer Identity</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#303044] font-heading">
          My Profile & Settings
        </h1>
        <p className="text-sm sm:text-base text-[#6B6882] max-w-lg mx-auto">
          {profile.isGuest
            ? 'Create a local account to earn XP, level up, and unlock achievement rewards.'
            : 'Manage your personal explorer profile, choose your avatar, and track your membership status.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Profile Card Form */}
        <div className="md:col-span-7 clay-card p-6 sm:p-8 bg-white border-2 border-white shadow-xl space-y-6">
          <h3 className="text-xl font-bold text-[#303044] font-heading">
            Personal Information
          </h3>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-[#8B6CE8] uppercase tracking-wider block mb-1.5">
                Explorer Name
              </label>
              <input
                type="text"
                required
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className="clay-inset w-full px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#8B6CE8] uppercase tracking-wider block mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="clay-inset w-full px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none"
              />
            </div>

            {/* Avatar Selector */}
            <div className="pt-2">
              <label className="text-xs font-bold text-[#8B6CE8] uppercase tracking-wider block mb-2">
                Choose Profile Avatar:
              </label>
              <div className="flex flex-wrap gap-3">
                {avatars.map((url, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelectAvatar(url)}
                    className={`w-12 h-12 rounded-2xl overflow-hidden border-2 transition-all p-0.5 ${
                      profile.avatar === url
                        ? 'border-[#8B6CE8] ring-2 ring-[#8B6CE8]/30 scale-110 shadow-md'
                        : 'border-transparent hover:scale-105'
                    }`}
                  >
                    <img src={url} alt={`Avatar ${i}`} className="w-full h-full object-cover rounded-xl" />
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => avatarInputRef.current?.click()}
                  className="w-12 h-12 rounded-2xl border-2 border-dashed border-[#C8B6FF] bg-[#F7F3FF] text-[#8B6CE8] flex items-center justify-center transition-all hover:scale-105 hover:border-[#8B6CE8]"
                  aria-label="Upload your own avatar"
                  title="Upload your own avatar"
                >
                  <Upload className="w-5 h-5" />
                </button>
                <input
                  ref={avatarInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
              </div>
              {avatarError && (
                <p className="mt-2 text-xs font-semibold text-red-600" role="alert">
                  {avatarError}
                </p>
              )}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="submit"
                className="clay-btn clay-btn-purple text-xs sm:text-sm py-2.5 px-6 shadow-md"
              >
                <span>{profile.isGuest ? 'Create Local Account' : 'Save Profile Updates'}</span>
              </button>

              {isSavedNotice && (
                <span className="text-xs font-bold text-[#1E8A54] flex items-center gap-1 animate-fadeIn">
                  <Check className="w-4 h-4" /> Saved!
                </span>
              )}
            </div>
          </form>

          {/* Danger Zone: Reset Progress */}
          <div className="pt-6 border-t border-[#F0EBF8]">
            <span className="text-xs font-bold text-red-500 uppercase tracking-wider block mb-1">
              Reset Progress Data
            </span>
            <p className="text-xs text-[#6B6882] mb-3">
              Clear your locally stored visited countries, favorites, and quiz XP.
            </p>
            <button
              onClick={handleResetData}
              className="clay-btn clay-btn-white text-xs py-2 px-4 text-red-600 hover:bg-red-50 border-red-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Passport Data</span>
            </button>
          </div>
        </div>

        {/* Member Status Card */}
        <div className="md:col-span-5 space-y-6">
          <div className="clay-card p-6 bg-gradient-to-br from-[#FFF9F0] to-[#EBE5FF] border-2 border-[#C8B6FF] text-center space-y-3">
            <div className="relative w-20 h-20 mx-auto">
              <div className="w-20 h-20 rounded-3xl overflow-hidden border-4 border-white shadow-md">
                <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
              </div>
              <button
                type="button"
                onClick={() => avatarInputRef.current?.click()}
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#8B6CE8] text-white border-2 border-white shadow-md flex items-center justify-center hover:bg-[#7558CF] transition-colors"
                aria-label="Upload avatar"
                title="Upload avatar"
              >
                <Upload className="w-3.5 h-3.5" />
              </button>
            </div>

            <h4 className="text-lg font-bold text-[#303044] font-heading">
              {profile.name}
            </h4>

            <span className="inline-block px-3 py-1 rounded-full bg-[#DCF8E8] text-[#1E8A54] text-xs font-bold">
              {profile.isGuest ? 'Guest Explorer' : levelInfo.title}
            </span>

            <div className="pt-2 text-xs text-[#6B6882] space-y-1 border-t border-[#C8B6FF]/40">
              <p>Account Type: <strong className="text-[#303044]">{profile.isGuest ? 'Guest Explorer' : 'Member'}</strong></p>
              <p>Member Since: <strong className="text-[#303044]">{profile.joinedDate}</strong></p>
              <p>
                {profile.isGuest
                  ? 'Create an account to earn XP and levels.'
                  : <>Total XP: <strong className="text-[#8B6CE8]">{progress.totalXP} XP</strong></>}
              </p>
            </div>
          </div>

          <div className="clay-card p-6 bg-white border border-[#E5DEFF] flex items-center gap-4">
            <div className="shrink-0">
              <TaraMascot pose="welcoming" size="sm" animate={false} />
            </div>
            <p className="text-xs text-[#303044] font-medium leading-relaxed">
              "Your passport data is securely stored on your device. Every quiz and country you explore adds to your global knowledge score!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
