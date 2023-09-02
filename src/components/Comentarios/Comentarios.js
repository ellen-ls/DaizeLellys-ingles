import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './Comentarios.css'

function Comentarios() {
  return (
    <div className='comentarios'>
        <h1>O que meus alunos falam</h1>

  
            
            <Container className='container-comments'>
      
                <Row className='row-container'>
                      
                    <Col>
                    <Card style={{  width: '15rem',
                            height:'30rem', 
                            textAlign:'center', 
                            margin:'10px 0 20px 0',
                            borderRadius:'10px',
                            background:'rgba( 255, 255, 255, 0.35 )',
                            boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                            backdropFilter:'blur( 13.5px )' }}>
                        <Card.Img variant="top" src={''}  style={{height:'8rem',width:'8rem',borderRadius:'50%', border:'3px solid red',margin:'20px 50px'}} />
                            <Card.Body>
                                <Card.Text style={{fontSize:'14px'}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                               </Card.Text>
                               <hr className='hr-comments'></hr>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem',
                            height:'30rem', 
                            textAlign:'center', 
                            margin:'10px 0 20px 0',
                            borderRadius:'10px',
                            background:'rgba( 255, 255, 255, 0.35 )',
                            boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                            backdropFilter:'blur( 13.5px )' }}>
                        <Card.Img variant="top" src={''}  style={{height:'8rem',width:'8rem',borderRadius:'50%', border:'3px solid red',margin:'20px 50px'}} />
                            <Card.Body>
                                <Card.Text style={{fontSize:'14px'}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                                </Card.Text>
                                <hr className='hr-comments'></hr>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ 
                            width: '15rem',
                            height:'30rem', 
                            textAlign:'center', 
                            margin:'10px 0 20px 0',
                            borderRadius:'10px',
                            background:'rgba( 255, 255, 255, 0.35 )',
                            boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                            backdropFilter:'blur( 13.5px )' }}>
                        <Card.Img variant="top" src={''}  style={{height:'8rem',width:'8rem',borderRadius:'50%', border:'3px solid red',margin:'20px 50px'}} />
                            <Card.Body>
                                <Card.Text style={{fontSize:'14px'}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            
                               </Card.Text>
                               <hr className='hr-comments'></hr>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{  width: '15rem',
                            height:'30rem', 
                            textAlign:'center', 
                            margin:'10px 0 20px 0',
                            borderRadius:'10px',
                            background:'rgba( 255, 255, 255, 0.35 )',
                            boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                            backdropFilter:'blur( 13.5px )' }}>
                        <Card.Img variant="top" src={''}  style={{height:'8rem',width:'8rem',borderRadius:'50%', border:'3px solid red',margin:'20px 50px'}} />
                            <Card.Body>
                                <Card.Text style={{fontSize:'14px'}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                </Card.Text>
                                <hr className='hr-comments'></hr>
                            </Card.Body>
                        </Card>
                    </Col>
                   
                   
                </Row>
            </Container>
      
    </div>
  )
}

export default Comentarios