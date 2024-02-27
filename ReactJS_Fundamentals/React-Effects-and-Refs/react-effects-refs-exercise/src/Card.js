import React, { useState } from "react";


const Card = ({ name, image }) => {
  // Initialize state for angle, xPos, and yPos with random values
  const [{ angle, xPos, yPos }] = useState({
    angle: Math.random() * 90 - 45, // Random angle between -45 and 45 degrees
    xPos: Math.random() * 40 - 20,  // Random X position between -20 and 20
    yPos: Math.random() * 40 - 20,  // Random Y position between -20 and 20
  });

  // Construct the transform property value with the random values
  const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;

  // Render the card with dynamic styling for position and rotation
  return (
    <img
      className="Card"
      alt={name}
      src={image}
      style={{ transform }}
    />
  );
};

export default Card;
