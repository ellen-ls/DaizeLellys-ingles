import React from 'react'
import { Accordion, Card, Col, Container, Row} from 'react-bootstrap'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import biblia from '../Metodologia/Img/ingles-atraves-da-biblia.jpeg'
import viagens from '../Metodologia/Img/viagens.png'
import negocios from '../Metodologia/Img/negocios.png'
import musica from '../Metodologia/Img/musica.jpeg'
import conversa from '../Metodologia/Img/conversa.png'
import estrangeiro from '../Metodologia/Img/estrangeiro.png'
import './Cursos.css'

const Cursos = () => {

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
          console.log('totally custom!'),
        );
      
        return (
          <span
            type="button"
            style={{ 
                backgroundColor: 'transparent',
                margin:'5px 0',
                color:'#fff',
                borderBottom:'1px solid #fff',
                fontSize:'12px',
                fontStyle:'oblique',
                fontWeight:'200'
                
             }}
            onClick={decoratedOnClick}
          >
            {children}
          </span>
        );
      }


    const cursos = [{
        id: 1,
        image: biblia,
        title: 'Inglês através da Bíblia',
        text: ' Você já pensou em estudar inglês ouvindo, lendo a Bíblia e ainda cantando seus versículos? Este projeto traz uma abordagem cristã de ensino da Língua Inglesa que utiliza áudios, textos da Bíblia, informações bíblicas e apropria Bíblia em inglês, como veículo para o ensino. Uma ótima oportunidade de aprender inglês e ao mesmo tempo conhecer melhor este LIVRO tão rico.'
    },
    {
        id: 2,
        image: viagens,
        title: 'Inglês para Viagens',
        text: 'Prepare-se para suas viagens com nosso curso de inglês especializado (Travel Course). No primeiro módulo, abordamos situações essenciais, como aeroporto, avião e alfândega, para tornar o início de sua jornada tranquilo. No segundo módulo, focamos em aspectos práticos, desde reservas de hotel até refeições em restaurantes locais e exploração da cidade. Com nossos instrutores experientes, você desenvolverá as habilidades linguísticas necessárias para uma experiência de viagem mais suave. Junte-se a nós e ganhe confiança para explorar o mundo!"'
    },
    {
        id: 3,
        image: negocios,
        title: 'Inglês para Negócios',
        text: 'É uma modalidade específica e se concentra no aprendizado do vocabulário para o meio empresarial. Ou seja, é mais formal e é usado como uma ferramenta de linguagem para negócios, mais técnica e adequada ao contexto profissional. Além disso, o estudo do Business English parte de um conhecimento prévio do idioma, pelo menos a partir do intermediário.'
    },
    {
        id: 4,
        image: musica,
        title: 'Inglês com Música',
        text: 'Você já parou para pensar em como a música é poderosa? Ouvir música é algo que a maioria de nós gosta muito e faz com enorme frequência. Só o fato de ouvirmúsicas em inglês já te ajudará a ter mais contato com o idioma e você terá a oportunidade de aumentar (e muito!) o seu vocabulário. Mesmo sendo  iniciante, você aprenderá muito vocabulário e pronúncia. '
    },
    {
        id: 5,
        image: conversa,
        title: 'Conversation Class',
        text: ' Nossas aulas de conversação  diferem de uma aula convencional porque o foco, dessa vez, está em falar inglês. Nosso curso prepara você para conversar sobre qualquer assunto. Assim, você estará pronto para uma entrevista de emprego, uma reunião com parceiros estrangeiros ou mesmo um bate-papo com um novo amigo que não é brasileiro. À medida que você pratica inglês conversação, vai se sentindo mais seguro para essas situações.'
    },
    {
        id: 6,
        image: estrangeiro,
        title: 'Português para Estrangeiros',
        text: 'Nosso curso objetiva proporcionar a estrangeirosa oportunidade de aprender Português, como se fala no Brasil, de maneira simples e clara. Usamos situações do dia-a-dia, bem como músicas e séries, deixando o aprendizado dinâmico e funcional.'
    },
    ]

    return (
        <div className='cursos'>

            <h1>Cursos</h1>

            <Container className='container-cursos' style={{ width: '100%' }} >
                <Row className='row-container'>
                    {cursos.map((curso) => (

                        <Col key={curso.id}>
                            <Card
                                style={{

                                    width: '20rem',
                                    margin: '10px 0 20px 0',
                                    right: '20px',
                                    borderRadius: '5px',
                                    backgroundColor: '#3c3b6e',
                                    color: '#fff',
                                    cursor: 'pointer',
                                }}
                                className='card-cursos'>
                                <Card.Img variant="top" src={curso.image}
                                    style={{
                                        height: '12rem',


                                    }} />

                                <Accordion defaultActiveKey={curso.id} flush
                                    style={{
                                        fontSize: '17px',
                                    }}
                                >
                                    <Accordion.Item eventKey
                                        style={{
                                            backgroundColor: '#3c3b6e',
                                            color: '#fff',


                                        }}
                                    >

                                        <Accordion.Header>
                                            <Card.Title
                                            >{curso.title}
                                            </Card.Title>
                                           
                                        </Accordion.Header>
                                        <CustomToggle eventKey>Mais Detalhes</CustomToggle>
                                        <Accordion.Body
                                            style={{
                                                fontSize: '12px',
                                                textAlign: 'left',

                                            }}>

                                            <Card.Text>
                                                {curso.text}

                                            </Card.Text>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>


                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Cursos
