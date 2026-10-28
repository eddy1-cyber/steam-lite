import React from 'react';
import { useParams, Link } from 'react-router-dom';
import gamesData from '../data/games.json';
import { Star, ShoppingCart, Play, ArrowLeft } from 'lucide-react';

export default function GameDetail() {
  const { id } = useParams();
  const game = gamesData.find((g) => g.id === id);

  if (!game) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Juego no encontrado</h2>
        <Link to="/" className="text-cyan-400 hover:underline">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-white">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Volver al catálogo
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
        <div className="rounded-xl overflow-hidden border border-slate-700 h-80">
          <img src={game.cover} alt={game.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold px-3 py-1 rounded-full">
                {game.genre}
              </span>
              <div className="flex items-center gap-1 text-amber-400 font-semibold">
                <Star className="w-5 h-5 fill-current" /> {game.rating} / 5.0
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-black mb-4">{game.title}</h1>
            <p className="text-slate-300 leading-relaxed mb-6">{game.description}</p>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 block">Precio final</span>
              <span className="text-3xl font-black text-cyan-400">
                {game.price === 0 ? 'GRATIS' : `$${game.price}`}
              </span>
            </div>

            <div className="flex gap-3">
              {game.id === 'snake-classic' && (
                <Link
                  to={`/play/${game.id}`}
                  className="flex items-center gap-2 bg-emerald-500 text-black font-bold px-5 py-3 rounded-xl hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
                >
                  <Play className="w-5 h-5 fill-current" /> Jugar
                </Link>
              )}
              <button
                onClick={() => alert(`¡${game.title} agregado al carrito!`)}
                className="flex items-center gap-2 bg-cyan-500 text-black font-bold px-5 py-3 rounded-xl hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
              >
                <ShoppingCart className="w-5 h-5" /> Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}