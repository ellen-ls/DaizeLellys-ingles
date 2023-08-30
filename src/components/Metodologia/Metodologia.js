import React from 'react'
import Card from 'react-bootstrap/Card';
import './Metodologia.css'
import { Col, Container, Row } from 'react-bootstrap';
import negocios from './Img/negocios.png'
import personalizado from './Img/personalizado.png'
import musica from './Img/musica.png'
import biblia from './Img/biblia.png'
import conversa from './Img/conversa.png'
import estrangeiro from './Img/estrangeiro.png'


const Metodologia = () => {
  return (
    <div className='metodologia'>
            
            <h1>Metodologia e Material</h1>
            <Container className='container-metodologia' style={{width:'80%'}}>
                <Row className='row-container'>
                    <Col>  
                    <Card style={{ width: '15rem',height:'30rem', textAlign:'center',margin:'10px 0 20px 0'}} className='card-metodologia'>
                        <Card.Img variant="top" src={personalizado} style={{height:'10rem'}}/>
                        <Card.Body>
                            <Card.Title style={{fontSize:'18px'}} className='linha'>Estudos personalizados </Card.Title>
                            <Card.Text style={{fontSize:'15px'}}>
                            Nossa abordagem personalizada começa com uma avaliação cuidadosa 
                            do seu nível de conhecimento e dos seus interesses pessoais. 
                            Com base nisso, criamos aulas sob medida para atender ao seu estilo de aprendizado individual." 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem',height:'30rem', textAlign:'center', margin:'10px 0 20px 0'}} className='card-metodologia-1'>
                            <Card.Img variant="top" src={biblia} style={{height:'10rem'}}/>
                            <Card.Body>
                                <Card.Title style={{fontSize:'18px'}} className='linha'>Inglês pela Bíblia</Card.Title>
                                <Card.Text style={{fontSize:'15px'}}>
                                A Bíblia é uma mina de ouro para quem quer aprender inglês, 
                                seja você jovem ou adulto. Tem de tudo: histórias, poesia, música e ensinamentos  profundos.
                                Ao optar por explorar a Bíblia em inglês, você terá acesso a vídeos gratuitos que aprimoram sua 
                                compreensão auditiva e pronúncia, ajudando você a se destacar em conversas.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem',height:'30rem', textAlign:'center', margin:'10px 0 20px 0'}} className='card-metodologia'>
                            <Card.Img variant="top" src={negocios} style={{height:'10rem'}} />
                            <Card.Body>
                                <Card.Title style={{fontSize:'18px'}} className='linha'>Inglês para negócios</Card.Title>
                                <Card.Text style={{fontSize:'15px'}}>
                                Aulas síncronas, formato online, em grupo de até 6 pessoas, suporte com o professor, cronograma de atividades semanal, 
                                feedback semestral e certificado. Aulas de 60 minutos de duração, 1 ou 2 vezes por semana.
                               </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem',height:'30rem', textAlign:'center', margin:'10px 0 20px 0' }} className='card-metodologia-1'>
                            <Card.Img variant="top" src={musica} style={{height:'10rem'}}/>
                            <Card.Body>
                                <Card.Title style={{fontSize:'18px'}} className='linha'>Inglês com música</Card.Title>
                                <Card.Text style={{fontSize:'15px'}}>
                                Nossa abordagem personalizada começa com uma avaliação cuidadosa do seu nível de conhecimento e dos 
                                seus interesses pessoais. Com base nisso, 
                                criamos aulas sob medida para atender ao seu estilo de aprendizado individual." 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem',height:'30rem', textAlign:'center', margin:'10px 0 20px 0' }} className='card-metodologia'>
                            <Card.Img variant="top" src={conversa} style={{height:'10rem'}}/>
                            <Card.Body>
                                <Card.Title style={{fontSize:'18px'}} className='linha'>Conversation classes</Card.Title>
                                <Card.Text style={{fontSize:'15px'}}>
                                A Bíblia é uma mina de ouro para quem quer aprender inglês, seja você jovem ou adulto. 
                                Tem de tudo: histórias, poesia, música e ensinamentos  profundos.
                               Ao optar por explorar a Bíblia em inglês, você terá acesso a vídeos gratuitos que aprimoram sua compreensão 
                               auditiva e pronúncia, ajudando você a se destacar em conversas.

                               </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem',height:'30rem', textAlign:'center', margin:'10px 0 20px 0' }} className='card-metodologia-1'>
                            <Card.Img variant="top" src={estrangeiro} style={{height:'10rem'}} />
                            <Card.Body>
                                <Card.Title style={{fontSize:'18px'}} className='linha'>Português para estrangeiros</Card.Title>
                                <Card.Text style={{fontSize:'15px'}}>
                                Aulas síncronas, formato online, em grupo de até 6 pessoas, suporte com o professor, 
                                cronograma de atividades semanal, feedback semestral e certificado. 
                                Aulas de 60 minutos de duração, 1 ou 2 vezes por semana.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                   
                </Row>
            </Container>

    </div>
  )
}

export default Metodologia
