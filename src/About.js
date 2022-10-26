import React from 'react';
import { useEffect } from 'react';
import './About.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from './Header';

const About = () => {
 
  return (
    <div>
      <Header/>
    <Container className='about' style={{marginTop:'5vh'}}>
      <Row>
        <Col md={6}>
        <img className='myimg'src='https://navbharattimes.indiatimes.com/photo/msid-90906237,imgsize-201434/pic.jpg'/>
        </Col>
        <Col md={6}>
        <p> 
        Mumbai's Chor Bazaar is the pride of the city in terms of shopping. Located in South Mumbai, Chor Bazaar literally translates to 'thieves market'. One of the oldest markets in Mumbai, the place has a fascinating history that dates back to over 150 years. Initially, Chor Bazaar was known as 'Shor Bazaar', which means 'noisy market'. However, the British, during their reign in India, mispronounced the word and the market eventually became known as 'Chor Bazaar'. One of the most fascinating souks, Chor Bazaar is home to many stolen goods, just as the name suggests. You will usually find shopaholics rummaging for goods at throwaway prices. From antiques to Victorian furniture and fashion to electronics, a wide array of goods available here is staggering. Most of the shop-owners are used to the whims and fancies of the shoppers; therefore, if you are good at bargaining, then this might be the place to be! One of the main tourist attractions in Mumbai, Chor Bazaar is also one of the busiest places in this metropolitan city
        </p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default About;