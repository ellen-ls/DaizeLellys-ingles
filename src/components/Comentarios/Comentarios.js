import React from 'react'
import { Carousel, Image} from 'react-bootstrap'
import './Comentarios.css'
import grace from './img/grace.png'
import ellenerica from './img/ellenerica.png'
import flaviana from './img/flaviana.png'
import jaqueline from './img/jaqueline.png'
import netto from './img/netto.png'

function Comentarios() {
  return (
    <div className='comentarios'>
        <h1>O que meus alunos falam</h1>

             
        <Carousel className='comments-carrossel'>
      <Carousel.Item>
      <Image variant="top" src={jaqueline}  style={{
                            height:'5rem',
                            width:'5rem',
                            borderRadius:'50%',
                            border:'3px solid #3c3b6e',
                            margin:'20px 50px'}} />
        <h3>Jaqueline</h3>
        <h5>Espírito Santo</h5>
        <div className='comment-p'>
          <p>A cada aprendizado um encanto e a felicidade de poder aprender cada vez mais e melhorar a fluência em Inglês,
             com aulas super descontraídas. </p>
             </div>
      </Carousel.Item>
      <Carousel.Item>
      <Image variant="top" src={grace}  style={{
                            height:'5rem',
                            width:'5rem',
                            borderRadius:'50%',
                             border:'3px solid #3c3b6e',
                             margin:'20px 50px'}} />
      
          <h3>Grace</h3>
          <h5>Fortaleza</h5>
          <div className='comment-p'>
          <p>Fazia 30 anos que não estudava inglês e com apoio dos meus filhos e esposo e por gostar de inglês, resolvi voltar a estudar e com a metodologia da Bíblia facilitou muito o meu aprendizado
            ,eu sabia que não iria ser fácil pois tinha que ter a dedicação mas que eu falo sempre que em cada aula eu aprendo um pouco de inglês e estou muito feliz 
            com esse aprendizado.</p>
            </div>
      </Carousel.Item>
      <Carousel.Item>
      <Image variant="top" src={ellenerica}  style={{
                            height:'5rem',
                            width:'5rem',
                            borderRadius:'50%',
                             border:'3px solid #3c3b6e',
                             margin:'20px 50px'}} />
        <h3>Ellen e Érica</h3>
        <h5>Fortaleza</h5>
        <div className='comment-p'>
          <p>
            Excelente profissional, sempre nos motivando a aprender, aulas super divertidas e dinâmicas,
            recomendamos muito nota 1000.
          </p>
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <Image variant="top" src={flaviana}  style={{
                            height:'5rem',
                            width:'5rem',
                            borderRadius:'50%',
                             border:'3px solid #3c3b6e',
                             margin:'20px 50px'}} />
        <h3>Flaviana</h3>
        <h5>João Pessoa</h5>
        <div>
          <p className='comment-p'>
            Curso e aulas maravilhosas, professoras super dinâmica e sinto-me livre na hora de flar inglês, amo
            as aulas e agradeço cada nível de meu aprendizado.Recomendo.
          </p>
         </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <Image variant="top" src={netto}  style={{
                            height:'5rem',
                            width:'5rem',
                            borderRadius:'50%',
                             border:'3px solid #3c3b6e',
                             margin:'20px 50px'}} />
        <h3>José Netto</h3>
        <h5>Campina Grande</h5>
        <div>
          <p className='comment-p'>
          Eu comecei o curso para aprimorar o meu inglês, o curso ajudou muito a melhorar minha fala e 
          a minha escrita, assim como a minha comunicação que está mais natural, 
          esse curso é muito bom e vai me ajudar a realizar o sonho de estudar no exterior.
          </p>
        </div>
      </Carousel.Item>
   
    </Carousel>
      
    </div>
  )
}

export default Comentarios