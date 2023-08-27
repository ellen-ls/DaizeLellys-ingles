import React from 'react'
import './SobreMim.css'
import daize from './img/IMG_1484.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SobreMim() {
  return (
    <div className='sobre'>
         <h1>QUEM É SUA TEACHER</h1>
     <h2>Sobre mim</h2>
 
    <Container className='text-sobre'>
      <Row>
        <Col><img className='img-daize' src={daize} alt=''/></Col>
        <Col> <p className='text'>Meu nome é Daize (com A e Z mesmo), uma professora apaixonada por idiomas e culturas diferentes, desde que tive meu 
      primeiro contato com o inglês aos nove anos, com uma amiga canadense. Sou Professora de Inglês, Mentora e Líder no 
      segmento de Inglês através da Bíblia, com graduação em Letras, pós-graduação em Educação Global e Liderança Avançada
      no Haggai Institute nos EUA.Há mais de 25 anos, tenho ensinado centenas de pessoas a serem independentes no inglês 
      para realizarem seus sonhos.</p></Col>
      </Row>
     
    </Container>
   
   
    
     </div>
  )
}

export default SobreMim