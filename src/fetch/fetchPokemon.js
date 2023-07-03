export async function fetchPokemonList() {
  return await fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
}

export async function fetchPokemonData(url) {
  return await fetch(url)
    .then(response => response.json())
    .then(data => {
      return data;
    })
}

export async function fetchPokemonForm(id) {
  return await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}/`)
    .then(response => response.json())
    .then(data => {
      return data;
    })
}
