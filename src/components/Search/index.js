import "./style.css";

const Search = ({ searchPokemon }) => (
  <input
    className="search-box"
    type="search"
    placeholder="Search Pokemon"
    onChange={searchPokemon}
  />
);

export default Search;
