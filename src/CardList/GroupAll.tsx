import { useState } from 'react';
import characters from './AllCharacters';
import Search from './Search';
import { CardList } from './CardList';
import '../style/GroupAll.css';
const GroupAll = () => {
  const [searchField, setsearchField] = useState<string>('');

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchField)
  );

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setsearchField(e.target.value);
  };
  return (
    <div className="GroupAll">
      <div className="title">
        <h1 id="titleH1">One Piece</h1>
        <Search onChange={onChange} />
      </div>
      <br />
      <CardList characters={filteredCharacters} />
    </div>
  );
};

export default GroupAll;
