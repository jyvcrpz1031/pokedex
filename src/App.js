/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useState, useEffect } from "react";
import { fetchPokemonList, fetchPokemonData } from "./fetch";
import CardList from "./components/CardList";
import Search from "./components/Search";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  var fetched = false;

  useEffect(() => {
    if (!fetched) {
      fetchPokemonList().then((response) => {
        response.map(async (data) => {
          await fetchPokemonData(data.url).then(response => {
            setPokemonData((pokemonData) => [...pokemonData, response]);

          })
        })
      });
      fetched = true;
    }
  }, []);


  pokemonData.sort((a, b) => parseInt(a.id) - parseInt(b.id));

  const filteredPokemon = pokemonData.filter((i) => {
    return i.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const searchPokemon = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <img className="title-img" src={"/pngegg.png"} alt="title.png" />
      <Search searchPokemon={searchPokemon} />
      <CardList pokemons={filteredPokemon} />
    </div>
  );
};

export default App;
