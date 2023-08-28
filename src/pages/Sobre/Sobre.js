import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import estrelas from '../Header/Img/estrelas.png'


const Sobre = () => {

    const navigate = useNavigate()
  return (
    <div>
       <Navbar expand="lg" className="header">
      <Container>

        <Navbar.Brand>
          <h2 className='logo'>Daize Lellys</h2>
          <p className='text-logo'>Speak up to the world</p>
        </Navbar.Brand>
        <nav className='info-header'>
          <a className='nav-link' href='/' onClick={()=>(navigate('/'))}>Home</a>
          
          <img className='estrelas' src={estrelas} alt=''/>
                   
       </nav>
       
       
      </Container>
    </Navbar>
     
    </div>
  )
}

export default Sobre
