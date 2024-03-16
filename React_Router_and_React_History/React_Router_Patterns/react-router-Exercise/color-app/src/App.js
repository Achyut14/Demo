import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ColorProvider } from './ColorContext';
import ColorsList from './ColorsList';
import NewColorForm from './NewColorForm';
import ColorDetail from './ColorDetail';

function App() {
  return (
    <ColorProvider>
      <Router>
        <Routes>
          <Route path="/colors" element={<ColorsList />} />
          <Route path="/colors/new" element={<NewColorForm />} />
          <Route path="/colors/:hex" element={<ColorDetail />} />
          <Route path="*" element={<Navigate replace to="/colors" />} />
        </Routes>
      </Router>
    </ColorProvider>
  );
}

export default App;
