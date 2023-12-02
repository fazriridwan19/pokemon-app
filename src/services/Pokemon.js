import axios from "axios";

const getPokemons = async () => {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=0`);
};

export default getPokemons;
