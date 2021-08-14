import '../style/Search.css';

interface SearchInterface {
  onChange: React.ChangeEventHandler;
}

const Search: React.FC<SearchInterface> = ({ onChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="search"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
