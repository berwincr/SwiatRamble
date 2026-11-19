import React, { useState } from 'react';
import { quizCategories, getRandomQuizSet } from '../data/quizzes';
import { QuizCategory, QuizDifficulty, QuizQuestion, QuizResult } from '../types/quiz';
import { TaraMascot } from '../components/mascot/TaraMascot';
import { userService } from '../services/userService';
import { 
  Sparkles, 
  Award, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Flame, 
  Trophy,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CultureQuizPageProps {
  onNavigate: (page: string, param?: string) => void;
}

export const CultureQuizPage: React.FC<CultureQuizPageProps> = ({ onNavigate }) => {
  const canEarnXP = userService.hasAccount();
  const [gameState, setGameState] = useState<'welcome' | 'playing' | 'summary'>('welcome');
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory>('General World Culture');
  const [selectedDifficulty, setSelectedDifficulty] = useState<QuizDifficulty>('easy');

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [earnedXP, setEarnedXP] = useState(0);

  const startQuiz = () => {
    const set = getRandomQuizSet(selectedCategory, selectedDifficulty, 5);
    setQuestions(set);
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore(0);
    setEarnedXP(0);
    setGameState('playing');
  };

  const handleSelectOption = (idx: number) => {
    if (hasAnswered) return;
    setSelectedOption(idx);
    setHasAnswered(true);

    const currentQ = questions[currentIndex];
    const isCorrect = idx === currentQ.correctIndex;

    if (isCorrect) {
      setScore(prev => prev + 1);
      if (canEarnXP) setEarnedXP(prev => prev + currentQ.xpReward);
      // Small celebratory confetti burst for correct answer
      try {
        confetti({
          particleCount: 25,
          spread: 40,
          origin: { y: 0.7 },
          colors: ['#B8F2D0', '#C8B6FF', '#FFE69A']
        });
      } catch {
        // Safe fallback
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else {
      // Quiz complete!
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const isPerfect = score + (selectedOption === questions[currentIndex].correctIndex ? 1 : 0) === questions.length;
    const finalScore = score + (selectedOption === questions[currentIndex].correctIndex ? 1 : 0);
    const completionBonus = canEarnXP ? 25 : 0;
    const finalXP = canEarnXP
      ? earnedXP + (selectedOption === questions[currentIndex].correctIndex ? questions[currentIndex].xpReward : 0) + completionBonus
      : 0;

    const result: QuizResult = {
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      category: selectedCategory,
      difficulty: selectedDifficulty,
      score: finalScore,
      totalQuestions: questions.length,
      earnedXP: finalXP,
      isPerfect,
    };

    userService.recordQuizAttempt(result);
    setGameState('summary');

    // Confetti celebration
    try {
      confetti({
        particleCount: isPerfect ? 120 : 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#C8B6FF', '#B8F2D0', '#FFC6A8', '#FFE69A', '#A9DEF9']
      });
    } catch {
      // Safe fallback
    }
  };

  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 text-left">
      {/* ========================================================
          1. WELCOME SCREEN
      ======================================================== */}
      {gameState === 'welcome' && (
        <div className="space-y-8">
          {/* Header Card */}
          <div className="clay-card p-6 sm:p-10 bg-gradient-to-br from-[#FFF9F0] via-white to-[#F2EDFF] border-4 border-white shadow-xl text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE5FF] text-[#8B6CE8] text-xs font-bold mb-4 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Knowledge Arena</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#303044] font-heading mb-3">
              The World Culture Quiz
            </h1>

            <p className="text-sm sm:text-base text-[#6B6882] max-w-lg mx-auto mb-6">
              {canEarnXP
                ? 'Test your knowledge of world history, languages, foods, monuments, and festivals. Earn XP, level up your World Passport, and unlock achievement badges!'
                : 'Test your knowledge of world history, languages, foods, monuments, and festivals. Create a local account to earn XP, level up, and unlock achievement badges.'}
            </p>

            <div className="flex justify-center mb-6">
              <TaraMascot
                pose="welcoming"
                size="lg"
                animate={true}
                speechBubble="Are you ready to test your cultural knowledge? Let's begin!"
              />
            </div>
          </div>

          {/* Configuration Form */}
          <div className="clay-card p-6 sm:p-8 bg-white border-2 border-white shadow-md space-y-6">
            {/* Step 1: Category */}
            <div>
              <label className="text-xs font-bold text-[#8B6CE8] uppercase tracking-wider block mb-3">
                1. Select Quiz Category:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {quizCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`p-3 rounded-2xl text-xs font-bold text-left transition-all border ${
                      selectedCategory === category
                        ? 'bg-[#8B6CE8] text-white border-[#8B6CE8] shadow-md scale-[1.02]'
                        : 'bg-[#F4EFE6] text-[#303044] border-transparent hover:bg-[#EBE5FF]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Difficulty */}
            <div>
              <label className="text-xs font-bold text-[#8B6CE8] uppercase tracking-wider block mb-3">
                2. Select Difficulty Level:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'easy', label: 'Easy', xp: '10 XP / question', color: 'border-[#B8F2D0] bg-[#DCF8E8]' },
                  { id: 'medium', label: 'Medium', xp: '20 XP / question', color: 'border-[#FFE69A] bg-[#FFF2C7]' },
                  { id: 'hard', label: 'Hard', xp: '30 XP / question', color: 'border-[#FFB7CE] bg-[#FFE0EA]' },
                ].map((diff) => (
                  <button
                    key={diff.id}
                    onClick={() => setSelectedDifficulty(diff.id as QuizDifficulty)}
                    className={`p-4 rounded-2xl text-center border-2 transition-all ${
                      selectedDifficulty === diff.id
                        ? `${diff.color} shadow-md scale-[1.03] text-[#303044]`
                        : 'bg-white border-[#E5DEFF] text-[#6B6882] hover:bg-[#FAF9FF]'
                    }`}
                  >
                    <span className="font-heading font-extrabold text-base block">{diff.label}</span>
                    <span className="text-[11px] font-bold text-[#8B6CE8] block mt-0.5">
                      {canEarnXP ? diff.xp : 'Account required for XP'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Start Button */}
            <div className="pt-4 border-t border-[#F0EBF8] flex justify-center">
              <button
                onClick={startQuiz}
                className="clay-btn clay-btn-purple text-base py-3 px-8 shadow-lg"
              >
                <Sparkles className="w-5 h-5" />
                <span>Start Quiz Now</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          2. QUESTION SCREEN
      ======================================================== */}
      {gameState === 'playing' && currentQ && (
        <div className="space-y-6">
          {/* Quiz Progress & Stats Bar */}
          <div className="clay-card p-4 bg-white border-2 border-white shadow-sm flex items-center justify-between text-xs font-bold">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-[#EBE5FF] text-[#8B6CE8]">
                {selectedCategory}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#F4EFE6] text-[#303044] capitalize">
                {selectedDifficulty}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[#6B6882]">
                Question <strong className="text-[#303044]">{currentIndex + 1}</strong> of {questions.length}
              </span>
              {canEarnXP ? (
                <span className="text-[#FF9B71] flex items-center gap-1 font-bold">
                  <Flame className="w-4 h-4 fill-[#FF9B71]" />
                  <span>+{earnedXP} XP</span>
                </span>
              ) : (
                <span className="text-[#6B6882]">Guest practice</span>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#F4EFE6] h-2.5 rounded-full overflow-hidden border border-white">
            <div
              className="bg-gradient-to-r from-[#8B6CE8] to-[#C8B6FF] h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Card */}
          <div className="clay-card p-6 sm:p-10 bg-white border-2 border-white shadow-xl space-y-6">
            {currentQ.countryName && (
              <span className="inline-block px-3 py-1 rounded-full bg-[#FFF9F0] border border-[#FFE69A] text-xs font-bold text-[#B87000]">
                📍 Related to {currentQ.countryName}
              </span>
            )}

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#303044] font-heading leading-snug">
              {currentQ.question}
            </h3>

            {/* Multiple Choice Options */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((option, idx) => {
                let optionStyle = 'bg-[#FFF9F0] border-[#E5DEFF] text-[#303044] hover:bg-[#EBE5FF]';

                if (hasAnswered) {
                  if (idx === currentQ.correctIndex) {
                    optionStyle = 'bg-[#DCF8E8] border-[#28A56E] text-[#1E8A54] shadow-md font-bold';
                  } else if (idx === selectedOption) {
                    optionStyle = 'bg-[#FFE0EA] border-red-500 text-red-600 shadow-sm';
                  } else {
                    optionStyle = 'bg-gray-50 border-gray-200 text-gray-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={hasAnswered}
                    className={`w-full p-4 rounded-2xl text-left border-2 transition-all flex items-center justify-between text-sm sm:text-base font-semibold ${optionStyle}`}
                  >
                    <span>{option}</span>
                    {hasAnswered && idx === currentQ.correctIndex && (
                      <CheckCircle2 className="w-5 h-5 text-[#28A56E] shrink-0" />
                    )}
                    {hasAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                      <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback & Explanation Box */}
            {hasAnswered && (
              <div className="p-5 rounded-2xl bg-[#F6F0FF] border-2 border-[#C8B6FF] animate-fadeIn space-y-2">
                <div className="flex items-center gap-2">
                  {selectedOption === currentQ.correctIndex ? (
                    <span className="text-sm font-extrabold text-[#1E8A54] flex items-center gap-1 font-heading">
                      <CheckCircle2 className="w-4 h-4" />
                      {canEarnXP ? `Correct! +${currentQ.xpReward} XP` : 'Correct!'}
                    </span>
                  ) : (
                    <span className="text-sm font-extrabold text-red-500 flex items-center gap-1 font-heading">
                      <XCircle className="w-4 h-4" /> Not quite!
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#303044] font-medium leading-relaxed">
                  {currentQ.explanation}
                </p>

                <div className="pt-3 flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="clay-btn clay-btn-purple text-xs sm:text-sm py-2 px-5 shadow-sm"
                  >
                    <span>{currentIndex + 1 < questions.length ? 'Next Question' : 'View Results'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================
          3. SUMMARY SCREEN
      ======================================================== */}
      {gameState === 'summary' && (
        <div className="clay-card p-6 sm:p-12 bg-white border-4 border-white shadow-2xl text-center space-y-6 animate-fadeIn">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE5FF] text-[#8B6CE8] text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-4 h-4 text-[#8B6CE8]" />
            <span>Quiz Complete!</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#303044] font-heading">
            {score === questions.length ? 'Perfect Score, Champion!' : 'Splendid Effort, Explorer!'}
          </h2>

          <div className="flex justify-center my-4">
            <TaraMascot
              pose={score === questions.length ? 'celebrating' : 'welcoming'}
              size="lg"
              animate={true}
              speechBubble={
                score === questions.length
                  ? 'Incredible! You got every question right!'
                  : `You scored ${score} out of ${questions.length}! Every quiz makes you a wiser global citizen!`
              }
            />
          </div>

          {/* Score & XP Result Pills */}
          <div className={`grid ${canEarnXP ? 'grid-cols-2' : 'grid-cols-1'} gap-4 max-w-sm mx-auto`}>
            <div className="clay-card p-4 bg-[#DCF8E8] border border-white">
              <span className="text-xs text-[#1E8A54] font-bold uppercase block">Final Score</span>
              <span className="text-3xl font-extrabold text-[#303044] font-heading">
                {score} / {questions.length}
              </span>
            </div>

            {canEarnXP ? (
              <div className="clay-card p-4 bg-[#EBE5FF] border border-white">
                <span className="text-xs text-[#8B6CE8] font-bold uppercase block">Total XP Earned</span>
                <span className="text-3xl font-extrabold text-[#8B6CE8] font-heading">
                  +{earnedXP + 25} XP
                </span>
              </div>
            ) : (
              <div className="clay-card p-4 bg-[#EBE5FF] border border-white">
                <p className="text-sm font-bold text-[#303044]">Guest practice mode</p>
                <p className="text-xs text-[#6B6882] mt-1">Create a local account to earn XP and level up.</p>
                <button
                  onClick={() => onNavigate('profile')}
                  className="clay-btn clay-btn-purple text-xs py-2 px-4 mt-3"
                >
                  Create Local Account
                </button>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => setGameState('welcome')}
              className="clay-btn clay-btn-white text-xs sm:text-sm py-2.5 px-5 shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Take Another Quiz</span>
            </button>

            <button
              onClick={() => onNavigate('passport')}
              className="clay-btn clay-btn-purple text-xs sm:text-sm py-2.5 px-6 shadow-sm"
            >
              <Award className="w-4 h-4" />
              <span>{canEarnXP ? 'View My Passport XP' : 'View My Passport'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
