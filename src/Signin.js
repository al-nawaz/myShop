import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    const navigate = useNavigate();
    const handleApi = () =>{
        axios.post('https://reqres.in/api/login',{
            email    :email,
            password : password
        })
        .then(result=>{
            if(result.status === 200){
                localStorage.setItem('TOKEN',result.data.token)
                navigate('/home')
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <Container>
            <Row>
                <Col>
                <p>Username : </p> <input type='text' value={email} onChange={handleEmail}/>
                <p>Password : </p> <input type='password' value={password}  onChange={handlePassword}/>
                </Col>
            </Row>
            <Row>
                <Col><button onClick={handleApi}>Sign in</button></Col>
            </Row>
        </Container>
    )
}

export default Signin;

//this comp is not in use