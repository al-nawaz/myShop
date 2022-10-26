import React, { useEffect, useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { NavItem } from 'react-bootstrap';
import './CartList.css';

const CartList = ({cart}) => {
  const[myCart,setmyCart] = useState([]);
  useEffect(()=>{
    setmyCart(cart)
  },[cart])
  const removeItem=(id)=>{
    const newCart = myCart.filter((item) => item.id !== id)
    setmyCart(newCart)
  }
  return (
    <Container>
      <Row>
        {
            myCart.map((cartItem,cartIndex)=>{
               return (
                <Container>
                    <Col key={cartItem.id} md={3} className='cart-items'>
                    <img src={cartItem.thumbnail} />
                    <span>{cartItem.title}</span>
                    </Col>
                    <Col md={3}>
                    <p>Rs. {cartItem.price * cartItem.quantity}</p>
                    </Col>
                    <Col md={3} className='cart-actions'>
                    <button onClick={()=>{const CART = myCart.map((item,index)=>{
                      return  cartIndex === index ? {...item,quantity:item.quantity>0?item.quantity-1:0}:item})
                      setmyCart(CART)
                    }}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={()=>{const CART = myCart.map((item,index)=>{
                      return  cartIndex === index ? {...item,quantity:item.quantity+1}:item})
                      setmyCart(CART)
                    }}>+</button>
                    <button onClick={()=>removeItem(cartItem.id)}>Delete</button>
                    </Col>
                    <Col className='separator'></Col>
                    </Container>
                )
            })
        }
       
      </Row>
      <Row>
      <Col>
        <p>Total : Rs.
          {myCart.map((item)=>item.price*item.quantity).reduce((total,value)=>total + value,0)}/-
        </p>
        <p>Items in Cart : {myCart.length}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default CartList;