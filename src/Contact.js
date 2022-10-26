import React from "react";
import Form from "./Form";
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Contact.css";
import Header from "./Header";
import { Image } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <div>
        <Header/>
      </div>
      <div >
        <Container style={{marginTop:'5vh'}}>
          <Row>
            <Col className="myh1">
             <h1 >Join with Us !</h1>
            </Col>
            <Col md='6'>
              <img src="https://img.freepik.com/free-vector/business-people-handshake-doodle-vector_53876-126569.jpg?w=2000" className="l1"/>
            </Col>
            <Col md='4'>
            <Form/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
