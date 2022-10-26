import React, { useState } from 'react';
import Header from './Header';
import './Home.css';
import { ProductCard} from './ProductCard';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WebFont from 'webfontloader';
import {useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
import Mytable from './Mytable';
import Myinfo from './Myinfo';
import Footer from './Footer';
import Card1 from './Card1';
import CartList from './CartList';


const Home = ({count}) => {
  const [token,setToken] = useState('')
  useEffect(()=>{
    const userToken = localStorage.getItem('TOKEN')
    setToken(userToken)
  })
  return (
    <>
    <div className="productSection">
    <Header count={count}/>
    {/* <ProductCard/> */}
    </div>
    <Container style={{marginTop:'5vh'}}>
      <Row>
        <Col className='myCols' sm={4}><Link className='links' to='/products'>Our Products</Link></Col>
        <Col className='myCols' sm={4}><Link className='links' to='/about'>Our Services</Link></Col>
        <Col className='myCols' sm={4}><Link className='links' to ='/contact'>Partner With Us</Link></Col>
        <Outlet/>
      </Row>
    </Container>
    <Container className='logoContainer'>
      <Row>
        <Col className='logo1' sm={4}><img src='https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'/></Col>
        <Col className='logo1' sm={4}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png'/></Col>
        <Col className='logo1' sm={4}><img src='https://www.oneplus.com/content/dam/oasis/page/common/logo/OnePlus_Logo.png'/></Col>
      </Row>
    </Container>
    <Container className='myTable'>
      <Row>
        <Col md={12}>
        <Mytable/>
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row className='mx-auto'>
        <Col md={4}>
          <Card1/>
        </Col>
        <Col md={4}>
          <Card1/>
        </Col>
        <Col md={4}>
          <Card1/>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
        <Myinfo/>
        {/* <CartList/> */}
        </Col>
      </Row>
    </Container>
    <Container fluid >
      <Row>
        <Col>
        <Footer token={token}/>
        </Col>
      </Row>
    </Container>
    </>
  )
}
export default Home;
