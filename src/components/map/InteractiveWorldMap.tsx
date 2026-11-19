import React, { useState, useMemo, useEffect } from 'react';
import { allCountries } from '../../data/countries';
import type { WorldCountryShape } from '../../data/worldCountryShapes';
import type { Continent } from '../../types/country';
import { userService } from '../../services/userService';
import {
  Search,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Shuffle,
} from 'lucide-react';

interface InteractiveWorldMapProps {
  onSelectCountry: (slug: string) => void;
  selectedContinent?: Continent | 'All';
  mode?: 'explore' | 'passport';
  className?: string;
}

export const InteractiveWorldMap: React.FC<InteractiveWorldMapProps> = ({
  onSelectCountry,
  selectedContinent = 'All',
  mode = 'explore',
  className = '',
}) => {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [worldCountryShapes, setWorldCountryShapes] = useState<WorldCountryShape[] | null>(null);
  const [worldMapLoadError, setWorldMapLoadError] = useState(false);

  useEffect(() => {
    if (worldCountryShapes !== null || worldMapLoadError) return;

    let isMounted = true;
    import('../../data/worldCountryShapes')
      .then(({ worldCountryShapes: shapes }) => {
        if (isMounted) setWorldCountryShapes(shapes);
      })
      .catch((error: unknown) => {
        console.error('Unable to load country boundaries for the world map.', error);
        if (isMounted) setWorldMapLoadError(true);
      });

    return () => {
      isMounted = false;
    };
  }, [worldCountryShapes, worldMapLoadError]);

  const progress = userService.getProgress();
  const visibleCountries = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return allCountries.filter((country) => (
      (selectedContinent === 'All' || country.continent === selectedContinent) &&
      (!query || country.name.toLowerCase().includes(query) || country.continent.toLowerCase().includes(query))
    ));
  }, [searchQuery, selectedContinent]);

  // Global Map countries projection coordinates
  const mapWidth = 980;
  const mapHeight = 520;
  const projectCoord = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * mapWidth;
    const y = ((90 - lat) / 180) * mapHeight;
    return { x, y };
  };

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.8));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setSearchQuery('');
  };

  const handleRandomCountry = () => {
    const available = allCountries;
    const random = available[Math.floor(Math.random() * available.length)];
    if (random) onSelectCountry(random.slug);
  };

  // Mouse pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className={`clay-card relative overflow-hidden bg-gradient-to-b from-[#EBF5FF] via-[#F4F9FF] to-[#FFF9F0] border-4 border-white shadow-2xl ${className}`}>
      {/* ========================================================
          MAP HEADER TOOLBAR
      ======================================================== */}
      <div className="p-4 md:p-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#C8B6FF]/30 bg-white/80 backdrop-blur-md z-20 relative">
        {/* Search */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-[#8B6CE8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search countries..."
              className="clay-inset pl-9 pr-4 py-1.5 text-xs md:text-sm font-medium w-48 sm:w-60 focus:outline-none"
            />
          </div>
        </div>

        {/* Right: Actions & Zoom Controls */}
        <div className="flex items-center gap-2">
          {mode === 'explore' && (
            <button
              onClick={handleRandomCountry}
              className="clay-btn clay-btn-peach text-xs py-1.5 px-3"
              title="Pick a random country"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Random</span>
            </button>
          )}

          <div className="flex items-center gap-1 bg-[#F4EFE6] rounded-full p-1 border border-white">
            <button
              onClick={handleZoomIn}
              className="p-1.5 rounded-full hover:bg-white text-[#303044] transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-1.5 rounded-full hover:bg-white text-[#303044] transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 rounded-full hover:bg-white text-[#303044] transition-colors"
              title="Reset View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          MAP VIEWPORT
      ======================================================== */}
      <div
        className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] cursor-grab active:cursor-grabbing select-none overflow-hidden bg-[#2AAEF0]"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg
          viewBox={`0 0 ${mapWidth} ${mapHeight}`}
          className="w-full h-full transition-transform duration-75 animated-world-map"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: 'center center',
          }}
        >
          <defs>
            <pattern id="mapOceanGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#A9DEF9" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>
          </defs>

          {/* Ocean Texture */}
          <rect width={mapWidth} height={mapHeight} fill="#DDF2FD" />
          <rect className="map-ocean-grid" width={mapWidth} height={mapHeight} fill="url(#mapOceanGrid)" />
          <g className="map-sparkles" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.7">
            <path d="M80 130l8 8m-8 0l8-8M350 90l6 6m-6 0l6-6M670 180l8 8m-8 0l8-8M850 300l7 7m-7 0l7-7" />
          </g>

          {/* Natural Earth country boundaries */}
          <g fillRule="evenodd" stroke="#FFFFFF" strokeWidth="0.8" strokeLinejoin="round" vectorEffect="non-scaling-stroke">
            {worldCountryShapes?.map((country) => (
              <path
                key={country.name}
                className="map-country-shape"
                d={country.d}
                fill={country.fill}
              >
                <title>{country.name}</title>
              </path>
            ))}
          </g>

          {worldCountryShapes === null && (
            <text
              x={mapWidth / 2}
              y={mapHeight / 2}
              textAnchor="middle"
              fontSize="16"
              fontWeight="700"
              fill="#6B6882"
            >
              {worldMapLoadError ? 'Country borders could not be loaded.' : 'Loading country borders…'}
            </text>
          )}

          {/* Country markers */}
          {visibleCountries.map((country) => {
            const { x, y } = projectCoord(country.coordinates.lat, country.coordinates.lng);
            const isExplored = progress.exploredCountries.includes(country.slug);
            const isWishlist = progress.wishlistCountries.includes(country.slug);

            let pinColor = '#C8B6FF';
            if (isExplored) pinColor = '#B8F2D0';
            else if (isWishlist) pinColor = '#FFC6A8';

            return (
              <g
                key={country.id}
                className="map-country-marker cursor-pointer transition-transform duration-200"
                transform={`translate(${x}, ${y})`}
                onClick={() => onSelectCountry(country.slug)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelectCountry(country.slug);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Explore ${country.name}`}
              >
                <title>{country.name}</title>
                <circle className="map-country-pulse" r="14" fill={pinColor} fillOpacity="0.28" stroke={pinColor} strokeWidth="1" />
                <circle r="9" fill={pinColor} stroke="#8B6CE8" strokeWidth="2" />
                <text textAnchor="middle" dy="3.5" fontSize="8" className="select-none font-bold">
                  {country.flagEmoji}
                </text>
                <text className="map-country-label" y="18" textAnchor="middle" fontSize="8" fontFamily="Fredoka" fontWeight="600" fill="#303044">
                  {country.name}
                </text>
              </g>
            );
          })}
          {visibleCountries.length === 0 && (
            <text
              x={mapWidth / 2}
              y={mapHeight / 2 + 28}
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill="#6B6882"
            >
              No countries match your search.
            </text>
          )}
        </svg>

      </div>

      {/* ========================================================
          BOTTOM LEGEND & CONTINENT QUICK-PINS
      ======================================================== */}
      <div className="px-5 py-3.5 bg-white/80 border-t border-[#C8B6FF]/30 flex flex-wrap items-center justify-between text-xs font-semibold text-[#6B6882] gap-3">
        {/* Status Indicators */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[#B8F2D0] border border-[#28A56E] inline-block" />
            <span>Explored ({progress.exploredCountries.length})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[#FFC6A8] border border-[#E06D3B] inline-block" />
            <span>Wishlist ({progress.wishlistCountries.length})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-[#C8B6FF] border border-[#8B6CE8] inline-block" />
            <span>Not yet explored</span>
          </div>
        </div>

        {/* Quick Continent Shortcuts */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-[#8B6CE8] font-bold">Quick Jump:</span>
          {['India', 'China', 'Japan', 'Thailand', 'Vietnam', 'Indonesia'].map(cName => {
            const country = allCountries.find(c => c.name.toLowerCase() === cName.toLowerCase());
            if (!country) return null;
            return (
              <button
                key={cName}
                onClick={() => onSelectCountry(country.slug)}
                className="px-2 py-0.5 rounded-full bg-white hover:bg-[#EBE5FF] border border-[#C8B6FF] text-[10px] font-bold text-[#303044] transition-colors"
              >
                {country.flagEmoji} {cName}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
