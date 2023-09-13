import React from 'react'
import './Metodologia.css'
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';




const Metodologia = () => {

  const navigate = useNavigate()

  return (

    <div className='metodologia'>


      <h1>Metodologia</h1>
      <Container className='text-biblia'>
        <Row>
          <Col className='video-youtube-metodologia'>
            <iframe
              height="315"
              width="350"
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
        <button className='button-ingles' onClick={() => (navigate('/cursos'))}>Veja nossos cursos</button>
      </div>


    </div>

  )
}

export default Metodologia
