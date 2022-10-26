import React from 'react';
import { FaUser,FaShoppingCart} from "react-icons/fa";
import './Header.css';
import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import CartList from './CartList';


const Header = ({count}) => {

  const reactLink = {
    color:'white',
    marginRight:'20px',
    textDecoration:'none',
  }
  return (
    <>
      <Navbar bg="primary" variant="light" className='mainNav'>  
        <Container style={{fontFamily:'Chilanka',color:'white'}}>
          <Nav className='me-auto'>
            <Navbar.Brand >myShop</Navbar.Brand>
            <Link style={reactLink} to="/">Home</Link>
            <Link style={reactLink} to="/about">About</Link>
            <Link style={reactLink} to="/contact">Contact</Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}

export default Header