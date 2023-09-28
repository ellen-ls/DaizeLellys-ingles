import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import './Comentarios.css'
import grace from './img/grace.png'
import ellenerica from './img/ellenerica.png'
import flaviana from './img/flaviana.png'
import jaqueline from './img/jaqueline.png'
import netto from './img/netto.png'
import joalisson from './img/joalisson.png'
import leonardo from './img/leonardo.png'

function Comentarios() {

  const comentarios = [{
    id:1,
    image:grace,
    name:'Grace',
    state:'Fortaleza',
    comment:'Fazia 30 anos que não estudava inglês e com apoio dos meus filhos e esposo e por gostar de inglês, resolvi voltar a estudar e com a metodologia da Bíblia facilitou muito o meu aprendizado, eu sabia que não iria ser fácil pois tinha que ter a dedicação mas que eu falo sempre que em cada aula eu aprendo um pouco de inglês e estou muito feliz com esse aprendizado.'
  },
  {
    id:2,
    image:ellenerica,
    name:'Ellen e Erica',
    state:'Fortaleza',
    comment: 'Excelente profissional, sempre nos motivando a aprender, aulas super divertidas e dinâmicas, recomendamos muito nota 1000.'
  },
  {
    id:3,
    image:flaviana,
    name:'Flaviana',
    state:'João Pessoa',
    comment: 'Curso e aulas maravilhosas, professoras super dinâmica e sinto-me livre na hora de flar inglês, amo as aulas e agradeço cada nível de meu aprendizado.Recomendo.'
  },
  {
    id:4,
    image:jaqueline,
    name:'Jaqueline',
    state:'Espírito Santo',
    comment: 'A cada aprendizado um encanto e a felicidade de poder aprender cada vez mais e melhorar a fluência em Inglês, com aulas super descontraídas.'
  },
  {
    id:5,
    image:netto,
    name:'José Netto',
    state:'Campina Grande',
    comment: 'Eu comecei o curso para aprimorar o meu inglês, o curso ajudou muito a melhorar minha fala e a minha escrita, assim como a minha comunicação que está mais natural, esse curso é muito bom e vai me ajudar a realizar o sonho de estudar no exterior.'
  },
  {
    id:6,
    image:joalisson,
    name:'Joalisson Douglas',
    state:'João Pessoa',
    comment: 'As aulas estão me ajudando muito a ganhar confiança para falar inglês. As aulas são dinâmicas e são uma oportunidade fantástica de prática e aprendizagem do idioma. Recomendo para todos que buscam aprender ou aprimorar o seu inglês.'
  },
  {
    id:7,
    image:leonardo,
    name:'Leonardo',
    state:'Cabedelo',
    comment: 'Primeiramente quero agradecer pela teacher que és. Vejo em você uma teacher que ensina com amor a língua inglesa, que ama o que faz, e tudo isso é transmitido para nós alunos.Falando sobre as aulas, sim, você está ajudando bastante a língua que muitos acham que é difícil, mas de uma forma simples e eficaz você mostra que somos capazes sim, porque além de teacher, você é amiga e nos dá conselhos, como no nosso primeiro dia de encontro. Quem tem um teacher igual a você, ganhou na loteria. Good bless you. Kiss.'
  },

  
]

  return (
    <div className='comentarios'>
      <h1>O que meus alunos falam</h1>
      
      <Carousel className='comments-carrossel'>
     
      {comentarios.map((comentario)=>(
        <Carousel.Item key={comentario.id}>

          <Image variant="top" src={comentario.image} style={{
            height: '10rem',
            width: '10rem',

            borderRadius: '50%',
            border: '3px solid #3c3b6e',
            margin: '20px 50px'
          }} />
          <h3>{comentario.name}</h3>
          <h5>{comentario.state}</h5>

          <div className='comment-p'>
            <p>{comentario.comment} </p>
          </div>


        </Carousel.Item>
     
      ))}
        </Carousel>

      {/* <Carousel className='comments-carrossel'>
        <Carousel.Item>

          <Image variant="top" src={jaqueline} style={{
            height: '10rem',
            width: '10rem',

            borderRadius: '50%',
            border: '3px solid #3c3b6e',
            margin: '20px 50px'
          }} />
          <h3>Jaqueline</h3>
          <h5>Espírito Santo</h5>

          <div className='comment-p'>
            <p>A cada aprendizado um encanto e a felicidade de poder aprender cada vez mais e melhorar a fluência em Inglês,
              com aulas super descontraídas. </p>
          </div>


        </Carousel.Item>
        <Carousel.Item>
          <Image variant="top" src={grace} style={{
            height: '10rem',
            width: '10rem',
            borderRadius: '50%',
            border: '3px solid #3c3b6e',
            margin: '20px 50px'
          }} />

          <h3>Grace</h3>
          <h5>Fortaleza</h5>
          <div className='comment-p'>
            <p>Fazia 30 anos que não estudava inglês e com apoio dos meus filhos e esposo e por gostar de inglês, resolvi voltar a estudar e com a metodologia da Bíblia facilitou muito o meu aprendizado
              ,eu sabia que não iria ser fácil pois tinha que ter a dedicação mas que eu falo sempre que em cada aula eu aprendo um pouco de inglês e estou muito feliz
              com esse aprendizado.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Image variant="top" src={ellenerica} style={{
            height: '10em',
            width: '10rem',
            borderRadius: '50%',
            border: '3px solid #3c3b6e',
            margin: '20px 50px'
          }} />
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
          <Image variant="top" src={flaviana} style={{
            height: '10rem',
            width: '10rem',
            borderRadius: '50%',
            border: '3px solid #3c3b6e',
            margin: '20px 50px'
          }} />
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
          <Image variant="top" src={netto} style={{
            height: '10rem',
            width: '10rem',
            borderRadius: '50%',
            border: '3px solid #3c3b6e',
            margin: '20px 50px'
          }} />
          <h3>José Netto</h3>
          <h5>Campina Grande</h5>
          <div className='comment-p'>
            <p >
              Eu comecei o curso para aprimorar o meu inglês, o curso ajudou muito a melhorar minha fala e
              a minha escrita, assim como a minha comunicação que está mais natural,
              esse curso é muito bom e vai me ajudar a realizar o sonho de estudar no exterior.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Image variant="top" src={joalisson} style={{
            height: '10rem',
            width: '10rem',
            borderRadius: '50%',
            border: '3px solid #3c3b6e',
            margin: '20px 50px'
          }} />
          <h3>Joalisson Douglas </h3>
          <h5>João Pessoa</h5>
          <div className='comment-p'>
            <p >
              As aulas estão me ajudando muito a ganhar confiança para falar inglês.
              As aulas são dinâmicas e são uma oportunidade fantástica de prática e aprendizagem do idioma.
              Recomendo para todos que buscam aprender ou aprimorar o seu inglês.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <Image variant="top" src={leonardo} style={{
            height: '10rem',
            width: '10rem',
            borderRadius: '50%',
            border: '3px solid #3c3b6e',
            margin: '20px 50px'
          }} />
          <h3>Leonardo Albuquerque </h3>
          <h5>Cabedelo</h5>
          <div className='comment-p'>
            <p >
              Primeiramente quero agradecer pela teacher que és. Vejo em você uma teacher que ensina com amor a língua inglesa,
              que ama o que faz, e tudo isso é transmitido para nós alunos.Falando sobre as aulas, sim, você está ajudando bastante a
              língua que muitos acham que é difícil, mas de uma forma simples e eficaz você mostra que somos capazes sim, porque além de teacher,
              você é amiga e nos dá conselhos, como no nosso primeiro dia de encontro. Quem tem um teacher igual a você, ganhou na loteria.
              Good bless you. Kiss.
            </p>
          </div>
        </Carousel.Item>

      </Carousel> */}

    </div>
  )
}

export default Comentarios