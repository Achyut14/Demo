import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Candy from './Candy';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/candy" element={<Candy />} />
      </Routes>
    </Router>
  );
}

export default App;
