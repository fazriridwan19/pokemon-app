import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-bootstrap";
import service from "../services/Pokemon";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      let { data } = await service.getPokemonDetail(name);
      setPokemon(data);
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
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card
              className="my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white"
              style={{ border: "none" }}
            ></Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default PokemonDetail;
