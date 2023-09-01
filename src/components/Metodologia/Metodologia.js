import React from 'react'
import './Metodologia.css'
import { Col, Container, Row } from 'react-bootstrap';
import inglesBiblia from './Img/ingles-atraves-da-biblia.jpeg';
import daizeBiblia from './Img/daize-biblia.jpeg';
import logo from './Img/LOGO INGLÊS ATRAVES DA BÍBLIA COLORIDO1.png';


const Metodologia = () => {
  return (
    <div className='metodologia' id='cursos'>
            
            <img className='logo-biblia' src={logo} alt=''></img>
            <h1 >Por que aprender Inglês através da Bíblia?</h1>
          
            
           
            


            <Container className='text-biblia'>
      <Row>
        <Col><img className='img-biblia' src={inglesBiblia} alt=''/></Col>
        <Col> <p className='text1'>A Bíblia é um recurso linguístico excepcional para o estudo da língua inglesa. 
    Reconhecida internacionalmente, esse material autêntico é rico em histórias, poemas, 
    música e verdades sobre diversos temas. Sua variedade linguística proporciona uma experiência enriquecedora 
    para os estudantes. 
Você terá acesso a recursos audiovisuais gratuitos que ajudarão a melhorar sua compreensão auditiva e pronúncia, 
fortalecendo sua habilidade de se comunicar, especialmente na conversação. 
Além disso, ao explorar a Bíblia em inglês, você aprenderá expressões idiomáticas e figuras de linguagem em um 
contexto culturalmente relevante, e também desenvolverá suas habilidades de leitura e análise textual. </p>
      
    </Col>  
 </Row>    
 
  
</Container>

<Container className='text-biblia'>
      <Row>
        
        <Col> <p className='text2'>APRENDA A LÍNGUA MAIS FALADA DO MUNDO ATRAVÉS DO LIVRO MAIS LIDO DO PLANETA!</p>
      
    </Col> 
    <Col><img className='img-biblia1' src={daizeBiblia} alt=''/></Col> 
 </Row>    
 
</Container>
</div>
    
  )
}

export default Metodologia
