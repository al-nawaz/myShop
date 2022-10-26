import React from 'react';
import { FaUser,FaShoppingCart} from "react-icons/fa";
import './Header.css';
import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import CartList from './CartList';


const Header = ({count}) => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container style={{fontFamily:'Chilanka'}}>
          <Navbar.Brand href="#home">chorBazaar</Navbar.Brand>
          <Nav variant="pills"activeKey={'home'} className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}

export default Header