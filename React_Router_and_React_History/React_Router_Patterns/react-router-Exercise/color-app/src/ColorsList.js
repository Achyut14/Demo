import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ColorContext from './ColorContext';

function ColorsList() {
  const { colors } = useContext(ColorContext);

  return (
    <div>
      <h1>Welcome to the color factory.</h1>
      <Link to="/colors/new">Add a color</Link>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>
            <Link to={`/colors/${encodeURIComponent(color.hex)}`}>
              {color.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorsList;
