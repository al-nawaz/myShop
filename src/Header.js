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
        <Container style={{fontFamily:'Chilanka'}}>
            <span><h2>chorBazaar</h2></span>
            <ul className='myNav'>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </Container>
      </>
  )
}

export default Header