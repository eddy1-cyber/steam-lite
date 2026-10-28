import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GameFilters } from '../components/games/GameFilters';
import gamesData from '../data/games.json';
import { Star, ShoppingCart, Play } from 'lucide-react';

export default function Home() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Todos');

  useEffect(() => {
    // Cargamos los juegos de la base de datos local que creaste antes
    setGames(gamesData);
  }, []);

  // Obtener géneros únicos para los botones de filtro
  const genres = [...new Set(gamesData.map((g) => g.genre))];

  // Filtrado dinámico por búsqueda y género
  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'Todos' || game.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Banner Destacado */}
      <div className="relative bg-gradient-to-r from-cyan-900 via-slate-900 to-slate-950 p-8 rounded-2xl border border-cyan-500/30 mb-10 overflow-hidden shadow-2xl">
        <div className="max-w-xl relative z-10">
          <span className="bg-cyan-500 text-black text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Destacado de la semana
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-4 mb-3">
            Explora, Juega y Colecciona
          </h1>
          <p className="text-slate-300 mb-6">
            Sumérgete en el catálogo de SteamLite. Disfruta de mini-juegos interactivos directamente en tu navegador web.
          </p>
          <Link
            to="/game/snake-classic"
            className="inline-flex items-center gap-2 bg-cyan-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
          >
            <Play className="w-5 h-5 fill-current" /> Jugar Snake Ahora
          </Link>
        </div>
      </div>

      {/* Componente de Filtros (del Integrante 1) */}
      <GameFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        genres={genres}
      />

      {/* Grilla de Juegos */}
      <h2 className="text-2xl font-bold text-white mb-6">Juegos Disponibles ({filteredGames.length})</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <div
            key={game.id}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col group shadow-lg"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={game.cover}
                alt={game.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-cyan-400 text-xs font-bold px-2.5 py-1 rounded-lg border border-slate-700">
                {game.genre}
              </span>
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {game.title}
                </h3>
                <div className="flex items-center gap-1 text-amber-400 text-sm font-semibold">
                  <Star className="w-4 h-4 fill-current" /> {game.rating}
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
                {game.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                <span className="text-xl font-black text-cyan-400">
                  {game.price === 0 ? 'GRATIS' : `$${game.price}`}
                </span>
                <Link
                  to={`/game/${game.id}`}
                  className="bg-slate-800 hover:bg-cyan-500 hover:text-black text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}