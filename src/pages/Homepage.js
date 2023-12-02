import React, { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import getPokemons from "../services/Pokemon";
import PokemonCard from "../components/PokemonCard";

const Homepage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = () => {
    getPokemons()
      .then((response) => {
        setPokemons(response.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <Row>
          {pokemons.map((pokemon) => (
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
