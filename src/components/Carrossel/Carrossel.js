import React from 'react'
import './Carrossel.css'
import home from './Img/home.png'
import { Col, Row } from 'react-bootstrap'

const Carrossel = () => {
  return (
    <div className='primeira' id='home'>
      <Row>
        <Col className='coluna-esquerda-home'>
          <h2 className='text1-carrossel'>Aprenda Inglês</h2>
          <h2 className='text2-carrossel'>Do modo mais divertido, </h2>
          <h2 className='text3-carrossel'>Pense fora da caixa.</h2>
          <button className='btn-home'><a href='https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21' target='blank'>Comece agora!</a></button>
        </Col>
        <Col>
        <img src={home} className='img-carrossel' ></img>
        </Col>
      </Row>
    </div>
  )
}


export default Carrossel
