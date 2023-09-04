import React from 'react'
import { Carousel, Image} from 'react-bootstrap'
import './Comentarios.css'

function Comentarios() {
  return (
    <div className='comentarios'>
        <h1>O que meus alunos falam</h1>

             
        <Carousel className='comments-carrossel'>
      <Carousel.Item>
      <Image variant="top" src={''}  style={{
                            height:'5rem',
                            width:'5rem',
                            borderRadius:'50%',
                             border:'3px solid #3c3b6e',
                             margin:'20px 50px'}} />
        <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Item>
      <Carousel.Item>
      <Image variant="top" src={''}  style={{
                            height:'5rem',
                            width:'5rem',
                            borderRadius:'50%',
                             border:'3px solid #3c3b6e',
                             margin:'20px 50px'}} />
      
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       
      </Carousel.Item>
      <Carousel.Item>
      <Image variant="top" src={''}  style={{
                            height:'5rem',
                            width:'5rem',
                            borderRadius:'50%',
                             border:'3px solid #3c3b6e',
                             margin:'20px 50px'}} />
        <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        
      </Carousel.Item>
    </Carousel>
      
    </div>
  )
}

export default Comentarios