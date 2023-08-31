import React from 'react'
import './Precos.css'
import {Card, Col, Container, Row } from 'react-bootstrap'
import vip from './img/vip.png'
import grupo from './img/grupo-3.png'
import grupos from './img/grupos.png'
import consultoria from './img/consultoria.png'

function Precos() {
    return (
        <div className='valores'>
            <h1>Preços</h1>
            <Container className='container-valores' style={{ width: '100%'}}>
                <Row>
                    <Col>
                        <Card style={{width:'14rem',height: '40rem', textAlign: 'center',border:'none'}} className='card-valores'>
                            <Card.Img variant="top" src={vip} style={{ height: '15rem'}} />
                            <Card.Body className='body-precos'>
                                <Card.Title style={{ fontSize: '18px' }} className='linha'>Individual </Card.Title>
                                <Card.Text style={{ fontSize: '15px' }}>
                                    Aulas síncronas, formato online, individual, suporte com o professor, plano de estudo semanal feedback semestral e certificado.
                                    Aulas de 60 minutos de duração.

                                </Card.Text>
                                <Card.Text className='text-valores'>
                                    Semestre por 6x 397.00.
                                </Card.Text>
                                <Card.Link href="#" className='link-valores'>Contrate-me</Card.Link>
                           </Card.Body>
                     
                        </Card>
                    </Col>
                    <Col className='col-valores'>
                        <Card style={{width:'14rem', height: '40rem', textAlign: 'center', border:'none' }} className='card-valores'>
                            <Card.Img variant="top" src={grupo} style={{ height: '15rem'}} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '18px' }} className='linha'>Grupos até 3 pessoas</Card.Title>
                                <Card.Text style={{ fontSize: '15px' }}>
                                    Aulas síncronas, formato online,  até 3 pessoas, suporte com o professor, plano de estudo semanal feedback semestral e certificado.
                                    Aulas de 60 minutos de duração.
                                </Card.Text>
                                <Card.Text className='text-valores'>
                                    Semestre por 6x 297.00 por pessoa.
                                </Card.Text>
                                <Card.Link href="#" className='link-valores'>Contrate-me</Card.Link>
                            </Card.Body>
                           
                        </Card>
                    </Col>
                    <Col className='col-valores'>
                        <Card style={{width:'14rem',height:'40rem', textAlign: 'center', border:'none' }} className='card-valores'>
                            <Card.Img variant="top" src={grupos} style={{ height: '15rem'}} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '18px' }} className='linha'>Grupos</Card.Title>
                                <Card.Text style={{ fontSize: '15px' }}>
                                    Aulas síncronas, formato online, grupos de 5 a 10 pessoas, suporte com o professor, plano de estudo semanal feedback semestral e certificado.
                                    Aulas de 60 minutos de duração.

                                </Card.Text>
                               <Card.Text className='text-valores'>
                                   Semestre por  6x 197.00 por pessoa.
                                </Card.Text>
                                <Card.Link href="#"className='link-valores' >Contrate-me</Card.Link>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col className='col-valores'>
                        <Card style={{width:'14rem', height: '45rem', textAlign: 'center', border:'none' }} className='card-valores'>
                            <Card.Img variant="top" src={consultoria} style={{ height: '15rem'}} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '18px' }} className='linha'>Consultoria avaliativa</Card.Title>
                                <Card.Text style={{ fontSize: '15px' }}>
                                    Pense numa conversa só pra você. A gente chama de Consultoria Avaliativa. Ela ajuda a entender o que você precisa e montar um plano de estudo perfeito.
                                    Com isso, os resultados que você quer,estarão ao seu alcance como nunca antes.Deixe-nos ajudá-lo a trilhar o caminho para o sucesso que você busca.

                                </Card.Text>
                                <Card.Text className='text-valores'>
                                    A partir de 200,00.
                                </Card.Text>
                                <Card.Link href="#" className='link-valores'>Contrate-me</Card.Link>
                            </Card.Body>
                           
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Precos