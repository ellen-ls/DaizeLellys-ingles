import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carrossel.css'
import imagem1 from './Img/carrossel1.png'
import imagem2 from './Img/musica.png'
import imagem3 from './Img/business.png'
import imagem4 from './Img/biblia.png'  

const Carrossel = () => {
  return (

    
    
  <Carousel className='dark' id='home'>
      <Carousel.Item interval={4000}>
        <img className='img-carrossel' src={imagem1} alt=''  text="First slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img className='img-carrossel' src={imagem4} alt='' text="Third slide" />
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className='img-carrossel' src={imagem2} alt=''  text="Second slide" />
        
      </Carousel.Item>
      
      <Carousel.Item>
        <img className='img-carrossel' src={imagem3} alt='' text="Third slide" />
        
      </Carousel.Item>
      
      
    </Carousel>
   
  )
  
}


export default Carrossel
