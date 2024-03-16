import React, { createContext, useState } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState([
    { name: 'Red', hex: '#FF0000' },
    { name: 'Green', hex: '#00FF00' },
    { name: 'Blue', hex: '#0000FF' },
  ]);

  const addColor = (newColor) => {
    setColors(currentColors => [newColor, ...currentColors]);
  };

  return (
    <ColorContext.Provider value={{ colors, addColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
