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
            <h1>Conheça nossos melhores planos para você</h1>
            <Container className='container-valores' style={{ width: '100%'}}>
                <Row>
                    <Col>
                        <Card style={{width:'14rem',height: '40rem', textAlign: 'center',border:'none', backgroundColor:'transparent'}} className='card-valores'>
                            <Card.Img variant="top" src={vip} style={{ height: '15rem', borderRadius:'10px'}} />
                            <Card.Body className='body-precos'>
                                <Card.Title style={{ fontSize: '18px', backgroundColor:'#3c3b6e', color:'#fff', padding:'5px 0'}} className='linha'>VIP</Card.Title>
                                <Card.Text style={{ fontSize: '15px', textAlign:'left'}}>
                                    Aulas ao vivo (síncronas), formato online, individual, suporte com o professor, plano de estudo semanal feedback semestral e certificado.
                                    Aulas de 60 minutos de duração.

                                </Card.Text>
                                <Card.Text className='text-valores'>
                                    Módulo por 6x R$397.00.
                                </Card.Text>
                                <Card.Link href='https://api.whatsapp.com/send?phone=5583999220306&text=Olá,+Quero+contratar+o+plano+individual%21' target='blank' className='link-valores'>Contrate-me</Card.Link>
                           </Card.Body>
                     
                        </Card>
                    </Col>
                    <Col className='col-valores'>
                        <Card style={{width:'14rem', height: '40rem', textAlign: 'center', border:'none', backgroundColor:'transparent' }} className='card-valores'>
                            <Card.Img variant="top" src={grupo} style={{ height: '15rem', borderRadius:'10px'}} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '18px',backgroundColor:'#3c3b6e', color:'#fff', padding:'5px 0'}} className='linha'>Grupos até 3 pessoas</Card.Title>
                                <Card.Text style={{ fontSize: '15px', textAlign:'left'}}>
                                    Aulas ao vivo (síncronas), formato online,  até 3 pessoas, suporte com o professor, plano de estudo semanal feedback semestral e certificado.
                                    Aulas de 60 minutos de duração.
                                </Card.Text>
                                <Card.Text className='text-valores'>
                                Módulo por 6x R$297.00 por pessoa.
                                </Card.Text>
                                <Card.Link href='https://api.whatsapp.com/send?phone=5583999220306&text=Olá,+Quero+contratar+o+plano+de+até+3+pessoas%21' target='blank' className='link-valores'>Contrate-me</Card.Link>
                            </Card.Body>
                           
                        </Card>
                    </Col>
                    <Col className='col-valores'>

                        <Card style={{width:'14rem',height:'40rem', textAlign: 'center', border:'none', backgroundColor:'transparent' }} className='card-valores'>

                            <Card.Img variant="top" src={grupos} style={{ height: '15rem', borderRadius:'10px'}} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '18px',backgroundColor:'#3c3b6e', color:'#fff', padding:'5px 0'}} className='linha'>Grupos</Card.Title>
                                <Card.Text style={{ fontSize: '15px', textAlign:'left'}}>
                                    Aulas ao vivo (síncronas), formato online, grupos de 5 a 10 pessoas, suporte com o professor, plano de estudo semanal feedback semestral e certificado.
                                    Aulas de 60 minutos de duração.

                                </Card.Text>
                               <Card.Text className='text-valores'>
                               Módulo por  6x R$197.00 por pessoa.
                                </Card.Text>
                                <Card.Link href='https://api.whatsapp.com/send?phone=5583999220306&text=Olá,+Quero+contratar+o+plano+de+5+ou+mais+pessoas%21' target='blank' className='link-valores' >Contrate-me</Card.Link>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                    <Col className='col-valores'>
                        <Card style={{width:'14rem', height: '45rem', textAlign: 'center', border:'none', backgroundColor:'transparent' }} className='card-valores'>
                            <Card.Img variant="top" src={consultoria} style={{ height: '15rem', borderRadius:'10px'}} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '18px',backgroundColor:'#3c3b6e', color:'#fff', padding:'5px 0' }} className='linha'>Consultoria avaliativa</Card.Title>
                                <Card.Text style={{ fontSize: '15px', textAlign:'left'}}>
                                    Pense numa conversa só pra você. A gente chama de Consultoria Avaliativa. Ela ajuda a entender o que você precisa e montar um plano de estudo perfeito.
                                    Com isso, os resultados que você quer,estarão ao seu alcance como nunca antes.Deixe-nos ajudá-lo a trilhar o caminho para o sucesso que você busca.

                                </Card.Text>
                                <Card.Text className='text-valores'>
                                    A partir de R$200,00.
                                </Card.Text>
                                <Card.Link href='https://api.whatsapp.com/send?phone=5583999220306&text=Olá,+Gostaria+de+uma+consultoria+avaliativa%21' target='blank' className='link-valores'>Contrate-me</Card.Link>
                            </Card.Body>
                           
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Precos