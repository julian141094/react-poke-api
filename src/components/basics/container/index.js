import React from "react";
import { Container, Row } from "react-bootstrap";

const CustomContainer = ({ children }) => {
  return (
    <Container className="pokeDeck-container">
      <Row className="centerContent">{children}</Row>
    </Container>
  );
};

export default CustomContainer;
