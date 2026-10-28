import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SnakeGame } from '../minigames/SnakeGame';
import { ArrowLeft } from 'lucide-react';

export default function PlayGame() {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 text-white">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Volver a la tienda
      </Link>

      <div className="text-center mb-6">
        <h1 className="text-3xl font-black text-cyan-400 mb-2">Sala de Juego Interactiva</h1>
        <p className="text-slate-400">Estás ejecutando el ID de juego: <span className="font-mono text-cyan-300">{id}</span></p>
      </div>

      {/* Renderizado condicional del mini-juego */}
      {id === 'snake-classic' ? (
        <SnakeGame />
      ) : (
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center">
          <p className="text-xl text-slate-300 mb-4">Este mini-juego está en desarrollo o requiere integración interactiva.</p>
          <Link to="/" className="inline-block bg-cyan-500 text-black font-bold px-6 py-2 rounded-lg">
            Volver al catálogo
          </Link>
        </div>
      )}
    </div>
  );
}