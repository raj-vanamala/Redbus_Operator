import React, { useState } from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'
import { Col, Container, Row } from 'react-bootstrap'
import '../Styles/Credentials.css'
import Home from './Home'

const signUpInitialValues = {
    name  : "",
    email : "",
    mobile : "",
    travelsName : "",
    password : ""
}

const signUpValidationSchema =  Yup.object({
    name : Yup.string().required('Required'),
    email : Yup.string().email('Invalid Email Format').required('Required'),
    mobile : Yup.string().required('Required'),
    travelsName : Yup.string().required('Required'),
    password : Yup.string().required('Required')
})

const signInInitialValues = {
    signInEmail : "",
    signInPassword : ""
}

const signInValidationSchema =  Yup.object({
    signInEmail : Yup.string().email('Invalid Email Format').required('Required'),
    signInPassword : Yup.string().required('Required')
})

function Credentials() {

    const [signIn , setSignInValue] = useState(false);


    function handleSignUp(credentials) {

        fetch("http://localhost:3001/operatorCredentials/signUp/",{

            "method": "POST",
            "headers" : {
                "Content-Type" : "application/json"
            },
            "body" : JSON.stringify(credentials)
        })

        .then((response)=>response.json())

        .then((data)=>{

            alert(data.message);
            if(data.status === "success") {
                setSignInValue(true)
            }
        })
    }

    
    function handleSignIn(credentials) {

        fetch("http://localhost:3001/operatorCredentials/signIn/",{

            "method": "POST",
            "headers" : {
                "Content-Type" : "application/json"
            },
            "body" : JSON.stringify({
                "email" : credentials.signInEmail,
                "password" : credentials.signInPassword
            })
        })

        .then((response)=>response.json())

        .then((data)=>{
            alert(data.message);
            if(data.status === "success") {
                setSignInValue(true)
            }
        })

        
    }

    return (
        (signIn === false)
        ?
        <>
            <Container>
         <Row className="signInBar">
             <Col>
                <Formik
                initialValues = {signInInitialValues}
                validationSchema = {signInValidationSchema}
                onSubmit = {handleSignIn}
                >
                    <Form>
                        <Row>
                            <Col lg={7}></Col>
                            <Col lg={2}>
                                <label htmlFor="signInEmail" className = "signInBarLabel">Email</label>
                                <Field type="email" id="signInEmail" name="signInEmail" />
                                <ErrorMessage name = "signInEmail" component = {TextError} />
                            </Col>
                            <Col lg={2}>
                                <label htmlFor="signInPassword" className = "signInBarLabel">Password</label>
                                <Field type="text" id="signInPassword" name="signInPassword" />
                                <ErrorMessage name = "signInPassword" component = {TextError} />
                            </Col>
                            <Col lg={1}>
                                <button type="submit" className = "signInButton">Sign In</button>
                            </Col>
                        </Row>
                    </Form>
                </Formik>
             </Col>
         </Row>
         <hr />
         <Row className="signInBar">
            <Col lg={6}>
                <h1 style = {{textAlign : "center",marginTop:"5%",color:"white",fontFamily : "'Times New Roman', Times, serif",fontSize : "190px"}}>Redbus</h1>
                <h3 style = {{textAlign : "center",color:"white",fontFamily : "'Times New Roman', Times, serif",fontSize : "40px"}}>Travel Bus Operator Portal</h3>
            </Col>
            <Col lg={6}>
                    <Formik
                    initialValues = {signUpInitialValues}
                    validationSchema = {signUpValidationSchema}
                    onSubmit = {handleSignUp}
                    >
                        <Form>
                            <Row>
                                <Col lg={12} style = {{marginLeft : "95px"}}>
                                    <label htmlFor="name" className = "signInBarLabel">Name</label> <br />
                                    <Field style = {{width:"70%"}} type="text" id="name" name="name" />
                                    <ErrorMessage name = "name" component = {TextError} />
                                </Col>

                                <Col lg={12} style = {{marginLeft : "95px"}}>
                                    <label htmlFor="email" className = "signInBarLabel">Email</label>  <br />
                                    <Field style = {{width:"70%"}} type="email" id="email" name="email" />
                                    <ErrorMessage name="email">
                                        {
                                            (errorMsg) => <div style={{color: "white",fontFamily : "'Times New Roman', Times, serif"}}>{errorMsg}</div>
                                        }
                                    </ErrorMessage>
                                </Col>
                                <Col lg={12} style = {{marginLeft : "95px"}}>
                                    <label htmlFor="mobile" className = "signInBarLabel">Mobile</label><br />
                                    <Field style = {{width:"70%"}} type="text" id="mobile" name="mobile" />
                                    <ErrorMessage name = "mobile" component = {TextError} />
                                </Col>
                                <Col lg={12} style = {{marginLeft : "95px"}}>
                                    <label htmlFor="travelsName" className = "signInBarLabel">Travel's Name</label><br />
                                    <Field style = {{width:"70%"}} type="text" id="travelsName" name="travelsName" />
                                    <ErrorMessage name = "travelsName" component = {TextError} />
                                </Col>
                                <Col lg={12} style = {{marginLeft : "95px"}}>
                                    <label htmlFor="password" className = "signInBarLabel">Password</label><br />
                                    <Field style = {{width:"70%"}} type="text" id="password" name="password" />
                                    <ErrorMessage name = "password" component = {TextError} />
                                </Col>
                                <Col lg={12} style = {{marginLeft : "95px"}}>
                                    <button type="submit" style = {{width:"70%",marginTop:"20px"}}>Sign Up</button>
                                </Col>
                            </Row>
                        </Form>
                </Formik>
            </Col>
        </Row>
        </Container>
        </>
        : 
        <Home />
       )
}

export default Credentials;