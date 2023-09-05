import React from 'react';
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import inglesBiblia from '../../components/Metodologia/Img/livro-biblia(copia).png';
import daizeBiblia from '../../components/Metodologia/Img/daize-biblia.jpeg';
import celular from '../../components/Metodologia/Img/inglesBiblia-celular1.png';
import logo from '../../components/Metodologia/Img/LOGO INGLÊS ATRAVES DA BÍBLIA COLORIDO1.png';
import negocios from '../../components/Metodologia/Img/negocios.png'
import musica from '../../components/Metodologia/Img/musica.jpeg'
import conversa from '../../components/Metodologia/Img/conversa.png'
import estrangeiro from '../../components/Metodologia/Img/estrangeiro.png'
import copia from '../../components/Header/Img/logo daize lellys.png'
import telegram from '../../components/Header/Img/telegram.png'
import instagram from '../../components/Header/Img/instagram.png'
import youtube from '../../components/Header/Img/youtube.png'
import tiktok from '../../components/Header/Img/tiktok.png'

import { NavLink } from 'react-router-dom';


function NossosCursos() {
  return (
    <div>
          <Navbar expand="lg" className="bg-body-tertiary" sticky='top' >
      <Container>
      <Navbar.Brand className='div-logo'>
          
          <img className='fonte' src={copia} alt='/'/>
          
          <p className='text-logo' style={{color:'#b22234'}}>Inglês sob medida</p>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink to='/'>Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/sobre-mim'>Quem sou eu</NavLink> </Nav.Link>
            <Nav.Link><NavLink to='/cursos'>Nossos Cursos</NavLink></Nav.Link>
            <Nav.Link href='https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21' target='blank'>Contate-me</Nav.Link>
            </Nav>
 </Navbar.Collapse>
      </Container>
      <div>
        <p className='p-sociais'>Me siga nas redes sociais:</p>
        
        <img className='img-sociais' src={instagram} alt=''/>
        <img className='img-sociais' src={youtube} alt=''/>
        <img className='img-sociais' src={tiktok} alt=''/>
        <img className='img-sociais' src={telegram} alt=''/>
      </div>
      </Navbar>
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
       
   <div className='cursos'>

<h1>Outros cursos</h1>
            
            <Container className='container-cursos' style={{width:'100%'}}>
                <Row className='row-container'>
                      
                    <Col>
                        <Card style={{ width: '15rem',height:'31rem', textAlign:'center', margin:'10px 0 20px 0', borderRadius:'10px', backgroundColor:'#b22234', color:'#fff' }} className='card-cursos'>
                            <Card.Img variant="top" src={negocios} style={{height:'10rem'}} />
                            <Card.Body>
                                <Card.Title style={{fontSize:'18px'}} className='linha'>Inglês para negócios</Card.Title>
                                <Card.Text style={{fontSize:'14px'}}>
                                Aulas síncronas, formato online, em grupo de até 6 pessoas, suporte com o professor, cronograma de atividades semanal, 
                                feedback semestral e certificado. Aulas de 60 minutos de duração, 1 ou 2 vezes por semana.
                               </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem',height:'31rem', textAlign:'center', margin:'10px 0 20px 0',borderRadius:'10px',backgroundColor:'#3c3b6e', color:'#fff'  }} className='card-cursos'>
                            <Card.Img variant="top" src={musica} style={{height:'10rem'}}/>
                            <Card.Body>
                                <Card.Title style={{fontSize:'18px'}} className='linha'>Inglês com música</Card.Title>
                                <Card.Text style={{fontSize:'14px'}}>
                                Nossa abordagem personalizada começa com uma avaliação cuidadosa do seu nível de conhecimento e dos 
                                seus interesses pessoais. Com base nisso, 
                                criamos aulas sob medida para atender ao seu estilo de aprendizado individual." 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem',height:'31rem', textAlign:'center', margin:'10px 0 20px 0',borderRadius:'10px', backgroundColor:'#b22234', color:'#fff'  }} className='card-cursos'>
                            <Card.Img variant="top" src={conversa} style={{height:'10rem'}}/>
                            <Card.Body>
                                <Card.Title style={{fontSize:'18px'}} className='linha'>Conversation classes</Card.Title>
                                <Card.Text style={{fontSize:'14px'}}>
                                A Bíblia é uma mina de ouro para quem quer aprender inglês, seja você jovem ou adulto. 
                                Tem de tudo: histórias, poesia, música e ensinamentos  profundos.
                               Ao optar por explorar a Bíblia em inglês, você terá acesso a vídeos gratuitos que aprimoram sua compreensão 
                               auditiva e pronúncia, ajudando você a se destacar em conversas.

                               </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem',height:'31rem', textAlign:'center', margin:'10px 0 20px 0',borderRadius:'10px',backgroundColor:'#3c3b6e', color:'#fff'  }} className='card-cursos'>
                            <Card.Img variant="top" src={estrangeiro} style={{height:'10rem'}} />
                            <Card.Body>
                                <Card.Title style={{fontSize:'18px'}} className='linha'>Português para estrangeiros</Card.Title>
                                <Card.Text style={{fontSize:'14px'}}>
                                Aulas síncronas, formato online, em grupo de até 6 pessoas, suporte com o professor, 
                                cronograma de atividades semanal, feedback semestral e certificado. 
                                Aulas de 60 minutos de duração, 1 ou 2 vezes por semana.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                   
                </Row>
            </Container>
      
    </div>
   
    </div>
  )
}

export default NossosCursos