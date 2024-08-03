// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Player from './pages/player/Player';
import Brawlers from './pages/brawlers/Brawlers';
import BrawlerInfo from './pages/brawlerInfo/BrawlerInfo';
import Events from './pages/events/Events';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Player />} />
          <Route path="/brawlers" element={<Brawlers />} />
          <Route path="/brawlers/:id" element={<BrawlerInfo />} />
          <Route path="/events" element={<Events />} />
        </Routes>
    </Router>
  );
}

export default App;
