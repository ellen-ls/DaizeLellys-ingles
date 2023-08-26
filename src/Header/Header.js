import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import estrelas from './Img/estrelas.png'

const Header = () => {
  return (
    <Navbar expand="lg" className="header">
      <Container>

        <Navbar.Brand href="#home">
          <h2 className='logo'>Daize Lellys</h2>
          <p className='text-logo'>Speak up to the world</p>
        </Navbar.Brand>
        <nav className='info-header'>
          <a className='nav-link' href='home'>Home</a>
          <a className='nav-link' href='qm sou eu'>Quem sou eu</a>
          <a className='nav-link' href='valores'>Valores</a>
          <img src={estrelas} alt=''/>
                   
       </nav>
       
       
      </Container>
    </Navbar>
  );


}

export default Header
