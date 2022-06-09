import React from "react";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ButtonCaptured from "../basics/buttonCapture";

const PokemonCard = ({ item }) => {
  const { id, url, name } = item;
  return (
    <Col sm={12} md={6} lg={3} className="poke-card-container">
      <Card className="poke-card">
        <Card.Img variant="top" src={url} />
        <Card.Body className="poke-card-body">
          <Card.Title className="poke-card-title">{name}</Card.Title>
          <Card.Text className="poke-card-text">{`Id: ${id}`}</Card.Text>
          <div className="poke-card-button-container">
            <ButtonCaptured id={id} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PokemonCard;
