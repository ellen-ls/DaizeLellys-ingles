import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav} from 'react-bootstrap';
import facebook from './Img/facebook.png'
import instagram from './Img/instagram.png'
import youtube from './Img/youtube.png'
import tiktok from './Img/tiktok.png'
import copia from './Img/logo daize lellys.png'
import { NavLink } from 'react-router-dom';


const Header = () => {

 
  return (

    <Navbar expand="lg" className="header" >
      <Container>
      <Navbar.Brand className='div-logo'>
          
          <img className='fonte' src={copia} alt='/'/>
          <div>
          <p className='text-logo' style={{color:'#b22234', fontWeight:'bold'}}>Sua Teacher</p>
          <p className='text-logo1' style={{color:'#b22234', fontWeight:'bold'}}>"Fora da Caixa"</p>
          </div>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink to='/'>Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to='/sobre-mim'>Quem sou eu</NavLink> </Nav.Link>
            <Nav.Link><NavLink to='/valores'>Planos</NavLink> </Nav.Link>

            
            <Nav.Link href='https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21' target='blank'>Contate-me</Nav.Link>
            </Nav>
 </Navbar.Collapse>
      </Container>
      <div>
        <p className='p-sociais'>Me siga nas redes sociais:</p>
        
        <a href='https://www.instagram.com/teacherdaize_inglespelabiblia/' target='blank'><img className='img-sociais' src={instagram} alt=''/></a>
       <a href='https://www.youtube.com/DaizeLellyssuaprofessoraforadacaixa' target='blank'><img className='img-sociais' src={youtube} alt='' /></a>
       <a href='https://www.tiktok.com/@daizelellys_ingles' target='blank'><img className='img-sociais' src={tiktok} alt=''/></a>
       <a href='https://www.facebook.com/daizelellys' target='blank'><img className='img-sociais' src={facebook} alt=''/></a>
      </div>
      </Navbar>
      
    
   
  );


}

export default Header
