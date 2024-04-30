import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Youtube.css'


export const Youtube = () => {

    return (
        <div className='youtube-sessao'>
            <h1>Últimas do Meu Canal</h1>
            <Container >
                <Row className='youtube-container'>
                    <Col className='youtube-videos'>
                        <iframe
                            width="300"
                            height="300"
                            src="https://www.youtube-nocookie.com/embed/LfaR1b6Gqiw?si=9171ZwDjZz1n_SjS&amp;controls=0"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen='true'>
                        </iframe>
                        <span>Evoluir o Inglês em pouco tempo</span>
                    </Col>
                    
                               
               
                <Col className='youtube-videos'>
                        <iframe
                            width="300"
                            height="300"
                            src="https://www.youtube-nocookie.com/embed/tzSFM0QHlK0?si=TPGzafi38uOVsv3x&amp;controls=0"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen='true'>
                        </iframe>
                        <span>Persistência é a chave para a fluência </span>
                    </Col>
               
                <Col className='youtube-videos'>
                        <iframe
                            width="300"
                            height="300"
                            src="https://www.youtube-nocookie.com/embed/2ydcpSy4f2A?si=gFvxqvXM7idyPzu0&amp;controls=0"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen='true'>
                        </iframe>
                        <span>Aprenda Inglês em apenas 20 minutos</span>
                    </Col> 
                </Row>
            </Container>
          
            
            <div className='div-button'>
                <a href='https://www.youtube.com/DaizeLellyssuaprofessoraforadacaixa' target='blank'><button className='button-youtube'>Acesse meu canal para mais vídeos</button></a>
            </div>

        </div>
    )
}
