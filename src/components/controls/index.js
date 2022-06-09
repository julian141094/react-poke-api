import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

/**
 * @name Controls
 * @description Render controls for the list of pokemons
 * @param string | Null isNext
 * @param funciton loadPokemon
 * @param bool loading
 * @param funciton loadCaptured
 * @param bool seeListCaptured
 * @returns JSX => Element
 */
const Controls = ({
  isNext = null,
  loadPokemons,
  loading,
  loadCaptured,
  seeListCaptured,
}) => {
  return (
    <Container className="pokeDeck-control-container">
      <Row className="centerContent">
        <Col xs="6" className="">
          <Button
            disabled={loading}
            variant={seeListCaptured ? "success" : "danger"}
            onClick={() => loadCaptured()}
          >
            {seeListCaptured ? "See All" : "See Captureds"}
          </Button>
        </Col>
        <Col xs="6" className="rightContent">
          <Button
            disabled={loading}
            variant="danger"
            onClick={() => (isNext != null ? loadPokemons(isNext) : null)}
          >
            Load More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Controls;
