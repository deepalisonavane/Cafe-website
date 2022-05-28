import React, { useState } from "react";
import { Card, Button, Row, Col ,Modal} from "react-bootstrap";
import "./Pizza.css";

const Pizza = ({ pizza }) => {
  const [varients, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="card">
        <Card.Img variant="top" src={pizza.image} style={{cursor:'pointer'}} height={"250px"}
        onClick={handleShow} />
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

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
       
      >
      <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
        <Card.Img variant="top" src={pizza.image} height={"250px"} /><hr/>
        <h5 align ="center">Description</h5>
        <hr/>
        <h6>{pizza.description}</h6>
          {pizza.description}
          </div>
        </Modal.Body>
       
      </Modal>
    </>
  );
};

export default Pizza;
