import React from 'react';
import '../style/CardList.css';
import { Card } from './Card';
interface filteredCharacters {
  characters: { id: number; name: string; imgURL: string }[];
}

export const CardList: React.FC<filteredCharacters> = ({ characters }) => {
  return (
    <div className="card-list">
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          imgURL={character.imgURL}
        />
      ))}
    </div>
  );
};
