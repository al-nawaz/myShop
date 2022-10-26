import React from "react";
import { useEffect, useState } from "react";
import { CustomButton } from "./Components/CustomButton";
import "./ProductCards.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import CartList from "./CartList";
import {FaShoppingCart} from 'react-icons/fa'
import axios from "axios";

export const ProductCard = ({addtoCart,count,cart,removeItem}) => {
  const [product, setProduct] = useState([]);
  const [showCart,setshowCart]= useState(false); 
  const handleShow = (value)=>{
    setshowCart(value)
  }
  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((x) => setProduct(x.products));
  }, []);
  return (
    <>
    <Header/>
    <div className="body">
      <Container style={{ backgroundColor: "skyblue",padding:"30px" ,border:"2px solid blue",borderRadius:'30px'}}>
        <div className="myHead"> 
        <p onClick={()=>handleShow(false)}>Product</p>
        <p onClick={()=>handleShow(true)}><FaShoppingCart/><sup>{count}</sup></p>
        </div>
        {showCart?
        <Row>
        <Col><CartList cart={cart} removeItem={removeItem}/></Col>
        </Row>:
        <Row>
          {product.map((p) => {
            return (
              <Col className="cols" key={p.id}>
                <h3>{p.title}</h3>
                <img src={p.thumbnail} className='pic'/>
                <h3>Rs.{p.price}/-</h3>
                <div className='price'>
                <p>Available : {p.stock}</p>
                <button onClick={()=>addtoCart(p)}>Add to Cart</button>
                </div>
              </Col>
            );
          })}
        </Row>}
      </Container>
    </div>
    </>
  );
};
