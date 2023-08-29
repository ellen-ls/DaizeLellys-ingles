import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav} from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <h2 className='text-danger logo'>Daize Lellys</h2>
          <p className='text-dark text-logo'>Speak up to the world</p>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Quem sou eu</Nav.Link>
            <Nav.Link href="#link">Valores</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
   
  );


}

export default Header
