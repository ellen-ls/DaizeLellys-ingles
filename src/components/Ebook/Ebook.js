import React, { useEffect, useState } from 'react'
import './Ebook.css'
import { Button, Col, Form, Row } from 'react-bootstrap'
import emailjs from '@emailjs/browser'

const Ebook = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  //   Form validation state
  const [errors, setErrors] = useState({})

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("");
 
  
  const handleValidation = () => {
    let tempError = {}
    let isValid = true

   
    if (name.length <= 0) {
      tempError["Name"] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempError["Email"] = true
      isValid = false
    }

    setErrors({ ...tempError })
    console.log("errors", errors)
    return isValid
  }
  useEffect(()=>emailjs.init(process.env.REACT_APP_PUBLIC_KEY),[])

  const handleSubmit = async (e) => {
    e.preventDefault()
   
    let template = {
      from_name:'',
      name:name,
      email:email
     } 

      let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText('Email enviado com sucesso, check seu email ou spam e vamos aprender!!!');
      emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, template, process.env.REACT_APP_PUBLIC_KEY)
      .then(
        function (response) {
          console.log("SUCCESS!", response);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
   
              
    }
    console.log(name, email);
  }

  return (
    <div className='ebook'>
      <Row>
      <Col className='ebook-text'>

      <h2>Quer receber um E-book gratuito?</h2>
      <h2>Cadastre-se, é só preencher o campo abaixo.</h2>
      </Col>
     
  <Col>
      <Form
        className='forms-ebook'
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Form.Label>Name*</Form.Label>
          <Form.Control
            type='text'
            placeholder='nome'
            value={name}
            onChange={(e) => {setName(e.target.value) }} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type='email'
            placeholder='example@example.com'
            value={email}
            onChange={(e) => {setEmail(e.target.value) }} />
        </Form.Group>

        <Button
          type='submit'
          className='button-ebook'
        >
         Quero receber!
        </Button>
        <div className='text-sucesso'>{buttonText}</div>
      </Form>
      </Col>
      </Row>
    </div>
  )
}


export default Ebook