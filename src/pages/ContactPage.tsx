import React, { useState } from 'react';
import { TaraMascot } from '../components/mascot/TaraMascot';
import { Mail, Send, CheckCircle2, MessageSquare, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#C8B6FF', '#B8F2D0', '#FFE69A']
      });
    } catch {
      // Safe fallback
    }
  };

  const faqs = [
    {
      q: 'How many countries are available on SwiatRamble?',
      a: 'SwiatRamble launches with 30 comprehensive countries across all six inhabited continents (Asia, Europe, Africa, North America, South America, Oceania). More countries are regularly added!'
    },
    {
      q: 'Do I need an account to explore or take quizzes?',
      a: 'No! SwiatRamble is 100% free and open for everyone to explore countries, read stories, and take quizzes as guests. Creating an account lets you save your passport stamps, XP, and favorites across sessions.'
    },
    {
      q: 'Can teachers use SwiatRamble in classrooms?',
      a: 'Absolutely! SwiatRamble is thoughtfully crafted for schools, geography classes, and homeschool learning. All country dossiers follow verified cultural sources without promotional clutter.'
    },
    {
      q: 'How do I unlock achievement badges in My World Passport?',
      a: 'Badges unlock automatically when you explore countries, read stories, score high on quizzes, or reach XP milestones!'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-12 text-left">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFE2D4] text-[#E06D3B] text-xs font-bold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#303044] font-heading">
          Contact SwiatRamble
        </h1>
        <p className="text-sm sm:text-base text-[#6B6882] max-w-lg mx-auto">
          Have a cultural story to suggest, a school inquiry, or feedback for Tara? We'd love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Form */}
        <div className="md:col-span-7 clay-card p-6 sm:p-8 bg-white border-2 border-white shadow-xl">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#DCF8E8] text-[#1E8A54] mx-auto flex items-center justify-center text-3xl shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#303044] font-heading">
                Message Sent Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6882] max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.name}! Tara and the SwiatRamble team have received your note and will reply to <span className="font-bold text-[#303044]">{formData.email}</span> shortly.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'general', message: '' });
                }}
                className="clay-btn clay-btn-purple text-xs py-2 px-5 mt-4"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#8B6CE8] uppercase tracking-wider block mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Traveler"
                  className="clay-inset w-full px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#8B6CE8] uppercase tracking-wider block mb-1.5">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  className="clay-inset w-full px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#8B6CE8] uppercase tracking-wider block mb-1.5">
                  Subject Category
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#F4EFE6] border border-white rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#303044] focus:outline-none"
                >
                  <option value="general">General Discovery Inquiry</option>
                  <option value="suggestion">Country or Cultural Story Suggestion</option>
                  <option value="education">School / Educational Partnership</option>
                  <option value="feedback">Website Feedback / Bug Report</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#8B6CE8] uppercase tracking-wider block mb-1.5">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what's on your mind..."
                  className="w-full rounded-2xl bg-[#F4EFE6] border border-white px-4 py-3 text-xs sm:text-sm font-medium text-[#303044] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#8B6CE8]/30 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="clay-btn clay-btn-purple w-full py-3 text-sm shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to SwiatRamble</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Mascot Greeting & Quick Info */}
        <div className="md:col-span-5 space-y-6">
          <div className="clay-card p-6 bg-gradient-to-br from-[#FFF9F0] to-[#EBE5FF] border-2 border-[#C8B6FF] text-center">
            <div className="flex justify-center mb-3">
              <TaraMascot
                pose="thinking"
                size="md"
                animate={true}
                speechBubble="We read every single message and love learning about new cultural traditions!"
              />
            </div>
            <h4 className="text-base font-bold text-[#303044] font-heading mt-2">
              Cultural Suggestions Welcome!
            </h4>
            <p className="text-xs text-[#6B6882] leading-relaxed mt-1">
              Know an ancient recipe, festival, or craft in your home country that we should feature? Send us a note!
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#EBE5FF] text-xs text-[#6B6882] space-y-2">
            <span className="font-bold text-[#303044] block">📍 SwiatRamble HQ</span>
            <p>A global community of curious cultural researchers and educators.</p>
            <p>Email: <strong className="text-[#8B6CE8]">hello@swiatramble.com</strong></p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="clay-card p-6 sm:p-8 bg-white border-2 border-white shadow-md space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-[#303044] font-heading flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-[#8B6CE8]" />
          <span>Frequently Asked Questions</span>
        </h3>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-[#F0EBF8] rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#303044] hover:bg-[#F9F6FF] flex items-center justify-between gap-3"
              >
                <span>{faq.q}</span>
                {activeFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-[#8B6CE8] shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#6B6882] shrink-0" />
                )}
              </button>
              {activeFaq === idx && (
                <div className="p-4 pt-0 text-xs sm:text-sm text-[#6B6882] leading-relaxed bg-[#F9F6FF]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
