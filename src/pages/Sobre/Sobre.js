import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Sobre.css'
import daizeSobre from './Img/daize-sobre-mim.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';
import telegram from '../../components/Header/Img/telegram.png'
import instagram from '../../components/Header/Img/instagram.png'
import youtube from '../../components/Header/Img/youtube.png'
import tiktok from '../../components/Header/Img/tiktok.png'
import copia from '../../components/Header/Img/logo daize lellys.png'



const Sobre = () => {

    
  return (
    <div className='principal'>
     
     <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
      <Container>
      <Navbar.Brand className='div-logo'>
          
          <img className='fonte' src={copia} alt=''/>
          
          <p className='text-logo' style={{color:'#b22234'}}>Inglês sob medida</p>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><NavLink to='/'>Home</NavLink></Nav.Link>
          <Nav.Link ><NavLink to='/sobre-mim'>Quem sou eu</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/cursos'>Nossos Cursos</NavLink></Nav.Link>
            <Nav.Link href = 'https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21' target='blank'>Contate-me</Nav.Link>
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
    
    <Container className='geral'>
      <Row>
        <Col className='coluna'><img className='sobre-mim' src={daizeSobre} alt=''></img></Col>
        <Col>
        <h2 className='titulo'>Coordenadora do Programa de Inglês</h2>
        <p className='texto'>Como Coordenadora pedagógica do Programa de Inglês, pude acompanhar e avaliar o ensino e o processo de aprendizagem, 
            bem como os resultados do desempenho dos alunos; assegurar a participação ativa dos professores nos treinamentos, 
            organizar e selecionar materiais adequados às diferentes situações de ensino--aprendizagem e 
            conhecer os recentes referenciais teóricos relativos ao tema, para orientar os professores.</p>
        </Col>
        
      </Row>

      <Row>
        <Col>
        <h2 className='titulo'>Formação</h2>
        <p className='texto'>Graduada em Letras pela UTP (Universidade Tuluti do Paraná), 
            especialista em Educação Global pela UNIFUTURO (Faculdades Integradas do Brasil), 
            pós graduada em Liderança Avançada no Haggai lnternational lnstltute, no Hawaii, 
            Estados Unidos e mestranda em Educação na FCU (Florlda Christian Unlversl­ty), nos Estados Unidos.</p>

        </Col>
        <Col className='texto-geral'>
        <h2 className='titulo'>Professora de Inglês</h2>
        <p className='texto'>Professora Universitária (graduação, pós-graduação e extensão), 
            lecionando na área de Idiomas. Além de aulas presenciais, 
            experiência também com aulas on line, interagindo assim, 
            com outras culturas e realidades diferentes.</p>
        </Col>
       
      </Row>

      <Row>
        <Col>
        <h2 className='titulo'>ESL Training Services - EUA</h2>
        <p className='texto'>Formação e treinamento no Método Inglês através da Bíblia, criado por Glenda Reece, 
            na Carolina do Norte, EUA.</p>
        </Col>
        <Col>
        <h2 className='titulo'>Diretora do International Office e Intercâmbio</h2>
        <p className='texto'>Gestão administrativa do International Office, desenvolvi outras competências administrativas, 
            bem como atuando como facilitadora nos processos de intercâmbio, e contribuindo para uma educação globalizada.</p>
        </Col>
      </Row>

      
      
    </Container>
    </div>
  )
}

export default Sobre
