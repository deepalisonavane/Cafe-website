import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Pizza.css";

const Pizza = ({ pizza }) => {
  const [varients, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Card className="card">
        <Card.Img variant="top" src={pizza.image} height={"250px"} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr/>
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Varients</h6>
                <select  value={varients} onChange={e=>setVarient(e.target.value)} >
                  {pizza.varients.map((varients) => (
                    <option >{varients}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select  value={quantity} onChange={e=>setQuantity(e.target.value)}>
                  {[...Array(10).keys()].map((v, i) => (
                    <option value={i + 1} >{i + 1}  </option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
          <Col md={6}>Price :{pizza.prices[0][varients]*quantity} -/Rs</Col>
          <Col md={6}>
            <Button className="bg-danger text-white">Add  to Cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Pizza;
