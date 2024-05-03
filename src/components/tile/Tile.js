import React from "react";

export const Tile = ( {name, description} ) => {
  if (!description || typeof description !== "object") {
    return null;
  }
  
  return (
    <div className="tile-title">
      <h3>{name}</h3>
      {Object.values(description).map((item, index) => (
        <p className="tile" key={index}>{item}</p>
      ))}
    </div>
  );
};
