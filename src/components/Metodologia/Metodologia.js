import React from 'react'
import './Metodologia.css'
import { Col, Container, Row } from 'react-bootstrap';

const Metodologia = () => {

  return (

    <div className='metodologia'>


      <h1>Como minhas aulas funcionam</h1>
      <p>Aprenda fora da caixa de modo simples e divertido</p>
      <Container className='text-biblia'>
        <Row>
          <Col className='video-youtube-metodologia'>
            <iframe
              height="315"
              width="360"
              src="https://www.youtube.com/embed/Dwpj0o5RU1w?si=bJKiyY_KqukPRMKR"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </Col>
          <Col> <p className='text1'>Considerando que o aluno já conhece a Bíblia em seu próprio idioma, aplicaremos o princípio pedagógico em que ele parte do que lhe é 'conhecido e familiar' como ponte para a construção de um novo conhecimento.
            Mesmo sendo iniciante, ou tendo estudado inglês, mas não falando, se sentirá mais confiante e tranquilo para discorrer sobre o que já conhece naturalmente.

            <br></br>
            Em nossa metodologia seguimos um programa que mescla e desenvolve as quatro principais habilidade para o aprendizado
            de uma língua estrangeira (ouvir, falar, ler e escrever), enfatizando, porém, a conversação desde o primeiro dia de aula.
            <br></br>
            Utilizamos também o recurso da música para ensinar e ajudar aos alunos a memorizar versículos da Bíblia, aumentando assim, consideravelmente seu vocabulário.
          </p>

          </Col>

        </Row>


      </Container>
      <div className='div-button'>
      <a href='#curso'><button className='button-ingles'>Veja nossos cursos</button></a>
      </div>


    </div>

  )
}

export default Metodologia
