import React, { useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ColorContext from './ColorContext';

function ColorDetail() {
  const { hex } = useParams();
  const { colors } = useContext(ColorContext);
  const color = colors.find(c => c.hex === decodeURIComponent(hex));

  if (!color) return <Navigate replace to="/colors" />;

  return (
    <div style={{ backgroundColor: color.hex, color: '#ffffff', height: '100vh', padding: '1rem' }}>
      <h1>{color.name}</h1>
      <h2>{color.hex}</h2>
    </div>
  );
}

export default ColorDetail