import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { CountryDetailPage } from './pages/CountryDetailPage';
import { DiscoverPage } from './pages/DiscoverPage';
import { StoryDetailPage } from './pages/StoryDetailPage';
import { CultureQuizPage } from './pages/CultureQuizPage';
import { PassportPage } from './pages/PassportPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProfilePage } from './pages/ProfilePage';
import { SearchModal } from './components/search/SearchModal';
import { SpinTheGlobeModal } from './components/globe/SpinTheGlobeModal';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentParam, setCurrentParam] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSpinOpen, setIsSpinOpen] = useState(false);

  // Sync with browser hash / history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (!hash) {
        setCurrentPage('home');
        setCurrentParam(undefined);
        return;
      }

      const parts = hash.split('/');
      const page = parts[0] || 'home';
      const param = parts[1];

      setCurrentPage(page);
      setCurrentParam(param);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string, param?: string) => {
    setCurrentPage(page);
    setCurrentParam(param);
    const newHash = param ? `#/${page}/${param}` : `#/${page}`;
    window.location.hash = newHash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FFF9F0] text-[#303044] font-['Nunito',sans-serif] selection:bg-[#C8B6FF] selection:text-[#303044]">
      {/* Sticky Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSpin={() => setIsSpinOpen(true)}
      />

      {/* Main Dynamic Viewport */}
      <main className="flex-1 w-full pb-12">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenSpin={() => setIsSpinOpen(true)}
          />
        )}

        {currentPage === 'explore' && (
          <ExplorePage
            onNavigate={navigateTo}
            initialContinent={currentParam || 'All'}
            onOpenSpin={() => setIsSpinOpen(true)}
          />
        )}

        {currentPage === 'country' && currentParam && (
          <CountryDetailPage
            slug={currentParam}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'discover' && (
          <DiscoverPage
            onNavigate={navigateTo}
            onSelectStory={(slug) => navigateTo('story', slug)}
          />
        )}

        {currentPage === 'story' && currentParam && (
          <StoryDetailPage
            slug={currentParam}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'quiz' && (
          <CultureQuizPage
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'passport' && (
          <PassportPage
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {currentPage === 'profile' && (
          <ProfilePage />
        )}
      </main>

      {/* Global Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateCountry={(slug) => navigateTo('country', slug)}
        onNavigateStory={(slug) => navigateTo('story', slug)}
      />

      <SpinTheGlobeModal
        isOpen={isSpinOpen}
        onClose={() => setIsSpinOpen(false)}
        onExplore={(slug) => navigateTo('country', slug)}
      />

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
