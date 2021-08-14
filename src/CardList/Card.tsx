import React from 'react';
import '../style/Card.css';
interface characters {
  id: number;
  name: string;
  imgURL: string;
}

export const Card: React.FC<characters> = ({ id, name, imgURL, children }) => {
  return (
    <div className="card-container">
      <img alt={name} src={imgURL} width="300" height="500" />
      <h1>{name}</h1>
    </div>
  );
};
