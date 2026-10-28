import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import GameDetail from '../pages/GameDetail';
import CartCheckout from '../pages/CartCheckout';
import Library from '../pages/Library';
import PlayGame from '../pages/PlayGame';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:id" element={<GameDetail />} />
      <Route path="/cart" element={<CartCheckout />} />
      <Route path="/library" element={<Library />} />
      <Route path="/play/:id" element={<PlayGame />} />
    </Routes>
  );
};