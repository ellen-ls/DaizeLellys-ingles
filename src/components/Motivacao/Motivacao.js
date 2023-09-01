import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dinheiro from './img/ganhar-dinheiro.jpg';
import interagir from './img/interagir.jpg';
import viajar from './img/viagem.jpg';
import explorar from './img/explorar-conhecimento.jpg';
import cantar from './img/cantar.jpg';
import intercambio from './img/intercambio.jpg';
import './motivacao.css'
import { Figure, Image } from 'react-bootstrap';


function Motivacao() {
    return (
        <div className='motivacao'>
            <h3>QUAL SUA MOTIVAÇÃO?</h3>
            <h1>Por que falar inglês?</h1>
            <Container className='container-motivacao'>
                <Row className='row-container'>
                    <Col>
                        <Figure>
                            <Image
                            width={100}
                            height={100}
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
                            width={100}
                            height={100}
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
                            width={100}
                            height={100}
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
                            width={100}
                            height={100}
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
                            width={100}
                            height={100}
                            roundedCircle
                            src={explorar}
                            />
                            <Figure.Caption>
                            Cantar em inglês
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                    <Figure>
                            <Image
                            width={100}
                            height={100}
                            roundedCircle
                            src={explorar}
                            />
                            <Figure.Caption>
                                Morar/Estudar
                                /Trabalhar no exterior
                            </Figure.Caption>
                        </Figure>
                    </Col>

                </Row>
                <button className='button-motivacao'><a href='https://api.whatsapp.com/send?phone=5583999220306&text=Quero+agendar+uma+aula+experimental%21' target='blank'>Clique aqui para agendar uma aula experimental</a></button>
            </Container>




        </div>
    )
}

export default Motivacao