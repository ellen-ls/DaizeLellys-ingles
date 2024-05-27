import React from 'react'
import './Metodologia.css'
import { Col, Container, Row } from 'react-bootstrap';
import wallpaper from './Img/wallpaper.jpeg'

import ReactPlayer from 'react-player/youtube'

import 'animate.css';

const Metodologia = () => {

  return (

    <div className='metodologia'>

      <h1 className="animate__animated animate__fadeInRight">Como minhas aulas funcionam</h1>
      <p className="animate__animated animate__fadeInRight">Aprenda fora da caixa de modo simples e divertido</p>
      <Container fluid className='text-biblia'>
        <Row>
          <Col sm={6} className='video-youtube-metodologia'>
            <ReactPlayer 
              className='react-player'
              url='https://www.youtube.com/embed/Dwpj0o5RU1w?si=bJKiyY_KqukPRMKR'
              width='100%'
              height='100%'
              light={
                <img src={wallpaper} alt='wallpaper' width="100%" height='100%'/>
            }
              controls
              allowfullscreen>
            </ReactPlayer>
                         
          </Col>
          
           <Col sm={6}> 
           <p className='text1 animate__animated animate__fadeInRight'>Considerando que o aluno já conhece a Bíblia em seu próprio idioma, aplicaremos o princípio pedagógico em que ele parte do que lhe é 'conhecido e familiar' como ponte para a construção de um novo conhecimento.
            Mesmo sendo iniciante, ou tendo estudado inglês, mas não falando, se sentirá mais confiante e tranquilo para discorrer sobre o que já conhece naturalmente.
            <br></br>
            Em nossa metodologia seguimos um programa que mescla e desenvolve as quatro principais habilidade para o aprendizado
            de uma língua estrangeira (ouvir, falar, ler e escrever), enfatizando, porém, a conversação desde o primeiro dia de aula.
            <br></br>
            Utilizamos também o recurso da música para ensinar e ajudar aos alunos a memorizar versículos da Bíblia, aumentando assim, consideravelmente seu vocabulário.
          </p>
          <a href='#curso'><button className='button-ingles'>Veja nossos cursos</button></a>
          </Col>
        </Row>
      </Container>

    </div>

  )
}

export default Metodologia
