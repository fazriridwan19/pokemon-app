import axios from "axios";

const getPokemons = async () => {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=15`);
};

const getPokemonDetail = async (name) => {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
};

export default { getPokemons, getPokemonDetail };
