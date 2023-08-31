import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky='top'>
      <Container>
      <Navbar.Brand className='div-logo' href='#home'>
          <h2 className='logo' style={{color:'#172799'}}>Daize Lellys</h2>
          <p className='text-danger text-logo'>Inglês sob medida</p>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href= "#home">Home</Nav.Link>
            <Nav.Link href = "#quem-sou-eu">Quem sou eu</Nav.Link>
            <Nav.Link href = "#cursos">Cursos</Nav.Link>
            <Nav.Link href = "#contate-me">Contate-me</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    
   
  );


}

export default Header
