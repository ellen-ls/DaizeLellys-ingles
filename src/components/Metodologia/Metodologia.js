import React from 'react'
import './Metodologia.css'
import { Col, Container, Row } from 'react-bootstrap';
import inglesBiblia from './Img/livro-biblia(copia).png';
import daizeBiblia from './Img/daize-biblia.jpeg';
import logo from './Img/LOGO INGLÊS ATRAVES DA BÍBLIA COLORIDO1.png';
import celular from './Img/inglesBiblia-celular1.png'



const Metodologia = () => {
  return (
    
    <div className='metodologia'>
               
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
<h1>Objetivo do curso</h1>
<Container className='text-biblia'>
      <Row>
        
        <Col> <p className='text1'>Nosso propósito é ensinar inglês através do livro mais lido, mais
        pesquisado e publicado em toda história:<b>a Bíblia.</b> 
        <br></br>
        Enquanto a maioria dos livros didáticos usa diálogos planejados para trabalhar gramática e oralidade,
        nosso curso parte da riqueza incomparável do vocabulário bíblico, suas histórias, traduções e inegável
        influência em nosso cotidiano.
         </p>
      
    </Col>  
    
    <Col><img className='img-biblia2' src={celular} alt=''/></Col>
 </Row>    
 
  
</Container>

<h1>Método de ensino</h1>
<Container className='text-biblia'>
      <Row>
      
        <Col> <p className='text1'>Considerando que o aluno já conhece a Bíblia em seu próprio idioma, aplicaremos o princípio pedagógico em que ele parte do que lhe é 'conhecido e familiar' como ponte para a construção de um novo conhecimento.
        Mesmo sendo iniciante, ou tento estudado inglês, mas não falando, se sentirá mais confiante e tranquilo para discorrer sobre o que já conhece naturalmente.

        <br></br>
        Em nossa metodologia seguimos um programa que mescla e desenvolve as quatro principais habilidade para o aprendizado
        de uma língua estrangeira (ouvir, falar, ler e escrever), enfatizando, porém, a conversação desde o primeiro dia de aula.
        <br></br>
        Utilizamos também o recurso da música para ensinar e ajudar aos alunos a memorizar versículos da Bíblia, aumentando assim, consideravelmente seu vocabulário.
         </p>
      
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
