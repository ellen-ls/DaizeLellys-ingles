import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import negocios from '../Metodologia/Img/negocios.png'
import musica from '../Metodologia/Img/musica.jpeg'
import conversa from '../Metodologia/Img/conversa.png'
import estrangeiro from '../Metodologia/Img/estrangeiro.png'
import './Cursos.css'

const Cursos = () => {
  return (
    <div className='cursos'>

<h1>Cursos Complementares</h1>
            
            <Container className='container-cursos' style={{width:'100%'}}>
                <Row className='row-container'>
                      
                    <Col>
                        <Card style={{ width: '16rem',height:'35rem', margin:'10px 0 20px 0', borderRadius:'10px', backgroundColor:'#b22234', color:'#fff'}} className='card-cursos'>
                            <Card.Img variant="top" src={negocios} style={{height:'10rem'}} />
                            <Card.Body>
                                <Card.Title style={{fontSize:'17px'}} className='linha'>Inglês para negócios</Card.Title>
                                <Card.Text style={{fontSize:'14px', textAlign:'left'}}>
                                É uma modalidade específica e se concentra no aprendizado do vocabulário para o meio empresarial.
                                <br></br>
                                Ou seja, é mais formal e é usado como uma ferramenta de linguagem para negócios, mais técnica e adequada ao contexto profissional. 
                                <br></br>
                                Além disso, o estudo do Business English parte de um conhecimento prévio do idioma, pelo menos a partir do intermediário.
                               </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '16rem',height:'35rem', margin:'10px 0 20px 0',borderRadius:'10px',backgroundColor:'#3c3b6e', color:'#fff' }} className='card-cursos'>
                            <Card.Img variant="top" src={musica} style={{height:'10rem'}}/>
                            <Card.Body>
                                <Card.Title style={{fontSize:'17px'}} className='linha'>Inglês com música</Card.Title>
                                <Card.Text style={{fontSize:'14px', textAlign:'left'}}>
                                Você já parou para pensar em como a música é poderosa? Ouvir música é algo que a maioria de nós gosta muito e faz com enorme frequência.
                                <br></br>
                                Só o fato de ouvirmúsicas em inglês já te ajudará a ter mais contato com o idioma e você terá a oportunidade de aumentar (e muito!) o seu vocabulário. 
                                <br></br>
                                Mesmo sendo  iniciante, você aprenderá muito vocabulário e pronúncia. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '16rem',height:'35rem', margin:'10px 0 20px 0',borderRadius:'10px', backgroundColor:'#b22234', color:'#fff'}} className='card-cursos'>
                            <Card.Img variant="top" src={conversa} style={{height:'10rem'}}/>
                            <Card.Body>
                                <Card.Title style={{fontSize:'17px'}} className='linha'>Conversation classes</Card.Title>
                                <Card.Text style={{fontSize:'14px',textAlign:'left',}}>
                                Nossas aulas de conversação  diferem de uma aula convencional porque o foco, dessa vez, está em falar inglês. 
                                <br></br>
                                Nosso curso prepara você para conversar sobre qualquer assunto. Assim, você estará pronto para uma entrevista de emprego, 
                                uma reunião com parceiros estrangeiros ou mesmo um bate-papo com um novo amigo que não é brasileiro. 
                                <br></br>
                                À medida que você pratica inglês conversação, vai se sentindo mais seguro para essas situações.

                               </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '16rem',height:'35rem', margin:'10px 0 20px 0',borderRadius:'10px',backgroundColor:'#3c3b6e', color:'#fff' }} className='card-cursos'>
                            <Card.Img variant="top" src={estrangeiro} style={{height:'10rem'}} />
                            <Card.Body>
                                <Card.Title style={{fontSize:'17px'}} className='linha'>Português para estrangeiros</Card.Title>
                                <Card.Text style={{fontSize:'14px', textAlign:'left'}}>
                                Nosso curso objetiva proporcionar a estrangeirosa oportunidade de aprender Português, como se fala no Brasil, de maneira simples e clara. 
                                <br></br>
                                Usamos situações do dia-a-dia, bem como músicas e séries, deixando o aprendizado dinâmico e funcional.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                   
                </Row>
            </Container>
      
    </div>
  )
}

export default Cursos
