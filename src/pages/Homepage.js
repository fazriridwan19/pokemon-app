import React, { useState, useEffect } from "react";
import service from "../services/Pokemon";
import { Row, Col } from "react-bootstrap";
import PokemonCard from "../components/PokemonCard";
import Loader from "../components/Loader";

const Homepage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      let { data } = await service.getPokemons();
      const pokemonPromises = data.results.map((element) =>
        service.getPokemonDetail(element.name)
      );
      const pokemonList = await Promise.all(pokemonPromises); // To handle multiple promises
      setPokemons(pokemonList.map((element) => element.data));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <Row>
          {pokemons?.map((pokemon) => (
            <Col key={pokemon.name} xs={12} md={4} sm={12} xl={4}>
              <PokemonCard pokemon={pokemon}></PokemonCard>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Homepage;
