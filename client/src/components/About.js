import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>

      <h1> Who Are We </h1>
      <Row>
          <Col md-4>
            <p>
            We are the parent company of the Coffee Day Group, which houses Café Coffee Day that pioneered the coffee culture in the chained café segment in India. This coffee goes all over the world to clients across, Europe and Japan, making us one of the top coffee exporters in the country. We opened our first Café Coffee Day outlet in Bengaluru in 1996 , ours was a new vision—one where coffee was more than just a beverage. It was a cup that brought coffee aficionados, budding coffee drinkers, and well, friends together over a cup of freshly brewed coffee. Today, our subsidiary Coffee Day Global Limited has established the largest footprint of café outlets in India-spread across more than 200 cities. Our forays into diverse businesses are marked by the same passion with which we started Coffee Day Global Limited. Our portfolio includes Technology Parks & SEZs, Logistics, Investments, Financial Services and Hospitality.




            </p>
          </Col>
          <Col>
          <img src="./images/banner.jpg"></img>
          </Col>
          </Row>

        <h1>Our Specialities</h1>

        <Row>
          <Col >
          <img src="./images/1.jpg"></img>
          
          <img src="./images/3.jpg"></img> 
          </Col>
        </Row>
        
      </Container>
    </>
  );
};

export default About;
