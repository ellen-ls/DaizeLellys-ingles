import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import dinheiro from './img/ganhar-dinheiro.jpg';
import interagir from './img/interagir.jpg';
import viajar from './img/viagem.jpg';
import explorar from './img/explorar-conhecimento.jpg';
import cantar from './img/cantar.jpg';
import intercambio from './img/intercambio.jpg';
import prova from './img/prova.jpg';
import missionario from './img/missionario.jpg'
import './motivacao.css'


function Motivacao() {
    return (
        <div className='motivacao'>
            <h3>QUAL SUA MOTIVAÇÃO?</h3>
            <h1>Por que falar inglês?</h1>
            <Container className='container-motivacao'>
                <Row className='row-container'>
                    <Col>  
                    <Card style={{ width: '15rem',height:'15rem', textAlign:'center',margin:'10px 0 20px 0'}} className='card-motivacao'>
                        <Card.Img variant="top" src={dinheiro} style={{height:'8rem'}}/>
                        <Card.Body>
                            <Card.Title style={{fontSize:'18px'}}>Ganhar dinheiro</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem',height:'15rem', textAlign:'center', margin:'10px 0 20px 0'}} className='card-motivacao'>
                            <Card.Img variant="top" src={interagir} style={{height:'8rem'}}/>
                            <Card.Body>
                                <Card.Title style={{fontSize:'18px'}}>Interagir com outras Culturas</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem',height:'15rem', textAlign:'center', margin:'10px 0 20px 0'}} className='card-motivacao'>
                            <Card.Img variant="top" src={viajar} style={{height:'8rem'}} />
                            <Card.Body>
                                <Card.Title style={{fontSize:'18px'}}>Viajar com mais segurança e aproveitamento</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem',height:'15rem', textAlign:'center', margin:'10px 0 20px 0' }} className='card-motivacao'>
                            <Card.Img variant="top" src={explorar} style={{height:'8rem'}}/>
                            <Card.Body>
                                <Card.Title style={{fontSize:'18px'}}>Explorar Conhecimento</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem',height:'15rem', textAlign:'center', margin:'10px 0 20px 0' }} className='card-motivacao'>
                            <Card.Img variant="top" src={cantar} style={{height:'8rem'}}/>
                            <Card.Body>
                                <Card.Title style={{fontSize:'18px'}}>Cantar em inglês</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem',height:'15rem', textAlign:'center', margin:'10px 0 20px 0' }} className='card-motivacao'>
                            <Card.Img variant="top" src={intercambio} style={{height:'8rem'}} />
                            <Card.Body>
                                <Card.Title style={{fontSize:'18px'}}>Morar/Estudar/Trabalhar no Exterior</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem',height:'15rem', textAlign:'center', margin:'10px 0 20px 0' }} className='card-motivacao'>
                            <Card.Img variant="top" src={prova} style={{height:'8rem'}}/>
                            <Card.Body>
                                <Card.Title style={{fontSize:'18px'}}>Passar em uma Prova Internacional</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem',height:'15rem', textAlign:'center', margin:'10px 0 20px 0' }} className='card-motivacao'>
                            <Card.Img variant="top" src={missionario} style={{height:'8rem'}}/>
                            <Card.Body>
                                <Card.Title style={{fontSize:'18px'}}>Ser Missionário </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <button className='button-motivacao'><a>Clique aqui para agendar uma aula experimental</a></button>
            </Container>




        </div>
    )
}

export default Motivacao