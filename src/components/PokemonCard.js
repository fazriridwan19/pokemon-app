import service from "../services/Pokemon";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded text-center shadow mb-5 bg-white">
        <Link to={`/pokemon/${pokemon.name}`}>
          <Card.Img
            style={{ width: "8rem" }}
            src={pokemon.sprites.front_default}
            variant="top"
          ></Card.Img>
        </Link>
        <Card.Body
          className={`${pokemon.types[0].type.name} rounded text-white`}
        >
          <Link to={`/pokemon/${pokemon.name}`} className="link-name">
            <Card.Title as={"div"}>
              <strong>{pokemon.name}</strong>
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default PokemonCard;
