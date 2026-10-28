import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Library, Gamepad2 } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logotipo */}
      <Link to="/" className="flex items-center gap-2 text-xl font-black text-cyan-400">
        <Gamepad2 className="w-8 h-8" />
        <span className="tracking-wider">SteamLite</span>
      </Link>

      {/* Enlaces de Navegación */}
      <div className="flex items-center gap-6 font-medium">
        <Link to="/" className="hover:text-cyan-400 transition-colors">
          Tienda
        </Link>
        <Link to="/library" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
          <Library className="w-5 h-5 text-slate-400" /> Biblioteca
        </Link>
        <Link 
          to="/cart" 
          className="flex items-center gap-2 bg-cyan-500 text-black px-4 py-2 rounded-lg font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
        >
          <ShoppingCart className="w-5 h-5" /> Carrito
        </Link>
      </div>
    </nav>
  );
};