import React from 'react';
import Header from '../../components/Header/Header';
import Cursos from '../../components/Cursos/Cursos';
import Materiais from '../../components/Materiais/Materiais';
import Footer from '../../components/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import daize from '../../components/Metodologia/Img/daize-ingles1.png'
import inglesBiblia from '../../components/Metodologia/Img/livro-biblia(copia).png'
import './NossosCursos.css'



function NossosCursos() {
  return (
    <div>
         <Header></Header>
         <div className='nossos-cursos'>
   
                 
            <h1 className='pq-aprender'>Por que aprender Inglês através da Bíblia?</h1>
     <Container className='text-biblia'>

      <Row>
        <Col><img className='img-biblia' src={inglesBiblia} alt=''/></Col>
        <Col> <p className='text1'>A Bíblia é um recurso linguístico excepcional para o estudo da língua inglesa. 
    Reconhecida internacionalmente, esse material autêntico é rico em histórias, poemas, 
    música e verdades sobre diversos temas. Sua variedade linguística proporciona uma experiência enriquecedora 
    para os estudantes.
    <br></br> 
Você terá acesso a recursos audiovisuais gratuitos que ajudarão a melhorar sua compreensão auditiva e pronúncia, 
fortalecendo sua habilidade de se comunicar, especialmente na conversação. 
<br></br>
Além disso, ao explorar a Bíblia em inglês, você aprenderá expressões idiomáticas e figuras de linguagem em um 
contexto culturalmente relevante, e também desenvolverá suas habilidades de leitura e análise textual. </p>
      
    </Col>  
 </Row>    
 
</Container>

      
             
<h1>Apresentação e Objetivo do Curso</h1>
<Container className='text-biblia'>
      <Row>
        
        <Col> 
        <p className='text1'>Você já pensou em estudar inglês ouvindo, lendo a Bíblia e ainda cantando seus versículos?
      
      <br></br>
      Este projeto traz uma abordagem cristã de ensino da Língua Inglesa que utiliza áudios, textos da Bíblia, informações bíblicas e apropria Bíblia em inglês, como veículo para o ensino.
      
      <br></br>
      Uma ótima oportunidade de aprender inglês e ao mesmo tempo conhecer melhor este LIVRO tão rico.
      </p>
      
        <p className='text1'>Nosso propósito é ensinar inglês através do livro mais lido, mais
        pesquisado e publicado em toda história: <b>a Bíblia.</b> 
        <br></br>
        Enquanto a maioria dos livros didáticos usa diálogos planejados para trabalhar gramática e oralidade,
        nosso curso parte da riqueza incomparável do vocabulário bíblico, suas histórias, traduções e inegável
        influência em nosso cotidiano.
         </p>

       
    </Col>  
    
    
 </Row>    
 <Col><img className='img-biblia2' src={daize} alt=''/></Col>
  
</Container>



</div>
         <Cursos></Cursos>
         <Materiais></Materiais>
         <Footer/>
   
    </div>
  )
}

export default NossosCursos