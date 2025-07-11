import { useState, useMemo } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import { relics, eras, types, Relic } from '../data/relics';
import RelicCard from '../components/Relics/RelicCard';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';

const DivineRelics = () => {
  const [selectedEra, setSelectedEra] = useState('All Eras');
  const [selectedType, setSelectedType] = useState('All Types');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredRelics = useMemo(() => {
    return relics.filter(relic => {
      const eraMatch = selectedEra === 'All Eras' || relic.era === selectedEra;
      const typeMatch = selectedType === 'All Types' || relic.type === selectedType;
      return eraMatch && typeMatch;
    });
  }, [selectedEra, selectedType]);

  return (
    <div className="min-h-screen bg-black relative overflow-auto animated-scroll">
      {/* Background texture with runes */}
      <div 
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd700' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0L0 15v30l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <Header />

      {/* Ancient scroll header banner */}
      <div className="relative pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Ancient symbols background */}
          <div className="absolute inset-0 opacity-5 text-yellow-400 text-6xl overflow-hidden">
            <div className="absolute top-10 left-10">Ω</div>
            <div className="absolute top-20 right-20">☥</div>
            <div className="absolute bottom-10 left-20">卍</div>
            <div className="absolute bottom-20 right-10">🜔</div>
            <div className="absolute top-32 left-1/2">ॐ</div>
          </div>
          
          <h1 className="playfair text-6xl md:text-7xl font-bold text-yellow-400 gold-glow mb-4 fade-in-up">
            Relics of the Divine
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in-up">
            Ancient treasures from civilizations lost to time, each piece carrying the sacred power of the gods themselves.
          </p>
          
          {/* Decorative scroll design */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="w-32 h-px bg-gradient-to-r from-transparent to-yellow-400"></div>
            <div className="text-yellow-400 text-2xl">⚜</div>
            <div className="w-32 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
        </div>
      </div>

      {/* Filters and controls */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-lg p-6">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-yellow-400">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            
            {/* Era filter */}
            <select 
              value={selectedEra}
              onChange={(e) => setSelectedEra(e.target.value)}
              className="bg-black/80 border border-yellow-400/30 rounded-lg px-4 py-2 text-gray-300 focus:border-yellow-400 focus:outline-none"
            >
              {eras.map(era => (
                <option key={era} value={era}>{era}</option>
              ))}
            </select>

            {/* Type filter */}
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-black/80 border border-yellow-400/30 rounded-lg px-4 py-2 text-gray-300 focus:border-yellow-400 focus:outline-none"
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* View mode */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-black/50 text-gray-400 hover:text-yellow-400'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-black/50 text-gray-400 hover:text-yellow-400'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-gray-400">
          Showing {filteredRelics.length} divine relics
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredRelics.map((relic) => (
            <RelicCard 
              key={relic.id} 
              relic={relic} 
              viewMode={viewMode}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DivineRelics;