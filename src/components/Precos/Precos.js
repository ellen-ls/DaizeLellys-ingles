import React from 'react'
import './Precos.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import vip from './img/vip.png'
import grupo from './img/grupo-3.png'
import grupos from './img/grupos.png'
import consultoria from './img/consultoria.png'

function Precos() {
    return (
        <div className='valores'>
            <h1 className='valores-h1'>Conheça </h1> <h1>nossos melhores planos para você</h1>
            <Container className='container-valores' style={{ width: '100%' }}>
                <Row>
                    <Col className='card-valores'>

                        <img variant="top" src={vip} style={{ height: '15rem', borderRadius: '10px', marginBottom:'20px' }} />

                    </Col>

                    <Col className='linha' style={{paddingBottom:'50px' }}>
                        <h2 style={{ fontSize: '18px', backgroundColor: '#3c3b6e', color: '#fff', padding: '5px 0', textAlign: 'center' }} className='linha'>VIP</h2>
                        <p style={{ fontSize: '15px', textAlign: 'left'}}>
                            Aulas ao vivo (síncronas), formato online, individual, suporte com o professor, plano de estudo semanal feedback semestral e certificado.
                            Aulas de 60 minutos de duração.

                        </p>
                        <p className='text-valores'>
                            Módulo por 6x R$397.00.
                        </p>
                        <button href='https://api.whatsapp.com/send?phone=5583999220306&text=Olá,+Quero+contratar+o+plano+individual%21' target='blank' className='link-valores'>Contrate-me</button>

                    </Col>
                    <Col className='card-valores'>

                        <img variant="top" src={grupo} style={{ height: '15rem', borderRadius: '10px', marginBottom:'20px' }} />


                    </Col>

                    <Col className='linha' style={{paddingBottom:'50px' }}>
                        <h2 style={{ fontSize: '18px', backgroundColor: '#3c3b6e', color: '#fff', padding: '5px 0', textAlign: 'center' }}>Grupos até 3 pessoas</h2>
                        <p style={{ fontSize: '15px', textAlign: 'left' }}>
                            Aulas ao vivo (síncronas), formato online,  até 3 pessoas, suporte com o professor, plano de estudo semanal feedback semestral e certificado.
                            Aulas de 60 minutos de duração.
                        </p>
                        <p className='text-valores'>
                            Módulo por 6x R$297.00 por pessoa.
                        </p>
                        <button href='https://api.whatsapp.com/send?phone=5583999220306&text=Olá,+Quero+contratar+o+plano+de+até+3+pessoas%21' target='blank' className='link-valores'>Contrate-me</button>

                    </Col>
                    <Col className='card-valores'>

                        <img variant="top" src={grupos} style={{ height: '15rem', borderRadius: '10px', marginBottom:'20px' }} />


                    </Col>

                    <Col className='linha' style={{paddingBottom:'50px' }}>

                        <h2 style={{ fontSize: '18px', backgroundColor: '#3c3b6e', color: '#fff', padding: '5px 0', textAlign: 'center' }} >Grupos</h2>
                        <p style={{ fontSize: '15px', textAlign: 'left' }}>
                            Aulas ao vivo (síncronas), formato online, grupos de 5 a 10 pessoas, suporte com o professor, plano de estudo semanal feedback semestral e certificado.
                            Aulas de 60 minutos de duração.

                        </p>
                        <p className='text-valores'>
                            Módulo por  6x R$197.00 por pessoa.
                        </p>
                        <button href='https://api.whatsapp.com/send?phone=5583999220306&text=Olá,+Quero+contratar+o+plano+de+5+ou+mais+pessoas%21' target='blank' className='link-valores' >Contrate-me</button>


                    </Col>
                    <Col className='card-valores'>

                        <img variant="top" src={consultoria} style={{ height: '15rem', borderRadius: '10px', marginBottom:'20px' }} />


                    </Col>

                    <Col className='linha' style={{paddingBottom:'50px' }}>

                        <h2 style={{ fontSize: '18px', backgroundColor: '#3c3b6e', color: '#fff', padding: '10px 0', textAlign: 'center'}} >Consultoria avaliativa</h2>
                        <p style={{ fontSize: '15px', textAlign: 'left' }}>
                            Pense numa conversa só pra você. A gente chama de Consultoria Avaliativa. Ela ajuda a entender o que você precisa e montar um plano de estudo perfeito.
                            Com isso, os resultados que você quer,estarão ao seu alcance como nunca antes.Deixe-nos ajudá-lo a trilhar o caminho para o sucesso que você busca.

                        </p>
                        <p className='text-valores'>
                            A partir de R$200,00.
                        </p>
                        <button href='https://api.whatsapp.com/send?phone=5583999220306&text=Olá,+Gostaria+de+uma+consultoria+avaliativa%21' target='blank' className='link-valores'>Contrate-me</button>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Precos