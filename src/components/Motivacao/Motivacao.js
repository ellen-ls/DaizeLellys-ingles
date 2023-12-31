import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dinheiro from './img/ganhar-dinheiro.png';
import interagir from './img/interagir.png';
import viajar from './img/viagem.png';
import explorar from './img/conhecimento.png';
import cantar from './img/cantar.png'
import intercambio from './img/intercambio.png'
import './motivacao.css';

import { Figure, Image } from 'react-bootstrap';


function Motivacao() {
    return (
        <div className='motivacao'>
            
            <h1 className='motivacao-h1'>Por que</h1><h1>falar inglês?</h1>

            <p className='text-motivacao'>Nossa abordagem personalizada começa com uma avaliação cuidadosa do seu nível de conhecimento e dos seus interesses pessoais.
            <br></br>
            Com base nisso, criamos aulas sob medida para atender ao seu estilo de aprendizado.</p>
            <Container className='container-motivacao'>
                <Row className='row-container'>
                    <Col>
                        <Figure>
                            <Image
                            width={120}
                            height={120}
                            roundedCircle
                            src={dinheiro}
                                
                            />
                            <Figure.Caption>
                                Ganhar Melhor
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                        <Figure>
                            <Image
                            width={120}
                            height={120}
                            roundedCircle
                                src={interagir}
                            />
                            <Figure.Caption>
                                Interagir com outras Culturas
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                        <Figure>
                            <Image
                            width={120}
                            height={120}
                            roundedCircle
                            src={viajar}
                            />
                            <Figure.Caption>
                                Viajar com mais segurança
                                e aproveitamento
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                        <Figure>
                            <Image
                            width={120}
                            height={120}
                            roundedCircle
                            src={explorar}
                            />
                            <Figure.Caption>
                                Explorar
                                Conhecimento
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                    <Figure>
                            <Image
                            width={120}
                            height={120}
                            roundedCircle
                            src={cantar}
                            />
                            <Figure.Caption>
                            Cantar em inglês
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                    <Figure>
                            <Image
                            width={120}
                            height={120}
                            roundedCircle
                            src={intercambio}
                            />
                            <Figure.Caption>
                                Morar/Estudar
                                /Trabalhar no exterior
                            </Figure.Caption>
                        </Figure>
                    </Col>

                </Row>
                
            </Container>
            
            <div className='div-button'>
            <button className='button-motivacao'><a href='https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21' target='blank'>Clique aqui para agendar uma aula experimental</a></button>
            </div>


        </div>
    )
}

export default Motivacao