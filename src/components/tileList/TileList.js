import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ data }) => {
  return (
    <div>
      {Object.values(data).map(({ name, ...rest }, index) => {
        return <Tile key={index} name={name} {...rest} />;
      })}
    </div>
  );
};
