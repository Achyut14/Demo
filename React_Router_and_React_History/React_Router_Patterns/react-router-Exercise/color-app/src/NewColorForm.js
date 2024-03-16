import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import ColorContext from './ColorContext';

function NewColorForm() {
  const [name, setName] = useState('');
  const [hex, setHex] = useState('#ffffff');
  const { addColor } = useContext(ColorContext);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ name, hex });
    setSubmitted(true);
  };

  if (submitted) return <Navigate replace to="/colors" />;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Color Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="hex">Color Hex:</label>
        <input
          id="hex"
          type="color"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
        />
      </div>
      <button type="submit">Add Color</button>
    </form>
  );
}

export default NewColorForm;
