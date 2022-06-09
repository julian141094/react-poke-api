import React, { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { debounce } from "lodash";

/**
 * @name Filter
 * @description Component to filter a pokemon
 * @param function getSearch
 * @returns JSX Element
 */
const Filter = ({ getSearch }) => {
  const [word, setWord] = useState("");

  const search = (event) => {
    const text = event.target.value;
    getSearch(text.toLowerCase());
  };

  /**
   * @name debounceChange
   * @description Handle field change (filter), and excecute getSearch
   * @param event string
   * @return Nothing
   */
  const debounceChange = useCallback(debounce(search, 2000), []);

  /**
   * @name handleChange
   * @description Handle change and excecute debounce and update state field
   * @param event string
   * @return Nothing
   */
  const handleChange = (e) => {
    debounceChange(e);
    setWord(e.target.value);
  };

  return (
    <Container className="pokeDeck-control-container">
      <Row className="centerContent">
        <Col xs="12" className="text-from-container">
          <Form className="text-from-group">
            <Form.Group controlId="search-input">
              <Form.Control
                type="text"
                placeholder="Search by Name or Id"
                onChange={(e) => handleChange(e)}
                value={word}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Filter;
